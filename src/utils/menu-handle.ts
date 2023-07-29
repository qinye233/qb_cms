export function getAllUrls(data: Array<any>) {
  let urls: string[] = []
  data.forEach((item) => {
    urls.push(item.url)
    if (item.children) {
      const childrenUrls = getAllUrls(item.children)
      urls = urls.concat(childrenUrls)
    }
  })
  return urls
}

export function mapPathToMenu(path: string, menuTree: any) {
  for (const menu of menuTree) {
    for (const subMenu of menu.children) {
      if (subMenu.url === path) {
        return subMenu
      }
    }
  }
}

export function mapBreadCrumb(path: string, menuTree: any): any[] {
  const breadCrumb: object[] = []
  for (const menu of menuTree) {
    for (const subMenu of menu.children) {
      if (subMenu.url === path) {
        breadCrumb.push({ name: menu.name })
        breadCrumb.push({ name: subMenu.name })
      }
    }
  }
  return breadCrumb
}
