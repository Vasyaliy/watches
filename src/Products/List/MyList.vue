<template>
  <div class="align-center main">
    <span class="golden-sign white-text span">Ваши объявления</span>
    <div style="max-width: 1000px;">
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
      <v-btn
        @click="logout()"
        color="#363636"
        style="margin: 30px 0"
        block
        dark
      >
        Выйти из аккаунта
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from './components/Card.vue'
import { getCookie, deleteCookie, products, Product } from '../Products'

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
    },
    logout () {
      // this.log = !this.log
      deleteCookie('access_token')
      this.$router.push('/auth')
      location.reload()
    }
  }
})
</script>
<style scoped>
.watches-list {
  display: flex;
  flex-flow: wrap;
  margin-top: 25px;
}
.main {
  min-height: 100vh;
  padding: 15px;
  display: flex;
  flex-flow: column;
}
.span {
  margin-top: 75px;
}

@media screen and (max-width: 800px) {
  .main {
    align-items: center;
  }
  .watches-list {
    justify-content: center;
  }
}

</style>
