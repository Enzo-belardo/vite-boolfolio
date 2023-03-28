<script>
import AppProject from '../components/AppProject.vue';
import axios from 'axios';

export default {
    name: 'AppSingleProject',
    components: {
        AppProject
    },
    data() {
        return {
            project: null,
            urlAddress: 'http://127.0.0.1:8000',
        }
    },
    methods: {
        getProject() {
            axios.get(this.urlAddress + `/api/projects/${this.$route.params.id}`, {})

                .then((response) => {
                    console.log(response.data.results)
                    this.project = response.data.results;
                    console.warn(response);
                })
                .catch(function (error) {
                    console.warn(error);
                });
        }
    },
    created() {
    this.getProject();
    },
};
</script>

<template>
    <div class="container p-3">
        <div class="row d-flex justify-content-center">
            <AppProject :project="project" :isShow="true" :isHover="false"/>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as * ;

</style>