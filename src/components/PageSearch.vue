<template>
  <div class="search">
    <el-form
      label-width="80px"
      :model="SearchForm"
      ref="formRef"
      label-position="right"
      size="large"
    >
      <el-row :gutter="20">
        <template v-for="config in searchConfig" :key="config.prop">
          <el-col :span="8" justify="space-around">
            <el-form-item :label="config.label" :prop="config.prop">
              <template v-if="config.type === 'input'">
                <el-input
                  v-model="SearchForm[config.prop]"
                  :placeholder="config.placeholder"
                ></el-input>
              </template>
              <template v-if="config.type === 'date-picker'">
                <el-date-picker
                  v-model="SearchForm[config.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                ></el-date-picker>
              </template>
              <template v-if="config.type === 'select'">
                <el-select
                  v-model="SearchForm[config.prop]"
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
              </template>
            </el-form-item>
          </el-col> </template
      ></el-row>
    </el-form>
    <!-- 重置和查询按钮 -->
    <div class="btns">
      <el-button @click="hanedleRefreshBtn">
        <el-icon><Refresh /></el-icon>
        <span>重置</span>
      </el-button>
      <el-button type="primary" @click="handleQueryBtn">
        <el-icon><Search /></el-icon>
        <span>查询</span>
      </el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
interface Form {
  searchConfig: any
}

const emit = defineEmits(['queryBtnClick', 'resetBtnClick'])
const props = defineProps<Form>()
// 初始化表单数据
const initialForm: any = {}
for (const config of props.searchConfig) {
  initialForm[config.prop] = ''
}
const SearchForm = reactive(initialForm)
const formRef = ref<FormInstance>()

// 重置数据
function hanedleRefreshBtn() {
  if (!formRef.value) return
  formRef.value.resetFields()
  emit('resetBtnClick')
}


function handleQueryBtn() {
  emit('queryBtnClick', SearchForm)
}
</script>

<style scoped lang="less">
.search {
  background-color: #fff;
  .el-row {
    padding: 40px 20px;
    padding-bottom: 0;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    padding-top: 0;
  }
}
</style>
