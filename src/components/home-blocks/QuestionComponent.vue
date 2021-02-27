<template>
   <div
    @click="state = !state"
    class="faq-block">
      <div class="faq-block__question">
        <span>{{question.text}}</span>
        <img
          src="../../assets/arrow.png"
          class="icon"
          :class="{active: state}"
        />

      </div>
        <div
          class="faq-block__answer"
          :class="{slide: state}"
        >
        {{question.answer}}
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'

interface Question {
  text: string;
  answer: string;
}
export default Vue.extend({
  props: {
    question: {
      type: Object as () => Question
    }
  },

  data () {
    return {
      state: false as boolean
    }
  }
})
</script>
<style lang="scss" scoped>
.faq-block {
  max-width: 750px;
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid #454545;
  margin-bottom: 15px;
  flex-flow: column;
  color: white;
  font-family: Montserrat;
  justify-content: center;
  transition: all $transition-duration ease;

  &__question {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #BEBEBE;
    display: flex;
    padding: 5px 0;
    justify-self: center;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  &__answer {
    // background: rgba(0, 0, 0, 0.596);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    padding: 0 15px;
    max-height: 0;
    transition: all 0.4s ease-in;
    position: relative;
    overflow: hidden;
  }

}

.slide {
  display: flex;
  padding: 10px 15px;
  max-height: 100px;
  overflow: hidden;
  background: rgb(26, 25, 25);
}
.active {
  transition: all 0.2s ease-in;
  transform: scale(-1, -1)
}
</style>
