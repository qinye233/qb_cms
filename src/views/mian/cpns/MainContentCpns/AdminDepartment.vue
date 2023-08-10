<template>
  <div class="admin-department">
    <page-search :searchConfig="departmentFormConfig" />
    <page-content :contentConfig="departmentContentConfig">
      <template #enable="scope">
        <el-tag v-if="scope.row.enable" type="success">启用</el-tag>
        <el-tag v-else type="danger">禁用</el-tag>
      </template>
    </page-content>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/PageSearch.vue'
import PageContent from '@/components/PageContent.vue'

import departmentFormConfig from './departmentConfig/search.config'
import departmentContentConfig from './departmentConfig/content.config'
</script>

<style scoped lang="less"></style>
