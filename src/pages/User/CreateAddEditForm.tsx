import { useRequest } from 'ahooks'
import { Form, FormInstance, Input, message, Radio } from 'antd'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import userService, { type User } from './service'

interface PropsType {
  visible: boolean
  editData?: any
  onSave: () => void
  setSaveLoading: (loading: boolean) => void
}

const CreateAddEditForm: ForwardRefRenderFunction<FormInstance, PropsType> = ({
  //
  setSaveLoading,
  editData,
  onSave
}) => {
  const [form] = Form.useForm()

  const { runAsync: updateUser } = useRequest(userService.updateUser, { manual: true })
  const { runAsync: createUser } = useRequest(userService.createUser, { manual: true })

  const finishHandle = async (values: User) => {
    try {
      setSaveLoading(true)
      if (editData) {
        await updateUser({ ...editData, ...values })
      } else {
        await createUser(values)
        message.success('创建成功')
      }
      onSave()
    } catch (err: any) {
      message.error(err?.response?.data?.message || '创建失败')
    }
    setSaveLoading(false)
  }

  return (
    <>
      <Form
        labelCol={{ sm: { span: 24 }, md: { span: 5 } }}
        wrapperCol={{ sm: { span: 24 }, md: { span: 16 } }}
        form={form}
        onFinish={finishHandle}
        initialValues={editData}>
        <Form.Item
          label="用户名"
          name="userName"
          rules={[
            {
              required: true,
              message: 'jwGPaPNq'
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="昵称"
          name="nickName"
          rules={[
            {
              required: true,
              message: '不能为空'
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="手机号"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: '不能为空'
            },
            {
              pattern: /^(13[0-9]|14[5-9]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[89])\d{8}$/,
              message: '手机号格式不正确'
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            {
              required: true,
              message: '不能为空'
            },
            {
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: '邮箱格式不正确'
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item label="性别" name="sex" initialValue={1}>
          <Radio.Group>
            <Radio value={1}>男</Radio>
            <Radio value={0}>女</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </>
  )
}

// forwardRef 是 React 提供的一个高阶组件，它允许你将 ref 从父组件传递到子组件，
// 从而让父组件可以直接访问子组件的 DOM 节点或实例。通常情况下，ref 是不能直接在函数组件中使用的，
// 因为函数组件没有实例，forwardRef 提供了一种解决方案，使得函数组件也能接收 ref。
export default forwardRef(CreateAddEditForm)
