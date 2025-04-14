import Login from '@/pages/Login'
import Dashboard from '@/pages/dashboard'
import ErrorPage from '@/components/exception/404'
import Layout from '@/Layout/index'

import { Navigate, RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    path: '/user/login',
    Component: Login
  },
  {
    path: '/',
    // element: <Navigate to="/dashboard" />
    Component: Dashboard
  },
  {
    path: '*',
    Component: Layout,
    children: [],
    errorElement: <ErrorPage />
  }
]
