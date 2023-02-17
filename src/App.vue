<script>
import jumbotron from './components/jumbotron.vue';
import navBar from './components/navBar.vue';
import footerApp from './components/footerApp.vue';

export default {
    components: {
        jumbotron,
        navBar,
        footerApp
    },
}

</script>

<template>

    <navBar />
    <!-- <jumbotron /> -->

    <router-view></router-view>

    <footerApp />

</template>

<style lang="scss">
@use './styles/general.scss';

/* .space {
    height: 1000px;
} */

</style>
