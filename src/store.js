import {
    reactive
} from 'vue';

//import axios from 'axios';

export const store = reactive({
    test: 'store.js funziona',
    cart: [
        {
            nome: 'trevigiana',
            ingredients: 'pomodoro ◦ mozzarella ◦ speck ◦ procini ◦ grana',
            prezzo: 3,
            quantita: 1
        },
    ],
    prezzoTot: 0,
})

