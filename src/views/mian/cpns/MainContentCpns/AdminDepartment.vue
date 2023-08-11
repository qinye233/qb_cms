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

import { ref } from 'vue'

const modalRef = ref<InstanceType<typeof PageModal>>()
const ctxRef = ref<InstanceType<typeof PageContent>>()
// 点击查询
function handleQuery(formData: any) {
  ctxRef.value?.fetchListData(formData)
}
// 点击重置
function handleReset() {
  ctxRef.value?.fetchListData()
}

//点击新建
function handleNewClick() {
  modalRef.value?.handleModalVisible(true)
}
// 点击编辑
function handleUpdateClick(row: any) {
  modalRef.value?.handleModalVisible(false, row)
}
</script>

<style scoped lang="less"></style>
