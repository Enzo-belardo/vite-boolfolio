import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/AppHome.vue'
import Projects from './pages/AppProjects.vue';
import AboutUs from './pages/AppAbout.vue';
import SingleProject from './pages/AppSingleProject.vue';
import contactUs from './pages/AppContacts.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },

        {
            path: '/about',
            name: 'about',
            component: AboutUs
        },

        {
            path: '/projects/:id',
            name: 'project',
            component: SingleProject
        },

        {
            path: '/contacts',
            name: 'contactUs',
            component: contactUs
        },
    ]
});

export { router }