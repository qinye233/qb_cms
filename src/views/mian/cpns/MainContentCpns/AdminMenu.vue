<template>
  <div class="admin-menu">
    <page-content
      :contentConfig="menuContentConfig"
      ref="ctxRef"
      @newBtnClick="handleNewClick"
      @updateBtnClick="handleUpdateClick"
    >
      <template #enable="scope">
        <el-tag v-if="scope.row.enable" type="success">启用</el-tag>
        <el-tag v-else type="danger">禁用</el-tag>
      </template></page-content
    >
    <page-modal :modalConfig="menuModalConfig" ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/PageContent.vue'
import PageModal from '@/components/PageModal.vue'

import menuModalConfig from './menuConfig/modal.config'
import menuContentConfig from './menuConfig/content.config'

import useModalSearch from '@/hooks/usePageContent'

const { modalRef, ctxRef, handleNewClick, handleUpdateClick } = useModalSearch()
</script>

<style scoped lang="less"></style>
@/hooks/usePageContent
