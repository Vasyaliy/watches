<template>
  <div class="error-page-wrapper">
    <div class="margin error-page">
      <div class="error-page__wrapper">
        <h1 v-if="(id === 'expired')" class="golden-sign white-text">Время подтверждения истекло</h1>
        <h1 v-if="(id === 'error')" class="golden-sign white-text">Произошла ошибка</h1>
        <h1 v-if="(id === 'confirmed')" class="golden-sign white-text">Почта подтверждена</h1>
        <v-btn v-if="(id === 'confirmed')" class="error-page__button" @click="$router.push('/auth')">Авторизация</v-btn>
        <v-btn v-else class="error-page__button" @click="$router.push('/')">Главная</v-btn>
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
      id: this.$route.params.id,
      token: ''
    }
  },
  created () {
    axios.get(`${host}/authentication/email-verify/`, {
      headers: {
        Authorization: this.token
      }
    })
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
