<template>
  <v-app class="app">
    <router-view class="app" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  })
})
</script>
<style lang="scss" scoped>
.app {
  background: black;
}
</style>
