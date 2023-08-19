<template>
  <div class="tree">
    <pre>{{ tree }}</pre>
  </div>
</template>

<script setup lang="ts">
const tree = `
.
|-- README.md
|-- auto-imports.d.ts
|-- components.d.ts
|-- env.d.ts
|-- index.html
|-- package-lock.json
|-- package.json
|-- public
|   \`-- favicon.ico
|-- src
|   |-- App.vue
|   |-- assets
|   |   |-- css
|   |   |   |-- common.less
|   |   |   \`-- index.less
|   |   \`-- img
|   |       \`-- v2-ec9ed225d1cb969de540cd1dcb449c2c_r.png
|   |-- components
|   |   |-- ChartCard.vue
|   |   |-- CountCard.vue
|   |   |-- PageChart
|   |   |   |-- BarChart.vue
|   |   |   |-- BaseChart.vue
|   |   |   |-- LineChart.vue
|   |   |   |-- MapChart.vue
|   |   |   |-- PieChart.vue
|   |   |   |-- RoseChart.vue
|   |   |   |-- data
|   |   |   |   \`-- china.json
|   |   |   \`-- utils
|   |   |       |-- convert-data.ts
|   |   |       \`-- coordinate-data.ts
|   |   |-- PageContent.vue
|   |   |-- PageModal.vue
|   |   \`-- PageSearch.vue
|   |-- constants
|   |   \`-- index.ts
|   |-- hooks
|   |   \`-- usePageContent.ts
|   |-- main.ts
|   |-- mock
|   |   \`-- index.ts
|   |-- router
|   |   |-- index.ts
|   |   \`-- routes.ts
|   |-- service
|   |   |-- config
|   |   |   \`-- index.ts
|   |   |-- index.ts
|   |   |-- module
|   |   |   |-- admin.ts
|   |   |   |-- login.ts
|   |   |   |-- main.ts
|   |   |   \`-- overview.ts
|   |   \`-- request
|   |       |-- index.ts
|   |       \`-- type.ts
|   |-- stores
|   |   |-- account
|   |   |   \`-- account.ts
|   |   \`-- mian
|   |       |-- admin.ts
|   |       |-- main.ts
|   |       \`-- overview.ts
|   |-- types
|   |   |-- admin.ts
|   |   |-- index.ts
|   |   \`-- login.ts
|   |-- utils
|   |   |-- cache.ts
|   |   \`-- menu-handle.ts
|   \`-- views
|       |-- 404
|       |   \`-- NotFound.vue
|       |-- login
|       |   |-- LoginIndex.vue
|       |   \`-- cpns
|       |       |-- AccountPane.vue
|       |       |-- EmailPane.vue
|       |       \`-- LoginPanel.vue
|       \`-- mian
|           |-- MainIndex.vue
|           \`-- cpns
|               |-- MainAside.vue
|               |-- MainContent.vue
|               |-- MainContentCpns
|               |   |-- AdminCpns
|               |   |   |-- UserContent.vue
|               |   |   |-- UserModal.vue
|               |   |   \`-- UserSearch.vue
|               |   |-- AdminDepartment.vue
|               |   |-- AdminMenu.vue
|               |   |-- AdminRole.vue
|               |   |-- AdminUser.vue
|               |   |-- CenterCategory.vue
|               |   |-- CenterInfo.vue
|               |   |-- OverviewCommodity.vue
|               |   |-- OverviewTechnology.vue
|               |   |-- departmentConfig
|               |   |   |-- content.config.ts
|               |   |   |-- modal.config.ts
|               |   |   \`-- search.config.ts
|               |   |-- menuConfig
|               |   |   |-- content.config.ts
|               |   |   \`-- modal.config.ts
|               |   |-- overviewCpns
|               |   |   |-- TechStack.vue
|               |   |   \`-- Tree.vue
|               |   \`-- roleConfig
|               |       |-- content.config.ts
|               |       |-- modal.config.ts
|               |       \`-- search.config.ts
|               \`-- MainHeader.vue
|-- tsconfig.app.json
|-- tsconfig.json
|-- tsconfig.node.json
\`-- vite.config.ts
`
</script>

<style scoped lang="less">
.tree {
  .pre {
    margin: 0;
  }
  padding: 0 20px;
}
</style>
