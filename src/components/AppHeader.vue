<script>


export default {
  name: 'AppHeader',
  components: {
    
  }
}
</script>

<template>
     <header>
        <nav class="navbar navbar-expand-md navbar-bg navbar-dark bg-nav">
            <div class="container ">
              <div class="logo">
                <h3>Vincenzo Belardo</h3>
              </div>
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                  <span class="navbar-toggler-icon"></span>
                  <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style="height: 100vh; position: fixed;">
                  <div class="offcanvas-header text-dark">
                    <h1>Menu</h1>
                  </div>
                  <div class="offcanvas-body text-danger d-flex flex-column align-items-start" style="overflow-y: auto;">
                    <router-link :to="{ name: 'home' }" :class="this.$route.name == 'home' ? 'active' : ''">
                      Home
                    </router-link>
                    <router-link :to="{ name: 'about' }" :class="this.$route.name == 'about' ? 'active' : ''">
                      About me
                    </router-link>   
                    <router-link :to="{ name: 'projects' }" :class="this.$route.name == 'projects' ? 'active' : ''">
                      Projects
                    </router-link> 
                    <router-link :to="{ name: 'contactUs' }" 
                    :class="this.$route.name == 'contactUs' ? 'active' : ''">
                    Contact 
                    </router-link>         
                  </div>
                </div>            
              </button>
              <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link :to="{ name: 'home' }" 
                    :class="this.$route.name == 'home' ? 'active' : ''">
                    Home     
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link :to="{ name: 'about' }"
                    :class="this.$route.name == 'about' ? 'active' : ''">
                    About me  
                    </router-link>  
                  </li>
                  <li class="nav-item">
                    <router-link :to="{ name: 'projects' }" 
                    :class="this.$route.name == 'projects' ? 'active' : ''">
                    Projects    
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link :to="{ name: 'contactUs' }" 
                    :class="this.$route.name == 'contactUs' ? 'active' : ''">
                    Contact 
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as * ;
@use '../styles/partials/variables' as * ;

li{
  list-style-type: none;
  margin-left: 1rem;

    a{
      text-decoration: none;
      color: white;
    }
}

.active{
  color: rgb(220, 217, 212);
}

.bg-nav{
  background-color: rgb(73, 90, 104);
  height: 10vh;
}

img{
  width: 250px;
}

.logo{
  color: $secondary-color;
}

.offcanvas-body>a{
  color: black;
  line-height: 2rem;
  text-decoration: none;
}
.offcanvas-body{
  height: 100%;
  overflow: hidden;
}


</style>
