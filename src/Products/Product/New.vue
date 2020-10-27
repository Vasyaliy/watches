<template>
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
          class="input-file"
          @change="attachFile($event.target.files)"
        >
        <v-btn color="black" style="width: 100%">
          Загрузить
        </v-btn>
      </div>
    </v-card-title>
    <v-card-text>
      <div style="display: flex; justify-content: space-between; padding: 10px;">
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
            class="input-file"
            @change="attachFile($event.target.files)"
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
              <!-- <img style="object-fit: cover; margin: auto;" width="300" height="400" :src="image"> -->
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
            <!-- <h2> {{ product.name }} </h2> -->
            <div style="width: 100%">
              <v-combobox
                v-model="product.brand"
                :items="Products.brands"
                filled
                label="Марка"
                dense
              ></v-combobox>
              <div style="display: flex;">
                <v-text-field
                  style="margin-right: 5px"
                  label="Цена"
                  filled
                  v-model="product.price"
                />
                <v-select
                  style="margin-left: 5px"
                  :items="Products.conditions"
                  label="Состояние"
                  filled
                  v-model.number="product.price"
                />
              </div>
              <v-textarea
                label="Описание"
                no-resize
                full-width
                filled
                v-model="product.description"
              />
              <characteristics/>
            </div>
              <v-btn
                width="100%"
                color="black"
                style="margin-top: 20px;"
              > Создать </v-btn>
            <!-- <div style="width: 100%"><span style="font-weight: bold;"> Состояние </span> Новые</div> -->
          </div>
          <!-- <div style="margin-top: 20px">
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
          </div> -->
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
import { Products } from '../Products'
import Characteristics from './components/Characteristics.vue'
import Gallery from './Gallery.vue'

export default Vue.extend({

  data () {
    return {
      Products,
      product: Products.getIntial(),
      imageNumber: 0
    }
  },

  components: {
    Characteristics,
    Gallery
  },

  methods: {
    open () {
      // @ts-ignore
      this.$loading.value = !this.$loading.value
    },

    change (number: number) {
      this.imageNumber = number
    },

    attachFile (files: FileList) {
      console.log('dads')
      if (files) {
        for (let i = 0; i < files.length; i++) {
          console.log(i)
          const reader = new FileReader()
          reader.onload = () => {
            const photo = reader.result as string
            this.product.images.push(photo)
          }
          if (files[i]) reader.readAsDataURL(files[i])
        }
      }
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

.input-file {
  position: absolute;
  z-index: 1000;
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
