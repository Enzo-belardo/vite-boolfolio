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
   <header>
    <AppHeader/>
   </header>
  
  <main>
    <AppMain/>
  </main>
   <footer>
    <AppFooter/>
   </footer>

</template>

<style lang="scss">
@use './styles/general.scss' as * ;
@use './styles/partials/variables' as * ;
@use "bootstrap/scss/bootstrap" as *;


main{
  background-color: $secondary-color;
}

</style>
