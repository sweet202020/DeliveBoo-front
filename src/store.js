/* import Vuex from "vuex";
import Vue from "vue"; 
http://127.0.0.1:8000/api/restaurants/nomeristorante
http://127.0.0.1:8000/api/restaurants
*/

import {
    reactive
} from 'vue';

import axios from 'axios';


export const store = reactive({
    API_URL: 'http://127.0.0.1:8000/',
    cart: [

    ],
    platesNew: null,
    restaurants: null,
    callApiPlates(url) {
        axios.get(url)
            .then(response => {
                this.platesNew = response.data.results.plates;
                console.log(this.platesNew);

            })
    },
    callApiRestaurant(url) {
        this.restaurants = ''
        axios.get(url)
            .then(response => {
                this.restaurants = response.data.results;
                /* store.delivery_price = response.data.results[0].delivery_price */
                /*  console.log(response.data.results[0].delivery_price);
                 console.log(this.restaurants, 'test');
                 console.log(response.data.results, 'io'); */
                console.log(this.restaurants);
            })
    }

})
