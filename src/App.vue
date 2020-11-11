<template>
  <app-main msg="Hello Vue 3.0 + Vite" />
</template>

<script>

import AppMain from './views/main/_index.vue'

export default {
  name: 'App',
  components: {
    AppMain
  }
}
</script>


<style lang="scss">



// ::-webkit-scrollbar-track
// {
// 	border: 5px solid white;
// 	// border color does not support transparent on scrollbar
// 	// border-color: transparent;
// 	background-color: #b2bec3;
// }

// ::-webkit-scrollbar
// {
// 	width: 15px;
// 	background-color: #dfe6e9;
// }

// ::-webkit-scrollbar-thumb
// {
// 	background-color: #74b9ff;
// 	border-radius: 10px;
// }
</style>