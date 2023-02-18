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
            saveTotalPrice: 0,
        }
    }, methods: {
        savePrice() {
            localStorage.setItem('savetotalPrice', this.saveTotalPrice);
        },
        saveTotPrice() {
            const save = store.totalPrice()
            this.saveTotalPrice = (save)
            console.log(this.saveTotalPrice);
            this.savePrice()

        },
    },
    mounted() {
        if (localStorage.getItem('cart')) {
            try {
                store.cart = JSON.parse(localStorage.getItem('cart'));
            } catch (e) {
                localStorage.removeItem('cart');
            }
        }
        store.callApiSingleRestaurant(store.API_URL + 'api/restaurants/' + 'pizza-delizia')
        /* store.callApiSingleRestaurant(store.API_URL + 'api/restaurants/' + 'pizza-delizia') */
    }
}

</script>

<template>
    <div class="bg_cart">
        <div class="container ordine py-5 mt-5">

            <div class="article pt-5 mt-5">
                <!--prodotto-->
                <div v-if="store.cart.length !== 0">
                    <div class="card_article my-3" v-for="prodotto, i in store.cart">
                        <div class="row">
                            <!--img prodotto-->
                            <!--  <div class="col image p-2 bg-danger">
                                                                                                                                                                                <img :src="prodotto.img" alt="">
                                                                                                                                                                            </div> -->
                            <!--Caratteristiche prodotto-->
                            <div class="col article_detail ms-3 p-3">
                                <div>
                                    <div class="my-3">
                                        <h5>{{ prodotto.name }}</h5>
                                    </div>
                                    <div class="my-3">
                                        <!--TODO risolvere bug prezzo-->
                                        <h6 v-if="!prodotto.prezzoXquantita">prezzo: {{ prodotto.price }}</h6>
                                        <h6 v-else>prezzo: {{ prodotto.prezzoXquantita }} €</h6>
                                    </div>
                                </div>
                            </div>
                            <!-- prezzo + add & remuve -->
                            <div class="col my-4 me-4 text-end">
                                <!--TODO IF ELSE PER QUANTITA-->
                                <span class="me-3" v-if="prodotto.quantita">{{ prodotto.quantita }}</span>
                                <span class="me-3" v-else>1</span>
                                <button class="icon-btn add-btn me-2 mt-3" @click="store.deleteQuantity(prodotto, i)">
                                    <div class="btn-txt">Rimuovi</div>
                                </button>
                                <button class="icon-btn add-btn mt-3" @click="store.addQuantity(prodotto, i)">
                                    <div class="add-icon"></div>
                                    <div class="btn-txt">Aggiungi</div>
                                </button>

                                <!-- <button @click="store.deleteQuantity(prodotto, i)">-</button>
                                                                                                                                                <button @click="store.addQuantity(prodotto, i)">+</button> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h4 class="text-start ms-5 text-light">Non ci sono articoli {{ store.test }}</h4>
                </div>

                <!--sezione pagamento-->
                <div class="payment_container my-5">
                    <h3>
                        <div>costo consegna {{ store.deliveryPrice }}</div>
                        <span v-if="store.cart.length != 0">Totale: {{ store.totalPrice() }}
                            <!-- + {{store.delivery_price }} --> €</span>
                        <span v-else>Aggiungi articoli</span>
                    </h3>
                    <!--bottoni pagamento-->
                    <div>
                        <!--TODO metti bottone props / pagamento-->
                        <!-- <button class="btn btn-primary mx-3" @click="saveTotPrice()">Vai al pagamento</button> -->
                        <router-link :to="{ name: 'pagamento' }">
                            <btnCustomRoundedLarge :disabled="store.cart.length == 0" text="Effettua pagamento"
                                iconFw="fa-solid fa-cart-shopping" bg_btn="bg_blue" bg_hover="hover_blu_light"
                                @click="saveTotPrice()" />
                        </router-link>
                        <btnCustomRoundedLarge @click="store.emptyCart()" bg_btn="bg_blue" bg_hover="hover_blu_light"
                            text="Svuota carrello" />
                    </div>

                </div>

            </div>

        </div>
    </div>
</template>


<style lang="scss">
@use '../styles/partials/variables.scss' as *;

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
        width: 90%;
        margin: auto;
    }
}


.payment_container {
    border: none;
    border-radius: 10px;
    padding: 1rem 1rem;
    background-color: $deliveboo-white;
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

a {
    text-decoration: none;
}


/* section buttons */
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
</style>