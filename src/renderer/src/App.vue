<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style lang="less">
@import './assets/css/styles.less';

body {
  -webkit-app-region: drag;
}

ul, button {
	-webkit-app-region: no-drag;
}
</style>