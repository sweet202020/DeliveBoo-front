<script>
import navBar from '../components/navBar.vue';
import jumbotronRestaurants from '../components/jumbotronRestaurants.vue';
import btnCustomRoundedSmall from '../components/btnCustomRoundedSmall.vue';

//TEST CALL - import card + axios +store
import cardRestaurant from '../components/homeComponent/cardRestaurant.vue';
import { store } from '../store';
import axios from 'axios'


export default {
    name: 'ReastaurantsView',
    components: {
        navBar,
        jumbotronRestaurants,
        btnCustomRoundedSmall,
        //TEST CALL - use component card
        cardRestaurant,

    },
    data() {
        return {
            //TEST CALL - aggiunto store e test-->restaurants al return
            store,
            restaurants: null,
            categories: [
                {
                    url: 'pizza.png',
                    name: 'pizza'
                },
                {
                    url: 'carne-3.png',
                    name: 'carne'
                },
                {
                    url: 'pasta.png',
                    name: 'pasta'
                },
                {
                    url: 'sushi.png',
                    name: 'sushi'
                },
                {
                    url: 'insalate.png',
                    name: 'insalate'
                },

                {
                    url: 'panini-2.png',
                    name: 'panini'
                },
                {
                    url: 'hamburger.png',
                    name: 'hamburger'
                },
                {
                    url: 'piadine-2.png',
                    name: 'piadine'
                },

                {
                    url: 'fastfood.png',
                    name: 'fastfood'
                },

                {
                    url: 'messicano.png',
                    name: 'messicano'
                },
            ],

            /*            restaurants: [
                            {
                                url: 'pizza.png',
                                name: 'pizza'
                            },
                            {
                                url: 'carne-3.png',
                                name: 'pizzeria boa'
                            },
                            {
                                url: 'pasta.png',
                                name: 'ristorante italiano'
                            },
                            {
                                url: 'sushi.png',
                                name: 'sushi'
                            },
                            {
                                url: 'insalate.png',
                                name: 'insalate'
                            },
            
                            {
                                url: 'panini-2.png',
                                name: 'panini'
                            },
                            {
                                url: 'hamburger.png',
                                name: 'hamburger'
                            },
                            {
                                url: 'piadine-2.png',
                                name: 'piadine'
                            },
            
                            {
                                url: 'fastfood.png',
                                name: 'fastfood'
                            },
            
                            {
                                url: 'messicano.png',
                                name: 'messicano'
                            },
                        ]  */

        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../assets/img/categories/${name}`, import.meta.url).href
        },
        // TEST CALL API - aggiunto metodo per chiamata
        callApi(url) {
            axios.get(url)
                .then(response => {
                    this.restaurants = response.data.results.data;
                    console.log(this.restaurants, 'test');
                    console.log(response.data.results.data, 'io');
                })
        }
    },
    // TEST CALL API - aggiunto mounted per passare url
    mounted() {
        this.callApi(store.API_URL + 'api/restaurants')
    }
}
</script>

<template>
    <navBar />
    <jumbotronRestaurants />

    <!-- ELENCO CATEGORIE -->
    <div class="container text-center py-5">
        <h1>SCEGLI LE TUE CATEGORIE</h1>
        <div class="row">
            <div class="col card_category p-1 mt-3" v-for="category in categories">
                <img :src="getImageUrl(category.url)" alt="">
                <h6 class="py-2">{{ category.name }}</h6>
            </div>
        </div>
    </div>

    <!-- ELENCO RISTORANTI -->
    <!--card ristoranti-->
    <div class="container bg_img my-5 text-start">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-3">
            <div class="col" v-for="restaurant in restaurants">
                <div class="card restaurant">
                    <img class="card-img-top" src="https://picsum.photos/300/300" alt="Title">
                    <div class="card-body">
                        <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
                        <div class="text">Indirizzo: {{ restaurant.address }}</div>
                        <div class="text">Orari: {{ restaurant.opening_time }}</div>
                        <div class="text mb-4">Consegna: {{ restaurant.delivery_price }} €</div>
                        <!-- metodo per collegare il pulsante alla pagina del singolo ristorante
                            <router-link :to="{ name: 'single-restaurant', params: { slug: restaurant.slug } }">Guarda il Menu</router-link> 
                        -->
                        <btnCustomRoundedSmall text="Menu" iconFw="fa-solid fa-utensils" bg_btn="bg_blue" bg_hover="hover_blu_light" class="mb-2" />
                    </div>
                </div>
            </div>
            <div class="col" v-for="restaurant in restaurants">
                <div class="card restaurant">
                    <img class="card-img-top" src="https://picsum.photos/300/300" alt="Title">
                    <div class="card-body">
                        <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
                        <div class="text">Indirizzo: {{ restaurant.address }}</div>
                        <div class="text">Orari: {{ restaurant.opening_time }}</div>
                        <div class="text mb-4">Consegna: {{ restaurant.delivery_price }} €</div>
                        <!-- metodo per collegare il pulsante alla pagina del singolo ristorante
                            <router-link :to="{ name: 'single-restaurant', params: { slug: restaurant.slug } }">Guarda il Menu</router-link> 
                        -->
                        <btnCustomRoundedSmall text="Menu" iconFw="fa-solid fa-utensils" bg_btn="bg_blue" bg_hover="hover_blu_light" class="mb-2" />
                    </div>
                </div>
            </div>
            <div class="col" v-for="restaurant in restaurants">
                <div class="card restaurant">
                    <img class="card-img-top" src="https://picsum.photos/300/300" alt="Title">
                    <div class="card-body">
                        <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
                        <div class="text">Indirizzo: {{ restaurant.address }}</div>
                        <div class="text">Orari: {{ restaurant.opening_time }}</div>
                        <div class="text mb-4">Consegna: {{ restaurant.delivery_price }} €</div>
                        <!-- metodo per collegare il pulsante alla pagina del singolo ristorante
                            <router-link :to="{ name: 'single-restaurant', params: { slug: restaurant.slug } }">Guarda il Menu</router-link> 
                        -->
                        <btnCustomRoundedSmall text="Menu" iconFw="fa-solid fa-utensils" bg_btn="bg_blue" bg_hover="hover_blu_light" class="mb-2" />
                    </div>
                </div>
            </div>


            <!--card ristoranti-->
            <!--TODO fare cilco componente-->
            <!-- <cardRestaurant v-for="restaurant in restaurants" img="https://picsum.photos/300/300"
                :name="restaurant.restaurant_name" info="info" description="bello bello" />
            <cardRestaurant v-for="restaurant in restaurants" img="https://picsum.photos/300/300"
                :name="restaurant.restaurant_name" info="info" description="bello bello" />
            <cardRestaurant v-for="restaurant in restaurants" img="https://picsum.photos/300/300"
                :name="restaurant.restaurant_name" info="info" description="bello bello" />
            <cardRestaurant v-for="restaurant in restaurants" img="https://picsum.photos/300/300"
                :name="restaurant.restaurant_name" info="info" description="bello bello" />
            <cardRestaurant v-for="restaurant in restaurants" img="https://picsum.photos/300/300"
                :name="restaurant.restaurant_name" info="info" description="bello bello" />
            <cardRestaurant v-for="restaurant in restaurants" img="https://picsum.photos/300/300"
                :name="restaurant.restaurant_name" info="info" description="bello bello" /> -->
        </div>

    </div>
    <!--onde bot-->
    <div class="pt-5">
        <img class="standard" src="../assets/img/wave.png" alt="">
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;


.standard {
    width: 100%;
    height: 100px;
    //-webkit-transform: scaleX(-1);
}

.bg_img {
    // TODO trovare img come background
    background-image: url(../assets/img/);
    background-size: contain;
    background-repeat: no-repeat;
}

h1 {
    color: $deliveboo-primary;
    word-spacing: 10px;
}

h5 {
    color: $deliveboo-primary;
}

.card_category {

    transition: 0.5s;

    &:hover {
        cursor: pointer;
        opacity: 50%;
    }

    img {
        height: 80px;
        transition: 0.5s;
    }

}

.restaurant {
    background-color: $deliveboo-white;
    box-shadow: 3px 3px 9px $deliveboo-dark;

    .text {
        color: $deliveboo-dark;
        font-size: 13px;
    }

}
</style>