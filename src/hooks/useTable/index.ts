import { ref, watch } from "vue"

export interface Result {
  total: number,
  list: any[]
}
export type Service = ({ current, pageSize }: { current: number, pageSize: number }) => Promise<Result>

export interface Pagination {
  current?: number,
  pageSize?: number
  total?: number,
  showTotal?: (total: number) => number | string,
  showSizeChanger?: boolean,
  showQuickJumper?: boolean
}

export interface TableProps {
  dataSource: any[],
  pagination: Pagination
  loading: boolean
}



export const useTable = (
  service: Service,
  pagination: Pagination = {
    total: 0,
    showTotal: () => '',
    showSizeChanger: true,
    showQuickJumper: true
  }
) => {

  const {
    total: totalCount = 0,
    showTotal = (total) => `总共${total}条`,
    showSizeChanger = true,
    showQuickJumper = true
  } = pagination!

  const current = ref<number>(pagination.current || 1)
  const pageSize = ref<number>(pagination.pageSize || 10)
  const total = ref<number>(0)
  const list = ref<any[]>([])
  const err = ref<any>()
  const tableProps = ref<TableProps>({
    pagination: {
      total: totalCount,
      showTotal,
      showSizeChanger,
      showQuickJumper
    },
    dataSource: [],
    loading: true
  })

  const refresh = () => {
    service({
      current: current.value,
      pageSize: pageSize.value
    }).then((res: Result) => {
      list.value = res.list
      total.value = res.total
    }).catch((e: any) => {
      err.value = e
    })
  }
  refresh()
  watch(() => [total.value, list.value], (val: any) => {
    if (!val[0] || !val[1]) return
    tableProps.value.pagination!.total = val[0]
    tableProps.value.dataSource = val[1]
    tableProps.value.loading = false
  })

  const sizeChange = (val: number) => {
    pageSize.value = val
    refresh()
  }
  const currentChange = (val: number) => {
    current.value = val
    refresh()
  }

  return {
    refresh,
    tableProps: tableProps.value,
    sizeChange,
    currentChange
  }
}