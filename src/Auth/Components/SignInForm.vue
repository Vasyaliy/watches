<template>
  <div class="form__email">
    <div>
      <v-text-field
        value="dio"
        dark
        label="E-mail"
        v-model="login"
        @keydown.enter="sendLoginInfo"
      >
      </v-text-field>
      <a >Забыли адрес эл. почты? </a>
    </div>
    <div>
      <v-text-field
        value="admin"
        dark
        label="password"
        v-model="pass"
        type="password"
        @keydown.enter="sendLoginInfo"
      >
      </v-text-field>
       <v-btn  @click="postLoginInfo" class="form__button" color="#363636" block rounded>Далее</v-btn>
       <v-card
        v-if="tryAgain"
        color="#ff3333"
        :loading="loading"
       >
        Логин или пароль введены неверно
        <br>
        попробуйте еще раз
      </v-card>
      <a>Забыли пароль? </a>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { getCookie } from '../../Products/Products'

export default Vue.extend({
  data () {
    return {
      login: 'dio' as string,
      pass: 'admin' as string,
      tryAgain: false as boolean,
      loading: true as boolean,
      token: '' as any
    }
  },
  methods: {
    postLoginInfo () {
      axios
        .post('http://localhost:8000/api/v1/auth_token/token/login/',
          {
            username: this.login,
            password: this.pass
          }
        )
        .then(res => {
          document.cookie = `access_token=${res.data.auth_token}`
          this.token = getCookie('access_token')
          console.log(this.token)
          this.$router.push('/')
        })
        .catch(error => {
          console.log(error)
          this.tryAgain = true
        })
    }
  }
})
</script>
<style lang="scss">
.form {
  color: white;
  width: 351px;

  &__link {
    cursor: pointer;
  }

  &__create {
  display: block;
  cursor: pointer;
  }
}
</style>
