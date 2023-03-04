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
    <div class="container d-flex p-3">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            <div class="card">
                <img :src="project.image" class="img-fluid" :alt="project.title">
                <div class="card-body" >
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.description.substr(0,150) }}</p>
                    <a href="#" class="btn btn-primary">view</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as * ;
@use '../styles/partials/variables' as * ;


</style>
