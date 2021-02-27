<template>
  <div class="categories-block-wrapper">
    <div class="standard-block margin">
        <h3 class="golden-sign">Категории часов</h3>
        <div class="categories-container">
          <div
            v-for="(card, index) in cards"
            :key="`${card.sign}${index}`"
          >
            <card-category :card="cards[index]">
            </card-category>
          </div>
      </div>
      <button @click="$router.push('/list')" class="btn btn--wide"> Перейти в каталог </button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import CardCategory from './CardCategory.vue'

interface CardObject {
  sign: string;
  image: string;
}
export default Vue.extend({
  components: {
    CardCategory
  },
  data () {
    return {
      cards: [
        { sign: 'Мужские часы', image: 'manswatch' },
        { sign: 'Винтажные часы', image: 'vintage' },
        { sign: 'Недорогие часы', image: 'cheap' },
        { sign: 'Часы для погружения', image: 'waterResist' },
        { sign: 'Золотые часы', image: 'gold' },
        { sign: 'Часы с турбийоном', image: 'turbo' },
        { sign: 'Лимитированые часы', image: 'limited' },
        { sign: 'Бестселлеры', image: 'bestseller' }
      ] as Array<CardObject>
    }
  }
})
</script>
<style lang="scss" scoped>

  .categories-block-wrapper {
    background-color: #F7F7F7;
  }

  .categories-container {
    margin-top: 60px;
    margin-bottom: 35px;
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
  .categories-block {
  }
</style>
