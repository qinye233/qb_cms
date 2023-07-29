<template>
  <div class="main-aside">
    <div class="logo">
      <img
        src="https://p26-passport.byteacctimg.com/img/user-avatar/27f273980e0597820475cc6fd66cf037~180x180.awebp?"
        alt="qb_logo"
        class="logo-img"
      />
      <span :class="['logo-name', { 'show-name': isCollapse }]">qb管理系统</span>
    </div>
    <div class="main-aside-menu">
      <el-menu
        :default-active="menuId"
        text-color="#fff"
        :collapse="isCollapse"
        class="el-main-menu"
      >
        <!-- 动态菜单 -->
        <template v-for="item in menuTree" :key="item.id">
          <el-sub-menu :index="String(item.id)">
            <template #title>
              <el-icon><component :is="item.icon"></component></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subTree in item.children" :key="subTree.id">
              <el-menu-item :index="String(subTree.id)" @click="handleDisplay(subTree.url)">{{
                subTree.name
              }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { useRoute } from 'vue-router'
import useAccountStore from '@/stores/account/account'
import { mapPathToMenu } from '@/utils/menu-handle'

defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})

const accountStore = useAccountStore()
const menuTree = accountStore.menuTree

function handleDisplay(path: string) {
  router.push(path)
}

const route = useRoute()
const active = mapPathToMenu(route.path, menuTree)
const menuId = String(active.id)
</script>

<style scoped lang="less">
.logo {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo-img {
    height: 40px;
  }
  .logo-name {
    font-size: 1.2rem;
    color: aliceblue;
    font-weight: 600;
    padding: 0 10px;
    white-space: nowrap;
  }
  .show-name {
    display: none;
  }
}
.el-main-menu {
  background-color: var(--el-sub-backg-color);
  border: 0;
  .el-sub-menu .is-active {
    background-color: #337ecc;
    color: #fff;
  }
  .el-menu-item:hover {
    background-color: #337ecc;
  }
}
.el-menu-item {
  background-color: var(--el-backg-color);
}
</style>
