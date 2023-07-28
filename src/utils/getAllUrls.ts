export default function getAllUrls(data: Array<any>) {
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
