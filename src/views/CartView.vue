<script>

import { store } from '../store'

export default {
    name: 'CartView',
    data() {
        return {
            store,
            total: '',
            newCart: null,
        }
    },
    methods: {
        saveCart() {
            let parsed = JSON.stringify(store.cart);
            localStorage.setItem('cart', parsed);
        },
        addQuantity(prodotto) {
            if (!prodotto.quantita) {
                prodotto.quantita = 2
                console.log(prodotto.quantita, 'if');
            } else {
                prodotto.quantita++
                console.log(prodotto.quantita, 'else');
            }

            console.log(prodotto.price);
            console.log(prodotto.quantita);
            prodotto.prezzoXquantita = prodotto.price * prodotto.quantita
            console.log(prodotto.prezzoXquantita);



            this.saveCart();
        },
        deleteQuantity(prodotto, i, cart) {
            console.log(prodotto);
            if (prodotto.quantita == 1 || prodotto.quantita == null) {
                store.cart.splice(i, 1);
            }
            else {

                prodotto.quantita--
            }
            /*  console.log(prodotto.quantita); */
            prodotto.prezzoXquantita = prodotto.price * prodotto.quantita
            /* console.log(prodotto.prezzoSingoloProdotto, 'diminuisco'); */
            this.saveCart();
        },
        totalPrice() {
            let totalEl = []
            for (let i = 0; i < store.cart.length; i++) {
                let element = store.cart[i];
                if (!element.quantita) {
                    element.prezzoXquantita = element.price
                    console.log(element);
                    console.log();


                }
                /* if (element.prezzoXquantita == null) {
                    element.prezzoXquantita = element.price * element.quantita
                } */
                /* console.log(element.quantita, 'element.quantita'); */

                totalEl.push(element.prezzoXquantita)

                /*  console.log(element.prezzoXquantita, 'totalprice');
                console.log(element.price); */
            }
            console.log(totalEl);
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
                                    <!--TODO IF ELSE PER QUANTITA-->

                                    <span v-if="prodotto.quantita">{{ prodotto.quantita }}</span>
                                    <span v-else>1</span>
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
                        <h5>
                            <span v-if="store.cart.length != 0">Totale: {{ totalPrice() }} $</span>
                            <span v-else>Aggiungi articoli</span>

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