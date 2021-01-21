<template>
  <div style="auth-main">
    <v-card
      dark
      color="rgba(0, 0, 0, 0.2)"
      style="width: 400px; margin: auto; margin-top: 10px; border-radius: 5px"
    >
      <v-card-actions>
        <v-btn
          v-if="tab === 'auth'"
          @click="tab = 'registration'"
          text
          color="white"
        >
          Зарегестрироваться
        </v-btn>
        <v-btn
          v-if="tab === 'registration'"
          @click="tab = 'auth'"
          text
          color="white"
        >
          Назад
        </v-btn>
      </v-card-actions>
      <v-card-text>
        <sign-in-form v-if="tab === 'auth'"></sign-in-form>
        <registration
          v-if="tab === 'registration'"
          @toAuth="tab = 'auth'"
        >
        </registration>
      </v-card-text>
      <v-card-actions>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import SignInForm from './Components/SignInForm.vue'
import Registration from './Components/Registration.vue'

export default Vue.extend({
  name: 'signInPage',
  components: {
    SignInForm,
    Registration
  },
  data () {
    return {
      email: '',
      password: '',
      tab: 'auth'
    }
  },
  methods: {
    toLoading () {
      console.log('sada')
    }
  }
})
</script>

<style lang="scss">
@import url('/styles.app.scss');

.auth-main {
  margin-top: 10px;
  width: 100vw;
  border: solid 1px white;
  // height: 100%;
}

.sign-main {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 22px;
  min-height: 374px;
  width: 351px;
  font-family: Arial, Helvetica, sans-serif;
  &__margin {
    margin-bottom: var(--padding-m);
  }
}
.form__button {
  height: 47px;
}
// .sign-main_form {
//   margin-top: 40px;
// }

// .form__create {
//   display: block;
//   // padding: 20px;
//   // margin-bottom: 20px;
//   // padding-bottom: 20px;
// }

// .form_button {
//   margin-top: 20px;
//   margin-bottom: 20px;
//   padding-bottom: 40px;
//   min-height: 44px;
// }

// .form__text {
//   font-size: 17px;
//   padding-top: 25px;
// }

// .form__create {
//   padding: 0;
//   margin-bottom: 20px;
//   color: #FFB917;
//  }

// .form__email{
//   padding-left: -19px;
//   /* padding-top: 60px; */
//   padding: 34px 0;
//   color: #838383;
//   font-size: 14px;
// }

.sign-main__back {
  color: #838383;
  align-self: center;
  // justify-self: flex-end;
  // position: absolute;
  // top: 20px;
  // left: 20px;
}

// .sign-main__logo {
//   margin-top: 9px;
//   display: flex;
//   justify-content: space-between;
// }
</style>
