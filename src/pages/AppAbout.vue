<script>


export default {
  name: 'AppAbout',
  components: {
    
  }
}
</script>

<template>
  <div class="bg-about">
    <div class="container d-flex flex-wrap justify-content-between align-items-center">

      <div class="row">
        <div class="col title">
          <h1>About me</h1>
        </div>
      </div>

      <div class="row d-flex pt-5">
        <div class="col-xs-10 col-sm-10 col-md-12 col-lg-7 col-xl-7 mb-1 ">
          <p>
            Mi chiamo Vincenzo Belardo, sono un programmatore informatico che ha iniziato la propria carriera lavorativa come tornitore di macchine a controllo numerico in un'azienda metalmeccanica di Bologna, dopo essersi diplomato in un istituto tecnico industriale con indirizzo meccanico.
            
            Nonostante il mio lavoro fosse interessante e impegnativo, ho sempre avuto una grande passione per la tecnologia informatica, che alla fine mi ha spinto a seguire la mia vocazione e cambiare completamente carriera. Ho così deciso di iscrivermi a un corso di full stack web developer della durata di 6 mesi, dove ho imparato molte tecnologie di frontend e backend come HTML, CSS, JavaScript, Vue, PHP e Laravel utilizzando MySQL come database relazionale.
            
            Durante il corso, ho avuto la possibilità di applicare le mie conoscenze pratiche replicando siti web e web app famosi come WhatsApp Web, Discord, Dropbox, PlayStation e Netflix. Alla fine del corso, abbiamo lavorato in team su un progetto completo, acquisendo così preziose competenze di collaborazione e gestione dei progetti.
          </p>
        </div>
        <div class="col-xs-10 col-sm-10 col-md-12 col-lg-5 col-xl-5 d-flex flex-wrap align-items-start justify-content-center pt-sm-4">
          <div class="d-md-none d-md-inline mt-4 mb-4">
            <h2>Hard skill</h2>
          </div>
          <div>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-bootstrap"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-vuejs"></i>
            <i class="fa-brands fa-sass"></i>
            <i class="fa-brands fa-npm"></i>
            <i class="fa-brands fa-php"></i>
            <img src="../assets/imgs/mysql.png" class="img" alt="">
            <i class="fa-brands fa-laravel"></i>
            <i class="fa-brands fa-git-alt"></i>
          </div>
        </div>
        <div class="col-xs-11 col-sm-11 col-md-12 col-lg-6 col-xl-6 mt-xs-4 d-flex justify-content-end  align-items-center mt-5  go">
          <div class="d-md-none d-md-inline">
            <h1>Go to my projects</h1>
          </div>
          <div class="ms-4">
            <router-link :to="{ name: 'projects' }" 
            :class="this.$route.name == 'projects' ? 'active' : ''">
            <i class="fa-solid fa-circle-arrow-right"></i>
            </router-link>
          </div>    
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as * ;
.title{
  margin-top: 2.3rem;
}

.go{
  padding-bottom: 7.5rem;
}

.programmer{
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.img{
  width: 60px;
  height: 60px;
  margin-left: 1rem;
}

i{
  font-size: 4rem;

}

.fa-php{
  color: $php;
  margin-bottom: 1rem;
  margin-left: 1rem;
}

.fa-js{
  color:$javascript;
  margin-bottom: 1rem;
  margin-left: 1rem;
}
.fa-vuejs{
  color:$vue;
  margin-bottom: 1rem;
  margin-left: 1rem;
}
.fa-html5{
  color: $html;
  margin-bottom: 1rem;
}
.fa-css3-alt{
  color:$css;
  margin-bottom: 1rem;
  margin-left: 1rem;
}
.fa-laravel{
  color:$laravel;
  margin-bottom: 1rem;
  margin-left: 1rem;
}

.fa-bootstrap{
  color:$bootstrap;
  margin-bottom: 1rem;
  margin-left: 1rem;
}

.fa-sass{
  color:$sass;
  margin-bottom: 1rem;
  margin-left: 1rem;
}

.fa-npm{
  color:$npm;
  margin-bottom: 1rem;
  margin-left: 1rem;
}

.fa-git-alt{
  margin-bottom: 1rem;
  margin-left: 1rem;
}


</style>
