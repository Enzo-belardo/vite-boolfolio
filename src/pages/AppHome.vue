<script>

export default {
  name: 'AppHome',
  components: {
    
  },
  data() {
    return {
      text:'Hi, i\'m Vincenzo Belardo and i\'m a junior full stack web developer'
    }
  },
    methods:{
        getTextBot() {
        const newText = this.text.split("");
        for (let i = 0; i < newText.length; i++) {
        setTimeout(() => {
          this.text = newText.slice(0, i+1).join("");
        }, 100 * i);
      }
    }
  },
  created() {
    this.getTextBot()
  } 
}

</script>

<template>
  <div class="bg-home">
    <div class="container d-flex align-items-center ">
      <div class="row mb-2 ">
        <div class="jumbo col-xs-10 col-sm-10 col-md-6 col-lg-6 col-xl-6">
          <img src="../assets/imgs/jumbo-3.png" class="img-fluid"  alt="">
        </div>
        <div class="jumbo col-xs-10 col-sm-10 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center">          
          <h1 class="text-color"> {{ text }} </h1>
            <div class="pt-3 pb-3 d-flex">
              <a href="https://github.com/Enzo-belardo/" class="git">
                <i class="fa-brands fa-github me-3"></i>
              </a>
              <a href="https://www.linkedin.com/in/vincenzo-belardo/" class="link">
                <i class="fa-brands fa-linkedin"></i>     
              </a>
            </div> 
            <button class="button">
              <a href="../assets/cv/cv.pdf" download><i class="fa-solid fa-download"></i> Download CV</a>
            </button>            
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as * ;

.bg-home{
  height: 90vh;
}

.line{
  border: solid 2px;
  border-radius: 1rem;
  width: 100px;
  height: 0;
  margin: .5rem .5rem;
}

.text-color{
  color: $primary-color;
}

.button{
  width: 200px;
  padding: .5rem;
  border-radius: .4rem;
  background-color: $primary-color;
  
  a{
    text-decoration: none;
    color: rgb(220, 217, 212);
  }
}

.button:hover{
  background-color: rgb(104, 113, 120);
}

.fa-brands{
  font-size: 2rem;
}

.git,
.link{
  color: $primary-color;
}


</style>
