<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="400px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="black"
          style="width: 96%"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Подробные характеристики
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Подробные характеристики</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-item-group
            v-for="(field, index) in characteristicKeys"
            :key="field + index"
            column
          >
            <v-select
              :label="field"
              v-model="characteristics[field]"
              :items="selectors[field]"
              item-text="name"
              item-value="id"
            />
           </v-item-group>
          </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="postCharacteristic()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import host from '@/Products/config'
import axios from 'axios'
import Vue from 'vue'
import { getCookie } from '../../Products'
export default Vue.extend({
  data () {
    return {
      characteristics: {} as any,
      characteristicKeys: [] as Array<any>,
      selectors: {} as any,
      dialog: false
      // dialName: {
      //   name: 'циферблат',
      //   options: [
      //     { name: 'mettal', id: 1 },
      //     { name: 'gerww', id: 2 },
      //     { name: 'afaf', id: 3 }
      //   ],
      //   chosenId: 1
      // }
    }
  },
  methods: {
    postCharacteristic () {
      this.$emit('saveCharacteristic', this.characteristics)
      this.dialog = false
    }
  },
  mounted () {
    console.log('rock')
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
        this.characteristicKeys = Object.keys(this.selectors)
        this.characteristicKeys.forEach(key => {
          this.characteristics[key] = null
        })
      })
  }
})
</script>
