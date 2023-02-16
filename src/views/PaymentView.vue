<script>
import cardValidator from 'card-validator';
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: 'PaymentView',
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
            totalPrice: localStorage.getItem('savetotalPrice')

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
            const data = {
                customer_name: this.customer_name,
                delivery_address: this.delivery_address,
                phone_number: this.phone_number,
                price: this.totalPrice
            }
            //console.log(data.price);
            axios.post(`${store.API_URL}api/order`, data)
                .then(response => {
                    console.log(response.data);
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


        }
    },
}
</script>


<template>
    <h1>pagamento</h1>
    <div class="container">
        <form @submit.prevent="sendForm()">
            <div class="mb-3">
                <label for="customer_name" class="form-label">Nome e Cognome</label>
                <input v-model="customer_name" type="text" name="customer_name" id="customer_name" class="form-control"
                    required>
            </div>
            <div class="mb-3">
                <label for="delivery_address" class="form-label">indirizzo</label>
                <input v-model="delivery_address" type="text" name="delivery_address" id="delivery_address"
                    class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="phone_number" class="form-label">Numero di telefono</label>
                <input v-model="phone_number" type="text" name="phone_number" id="phone_number" class="form-control"
                    required>
            </div>

            <div class="mb-3">
                <label for="" class="form-label">numero carta di credito</label>
                <input @keyup="credit_card_number()" type="text" v-model="this.card" class="form-control" name="" id=""
                    aria-describedby="helpId" placeholder="" required>
                <span v-for="data in this.array_number_card">
                    <span v-if="!data.isPotentiallyValid"><i class="fa-solid fa-exclamation"></i></span>
                </span>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">data di scadenza</label>
                <input type="month" @change="this.credit_card_date()" class="form-control" v-model="this.date" name="" id=""
                    aria-describedby="helpId" placeholder="" required>
                <span v-for="data in this.array_date_card">
                    <span v-if="!data.isPotentiallyValid"><i class="fa-solid fa-exclamation"></i></span>
                </span>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">cvv</label>
                <input @keyup="credit_card_cvv()" type="text" v-model="this.cvv" class="form-control" name="" id=""
                    aria-describedby="helpId" placeholder="" required>
                <span v-for="data in this.array_cvv_card">
                    <span v-if="!data.isPotentiallyValid"><i class="fa-solid fa-exclamation"></i></span>
                </span>
            </div>
            <button type="submit"
                :disabled="!this.card_number_valid || !this.card_cvv_valid || !this.card_date_valid">paga</button>
        </form>
</div>
</template>



<style>
label {
    display: block;
}

h1 {
    margin: 10rem;
}

.form-control {
    width: 300px;
    display: inline;
}

.fa-exclamation {

    color: red;
}
</style>