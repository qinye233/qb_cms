<template>
  <div class="content-overview">
    <chart-card title="关于">
      <div class="about">
        qbAdmin 是基于Vue3、pinia、VueRouter、Vite、ElementPlus
        、TypeScript、Echart5等后台系统解决方案。
      </div>
    </chart-card>
    <chart-card title="技术栈">
      <tech-stack />
    </chart-card>
    <chart-card title="项目结构">
      <tree />
    </chart-card>
  </div>
</template>

<script setup lang="ts">
import ChartCard from '@/components/ChartCard.vue'
import TechStack from './overviewCpns/TechStack.vue'
import Tree from './overviewCpns/Tree.vue'
</script>

<style scoped lang="less">
.about {
  padding: 20px;
}
</style>
