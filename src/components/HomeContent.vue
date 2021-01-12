<template>
  <div>
    <div class="parallax">
      <div
        :class="`watches-label ${isAppearLabel ? 'appeared' : 'beforeAppear'}`"
        >
        <div class="watches-label" style="width: 100%; margin-bottom: 60px">
          <h1 class="unselectable" style="font-size: 150px; font-weight: 500; font-family: Roboto; color: white">
            WATCHES
          </h1>
          <h1 class="unselectable" style="font-size: 150px; font-weight: 150; font-family: Roboto; color: white">
            360
          </h1>
        </div>
        <div style="display: flex; justify-content: space-between; width: 600px;">
          <div
            @click="$router.push('/list')"
            class="look-products align-center"
          >
            ПОСМОТРЕТЬ ОБЪЯВЛЕНИЯ
          </div>
          <div
            @click="create()"
            class="look-products align-center"
          >
            СОЗДАТЬ ОБЪЯВЛЕНИЕ
          </div>
        </div>
      </div>
    </div>
    <div class="advantages-box">
      <v-card dark class="advantage">
        <v-card-title>
          Лучший выбор
        </v-card-title>
          <div style="margin: auto;">
            <img  width="100%" style="object-fit: cover; height: 250px;" src="https://www.apetogentleman.com/wp-content/uploads/2019/02/below-500-watches.jpg">
          </div>
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, amet eius beatae illum animi, error adipisci reprehenderit est eos repellat itaque odio fugit repellendus sequi dicta, ducimus natus eaque magni?
        </v-card-text>
      </v-card>
      <v-card dark class="advantage">
        <v-card-title>
          Надежность
        </v-card-title>
          <div style="margin: auto;">
            <img  width="100%" style="object-fit: cover; height: 250px;" src="https://i.ytimg.com/vi/vqJItXcRJ_o/maxresdefault.jpg">
          </div>
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, amet eius beatae illum animi, error adipisci reprehenderit est eos repellat itaque odio fugit repellendus sequi dicta, ducimus natus eaque magni?
        </v-card-text>
      </v-card>
      <v-card dark class="advantage">
        <v-card-title>
          Сила земли
        </v-card-title>
          <div style="margin: auto;">
            <img  width="100%" style="object-fit: cover; height: 250px;" src="https://elite-lombard.ru/upload/iblock/53b/53b63228c395e300fcaff18fcfc36817.jpg">
          </div>
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, amet eius beatae illum animi, error adipisci reprehenderit est eos repellat itaque odio fugit repellendus sequi dicta, ducimus natus eaque magni?
        </v-card-text>
      </v-card>
    </div>
    <manufactorers />
    <gurantee />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Manufactorers from './Manufactorers.vue'
import Gurantee from './Gurantee.vue'
import Axios from 'axios'
import { getCookie } from '../Products/Products'
import host from '@/Products/config'

export default Vue.extend({

  components: {
    Manufactorers,
    Gurantee
  },

  data () {
    return {
      isAppearLabel: false as boolean,
      id: 0 as number
    }
  },

  mounted () {
    setTimeout(() => {
      this.isAppearLabel = true
    }, 200)
    Axios
      .get(`${host}/api/v1/auth/users/me/`,
        {
          headers: {
            Authorization: `token ${getCookie('access_token')}`
          }
        }
      )
      .then(res => {
        console.log(res.data.id)
        this.id = res.data
      })
      .catch(console.log)
  },
  methods: {
    create () {
      getCookie('access_token') ? this.$router.push('/newProduct') : this.$router.push('/auth')
    }
  }
})
</script>

<style lang="scss" scoped>
.advantage {
  width: 30%;
  // background-color: rgb(240, 240, 240)
}

.advantages-box {
  width: 90%;
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}

.parallax {
  background-image: url("./32.jpg");
  // background-image: url("https://sun1-89.userapi.com/z-9k87VwW6T6y3JRtlGaU_PPmg30cpPNaoaRcA/mxVpxj8R0n0.jpg");
  min-height: 550px;
  background-attachment: fixed;
  background-color: black;
  // opacity: 0.7;
  background-position: center;
  /* border: solid 1px; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.main {
  background-color: rgb(10, 10, 30);
}
.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.align-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.appeared {
  transform: translateY(-40px);
}

.beforeAppear {
  // transition: transform 1s ease;
  transform: translateY(-600px);
}

.watches-label {
  transition: transform 1.2s ease;
  // transform: translateY(-100px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: sticky;
  margin: auto;
  width: 70%;
  top: 25%;
  bottom: 5px;
  // border: solid 1px white;
  border-radius: 15px;
}

.look-products {
  border: solid 1px white;
  // position: absolute;
  // top: 200px;
  // z-index: -100;
  font-size: 20px;
  font-weight: 400;
  padding: 15px;
  margin-bottom: 25px;
  font-family: Roboto;
  color: white;
  transform: scale(1);
  transition: transform 0.2s ease
}

.look-products:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
