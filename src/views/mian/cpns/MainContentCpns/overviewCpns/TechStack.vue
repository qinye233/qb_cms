<template>
  <div class="tech-stack">
    <template v-for="item in techStackInfo" :key="item.name">
      <ul class="stack-info">
        <li>{{ item.name }}:</li>
        <span class="text">{{ item.value }}</span>
      </ul>
    </template>
    <div class="dependencies">
      <el-descriptions title="生产依赖" :column="3" border>
        <template v-for="(value, key) in packageInfo.dependencies" :key="key">
          <el-descriptions-item :label="key" label-align="left" align="center" width="150px"
            ><el-tag>
              {{ value }}
            </el-tag></el-descriptions-item
          >
        </template>
      </el-descriptions>
    </div>
    <div class="dev-dependencies">
      <el-descriptions title="开发依赖" :column="3" border>
        <template v-for="(value, key) in packageInfo.devDependencies" :key="key">
          <el-descriptions-item :label="key" label-align="left" align="center" width="150px"
            ><el-tag>
              {{ value }}
            </el-tag></el-descriptions-item
          >
        </template>
      </el-descriptions>
    </div>
  </div>
</template>

<script setup lang="ts">
import packageInfo from '../../../../../../package.json'
const techStackInfo = [
  { name: '开发工具', value: 'Visual Studio Code' },
  { name: '编程语言', value: 'TypeScript 4.x + JavaScript' },
  { name: '构建工具', value: 'vite 4.x ' },
  { name: '前端框架', value: 'Vue 3.x' },
  { name: '路由工具', value: 'VueRouter 4.x' },
  { name: '状态管理', value: 'pinia' },
  { name: 'UI框架', value: 'Element Plus' },
  { name: '可视化', value: 'Echarts 5.x' },
  { name: '工具库', value: 'dayjs + countupjs' },
  { name: 'CSS预编译', value: 'Less' },
  { name: 'HTTP工具', value: 'Axios' },
  { name: 'Git Hook工具', value: 'husky' },
  { name: '代码规范', value: 'EditorConfig + Prettier + ESLint' },
  { name: '提交规范', value: 'Commitizen + Commitlint' },
  { name: '自动部署', value: 'CentOs + jerkins + Nginx' }
]
</script>

<style scoped lang="less">
.tech-stack {
  overflow: hidden;
  .stack-info {
    display: flex;
    margin: 5px 0;
    .text {
      padding: 0 10px;
      color: var(--el-menu-hover-bg-color);
    }
  }
  .dependencies,
  .dev-dependencies {
    padding: 20px;
  }
}
</style>
