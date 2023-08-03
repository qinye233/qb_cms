<template>
  <div class="admin-user">
    <div class="user-search">
      <user-search />
    </div>
    <div class="user-content">
      <user-content @newBtnClick="hanleNewUser" @updateBtnClick="handleUpdateUser" />
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
function hanleNewUser() {
  modalRef.value?.handleModalVisible(true)
}
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
