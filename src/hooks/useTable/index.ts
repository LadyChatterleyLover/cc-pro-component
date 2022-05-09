import { ref, watch, unref, onMounted } from 'vue'
import type { Ref } from 'vue'

export interface Result<T> {
  list: T[]
  total: number
}

export interface Options {
  current: number
  pageSize: number
}

export function useTable<T>(
  request: ({ current, pageSize }: { current: number; pageSize: number }) => Promise<Result<T>>,
  opts?: Options
) {
  const list = ref<T[]>([]) as Ref<T[]>
  const tableData = ref<T[]>([]) as Ref<T[]>
  const total = ref<number>(0)
  const totalNumber = ref<number>(0)
  const current = ref<number>(opts?.current || 1)
  const pageSize = ref<number>(opts?.pageSize || 10)
  const loading = ref<boolean>(false)
  const err = ref<any>()

  const service = ({ current, pageSize }: { current: number; pageSize: number }) => {
    loading.value = true
    request({
      current,
      pageSize,
    })
      .then((res) => {
        loading.value = false
        list.value = res.list
        totalNumber.value = res.total
      })
      .catch((e) => {
        err.value = e
        loading.value = false
      })
  }

  onMounted(() => {
    service({
      current: current.value,
      pageSize: pageSize.value,
    })
  })

  watch(
    () => [list.value, totalNumber.value],
    (val) => {
      if (!(val[0] as T[]).length || !(val[1] as number)) {
        return
      }
      console.log(val)
      tableData.value = val[0] as T[]
      total.value = val[1] as number
    }
  )

  const sizeChange = (val: number) => {
    pageSize.value = val
    service({
      current: current.value,
      pageSize: pageSize.value,
    })
  }

  const currentChange = (val: number) => {
    current.value = val
    service({
      current: current.value,
      pageSize: pageSize.value,
    })
  }

  const refresh = () => {
    service({
      current: current.value,
      pageSize: pageSize.value,
    })
  }

  return {
    err: err,
    refresh,
    tableProps: {
      loading: unref(loading),
      dataSource: unref(tableData),
      pagination: {
        current: unref(current),
        pageSize: unref(pageSize),
        total: unref(total),
        currentChange,
        sizeChange,
      },
    },
  }
}
