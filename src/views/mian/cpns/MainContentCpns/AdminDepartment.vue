<template>
  <div class="admin-department">
    <page-search :searchConfig="departmentFormConfig" />
    <page-content :contentConfig="departmentContentConfig" />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/PageSearch.vue'
import PageContent from '@/components/PageContent.vue'

import departmentFormConfig from './departmentConfig/search.config'
import departmentContentConfig from './departmentConfig/content.config'
</script>

<style scoped lang="less"></style>
