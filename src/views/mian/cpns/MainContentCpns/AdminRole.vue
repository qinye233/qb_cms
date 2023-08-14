<template>
  <div class="admin-role">
    <page-search
      :searchConfig="roleFormConfig"
      @queryBtnClick="handleQuery"
      @resetBtnClick="handleReset"
    />
    <page-content
      :contentConfig="roleContentConfig"
      ref="ctxRef"
      @newBtnClick="handleNewClick"
      @updateBtnClick="handleUpdateClick"
    >
      <template #enable="scope">
        <el-tag v-if="scope.row.enable" type="success">启用</el-tag>
        <el-tag v-else type="danger">禁用</el-tag>
      </template></page-content
    >
    <page-modal :modalConfig="roleModalConfig" ref="modalRef">
      <template #menu>
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[1, 2]"
          :default-checked-keys="menuIds"
          :props="defaultProps"
        />
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import PageSearch from '@/components/PageSearch.vue'
import PageContent from '@/components/PageContent.vue'
import PageModal from '@/components/PageModal.vue'

import roleModalConfig from './roleConfig/modal.config'
import roleContentConfig from './roleConfig/content.config'
import roleFormConfig from './roleConfig/search.config'

import useModalSearch from '@/hooks/usePageContent'
import useMainStore from '@/stores/mian/main'
import { getMenuTree } from '@/service/module/main'
import { getAllId } from '@/utils/menu-handle'

const mainStore = useMainStore()
const data = mainStore.allMenuTree

const menuIds = ref<any[]>([])

function newCallBack() {
  menuIds.value = []
}
watch(menuIds, (newValue: any) => {
  console.log(newValue)
})

function editCallBack(data: any) {
  getMenuTree(data.id).then((res) => {
    const ids = getAllId(res.data)
    menuIds.value = ids
  })
}
// 树形控件参数
const defaultProps = {
  children: 'children',
  label: 'name'
}

const { modalRef, ctxRef, handleNewClick, handleUpdateClick, handleQuery, handleReset } =
  useModalSearch(editCallBack, newCallBack)
</script>

<style scoped lang="less"></style>
