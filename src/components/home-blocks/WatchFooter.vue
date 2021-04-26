<template>
  <footer class="watch-footer-wrapper">
    <div class="margin watch-footer">
      <span class="logo">Логотип</span>
      <nav class="nav">
        <a href="#" @click="$router.push('/list')" class="link">Купить часы</a>
        <a href="#" @click="$router.push('/newProduct')" class="link">Продать часы</a>
        <a href="#faq" class="link">FAQ</a>
        <a href="#" @click="$router.push('/defend')" class="link">Защита покупателей</a>
      </nav>
      <span class="watch-span">Все права защищены</span>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.watch-footer-wrapper {
  background: #141414;
  // height: 64px;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.watch-footer {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}

.nav {
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-flow: row;
  margin: 10px 0;
}
.watch-span {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #878787;
}
.logo {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #C6C6C6;
}

.link {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  margin: 25px 10px;
  line-height: 17px;
  color: #878787;
  text-decoration: none;
  transition: color 0.2s;
   &:hover {
     color: white;
  }
}

@media screen and (max-width: 1224px) {
  .watch-footer {
    flex-flow: column;
  }
  .logo {
    margin-top: 15px;
  }

  .nav {
    width: 100%;
  }
  .watch-span {
    margin-bottom: 15px;
  }
}

@media screen and (max-width: 520px) {
  .logo {
    margin: 35px 0;
  }

  .watch-span {
    margin: 35px 0;
  }

  .link {
    margin-left: 0;
  }
  .nav {
    flex-flow: column;
  }
  .watch-footer {
    align-items: flex-start;
  }
  .link {
    margin: 5px 0;
  }
}

</style>
