<script>
import jumbotronRestaurants from '../components/jumbotronRestaurants.vue';
export default {
    name: 'CartView',
    components: {
        jumbotronRestaurants
    }
}
</script>

<template>
    <jumbotronRestaurants />
    <div class="container-fluid">

    </div>

    <h1>pagamento avvenuto con successo</h1>

</template>

<style lang="scss">
@use '../styles/partials/variables.scss' as *;

container-fluid{
    background-image: url('../assets/img/backgrounds/sfondo.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
}
</style>