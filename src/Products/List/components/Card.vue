<template>
  <v-card
    dark
    elevation="5"
    color="rgb(40, 40, 40)"
    class="main align-center"
    style="height: 400px;"
  >
    <v-img
      style="width: 228px; height: 228px; object-fit: cover;"
      :src="image"
    />
    <v-card-text>
      <p style="text-align: center;"> {{ item.name }} </p>
      <p style="text-align: center;"> {{ item.price }} </p>
    </v-card-text>
    <v-btn
      style="width: 100%; margin-bottom: 10px; position: absolute; bottom: 15px;"
      @click="open"
      color="rgb(30, 30, 30)"
    >
      Открыть
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import axios from 'axios'
import Vue from 'vue'
import { getCookie } from '../../Products'
export default Vue.extend({
  props: {
    item: {
      type: Object
    }
  },

  data () {
    return {
      image: '' as string
    }
  },

  methods: {
    open () {
      // @ts-ignore
      this.$emit('open', this.item.id)
    }
  },
  created () {
    axios.get(`http://localhost:8000/watch/api/images/?ad=${this.item.id}`,
      {
        headers: {
          Authorization: `token ${getCookie('access_token')}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        this.image = res.data[0].image
      })
      .catch(console.log)
  }
})
</script>

<style lang="scss" scoped>

.main {
  margin: 10px;
  color: white;
  // padding: 20px;

  // height: 391px;
  width: 230px;
}
</style>
