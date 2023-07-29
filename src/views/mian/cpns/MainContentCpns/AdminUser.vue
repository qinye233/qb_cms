<template>
  <div class="admin-user">
    <div class="user-search">
      <user-search />
    </div>
    <div class="user-content">
      <user-content />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserSearch from './AdminCpns/UserSearch.vue'
import UserContent from './AdminCpns/UserContent.vue'
</script>

<style scoped lang="less"></style>
