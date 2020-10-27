<template>
  <div class="card">
    <div class="img">
      <img style="height: 250px; width: 200px; object-fit: cover;" :src="maunufactorer.img">
    </div>
    <span style="color: white; margin: auto;">{{ maunufactorer.name.toUpperCase() }} </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { WatchManufactorer } from './manufacturer'

export default Vue.extend({
  props: {
    maunufactorer: {
      type: Object as () => WatchManufactorer,
      required: true
    }
  }
})
</script>
<style lang="scss" scoped>
.card {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.img {
  transform: scale(1);
  transition: transform 1s ease;
}

.img:hover {
  transform: scale(1.2);
}
</style>
