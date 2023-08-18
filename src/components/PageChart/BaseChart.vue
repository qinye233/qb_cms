<template>
  <div class="base-chart">
    <div class="echart" ref="chartRef"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, onMounted, watchEffect } from 'vue'
import type { EChartsOption } from 'echarts'
import ChinaJSON from './data/china.json'
const chartRef = ref<HTMLElement>()
// 注册好地图和名称
echarts.registerMap('china', ChinaJSON as any)
interface Props {
  option: EChartsOption
}
const props = defineProps<Props>()
onMounted(() => {
  const chartInstance = echarts.init(chartRef.value!)
  watchEffect(() => chartInstance.setOption(props.option))
  window.addEventListener('resize', () => {
    chartInstance.resize()
  })
})
</script>

<style scoped lang="less">
.base-chart {
  padding: 10px;
  height: 280px;
  .echart {
    height: 100%;
  }
}
</style>
