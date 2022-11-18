<template>
  <!-- <div class="app-wrapper">
    <el-container class="layout">
      <div class="nav">
        <el-aside>
          <Nav/>
        </el-aside>
      </div>
      <el-container class="container">
        <el-header><Header/></el-header>
        <el-main><Body/></el-main>
      </el-container>
    </el-container>
  </div> -->

  <div class="homeBox">
    <div class="left">
      <div class="leftNav">
        <Nav/>
      </div>
    </div>

    <div class="right">
      <div class="rightTop">
        <Header/>
      </div>
      <div class="rightBottom">
        <Body/>
      </div>
    </div>

  </div>

</template>

<script setup lang="ts">
import Nav from './nav/nav.vue'
import Header from './header/header.vue'
import Body from './body/body.vue'
// import Footer from './footer/footer.vue'
  
</script>

<style lang="less" scoped>
.sidebat-container{
  height: 100%;
  background-color: antiquewhite;
}
.el-header{
  background-color: #545c64
}
.el-aside {
  .el-menu{
    height: calc(100vh);
  }
}
// menu 的右边边框白线
.el-menu{
  // border-right:0
}
.el-header{
  padding: 0;
}
.el-main{
  padding: 0;
}
.layout{
  height: 100%;
  display: flex;
  .left{
    height: 100%;
    max-width: 280px;
    // flex: 1;
    .aside{
      width: 100%;
    }
  }
  .right{
    flex: 1;
    .header{
      width: 100%;
    }
  }
}

.homeBox {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    // 因为要折叠，所以看度不写死
    max-width: 216px;
    height: 100%;
    .leftNav {
      max-width: 216px;
      height: 100%;
      
      // 菜单选中高亮样式
      .deep .el-menu-item.is-active {
        background-color: #478ce9 !important;
        font-weight: bold;
      }
    }
  }
  .right {
    // 通过弹性盒左右自适应布局
    flex: 1;
    height: 100%;
    .rightTop {
      width: 100%;
      height: 60px;
      background-color: rgb(203, 255, 234);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      i {
        font-size: 36px;
        cursor: pointer;
      }
    }
    .rightBottom {
      width: 100%;
      height: calc(100% - 60px);
    }
  }
}
</style>