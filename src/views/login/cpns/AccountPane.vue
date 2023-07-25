<template>
  <div class="account-pane">
    <el-form
      label-width="60px"
      size="large"
      label-position="left"
      :model="accountForm"
      style="max-width: 460px"
      :rules="accountRules"
      status-icon
      ref="loginFormRef"
    >
      <el-form-item label="账号" prop="account">
        <el-input v-model="accountForm.account" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import useAccountStore from '@/stores/account/account'
import router from '@/router'

// 定义表单数据
const accountForm = reactive({
  account: localStorage.getItem('account') ?? '',
  password: localStorage.getItem('password') ?? ''
})
// 设置验证规则
const accountRules = reactive<FormRules>({
  account: [
    { required: true, message: '账号不能为空', trigger: 'blur' },
    { min: 6, max: 18, message: '账号长度不小于6位和不超过18位', trigger: 'change' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 8, max: 16, message: '帐号长度不小于8位和不超过16位', trigger: 'change' }
  ]
})

// 登录处理
defineExpose({
  loginAction
})

const loginFormRef = ref<FormInstance>()
const accountStore = useAccountStore()
function loginAction(isKeep: boolean) {
  loginFormRef.value?.validate((valid) => {
    if (valid) {
      // 获取输入的帐号密码
      const username = accountForm.account
      const password = accountForm.password
      // 发请求
      accountStore.loginActionRequest({ username, password }).then((res) => {
        // 路由跳转
        if (res.status === 200) {
          router.push('/main')
          if (isKeep) {
            localStorage.setItem('account', username)
            localStorage.setItem('password', password)
          } else {
            localStorage.removeItem('account')
            localStorage.removeItem('password')
          }
        }
      })
    } else {
      ElMessage({
        type: 'error',
        message: '输入有误'
      })
    }
  })
}
</script>

<style scoped lang="less"></style>
