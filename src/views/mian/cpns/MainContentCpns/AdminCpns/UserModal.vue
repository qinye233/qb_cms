<template>
  <div class="user-modal">
    <el-dialog v-model="dialogVisible" :title="isNewRef ? '新建用户' : '编辑用户'" width="30%">
      <el-form label-width="80px" size="large" :model="userInfo">
        <el-form-item label="用户名">
          <el-input v-model="userInfo.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" required>
          <el-input v-model="userInfo.real_name" placeholder="请输入真实姓名"></el-input>
        </el-form-item>
        <el-form-item label="密码" v-if="isNewRef">
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
import { reactive, ref } from 'vue'
import useMainStore from '@/stores/mian/main'
import useAdminStore from '@/stores/mian/admin'

const dialogVisible = ref(false)

const userInfo = reactive<any>({
  username: '',
  real_name: '',
  password: '',
  email: '',
  role_id: '',
  dep_id: ''
})

const isNewRef = ref(true)
let userId = 0

// 显示modal框
function handleModalVisible(isNew: boolean, row?: any) {
  dialogVisible.value = true
  // 设置不是添加用户
  isNewRef.value = isNew
  // 编辑操作
  if (!isNew && row) {
    // 记录userId
    userId = row.id

    // 参数处理（由于设计问题，出现NAME，username两种参数，无法进行遍历操作）
    userInfo['username'] = row['NAME']
    userInfo['real_name'] = row['real_name']
    userInfo['email'] = row['email']
    userInfo['role_id'] = row['role_id']
    userInfo['dep_id'] = row['dep_id']
    delete userInfo.password
    // 添加用户操作
  } else {
    for (const key in userInfo) {
      userInfo[key] = ''
    }
    userId = 0
  }
}

defineExpose({ handleModalVisible })

// 获取部门和角色数据
const { roleInfo, depInfo } = useMainStore()

const adminStore = useAdminStore()
// 新增用户按钮
async function confirmAddNewUser() {
  dialogVisible.value = false
  if (!isNewRef.value) {
    adminStore.fetchUpdateUser({ userId, modifyArg: userInfo })
  } else {
    adminStore.fetchAddNewUser(userInfo)
  }
}
</script>

<style scoped lang="less">
.el-form-item--large {
  margin-bottom: 16px;
}
</style>
