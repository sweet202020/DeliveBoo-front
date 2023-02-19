<script>
import { store } from '../store.js'

export default {
    name: 'navBar',
    data() {
        return {
            store
        }
    }
}

window.addEventListener('scroll', (e) => {
    const nav = document.querySelector('.bg_nav');
    if (window.pageYOffset > 0) {
        nav.classList.add("add_shadow");
    } else {
        nav.classList.remove("add_shadow");
    }
});

</script>

<template>
    <div class="bg_nav fixed">
        <nav class="container-fluid navbar navbar-expand-lg bg-body-tertiary navbar-fixed-top max_width">
            <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse d-lg-flex justify-content-between fs-4 fw-bolder "
                    id="navbarSupportedContent">
                    <!--logo-->
                    <div class="d-none d-lg-block logo">
                        <img src="../assets/img/logobool.png" alt="">
                    </div>
                    <!--nav-sx-->
                    <div>
                        <!-- NavBar con view router -->
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
                            <li class="nav-item">
                                <router-link class="nav-link text-light" aria-current="page" :to="{ name: 'home' }"><i
                                        class="fa-solid fa-house me-3 color_icon"></i>Home</router-link>
                            </li>

                            <li class="nav-item me-auto mb-2 mb-lg-0 gap-4">
                                <router-link class="nav-link text-light color_icon" aria-current="page"
                                    :to="{ name: 'restaurants' }">
                                    <i class="fa-solid fa-utensils me-3 color_icon"></i>Ristoranti
                                </router-link>
                            </li>
                        </ul>

                    </div>
                    <!--nav-dx-->
                    <div>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4  d-flex">
                            <li class="nav-item d-flex position-relative">
                                <div v-if="store.cart.length !== 0"><i class="fa-solid fa-circle cart"></i></div>

                                <router-link class="nav-link text-light" aria-current="page"
                                    :to="{ name: 'carrello' }"><i
                                        class="fa-solid fa-cart-shopping me-3 color_icon"></i>Carrello</router-link>
                            </li>

                            <li class="nav-item me-auto mb-2 mb-lg-0 gap-4">
                                <a class="nav-link text-light" aria-current="page"
                                    href="http://127.0.0.1:8000/"><!-- log-in --> <i
                                        class="fa-solid fa-user-group me-3 color_icon"></i>
                                    Area Riservata
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

*{
    letter-spacing: 0.06em;
}
.max_width{
    max-width: 1800px;
}
.bg_nav {
    background-color: $light-orange;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
}

.logo img {
    height: 50px;
}

.add_shadow {
    box-shadow: red 0 0 10px 0;
}

a {
    padding: 0.5rem !important;
    font-family: 'Unbounded', cursive;
    border-radius: 5px;
    transition: 0.5s;

    &:hover {
        color: $deliveboo-primary !important;
        background-color: $deliveboo-white;
        font-family: 'Unbounded', cursive;
        border-radius: 5px;
    }


}

.cart {
    color: $deliveboo-primary;
    width: 15px;
    aspect-ratio: 1/1;
    position: absolute;
    left: 5px;
    bottom: 25px;
}


.color_mobile{
 color: red;
 background-color: green;
}
/* .color_icon {
    color: $deliveboo-primary;
} */

/* a:hover {
    color: #f5612c !important;
    background-color: rgba(252, 252, 252, 0.703);
    border-radius: 10px;
} */
</style>