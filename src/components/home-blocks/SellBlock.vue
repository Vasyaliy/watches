<template>
  <div class="sell-block-background">
    <div class="standard-block margin">
      <div class="flex margin-bottom-standard">
        <h3 class="golden-sign wide white-text"> Хотите продать часы?</h3>
        <span class="sign white-text">Бесплатно разместите объявление для 9 миллионов ценителей часов в месяц</span>
      </div>
      <div class="sell-block">
        <div class="sell-block__section">
          <img src="../../assets/logos/time.png" alt="time" class="sell-block__img">
          <div class="line"></div>
          <div class="sell-block__point"></div>
          <div class="sell-block__text">
            1. Создайте объявление о продаже часов на нашей площадке
          </div>
        </div>
        <div class="sell-block__section">
          <img src="../../assets/logos/wallet.png" alt="wallet" class="sell-block__img">
          <div class="line"></div>
          <div class="sell-block__point"></div>
          <div class="sell-block__text">
            2. Покупатель оплачивает стоимость покупки Вам напрямую
          </div>
        </div>
        <div class="sell-block__section">
          <img src="../../assets/logos/truck.png" alt="truck" class="sell-block__img">
          <div class="line"></div>
          <div class="sell-block__point"></div>
          <div class="sell-block__text">
            3. Вы отправляете товар застрахованной посылкой
          </div>
        </div>
        <div class="sell-block__section">
          <img src="../../assets/logos/gift.png" alt="gift" class="sell-block__img">
          <div class="sell-block__point"></div>
          <div class="sell-block__text">
            4. Мы не снимаем комиссию с продавца и с покупателя
          </div>
        </div>
      </div>
      <button @click="$router.push('/newProduct')" class="btn btn--widest">Создать объявление</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.sell-block-background {
  background-color: $primary-color;
  background-image: url("../../assets/background3.png");
  background-color: $primary-color;
  background-position: top right;
  background-size: cover;
  background-repeat: no-repeat;
}

.sell-block-wrapper {
  display: flex;
  flex-flow: row nowrap;
}
.sell-block {
  color: white;
  // min-width: 550px;
  display: flex;
  flex-direction: row;
  margin-right: 34px;
  margin-bottom: 24px;
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

  &__point {
    position: relative;
    width: 13px;
    top: -8px;
    margin-bottom: 13px;
    height: 13px;
    border-radius: 50%;
    background: #222222;
    border: 2px solid #DFB27F;
  }

  &__img {
    position: relative;
    margin-bottom: 25px;
    width: 48px;
    max-height: 48px;
  }
  &__section {
    display: flex;
    flex-direction: column;
    max-width: 260px;
    margin-right: 34px;
  }
}

.line {
  height: 1px;
  border-bottom: 1px dashed #626262;
  width: 123%;
  // background: black;
  // border-bottom: 1px dashed #626262;
}

.line:last-child {
  height: 0px;
}

@media screen and (max-width: 900px) {
  .sell-block {
    flex-flow: column;
    margin-right: 0;

    &__section {
      flex-flow: row;
      margin-right: 0;
      margin-bottom: 34px;
      align-items: space-around;
      justify-content: space-around;
      max-width: 282px;
    }

    &__img {
      // margin-right: 7px;
    }
    &__point {
      top: 5px;
      margin-left: 5px;
      margin-right: 10px;
      width: 20px;
      height: 11px;
    }
  }

  .line {
    width: 1px;
    height: 123%;
    border-left: 1px dashed #626262;
  }
}
</style>
