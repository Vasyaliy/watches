<template>
  <div class="buy-sell-wrapper">
    <div class="standard-block margin">
      <div class="buy-sell">
        <div class="buy-sell__header">
          <span class="sign-search"> Продавайте и покупайте </span>
          <span class="sign-search sign-gold">часы класса <br>люкс на площадке Watches360 </span>
        </div>
        <div class="buy-sell__benefits">
          <div class="buy-sell__benefit">Быстро</div>
          <div class="buy-sell__benefit">Безопасно</div>
          <div class="buy-sell__benefit">Удобно</div>
        </div>
        <div class="buttons">
          <button @click="$router.push('/list')" class="btn btn--short">Купить</button>
          <button @click="$router.push('/newProduct')" class="btn btn--short btn--dark">Продать</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.sign-search {
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 109.1%;
  color: white;
}

.sign-gold {
  color: #FED8AD;
}

.buy-sell {
  background: #222222;
  padding: 60px;
  background: url('../../assets/shutterstock.png');
  // background: linear-gradient(180deg, rgba(34, 34, 34, 0) 72.02%, #222222 100%), linear-gradient(180deg, #222222 0%, rgba(34, 34, 34, 0) 31.19%), linear-gradient(90deg, #222222 18.39%, rgba(34, 34, 34, 0) 58.93%), url('../../assets/shutterstock.png');
  background-position: right;
  background-repeat: no-repeat;
  background-color: rgba(34,34,34,1);
  background-size: 50%;
  &__benefits {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 40px;
  }

  &__benefit {
    text-transform: uppercase;
    margin-top: 29px;
    margin-right: 35px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: rgba(255, 255, 255, 0.856);
  }
  &__benefit::before {
    position: relative;
    top: -8%;
    content: "";
    background: $secondary-color;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    line-height: 2rem;
    color: white;
    text-align: center;
    margin-right: 10px;
  }
}

@media screen and (max-width: 640px) {
  .buy-sell__heafer {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
 .sign-search {
    text-align: center;
    font-size: 30px;
  }
}

@media screen and (max-width: 404px) {
  .buttons {
    display: flex;
    flex-flow: row nowrap;
  }
}
</style>
