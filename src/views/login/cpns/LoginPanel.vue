<template>
  <div class="login-panel">
    <h1>qb后台管理系统</h1>
    <div class="tabs">
      <!-- 登录框 -->
      <el-tabs type="border-card" :stretch="true" v-model="activeName">
        <!-- 账号登录栏 -->
        <el-tab-pane name="account">
          <template #label>
            <el-icon size="18"><User /></el-icon>
            <span class="label-text">帐号登录</span>
          </template>
          <account-pane ref="accountRef" />
        </el-tab-pane>
        <!-- 邮箱登录栏 -->
        <el-tab-pane name="email">
          <template #label>
            <el-icon size="18"><Message /></el-icon>
            <span class="label-text">邮箱登录</span>
          </template>
          <email-pane />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox v-model="isKeep" label="忘记密码" size="large" />
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="handleLoginBtnClick">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AccountPane from './AccountPane.vue'
import EmailPane from './EmailPane.vue'
import { watch } from 'vue'
import { localCache } from '@/utils/cache'

const activeName = ref('account')
const isKeep = ref<boolean>(localCache.getCache('isKeep') ?? false)
watch(isKeep, (newValue) => {
  localCache.setCache('isKeep', newValue)
})
const accountRef = ref<InstanceType<typeof AccountPane>>()

function handleLoginBtnClick() {
  if (activeName.value === 'account') {
    accountRef.value?.loginAction(isKeep.value)
  } else {
    console.log('使用邮箱登录')
  }
}
</script>

<style scoped lang="less">
.login-panel {
  width: 330px;
  padding: 10px 20px;
  text-align: center;

  .label-text {
    padding-left: 5px;
  }
  .controls {
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
