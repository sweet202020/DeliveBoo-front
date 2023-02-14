
import {reactive} from 'vue';
import axios from 'axios';


export const store = reactive({
    API_URL: 'http://127.0.0.1:8000/',
    cart: [],
    platesNew: null,
    restaurants: null,
    callApiPlates(url) {
        axios.get(url)
            .then(response => {
                this.platesNew = response.data.results.plates;
                // console.log(this.platesNew);
            })
    },
    callApiRestaurant(url) {
        this.restaurants = ''
        axios.get(url)
            .then(response => {
                this.restaurants = response.data.results;
                // console.log(this.restaurants);
            })
    }

})
