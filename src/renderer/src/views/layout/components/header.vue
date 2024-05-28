<!-- 自定义最小化，最大化和关闭 -->
<script setup lang="ts">
import { onMounted } from 'vue'
import { FullScreen, SemiSelect, Close } from '@element-plus/icons-vue'
import { useStoreTitle } from '@renderer/pinia/useStoreTitle'
import { storeToRefs } from 'pinia'

const titleStore = useStoreTitle()

const { title } = storeToRefs(titleStore)

const minSizeClick = () => {
  window.electron.ipcRenderer.send('min')
}

const maxSizeClick = () => {
  window.electron.ipcRenderer.send('max')
}

const closeClick = () => {
  window.electron.ipcRenderer.send('close')
}

onMounted(async () => {
  console.log(title)
})
</script>

<template>
  <div class="h-full w-full flex items-center">
    <div class="cursor-pointer web-app-region-no text-xl">{{ title }}</div>
    <!-- 右上角 -->
    <div class="absolute right-0 -top-[2px]">
      <el-button-group>
        <el-button
          class="minimize"
          type="primary"
          size="small"
          :icon="SemiSelect"
          @click="minSizeClick"
        />
        <el-button
          class="maxmize"
          type="primary"
          size="small"
          :icon="FullScreen"
          @click="maxSizeClick"
        />
        <el-button
          class="closemize"
          type="primary"
          size="small"
          :icon="Close"
          @click="closeClick"
        />
      </el-button-group>
    </div>
  </div>
</template>

<style lang="less" scoped>
:deep(.minimize) {
  border: none !important;
  --el-button-text-color: #4f4f4f !important;
  --el-button-hover-text-color: #4f4f4f !important;
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
