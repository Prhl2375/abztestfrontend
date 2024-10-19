// src/router.js

import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Users from './components/Users.vue';
import Positions from "./components/Positions.vue";
import AddUser from "./components/AddUser.vue";

const routes = [
    {
        path: '/',
        name: 'Users',
        component: Users,
    },
    {
        path: '/positions',
        name: 'Positions',
        component: Positions
    },
    {
        path: '/addUser',
        name: 'AddUser',
        component: AddUser,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
