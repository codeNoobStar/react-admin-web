import { ProTable, ProTableProps } from '@ant-design/pro-components'
function FProtable<T extends Record<string, any>, U extends Record<string, any> = any>(props: ProTableProps<T, U>) {
  ;<ProTable<T, U>
    {...props}
    search={props.search !== false ? { ...props.search } : false}
    rowKey={props.rowKey || 'id'}
    pagination={{ defaultPageSize: 10 }}
  />
}

export default FProtable
