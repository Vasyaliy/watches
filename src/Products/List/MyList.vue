<template>
  <div class="align-center main">
    <div style="width: 80%">
      <v-card
        :loading="$loading.value"
        dark
        class="watches-list"
      >
        <div v-for="(watch, index) in list" :key="index">
          <Card
            @open="open"
            :item="watch"
          />
        </div>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from './components/Card.vue'
import { getCookie, products, Product } from '../Products'
import host from '../config'

import axios from 'axios'

export default Vue.extend({
  data () {
    return {
      list: [],
      loading: false,
      userId: 0 as number,
      products
    }
  },
  components: {
    Card
  },
  mounted () {
    this.loading = true
    axios.get(`${host}/api/v1/auth/users/me/`,
      {
        headers: {
          Authorization: `token ${getCookie('access_token')}`
        }
      }
    )
      .then((res) => {
        this.userId = res.data.id
        console.log(this.userId)
        axios
          .get(`${host}/watch/api/product_get/?user=${this.userId}`)
          .catch(console.log)
          .then(response => {
            // @ts-ignore
            console.log(response.data)
            // @ts-ignore
            this.list = response.data
          })
          .finally(() => {
            this.loading = false
          })
      }
      )
  },
  methods: {
    open (id: number) {
      this.products.getProduct(id)
      this.$router.push(`list/${id}`)
    }
  }
})
</script>
<style scoped>
.watches-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
}
</style>
