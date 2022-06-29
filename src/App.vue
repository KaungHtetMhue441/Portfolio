

<template>
    <div class="h-100">
        <Nav>
        </Nav>
        <router-view :key="$route.path"></router-view>
        <Footer></Footer>
        </div>
</template>
    
<script setup>
import { onMounted, Static } from 'vue';
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue'
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,100;1,300;1,500&display=swap');
</style>
