<template>
  <div class="admin-department">
    <page-search
      :searchConfig="departmentFormConfig"
      @queryBtnClick="handleQuery"
      @resetBtnClick="handleReset"
    />
    <page-content
      :contentConfig="departmentContentConfig"
      ref="ctxRef"
      @newBtnClick="handleNewClick"
      @updateBtnClick="handleUpdateClick"
    >
      <template #enable="scope">
        <el-tag v-if="scope.row.enable" type="success">启用</el-tag>
        <el-tag v-else type="danger">禁用</el-tag>
      </template>
    </page-content>
    <page-modal :modalConfig="departmentModalConfig" ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/PageSearch.vue'
import PageContent from '@/components/PageContent.vue'
import PageModal from '@/components/PageModal.vue'

import departmentFormConfig from './departmentConfig/search.config'
import departmentContentConfig from './departmentConfig/content.config'
import departmentModalConfig from './departmentConfig/modal.config'

import useModalSearch from '@/hooks/usePageContent'

const { modalRef, ctxRef, handleQuery, handleReset, handleNewClick, handleUpdateClick } =
  useModalSearch()
</script>

<style scoped lang="less"></style>
@/hooks/usePageContent
