<script>


export default{
    name: 'AppProject',
    components : {
      
    },

    data() {
        return {
        }
    },

    props:
    {
        'project': {
            type: Object,
            required: false,
            default: null
        },  
        
        'isShow': {
            type: Boolean,
            required: false,
            default: false
        },

        'isHover': {
          type: Boolean,
          default: true
       },
    }
}
</script>

<template>
    <div class="col-xs-10 col-sm-10 col-md-6 col-lg-4 col-xl-4" :class=" isShow ? ' col-xl-10 col-lg-10 col-md-10 col-sm-10' : ''">
        <div class="card" :class="{ 'no-hover': !isHover }" > 
            <img :src="project ? project.image : ''" class="img-fluid" :alt="project ? project.title : ''">
            <div class="card-body" v-if="project">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text"> {{ (isShow) ? project.description : project.description.substr(0, 140) }}</p>
                <router-link :to="{name: 'project' , params:{ id: project.id }}" :class="this.$route.name === 'project' ? 'd-none' : 'd-inline'" class="btn btn-primary">
                    Guarda
                </router-link>
            </div>
        </div>  
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as * ;
@use '../styles/partials/variables' as * ;

.card-body{
    background-color: $primary-color;
    color: $secondary-color;
}
.card {
  border: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
  &.no-hover:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    transform: none;
  }

}
</style>
