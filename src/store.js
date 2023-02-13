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

})
