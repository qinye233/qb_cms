<template>
  <div class="line-chart"><base-chart :option="option" /></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseChart from './BaseChart.vue'
import type { EChartsOption } from 'echarts'

interface Props {
  roseData: any[]
}
const props = defineProps<Props>()
const option = computed<EChartsOption>(() => {
  return {
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: '商品分类',
        type: 'pie',
        radius: [10, 160],
        center: ['50%', '50%'],
        roseType: 'area',
        left: 'center',
        bottom: '-15%',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData,
        label: {
          show: false
        }
      }
    ]
  }
})
</script>

<style scoped lang="less"></style>
