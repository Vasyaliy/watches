<template>
  <div class="categories-block-wrapper">
    <div class="standard-block margin">
        <div class="flex">
          <h3 class="golden-sign wide">Новинки каталога</h3>
          <span class="sign">Уникальная возможность, приобрести редкие модели часов. Будьте первыми</span>
        </div>
        <div class="categories">
          <div class="categories__card">
            <img class="categories__img" src="../../assets/brand-new/rolex.png">
            <div class="categories__sign">
              <h3 class="categories__header">Rolex</h3>
              <span class="categories__span"> King power </span>
            </div>
          </div>
          <div class="categories__card">
            <img class="categories__img" src="../../assets/brand-new/omega.png">
            <div class="categories__sign">
              <h3 class="categories__header">Omega</h3>
              <span class="categories__span"> King power </span>
            </div>
          </div>
          <div class="categories__card">
            <img class="categories__img" src="../../assets/brand-new/patek-philippe.png">
            <div class="categories__sign">
              <h3 class="categories__header">Patek Philippe</h3>
              <span class="categories__span"> King power </span>
            </div>
          </div>
        </div>
      <button @click="$router.push('/list')" class="btn btn--wide"> Перейти в каталог </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>

  .categories-block-wrapper {
    // min-height: 850px;
    background-color: $dark-white-background;
  }

  .categories {
    margin-top: 40px;
    margin-right: 5px;
    margin-bottom: 60px;
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;

    &__card {
      display: flex;
      flex-flow: column;
      flex: 1 1;
      max-width: 362px;
      max-height: 408px;
      margin-top: 20px;
      margin-right: 5px;

    }
    &__img {
      width: 100%;
      transition: $transition-duration;
       &:hover {
        -webkit-box-shadow: 6px 8px 15px 0px rgba(0,0,0,0.14);
        -moz-box-shadow: 6px 8px 15px 0px rgba(0,0,0,0.14);
        box-shadow: 6px 8px 15px 0px rgba(0,0,0,0.14);
      }
    }
    &__sign {
      padding-top: 10px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: $secondary-color;
      text-transform: uppercase;
    }
    &__span {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
    }
  }
.sign {
  display: flex;
  width: 374px;
  // margin-left: 94px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #222222;
}

@media screen and (max-width: 1689px) {
  .categories {
    &__card {
      margin-top: 50px;
    }
  }
}
@media screen and (max-width: 900px) {
  .categories {
    justify-content: center;

    &__card {
      flex: auto;
      margin-top: 70px;
    }
  }

}
</style>
