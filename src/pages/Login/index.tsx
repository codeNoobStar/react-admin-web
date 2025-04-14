import LoginForm from './components/login-form'
import ForgetPasswordModal from './components/ForgetPassword'
import { useState } from 'react'

function Login() {
  const [emailResetPasswordOpen, setEmailResetPasswordOpen] = useState(false)

  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw]">
      <div className="flex justify-center flex-[2.5]">
        <div className="dark:bg-[rgb(33,41,70)] w-[400px] px-[32px] py-[20px] mt-[-12%] bg-white rounded-lg">
          <div className="text-center">
            <div className="flex justify-center gap-2 border-b-blue-100">
              <LoginForm
                onForgetPasswordClick={() => {
                  setEmailResetPasswordOpen(true)
                }}
              />
            </div>
            {/* <div className="text-amber-200">2</div> */}
            <ForgetPasswordModal open={emailResetPasswordOpen} setOpen={setEmailResetPasswordOpen} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
