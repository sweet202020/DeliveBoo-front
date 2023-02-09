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
                    url: 'panini-2.png',
                    name: 'panini'
                },
                {
                    url: 'piadine-2.png',
                    name: 'piadine'
                },
                {
                    url: 'hamburger.png',
                    name: 'hamburger'
                },
                {
                    url: 'fastfood.png',
                    name: 'fastfood'
                },
                {
                    url: 'insalate.png',
                    name: 'insalate'
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

    <div class="container text-center py-5">
        <h1>SCEGLI LE TUE CATEGORIE</h1>

        <div class="d-flex justify-content-center">
            <div class="card_category p-3 m-2" v-for="category in categories">
                <img :src="getImageUrl(category.url)" alt="">
                <h6 class="py-2">{{ category.name }}</h6>
            </div>
        </div>

    </div>


</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

h1 {
    color: $deliveboo-primary;
    word-spacing: 10px;
}

img {
    height: 50px;
    aspect-ratio: 1/1;
}

h6 {
    color: $deliveboo-primary;
}

;
</style>