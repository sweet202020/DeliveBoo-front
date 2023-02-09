<script>
import navBar from '../components/navBar.vue';
import jumbotronMenu from '../components/jumbotronMenu.vue';


export default {
    name: 'ReastaurantsView',
    components: {
        navBar,
        jumbotronMenu
    },
    data() {
        return {
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
            ]
        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../assets/img/categories/${name}`, import.meta.url).href
        }
    }
}
</script>

<template>
    <navBar />
    <jumbotronMenu />

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