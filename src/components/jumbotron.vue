<script>
export default {
    name: "jumbotron",
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

        <div class="container">
            <div class="row">
                <div class="col-6 burger">
                    <img src="../assets/img/burger-1.png" alt="">
                </div>

                <div class="bg-jumbo col-6 d-flex justify-content-center align-items-center">
                    <div>
                        <h1 class="fw-bolder text-uppercase">I piatti dei ristoranti che ami ,a domicilio</h1>
                        <div class="input-group my-5">
                            <input type="text" class="form-control" placeholder="Cerca...">
                            <button class="btn btn-primary" type="button" id="button-addon2">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--onde bg-->
        <div class="wave">
            <img src="../assets/img/wave.png" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
        margin-left: 40px;
        margin-right: 0;
        opacity: 1;
    }

    20% {
        bottom: 20%;
        margin-left: 0;
        margin-right: 40px;
        opacity: 0.8;
    }

    40% {
        bottom: 40%;
        margin-left: 40px;
        margin-right: 0;
        opacity: 0.6;
    }

    60% {
        bottom: 60%;
        margin-left: 0;
        margin-right: 40px;
        opacity: 0.4;
    }

    80% {
        bottom: 70%;
        margin-left: 40px;
        margin-right: 0;
        opacity: 0.2;
    }

    100% {
        bottom: 80%;
        margin-left: 0;
        margin-right: 40px;
        opacity: 0;
    }
}

/*#endregion jumbo-effect*/


.burger img {
    width: 60%;

}

.bg-jumbo {
    background-image: url(../assets/img/5a28ef67c5d5d0.3674839715126321678103.png);
    background-size: contain;
    background-repeat: no-repeat;
}

.jumbotron-bg {
    background: rgb(255, 158, 69);
    background: linear-gradient(180deg, rgba(255, 158, 69, 1) 40%, rgba(245, 97, 44, 1) 100%);
}

.wave img {
    width: 100%;
    height: 100px;
}

.space {
    background-color: rgb(255, 255, 255);
    height: 1100px;
}

h2 {
    color: #FF9E45;
}

h1 {
    color: #0086A8;
}

p {
    color: #0086A8;
}

/*seconda sezione*/

.function img{
    max-width: 100%;
}

.function p {
    font-weight: bold;
}

.card img {
    height: 80px;
    width: auto;
    filter: invert(29%) sepia(96%) saturate(1412%) hue-rotate(166deg) brightness(98%) contrast(101%);
}
</style>