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
                    prezzoTotaleProdotto: 3,
                    quantita: 1
                },
                {
                    img: 'https://picsum.photos/100/100',
                    nome: 'pizza',
                    prezzo: 5,
                    prezzoTotaleProdotto: 5,
                    quantita: 1
                },
                {
                    img: 'https://picsum.photos/100/100',
                    nome: 'panino',
                    prezzo: 10,
                    prezzoTotaleProdotto: 10,
                    quantita: 1
                },
            ],
        }
    },
    methods: {
        //TODO aggiungere total a add e delete
        addQuantity(prodotto){
            prodotto.quantita++
            prodotto.prezzoTotaleProdotto = prodotto.prezzo * prodotto.quantita
        },
        deleteQuantity(prodotto){
            prodotto.quantita--
            prodotto.prezzoTotaleProdotto = prodotto.prezzo * prodotto.quantita
            //TODO se il valore è = 0 elimina il prodotto
        },
        totalPrice(carr){
            let totalEl = []
            for (let i = 0; i < carr.length; i++) {
                let element = carr[i];
                console.log(element.prezzo, 'pezzo singolo elemento');
                totalEl.push(element.prezzoTotaleProdotto)
                console.log(totalEl, 'sono larray');
            }
            let total = totalEl.reduce((previous, next) => {
                return previous + next;
            })
            console.log(total);
            return total
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
                <div v-if="this.carr.length > 0  ">
                    <div v-for="prodotto in carr" class="card_article my-2">
                        <div class="d-flex">
                            <!--img prodotto-->
                            <div class="p-2">
                                <img :src=" prodotto.img " alt="">
                            </div>
                            <!--Caratteristiche prodotto-->
                            <div class="px-4 article_detail">
                                <div class="my-2">{{ prodotto.nome }}</div>
                                <div class="my-2">prezzo:
                                    <span v-if="prodotto.prezzoTotaleProdotto == 0">{{ prodotto.prezzo }}</span>
                                    <span v-else>{{ prodotto.prezzoTotaleProdotto }}</span>
                                    $</div>
                                <div class=" my-2">quantità:
                                    <button @click="deleteQuantity(prodotto)">-</button>
                                    <span>{{ prodotto.quantita }}</span>
                                    <!--TODO creare funzione diminuzione quantità/prezzo-->
                                    <button @click="addQuantity(prodotto)">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h4>Non ci sono articoli</h4>
                </div>

                <!--sezione pagamento-->
                <div class=" payment">
                    <div class="payment_container mt-5">
                        <h5>SubTotale: <span>{{  }}</span>$</h5>
                        <h5>Spese di consegna: <span>7</span>$</h5>
                        <h5>Totale: <span> {{totalPrice(carr) , total}} </span>$</h5>
                        <!--bottoni pagamento-->
                        <div class="text-center mt-3">
                            <button class="btn btn-danger mx-3">Elimina</button>
                            <button class="btn btn-primary mx-3">Vai al pagamento</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<style lang="scss">
.spaces {
    padding-top: 100px;
}

.article {
    border-radius: 10px;
    border: 1px solid black;
    background-color: rgb(219, 108, 39);
    padding: 1rem 0;

    .card_article {
        border-radius: 10px;
        background-color: rgb(246, 246, 246);
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
        background-color: rgb(238, 238, 238);
        width: 90%;
        margin: auto;
    }
}
</style>