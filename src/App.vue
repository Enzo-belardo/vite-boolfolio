<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/Appheader.vue';

export default {
  name: 'AppVue',
  components: {
    AppMain,
    AppHeader,
  }
}
</script>

<template>

  <header>
    <AppHeader/>
  </header>
  <main>
    <AppMain/>
  </main>

</template>

<style lang="scss">
@use './styles/general.scss' as * ;
@use "bootstrap/scss/bootstrap" as *;


</style>
