<template>
  <div class="search-block">
    <div class="margin search-block__container">
      <div class="search-block__group">
        <div class="search-block__sign slide-in-left-1">
          <span class="sign-search sign-gold">Найди часы </span>
          <span class="sign-search"> класса люкс
            <br>
            на крупнейшей </span>
            <span class="sign-search"> площадке
          </span>
        </div>
        <div class="search-block__field-group slide-in-left">
          <div class="search-block__field">
            <input type="text" class="input"/>
            <button @click="$router.push('/list')" class="btn"> Найти</button>
          </div>
          <button @click="$router.push('/newProduct')" class="btn btn--dark"> продать часы </button>
        </div>
      </div>
      <div class="search-block__img">
        <img class="search-watch" src="../../assets/watch.png" alt="watch">
        <div class="ellipse"/>
      </div>
    </div>
    <footer class="search-footer margin">
        <nav class="search-footer__nav">
          <span class="search-footer__span">Rolex</span>
          <span class="search-footer__span">Omega</span>
          <span class="search-footer__span">Hublot</span>
          <span class="search-footer__span">Ulysse nardin</span>
          <span class="search-footer__span">breiting</span>
          <span class="search-footer__span">Patek philippe</span>
        </nav>
        <a class="search-footer__link" href="#">Все марки</a>
      </footer>
  </div>
</template>
<style lang="scss" scoped>
.btn {
  padding: 5px;
  flex: 1 1 48px;
  align-items: center;
  background: $gold-btn;
  color: rgba(255, 255, 255, 0.884);
  min-width: 166px;
  padding: 0;
  outline: none;
  border: 0;
  text-transform: uppercase;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;
  cursor: pointer;
  margin-right: 12px;
  &__hover {
    background: darken($color: $gold-btn, $amount: 50);
  }
  &--sell {
    background: $primary-color;
    color: rgba(255, 255, 255, 0.884);
    border: 0;
    border: 1px solid rgba(255, 255, 255, 0.308);
    height: 48px;
    max-width: 175px;
    flex: 1 1 100%;
  }
}
.search-block {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  min-height: 710px;
  overflow: hidden;
  z-index: 2;
  background-color: $primary-color;
  background-image: url("../../assets/background1.png");
  background-attachment: fixed;
  background-position: top right;
  background-size: cover;
  background-repeat: no-repeat;

  &__group {
    display: flex;
    flex-flow: column;
    width: 100%;
  }
  &__field-group {
    display: flex;
    max-height: 48px;
    width: 775px;
    flex-flow: row;
    flex: 1 1 100%;
  }
  &__field {
    display: flex;
    min-height: 48px;
    flex-direction: row;
    flex: 1 1 100%;
    margin-bottom: 12px;
  }
  &__container {
    display: flex;
    flex: 1 1 100%;
    flex-flow: row nowrap;
    // flex-direction: row;
    justify-content: space-between;
  }

  &__sign {
    width: 100%;
    color: white;
    margin-top: 203px;
    margin-bottom: 50px;
  }

  &__img {
    position: relative;
    z-index: 7;
    width: 420.07px;
    height: 529.57px;
    left: 60px;
    top: 66px;
  }
}
.search-watch {
  display: flex;
  justify-content: flex-end;
  z-index: 2;
}

.sign-search {
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 109.1%;
/* or 52px */
}

.sign-gold {
  color: #FED8AD;
}
.input {
  display: flex;
  position: relative;
  flex: 1 1 550px;
  resize: vertical;
  // width: 100%;
  // max-width: 550px;
  padding: 8px 16px;
  line-height: 25px;
  color: black;
  border: 0;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  -webkit-appearance: none;
  background: white;
  transition: border .3s ease;
  &::placeholder {
    color: $primary-color;
  }
  &:focus {
    outline: none;
    border-color: #275EFE;
  }
}

::-webkit-scrollbar { width:0; height:0 }
::-webkit-scrollbar-thumb { background: transparent}
::-webkit-scrollbar-track { background-color: transparent}

.search-footer {
  display: flex;
  border-top: 1px solid rgba(255, 255, 255, 0.301);
  justify-content: space-between;
  align-self: flex-end;
  // min-width: 816px;

  &__nav {
    -webkit-overflow-scrolling: touch;
    display: flex;
    overflow-x: scroll;
    justify-content: flex-start;
    padding: 23px 0;
    white-space: nowrap;
  }
  &__span {
    text-transform: uppercase;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-right: 45px;
    color: rgba(255, 255, 255, 0.89);
  }

  &__link {
    padding: 23px 0;
    justify-self: end;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: rgba(255, 255, 255, 0.692);
    cursor: pointer;
    min-width: 80px;
  }
}
@media screen and (max-width: 1024px) {
  .search-block {
    &__field-group {
      width: 100%;
      flex-flow: row wrap;
    }
    &__group {
      flex: row wrap;
    }
    &__container {
      flex-flow: row wrap;
    }
    &__img {
      top: 0px;
      width: 100%;
      transform: scale(0.9, 0.9);
    }
  }
  .search-footer {
   &__link {
     display: none;
   }
  }
  .btn {
    min-width: 85px;
  }
}
@media screen and (max-width: 874px) {
  .search-footer {
    &__nav {
      margin: 0 10px;
      max-width: 600px;
    }

    &__link {
      padding-left: 5px;
      display: none;
    }
  }
}

@media screen and (max-width: 850px) {
  .search-block {
    &__sign {
      margin-top: 100px;
    }
    .btn {
      margin-right: 20px;
    }
  }
}

@media screen and (max-width: 450px) {
  .sign-search {
    font-size: 40px;
  }
  .search-block {
    &__container {
      padding: 0 15px;
    }
    &__sign {
      // margin-top: 55px;
      display: flex;
      flex-flow: column wrap;
    }

    &__img {
      left: -35px;
      top: -20px;
      width: 100%;
      transform: scale(0.6, 0.6);
    }
  }
  .btn {
    font-size: 14px;
  }
}

.ellipse {
  position: absolute;
  z-index: 1;
  width: 599px;
  height: 60px;
  left: -125px;
  top: 270px;
  background: radial-gradient(50% 50% at 50% 50%, rgba(252, 252, 252, 0.4) 0%, rgba(247, 231, 214, 0.4) 23.23%, rgba(236, 208, 176, 0.4) 48.75%, rgba(223, 184, 140, 0.4) 73.23%, rgba(196, 148, 93, 0.4) 100%);
  opacity: 0.7;
  box-shadow: 0px 0px 120px #FFFFFF;
  filter: blur(100px);
  transform: rotate(24.05deg);
}

.slide-in-left{animation:slide-in-left 1s cubic-bezier(.25,.46,.45,.94) both}

.slide-in-left-1{animation:slide-in-left 1.5s cubic-bezier(.25,.46,.45,.94) both}

@keyframes slide-in-left{0%{transform:translateX(-1000px);opacity:0}100%{transform:translateX(0);opacity:1}}

.slide-in-right {animation:slide-in-right 1s cubic-bezier(.25,.46,.45,.94) both}

@keyframes slide-in-right{0%{transform:translateX(1000px);opacity:0}100%{transform:translateX(0);opacity:1}}

</style>
