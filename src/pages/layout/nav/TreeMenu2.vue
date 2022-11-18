<template>
  <template v-for="(item, index) in routerList">

    <!-- 有子级的情况 -->
    <el-sub-menu :key="item.path" :index="item.path" v-if="item?.children?.length > 0">
      <template #title>
        <el-icon><Grid /></el-icon>
        <!-- <i class="el-icon-eleme"></i> -->
        <span>{{ item.meta.title }}</span>
      </template>
      <TreeMenu2 :routerData="item.children"></TreeMenu2>
    </el-sub-menu>

    <!-- 无子级 的情况 -->
    <el-menu-item v-else :key="item.path" :index="item.path">
      <el-icon><Grid /></el-icon>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>

  </template>
</template>

<script lang='ts' setup>

const routerData:any = defineProps({
  routerData: Array
})
// console.log(routerData.routerData)
const routerList:any = routerData.routerData

</script>

<style scoped>

</style>
