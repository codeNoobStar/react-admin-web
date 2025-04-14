// src/pages/user/service.ts
import axios from 'axios'

export interface Login {
  username: string
  password: string
}


const loginService = {
  // 登录
  userLogin: (data: Login) => {
    return axios.post('/auth/login', data);
  },
  // 获取验证码
  getImageCode: () => {
    return axios.get('/auth/captcha');
  },

  // 获取公钥
  getPublicKey: (): Promise<{ data: string }> => {
    return axios.get('/auth/publicKey')
  },

  // 重置密码
  restPassword: (data: any) => {
    return axios.post('/auth/send/reset/password/email', data);
  }
}

export default loginService;
