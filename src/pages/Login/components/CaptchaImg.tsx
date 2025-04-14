import { Spin } from 'antd'

interface CaptchaImgProps {
  captcha: any
  loading: boolean
  refreshCaptcha?: () => void
}

const CaptchaImg: React.FC<CaptchaImgProps> = ({ captcha, loading, refreshCaptcha }) => {
  console.log('当前行：', 4, '[ captcha ] ==>', captcha)

  const handleRefreshCaptcha = () => {
    refreshCaptcha && refreshCaptcha()
  }
  return (
    <Spin spinning={loading}>
      <div>
        <img className="cursor-pointer" src={captcha?.data.imageBase64} onClick={handleRefreshCaptcha} />
      </div>
    </Spin>
  )
}

export default CaptchaImg
