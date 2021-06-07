<template>
  <div class="page">
    <v-card
      dark
      elevation="5"
      :loading="loading"
      color="rgb(40, 40, 40)"
      class="main align-center"
    >
      <v-card-text v-if="!loading">
        <div class="main__child">
          <div style="width: 450px;">
            <v-carousel
              dark
              hide-delimiter-background
              show-arrows-on-hover
              :value="imageNumber"
              style="width: 450px; height: 450px;"
              @change="change"
              v-if="images"
            >
              <v-carousel-item
                v-for="(image, i) in images"
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
            <!-- <Gallery
              :currentIndex="imageNumber"
              :images="images"
              @change="change"
            /> -->
          </div>
          <div>
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
            </div>
          </div>
        </div>
              <v-expansion-panels class='expansion-panel'>
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
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import router from '@/router'
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios'
import Vue from 'vue'
import host from '../config'
import { products, getCookie } from '../Products'
import Gallery from './Gallery.vue'

interface Image {
  ad: number;
  image: string;
}
export default Vue.extend({
  components: {
    // Gallery
  },
  data () {
    return {
      product: products.currentProduct as any,
      productProperties: [] as Array<string>,
      imageNumber: 0 as number,
      images: [''] as Array<string>,
      loading: false as boolean
    }
  },
  created () {
    this.loading = true
    axios
      .get(`${host}/watch/api/product_get/${this.$route.params.productId}/`,
        {
          headers: {
            Authorization: `token ${getCookie('access_token')}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      .then(res => {
        this.product = res.data
        this.productProperties = Object.keys(this.product)
        return axios
          .get(`${host}/watch/api/images/?ad=${this.$route.params.productId}`,
            {
              headers: {
                Authorization: `token ${getCookie('access_token')}`,
                'Content-Type': 'multipart/form-data'
              }
            }
          )
      })
      .then(res => {
        this.images = res.data.map((obj: Image) => {
          return obj.image
        })
      })
      .finally(() => {
        this.loading = false
      })
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
  margin: 75px;
  padding: 20px;

  // height: 391px;
  // width: 530px;
  &__child {
    display: flex;
    flex-flow: row;
    margin: 20px;
    justify-content: space-around;
  }
}

.product-desc {
  // border: solid 1px white;
  min-height: 380px;
  color: white;
  margin-left: 16px;
  // margin: 0px 20px;
  // padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.expansion-panel {
  width: 100%;
}
@media screen and (max-width: 980px) {
  .expansion-panel {
    padding: 0 0;
  }
  .main {
    &__child {
      display: flex;
      flex-flow: wrap;
    }
  }
}

</style>
