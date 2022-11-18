<template>
  <div>
    <div>
      <el-button @click="changeBtn">切换</el-button>
      {{isCollapse}}
    </div>
  </div>
</template>

<script lang='ts' setup>
// pinia
import { defineStore, storeToRefs } from 'pinia';
import { textStore } from '@/store/index'

// pinia全局数据的获取
const counter = textStore()
const {isCollapse} = storeToRefs(counter)
console.log(isCollapse.value)
// 切换按钮
const changeBtn = () => {
  // if( isCollapse.value == false){
  //   isCollapse.value = true
  // } else if(isCollapse.value == true){
  //   isCollapse.value = false
  // }
  counter.changeBtn()
}

</script>

<style lang="less" scoped>

</style>
