# Typescript 知识点


ReturnType 返回函数的返回值类型
Parameters 返回函数的参数类型
Pick 返回一个对象类型，包含指定的属性
Omit 返回一个对象类型，排除指定的属性
Extract 从联合类型中提取出指定的类型
Exclude 从联合类型中排除指定的类型
Partial 将对象的所有属性都变为可选
Required 将对象的所有属性都变为必选
Readonly 将对象的所有属性都变为只读
Record 将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型




# React


ForwardRefRenderFunction
> forwardRef 允许你将 ref 从父组件传递到子组件，而 ForwardRefRenderFunction 为这种函数组件提供了精确的类型定义
- 读 否外的


## forwardRef
-读 否外的

forwardRef 用于将 ref 转发到组件的最外层 DOM 节点上。
- 简单说就是让父组件可以拿到子组件的 ref
- 注意：forwardRef 只能用于函数组件，不能用于 class 组件
