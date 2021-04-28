<template>
  <div>
    <search-block/>
    <watch-categories/>
    <support-block/>
    <popular-models/>
    <brand-new/>
    <sell-block/>
    <buy-sell-card/>
    <faq/>
    <watch-footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Axios from 'axios'
import { getCookie } from '../Products/Products'
import host from '@/Products/config'
import SearchBlock from './home-blocks/SearchBlock.vue'
import WatchCategories from './home-blocks/WatchCategories.vue'
import SupportBlock from './home-blocks/SupportBlock.vue'
import PopularModels from './home-blocks/PopularModels.vue'
import BrandNew from './home-blocks/BrandNew.vue'
import SellBlock from './home-blocks/SellBlock.vue'
import BuySellCard from './home-blocks/BuySellCard.vue'
import Faq from './home-blocks/Faq.vue'
import WatchFooter from './home-blocks/WatchFooter.vue'

export default Vue.extend({
  components: {
    SearchBlock,
    WatchCategories,
    SupportBlock,
    PopularModels,
    BrandNew,
    SellBlock,
    BuySellCard,
    Faq,
    WatchFooter
  },
  data () {
    return {
      id: 0 as number
    }
  },

  mounted () {
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
  }
})
</script>

<style lang="scss" scoped>
.advantage {
  width: 30%;
}

.advantages-box {
  width: 90%;
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}

.search-block-1 {
  min-height: 490px;
  z-index: 3;
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
