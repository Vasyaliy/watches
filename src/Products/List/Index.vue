<template>
    <div class="align-center main">
      <span class="golden-sign white-text span">Все объявления</span>
      <div style="max-width: 1000px">
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
      return arr.some(brand => brand === product.brand.name)
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
      {
        id: 1,
        name: 'ROLEX'
      },
      {
        id: 2,
        name: 'Omega'
      }
    ]

    return {
      products,
      brands,
      price: 500000,
      filterParams,
      loading: false
    }
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
  flex-flow: wrap;
  margin-top: 25px;
  justify-content: center;
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
