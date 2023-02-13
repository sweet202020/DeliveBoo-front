<script>

import { store } from '../store'

export default {
    name: 'CartView',
    data() {
        return {
            store,
            total: '',
            newCart: null
        }
    },
    /*methods: {
         saveCart() {
            let parsed = JSON.stringify(store.cart);
            localStorage.setItem('cart', parsed);
        },
        addQuantity(prodotto, i) {
            prodotto.quantita++
            prodotto.prezzoXquantita = prodotto.prezzo * prodotto.quantita
            this.saveCart();
        },
        deleteQuantity(prodotto, i, cart) {
            prodotto.quantita--
            prodotto.prezzoXquantita = prodotto.prezzo * prodotto.quantita
            if (prodotto.quantita == 0) {
                store.cart.splice(i, 1);
            }
            this.saveCart();
        }, */

    methods: {
        saveCart() {
            let parsed = JSON.stringify(store.cart);
            localStorage.setItem('cart', parsed);
        },
        addQuantity(prodotto) {
            console.log(prodotto.data, 'ciao');
            prodotto.quantita++
            store.prezzoTot = prodotto.price * prodotto.quantita
            this.saveCart();
            console.log(store.prezzoTot);
            console.log(prodotto.prezzoSingoloProdotto, 'aumento++++');
        },
        deleteQuantity(prodotto, i, cart) {
            console.log(prodotto);

            prodotto.quantita--
            prodotto.prezzoSingoloProdotto = prodotto.price * prodotto.quantita
            console.log(prodotto.prezzoSingoloProdotto, 'diminuisco');
            if (prodotto.quantita == 0) {
                store.cart.splice(i, 1);
            }
            this.saveCart();
        },
        totalPrice(cart) {
            let totalEl = []
            for (let i = 0; i < store.cart.length; i++) {
                let element = store.cart[i];
                totalEl.push(element.prezzoSingoloProdotto)
                console.log(element.prezzoSingoloProdotto, 'totalprice');
            }
            let totalPrice = totalEl.reduce((total, amount) => {
                return total + amount;

            })
            return totalPrice
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

    }
}

</script>

<template>
    <div class="container spaces">
        <h2 class=" text-center my-5">Il tuo ordine</h2>
        <div class="row d-flex justify-content-around">

            <div class="col-7 article">
                <!--prodotto-->

                <div v-if="store.cart.length !== 0">
                    <div v-for="prodotto, i in store.cart" class="card_article my-2">

                        <div class="d-flex">
                            <!--img prodotto-->
                            <div class="p-2">
                                <img :src="prodotto.img" alt="">
                            </div>
                            <!--Caratteristiche prodotto-->
                            <div class="px-4 article_detail">

                                <div class="my-2">{{ prodotto.name }}</div>
                                <div class="my-2">prezzo:

                                    <!--TODO risolvere bug prezzo-->
                                    <span v-if="!prodotto.prezzoXquantita">{{ prodotto.price }}</span>
                                    <span v-else>{{ prodotto.prezzoXquantita }}</span>

                                    $
                                </div>
                                <div class=" my-2">quantità:
                                    <button @click="deleteQuantity(prodotto, i, store.cart)">-</button>
                                    <span>{{ prodotto.quantita }}</span>
                                    <button @click="addQuantity(prodotto, i)">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h4 class="text-center">Non ci sono articoli {{ store.test }}</h4>
                </div>

                <!--sezione pagamento-->
                <div class=" payment">
                    <div class="payment_container mt-5">
                        <!--<h5>SubTotale: <span>{{  }}</span>$</h5>
                        <h5>Spese di consegna: <span>7</span>$</h5>-->
                        <h5>Totale:
                            <span v-if="store.cart != 0"> {{ totalPrice(store.cart) }} </span>
                            $
                        </h5>
                        <!--bottoni pagamento-->
                        <div class="text-center mt-3">
                            <!--TODO metti bottone props / pagamento-->
                            <button class="btn btn-primary mx-3">Vai al pagamento</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<style lang="scss">
@use '../styles/partials/variables.scss' as *;

.spaces {
    padding-top: 100px;
}

.article {
    border-radius: 10px;
    border: 1px solid black;
    background-color: $dark-orange;
    padding: 1rem 0;

    .card_article {
        border-radius: 10px;
        background-color: $deliveboo-white;
        width: 90%;
        margin: auto;

        .article_detail button {
            border-radius: 50%;
            height: 30px;
            width: 30px;
        }

        .article_detail span {
            margin: 0 0.5rem;
        }
    }
}

.payment {


    .payment_container {
        border: 1px solid black;
        padding: 1rem 1rem;
        background-color: $deliveboo-white;
        width: 90%;
        margin: auto;
    }
}
</style>