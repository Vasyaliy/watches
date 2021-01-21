<template>
  <div class="flex justify-center">
    <v-card
      dark
      style="padding: 20px 50px; margin: 50px; margin-right: 10px; width: 250px;"
    >
      <div
        class="flex vertical-align"
        style="width: 150px; height: 100%; flex-direction: column; justify-content: space-around"
      >
        <v-avatar
          color="black"
          size="150"
        >
          <span v-if="!avatar"> Загрузите фото </span>
          <img
            v-else
            style="object-fit: cover;"
            :src="avatar"
          >
        </v-avatar>
        <div>
          <p v-if="firstname"> Имя: {{ firstname }} </p>
          <p v-if="lastname"> Фамилия: {{ lastname }} </p>
          <p v-if="phone"> Телефон: {{ phone }} </p>
        </div>

        <div style="border: solid white 1px; border-radius: 2px; position: relative;">
          <input
            type="file"
            name="image"
            class="input-file"
            @change="attachFile($event.target.files)"
          >
          <v-btn style="width: 100%">
            Загрузить
          </v-btn>
        </div>
      </div>
        <!-- <div>
          <h4> Личные данные </h4>
        </div> -->
    </v-card>
    <v-card
      dark
      class="align-center"
      style=" margin: 50px; padding: 20px; margin-left: 10px; width: 40%;"
    >
      <v-card-actions>
        <v-btn
          :disabled="!valid"
        > Сохранить </v-btn>
      </v-card-actions>
      <v-form
        v-model="valid"
      >
        <v-container>
          <v-row>
            <v-col
              cols="7"
              md="12"
            >
              <v-text-field
                dark
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="Имя"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="7"
              md="12"
            >
              <v-text-field
                dark
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Фамилия"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="7"
              md="12"
            >
              <v-text-field
                dark
                v-model="phone"
                :rules="phoneRules"
                label="Телефон"
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="7"
              md="12"
            >
              <v-text-field
                dark
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
    <!-- <v-card
      dark
      style="width: 100%;  margin: 50px; margin-left: 10px; height: 250px;"
    >
      <v-card-actions>
        <v-btn>
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      avatar: '',
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        (v: string) => !!v || 'Поле должно быть заполнено',
        (v: string) => v.length <= 10 || 'Имя не может содержать больше 10 символов'
      ],
      email: '',
      emailRules: [
        (v: string) => !!v || 'Укажите E-mail',
        (v: string) => /.+@.+/.test(v) || 'Неверно указан Email'
      ],
      phone: '',
      phoneRules: [
        (v: string) => !!v || 'Укажите телефон',
        (v: string) => /^([+]?[0-9\s]{3,25})*$/i.test(v) || 'Неверно указан телефон'
      ]
    }
  }
})
</script>
<style lang="scss" scoped>

.profile {
  color: white;
  background-color: rgba($color: #202020, $alpha: 1.0)
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

</style>
