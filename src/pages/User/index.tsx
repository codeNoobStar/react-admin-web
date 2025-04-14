import { useAntdTable, useRequest } from 'ahooks'
import { useState, useRef } from 'react'
import userService, { User } from './service'
import { App, Button, Col, Form, Input, Popconfirm, Row, Space, Table, FormInstance, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { ColumnsType } from 'antd/es/table'
import { format } from 'date-fns'
import RCreateAddEditForm from './CreateAddEditForm'

function UserPage() {
  const [form] = Form.useForm()

  const { message } = App.useApp()

  const formRef = useRef<FormInstance>(null)

  const {
    tableProps,
    search: { submit, reset }
  } = useAntdTable(userService.getUserListByPage, { form })
  const { runAsync: deleteUser } = useRequest(userService.deleteUser, { manual: true })

  const [formOpen, setFormOpen] = useState(false)
  const [saveLoading, setSaveLoading] = useState(false)

  const [editData, setEditData] = useState<User | null>(null)

  const columns: ColumnsType<any> = [
    {
      title: '用户名',
      dataIndex: 'userName'
    },
    {
      title: '昵称',
      dataIndex: 'nickName'
    },
    {
      title: '手机号',
      dataIndex: 'phoneNumber'
    },
    {
      title: '邮箱',
      dataIndex: 'email'
    },
    {
      title: '性别',
      dataIndex: 'sex',
      render: (value: number) => (value === 1 ? '男' : '女')
    },
    {
      title: '创建时间',
      dataIndex: 'createDate',
      render: (value: number) => value && format(value, 'YYYY-MM-DD HH:mm:ss')
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record) =>
        record.userName !== 'admin' && (
          <Space size="middle">
            <a
              onClick={() => {
                setEditData(record)
                setFormOpen(true)
              }}>
              编辑
            </a>
            <Popconfirm
              title="警告"
              description="确认删除这条数据？"
              onConfirm={async () => {
                await deleteUser(record.id)
                message.success('删除成功')
                submit()
              }}>
              <a>删除</a>
            </Popconfirm>
          </Space>
        )
    }
  ]

  const openForm = () => {
    setFormOpen(true)
  }

  const saveHandle = () => {
    submit()
    setFormOpen(false)
    setEditData(null)
  }

  const closeForm = () => {
    setFormOpen(false)
    setEditData(null)
  }

  return (
    <>
      <Form onFinish={submit} size="large" className="bg-white p-[24px] rounded-lg">
        <Row gutter={24}>
          <Col className="w-[100%]" lg={24} xl={8}>
            <Form.Item name="nickName" label="昵称">
              <Input onPressEnter={submit} />
            </Form.Item>
          </Col>
          <Col className="w-[100%]" lg={24} xl={8}>
            <Form.Item name="phoneNumber" label="手机号">
              <Input onPressEnter={submit} />
            </Form.Item>
          </Col>
          <Col className="w-[100%]" lg={24} xl={8}>
            <Space>
              <Button onClick={submit} type="primary">
                搜索
              </Button>
              <Button onClick={reset}>清除</Button>
            </Space>
          </Col>
        </Row>
      </Form>
      <div className="mt-[16px] dark:bg-[rgb(33,41,70)] bg-white rounded-lg px-[12px]">
        <div className="py-[16px]">
          <Button onClick={openForm} type="primary" size="large" icon={<PlusOutlined />}>
            新增
          </Button>
        </div>
        <Table rowKey="id" scroll={{ x: true }} columns={columns} {...tableProps}></Table>
      </div>

      <Modal
        title={editData ? '编辑' : '新建'}
        open={formOpen}
        onOk={() => {
          formRef.current?.submit()
        }}
        destroyOnClose
        width={640}
        zIndex={1001}
        onCancel={closeForm}
        confirmLoading={saveLoading}>
        <RCreateAddEditForm
          ref={formRef}
          editData={editData}
          onSave={saveHandle}
          visible={formOpen}
          setSaveLoading={setSaveLoading}
        />
      </Modal>
    </>
  )
}

export default UserPage
