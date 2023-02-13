/* import Vuex from "vuex";
import Vue from "vue"; 
http://127.0.0.1:8000/api/restaurants/nomeristorante
http://127.0.0.1:8000/api/restaurants
*/

import {
    reactive
} from 'vue';

//import axios from 'axios';


export const store = reactive({
    API_URL: 'http://127.0.0.1:8000/',
    cart: [

    ],
    basket: {},
    /* cart_2: window.localStorage.setItem('keys', JSON.stringify('ciao')),
    cart_3: JSON.parse(window.localStorage.getItem('keys')), */


    prezzoTot: 0,
    /*  ShoppingBasket() {
 
 
        window.localStorage.setItem('keys', JSON.stringify(store.cart));
        store.basket = JSON.parse(window.localStorage.getItem('keys'));
 
        console.log(this.basket);
 
     } */

})

//ciao



/* Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: false
    },
    mutations: {
        savedItems: (state) => {
            localStorage.setItem('cart', true);
            state.cart = true;
        }

    }
}); */