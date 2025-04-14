import { Button, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import loginService from './service'
import { router } from '@/router'

import CaptchaImg from './CaptchaImg'
import to from 'await-to-js'
import { JSEncrypt } from 'jsencrypt'
import LinkButton from '@/components/link-button'
import { useGlobalStore } from '@/stores/global'

import { IconYanzhengma01 } from '@/assets/icons/yanzhengma01'

/**
 * LoginForm 组件，用于渲染登录表单。
 *
 * @param {} - 目前没有接收任何 props。
 * @returns {JSX.Element} - 返回一个包含登录表单的 JSX 元素。
 */
function LoginForm({ onForgetPasswordClick }: { onForgetPasswordClick: () => void }) {
  const { runAsync: userLogin, loading: userLoading } = useRequest(loginService.userLogin, { manual: true })
  const { data: captcha, refresh: refreshCaptcha, loading: imgCodeLoading } = useRequest(loginService.getImageCode)

  /**
   * 表单提交时的回调函数。
   *
   * @param {any} values - 表单提交时的数据。
   */
  const onFinish = async (values: any) => {
    console.log('当前行：', 28, '[ values ] ==>', values)
    if (!captcha) {
      return
    }

    values.captchaId = captcha?.data.id

    const [error, publicKey] = await to(loginService.getPublicKey())

    if (error) {
      return
    }

    const encrypt = new JSEncrypt()
    encrypt.setPublicKey(publicKey.data)

    const password = encrypt.encrypt(values.password)
    if (!password) {
      return
    }

    values.password = password
    values.publicKey = publicKey.data
    console.log('当前行：', 51, '[ values ] ==>', values)

    const data = await userLogin(values)
    console.log('当前行：', 26, '[ data ] ==>', data)
    useGlobalStore.setState({
      setToken: data?.data?.token,
      setRefreshToken: data?.data?.refreshToken
    })

    router.navigate('/')
  }

  return (
    <Form name="login" initialValues={{ accountNumber: 'admin', password: '123456' }} onFinish={onFinish}>
      <Form.Item name="accountNumber" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input prefix={<UserOutlined />} placeholder="accountNumber" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item name="captcha" rules={[{ required: true, message: '请输入验证码' }]}>
        <Input
          prefix={<IconYanzhengma01 className="text-[20px]" />}
          placeholder="验证码"
          suffix={
            captcha ? <CaptchaImg captcha={captcha} loading={imgCodeLoading} refreshCaptcha={refreshCaptcha} /> : null
          }
        />
      </Form.Item>
      <Form.Item noStyle style={{ marginBottom: 0 }}>
        <div className="text-right mb-[18px]">
          <LinkButton onClick={onForgetPasswordClick}>忘记密码？</LinkButton>
        </div>
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit" loading={userLoading}>
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
