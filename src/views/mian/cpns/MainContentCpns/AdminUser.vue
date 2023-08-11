<template>
  <div class="admin-user">
    <div class="user-search">
      <user-search @queryBtnClick="handleQuery" @resetBtnClick="handleReset" />
    </div>
    <div class="user-content">
      <user-content @newBtnClick="handleNewUser" @updateBtnClick="handleUpdateUser" ref="ctxRef" />
    </div>
    <user-modal ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import UserSearch from './AdminCpns/UserSearch.vue'
import UserContent from './AdminCpns/UserContent.vue'
import UserModal from './AdminCpns/UserModal.vue'

import { ref } from 'vue'

const modalRef = ref<InstanceType<typeof UserModal>>()
const ctxRef = ref<InstanceType<typeof UserContent>>()
// 点击查询
function handleQuery(formData: any) {
  ctxRef.value?.fetchListData(formData)
}
// 点击重置
function handleReset() {
  ctxRef.value?.fetchListData()
}

//点击新建
function handleNewUser() {
  modalRef.value?.handleModalVisible(true)
}
// 点击编辑
function handleUpdateUser(row: any) {
  modalRef.value?.handleModalVisible(false, row)
}
</script>

<style scoped lang="less">
.admin-user {
  height: 100%;
  position: relative;
}
</style>
