<template>
  <div class="categories-block-wrapper">
    <div class="standard-block margin">
        <div class="flex">
          <h3 class="golden-sign wide">Популярные модели</h3>
          <span class="sign">В нашем каталоге только самые востребованные модели часов класса люкс</span>
        </div>
        <div class="categories">
          <div
            v-for="(card, index) in cards"
            :key="`${card.sign}${index}`"
          >
            <card-watch :card="card"/>
          </div>
      </div>
      <button @click="$router.push('/list')" class="btn btn--wide"> Перейти в каталог </button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import CardWatch from './CardWatch.vue'

interface CardObject {
  sign: string;
  image: string;
}
export default Vue.extend({
  components: {
    CardWatch
  },
  data () {
    return {
      cards: [
        { sign: 'Omega', image: 'omega' },
        { sign: 'Rolex', image: 'rolex' },
        { sign: 'Hublot', image: 'hublot' },
        { sign: 'Audemars piguet', image: 'audemarspiguet' },
        { sign: 'Breguet', image: 'breguet' },
        { sign: 'Brietling', image: 'brietling' },
        { sign: 'patek philipp', image: 'patek-philipp' },
        { sign: 'Richard mille', image: 'richard-mille' },
        { sign: 'Iwc', image: 'iwc' },
        { sign: 'Cartier', image: 'cartier' }
      ] as Array<CardObject>
    }
  }
})
</script>
<style lang="scss" scoped>

  .categories-block-wrapper {
    min-height: 850px;
    background-color:rgb(255, 255, 255);
  }

  .categories {
    margin-top: 60px;
    margin-bottom: 35px;
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

</style>
