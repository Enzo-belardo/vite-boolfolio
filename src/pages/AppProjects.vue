<script>
import AppProject from '../components/AppProject.vue';
import axios from 'axios';

export default {

    name: 'AppProjects',
    components: {
        AppProject,
    },
    data() {
        return {
            projectsList: [],
            urlAddress: 'http://127.0.0.1:8000/api/projects',
        }
    },
    methods: {
        getProjects() {
            axios.get(this.urlAddress , {
                params:{

                }
            })

            .then( (response) => {
                console.log(response.data.results);
                this.projectsList = response.data.results.data;
            })
            .catch(function (error) {
                console.log(error);
            })
                
        }
    },
    created() {
        this.getProjects();
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col p-5 text-color">
                <h1>Welcome to my projects</h1> 
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row g-4">
            <AppProject v-for="project in projectsList" :project="project" :isHover="true"/>
        </div> 
    </div>
</template>


<style lang="scss"  scoped>
@use '../styles/partials/variables' as * ;

.text-color{
    color: $primary-color;
}
    
</style>