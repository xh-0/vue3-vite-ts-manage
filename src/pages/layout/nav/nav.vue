<template>
  
  <!-- background-color="#545c64" -->
  <!-- <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
  >
    <el-menu-item :index="item.path" v-for="item in routerList" :key="item.path">
      <el-icon><icon-menu /></el-icon>
      <span>{{item.meta.title}}</span>
    </el-menu-item>
  </el-menu> -->

  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    default-active="2"
    class="el-menu-vertical-demo fontColor elMenu"
    text-color="#fff"
    :collapse="isCollapse"
    router
  >
    <!-- <TreeMenu :routerData="routerList1"/>  -->
    <TreeMenu2 :routerData="routerList1" />
  </el-menu>

</template>

<script lang='ts' setup>
import { useRouter } from 'vue-router';
// import TreeMenu from './TreeMenu.vue'  // 递归菜单1
import TreeMenu2 from './TreeMenu2.vue'; //递归菜单2
import routerList1 from '../../../router/modules/main.ts' // 路由数组数据
// pinia
import { defineStore, storeToRefs } from 'pinia';
import { textStore } from '@/store/index'

// 对路由数据的获取
const router = useRouter()
const routerList = router.getRoutes().filter( v => v.meta.isShow )
console.log(routerList) //路由列表数据

// pinia全局数据的获取
const counter = textStore()
const {isCollapse} = storeToRefs(counter)
console.log(isCollapse.value)

</script>

<style lang="less" scoped>
.fontColor{
  color: white;
  width: 100%;
  height: 100%;
}
.elMenu {
  width: 100%;
  height: 100%;
}

</style>
