<template>
  <div class="overview-commodity">
    <!-- 数据概览 -->
    <el-row :gutter="10">
      <template v-for="item in overviewAmount" :key="item.amount">
        <el-col :span="6">
          <count-card v-bind="item" />
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="7"
        ><chart-card title="分类商品数量（饼图）"
          ><pie-chart :pieData="overviewCategoryCount" /></chart-card
      ></el-col>
      <el-col :span="10"
        ><chart-card title="商品销售分布"><map-chart :map-data="overviewCitySale" /></chart-card
      ></el-col>
      <el-col :span="7"
        ><chart-card title="分类商品数量（玫瑰图）"
          ><rose-chart :roseData="overviewCategoryCount" /></chart-card
      ></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12"
        ><chart-card title="分类商品的销量"><line-chart v-bind="showCategoryCount" /></chart-card
      ></el-col>
      <el-col :span="12"
        ><chart-card title="分类商品的收藏"><bar-chart v-bind="showCategoryCount" /></chart-card
      ></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import CountCard from '@/components/CountCard.vue'
import ChartCard from '@/components/ChartCard.vue'
import LineChart from '@/components/PageChart/LineChart.vue'
import BarChart from '@/components/PageChart/BarChart.vue'
import PieChart from '@/components/PageChart/PieChart.vue'
import RoseChart from '@/components/PageChart/RoseChart.vue'
import MapChart from '@/components/PageChart/MapChart.vue'
import useOverviewStore from '@/stores/mian/overview'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const overviewStore = useOverviewStore()
overviewStore.fetchOverviewData()

const { overviewAmount, overviewCategoryCount, overviewCitySale } = storeToRefs(overviewStore)

const showCategoryCount = computed(() => {
  const labels = overviewCategoryCount.value.map((item: any) => item.name)
  const values = overviewCategoryCount.value.map((item: any) => item.value)
  return { labels, values }
})
</script>

<style scoped lang="less"></style>
