<script>
import appMain from './components/appMain.vue';

export default {
  name: 'AppVue',
  components: {
    appMain,
  }
}
</script>

<template>
  <main>
    <appMain/>
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as * ;
@use "bootstrap/scss/bootstrap" as *;


</style>
