<script>

import cardRestaurant from './cardRestaurant.vue';
import { store } from '../../store.js';
import axios from 'axios'

export default {
    name: 'restaurant',
    components: {
        cardRestaurant,
    },
    data() {
        return {
            store,
            test: null,
            /* TOP_RESTARUNAT */
            top_restaurants: [
                {
                    url: 'luna.jpg',
                    name: 'Luna',
                    address: 'Via del Sole, 33',
                    description: 'pizza'
                },
                {
                    url: 'il_crotto.jpg',
                    name: 'Il crotto',
                    address: 'Via del mare, 1/b',
                    description: 'pasta ● carne ● insalate'

                },
                {
                    url: 'burger_race.jpg',
                    name: 'Burger Race',
                    address: 'Via del giramondo, 99',
                    description: 'hambugrger ● insalate'

                },
                {
                    url: 'tivoli.jpg',
                    name: 'Tivoli',
                    address: 'Piazza Italia, 5',
                    description: 'panini ● piadine'

                },
                {
                    url: 'mexicali.jpg',
                    name: 'Mexicali',
                    address: 'Via Messico, 1',
                    description: 'messicano ● carne ● insalate'
                }
            ]
        }

    },

    methods: {
        /* TOP_RESTARUNAT */
        getImageUrl(name) {
            return new URL(`../../assets/img/top_restaurants/${name}`, import.meta.url).href
        },
        callApi(url) {
            axios.get(url)
                .then(response => {
                    this.test = response.data.results.data;
                    console.log(this.test, 'test');
                    console.log(response.data.results.data, 'io');
                })
        }

    },

    mounted() {

    }
} 
</script>

<template>
    <div class="box">
        <!--onde top-->
        <div class="mt-5 ">
            <img class="rotate standard" src="../../assets/img/wave.png" alt="">
        </div>

        <!-- RISTORANTI DEL MESE -->
        <div class="container-fluid text-center my-5">
            <div class="container my-5">
                <h3>I RISTORANTI DEL MESE</h3>
            </div>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-auto g-3">
                <div class="col d-flex justify-content-around top_restaurant" v-for="restaurant in top_restaurants">
                    <div class="custom_card">
                        <img :src="getImageUrl(restaurant.url)" alt="">

                        <div class="card_content">
                            <span class="card_title">{{ restaurant.name }}</span>
                            <span class="card_subtitle">
                                <p>{{ restaurant.address }}</p>
                            </span>
                            <p class="card_description">Cosa puoi mangiare da loro: <br /> {{ restaurant.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- card ristoranti
                    <div class="container bg_img my-5 p-5 text-center">
                        <h2>I nostri suggerimenti</h2>
                        <h3 class="my-5">Ristoranti popolari</h3>
                        <div class="row row-cols-2 row-cols-md-3">
                            card ristoranti TODO fare cilco componente
                            <cardRestaurant v-for="prova in test" img="https://picsum.photos/300/300" :name="prova.restaurant_name"
                                info="info" description="bello bello" />
                        </div>
                    </div> -->
        <!--onde bot-->
        <div class="pt-5 mb-5">
            <img class="standard" src="../../assets/img/wave.png" alt="">
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;

/* #region common layout */
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
        /*       -webkit-transform: scaleX(-1); */
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
        color: $deliveboo-white;
        font-size: 50px;
    }

    .custom_card {
        img {
            width: 100%;
            aspect-ratio: 1/1;
            object-fit: cover;
        }
    }

}

/* #endregion common layout */


/*#region card*/

.custom_card {
    position: relative;
    width: 250px;
    height: 250px;
    color: #2e2d31;
    background: #131313;
    overflow: hidden;
    border-radius: 20px;
}

.temporary_text {
    font-weight: bold;
    font-size: 24px;
    /* padding: 6px 12px; */
    color: #f8f8f8;
}

.card_title {
    color: $deliveboo-primary;
    font-weight: bold;
    font-size: 1.5rem;
}


.card_content {
    position: absolute;
    left: 0;
    bottom: 0;
    /* edit the width to fit card */
    width: 100%;
    padding: 20px;
    background: #f2f2f2;
    border-top-left-radius: 20px;
    /* edit here to change the height of the content box */
    transform: translateY(115px);
    transition: transform .25s;
}

.card_content::before {
    content: '';
    position: absolute;
    top: -47px;
    right: -45px;
    width: 100px;
    height: 100px;
    transform: rotate(-175deg);
    border-radius: 50%;
    box-shadow: inset 48px 48px #f2f2f2;
}


.card_subtitle {
    display: block;
    font-size: 1rem;
    margin-bottom: 10px;
}

.card_description {
    font-size: 14px;
    opacity: 0;
    transition: opacity .5s;
}

.custom_card:hover .card_content {
    transform: translateY(0);
}

.custom_card:hover .card_description {
    opacity: 1;
    transition-delay: .25s;
}

/*#endregion card*/


/* #region responsive tablet */
@media screen and (max-width: 768px) {
    .box {

        .bubble {
            height: 160px;
        }

    }
}

/* #endregion responsive tablet */


/* #region responsive mobile */
@media screen and (max-width: 390px) {
    .box {

        .bubble {
            height: 80px;
        }

        h3 {
            font-size: 1.5rem;
        }
    }
}

/* #endregion responsive mobile */
</style>
