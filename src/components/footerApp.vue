<script>

export default {
    name: 'footerApp'
}



</script>

<template>
    <div class="bg_footer">
        <div class="container py-5">
            <div class="row row-cols-1 row-cols-md-3">
                <div class="col ">
                    <h4>Servizio clienti</h4>
                    <ul>
                        <li>Domande frequenti</li>
                        <li>Contattaci</li>
                        <li>Accedi</li>
                        <li>Registrati su Just Eat</li>
                        <li>Scarica l'app di Just Eat</li>
                        <li>Miglior Prezzo Garantito</li>
                    </ul>
                </div>

                <div class="col ">
                    <h4>Categorie</h4>
                    <div class="d-flex">
                        <ul>
                            <li>Pizza</li>
                            <li>carne</li>
                            <li>Pasta</li>
                            <li>Sushi</li>
                            <li>Insalate</li>
                        </ul>
                        <ul>
                            <li>Panini</li>
                            <li>Hamburger</li>
                            <li>Piadine</li>
                            <li>FastFood</li>
                            <li>Messicano</li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <h4>Seguici sui social</h4>
                    <a href=""><i class="fa-brands fa-facebook me-2"></i></a>
                    <a href=""><i class="fa-brands fa-instagram me-2"></i></a>
                    <a href=""><i class="fa-brands fa-tiktok me-2"></i></a>
                </div>
            </div>
            <span>Copyright © 2019 FoodMood by WebGeniusLab. All Rights Reserved.</span>
        </div>
    </div>


</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.bg_footer {
    background-color: black;
    opacity: 85%;

    span {
        color: $deliveboo-white;
        opacity: 50%;
        font-size: 13px;
    }

    h4 {
        color: $deliveboo-primary;
        opacity: 80%;
    }

    li {
        color: $deliveboo-white;
        opacity: 80%;
        list-style: none;
        text-decoration: none;
        transition: 0.5s;
        margin-right: 0;

        &:hover {
            cursor: pointer;
            color: $deliveboo-primary;
        }
    }

    a {
        color: $deliveboo-white;
        opacity: 80%;

        &:hover {
            background-color: transparent;
            color: $deliveboo-primary;
        }
    }

}
</style>