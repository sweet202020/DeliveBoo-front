<script>
import cardValidator from 'card-validator';
export default {
    name: 'PaymentView',
    data() {
        return {
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
            name: '',
            address: '',
            phone_number: ''
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
                name: this.name,
                address: this.address,
                phone_number: this.phone_number
            }
            axios.post(`${this.store.API_URL}`)
        }
    },
}
</script>


<template>

    <h1>pagamento</h1>
    <div class="container">
        <form @submit.prevent="sendForm()">
            <div class="mb-3">
                <label for="" class="form-label">Nome e Cognome</label>
                <input v-model="name" type="text" name="" id="" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">indirizzo</label>
                <input v-model="address" type="text" name="" id="" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Numero di telefono</label>
                <input v-model="phone_number" type="text" name="" id="" class="form-control" required>
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
                <input type="month" @change="this.credit_card_date()" class="form-control" v-model="this.date" name=""
                    id="" aria-describedby="helpId" placeholder="" required>
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