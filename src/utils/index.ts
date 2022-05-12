export const find = (data: MenuItem[], index: string) => {
  let current: any = null
  data.map(item => {
    if (item.index === index) current = item
    else {
      if (item.children && item.children) {
        if (find(item.children, index)) current = find(item.children, index)
      }
    }
  })
  return current
}

export const findParent = (data: MenuItem[], index: string) => {
  let current: any = null
  data.map(item => {
    if (item.index === index) current = item
  })
  return current
}
export const findItem = (data: MenuItem[], index: string) => {
  let current: any = null
  data.map(item => {
    if (item.index === index) current = item
    else {
      if (item.children && item.children) {
        if (findItem(item.children, index)) current = findItem(item.children, index)
      }
    }
  })
  return current
}