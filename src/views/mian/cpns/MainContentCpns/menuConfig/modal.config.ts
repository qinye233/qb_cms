const menuModalConfig = {
  pageName: 'menu',
  header: {
    newTitle: '新建菜单',
    editTitle: '编辑菜单'
  },
  formConfig: [
    {
      type: 'input',
      label: '菜单名称',
      prop: 'name',
      placeholder: '请输入菜单名称'
    },
    {
      type: 'input',
      label: '菜单url',
      prop: 'url',
      placeholder: '请输入菜单url'
    },
    {
      type: 'input',
      label: '菜单icon',
      prop: 'icon',
      placeholder: '请输入菜单icon'
    }
  ]
}

export default menuModalConfig
