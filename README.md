<!--
 * @Author: xiaoshijie 2457033735@qq.com
 * @Date: 2024-05-06 15:44:51
 * @LastEditors: xiaoshijie 2457033735@qq.com
 * @LastEditTime: 2024-05-28 11:48:46
 * @FilePath: \electron-vite\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

- 基于electron-vite的项目，添加axios、pinia、element-plus、vue-router、tailwindcss

- vue3 + vite + electron

- electron-vite：下一代 Electron 开发构建工具

- 文档：https://cn-evite.netlify.app/

- pinia：Vue.js 状态管理库，类型安全、可扩展性以及模块化设计。甚至让你忘记正在使用的是一个状态库。

- 文档：https://pinia.vuejs.org/

- tailwindcss：只需书写 HTML 代码，无需书写 CSS，即可快速构建美观的网站

```bash
# 可在vscode插件里下载Tailwind CSS IntelliSense提示符
# 示例
<div class="mt-[4px]">示例</div>
# 代表margin-top: 4px; 无需再写css
```

文档：https://www.tailwindcss.cn/

- axios 请求封装 - 一键引入，快捷使用

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

### 如遇到打包问题，可尝试以管理员权限运行命令行

命令：win + x 找到自己项目的地址 输入命令打包
