<script>

export default {
    name: 'CartView',
    data() {
        return {
            carr: [
                {
                    img: 'https://picsum.photos/100/100',
                    nome: 'panino',
                    prezzo: 3,
                    prezzoSingoloProdotto: 3,
                    quantita: 1,

                },
                {
                    img: 'https://picsum.photos/100/100',
                    nome: 'pizza',
                    prezzo: 5,
                    prezzoSingoloProdotto: 5, // prezzo singola quantità
                    quantita: 1
                },
                {
                    img: 'https://picsum.photos/100/100',
                    nome: 'tacos',
                    prezzo: 10,
                    prezzoSingoloProdotto: 10,
                    quantita: 1
                },
            ],
            total: ''
        }
    },
    methods: {
        addQuantity(prodotto){
            prodotto.quantita++
            prodotto.prezzoSingoloProdotto = prodotto.prezzo * prodotto.quantita
        },
        deleteQuantity(prodotto,i,carr){
            prodotto.quantita--
            prodotto.prezzoSingoloProdotto = prodotto.prezzo * prodotto.quantita
            if (prodotto.quantita == 0) {
                console.log('elimina da array');
                carr.splice(i, 1 )
                console.log(carr);
            }
            else {
                console.log('lasciami qua');
            }
        },
        totalPrice(carr){
            let totalEl = []
            for (let i = 0; i < carr.length; i++) {
                let element = carr[i];
                totalEl.push(element.prezzoSingoloProdotto)
            }
            let total = totalEl.reduce((previous, next) => {
                return previous + next;
            })
            return total
        },
    }
}

</script>

<template>
    <div class="container spaces">
        <h2 class=" text-center my-5">Il tuo ordine</h2>
        <div class="row d-flex justify-content-around">

            <div class="col-7 article">
                <!--prodotto-->
                <div v-if="carr.length != 0  ">
                    <div  v-for="prodotto,i in carr" class="card_article my-2">  
                        <div  class="d-flex">
                            <!--img prodotto-->
                            <div class="p-2">
                                <img :src=" prodotto.img " alt="">
                            </div>
                            <!--Caratteristiche prodotto-->
                            <div class="px-4 article_detail">
                                <div class="my-2">{{ prodotto.nome }}</div>
                                <div class="my-2">prezzo:
                                    <span v-if="prodotto.prezzoSingoloProdotto == 0">{{ prodotto.prezzo }}</span>
                                    <span v-else>{{ prodotto.prezzoSingoloProdotto }}</span>
                                    $</div>
                                <div class=" my-2">quantità:
                                    <button @click="deleteQuantity(prodotto,i,carr)">-</button>
                                    <span>{{ prodotto.quantita }}</span>
                                    <button @click="addQuantity(prodotto,i)">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h4 class="text-center">Non ci sono articoli</h4>
                </div>

                <!--sezione pagamento-->
                <div class=" payment">
                    <div class="payment_container mt-5">
                        <!--<h5>SubTotale: <span>{{  }}</span>$</h5>
                        <h5>Spese di consegna: <span>7</span>$</h5>-->
                        <h5>Totale: <span v-if="carr != 0">  {{totalPrice(carr), total }} </span>$</h5>
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