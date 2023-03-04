<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';



export default {
  name: 'AppVue',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<template>

  <AppHeader/>

  <main>
    <AppMain/>
    <router-view></router-view>
  </main>

  <AppFooter/>

</template>

<style lang="scss">
@use './styles/general.scss' as * ;
@use "bootstrap/scss/bootstrap" as *;


</style>
