const departmentContentConfig = {
  pageName: 'department',
  header: {
    title: '部门列表',
    btnTitle: '新增部门'
  },
  tableList: [
    { type: 'selection', label: '选择', width: '80px' },

    { type: 'normal', prop: 'id', label: 'ID', width: '80px' },
    { type: 'normal', prop: 'name', label: '部门名称', width: '160px' },
    { type: 'custom', prop: 'enable', label: '状态', width: '120px', slotName: 'enable' },
    { type: 'normal', prop: 'leader', label: '部门领导', width: '160px' },
    { type: 'normal', prop: 'address', label: '部门地址' },

    { type: 'handler', label: '操作', width: '200px' }
  ]
}

export default departmentContentConfig
