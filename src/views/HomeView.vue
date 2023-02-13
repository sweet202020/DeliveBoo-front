<script>
import navBar from '../components/navBar.vue';
import jumbotron from '../components/jumbotron.vue';
import works from '../components/homeComponent/works.vue';
import restaurant from '../components/homeComponent/restaurant.vue';
import workWithUs from "../components/homeComponent/workWithUs.vue";



export default {
    name: 'HomeView',
    components: {
        navBar,
        jumbotron,
        works,
        restaurant,
        workWithUs,
    }
}
</script>

<template>

    <header>
        <navBar />
        <jumbotron />
    </header>

    <main>
        <works />
        <restaurant />
        <workWithUs />
    </main>

</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;


</style>