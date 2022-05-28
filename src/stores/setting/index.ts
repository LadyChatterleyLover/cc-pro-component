import { defineStore } from 'pinia'

export const useSettingStore = defineStore({
  id: 'setting',
  state: () => {
    return {
      themeMode: '' || localStorage.getItem('themeMode')
    }
  },
  actions: {
    setThemeMode(data: string) {
      this.themeMode = data
    } 
  }
})