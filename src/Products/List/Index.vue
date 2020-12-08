<template>
  <div class="align-center main">
    <div style="width: 80%">
      <div class="filters flex">
        <v-select
          style="margin: 5px;"
          label="Марки"
          v-model="filterParams.brand.value"
          @blur="$router.push({ query: { brand: filterParams.brand.value } })"
          dark
          multiple
          :items="brands"
        />
        <v-select
          style="margin: 5px;"
          label="Модель"
          dark
          multiple
          v-model="brands"
        />
        <v-select
          style="margin: 5px;"
          label="Размер"
          dark
          multiple
          v-model="brands"
        />
        <v-select
          style="margin: 5px;"
          label="Местоположение"
          dark
          multiple
          v-model="brands"
        />
      </div>
      <div style="width: 200px; color: white;">
        <span style="margin: 7px;">Цена от 0 до {{ price * 5000 }}₽ </span>
        <v-slider
          dark
          v-model="price"
        />
      </div>
      <v-card
        :loading="$loading.value"
        dark
        class="watches-list"
      >
        <div v-for="(watch, index) in filteredList" :key="index">
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
import { products, Product } from '../Products'
import axios from 'axios'

interface Filter {
  [key: string]: {
    value: string | number | string[];
    filter: Function;
    assign: Function;
  };
}

const brandNames = ['Rolex']
const filterParams: Filter = {
  brand: {
    value: [],
    assign (newValue: string | string[]) {
      if (!Array.isArray(newValue)) {
        this.value = [newValue]
      } else this.value = newValue
    },
    filter (product: Product) {
      const arr = this.value as string[]
      if (arr.length === 0) return true
      return arr.some(brand => brand.toUpperCase() === product.brand.toUpperCase())
    }
  },
  price: {
    value: 0,
    filter (product: Product) {
      const [price] = product.price.split(' ')
      return this.value > +price
    },
    assign (newValue: string) {
      this.value = +newValue
      console.log(this.value)
    }
  }
}

export default Vue.extend({

  watch: {
    '$route.query': {
      handler (query) {
        console.log(query)
        if (query.state === undefined) {
          Object.keys(query).forEach(param => {
            filterParams[param].assign(query[param])
          })
        } else {
          // this.getFilteredList(query)
        }
      },
      immediate: true,
      deep: true
    }
  },

  computed: {
    filteredList () {
      // @ts-ignore
      const list = products.list.filter(product => {
        return Object.keys(this.$route.query).every(param => {
          return filterParams[param].filter(product)
        })
      })
      return list
    }
  },

  data () {
    const brands = [
      'OMEGA',
      'ROLEX'
    ]

    return {
      products,
      brands,
      price: 500000,
      filterParams,
      loading: false
    }
  },
  mounted () {
    console.log(this.products.list)
  },

  methods: {
    open (id: number) {
      this.products.getProduct(id)
      this.$router.push(`list/${id}`)
    }
  },

  components: {
    Card
  }
})
</script>

<style lang="scss" scoped>

.watches-list {
  display: flex;
  flex-wrap: wrap;
}

</style>
