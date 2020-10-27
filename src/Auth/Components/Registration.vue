<template>
  <div class="form__email">
    <div>
      <v-text-field dark  label="E-mail"></v-text-field>
    </div>
    <div>
      <v-text-field dark label="Пароль"></v-text-field>
    </div>
    <div>
      <v-text-field dark label="Пароль еще раз"></v-text-field>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
    }
  }
})
</script>
<style lang="scss">
.form {
  color: white;
  width: 351px;

  &__link {
    cursor: pointer;
  }

  &__create {
  display: block;
  cursor: pointer;
  }
}
</style>
