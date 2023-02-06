<script>
import navBar from '../components/navBar.vue';
import jumbotron from '../components/jumbotron.vue';
import works from '../components/homeComponent/works.vue';
import restaurant from '../components/homeComponent/restaurant.vue';
import workWithUs from "../components/homeComponent/workWithUs.vue";


export default {
    name: 'HomeView',
    components: {
        navBar,
        jumbotron,
        works,
        restaurant,
        workWithUs,
    }
}
</script>

<template>

    <header>
        <navBar />
        <jumbotron />
    </header>

    <main>
        <works />
        <restaurant />
        <workWithUs />
    </main>

    <footer>
        <div class="bg_footer">
            <div class="container py-5">
                <div class="row">
                    <div class="col">
                        <h4>Servizio clienti</h4>
                        <ul>
                            <li>Domande frequenti</li>
                            <li>Accedi</li>
                            <li>Registrati su Just Eat</li>
                            <li>Miglior Prezzo Garantito</li>
                            <li>Scarica l'app di Just Eat</li>
                        </ul>
                    </div>

                    <div class="col">
                        <h4>Categorie</h4>
                        <ul>
                            <li>Pizza</li>
                            <li>Sushi</li>
                            <li>Cibo cinese</li>
                            <li>Kebab</li>
                            <li>Gelato</li>
                            <li>Dolci</li>
                        </ul>
                    </div>


                    <div class="col">
                        <h6>icone</h6>
                        <h6>social</h6>
                    </div>
                </div>
                <span>Copyright © 2019 FoodMood by WebGeniusLab. All Rights Reserved.</span>
            </div>
        </div>
    </footer>


</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.bg_footer{
    background-color: $deliveboo-dark;
    
    span{
        color:  $deliveboo-white;
    }
    h4{
        color: $deliveboo-white;
    }

    ul li{
        color:  $deliveboo-white;
    }


}


</style>