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
  height: 64px;
  display: flex;
  align-items: center;
}

.watch-footer {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
}

.nav {
  width: 50%;
  display: flex;
  justify-content: space-between;
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
  line-height: 17px;
  color: #878787;
  text-decoration: none;
}
</style>
