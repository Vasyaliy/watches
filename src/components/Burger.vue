<template>
  <div
   id="burger"
   :class="{ 'active' : isBurgerActive }"
  @click.prevent="toggle"
  >
    <slot>
      <button type="button" class="burger-button" title="Menu">
        <span class="hidden">Toggle menu</span>
        <span class="burger-bar burger-bar--1"></span>
        <span class="burger-bar burger-bar--2"></span>
        <span class="burger-bar burger-bar--3"></span>
      </button>
    </slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    isActive: {
      type: Boolean
    },
    notActive: {
      type: Boolean
    }
  },
  data () {
    return {
      isBurgerActive: false
    }
  },
  methods: {
    toggle () {
      if (!this.notActive) {
        this.isBurgerActive = !this.isBurgerActive
        this.$emit('toggleBurger', this.isBurgerActive)
      } else {
        this.$emit('toggleBurger', !this.isBurgerActive)
      }
    }
  },
  mounted () {
    this.isBurgerActive = this.isActive
  }
})
</script>
<style lang="scss">
$color: #ffffff;

$height-icon: 20px;
$width-line: 50px;
$height-line: 5px;

$transition-time: 0.4s;
$rotation: 45deg;
$translateY: ($height-icon / 2);
$translateX: 0;

#burger {
  display: none;
}
@media screen and (max-width: 768px) {
  #burger {
    display: block;
  }
  .hidden {
    visibility: hidden;
  }

  button {
    cursor: pointer;
  }

  button:focus {
    outline: 0;
  }

  .burger-button {
    position: relative;
    display: block;
    height: 35px;
    width: 32px;
    z-index: 999;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .burger-bar {
    background-color: #f3f3f5;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
      opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .burger-bar--1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }

  .burger-bar--2 {
    transform-origin: 100% 50%;
    transform: scaleX(0.8);
  }

  .burger-button:hover .burger-bar--2 {
    transform: scaleX(1);
  }

  .no-touchevents .burger-bar--2:hover {
    transform: scaleX(1);
  }

  .burger-bar--3 {
    transform: translateY(6px);
  }

  #burger.active .burger-button {
    transform: rotate(-180deg);
  }

  #burger.active .burger-bar {
    background-color: #fff;
  }

  #burger.active .burger-bar--1 {
    transform: rotate(45deg);
  }

  #burger.active .burger-bar--2 {
    opacity: 0;
  }

  #burger.active .burger-bar--3 {
    transform: rotate(-45deg);
  }
}
</style>
