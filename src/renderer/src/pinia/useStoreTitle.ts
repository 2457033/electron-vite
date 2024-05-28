/*
 * @Author: xiaoshijie 2457033735@qq.com
 * @Date: 2024-05-24 15:45:46
 * @LastEditors: xiaoshijie 2457033735@qq.com
 * @LastEditTime: 2024-05-28 09:42:36
 * @FilePath: \electron-vite\src\renderer\src\pinia\useStoreTitle.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStoreTitle = defineStore('useStoreTitle', () => {
  const title = ref('我是测试文字33333')

  // 修改title
  function increment(value: any) {
    title.value = value
  }

  return { title, increment }
})
