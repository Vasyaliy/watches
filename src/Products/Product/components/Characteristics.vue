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
            <v-text-field
              label="Bahamas, The"
              value="bahamas"
            ></v-text-field>
            <v-text-field
              label="Bahrain"
              value="bahrain"
            ></v-text-field>
            <v-text-field
              label="Bangladesh"
              value="bangladesh"
            ></v-text-field>
            <v-text-field
              label="Barbados"
              value="barbados"
            ></v-text-field>
            <v-text-field
              label="Belarus"
              value="belarus"
            ></v-text-field>
            <v-text-field
              label="Belgium"
              value="belgium"
            ></v-text-field>
            <v-text-field
              label="Belize"
              value="belize"
            ></v-text-field>
            <v-text-field
              label="Benin"
              value="benin"
            ></v-text-field>
            <v-text-field
              label="Bhutan"
              value="bhutan"
            ></v-text-field>
            <v-text-field
              label="Bolivia"
              value="bolivia"
            ></v-text-field>
            <v-text-field
              label="Bosnia and Herzegovina"
              value="bosnia"
            ></v-text-field>
            <v-text-field
              label="Botswana"
              value="botswana"
            ></v-text-field>
            <v-text-field
              label="Brazil"
              value="brazil"
            ></v-text-field>
            <v-text-field
              label="Brunei"
              value="brunei"
            ></v-text-field>
            <v-text-field
              label="Bulgaria"
              value="bulgaria"
            ></v-text-field>
            <v-text-field
              label="Burkina Faso"
              value="burkina"
            ></v-text-field>
            <v-text-field
              label="Burma"
              value="burma"
            ></v-text-field>
            <v-text-field
              label="Burundi"
              value="burundi"
            ></v-text-field>
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
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      dialogm1: '',
      dialog: false
    }
  }
})
</script>
