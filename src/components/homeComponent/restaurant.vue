<script>

import cardRestaurant from './cardRestaurant.vue';

export default{
    name:'restaurant',
    components: {
        cardRestaurant,
    }
}
</script>

<template>

<div class="box ">
            <!--onde top-->
            <div>
                <img class="rotate" src="../../assets/img/wave.png" alt="">
            </div>
            <!--card ristoranti-->
            <div class="container bg_img my-5 text-center">
                <h2>I nostri suggerimenti</h2>
                <h3 class="my-5">Ristoranti popolari</h3>
                <div class="row row-cols-2 row-cols-md-3">
                    <!--card ristoranti--> <!--TODO fare cilco componente-->
                    <cardRestaurant img="https://picsum.photos/300/300" name="Ristorante1" info="Ristorante molto bello" description="bello bello"/>
                    <cardRestaurant img="https://picsum.photos/300/300" name="Ristorante1" info="Ristorante molto bello" description="bello bello"/>
                    <cardRestaurant img="https://picsum.photos/300/300" name="Ristorante1" info="Ristorante molto bello" description="bello bello"/>
                    <cardRestaurant img="https://picsum.photos/300/300" name="Ristorante1" info="Ristorante molto bello" description="bello bello"/>
                    <cardRestaurant img="https://picsum.photos/300/300" name="Ristorante1" info="Ristorante molto bello" description="bello bello"/>
                    <cardRestaurant img="https://picsum.photos/300/300" name="Ristorante1" info="Ristorante molto bello" description="bello bello"/>
                </div>
            </div>
            <!--onde bot-->
            <div class="pt-5">
                <img class="standard" src="../../assets/img/wave.png" alt="">
            </div>
        </div>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;

.box {
    background: rgb(245, 97, 44);
    background: linear-gradient(180deg, rgba(245, 97, 44, 1) 0%, rgba(255, 158, 69, 1) 50%, rgba(245, 97, 44, 1) 100%);


    .rotate {
        width: 100%;
        height: 100px;
        transform: rotate(180deg);
    }

    .standard {
        width: 100%;
        height: 100px;
        -webkit-transform: scaleX(-1);
    }

    .bg_img {
        // TODO trovare img come background
        background-image: url(../assets/img/);
        background-size: contain;
        background-repeat: no-repeat;
    }

    h2 {
        color: $deliveboo-white;
    }

    h3 {
        color: $deliveboo-dark;
    }
}

</style>