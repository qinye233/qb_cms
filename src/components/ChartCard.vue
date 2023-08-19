<template>
  <div class="chart-card">
    <div class="header">
      <span>{{ title }}</span>
    </div>
    <el-divider />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
}
defineProps<Props>()
</script>

<style scoped lang="less">
.chart-card {
  width: 100%;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-top: 10px;
  .header {
    padding: 20px;
    font-weight: 600;
  }
  .el-divider--horizontal {
    margin: 0;
  }
}
</style>
