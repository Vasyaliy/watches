<template>
  <div class="page">
    <v-card
      dark
      elevation="5"
      color="rgb(40, 40, 40)"
      class="main align-center"
      style="margin: auto; margin-top: 20px; width: 65%"
    >
      <v-card-title>
        <div style="border-radius: 2px; position: relative;">
          <input
              type="file"
              multiple
              name="image"
              class="none-display"
              ref="image"
              @change="onFileSelected"
            >
        </div>
      </v-card-title>
      <v-card-text>
        <div style="display: flex; justify-content: space-between; padding: 10px;">
          <div
            class="align-center file-placeholder"
            v-if="product.images.length === 0"
            style=""
          >
            Загрузить фотографии
            <input
              type="file"
              multiple
              name="image"
              ref="image"
              class="input-file"
              @change="onFileSelected"
            >
          </div>
          <div v-if="product.images.length > 0" style="width: 450px;">
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
          <div style="width: 60%; margin-left: 20px">
            <div
              class="product-desc"
              style="width: 100%;"
            >
              <div style="width: 100%">
                <v-select
                  v-model="product.brand"
                  :items="selectors.brand"
                  item-text="name"
                  item-value="id"
                  filled
                  label="Марка"
                  dense
                ></v-select>
                 <v-text-field
                  style="margin-right: 5px"
                  label="Имя"
                  filled
                  v-model="product.name"
                />
                <div style="display: flex;">
                  <v-text-field
                    style="margin-right: 5px"
                    label="Цена"
                    class="inputPrice"
                    type="number"
                    filled
                    v-model="product.price"
                  />
                  <v-select
                    style="margin-left: 5px"
                    :items="selectors.conditions"
                    label="Состояние"
                    filled
                    v-model.number="product.conditions"
                  />
                </div>
                <v-textarea
                  label="Описание"
                  no-resize
                  full-width
                  filled
                  v-model="product.description"
                />
                <characteristics
                  :selectors="selectors"
                  @saveCharacteristic="getCharacteristicFromChild"
                />
              </div>
                <v-btn
                  width="100%"
                  color="black"
                  style="margin-top: 20px;"
                  @click="postCharacteristic()"
                > Создать </v-btn>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import Vue from 'vue'
import host from '../config'
import { Products, getCookie, products } from '../Products'
import Characteristics from './components/Characteristics.vue'
import Gallery from './Gallery.vue'
export default Vue.extend({
  data () {
    return {
      Products,
      product: Products.getIntial(),
      imageNumber: 0,
      selectors: {},
      selectedFiles: [] as Array<any>,
      finalProduct: {},
      errorMessage: false as boolean
    }
  },
  components: {
    Characteristics,
    Gallery
  },
  created () {
    axios
      .get(`${host}/product/properties/`,
        {
          headers: {
            Authorization: `token ${getCookie('access_token')}`,
            'Content-Type': 'multipart/form-data'
          }
        })
      .then(res => {
        this.selectors = res.data
      })
      .catch(console.log)
  },
  methods: {
    change (number: number) {
      this.imageNumber = number
    },
    getCharacteristicFromChild (data: any) {
      this.product = { ...data, ...this.product }
      console.log(this.product)
    },
    onFileSelected (event: any) {
      this.selectedFiles = event.target.files
      console.log(this.selectedFiles)
      for (let i = 0; i < this.selectedFiles.length; i++) {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (e.target) {
            const photo = reader.result as string
            this.product.images.push(photo)
          }
        }
        reader.readAsDataURL(this.selectedFiles[i])
      }
    },
    postImgs (id: number) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        const fd = new FormData()
        fd.append('ad', `${id}`)
        fd.append('image', this.selectedFiles[i], this.selectedFiles[i].name)
        console.log(fd)
        axios
          .post(`${host}/watch/api/images/`,
            fd,
            {
              headers: {
                Authorization: `token ${getCookie('access_token')}`,
                'Content-Type': 'multipart/form-data'
              }
            }
          )
          .catch((error) => console.log(error.response.request._response))
      }
    },
    postCharacteristic () {
      axios
        .post(`${host}/product/create/`,
          this.product,
          {
            headers: {
              Authorization: `token ${getCookie('access_token')}`
            }
          }
        )
        .then(res => {
          this.product.image = res.data.id
          this.postImgs(res.data.id)
          this.$router.push('/')
          alert('Объявление успешно создано')
        })
        .catch((error) => {
          console.log(error.response.request._response)
          this.errorMessage = true
        })
    }
  }
})
</script>

<style lang="scss" scoped>
.v-input .v-input__control .v-input__slot .v-text-field__slot input::-webkit-outer-spin-button,
.v-input .v-input__control .v-input__slot .v-text-field__slot input::-webkit-inner-spin-button
{
-webkit-appearance: none;
margin: 0;
}
.main {
  // margin: 10px;
  color: white;
  background: black;
  height: 85%;
  margin-top: 70px;
  // padding: 20px;
  // height: 391px;
  // width: 530px;
}
.none-display {
  display: none;
  cursor: pointer;
  z-index: 2;
}
.input-file {
  position: absolute;
  cursor: pointer;
  // z-index: 1000;
  opacity: 0;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.file-placeholder {
  margin-left: 25px;
  height: 440px;
  width: 300px;
  background: rgb(25, 25, 25);
  border-radius: 10px;
  position: relative;
}
.input-file:hover {
  cursor: pointer;
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
