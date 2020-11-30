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
            v-model="dialogm1"
            column
          >
            <v-select
              label="циферблат"
              v-model="dialName.chosenId"
              :items="dialName.options"
              item-text="name"
              item-value="id"
            />
            <!-- <v-text-field
              label="Bahamas, The"
              value="bahamas"
            ></v-text-field>
            <v-text-field
              label="Bahrain"
              value="bahrain"
            ></v-text-field>
            ></v-text-field> -->
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
             @click="dialog = false"
          >
            Save
          </v-btn>
          <v-btn
            outlined
            @click="postCgaracteristic()"
          >
            POST
        </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import axios from 'axios'
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      dialogm1: '',
      dialog: false,
      dialName: {
        options: [
          { name: 'металл', id: 1 },
          { name: 'gerww', id: 2 },
          { name: 'afaf', id: 3 }
        ],
        chosenId: 0
      }
    }
  },
  methods: {
    postCgaracteristic () {
      console.log(document.cookie)
      axios
        .post('http://127.0.0.1:8000/product/create/',
          {
            name: 'test',
            user: 1,
            price: this.dialName.chosenId
          }
        )
        .then(res => {
          console.log(res.data)
        })
        .catch((error) => console.log(error.response.request._response))
    }
  }
})
</script>
