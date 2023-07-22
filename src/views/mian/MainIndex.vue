<template>
  <div class="mian-index">
    <el-container class="main-container">
      <el-aside width="200px">
        <main-aside />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainAside from './cpns/MainAside.vue'
</script>

<style scoped lang="less">
.mian-index,
.main-container {
  height: 100%;
}
</style>
