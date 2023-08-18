import Mock from 'mockjs'
const Random = Mock.Random
function mock() {
  Mock.mock('/goods/amount/list', 'get', amountData)
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

export default mock
