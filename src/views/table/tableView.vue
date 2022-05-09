<template>
  <el-table :data="tableProps.dataSource" v-loading="tableProps.loading" style="width: 100%">
    <el-table-column prop="key" label="key" />
    <el-table-column prop="name" label="name" />
    <el-table-column prop="owner" label="owner" />
  </el-table>

  <el-pagination
    v-if="!tableProps.loading"
    v-model:currentPage="tableProps.pagination.current"
    v-model:page-size="tableProps.pagination.pageSize"
    :page-sizes="[10, 20, 30, 40]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="tableProps.pagination.total"
    @size-change="sizeChange"
    @current-change="currentChange"
  />
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useTable } from "@/hooks/useTable"

interface Result {
  total: number
  list: any[]
}

const value = ref("")

const getTableData = ({ current, pageSize }: { current: number; pageSize: number }): Promise<Result<any>> => {
  let query = value.value
    ? `current=${current}&pageSize=${pageSize}$name=${value.value}`
    : `current=${current}&pageSize=${pageSize}`

  return fetch(`https://proapi.azurewebsites.net//api/rule?${query}`)
    .then((res) => res.json())
    .then((res) => {
      return {
        total: res.total,
        list: res.data,
      }
    })
}
const { tableProps, refresh, sizeChange, currentChange } = useTable(getTableData)
console.log("tableProps", tableProps)
</script>

<style scoped></style>
