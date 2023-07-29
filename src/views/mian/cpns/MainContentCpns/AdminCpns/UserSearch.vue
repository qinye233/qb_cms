<template>
  <div class="user-search">
    <el-form
      label-width="80px"
      :model="userSearchForm"
      ref="formRef"
      label-position="right"
      size="large"
    >
      <div class="user-search-form">
        <el-form-item label="用户名" class="user-search-item1" prop="name">
          <el-input placeholder="请输入查询用户名" v-model="userSearchForm.name" />
        </el-form-item>
        <el-form-item label="真实姓名" class="user-search-item1" prop="realName">
          <el-input placeholder="请输入查询姓名" v-model="userSearchForm.realName" />
        </el-form-item>
        <el-form-item label="邮箱" class="user-search-item1" prop="email">
          <el-input placeholder="请输入查询的邮箱" size="large" v-model="userSearchForm.email" />
        </el-form-item>
      </div>
      <div class="user-search-form">
        <el-form-item label="状态" class="user-search-item2" prop="enable">
          <el-select
            class="m-2"
            placeholder="请选择查询状态"
            style="width: 100%"
            v-model="userSearchForm.enable"
          >
            <el-option label="启用" value="1" />
            <el-option label="禁用" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间" class="user-search-item2" prop="createAt">
          <el-date-picker
            v-model="userSearchForm.createAt"
            type="daterange"
            range-separator="-"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          />
        </el-form-item>
      </div>
    </el-form>
    <!-- 重置和查询按钮 -->
    <div class="btns">
      <el-button @click="hanedleRefreshBtn">
        <el-icon><Refresh /></el-icon>
        <span>重置</span>
      </el-button>
      <el-button type="primary">
        <el-icon><Search /></el-icon>
        <span>查询</span>
      </el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
const userSearchForm = reactive({
  name: '',
  realName: '',
  email: '',
  enable: 1,
  createAt: ''
})
const formRef = ref<FormInstance>()
function hanedleRefreshBtn() {
  if (!formRef.value) return
  formRef.value.resetFields()
}
</script>

<style scoped lang="less">
.user-search {
  background-color: #fff;
  .user-search-form {
    display: flex;
    justify-content: flex-start;
  }
  .user-search-item1 {
    flex: 1;
    padding: 40px 20px;
    padding-bottom: 0;
  }
  .user-search-item2 {
    padding: 10px 20px;
  }

  .btns {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    padding-top: 0;
  }
}
</style>
