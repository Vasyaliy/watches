<template>
  <div class="card">
    <img
     class="card__img"
     alt="photo"
     :src="userWithIcon.icon"
    >
    <span class="card__sign">{{$props.card.sign}}</span>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
interface CardObject {
  sign: string;
  image: string;
}
export default Vue.extend({
  props: {
    card: {
      type: Object as () => CardObject
    }
  },
  computed: {
    userWithIcon () {
      return {
        ...this.$props,
        icon: require(`../../assets/watches/${this.$props.card.image}.png`)
      }
    }
  }
})

</script>
<style lang="scss" scoped>
.card {
  display: flex;
  position: relative;
  padding: 0;
  flex-direction: column;
  max-width: 188px;
  background: white;
  overflow: hidden;
  transition: $transition-duration-long;
  margin-right: 5px;
  margin-bottom: 65px;

  &__sign {
    padding: 13px 10px;
    padding-top: 10px;
    align-self: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: $secondary-color;
    text-transform: uppercase;
  }

  &__img {
    position: relative;
    transition: $transition-duration;
    &:hover {
      transform: scale(1.08);
    }
  }
}
</style>
