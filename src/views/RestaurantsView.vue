<script>
import navBar from '../components/navBar.vue';
import jumbotronRestaurants from '../components/jumbotronRestaurants.vue';
import btnCustomRoundedSmall from '../components/btnCustomRoundedSmall.vue';
import cardRestaurant from '../components/homeComponent/cardRestaurant.vue';
import { store } from '../store';



export default {
    name: 'ReastaurantsView',

    components: {
        navBar,
        jumbotronRestaurants,
        btnCustomRoundedSmall,
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

    <!-- ELENCO CATEGORIE -->
    <div class="container text-center py-5">
        <h1>SCEGLI LE TUE CATEGORIE</h1>
        <div class="row">
            <div class="col card_category p-1 mt-3" v-for="category in categories"
                @click="this.filter.includes(category.name) ? '' : this.filter.push(category.name)">
                <img :src="getImageUrl(category.url)" alt="">
                <h6 class="py-2">{{ category.name }}</h6>
            </div>
            <button @click="store.callApiRestaurants(store.API_URL + 'api/restaurants/filter/' + this.filter)"
                class="btn btn-primary">SUBMIT</button>
        </div>
    </div>
    <!-- <div class="d-flex">
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
    <!--card ristoranti-->
    <div class="container bg_img my-5 text-start">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-3 align-items-stretch">
            <div class="col" v-for="restaurant in store.restaurants">
                <div class="card restaurant">
                    <img class="card-img-top" src="https://picsum.photos/300/300" alt="Title">
                    <div class="card-body">
                        <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
                        <div class="text">Indirizzo: {{ restaurant.address }}</div>
                        <div class="text">Orari: {{ restaurant.opening_time }}</div>
                        <div class="text mb-4">Consegna: {{ restaurant.delivery_price }} €</div>
                        <span v-for="type in restaurant.types">
                            <span>#{{ type.name }}</span>
                        </span>


                        <!-- metodo per collegare il pulsante alla pagina del singolo ristorante -->
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
    //border: 5px solid $deliveboo-primary;
    //border-radius: 10px;

    .text {
        color: $deliveboo-dark;
        font-size: 13px;
    }

    a {
        text-decoration: none;
    }

}

ul {
    list-style: none;
}
</style>