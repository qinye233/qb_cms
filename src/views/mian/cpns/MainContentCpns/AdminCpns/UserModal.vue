<template>
  <div class="user-modal">
    <el-dialog v-model="dialogVisible" title="新增用户" width="30%">
      <el-form label-width="80px" size="large" :model="userInfo">
        <el-form-item label="用户名">
          <el-input v-model="userInfo.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" required>
          <el-input v-model="userInfo.real_name" placeholder="请输入真实姓名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="userInfo.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="userInfo.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="选择角色">
          <el-select v-model="userInfo.role_id" style="width: 100%">
            <template v-for="role in roleInfo" :key="role.id">
              <el-option :label="role.name" :value="role.id" />
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="选择部门">
          <el-select v-model="userInfo.dep_id" style="width: 100%">
            <template v-for="dep in depInfo" :key="dep.id">
              <el-option :label="dep.name" :value="dep.id" />
            </template>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmAddNewUser"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ref } from 'vue'
import useMainStore from '@/stores/mian/main'
import { addNewUser } from '@/service/module/admin';

const dialogVisible = ref(false)

// 显示modal框
function handleModalVisible() {
  dialogVisible.value = true
}

defineExpose({ handleModalVisible })

const userInfo = reactive({
  username: '',
  real_name: '',
  password: '',
  email: '',
  role_id: '',
  dep_id: ''
})
// 获取部门和角色数据
const { roleInfo, depInfo } = useMainStore()

// 新增用户按钮
function confirmAddNewUser() {
  dialogVisible.value = false
  addNewUser(userInfo)
}
</script>

<style scoped lang="less">
.el-form-item--large {
  margin-bottom: 16px;
}
</style>
