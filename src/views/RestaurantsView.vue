<script>
import navBar from '../components/navBar.vue';
import jumbotronRestaurants from '../components/jumbotronRestaurants.vue';
import btnCustomRoundedSmall from '../components/btnCustomRoundedSmall.vue';
import btnCustomRounded from '../components/btnCustomRounded.vue';
import cardRestaurant from '../components/homeComponent/cardRestaurant.vue';
import { store } from '../store';



export default {
    name: 'ReastaurantsView',

    components: {
        navBar,
        jumbotronRestaurants,
        btnCustomRoundedSmall,
        btnCustomRounded,
        cardRestaurant,
    },
    data() {
        return {
            store,
            categories: [
                {
                    url: 'pizza.png',
                    name: 'pizza',
                    id: 1
                },
                {
                    url: 'carne-3.png',
                    name: 'carne',
                    id: 2
                },
                {
                    url: 'pasta.png',
                    name: 'pasta',
                    id: 3
                },
                {
                    url: 'sushi.png',
                    name: 'sushi',
                    id: 4
                },
                {
                    url: 'insalate.png',
                    name: 'insalate',
                    id: 5
                },

                {
                    url: 'panini-2.png',
                    name: 'panini',
                    id: 6
                },
                {
                    url: 'hamburger.png',
                    name: 'hamburger',
                    id: 7
                },
                {
                    url: 'piadine-2.png',
                    name: 'piadine',
                    id: 8
                },

                {
                    url: 'fastfood.png',
                    name: 'fastfood',
                    id: 9
                },

                {
                    url: 'messicano.png',
                    name: 'messicano',
                    id: 10
                },
            ],
            filter: [],

        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../assets/img/categories/${name}`, import.meta.url).href
        },
    },/*  mounted() {
        store.filterType()
    }
 */
}
</script>

<template>
    <navBar />
    <jumbotronRestaurants />

    <div class="container title_category">
        <h2>SCEGLIE LE TUE CATEGORIE PREFERITE</h2>
    </div>

    <!-- ELENCO CATEGORIE -->
    <div class="container category text-center">
        <!-- SECTION CATEGORY -->
        <div class="row row-cols-4 row-cols-md-6 row-cols-lg-auto justify-content-around">
            <div class="col card_category m-1" v-for="category, i in categories"
                @click="this.filter.includes(category.name) ? this.filter.splice(filter.indexOf(category.name), 1) : this.filter.push(category.name)"
                :class="this.filter.includes(category.name) ? 'selected' : ''">
                <img :src="getImageUrl(category.url)" alt="">
                <h6 class="py-2">{{ category.name }}</h6>
            </div>
        </div>
        <btnCustomRounded text="Applica filtri" iconFw="fa-solid fa-utensils" bg_btn="bg_blue" bg_hover="hover_blu_light"
            @click="store.callApiRestaurants(store.API_URL + 'api/restaurants/filter/' + this.filter)" class="mt-5" />
        <!-- <button @click="store.callApiRestaurants(store.API_URL + 'api/restaurants/filter/' + this.filter)"
                                                                        class="btn btn-primary">SUBMIT</button> -->
    </div>
    <!--  <div class="d-flex">
                                        <ul>

                                            <li v-for="category in categories">
                                                <input type="checkbox" :value="category.name" v-model="store.filterTypes" class="me-3">
                                                {{
                                                    category.name
                                                }}
                                            </li>
                                        </ul>
                                        <button @click="store.filterType()" class="btn btn-secondary" type="submit">Search</button>
                                    </div> -->

    <!-- ELENCO RISTORANTI -->
    <div class="container bg_img my-5 pt-3 text-start">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-between">
            <div class="col my-2 d-flex align-items-stretch" v-for="restaurant in store.restaurants">
                <div class="card restaurant">

                    <!-- COVER IMAGE -->
                    <div v-if="restaurant.cover_image">
                        <img class="card-img" :src="store.API_URL + 'storage/' + restaurant.cover_image" alt="">
                    </div>
                    <div v-else>
                        <img class="card-img" src="https://picsum.photos/300/300" alt="placeholder">
                    </div>
                    <!-- DETAILS RESTAURANT -->
                    <div class="card-body">
                        <h4 class="card-title">{{ restaurant.restaurant_name }}</h4>
                        <div class="text"><i class="fa-solid fa-location-dot aspect_ratio me-2"></i> {{ restaurant.address
                        }}</div>
                        <div class="text"><i class="fa-regular fa-clock aspect_ratio me-2"></i> {{ restaurant.opening_time
                        }}</div>
                        <div class="text mb-5"><i class="fa-solid fa-bicycle aspect_ratio me-2"></i> {{
                            restaurant.delivery_price }} €</div>

                        <!-- PLATE CATEGORY RESTAURANT -->
                        <h6 class="mb-1">Cosa trovi da loro:</h6>
                        <div class="row" v-for="type in restaurant.types">
                            <div class="col text-start"> {{ type.name }} </div>
                        </div>

                        <router-link :to="{ name: 'single-restaurant', params: { slug: restaurant.slug } }">
                            <btnCustomRoundedSmall text="Menu" iconFw="fa-solid fa-utensils" bg_btn="bg_blue"
                                bg_hover="hover_blu_light" />
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- <div v-else>
                                                                                Ops No restaurants available for these types!
                                                                                Change your Filter
                                                                            </div> -->
        </div>
    </div>
    <!--onde bot-->
    <div class="pt-5">
        <img class="standard" src="../assets/img/wave.png" alt="">
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.title_category {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    border: 3px solid $deliveboo-primary-light;
    background-color: #fcfcfc;
    box-shadow: 3px 3px 9px $deliveboo-primary;
    border-radius: 10px;
    position: relative;
    top: -100px;
    //box-shadow: 3px 3px 9px $deliveboo-dark;
    z-index: 100;
    width: 70%;

}

.selected {
    background-color: $deliveboo-primary-light;
    color: $deliveboo-white;
    border-radius: 1rem;
    margin-bottom: 1rem;
}

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

h1,
h2 {
    color: $deliveboo-primary;
    word-spacing: 10px;
}

h4 {
    color: $deliveboo-primary;
    font-size: 1.7rem;
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
    //border: 5px solid $deliveboo-primary;
    //border-radius: 10px;

    .text {
        color: $deliveboo-dark;
        font-size: 1.1rem;
    }

    a {
        text-decoration: none;
    }
}

.aspect_ratio {
    aspect-ratio: 1/1;
}

.card-img {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
</style>