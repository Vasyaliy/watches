<template>
    <v-slide-group
      class="pa-4"
      style="height: 150px;"
      show-arrows
    >
      <v-slide-item
        v-for="(image, index) in images"
        :key="image"
        style="padding: 10px; margin-left: 10px;"
      >
        <v-img @click="change(index)" :style="`width: 100px; opacity: ${localIndex === index ? '1' : '0.5'}`" :src="image"/>
        <!-- <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card> -->
      </v-slide-item>
    </v-slide-group>

    <!-- <v-expand-transition>
      <v-sheet
        v-if="model != null"
        height="200"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <h3 class="title">
            Selected {{ model }}
          </h3>
        </v-row>
      </v-sheet>
    </v-expand-transition>
  </v-sheet> -->
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
