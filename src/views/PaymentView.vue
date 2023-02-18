<script>
import cardValidator from 'card-validator';
import axios from 'axios';
import btnCustomRounded from '../components/btnCustomRounded.vue';
import { store } from '../store.js';

export default {
    name: 'PaymentView',
    components: {
        btnCustomRounded
    },
    data() {
        return {
            store,
            cardValidator,
            card: '',
            message: 'inserisci un numero di carta valido',
            array_number_card: [],
            array_date_card: [],
            array_cvv_card: [],
            card_number_valid: false,
            card_date_valid: false,
            card_cvv_valid: false,
            date: '',
            cvv: '',
            customer_name: '',
            delivery_address: '',
            phone_number: '',
            totalPrice: localStorage.getItem('savetotalPrice'),
            success: false,

        }
    },
    methods: {
        credit_card_number() {

            const valid = cardValidator;

            const numberValidation = valid.number(this.card, { luhnValidateUnionPay: true });
            console.log(numberValidation);
            this.array_number_card = []
            this.array_number_card.push(numberValidation)
            this.array_number_card.forEach(element => {
                this.card_number_valid = element.isValid
            });
            console.log(this.card_number_valid);
            console.log(this.array_number_card);

            /* const nameCard = valid.cardholderName('mastercard')
            console.log(nameCard); */
            /* var numberValidation = valid.number("41111");
 */

        },
        credit_card_date() {
            const valid = cardValidator;
            const date = valid.expirationDate(this.date)
            this.array_date_card = []
            this.array_date_card.push(date)
            this.array_date_card.forEach(element => {
                this.card_date_valid = element.isValid
            });
            console.log(date);
        },
        credit_card_cvv() {
            const valid = cardValidator;
            const cvv = valid.cvv(this.cvv, 3);
            this.array_cvv_card = []
            this.array_cvv_card.push(cvv)
            this.array_cvv_card.forEach(element => {
                this.card_cvv_valid = element.isValid
            });
            console.log(this.card_cvv_valid);
            console.log(cvv);
        },
        sendForm() {

            let shopping_basket = JSON.parse(localStorage.getItem('cart'))
            console.log(shopping_basket);
            // for (let i = 0; i < shopping_basket.length; i++) {
            //     const element = shopping_basket[i]
            //     order_plate.push([element.id, element.quantita])
            //     console.log(element.id);
            // }
            const data = {
                customer_name: this.customer_name,
                delivery_address: this.delivery_address,
                phone_number: this.phone_number,
                price: this.totalPrice,
                order_plate: shopping_basket
            }
            console.log(data.order_plate);

            //call for order table
            axios.post(`${store.API_URL}api/order`, data)
                .then(response => {
                    console.log(response);
                    this.success = response.data.success
                    if (this.success) {
                        this.customer_name = ''
                        this.delivery_address = ''
                        this.phone_number = ''
                        this.date = ''
                        this.card = ''
                        this.cvv = ''
                    }
                })
                .catch(error => {
                    console.log(error.message);
                })
            store.cart = []
        },

    },
}
</script>


<template>
    <div class="container-fluid">

        <div class="container p-4">
            <h1 class="text-uppercase">pagamento</h1>
            <p class="mt-4 mb-4">Campi obbligatori (*)</p>
            <strong class="mt-2 mb-2"></strong>
            <form @submit.prevent="sendForm()">
                <!-- NOME VISITATORE -->
                <div class="mb-3">
                    <label for="customer_name" class="form-label">Nome e Cognome (*)</label>
                    <input v-model="customer_name" type="text" name="customer_name" id="customer_name" class="form-control"
                        required>
                </div>
                <!-- INDIRIZZO VISITATORE -->
                <div class="mb-3">
                    <label for="delivery_address" class="form-label">Indirizzo (*)</label>
                    <input v-model="delivery_address" type="text" name="delivery_address" id="delivery_address"
                        class="form-control " required>
                </div>
                <!-- TELEFONO VISITATORE -->
                <div class="mb-3">
                    <label for="phone_number" class="form-label">Numero di telefono (*)</label>
                    <input v-model="phone_number" type="text" name="phone_number" id="phone_number" class="form-control"
                        required>
                </div>
                <!-- N° CARTA DI CREDITO VISITATORE -->
                <div class="mb-3">
                    <label for="" class="form-label">Numero carta di credito (*)</label>
                    <input @keyup="credit_card_number()" type="text" v-model="this.card" class="form-control" name="" id=""
                        aria-describedby="helpId" placeholder="" required>
                    <span v-for="data in this.array_number_card">
                        <span v-if="!data.isPotentiallyValid"><i class="fa-solid fa-exclamation"></i></span>
                    </span>
                </div>
                <!-- SCADENZA CARTA DI CREDITO VISITATORE -->
                <div class="mb-3">
                    <label for="" class="form-label">Data di scadenza (*)</label>
                    <input type="month" @change="this.credit_card_date()" class="form-control" v-model="this.date" name=""
                        id="" aria-describedby="helpId" placeholder="" required>
                    <span v-for="data in this.array_date_card">
                        <span v-if="!data.isPotentiallyValid"><i class="fa-solid fa-exclamation"></i></span>
                    </span>
                </div>
                <!-- CVV CARTA DI CREDITO VISITATORE -->
                <div class="mb-3">
                    <label for="" class="form-label">cvv (*)</label>
                    <input @keyup="credit_card_cvv()" type="text" v-model="this.cvv" class="form-control" name="" id=""
                        aria-describedby="helpId" placeholder="" required>
                    <span v-for="data in this.array_cvv_card">
                        <span v-if="!data.isPotentiallyValid"><i class="fa-solid fa-exclamation"></i></span>
                    </span>
                </div>
                <!-- BTN PAGA -->


                <!-- <router-link :to="{ name: 'success'}"> -->
                <button type="submit" :disabled="!this.card_number_valid || !this.card_cvv_valid || !this.card_date_valid"
                    class="btn btn-primary text-uppercase mt-3 p-2">
                    <span class="mx-3 payment">paga</span><i class="fa-solid fa-cart-shopping"></i>
                </button>
                <!-- </router-link> -->

            </form>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

h1 {
    color: $deliveboo-white;
}

p {
    font-weight: bold;
    font-size: 1.3rem;
}

a {
    background-color: transparent;

    &:hover {
        background-color: transparent;
    }
}

.container-fluid {
    background-image: url('../assets/img/backgrounds/sfondo.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 8rem;
    padding-bottom: 5rem;
}

.container {
    background-color: $deliveboo-primary-light;
    border-radius: 1.5rem;
    width: 800px;
}

.form-control {
    width: 100%;

}

label {
    display: block;
    color: $deliveboo-dark;
    font-size: 1.2rem;
}

.fa-exclamation {
    color: red;
}

.payment {
    color: $deliveboo-white;
    font-weight: bold;
    letter-spacing: 0.25rem;
    font-family: 'Unbounded', cursive;
}
</style>