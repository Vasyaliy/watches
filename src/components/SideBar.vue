<template>
  <div class="sidebar">
    <div
      class="sidebar-backdrop"
      v-if="isPanelOpen"
      @click="closeSidebarPanel"
    >
    </div>
      <transition name="slide">
        <div
          v-if="isPanelOpen"
          class="sidebar-panel"
        >
        <Burger class="slider-burger"/>
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
                @click="closeSidebarPanel"
              >
                {{component.title}}
              </span>
            </router-link>
          </div>
        </div>
      </transition>
    </div>
</template>
<script>
import Vue from 'vue'
// import { store, mutations } from '../store'
import VBodyScrollLock from 'v-body-scroll-lock'
import Burger from './Burger.vue'

Vue.use(VBodyScrollLock)
export default Vue.extend({
  props: {
    isPanelOpen: {
      type: Boolean
    }
  },
  components: {
    Burger
  },
  data () {
    return {
      routes: [
        {
          path: '/',
          title: 'About me'
        },
        {
          path: '/map',
          title: 'Map'
        },
        {
          path: '/gallery',
          title: 'Gallery'
        }
      ]
    }
  },
  methods: {
    closeSidebarPanel () {
      this.isPanelOpen = !this.isPanelOpen
    }
  }
//   computed: {
//     isPanelOpen () {
//     //   return store.isNavOpen
//     }
//   }
})
</script>
<style lang="scss">
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
    padding: 15px;
    margin-top: 10px;
    font-size: 30px;
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
  color: white;
}
</style>
