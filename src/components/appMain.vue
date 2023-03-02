<script>
import axios from 'axios';

export default{
    name: 'appMain',
    components : {
      
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
                console.log(response.data.results);
                this.projectList = response.data.results;
            })
        }
    },
    created() {
        this.getProjects();
    }
}
</script>

<template>
    <div class="container d-flex p-3">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            <div class="card" v-for="element in projectList">
                <img :src="element.image" class="img-fluid" :alt="element.title">
                <div class="card-body" >
                    <h5 class="card-title">{{ element.title }}</h5>
                    <p class="card-text">{{ element.description.substr(0,150) }}</p>
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
