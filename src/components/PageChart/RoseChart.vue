<template>
  <div class="line-chart"><base-chart :option="option" /></div>
</template>

<script setup lang="ts">
import BaseChart from './BaseChart.vue'
import type { EChartsOption } from 'echarts'

const option: EChartsOption = {
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
      data: [
        { value: 40, name: 'rose 1' },
        { value: 33, name: 'rose 2' },
        { value: 28, name: 'rose 3' },
        { value: 22, name: 'rose 4' },
        { value: 20, name: 'rose 5' },
        { value: 15, name: 'rose 6' },
        { value: 12, name: 'rose 7' },
        { value: 10, name: 'rose 8' }
      ],
      label: {
        show: false
      }
    }
  ]
}
</script>

<style scoped lang="less"></style>
