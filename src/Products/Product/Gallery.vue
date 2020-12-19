<template>
    <!-- <div v-if="images.length > 1"> -->
      <v-slide-group
        class="pa-4"
        style="height: 150px;"
        center-active
        active-class="active-image"
      >
        <v-slide-item
          v-for="(image, index) in images"
          :key="image + index"
          class="pa-3 ml-3 active-image"
        >
              <v-img
                @click="change(index)"
                class="img"
                :style="`opacity: ${localIndex === index ? '1' : '0.5'}`"
                :src="image"
              />
        </v-slide-item>
      </v-slide-group>
    <!-- </div> -->
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

  props: {
    images: {
      type: Array
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },

  watch: {
    currentIndex (value: number) {
      this.localIndex = value
    }
  },

  data () {
    return {
      localIndex: this.currentIndex
    }
  },

  methods: {
    change (index: number) {
      this.$emit('change', index)
      this.localIndex = index
    }
  }

})
</script>
<style lang='scss' scoped>
.img {
  display: flex;
  width: 100px;
  height: 100%;
}

</style>
