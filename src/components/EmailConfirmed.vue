<template>
  <div class="error-page-wrapper">
    <div class="margin error-page">
      <h1 class="golden-sign white-text">Почта подтверждена</h1>
      <h1 v-if="!confirmed" class="golden-sign white-text">Почта подтверждена</h1>
      <v-btn @click="$router.push('/')">Главная</v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      confirmed: true
    }
  }
})
</script>
<style lang="scss" scoped>
.error-page {
  margin-top: 60px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.error-page-wrapper {
  background-color: $primary-color;
}
</style>
