<template>
  <div class="manufactorers">
    <div
      v-for="(maunufactorer, index) in manufactorers.list"
      :key="`${index}`"
    >
      <brand-card :maunufactorer="maunufactorer"/>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { manufactorers } from './manufacturer'
import BrandCard from './BrandCard.vue'

export default Vue.extend({
  data () {
    return {
      manufactorers
    }
  },

  components: {
    BrandCard
  }
})
</script>
<style lang="scss" scoped>
.manufactorers {
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  padding: 20px;
  margin: auto;
  margin-top: 50px
}
</style>
