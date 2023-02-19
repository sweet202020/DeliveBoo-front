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
    <div class="container-fluid success">
        <div class="container title_category text-center">
            <h3>PAGAMENTO AVVENUTO CON SUCCESSO</h3>
        </div>
        <div class="pt-5">
            <img class="standard" src="../../assets/img/wave.png" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.success{
    min-height: 100px;  
}

.title_category {
    border: 3px solid $deliveboo-primary-light;
    background-color: $deliveboo-white;
    color: $deliveboo-primary;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 3px 9px $deliveboo-primary;
    border-radius: 10px;
    position: relative;
    top: -150px;
    //box-shadow: 3px 3px 9px $deliveboo-dark;
    z-index: 100;
    width: 70%;
}

</style>