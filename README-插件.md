# react-router-dom
> React 应用程序中管理 路由 的库

- 官网:https://reactrouter.com/
- 项目模板： npx create-react-router@latest my-react-router-app
- 安装 https://www.npmjs.com/package/react-router-dom


# ZUSTAND
> 对 Iframe、微前端、模块化、组件化等业务场景，提供跨应用、跨框架的状态管理能力。

- 官网：https://awesomedevin.github.io/zustand-vue/
- 安装和使用 https://awesomedevin.github.io/zustand-vue/docs/introduce/start/zustand

ZUSTAND 咋司特得
devtools 戴维套丝
persist 泼塞司特

refreshToken 瑞福司 token

Redux DevTools  瑞达克斯 dev套丝


# tailwindcss 
> 一个功能强大的 CSS 框架，用于快速构建响应式的用户界面。通过简写 css 就可以实现工作，不用写很多 css 样式，提高开发效率。
- 官网:https://tailwindcss.com/
- 中文官网：https://www.tailwindcss.cn/
- 安装：https://www.tailwindcss.cn/docs/installation

## tips
- tailwindcss 的 3 版本教程 和tailwindcss 的 4 版本 有很多的区别，需要注意。
- 当前项目用的是 tailwindcss--- 4 版本

tailwindcss 泰尔温德CSS 

# tailwind-merge
> 合并 tailwind css 类名，解决样式冲突问题。
- 中文官网：https://www.tailwindcss.cn/
- 安装：https://www.npmjs.com/package/tailwind-merge


# antd
> Ant Design 蚁金服设计团队设计的企业级 UI 和 React 组件库。

- 官网 https://ant-design.antgroup.com/docs/spec/introduce-cn
- 安装 https://ant-design.antgroup.com/docs/react/use-with-vite-cn


# @ant-design/icons
> antd 的图标库
- 官网 https://ant-design.antgroup.com/docs/spec/introduce-cn
- 安装 https://www.npmjs.com/package/@ant-design/icons


# ProComponents
> Ant Design Pro 组件库的 React 实现，提供了丰富的业务组件，如表单、表格、详情页等。

- 官网 https://procomponents.ant.design/
- 安装 https://procomponents.ant.design/docs


# loadsh-es
> 是一个 JavaScript 实用库，提供了许多实用的函数和工具，用于处理数据、操作对象、进行字符串处理等。
> -es 是对应的 ts 版本

- 官网：URL_ADDRESS- 官网：https://www.lodashjs.com/
- 安装：https://www.npmjs.com/package/lodash-es
- 对应需要安装 ts 类型提示包： pnpm i @types/lodash-es -D

# ahooks
> 是一个 React Hooks 库，提供了丰富的 Hooks，如表单、表格、详情页等。
> hooks 是 react 16.8 版本新增的特性，用于解决 react 组件的一些问题，如状态管理、副作用管理、组件复用等。
> 特点是：
> - 纯 Hooks，没有任何依赖
> - 开箱即用，提供了丰富的 Hooks
> - 支持 TypeScript

## tip
- ahooks 是 react 团队维护的 hooks 库，暂时不支持  19.【2025-03-31】

- 官网：https://ahooks.js.org/zh-CN/
- 安装：https://ahooks.js.org/zh-CN/guide
- 官方hooks 示例：https://ahooks.js.org/zh-CN/hooks/use-antd-table
- 三方对 hooks 的使用介绍：https://blog.csdn.net/weixin_42662753/article/details/132322531


# 时间格式化组件

## dayjs
> 是一个轻量级的 JavaScript 日期处理库，提供了丰富的日期处理功能，如日期格式化、日期比较、日期加减等。
> 特点是：
> - 轻量级，只有 7K 大小
> - 支持国际化
> - 支持链式调用
> - 支持自定义插件

- 官网：https://dayjs.fenxianglu.cn/
- 安装：https://dayjs.fenxianglu.cn/category/
  


## date-fns
> 是一个 JavaScript 日期处理库，提供了丰富的日期处理功能，如日期格式化、日期比较、日期加减等。
> 特点是：
> - 轻量级，只有 3KB 大小
> - 支持国际化

- 官网：https://date-fns.org/
- 安装：https://www.npmjs.com/package/date-fns

## 区别
- dayjs 是体积最小的 但需要都引入
  - API 与 Moment.js 高度兼容，迁移成本低
- date-fns 体积大 但可以按需引入
  - API 与 Moment.js 部分兼容，迁移成本高



# progress
> 是一个轻量级的 JavaScript 进度条库，提供了丰富的进度条功能，如进度条显示、进度条动画等。
> 特点是：
> - 轻量级，只有 1KB 大小
> - 支持自定义样式
> - 支持进度条动画

- 官网：https://github.com/rstacruz/nprogress
- 安装：https://www.npmjs.com/package/nprogress


## 示例
```js
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.start();
NProgress.done();
```





# await-to-js
> 是一个 JavaScript 库，用于处理异步操作中的错误。
> 特点是：
> - 支持异步操作中的错误处理
> - 支持自定义错误处理

# 安装：https://www.npmjs.com/package/await-to-js

## 示例
```js
import { to } from 'await-to-js';
const [err, data] = await to(fetchData());
if (err) {
  console.log(err);
}
console.log(data);


// 或者
const [err, data] = await to(fetchData(), {
  onError: (err) => {
    console.log(err);
  },
});
console.log(data);
```




# jsencrypt
> 是一个 JavaScript 库，用于加密和解密数据。
> 特点是：
> - 支持 RSA 加密和解密
> - 支持自定义密钥

- 安装：https://www.npmjs.com/package/jsencrypt


## 示例
```js
// 加密
const encrypt = new JSEncrypt();
encrypt.setPublicKey(publicKey);
const encrypted = encrypt.encrypt(data);
// 解密
const decrypt = new JSEncrypt();
decrypt.setPrivateKey(privateKey);
const decrypted = decrypt.decrypt(encrypted);
```


# styled-components
> 是一个 CSS-in-JS 库，提供了丰富的 CSS 功能，如样式继承、样式组合、样式动画等。
> 特点是：
> - 支持 CSS-in-JS
> - 支持样式继承
> - 支持样式组合
> - 支持样式动画

- 仓库：https://github.com/styled-components/styled-components
- 安装：https://www.npmjs.com/package/styled-components
- 三方：https://juejin.cn/post/7088876240404217886

## 示例
```js
import styled from 'styled-components';
const Button = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  &:hover {
    background-color: blue;
  }`

const App = () => {
  
  return (
    <div>
      <Button>Click me</Button>
    </div>  
  )
}
export default App;
```



# classnames
> 是一个 JavaScript 库，用于处理类名。
> 特点是：
> - 支持类名合并
> - 支持类名条件渲染
> - 支持类名动态生成

- 安装：https://www.npmjs.com/package/classnames

## 示例
```js
import classNames from 'classnames';
const className = classNames('class1', 'class2', {
  class3: true,
  class4: false,
});
console.log(className); // class1 class2 class3
```



# Nano ID
> 是一个 JavaScript 库，用于生成唯一的 ID。
> 特点是：
> - 支持生成唯一的 ID
> - 支持自定义 ID 长度

- 安装：https://github.com/ai/nanoid/blob/HEAD/README.zh-CN.md#pouchdb-and-couchdb

##  特别注意
```bash
npm install nanoid
```
- Nano ID 5 仅适用于 ESM 项目、测试或 Node.js 脚本。 对于 CommonJS，您需要 Nano ID 3.x（我们仍然支持它）：

``` bash
npm install nanoid@3
```





# react-query【没有用过】
> 是一个 React 库，用于处理异步操作。
> 特点是：
> - 支持异步操作
> - 支持数据缓存
> - 支持数据更新
> - 支持数据预取

## 和 axios 的区别
- axios 是一个 HTTP 库，用于发送 HTTP 请求。
- react-query 是一个数据管理库，用于管理异步操作。

- 安装：https://tanstack.com/query/latest/docs/framework/react/installation
- 三方：https://juejin.cn/post/7457566084138385418#heading-9



# ahooks
> 是一个 React Hooks 库，提供了丰富的 Hooks，如表单、表格、详情页等。
> hooks 是 react 16.8 版本新增的特性，用于解决 react 组件的一些问题，如状态管理、副作用管理、组件复用等。
> 特点是：
> - 纯 Hooks，没有任何依赖
> - 开箱即用，提供了丰富的 Hooks
> - 支持 TypeScript

## tip
- ahooks 是 react 团队维护的 hooks 库，暂时不支持  19.【2025-03-31】

- 官网：https://ahooks.js.org/zh-CN
- 安装：https://ahooks.js.org/zh-CN/guide

