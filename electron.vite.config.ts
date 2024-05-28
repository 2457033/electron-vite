import path, { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { loadEnv } from 'vite'
import dotenv from 'dotenv'

export default ({ mode }) => {
  const env = loadEnv(mode, path.resolve(process.cwd(), 'env'))
  console.log('env -> ', env)
  dotenv.config({ path: path.resolve(process.cwd(), 'env') })
  return defineConfig({
    main: {
      plugins: [externalizeDepsPlugin()]
    },
    preload: {
      plugins: [externalizeDepsPlugin()]
    },
    renderer: {
      // 指定env的文件，如果需要在根目录就不需要写
      envDir: path.resolve(process.cwd(), 'env'),
      resolve: {
        alias: {
          '@renderer': resolve('src/renderer/src')
        }
      },
      plugins: [
        vue(),
        // 自动引入element
        AutoImport({
          resolvers: [ElementPlusResolver()]
        }),
        Components({
          resolvers: [ElementPlusResolver()]
        })
      ]
    }
  })
}
