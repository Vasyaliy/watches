<template>
    <div class="support-block-background">
      <div class="standard-block margin">
        <h3 class="golden-sign white-text margin-bottom-medium"> Удобный и безопасный процесс покупки</h3>
        <div class="support-block-wrapper">
          <div class="support-block">
            <img src="../../assets/guarantee-certificate.png">
            <h2 class="support-block__header"> Мы гарантируем подлинность</h2>
            <span class="support-block__text">
              Мы проверяем дилеров согласно строгим<br> критериям качества, прежде чем они могут<br> предлагать часы на нашей платформе. Гарантия<br> подлинности защищает Вас от реплик и подделок.
            </span>
          </div>
           <div class="support-block">
            <img src="../../assets/24hours.png">
            <h2 class="support-block__header">Персональная поддержка 24/7</h2>
            <span class="support-block__text">
              Мы обеспечиваем безопасную покупку часов на<br> международном уровне. Наша многоязычная<br> команда поддержки всегда в Вашем<br> распоряжении.
            </span>
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
.support-block-background {
  background-color: $primary-color;
  background-image: url("../../assets/background.png");
  background-position: top right;
  background-repeat: no-repeat;
}

.support-block-wrapper {
  display: flex;
  flex-flow: row nowrap;
}
.support-block {
  color: white;
  min-width: 550px;
  margin-right: 34px;
  &__header {
    margin-top: 24px;
    margin-bottom: 18px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
  }

  &__text {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #BEBEBE;
  }
}
</style>
