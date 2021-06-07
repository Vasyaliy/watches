<template>
  <v-form class="form__email" v-model="valid">
    <div>
      <v-text-field
        v-model="email"
        dark
        label="E-mail"
        :rules="emailRules"
      ></v-text-field>
    </div>
    <div>
      <v-text-field
        v-model="username"
        dark
        label="Имя пользователя"
        :rules="usernameRules"
      ></v-text-field>
    </div>
    <div style="margin: 10px 0">
      <vue-phone-number-input
        default-country-code="RU"
        no-example
        dark
        v-model="phone"
      />
    </div>
    <div>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        type="password"
        dark
        label="Пароль"
      >
      </v-text-field>
    </div>
    <div>
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
    </div>
       <v-btn
          @click="createUser"
          text
          style="margin-top: 10px;"
          color="white"
        >
          Зарегестрироваться
        </v-btn>
  </v-form>
</template>
<script lang="ts">
import axios from 'axios'
import Vue from 'vue'
import host from '../../Products/config'
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'

export default Vue.extend({
  components: {
    'vue-phone-number-input': VuePhoneNumberInput
  },
  data () {
    return {
      valid: false,
      passwordValid: true,
      username: '',
      usernameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'password is required',
        v => (v && v.length >= 6) || 'Password must have 6+ characters'
      ],
      password2: '',
      password2Rules: [
        v => !!v || 'password is required',
        v => (v && v.length >= 6) || 'Password must have 6+ characters'
      ],
      phone: '' as string,
      phoneRules: [

      ]
    }
  },
  methods: {
    createUser () {
      this.phone = ('+7 ' + this.phone).replace(/\s+/g, ' ')
      console.log(this.phone)
      if (this.password === this.password2) {
        axios.post(`${host}/registr/`, {
          username: this.username,
          password: this.password,
          email: this.email,
          city: 'Moscow',
          phone: this.phone,
          company: false,
          avatar: null
        })
          .catch(console.log)
          .then(res => {
            console.log('sucses')
            this.$router.push('./EmailVerification/confirming')
          })
      } else this.passwordValid = false
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
