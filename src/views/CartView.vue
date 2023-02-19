<script>
import btnCustomRoundedLarge from '../components/btnCustomRoundedLarge.vue';
import { store } from '../store';

export default {
    components: {
        btnCustomRoundedLarge,
    },
    name: 'CartView',
    data() {
        return {
            store,
        }
    },
    mounted() {
        store.checkCart();
        store.deliveryPrice = localStorage.getItem('saveDeliveryPrice')
    }
}

</script>

<template>
    <div class="bg_cart">
        <div class="container ordine py-5 mt-5">

            <div class="article pt-5 mt-5">
                <!--SECTION ORDER-->
                <div v-if="store.cart.length !== 0">
                    <div class="card_article my-3" v-for="prodotto, i in store.cart">
                        <div class="row row-cols-1 row-cols-md-2">
                            <!--PRODUCTS DETAIL-->
                            <div class="col article_detail px-4">
                                <div class="my-3">
                                    <h5>{{ prodotto.name }}</h5>
                                </div>
                                <div class="my-3">
                                    <!--TODO risolvere bug prezzo-->
                                    <h6 v-if="!prodotto.prezzoXquantita">prezzo: {{ prodotto.price }}</h6>
                                    <h6 v-else>prezzo: {{ prodotto.prezzoXquantita }} €</h6>
                                </div>

                            </div>
                            <!-- PRICE + BTN ADD & BTN REMOVE -->
                            <div class="col my-4 text-end px-4">
                                <!-- TODO IF ELSE PER QUANTITA -->
                                <span class="me-3" v-if="prodotto.quantita">{{ prodotto.quantita }}</span>
                                <span class="me-3" v-else>1</span>
                                <button class="icon-btn add-btn me-2 mt-3" @click="store.deleteQuantity(prodotto, i)">
                                    <div class="btn-txt">Rimuovi</div>
                                </button>
                                <button class="icon-btn add-btn mt-3" @click="store.addQuantity(prodotto, i)">
                                    <div class="add-icon"></div>
                                    <div class="btn-txt">Aggiungi</div>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h4 class="text-start ms-5 text-light">Non ci sono articoli {{ store.test }}</h4>
                </div>

                <!-- SECTION PAYMENT-->
                <div class="payment_container my-5">
                    <div class="row row-cols-sm-1 row-cols-md-2">

                        <!-- RECAP PRICE-->
                        <div class="col mb-3 mt-3">
                            <h3 class="responsive">
                                <div class="mb-2"><i class="fa-solid fa-bicycle aspect_ratio me-2"></i> {{ store.deliveryPrice }} €</div>

                                <span v-if="store.cart.length != 0">Totale: {{ store.totalPrice() }}
                                    <!-- + {{store.delivery_price }} --> €</span>
                                <span v-else>Aggiungi articoli</span>
                            </h3>
                        </div>
                        <!-- BUTTONS -->
                        <div class="col">
                            <router-link :to="{ name: 'pagamento' }">
                                <btnCustomRoundedLarge :disabled="store.cart.length == 0" text="Effettua pagamento"
                                    iconFw="fa-solid fa-cart-shopping" bg_btn="bg_blue" bg_hover="hover_blu_light"
                                    @click="saveTotPrice()" class="mb-3" />
                            </router-link>
                            
                            <btnCustomRoundedLarge @click="store.emptyCart()" text="Svuota carrello"
                                iconFw="fa-solid fa-cart-shopping" bg_btn="bg_orange" bg_hover="hover_orange"
                                class="empty_cart" />

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.debug {
    border: 1px solid violet;
}

/* #region common style */
.bg_cart {
    background-image: url('../assets/img/sfondo_ristoranti_2.jpg');
    background-size: contain;
    background-repeat: repeat;
    opacity: 93%;
    min-height: 700px;
}

.ordine {
    display: flex;
    justify-content: center;
    align-content: center;
    /* min-height: 700px; */
}

h5,
h6,
span {
    color: $deliveboo-dark;
}

h3{
    color: $deliveboo-dark;
    font-size: 1.5rem;
}


p {
    color: $deliveboo-dark;
}

.spaces {
    padding-top: 100px;
}

.article {
    border-radius: 10px;
    border: none;
    background-color: $deliveboo-primary-light;
    width: 60%;


    .card_article {
        border-radius: 10px;
        background-color: $deliveboo-white;
        width: 76%;
        margin: auto;
    }
}


.payment_container {
    border: none;
    border-radius: 10px;
    padding: 1rem 1rem;
    background-color: $deliveboo-white;
    width: 76%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

a {
    text-decoration: none;
}

.empty_cart {
    font-family: 'Unbounded', cursive;
    /*  background-color: $deliveboo-primary; */

}

/* #endregion common style */

/* #region section buttons */
.icon-btn {
    width: 50px;
    height: 50px;
    border: 1px solid $deliveboo-primary;
    background: $deliveboo-white;
    border-radius: 25px;
    overflow: hidden;
    position: relative;
    transition: width 0.2s ease-in-out;
}

.add-btn:hover {
    width: 120px;
}

.add-btn::before,
.add-btn::after {
    transition: width 0.2s ease-in-out, border-radius 0.2s ease-in-out;
    content: "";
    position: absolute;
    height: 4px;
    width: 10px;
    top: calc(50% - 2px);
    background: $deliveboo-primary;
}

.add-btn::after {
    right: 14px;
    overflow: hidden;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
}

.add-btn::before {
    left: 14px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
}

.icon-btn:focus {
    outline: none;
}

.btn-txt {
    opacity: 0;
    transition: opacity 0.2s;
}

.add-btn:hover::before,
.add-btn:hover::after {
    width: 4px;
    border-radius: 2px;
}

.add-btn:hover .btn-txt {
    opacity: 1;
}

.add-icon::after,
.add-icon::before {
    transition: all 0.2s ease-in-out;
    content: "";
    position: absolute;
    height: 20px;
    width: 2px;
    top: calc(50% - 10px);
    background: $deliveboo-primary;
    overflow: hidden;
}

.add-icon::before {
    left: 22px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
}

.add-icon::after {
    right: 22px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
}

.add-btn:hover .add-icon::before {
    left: 15px;
    height: 4px;
    top: calc(50% - 2px);
}

.add-btn:hover .add-icon::after {
    right: 15px;
    height: 4px;
    top: calc(50% - 2px);
}

/* #endregion section buttons */

/* responsive tablet */
@media screen and (max-width: 768px) {
    .responsive {
        color: $deliveboo-dark;
        font-size: 1.3rem;
    }

    .article {
        width: 90%;
        .card_article{
            width:93%
        }
    }

    .payment_container{
        width: 93%;
    }

}

/* responsive mobile */
@media screen and (max-width: 390px) {

    .article {
        width: 98%;
        .card_article{
            width:87%;
        }
    }
    .payment_container{
        width: 87%;
    }


}
</style>