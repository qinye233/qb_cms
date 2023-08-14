<template>
  <div class="user-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="isNewRef ? modalConfig.header.newTitle : modalConfig.header.editTitle"
      width="30%"
    >
      <el-form label-width="80px" size="large" :model="formData">
        <template v-for="config in modalConfig.formConfig" :key="config.prop">
          <el-form-item :label="config.label" :prop="config.prop">
            <template v-if="config.type === 'input'">
              <el-input
                v-model="formData[config.prop]"
                :placeholder="config.placeholder"
              ></el-input>
            </template>
            <template v-if="config.type === 'custom'">
              <slot :name="config.slotName" ></slot>
            </template>
            <template v-if="config.type === 'select'">
              <el-select
                v-model="formData[config.prop]"
                :placeholder="config.placeholder"
                style="width: 100%"
              >
                <el-option
                  v-for="option in config.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
            </template> </el-form-item
        ></template>
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
import useAdminStore from '@/stores/mian/admin'

const dialogVisible = ref(false)
interface Props {
  modalConfig: {
    pageName: string
    header: {
      newTitle: string
      editTitle: string
    }
    formConfig: any
  }
}

const props = defineProps<Props>()
const initialValue: any = {}
for (const item of props.modalConfig.formConfig) {
  initialValue[item.prop] = ''
}

const formData = reactive<any>(initialValue)

const isNewRef = ref(true)
// 记录操作的ID
let id = 0

// 显示modal框
function handleModalVisible(isNew: boolean, row?: any) {
  dialogVisible.value = true
  // 设置不是添加用户
  isNewRef.value = isNew
  // 编辑操作
  if (!isNew && row) {
    // 记录userId
    id = row.id
    for (const key in formData) {
      formData[key] = row[key]
    }
  } else {
    for (const key in formData) {
      formData[key] = ''
    }
    id = 0
  }
}

defineExpose({ handleModalVisible })

const adminStore = useAdminStore()
// 新增用户按钮
async function confirmAddNewUser() {
  dialogVisible.value = false
  if (!isNewRef.value) {
    adminStore.fetchUpdateData(props.modalConfig.pageName, { id, modifyArg: formData })
  } else {
    adminStore.fetchAddNewData(props.modalConfig.pageName, formData)
  }
}
</script>

<style scoped lang="less">
.el-form-item--large {
  margin-bottom: 16px;
}
</style>
