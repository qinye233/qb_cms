<template>
  <div class="line-chart"><base-chart :option="option" /></div>
</template>

<script setup lang="ts">
import BaseChart from './BaseChart.vue'
import type { EChartsOption } from 'echarts'

const option: EChartsOption = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    top: '5%',
    left: 'left'
  },
  series: [
    {
      name: '商品分类',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
</script>

<style scoped lang="less"></style>
