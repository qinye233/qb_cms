const roleContentConfig = {
  pageName: 'role',
  header: {
    title: '角色列表',
    btnTitle: '新增角色'
  },
  tableList: [
    { type: 'selection', label: '选择', width: '80px' },

    { prop: 'id', label: 'ID', width: '80px' },
    { prop: 'name', label: '角色名称', width: '160px' },
    { type: 'custom', prop: 'enable', label: '状态', width: '120px', slotName: 'enable' },
    { prop: 'intro', label: '权限介绍' },

    { type: 'handler', label: '操作', width: '200px' }
  ]
}

export default roleContentConfig
