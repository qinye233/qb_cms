<template>
  <div class="user-content">
    <div class="header">
      <h3>用户列表</h3>
      <el-button type="primary">新增用户</el-button>
    </div>
    <div class="user-list">
      <el-table
        :data="userList"
        :cell-style="{ 'text-align': 'center' }"
        :header-cell-style="{ 'text-align': 'center' }"
        stripe
        border
        fit
      >
        <el-table-column type="selection" />
        <el-table-column prop="id" label="ID" width="50px" />
        <el-table-column prop="NAME" label="昵称" width="150px" />
        <el-table-column prop="real_name" label="真实姓名" width="120px" />
        <el-table-column prop="enable" label="状态" width="120px">
          <template #default="scope">
            <el-tag v-if="scope.row.enable" type="success">启用</el-tag>
            <el-tag v-else type="danger">禁用</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="email" label="邮箱" />
        <el-table-column prop="dep_id" label="部门编号" width="120px" />
        <el-table-column prop="role_id" label="角色编号" width="120px" />
        <el-table-column label="操作" width="200px">
          <el-button text icon="Edit" type="primary" size="small">编辑</el-button>
          <el-button text icon="Delete" type="danger" size="small">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-count="pageTotal"
        @current-change="handleChangePage"
        @prev-click="handleChangePage"
        @next-click="handleChangePage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useAdminStore from '@/stores/mian/admin'
import { storeToRefs } from 'pinia'

const adminStore = useAdminStore()
adminStore.fetchUserList({ size: 10, offset: 1 })
const { userList, pageTotal } = storeToRefs(adminStore)

function handleChangePage(index: number) {
  adminStore.fetchUserList({ size: 10, offset: index })
}
</script>

<style scoped lang="less">
.user-content {
  background-color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 12px 20px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .el-button {
    padding: 2px;
  }
  .pagination {
    display: flex;
    justify-content: flex-end;
    padding: 16px;
  }
}
</style>
