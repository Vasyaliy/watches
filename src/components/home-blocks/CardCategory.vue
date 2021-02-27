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
        icon: require(`../../assets/${this.$props.card.image}.png`)
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
  max-width: 264px;
  background: white;
  border-bottom: 1px solid $gold-btn;
  overflow: hidden;
  transition: $transition-duration;
  margin-bottom: 25px;
  margin-right: 5px;

  &__sign {
    padding: 13px 10px;
    padding-top: 10px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #1E232B;
  }

  &__img {
    position: relative;
  }

  &:hover {
    -webkit-box-shadow: 6px 8px 15px 0px rgba(0,0,0,0.14);
    -moz-box-shadow: 6px 8px 15px 0px rgba(0,0,0,0.14);
    box-shadow: 6px 8px 15px 0px rgba(0,0,0,0.14);
  }
}
</style>
