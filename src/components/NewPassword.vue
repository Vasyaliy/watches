<template>
  <div class="error-page-wrapper">
    <div class="margin error-page">
      <div class="error-page__wrapper">
        <h1 class="golden-sign white-text">Введите новый пароль</h1>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            type="password"
            dark
            label="Пароль"
          >
          </v-text-field>
          <v-text-field
            v-model="password2"
            @change="passwordValid = true"
            type="password"
            :rules="password2Rules"
            dark
            label="Пароль еще раз"
          >
          </v-text-field>
          <span
            v-if="!passwordValid"
            style="color: #ff3333; margin-top: 10px"
          >
           пароли должны совпадать
          </span>
           <v-btn
            :disabled="!valid"
            @click="postLoginInfo()"
            class="form__button"
            color="#363636"
            style="margin-top: 10px"
            block
            dark
          >
            Далее
          </v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import axios from 'axios'
import Vue from 'vue'
import host from '@/Products/config'
import { getCookie } from '../Products/Products'

export default Vue.extend({
  data () {
    return {
      valid: false,
      passwordValid: true,
      udb64: this.$route.params.udb64,
      token: this.$route.params.token,
      password: '',
      passwordRules: [
        v => !!v || 'password is required',
        v => (v && v.length >= 6) || 'Password must have 6+ characters'
      ],
      password2: '',
      password2Rules: [
        v => !!v || 'password is required',
        v => (v && v.length >= 6) || 'Password must have 6+ characters'
      ]
    }
  },
  methods: {
    postLoginInfo () {
      if (this.password === this.password2) {
        axios.patch(`${host}/authentication/password-reset-complete`, {
          token: this.token,
          uidb64: this.udb64,
          password: this.password
        })
          .catch(console.log)
          .then((res) => {
            this.$router.push('../../../auth')
          })
      } else this.passwordValid = false
    }
  }
})
</script>
<style lang="scss" scoped>
.error-page {
  margin-top: 60px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrapper {
    display: flex;
    flex-flow: column;
  }

  &__button {
    margin-top: 10px;
  }
}
.error-page-wrapper {
  background-color: $primary-color;
}
</style>
