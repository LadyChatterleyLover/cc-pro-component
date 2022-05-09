<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <div class="cc-choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div class="item" v-for="(item, index) in Object.keys(ElIcons)" :key="index" @click="clickItem(item)">
          <div class="text">
            <component :is="`el-icon-${transformIconName(item)}`"></component>
          </div>
          <div class="icon">{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import * as ElIcons from "@element-plus/icons-vue"
import { watch, ref } from "vue"
import { transformIconName } from "@/utils/transformIconName"
import { useCopy } from "@/hooks/useCopy"
import { ElMessage } from "element-plus"

const props = defineProps<{
  // 弹出框的标题
  title: string
  // 控制弹出框的显示与隐藏
  modelValue: boolean
}>()
const emits = defineEmits(["update:modelValue"])
// 拷贝一份父组件传递过来的visible
const dialogVisible = ref<boolean>(props.modelValue)
// 点击按钮显示弹出框
const handleClick = () => {
  // 需要修改父组件的数据
  emits("update:modelValue", !props.modelValue)
}
// 点击图标
const clickItem = (item: string) => {
  const text = `<el-icon-${transformIconName(item)} />`
  // 复制文本
  const { copy } = useCopy(text, () => ElMessage.success(`${text}复制成功`))
  copy()
  // 关闭弹框
  dialogVisible.value = false
}
// 监听visible的变化 只能监听第一次的变化
watch(
  () => props.modelValue,
  (val) => {
    dialogVisible.value = val
  }
)
// 监听组件内部的dialogVisible变化
watch(
  () => dialogVisible.value,
  (val) => {
    emits("update:modelValue", val)
  }
)
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  height: 70px;
}
.text {
  font-size: 14px;
}
.icon {
  flex: 1;
}
svg {
  width: 2em;
  height: 2em;
}
</style>
