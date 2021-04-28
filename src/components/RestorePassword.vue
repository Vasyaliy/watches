<template>
  <div class="error-page-wrapper">
    <div class="margin error-page">
      <div class="error-page__wrapper">
        <h1 class="golden-sign white-text">Забыли пароль?</h1>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <div v-if="!sent">
            <v-text-field
              style="margin: 30px 0"
              color="white"
              v-model="email"
              dark
              label="E-mail"
              :rules="emailRules"
            >
            </v-text-field>
            <span
              style="color: #ffffff;"
            >
            </span>
            <v-btn
              :disabled="!valid"
              @click="postLoginInfo"
              class="form__button"
              color="#363636"
              style="margin-top: 10px"
              block
              dark
              v-show="(email.length >  0)"
            >
              Далее
            </v-btn>
          </div>
          <div class="span__wrapper">
            <span v-if="sent" class="span"> На вашу почту отправлена ссылка, перейдите по ней, чтобы поменять пароль <br>{{link}}</span>
          </div>
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
      sent: false,
      id: this.$route.params.id,
      link: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    postLoginInfo () {
      axios.post(`${host}/authentication/request-reset-email/`, {
        email: this.email
      }).then(res => {
        this.link = res.data.success
        console.log(res.data)
        this.sent = true
      })
    }
  }
  // created () {
  //   axios.get(`${host}/authentication/email-verify/`, {
  //     headers: {
  //       Authorization: this.token
  //     }
  //   })
  // }
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
.span {
  padding-top: 20px;
  color: white;

  &__wrapper {
    display: flex;
  }
}
.error-page-wrapper {
  background-color: $primary-color;
}
</style>
