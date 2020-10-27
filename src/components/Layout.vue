<template>
  <div>
    <v-app>
      <v-main
        class="main"
      >
        <router-view />
      </v-main>
      <v-navigation-drawer
        v-model="navDrawer"
        dark
        fixed
        app
        temporary
      >
        <v-list>
          <v-img style="border-radius: 50%; margin-left: 20px;" width="70" height="70" src="https://sun1-15.userapi.com/c853524/v853524882/ac636/AQsWJVfPOvY.jpg"></v-img>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">Belmas</v-list-item-title>
              <v-list-item-subtitle>belmas_i@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item
            @click="$router.push('/list')"
            :disabled="$route.path.includes('/list')"
            link
          >
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Мои объявления</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Отклики</v-list-item-title>
          </v-list-item> -->
          <!-- <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Избранное</v-list-item-title>
          </v-list-item> -->
          <v-list-item
            @click="$router.push('/user')"
            :disabled="$route.path.includes('/user')"
            link
          >
            <v-list-item-icon>
              <v-icon>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></g></svg> -->
                mdi-face
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Настройка профиля</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        :app="true"
        elevate-on-scroll
        dark
        src="https://gearmoose.com/wp-content/uploads/2019/06/Best-Field-Watches-Update.jpg"
      >

        <template #img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(0, 0, 0, .9), rgba(25,32,72,.9)"
          >
          </v-img>
        </template>

        <svg xmlns="http://www.w3.org/2000/svg" style="z-index: 100" fill="white" id="Icons" viewBox="0 0 74 74" width="40" height="40"><path d="M55.9,40.125a1,1,0,0,1-1-1v-4.25a1,1,0,0,1,2,0v4.25A1,1,0,0,1,55.9,40.125Z"/><path d="M36.876,52.82A15.82,15.82,0,1,1,52.7,37,15.838,15.838,0,0,1,36.876,52.82Zm0-29.641A13.82,13.82,0,1,0,50.7,37,13.836,13.836,0,0,0,36.876,23.18Z"/><path d="M45.679,26.084a1,1,0,0,1-.972-.766L43,18.239H30.748l-1.7,7.079a1,1,0,0,1-1.945-.468l1.887-7.845a1,1,0,0,1,.973-.766H43.793a1,1,0,0,1,.973.766l1.887,7.845a1,1,0,0,1-.974,1.234Z"/><path d="M41.446,18.239h-9.14a1,1,0,0,1-1-1V3a1,1,0,0,1,1-1h9.14a1,1,0,0,1,1,1V17.239A1,1,0,0,1,41.446,18.239Zm-8.14-2h7.14V4h-7.14Z"/><path d="M43.793,57.761H29.96a1,1,0,0,1-.973-.766L27.1,49.149a1,1,0,0,1,1.945-.468l1.7,7.079H43l1.7-7.079a1,1,0,0,1,1.945.468l-1.887,7.845A1,1,0,0,1,43.793,57.761Z"/><path d="M41.446,72h-9.14a1,1,0,0,1-1-1V56.761a1,1,0,0,1,1-1h9.14a1,1,0,0,1,1,1V71A1,1,0,0,1,41.446,72Zm-8.14-2h7.14V57.761h-7.14Z"/><path d="M55.9,38H51.7a1,1,0,0,1,0-2h4.2a1,1,0,0,1,0,2Z"/><path d="M33.813,41.188a1,1,0,0,1-.707-1.707L36,36.586V28a1,1,0,0,1,2,0v9a1,1,0,0,1-.293.707L34.52,40.895A1,1,0,0,1,33.813,41.188Z"/></svg>
        <v-toolbar-title
          @click="home"
          class="mr-12 align-center logo"
        >
          <span class="title">WATCHES 360</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-row
          style="max-width: 300px"
        >
          <v-text-field
            :append-icon-cb="() => {}"
            placeholder="Поиск среди 0 часов из 0 стран"
            single-line
            append-icon="mdi-magnify"
            color="white"
            hide-details
          ></v-text-field>
        </v-row>
        <v-btn
          small
          style="margin-left: 30px;"
          text
          @click="navDrawer = !navDrawer"
        >
          Личный кабинет
        </v-btn>
      </v-app-bar>
    </v-app>
    <!-- <div class="body"> piska</div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

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
      navDrawer: false
    }
  },

  methods: {
    home () {
      if (this.$route.path !== '/') this.$router.push('/')
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

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
