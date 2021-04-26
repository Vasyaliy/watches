<template>
  <div>
    <v-app>
      <div class="sidebar">
    <div
      class="sidebar-backdrop"
      v-if="isPanelOpen"
      @click="closeBar"
    >
    </div>
      <transition name="slide">
        <div
          v-if="isPanelOpen"
          class="sidebar-panel"
        >
        <Burger :isActive="isPanelOpen" @toggleBurger="openBar" class="slider-burger"/>
          <div
            v-bsl="isPanelOpen"
            v-for="(component, index) in routes"
            :key="`${index}${component.title}`"
          >
            <router-link
              :to="component.path"
              class="sidebar-panel__item"
            >
              <span
                class="link"
                @click="closeBar"
              >
                {{component.title}}
              </span>
            </router-link>
          </div>
        </div>
      </transition>
    </div>
      <nav class="nav margin">
        <div class="nav__mobile mobile">
          <div class="mobile__logo">
            <span class="mobile__span"> Логотип </span>
          </div>
          <div class="mobile__nav">
            <a class="mobile__link" @click="$router.push('/auth')"><img alt="auth" class="mobile__img" src="../assets/auth.png"></a>
            <Burger :notActive="true" @toggleBurger="openBar"/>
          </div>
        </div>
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
// import axios from 'axios'
import Vue from 'vue'
import { getCookie, deleteCookie } from '../Products/Products'
import host from '../Products/config'
import router from '@/router'
import Burger from './Burger.vue'
import VBodyScrollLock from 'v-body-scroll-lock'

// import HomeContent from './HomeContent.vue'
Vue.use(VBodyScrollLock)
export default Vue.extend({
  components: { Burger },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      log: false,
      isPanelOpen: false,
      routes: [
        {
          path: '/',
          title: 'главная'
        },
        {
          path: '/list',
          title: 'Купить'
        },
        {
          path: '/newProduct',
          title: 'Продать'
        },
        {
          path: '/defend',
          title: 'Защита'
        }
      ]
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
    },
    openBar (data) {
      this.isPanelOpen = data
    },
    closeBar () {
      this.isPanelOpen = false
    }
  },
  mounted () {
    // console.log('asd')
    // console.log(getCookie('access_token') === null)
    // axios.get(`${host}/api/v1/auth/users/me/`,
    //   {
    //     headers: {
    //       Authorization: `token ${getCookie('access_token')}`
    //     }
    //   }
    // )
    //   .then((res) => {
    //     this.username = res.data.username
    //     this.email = res.data.email
    //   })
    //   .catch(console.log)
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
  z-index: 0;
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
  &__mobile {
    display: none;
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
.slide-enter-active,
.slide-leave-active
{
  transition: transform 0.2s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s
}
.sidebar-backdrop {
  background-color: rgba(0,0,0,.5);
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}
.sidebar-panel {
  overflow-y: auto;
  background-color: $primary-color;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 9;
  padding: 1.4rem 20px 2rem 20px;
  max-width: 300px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &__item {
    display: block;
    color: #ffffff;
    margin-top: 10px;
    font-size: 26px;
    margin: 10px 0px;
    text-transform: uppercase;
    text-decoration: none;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
  }

}
.slider-burger {
  align-self: flex-end;
}

.sidebar-panel__item:hover {
  transition: transform ease-out 0.2s;
  transform: translateX(10px);
}
.link {
  padding: 15px;
  color: white;
}
@media screen and (max-width: 850px) {
  .nav {
    &__list {
      display: none;
    }

    &__mobile {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      max-height: 32px;
      margin: 20px;
    }
  }
  .mobile {
    &__logo {
      color: white;
    }
    &__link {
      display: flex;
      align-items: center;
    }
    &__nav {
      display: flex;
      flex-direction: row;
    }
    &__span {
      text-transform: uppercase;
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
    }
    &__img {
      max-height: 18px;
      margin-right: 18px;
      cursor: pointer;
      &:hover {
        color: white;
        // background: white;
      }
    }
  }
}
</style>
