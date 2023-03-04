<script>


export default {
  name: 'AppHeader',
  components: {
    
  }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-md bg-body-tertiary bg-dark">
            <div class="container">
                <div class="text-light">
                    <h3>Boolfolio</h3>
                </div>
                <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <ul class="d-flex"> 
                            <li>
                                <router-link :to="{ name: 'home' }" 
                                :class="this.$route.name == 'home' ? 'active' : ''">
                                    Home     
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'about' }"
                                :class="this.$route.name == 'about' ? 'active' : ''">
                                    About us   
                                </router-link>     
                            </li>
                            <li>
                                <router-link :to="{ name: 'projects' }" 
                                :class="this.$route.name == 'projects' ? 'active' : ''">
                                    Projects    
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as * ;

li{
    list-style-type: none;
    margin-left: 1rem;

    a{
        text-decoration: none;
        color: white;
    }
}

.active{
    color: rgb(70, 181, 233);
}




</style>
