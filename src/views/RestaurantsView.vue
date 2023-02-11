<script>
import navBar from '../components/navBar.vue';
import jumbotronRestaurants from '../components/jumbotronRestaurants.vue';

//TEST CALL - import card + axios +store
import cardRestaurant from '../components/homeComponent/cardRestaurant.vue';
import { store } from '../store';
import axios from 'axios'


export default {
    name: 'ReastaurantsView',
    components: {
        navBar,
        jumbotronRestaurants,
        //TEST CALL - use component card
        cardRestaurant
    },
    data() {
        return {
            //TEST CALL - aggiunto store e test al return
            store,
            test: null,
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
                    this.test = response.data.results.data;
                    console.log(this.test, 'test');
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


</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

h1 {
    color: $deliveboo-primary;
    word-spacing: 10px;
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

    h6 {
        color: $deliveboo-primary;
    }

}
</style>