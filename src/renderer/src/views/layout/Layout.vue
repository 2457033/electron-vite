<!--
 * @Author: xiaoshijie 2457033735@qq.com
 * @Date: 2024-05-06 16:02:04
 * @LastEditors: xiaoshijie 2457033735@qq.com
 * @LastEditTime: 2024-05-28 11:27:05
 * @FilePath: \electron-vite\src\renderer\src\views\layout\Layout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref } from 'vue'
import Menus from '@renderer/views/layout/components/Menus.vue'
import Header from './components/header.vue'

const setwin = ref('win')
</script>

<template>
  <div :class="setwin">
    <div class="common-layout h-full">
      <el-container>
        <el-aside width="200px">
          <Menus />
        </el-aside>
        <el-container>
          <el-header>
            <Header />
          </el-header>
          <el-main>
            <RouterView />
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<style lang="less" scoped>
.win {
  width: calc(100% - 3px);
  height: calc(100vh);
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  position: relative;
}
</style>
