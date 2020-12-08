<template>
  <v-card
    dark
    elevation="5"
    color="rgb(40, 40, 40)"
    class="main align-center"
    style="margin: 20px 100px;"
  >
    <v-card-text>
      <div style="margin: 0px 10px; padding: 40px; display: flex">
        <div style="width: 450px;">
          <v-carousel
            dark
            hide-delimiter-background
            show-arrows-on-hover
            :value="imageNumber"
            style="width: 450px; height: 450px;"
            @change="change"
          >
            <v-carousel-item
              v-for="(image, i) in product.images"
              :key="i"
            >
              <v-zoomer pivot="image-center" style="width: 450px; height: 450px;">
                <img
                  :src="image"
                  style="object-fit: contain; width: 100%; height: 100%;"
                >
              </v-zoomer>
            </v-carousel-item>
          </v-carousel>
          <Gallery
            :currentIndex="imageNumber"
            :images="product.images"
            @change="change"
          />
        </div>
        <div style="width: 50%; margin-left: 40px;">
          <div
            class="product-desc"
            style="width: 100%;"
          >
            <h2> {{ product.name }} </h2>
            <span style="font-weight: bold; font-size: 30px;">Цена {{ product.price }} </span>
            <v-btn large color="black" style="width: 100%"> КУПИТЬ </v-btn>
            <div><p style="font-weight: bold;">Описание:</p> {{ product.description }}</div>
          </div>
          <div style="margin-top: 20px">
            <v-expansion-panels style="width: 100%;">
              <v-expansion-panel
              >
                <v-expansion-panel-header>
                  Характеристики
                </v-expansion-panel-header>
                  <v-expansion-panel-content>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">
                            Name
                          </th>
                          <th class="text-left">
                            Calories
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="key in productProperties"
                          :key="`${key}`"
                        >
                          <td> {{key}} </td>
                          <td>{{ product[key] }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { products } from '../Products'
import Gallery from './Gallery.vue'

export default Vue.extend({

  data () {
    return {
      product: products.currentProduct,
      productProperties: [] as Array<string>,
      imageNumber: 0 as number
    }
  },
  mounted () {
    // @ts-ignore
    this.productProperties = Object.keys(this.product)
  },
  components: {
    Gallery
  },

  beforeCreate () {
    if (!products.currentProduct) products.getProduct(+this.$route.params.productId)
  },

  methods: {
    open () {
      // @ts-ignore
      this.$loading.value = !this.$loading.value
    },

    change (number: number) {
      this.imageNumber = number
    }
  }
})
</script>

<style lang="scss" scoped>

.main {
  // margin: 10px;
  color: white;
  // padding: 20px;

  // height: 391px;
  // width: 530px;
}

.product-desc {
  // border: solid 1px white;
  height: 380px;
  color: white;
  // margin: 0px 20px;
  // padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
</style>
