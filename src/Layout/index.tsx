import React from 'react'
// import { Layout as AntdLayout, Menu } from 'antd'
import { Layout as AntdLayout } from 'antd'
// import type { MenuProps } from 'antd'
// const { Header, Sider } = AntdLayout
import Slide from './components/silde/index'
import MainContent from './components/content/index'
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'

// type MenuItem = Required<MenuProps>['items'][number]

// const items: MenuItem[] = [
//   {
//     key: 'sub1',
//     label: 'Navigation One',
//     icon: <MailOutlined />,
//     children: [
//       {
//         key: 'g1',
//         label: 'Item 1',
//         type: 'group',
//         children: [
//           { key: '1', label: 'Option 1' },
//           { key: '2', label: 'Option 2' }
//         ]
//       },
//       {
//         key: 'g2',
//         label: 'Item 2',
//         type: 'group',
//         children: [
//           { key: '3', label: 'Option 3' },
//           { key: '4', label: 'Option 4' }
//         ]
//       }
//     ]
//   },
//   {
//     key: 'sub2',
//     label: 'Navigation Two',
//     icon: <AppstoreOutlined />,
//     children: [
//       { key: '5', label: 'Option 5' },
//       { key: '6', label: 'Option 6' },
//       {
//         key: 'sub3',
//         label: 'Submenu',
//         children: [
//           { key: '7', label: 'Option 7' },
//           { key: '8', label: 'Option 8' }
//         ]
//       }
//     ]
//   },
//   {
//     type: 'divider'
//   },
//   {
//     key: 'sub4',
//     label: 'Navigation Three',
//     icon: <SettingOutlined />,
//     children: [
//       { key: '9', label: 'Option 9' },
//       { key: '10', label: 'Option 10' },
//       { key: '11', label: 'Option 11' },
//       { key: '12', label: 'Option 12' }
//     ]
//   },
//   {
//     key: 'grp',
//     label: 'Group',
//     type: 'group',
//     children: [
//       { key: '13', label: 'Option 13' },
//       { key: '14', label: 'Option 14' }
//     ]
//   }
// ]

const Layout: React.FC = () => {
  return (
    <>
      {/* <AntdLayout style={{ minHeight: '100vh' }}> */}
      {/* <Sider>
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} items={items} />

        <AntdLayout>
          <Header style={{ background: '#fff', padding: 0 }} />
        </AntdLayout>
      
      {/* <Slide /> */}
      {/* </AntdLayout> */}
      <Slide />
      <MainContent />
    </>
  )
}

export default Layout
