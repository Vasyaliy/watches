<template>
  <div class="faq-wrapper" id="faq">
    <div class="standard-block margin">
      <div class="faq">
        <h2 class="faq__header white-text">Ответы на часто задаваемые вопросы</h2>
        <div
         class="faq-block"
         v-for="(question, index) in questions"
         :key="index + question.text"
        >
          <question-component :question="question"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import QuestionComponent from './QuestionComponent.vue'

interface Question {
  text: string;
  answer: string;
}
export default Vue.extend({
  components: {
    QuestionComponent
  },
  data () {
    return {
      questions: [
        { text: 'Как распознать подделку?', answer: 'Самый простой способ проверить часы на подлинность — сверить с фотографией оригинала. К примеру, часто можно увидеть подделки Rolex с прозрачной задней крышкой или гравировкой, хотя на самом деле бренд не производит такие модели.' },
        { text: 'Где я могу сообщить о моих сомнениях в подлинности артикула?', answer: 'Самый простой способ проверить часы на подлинность — сверить с фотографией оригинала. К примеру, часто можно увидеть подделки Rolex с прозрачной задней крышкой или гравировкой, хотя на самом деле бренд не производит такие модели.' },
        { text: 'Что делать, если продавец не отвечает на мой запрос?', answer: 'Самый простой способ проверить часы на подлинность — сверить с фотографией оригинала. К примеру, часто можно увидеть подделки Rolex с прозрачной задней крышкой или гравировкой, хотя на самом деле бренд не производит такие модели.' },
        { text: 'С кем я заключаю договор при покупке часов?', answer: 'Самый простой способ проверить часы на подлинность — сверить с фотографией оригинала. К примеру, часто можно увидеть подделки Rolex с прозрачной задней крышкой или гравировкой, хотя на самом деле бренд не производит такие модели.' },
        { text: 'Как рассчитывается цена продажи часов?', answer: 'Самый простой способ проверить часы на подлинность — сверить с фотографией оригинала. К примеру, часто можно увидеть подделки Rolex с прозрачной задней крышкой или гравировкой, хотя на самом деле бренд не производит такие модели.' },
        { text: 'Как купить определенные часы на Chrono24?', answer: 'Самый простой способ проверить часы на подлинность — сверить с фотографией оригинала. К примеру, часто можно увидеть подделки Rolex с прозрачной задней крышкой или гравировкой, хотя на самом деле бренд не производит такие модели.' },
        { text: 'Какую безопасность дает мне гарантия на часы?', answer: 'Самый простой способ проверить часы на подлинность — сверить с фотографией оригинала. К примеру, часто можно увидеть подделки Rolex с прозрачной задней крышкой или гравировкой, хотя на самом деле бренд не производит такие модели.' },
        { text: 'Объявление из-за границы. Что мне нужно учитывать?', answer: 'Самый простой способ проверить часы на подлинность — сверить с фотографией оригинала. К примеру, часто можно увидеть подделки Rolex с прозрачной задней крышкой или гравировкой, хотя на самом деле бренд не производит такие модели.' }
      ] as Array<Question>
    }
  }
})
</script>
<style lang="scss" scoped>
.faq-wrapper {
  background: #222222;
}

.faq {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  &__header {
    text-align: center;
    margin-bottom: 40px;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 42px;
    line-height: 54px;
  }
}

.faq-block {
  display: flex;
  flex-flow: column;
  color: white;
  &__question {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__answer {
    position: relative;
    max-height: 0;
    overflow: hidden;
  }

  &:target &__answer {
    min-height: 100%;
  }
}

.faq-block:target .faq-block__answer {
  min-height: 100px;
}
</style>
