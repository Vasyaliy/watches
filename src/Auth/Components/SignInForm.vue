<template>
  <div class="form__email">
    <div>
      <v-text-field
        dark
        label="login"
        v-model="login"
        @keydown.enter="sendLoginInfo"
      >
      </v-text-field>
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
       <span
        v-if="tryAgain"
        style="color: #ff3333; margin-top: 10px"
        :loading="loading"
       >
        Логин или пароль введены неверно
        <br>
        попробуйте еще раз
       </span>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { getCookie } from '../../Products/Products'
import host from '../../Products/config'

export default Vue.extend({
  data () {
    return {
      login: '' as string,
      pass: '' as string,
      tryAgain: false as boolean,
      loading: true as boolean,
      token: '' as any
    }
  },
  methods: {
    postLoginInfo () {
      axios
        .post(`${host}/api/v1/auth_token/token/login/`,
          {
            username: this.login,
            password: this.pass
          }
        )
        .then(res => {
          document.cookie = `access_token=${res.data.auth_token}`
          this.token = getCookie('access_token')
          console.log(this.token)
          console.log(document.cookie)
          this.$router.push('/')
          console.log(res.data.auth_token)
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
