import { defineStore } from 'pinia'
import { menuData } from '@/components/layout/navSide/config'
import type { MenuItem,  } from '@/components/layout/navSide/config'

interface State {
  navList: MenuItem[]
}

export const useNavStore = defineStore({
  id: 'nav',
  state: (): State => {
    return {
      navList: null || JSON.parse(localStorage.getItem('cc-admin-navList')!)
    }
  },
  actions: {
    find(data: MenuItem[], index: string) {
      let current: any = null
      data.map(item => {
        if (item.index === index) current = item
        else {
          if (item.children && item.children) {
            if (this.find(item.children, index)) current = this.find(item.children, index)
          }
        }
      })
      return current
    },
    setNav(data: MenuItem[]) {
      this.navList = data
    },
    pushNav(item: MenuItem) {
      const current = this.find(menuData, item.index)
      let navList = localStorage.getItem('cc-admin-navList')
      if (navList) {
        let arr = JSON.parse(navList!)
        let nav = arr.find((i: MenuItem) => i.index === item.index)
        if (!nav) {
          arr.push(current)
          localStorage.setItem('cc-admin-navList', JSON.stringify(arr))
          this.navList = arr
        }
      } else {
        let arr: MenuItem[] = []
        localStorage.setItem('cc-admin-navList', JSON.stringify(arr))
        this.navList = arr
      }
    }
  }
})
