<template>
  <div class="admin-user">
    <div class="user-search">
      <user-search />
    </div>
    <div class="user-content">
      <user-content @newBtnClick="hanleNewUser" />
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
  modalRef.value?.handleModalVisible()
}
</script>

<style scoped lang="less"></style>
