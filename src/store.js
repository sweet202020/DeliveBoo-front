import {
    reactive
} from 'vue';

//import axios from 'axios';

export const store = reactive({
    test: 'store.js funziona',
    cart: [
    ],
    prezzoTot: 0,
})

