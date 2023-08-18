import Mock from 'mockjs'
const Random = Mock.Random
function mock() {
  Mock.mock('/goods/amount/list', 'get', amountData)
  Mock.mock('/goods/category/count', 'get', categoryCountData)
  Mock.mock('/goods/city/sale', 'get', citySaleData)
}

// 数目统计数据模拟
function amountData() {
  const data = [
    {
      amount: 'sale',
      title: '商品总销量',
      tips: '所有商品的总销量',
      subtitle: '商品总销量',
      number: Random.integer(56101, 310184185)
    },
    {
      amount: 'favor',
      title: '商品总收藏',
      tips: '所有商品的总收藏',
      subtitle: '商品总收藏',
      number: Random.integer(231311, 313131318)
    },
    {
      amount: 'repertory',
      title: '商品总库存',
      tips: '所有商品的总库存',
      subtitle: '商品总库存',
      number: Random.integer(41635443, 41653254234)
    },
    {
      amount: 'total_sales',
      title: '商品总销售额',
      tips: '所有商品的总销售额',
      subtitle: '商品总销售额',
      number: Random.integer(61536516, 45625616163)
    }
  ]
  return data
}

// 分类商品数量
function categoryCountData() {
  const data = [
    { value: 1048, name: '上衣' },
    { value: 735, name: '裤子' },
    { value: 820, name: '鞋子' },
    { value: 484, name: '厨具' },
    { value: 161, name: '家具' },
    { value: 300, name: '床上用品' },
    { value: 565, name: '女装' }
  ]
  return data
}

// 城市数据
function citySaleData() {
  const data = [
    { name: '杭州', value: '240' },
    { name: '苏州', value: '480' },
    { name: '锦州', value: '110' },
    { name: '成都', value: '180' },
    { name: '重庆', value: '160' },
    { name: '广州', value: '450' },
    { name: '深圳', value: '420' },
    { name: '北京', value: '35000' },
    { name: '天津', value: '220' },
    { name: '郑州', value: '120' },
    { name: '大理', value: '90' },
    { name: '贵州', value: '60' },
    { name: '上海', value: '120000' }
  ]
  return data
}

export default mock
