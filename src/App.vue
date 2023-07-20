<template>
  <div class="app">
    <h2>这是一个管理系统</h2>
    <router-link to="/main">首页</router-link>
    <router-link to="/login">登录页</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less"></style>
