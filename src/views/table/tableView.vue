<template>
  <div></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTable } from '@/hooks/useTable'

interface Result<T> {
  total: number
  list: T[]
}

const value = ref('')

const getTableData = ({ current, pageSize }: { current: number; pageSize: number }): Promise<Result<any>> => {
  let query = `page=${current}&size=${pageSize}$name=${value.value}`

  return fetch(`https://proapi.azurewebsites.net//api/rule?${query}`)
    .then((res) => res.json())
    .then((res) => {
      return {
        total: res.total,
        list: res.data,
      }
    })
}
const { tableProps, refresh } = useTable<any>(getTableData)
console.log('tableProps', tableProps)
</script>

<style scoped></style>
