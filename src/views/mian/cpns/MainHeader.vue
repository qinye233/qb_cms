<template>
  <div class="main-header">
    <div class="left">
      <div class="collapse-btn" @click="handleCollapseStatus">
        <el-icon :size="26">
          <component :is="isCollapse ? 'fold' : 'expand'"></component>
        </el-icon>
      </div>
      <div class="bread-crumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">小面包</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="right">
      <div class="header-icon">
        <el-icon :size="20"><Message /></el-icon>
      </div>
      <div class="header-icon">
        <el-icon :size="20"><Bell /></el-icon>
      </div>
      <div class="header-icon">
        <el-icon :size="20"><Search /></el-icon>
      </div>
      <div class="header-icon personal-info">
        <img
          class="avatar-img"
          src="https://avatars.githubusercontent.com/u/115051391?s=400&v=4"
          alt="avatar"
        />
        <el-dropdown @command="handleItem">
          <span class="el-dropdown-link">
            quirkybird
            <el-icon><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="exitSys">退出系统</el-dropdown-item>
              <el-dropdown-item command="personalInfo" divided>个人信息</el-dropdown-item>
              <el-dropdown-item command="fixPwd">修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from '@/constants'
import router from '@/router'
import { ref } from 'vue'

const isCollapse = ref(false)
const emit = defineEmits(['changeCollapse'])
function handleCollapseStatus() {
  isCollapse.value = !isCollapse.value
  emit('changeCollapse', isCollapse.value)
}

function handleItem(command: string | number | object) {
  if (command === 'exitSys') {
    localStorage.removeItem(LOGIN_TOKEN)
    router.push('/login')
  }
}
</script>

<style scoped lang="less">
.main-header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left,
  .right {
    padding: 0 20px;
  }

  .left {
    display: flex;
    align-items: center;
    .collapse-btn {
      padding: 0 10px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .header-icon {
      padding: 10px;
    }
    .avatar-img {
      width: 30px;
    }
  }
}
</style>
