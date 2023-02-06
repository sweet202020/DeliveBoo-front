<script>
import jumbotron from './components/jumbotron.vue';
import navBar from './components/navBar.vue'

export default {
    components: {
        jumbotron,
        navBar
    }
}

</script>

<template>
    
    <navBar />
    <!-- <jumbotron /> -->
    
    <router-view></router-view>

</template>

<style lang="scss">
@use './styles/general.scss';

.space {
    height: 1000px;
}
</style>
