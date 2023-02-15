<script>
import btnCustom from './btnCustom.vue';
import btnCustomRounded from './btnCustomRounded.vue';
import inputText from './inputText.vue';

export default {
    name: "jumbotron",
    components: {
        btnCustom,
        btnCustomRounded,
        inputText,
    }
}

</script>

<template>
    <div class="jumbotron-bg pt-5 position-relative">
        <!--Effetto bg bolle-->
        <div class="wrapper">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <!--jumbo-->
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col ">
                    <div id="carouselExampleSlidesOnly " class="carousel slide burger" data-bs-ride="carousel">
                        <!--img mobile-->
                        <div class="d-md-block d-lg-none">
                            <img src="../assets/img/burger-1.png" class="d-block" alt="...">
                        </div>
                        <!--img desktop-->
                        <div class="carousel-inner d-none d-lg-block">
                            <div class="carousel-item active ">
                                <img src="../assets/img/burger-1.png" class="d-block" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img/taco.png" class="d-block" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img/pizza.png" class="d-block" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img/sushi.png" class="d-block" alt="...">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-jumbo col d-flex justify-content-center align-items-center">
                    <div>
                        <h1 class="fw-bolder">Il cibo che vuoi tu, <br> dove vuoi tu</h1>
                        <div class="my-3 d-flex">
                            <!--elimina w-100 se vuoi l'imput piu piccolo-->
                            <!--  <div class="w-100">
                                <inputText text="Cerca..."/>
                            </div> -->
                            <div>
                                <!-- <btnCustom text="Search" iconFw="fa-solid fa-magnifying-glass" bg_btn="bg_blue" bg_hover="hover_blu_light"/> -->
                                <router-link :to="{ name: 'restaurants' }">
                                    <btnCustomRounded text="Trova ristoranti" iconFw="fa-solid fa-utensils" bg_btn="bg_blue"
                                        bg_hover="hover_blu_light" />
                                </router-link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!--onde bg jumbo-->
        <div class="wave">
            <img src="../assets/img/wave.png" alt="">
        </div>
    </div>


</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.burger {
    img {
        object-fit: contain;
        width: 400px;
        height: 500px;
        margin: auto;
    }
}

.bg-jumbo {
    background-image: url(../assets/img/circle-red.png);
    background-size: contain;
    background-repeat: no-repeat;
}

.jumbotron-bg {
    background: $light-orange;
    background: linear-gradient(180deg, $light-orange 40%, $dark-orange 100%);
    margin-top: 50px;

    h1 {
        color: $deliveboo-white;
        font-family: 'Unbounded', cursive;
    }

}

.wave img {
    width: 100%;
    height: 100px;
}

.space {
    background-color: rgb(255, 255, 255);
    height: 1100px;
}


a {
    background-color: transparent;
    color: transparent;
    text-decoration: none;

    &:hover {
        background-color: transparent;
        color: transparent;
    }
}


/*#region jumbo-effect */
.wrapper span {
    position: absolute;
    bottom: -50px;
    height: 50px;
    width: 50px;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    background-color: #fff;
    animation: animate 10s linear infinite;
}

.wrapper span:nth-child(1) {
    left: 0;
    animation-delay: 0.6s;
}

.wrapper span:nth-child(2) {
    left: 10%;
    animation-delay: 3s;
}

.wrapper span:nth-child(3) {
    left: 20%;
    animation-delay: 2s;
}

.wrapper span:nth-child(4) {
    left: 30%;
    animation-delay: 5s;
}

.wrapper span:nth-child(5) {
    left: 40%;
    animation-delay: 1s;
}

.wrapper span:nth-child(6) {
    left: 50%;
    animation-delay: 7s;
}

.wrapper span:nth-child(7) {
    left: 60%;
    animation-delay: 6s;
}

.wrapper span:nth-child(8) {
    left: 70%;
    animation-delay: 8s;
}

.wrapper span:nth-child(9) {
    left: 80%;
    animation-delay: 6s;
}

.wrapper span:nth-child(10) {
    left: 90%;
    animation-delay: 4s;
}

.banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.content h2 {
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    font-family: montserrat;
    font-size: 80px;
}

.content h2 b {
    -webkit-text-fill-color: transparent;
}

@keyframes animate {
    0% {
        bottom: 0;
        margin-right: 0;
        opacity: 1;
    }

    20% {
        bottom: 20%;
        margin-left: 0;
        opacity: 0.8;
    }

    40% {
        bottom: 40%;
        margin-right: 0;
        opacity: 0.6;
    }

    60% {
        bottom: 60%;
        margin-left: 0;
        opacity: 0.4;
    }

    80% {
        bottom: 70%;
        margin-right: 0;
        opacity: 0.2;
    }

    100% {
        bottom: 80%;
        margin-left: 0;
        opacity: 0;
    }
}

/*#endregion jumbo-effect*/
</style>