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
            required: true,
        },  
    },
}
</script>

<template>
    <div class="col-xs-10 col-sm-10 col-md-6 col-lg-4 .col-xl-4">
        <div class="card"> 
            <img :src="project.image" class="img-fluid" :alt="project.title">
            <div class="card-body" >
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description.substr(0, 140) }}</p>
                <router-link :to="{name: 'singleProject'}" class="btn btn-primary">
                    view
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as * ;
@use '../styles/partials/variables' as * ;


</style>
