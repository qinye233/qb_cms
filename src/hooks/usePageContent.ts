import { ref } from 'vue'
import type PageModal from '@/components/PageModal.vue'
import type PageContent from '@/components/PageContent.vue'
function useModalSearch() {
  const modalRef = ref<InstanceType<typeof PageModal>>()
  const ctxRef = ref<InstanceType<typeof PageContent>>()
  // 点击查询
  function handleQuery(formData: any) {
    ctxRef.value?.fetchListData(formData)
  }
  // 点击重置
  function handleReset() {
    ctxRef.value?.fetchListData()
  }

  //点击新建
  function handleNewClick() {
    modalRef.value?.handleModalVisible(true)
  }
  // 点击编辑
  function handleUpdateClick(row: any) {
    modalRef.value?.handleModalVisible(false, row)
  }
  return {
    modalRef,
    ctxRef,
    handleQuery,
    handleReset,
    handleNewClick,
    handleUpdateClick
  }
}

export default useModalSearch
