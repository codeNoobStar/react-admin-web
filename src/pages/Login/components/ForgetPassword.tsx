import { useRequest } from 'ahooks'
import { useEffect, useState } from 'react'
import loginService from './service'
import { Button, Input, message, Modal } from 'antd'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
}

const ForgetPasswordModal = ({ open, setOpen }: Props) => {
  const [emailInputFocus, setEmailInputFocus] = useState<Boolean>()
  const [checkEmail, setCheckEmail] = useState<string>()

  const { runAsync: sendResetPasswordEmail, loading: resetPasswordBtnLoading } = useRequest(loginService.restPassword, {
    manual: true
  })

  useEffect(() => {
    if (open) {
      setCheckEmail('')
    }
  }, [open])

  const sendCheckEmail = async () => {
    if (!checkEmail) {
      message.error('请输入邮箱')
      return
    }
    console.log('当前行：', 30, '[ checkEmail ] ==>', checkEmail)

    const [error]: any = await sendResetPasswordEmail({ checkEmail })

    if (!error) {
      message.success('发送成功,请查收邮件')
      setOpen(false)
    }
  }

  return (
    <Modal
      title="重置密码"
      open={open}
      footer={null}
      width={400}
      maskClosable={false}
      style={{ top: 240 }}
      onCancel={() => {
        setOpen(false)
      }}
      styles={{
        body: { padding: '20px 0', position: 'relative' }
      }}>
      {!emailInputFocus && (
        <img
          className="absolute top-[-139px] left-[calc(50%-67px)]"
          src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/ad7fa76844a2df5c03151ead0ce65ea6.svg"
        />
      )}
      {emailInputFocus && (
        <img
          className="absolute top-[-139px] left-[calc(50%-67px)]"
          src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/500c1180a96859e5c54a5359f024a397.svg"
        />
      )}
      <Input
        size="large"
        placeholder="请输入邮箱"
        onBlur={() => {
          setEmailInputFocus(false)
        }}
        onFocus={() => {
          setEmailInputFocus(true)
        }}
        onChange={(e) => {
          setCheckEmail(e.target.value)
        }}
        value={checkEmail}
      />
      <Button className="mt-[16px]" type="primary" block onClick={sendCheckEmail} loading={resetPasswordBtnLoading}>
        发送验证邮件
      </Button>
    </Modal>
  )
}

export default ForgetPasswordModal
