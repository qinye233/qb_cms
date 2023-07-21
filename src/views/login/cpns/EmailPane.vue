<template>
  <div class="email-pane">
    <el-form
      label-width="50px"
      size="large"
      label-position="left"
      :model="emailForm"
      style="max-width: 460px"
      status-icon
    >
      <el-form-item label="邮箱">
        <el-input v-model="emailForm.email" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="emailForm.verificationCode" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const emailForm = reactive({
  email: '',
  verificationCode: ''
})
</script>

<style scoped lang="less"></style>
