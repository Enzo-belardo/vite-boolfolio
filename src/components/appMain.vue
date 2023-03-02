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
    <div class="container">
        <div class="" v-for="element in projectList">
            <p>{{ element.title }}</p>
        </div>
    </div>
  
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as * ;
@use '../styles/partials/variables' as * ;


</style>
