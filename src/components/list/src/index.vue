<template>
  <cc-card v-loading="pagination && !list.length">
    <div class="cc-list-header">
      <div class="cc-list-header-title" v-if="headerTitle">
        <div class="cc-list-header-title-text">{{ headerTitle }}</div>
        <div class="cc-list-header-title-tip" v-if="tooltip">
          <el-tooltip placement="top" :content="tooltip">
            <el-icon-warning></el-icon-warning>
          </el-tooltip>
        </div>
      </div>
      <div>
        <slot v-if="$slots.toolBar" name="toolBar"></slot>
        <div v-else>{{ toolBar }}</div>
      </div>
    </div>
    <div v-if="selectList.length" class="cc-list-select">
      <div>
        <div>已选择 {{ selectList.length }} 项</div>
      </div>
      <div>
        <el-button @click="cancelSelect" type="text">取消选择</el-button>
      </div>
    </div>
    <div class="cc-list-content">
      <el-row
        class="cc-list-content-item"
        :class="[`cc-list-content-item-${size}`, { 'cc-list-content-item-split': split }]"
        justify="space-between"
        v-for="(item, index) in list"
        :key="item.id"
        @click="clickItem(item, index)"
        @dblclick="dblclickItem(item, index)"
        @contextmenu.prevent="contextmenuItem(item, index)"
        @mouseenter="enter(item, index)"
        @mouseleave="leave(item, index)"
      >
        <el-col :span="item.expand ? 14 : 20">
          <el-row>
            <el-col class="cc-list-content-item-expand" :span="1" v-if="selected">
              <el-checkbox @change="changeSelect(item, index)" v-model="item.selected"></el-checkbox>
            </el-col>
            <el-col @click="handleExpand(item, index)" class="cc-list-content-item-expand" :span="1" v-if="expand">
              <el-icon-arrow-right
                class="cc-list-content-item-expand-icon"
                :class="{ 'cc-list-content-item-expand-rotate': item.expand }"
              ></el-icon-arrow-right>
            </el-col>
            <el-col class="cc-list-content-item-avatar" :span="$slots[`${item.avatarSlot}`] || item.avatar ? 1 : 0">
              <slot :name="item.avatarSlot" v-if="$slots[`${item.avatarSlot}`]"></slot>
              <el-avatar v-else size="small" :src="item.avatar"></el-avatar>
            </el-col>
            <el-col :span="!$slots[`${item.avatarSlot}`] && !item.avatar ? 21 : 20">
              <div class="cc-list-content-item-header">
                <div class="cc-list-content-item-header-title">
                  <slot v-if="item.nameSlot" :name="item.nameSlot"></slot>
                  <div v-else>
                    <el-input v-if="item.editable" v-model="item.name" clearable></el-input>
                    <span v-else>{{ item.name }}</span>
                  </div>
                </div>
                <div class="cc-list-content-item-header-subTitle">
                  <slot v-if="item.subTitleSlot" :name="item.subTitleSlot"></slot>
                  <div v-else>
                    <el-input v-if="item.editable" v-model="item.subTitle" clearable></el-input>
                    <span v-else>{{ item.subTitle }}</span>
                  </div>
                </div>
              </div>
              <div v-if="(expand && item.expand) || (!expand && !item.expand)" class="cc-list-content-item-desc">
                <slot v-if="item.descSlot" :name="item.descSlot"></slot>
                <div v-else>
                  <el-input type="textarea" v-if="item.editable" v-model="item.desc" clearable></el-input>
                  <span v-else>{{ item.desc }}</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col class="cc-list-content-item-expand-content" :span="6" v-if="expand && item.expand">
          <slot :name="item.expandSlot"></slot>
        </el-col>
        <el-col
          @click="clickAction(item)"
          style="display: flex; justify-content: flex-end"
          v-if="item.actionSlot && item.showActions"
          :span="4"
        >
          <div v-if="item.editable">
            <el-button type="text" @click.stop="save(item, index)">保存</el-button>
            <el-popconfirm title="删除此行?" @confirm.stop="del(item, index)">
              <template #reference>
                <el-button type="text">删除</el-button>
              </template>
            </el-popconfirm>
            <el-button type="text" @click.stop="cancel(item, index)">取消</el-button>
          </div>
          <slot v-else :name="item.actionSlot"></slot>
        </el-col>
      </el-row>
    </div>
    <div ref="loadingRef">
      <slot name="loader"></slot>
    </div>
    <div class="cc-list-pagination" v-if="pagination">
      <el-pagination
        v-model:currentPage="paginationOpts!.currentPage"
        v-model:page-size="paginationOpts!.pageSize"
        :layout="paginationOpts!.layout"
        :total="paginationOpts!.total"
        :page-sizes="paginationOpts!.pageSizes"
        @current-change="currentChange"
        @size-change="sizeChange"
      ></el-pagination>
    </div>
  </cc-card>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import cloneDeep from 'lodash/cloneDeep'

export interface ListItem {
  name: string
  avatar?: string
  desc?: string
  subTitle?: string
  nameSlot?: string
  avatarSlot?: string
  descSlot?: string
  subTitleSlot?: string
  actionSlot?: string
  expandSlot?: string
  id?: string | number
  showExtra?: boolean
  showActions?: boolean
  editable?: boolean
  expand?: boolean
  selected?: boolean
}

const props = withDefaults(
  defineProps<{
    dataSource: ListItem[]
    showActions?: 'always' | 'hover'
    showExtra?: 'always' | 'hover'
    headerTitle?: string
    tooltip?: string
    toolBar?: string
    editable?: boolean
    expand?: boolean
    selected?: boolean
    split?: boolean
    size?: 'default' | 'small' | 'large'
    pagination?: boolean
    loadMore?: () => void
    paginationOptions?: {
      layout?: string
      pageSize?: number
      total?: number
      currentPage?: number
      pageSizes?: number[]
    }
  }>(),
  {
    showActions: 'always',
    editable: false,
    expand: false,
    selected: false,
    split: false,
    size: 'default',
    pagination: false,
  }
)
const emits = defineEmits([
  'click',
  'dblclick',
  'contextmenu',
  'mouseenter',
  'mouseleave',
  'editSave',
  'editDelete',
  'editCancel',
  'expand',
  'select',
  'current-change',
  'size-change',
  'update:paginationOptions',
])

const list = ref<ListItem[]>([])
const currentEdit = ref<ListItem[]>([])
const selectList = ref<ListItem[]>([])
const paginationOpts = ref<any>()
const loadingRef = ref<HTMLElement>()
const intersectionObserver = ref<IntersectionObserver | null>(null)

const clickItem = (item: ListItem, index: number) => {
  emits('click', { item, index })
}
const dblclickItem = (item: ListItem, index: number) => {
  emits('dblclick', { item, index })
}
const contextmenuItem = (item: ListItem, index: number) => {
  emits('contextmenu', { item, index })
}
const enter = (item: ListItem, index: number) => {
  item.showActions = true
  emits('mouseenter', { item, index })
}
const leave = (item: ListItem, index: number) => {
  if (props.showActions === 'hover') {
    item.showActions = false
  }
  emits('mouseleave', { item, index })
}
const clickAction = (item: ListItem) => {
  if (props.editable) {
    item.editable = true
    currentEdit.value.push(cloneDeep(item))
  }
}
const save = (item: ListItem, index: number) => {
  item.editable = false
  currentEdit.value = currentEdit.value.filter((i) => i.id !== item.id)
  emits('editSave', { item, index })
}
const del = (item: ListItem, index: number) => {
  item.editable = false
  list.value.splice(index, 1)
  currentEdit.value = currentEdit.value.filter((i) => i.id !== item.id)
  emits('editDelete', { item, index })
}

const cancel = (item: ListItem, index: number) => {
  let current = currentEdit.value!.find((i) => i.id === item.id)
  item.name = current!.name
  item.desc = current!.desc
  item.subTitle = current!.subTitle
  currentEdit.value = currentEdit.value.filter((i) => i.id !== item.id)
  item.editable = false
  emits('editCancel', { item, index })
}

const handleExpand = (item: ListItem, index: number) => {
  item.expand = !item.expand
  emits('expand', { item, index })
}

const changeSelect = (item: ListItem, index: number) => {
  if (item.selected) {
    selectList.value.push(item)
  } else {
    selectList.value.splice(index, 1)
  }
  emits('select', { item, index })
}

const cancelSelect = () => {
  selectList.value.map((item) => {
    item.selected = false
  })
  selectList.value = []
}

const currentChange = (val: number) => {
  paginationOpts.value.current = val
  emits('current-change', val)
}
const sizeChange = (val: number) => {
  paginationOpts.value.pageSize = val
  emits('size-change', val)
}

watch(
  () => props.dataSource,
  (val) => {
    if (val && val.length) {
      list.value = cloneDeep(val)
      list.value.map((item, index) => {
        item.id = index
        item.editable = false
        item.expand = false
        item.selected = false
        if (props.showActions === 'always') {
          item.showActions = true
        } else {
          item.showActions = false
        }
      })
    }
  },
  { deep: true, immediate: true }
)

watch(
  () => props.paginationOptions,
  (val) => {
    paginationOpts.value = val
  },
  { immediate: true }
)

watch(
  () => paginationOpts.value,
  (val) => {
    emits('update:paginationOptions', val)
  }
)

onMounted(() => {
  intersectionObserver.value = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0) {
      // intersectionRatio大于0，代表监听的元素由不可见变成可见，进行数据请求
      props.loadMore?.()
    }
  })
  // 监听Loading div的可见性
  intersectionObserver.value.observe(loadingRef.value!)
})
onUnmounted(() => {
  intersectionObserver.value!.disconnect()
  intersectionObserver.value = null
})
</script>

<style lang="scss" scoped>
.cc-list {
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-title {
      display: flex;
      align-items: center;
      max-width: 100%;
      &-text {
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        font-size: 16px;
      }
      &-tip {
        margin-left: 4px;
        margin-top: 4px;
        cursor: pointer;
      }
    }
  }
  &-select {
    margin: 16px 0;
    padding: 12px 24px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #e6f7ff;
    border: 1px solid #91d5ff;
  }
  &-content {
    &-item {
      cursor: pointer;
      &-large {
        padding: 16px;
      }
      &-default {
        padding: 12px;
      }
      &-small {
        padding: 8px;
      }
      &-split {
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.02);
        transition: background-color 0.3s;
      }
      &-expand {
        position: relative;
        left: 6px;
        top: 4px;
        &-content {
          margin-top: 20px;
        }
        &-icon {
          transition: all 0.2s linear;
        }
        &-rotate {
          transform: rotate(90deg);
        }
      }
      &-avatar {
        position: relative;
        top: 2px;
      }
      &-header {
        display: flex;
        align-items: center;
        &-title {
          margin-right: 16px;
          word-break: break-all;
          cursor: pointer;
        }
        &-subTitle {
          color: rgba(0, 0, 0, 0.45);
        }
      }
      &-desc {
        margin-top: 4px;
        word-break: break-all;
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
        line-height: 1.5715;
      }
    }
  }
  &-pagination {
    margin: 24px 0;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
