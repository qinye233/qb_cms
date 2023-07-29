<template>
  <div class="user-content">
    <div class="header">
      <h3>用户列表</h3>
      <el-button type="primary">新增用户</el-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.user-content {
  background-color: #fff;
  margin-top: 20px;
  padding: 16px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
