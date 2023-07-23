<template>
  <div class="mian-index">
    <el-container class="main-container">
      <el-aside :width="asideWidth" class="el-aside">
        <main-aside :isCollapse="isAsideCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <main-header @changeCollapse="handleAsideCollapse" />
        </el-header>
        <el-main>
          <main-content />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainAside from './cpns/MainAside.vue'
import MainContent from './cpns/MainContent.vue'
import MainHeader from './cpns/MainHeader.vue'
import { ref } from 'vue'

const isAsideCollapse = ref(false)
const asideWidth = ref<string>('210px')
function handleAsideCollapse(isCollapse: boolean) {
  isAsideCollapse.value = isCollapse
  if (isCollapse) {
    asideWidth.value = '64px'
  } else {
    asideWidth.value = '210px'
  }
}
</script>

<style scoped lang="less">
.mian-index,
.main-container {
  height: 100%;
}
.el-aside {
  background-color: var(--el-backg-color);
  transition: width 0.3s ease-in-out;
}
.el-aside::-webkit-scrollbar {
  display: none;
}
.el-header {
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  padding: 0;
}
.el-main {
  padding: 0;
}
</style>
