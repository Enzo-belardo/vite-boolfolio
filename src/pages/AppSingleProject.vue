<script>
import axios from 'axios';
import AppProject from '../components/AppProject.vue';

export default{
    name: 'AppSinglePost',
    components : {
        AppProject,
      
    },
    data() {
        return {
            project: null,
            url: 'http://127.0.0.1:8000/api/projects',
        }
    },
    methods: {
        getProject(){
            axios.get(this.url,{
                params:{
                   
                }
            })
            .then((response) => {
                this.project = response.data.results;
            })

            .catch(function (error) {
                console.log(error);
            })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    

    <div class="container d-flex flex-wrap p-3">
        <div class="row g-3">
            <AppProject :project="project"/>     
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as * ;
@use '../styles/partials/variables' as * ;



</style>
