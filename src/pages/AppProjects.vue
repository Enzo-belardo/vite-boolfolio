<script>
import axios from 'axios';
import AppProject from '../components/AppProject.vue';

export default{
    name: 'AppProjects',
    components : {
        AppProject,
      
    },
    data() {
        return {
            projectList:[],
            url: 'http://127.0.0.1:8000/api/projects',
        }
    },
    methods: {
        getProjects(){
            axios.get(this.url,{
                params:{
                   
                }
            })
            .then((response) => {
                this.projectList = response.data.results;
            })

            .catch(function (error) {
                console.log(error);
            })
        }
    },
    created() {
        this.getProjects();
    }
}
</script>

<template>
    <AppProject v-for="project in projectList" :project="project"/>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as * ;
@use '../styles/partials/variables' as * ;


</style>
