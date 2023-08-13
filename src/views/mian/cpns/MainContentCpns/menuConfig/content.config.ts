const menuContentConfig = {
  pageName: 'menu',
  header: {
    title: '菜单列表',
    btnTitle: '新增菜单'
  },
  tableList: [
    { type: 'selection', label: '选择', width: '80px' },

    { prop: 'id', label: 'ID', width: '80px' },
    { prop: 'name', label: '菜单名称', width: '160px' },
    { type: 'custom', prop: 'enable', label: '状态', width: '120px', slotName: 'enable' },
    { prop: 'url', label: '菜单url' },
    { prop: 'icon', label: '菜单icon', width: '120px' },

    { type: 'handler', label: '操作', width: '200px' }
  ]
}

export default menuContentConfig
