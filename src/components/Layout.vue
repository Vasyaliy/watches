<template>
  <div>
    <v-app>
      <nav class="nav">
        <div class="nav__list margin">
          <a
            class="nav__item"
            @click="$router.push('/')"
            :class="($route.path.length < 2) ? 'active' : ''"
          >
          Главная
          </a>
          <a
            class="nav__item"
            @click="$router.push('/list')"
            :class="$route.path.includes('/list') ? 'active' : ''"
          >
            купить часы
          </a>
          <a
            class="nav__item"
            @click="$router.push('/newProduct')"
            :class="$route.path.includes('/newProduct') ? 'active' : ''"
          >
            продать часы
          </a>
          <a
            class="nav__item"
            @click="$router.push('/defend')"
            :class="$route.path.includes('/defend') ? 'active' : ''"
          >
            защита покупателей
          </a>
          <a
            class="nav__item"
            href="#faq"
            @click="$router.push('/')"
            :class="$route.path.includes('/faq') ? 'active' : ''"
          >
            FAQ
          </a>
          <a
            class="login"
            @click="$router.push('/auth')"
            :class="$route.path.includes('/auth') ? 'active' : ''"
          >
            Вход/регистрация
          </a>
        </div>
      </nav>
        <router-view />
    </v-app>
    <!-- <div class="body"> piska</div> -->
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import Vue from 'vue'
import { getCookie, deleteCookie } from '../Products/Products'
import host from '../Products/config'
import router from '@/router'

// import HomeContent from './HomeContent.vue'

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String
  },

  // components: {
  //   HomeContent
  // },

  data () {
    return {
      navDrawer: false,
      log: false,
      username: 'Belmas',
      email: 'asd@yadnex.ru'
    }
  },
  computed: {
    authorized: function () {
      return !(getCookie('access_token') === null)
    }
  },
  methods: {
    home () {
      if (this.$route.path !== '/') this.$router.push('/')
    },
    logout () {
      // this.log = !this.log
      deleteCookie('access_token')
      this.$router.push('/')
      location.reload()
    }
  },
  mounted () {
    console.log('asd')
    console.log(getCookie('access_token') === null)
    axios.get(`${host}/api/v1/auth/users/me/`,
      {
        headers: {
          Authorization: `token ${getCookie('access_token')}`
        }
      }
    )
      .then((res) => {
        this.username = res.data.username
        this.email = res.data.email
      })
      .catch(console.log)
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.login {
  text-decoration: none;
  color:rgba($color: #ffffff, $alpha: 0.8);
  margin-left: 50px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  padding: 10px 10px;
}
.active {
  border-bottom: 2px solid #DFB27F;
}
.nav {
  position: absolute;
  z-index: 2;
  display: flex;
  width: 100%;
  background: rgba($color: #000000, $alpha: 0);
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px auto;
    list-style-type: none;
    flex-direction: row;
    text-decoration: none;
  }
  &__item {
    box-sizing: border-box;
    text-decoration: none;
    display: inline-block;
    padding: 10px 0px;
    margin: 10px 10px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    color:rgba($color: #ffffff, $alpha: 0.8);
  }

  &__item:first-child {
    margin-left: 0;
  }

}

.parallax {
  background-image: url("https://media.gq-magazine.co.uk/photos/5d1390069fa60185e283806a/16:9/w_1920,c_limit/watches-hp-gq-6aug18_b.jpg");
  min-height: 600px;
  background-attachment: fixed;
  background-position: center;
  /* border: solid 1px; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.main {
  background-color: rgb(10, 10, 30);
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center
}

.vertical-center {
  align-items: center;
}

.align-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo:hover {
  cursor: pointer;
}
</style>
