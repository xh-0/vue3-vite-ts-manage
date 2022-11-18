<template>
  <template v-for="(item, index) in routerList" :key="item.path" >
    <!-- :index="menus?.children?.path" -->
    <el-sub-menu v-if=" item.children && (item.children.length > 0 )"  :index="index">
      <template #title>
        <el-icon><Grid /></el-icon>
        <span>{{item.meta.title}}</span>
      </template>
      <!-- <TreeMenu></TreeMenu> -->
    </el-sub-menu>
    <el-menu-item v-else  :index="index">
      <el-icon><Grid /></el-icon>
      <template #title>{{item.meta.title}}</template>
    </el-menu-item>

  </template>
</template>

<script lang='ts' setup>

const routerData = defineProps({
  routerData: Array
})
const routerList = routerData.routerData
// console.log(routerList[0])

</script>

<style scoped>

</style>
