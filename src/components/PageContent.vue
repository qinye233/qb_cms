<template>
  <div class="content">
    <div class="header">
      <h3>{{ contentConfig.header.title }}</h3>
      <el-button type="primary" @click="handleNewClick">{{
        contentConfig.header.btnTitle
      }}</el-button>
    </div>
    <div class="user-list">
      <el-table
        :data="list"
        :cell-style="{ 'text-align': 'center' }"
        :header-cell-style="{ 'text-align': 'center' }"
        stripe
        border
        fit
      >
        <template v-for="item in contentConfig.tableList" :key="item.prop">
          <template v-if="item.type === 'handler'">
            <el-table-column v-bind="item">
              <template #default="scope">
                <el-button
                  text
                  icon="Edit"
                  type="primary"
                  size="small"
                  @click="updateData(scope.row)"
                  >编辑</el-button
                >
                <el-button
                  text
                  icon="Delete"
                  type="danger"
                  size="small"
                  @click="deleteData(scope.row.id)"
                  >删除</el-button
                >
              </template>
            </el-table-column></template
          >
          <template v-else-if="item.type === 'custom'">
            <el-table-column v-bind="item">
              <template #default="scope">
                <slot :name="item.slotName" v-bind="scope"></slot>
              </template>
            </el-table-column>
          </template>
          <template v-else>
            <el-table-column v-bind="item"></el-table-column>
          </template>
        </template>
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

interface Props {
  contentConfig: {
    pageName: string
    header: {
      title: string
      btnTitle: string
    }
    tableList: any
  }
}

const props = defineProps<Props>()

const adminStore = useAdminStore()
const { list, pageTotal } = storeToRefs(adminStore)

// 请求用户列表
function fetchListData(queryFormData?: any) {
  adminStore.fetchList(props.contentConfig.pageName, { size: 10, offset: 1, ...queryFormData })
}
defineExpose({ fetchListData })

fetchListData()

// 换页请求
function handleChangePage(index: number) {
  if (pageTotal.value) {
    adminStore.fetchList(props.contentConfig.pageName, { size: 10, offset: index })
  }
}

// 删除请求
function deleteData(id: number) {
  // 删除数据
  adminStore.fetchDeleteData(props.contentConfig.pageName, id)
}

const emit = defineEmits(['newBtnClick', 'updateBtnClick'])
// 编辑用户
function updateData(row: any) {
  emit('updateBtnClick', row)
}

// 添加用户
function handleNewClick() {
  emit('newBtnClick')
}
</script>

<style scoped lang="less">
.content {
  background-color: #fff;
  margin-top: 20px;
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
