<template>
  <div class="count-card">
    <div class="header">
      <span>{{ title }}</span>
      <el-tooltip class="box-item" effect="light" :content="tips" placement="bottom">
        <el-icon size="small"><Warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <span class="count" ref="numberRef1">{{ number }}</span>
    </div>
    <el-divider />
    <div class="footer">
      <span>{{ subtitle }}</span>
      <span ref="numberRef2">{{ number }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { CountUp } from 'countup.js'
interface Props {
  amount: string
  title: string
  tips: string
  subtitle: string
  number: number
}
const props = defineProps<Props>()

const numberRef1 = ref<HTMLElement>()
const numberRef2 = ref<HTMLElement>()
onMounted(() => {
  const countup1 = new CountUp(numberRef1.value!, props.number, {})
  const countup2 = new CountUp(numberRef2.value!, props.number, {})
  countup1.start()
  countup2.start()
})
</script>

<style scoped lang="less">
.count-card {
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 20px;
  .header {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: var(--main-font-color);
  }
  .content {
    padding: 10px 0;
    font-size: 24px;
  }
  .footer {
    padding-top: 10px;
    font-size: 14px;
  }
  // 分割线样式
  .el-divider--horizontal {
    margin: 0;
  }
}
</style>
