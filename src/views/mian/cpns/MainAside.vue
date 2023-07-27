<template>
  <div class="main-aside">
    <div class="logo">
      <img src="" alt="qb_logo" class="logo-img" @click="test" />
      <span :class="['logo-name', { 'show-name': isCollapse }]">qb管理系统</span>
    </div>
    <div class="main-aside-menu">
      <el-menu default-active="1-1" text-color="#fff" :collapse="isCollapse" class="el-main-menu">
        <!-- 系统总览 -->
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>商品总览</span>
          </template>
          <el-menu-item index="1-1">核心技术</el-menu-item>
          <el-menu-item index="1-2">商品总览</el-menu-item>
        </el-sub-menu>
        <!-- 系统管理 -->
        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="2-1">用户管理</el-menu-item>
          <el-menu-item index="2-2">部门管理</el-menu-item>
          <el-menu-item index="2-3">菜单管理</el-menu-item>
          <el-menu-item index="2-4">角色管理</el-menu-item>
        </el-sub-menu>
        <!-- 商品中心 -->
        <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <span>商品中心</span>
          </template>
          <el-menu-item index="3-1">商品类别</el-menu-item>
          <el-menu-item index="3-2">商品信息</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})
function test() {
  console.log(props.isCollapse)
}
</script>

<style scoped lang="less">
.logo {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo-img {
    height: 40px;
  }
  .logo-name {
    font-size: 1.2rem;
    color: aliceblue;
    font-weight: 600;
    padding: 0 10px;
    white-space: nowrap;
  }
  .show-name {
    display: none;
  }
}
.el-main-menu {
  background-color: var(--el-sub-backg-color);
  border: 0;
  .el-sub-menu .is-active {
    background-color: #337ecc;
    color: #fff;
  }
  .el-menu-item:hover {
    background-color: #337ecc;
  }
}
.el-menu-item {
  background-color: var(--el-backg-color);
}
</style>
