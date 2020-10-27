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
        <!-- <div
          class=""
          style="height: 450px; overflow: hidden"
        >
          <div v-for="(image, i) in product.images"
            :key="i"
          >
            <img
              @click="imageNumber = i"
              :src="image"
              style="object-fit: contain; height: 120px; margin-bottom: 5px;"
            >
          </div>
        </div> -->
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
              <!-- <img style="object-fit: cover; margin: auto;" width="300" height="400" :src="image"> -->
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
            <div><p style="font-weight: bold;">Описание:</p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, suscipit optio. Facilis error officiis mollitia est reprehenderit amet, eaque fugiat sed soluta repellendus dolore, illum ipsam. Nostrum sed ipsa adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quod! Dicta amet mollitia iure deserunt, dolor hic blanditiis eligendi culpa enim dolores aut, laborum, quos esse. Rem eos laboriosam perspiciatis.</div>
            <!-- <div style="width: 100%"><span style="font-weight: bold;"> Состояние </span> Новые</div> -->
          </div>
          <div style="margin-top: 20px">
            <v-expansion-panels style="width: 100%;">
              <v-expansion-panel
              >
                <v-expansion-panel-header>
                  Характеристики
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, suscipit optio. Facilis error officiis mollitia est reprehenderit amet, eaque fugiat sed soluta repellendus dolore, illum ipsam. Nostrum sed ipsa adipisci.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
      </div>
    </v-card-text>
    <!-- <v-img
      style="width: 228px; height: 228px; object-fit: cover;"
      :src="product.image"
    />
    <v-card-text>
      <p style="text-align: center;"> {{ product.name }} </p>
      <p style="text-align: center;"> {{ product.price }} </p>
    </v-card-text>
    <v-btn
      style="width: 100%; margin-bottom: 10px; position: absolute; bottom: 15px;"
      @click="open"
      color="rgb(30, 30, 30)"
    >
      Открыть
    </v-btn> -->
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
      imageNumber: 0 as number
    }
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
