<!-- 设置左边菜单 -->
<script setup lang="ts">
import { onMounted } from 'vue'
import { getRoomDetailApi } from '@renderer/api/test'
import { menus } from './menus'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleSelect = (_index, _indexPath, item) => {
  console.log(item)
}

const handleOpen = (name: string) => {
  router.push({ name: name })
}

onMounted(async () => {
  const res = await getRoomDetailApi()
  console.log(res)
})
</script>

<template>
  <div class="w-[60px] absolute top-0 left-0 bottom-0">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="chat"
      text-color="#fff"
      router
      @select="handleSelect"
      @open="handleOpen"
    >
      <el-menu-item
        v-for="item in menus"
        :key="item.key"
        :index="item.name"
        :route="{ name: item.name }"
      >
        <el-icon v-html="item.icon"></el-icon>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
:deep(.el-menu) {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  height: 100%;
}

:deep(.minimize) {
  border: none !important;
  --el-button-text-color: #4f4f4f !important;
  --el-button-bg-color: none !important;
  --el-button-hover-bg-color: #e2e2e2 !important;
  --el-button-active-bg-color: #d1d1d1 !important;
}

:deep(.maxmize) {
  border: none !important;
  --el-button-text-color: #4f4f4f !important;
  --el-button-bg-color: none !important;
  --el-button-hover-bg-color: #e2e2e2 !important;
  --el-button-active-bg-color: #d1d1d1 !important;
}

:deep(.closemize) {
  border: none !important;
  --el-button-text-color: #999 !important;
  --el-button-bg-color: none !important;
  --el-button-hover-bg-color: #fb7373 !important;
  --el-button-active-bg-color: #e14848 !important;
}
</style>
