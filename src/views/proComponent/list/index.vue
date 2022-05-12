<template>
  <div class="container">
    <h3>基础使用</h3>
    <br />
    <cc-list showActions="hover" :dataSource="dataSource" headerTitle="基础列表" tooltip="基础列表的配置">
      <template #toolBar>
        <el-button type="primary">新建</el-button>
      </template>
      <template #subTitle>
        <el-tag style="margin-right: 6px">Element Plus</el-tag>
        <el-tag type="success">Pro Component</el-tag>
      </template>
      <template #actionSlot>
        <el-button type="text">报警</el-button>
        <el-button type="text">链路</el-button>
        <el-button type="text">查看</el-button>
      </template>
    </cc-list>
    <br />
    <br />
    <h3>编辑列表</h3>
    <br />
    <cc-list editable :dataSource="dataSource" headerTitle="基础列表" tooltip="基础列表的配置">
      <template #toolBar>
        <el-button type="primary">新建</el-button>
      </template>
      <template #subTitle>
        <el-tag style="margin-right: 6px">Element Plus</el-tag>
        <el-tag type="success">Pro Component</el-tag>
      </template>
      <template #actionSlot>
        <el-button type="text">编辑</el-button>
      </template>
    </cc-list>
    <br />
    <br />
    <h3>支持展开的列表</h3>
    <br />
    <cc-list expand :dataSource="dataSource1" headerTitle="基础列表" tooltip="基础列表的配置">
      <template #toolBar>
        <el-button type="primary">新建</el-button>
      </template>
      <template #subTitle>
        <el-tag style="margin-right: 6px">Element Plus</el-tag>
        <el-tag type="success">Pro Component</el-tag>
      </template>
      <template #actionSlot>
        <el-button type="text">邀请</el-button>
      </template>
      <template #expandSlot>
        <div style="min-width: 200px; display: flex; justify-content: flex-end">
          <div style="width: 200px">
            <div>发布中</div>
            <el-progress :percentage="80" />
          </div>
        </div>
      </template>
    </cc-list>
    <br />
    <br />
    <h3>支持选中的列表</h3>
    <br />
    <cc-list selected :dataSource="dataSource" headerTitle="支持选中的列表" tooltip="基础列表的配置">
      <template #toolBar>
        <el-button type="primary">新建</el-button>
      </template>
      <template #subTitle>
        <el-tag style="margin-right: 6px">Element Plus</el-tag>
        <el-tag type="success">Pro Component</el-tag>
      </template>
      <template #actionSlot>
        <el-button type="text">报警</el-button>
        <el-button type="text">链路</el-button>
        <el-button type="text">查看</el-button>
      </template>
    </cc-list>
    <br />
    <br />
    <h3>尺寸和分割线</h3>
    <br />
    尺寸：
    <el-select v-model="size">
      <el-option label="small" value="small"></el-option>
      <el-option label="default" value="default"></el-option>
      <el-option label="large" value="large"></el-option>
    </el-select>
    分割线：
    <el-select v-model="split">
      <el-option label="有" :value="true"></el-option>
      <el-option label="无" :value="false"></el-option>
    </el-select>
    <br />
    <cc-list :size="size" :split="split" :dataSource="dataSource" headerTitle="基础列表" tooltip="基础列表的配置">
      <template #toolBar>
        <el-button type="primary">新建</el-button>
      </template>
      <template #subTitle>
        <el-tag style="margin-right: 6px">Element Plus</el-tag>
        <el-tag type="success">Pro Component</el-tag>
      </template>
      <template #actionSlot>
        <el-button type="text">报警</el-button>
        <el-button type="text">链路</el-button>
        <el-button type="text">查看</el-button>
      </template>
    </cc-list>
    <br />
    <br />
    <h3>分页</h3>
    <br />
    <cc-list
      pagination
      v-model:paginationOptions="paginationOptions"
      :dataSource="dataSource2"
      headerTitle="基础列表"
      tooltip="基础列表的配置"
      @size-change="sizeChange"
      @current-change="currentChange"
    >
      <template #toolBar>
        <el-button type="primary">新建</el-button>
      </template>
      <template #subTitle>
        <el-tag style="margin-right: 6px">Element Plus</el-tag>
        <el-tag type="success">Pro Component</el-tag>
      </template>
      <template #actionSlot>
        <el-button type="text">报警</el-button>
        <el-button type="text">链路</el-button>
        <el-button type="text">查看</el-button>
      </template>
    </cc-list>
    <br />
    <br />
    <h3>无限滚动，性能更好</h3>
    <br />
    <div style="height: 400px; overflow: auto; padding: 0 16px; border: 1px solid rgba(140, 140, 140, 0.35)">
      <cc-list :dataSource="data" :loadMore="loadMore" headerTitle="基础列表" tooltip="基础列表的配置">
        <template #toolBar>
          <el-button type="primary">新建</el-button>
        </template>
        <template #subTitle>
          <el-tag style="margin-right: 6px">Element Plus</el-tag>
          <el-tag type="success">Pro Component</el-tag>
        </template>
        <template #actionSlot>
          <el-button type="text">报警</el-button>
          <el-button type="text">链路</el-button>
          <el-button type="text">查看</el-button>
        </template>
        <template #loader>
          <div style="text-align: center; margin: 16px 0">加载中...</div>
        </template>
      </cc-list>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const dataSource = [
  {
    name: "语雀的天空",
    avatar: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
    desc: "我是一条测试的描述",
    subTitleSlot: "subTitle",
    actionSlot: "actionSlot",
    expandSlot: "expandSlot",
  },
  {
    name: "Ant Design",
    avatar: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
    desc: "我是一条测试的描述",
    subTitleSlot: "subTitle",
    actionSlot: "actionSlot",
    expandSlot: "expandSlot",
  },
  {
    name: "蚂蚁金服体验科技",
    avatar: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
    desc: "我是一条测试的描述",
    subTitleSlot: "subTitle",
    actionSlot: "actionSlot",
    expandSlot: "expandSlot",
  },
  {
    name: "TechUI",
    avatar: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
    desc: "我是一条测试的描述",
    subTitleSlot: "subTitle",
    actionSlot: "actionSlot",
    expandSlot: "expandSlot",
  },
]
const dataSource1 = [
  {
    name: "语雀的天空",
    avatar: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
    desc: "Ant Design, a design language for background applications, is refined by Ant UED Team",
    subTitleSlot: "subTitle",
    actionSlot: "actionSlot",
    expandSlot: "expandSlot",
  },
  {
    name: "Ant Design",
    avatar: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
    desc: "Ant Design, a design language for background applications, is refined by Ant UED Team",
    subTitleSlot: "subTitle",
    actionSlot: "actionSlot",
    expandSlot: "expandSlot",
  },
  {
    name: "蚂蚁金服体验科技",
    avatar: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
    desc: "Ant Design, a design language for background applications, is refined by Ant UED Team",
    subTitleSlot: "subTitle",
    actionSlot: "actionSlot",
    expandSlot: "expandSlot",
  },
  {
    name: "TechUI",
    avatar: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
    desc: "Ant Design, a design language for background applications, is refined by Ant UED Team",
    subTitleSlot: "subTitle",
    actionSlot: "actionSlot",
    expandSlot: "expandSlot",
  },
]
const dataSource2 = ref<any[]>([])
const size = ref("default")
const split = ref(true)
const loading = ref(false)
const data = ref<any[]>([])

const paginationOptions = ref<any>({
  pageSize: 10,
  total: 0,
  currentPage: 1,
  pageSizes: [10, 20, 30, 40, 50],
  layout: "total, sizes, prev, pager, next, jumper",
})
const current = ref(1)
const pageSize = ref(10)

const getData = () => {
  fetch(`https://proapi.azurewebsites.net//api/rule?current=${current.value}&pageSize=${pageSize.value}`)
    .then((res) => res.json())
    .then((res) => {
      dataSource2.value = res.data
      paginationOptions.value.total = res.total
    })
}
getData()
const currentChange = (val: number) => {
  current.value = val
  getData()
}
const sizeChange = (val: number) => {
  pageSize.value = val
  getData()
}

const loadMore = () => {
  if (loading.value) {
    return
  }
  loading.value = true
  fetch("https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo")
    .then((res) => res.json())
    .then((body) => {
      let arr = body.results.map((item: any) => {
        return {
          avatar: item.picture.large,
          name: item.name.last,
          desc: item.email,
          subTitleSlot: "subTitle",
          actionSlot: "actionSlot",
          expandSlot: "expandSlot",
        }
      })
      data.value.push(...arr)
      loading.value = false
    })
    .catch(() => {
      loading.value = false
    })
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: #f9fafb;
  padding: 20px;
  overflow-y: scroll;
}
</style>
