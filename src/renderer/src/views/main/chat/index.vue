<!--
 * @Author: xiaoshijie 2457033735@qq.com
 * @Date: 2024-05-27 10:28:05
 * @LastEditors: xiaoshijie 2457033735@qq.com
 * @LastEditTime: 2024-05-28 09:15:55
 * @FilePath: \electron-vite\src\renderer\src\views\main\chat\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { getRoomDetailApi } from '@renderer/api/test'
import { useStoreTitle } from '@renderer/pinia/useStoreTitle'
import { onMounted, ref } from 'vue'

const store = useStoreTitle()

const { increment } = store

const btnClick = () => {
  let a = '我是测试pinia'
  increment(a)
}

const test = ref()

onMounted(async () => {
  const res = await getRoomDetailApi()
  test.value = res.msg
})
</script>

<template>
  <div class="web-app-region-no">
    <div>我是测试主页面</div>
    <div>{{ test }}</div>
    <el-button type="primary" @click="btnClick">我是测试pinia</el-button>
  </div>
</template>

<style lang="less" scoped></style>
