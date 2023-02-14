
import { reactive } from 'vue';
import axios from 'axios';


export const store = reactive({
    API_URL: 'http://127.0.0.1:8000/',
    cart: [],
    platesNew: null,
    restaurants: null,
    filterTypes: [],
    singleRestaurant: null,

    callApiPlates(url) {
        axios.get(url)
            .then(response => {
                this.platesNew = response.data.results.plates;
                // console.log(this.platesNew);
            })
    },
    callApiRestaurants(url) {
        this.restaurants = ''
        axios.get(url)
            .then(response => {
                this.restaurants = response.data.results;
                // console.log(this.restaurants);
            })
    },
    callApiSingleRestaurant(url) {
        this.restaurants = ''
        axios.get(url)
            .then(response => {
                this.singleRestaurant = response.data.results;
                // console.log(this.restaurants);
            })
    },
    filterType() {
        //NEEDS TO MAKE A SINGLE CALL API OTHERWISE IT WILL REWRITE THIS.RESTAURANTS
        //WE NEED TO CHANGE THE ROUTE API AND HIS METHOD IN THE RESTAURANTCONTROLLER IN BACKOFFICE
        //THE ROUTE API NEEDS TO ACCEPT MORE PARAMETERS, AS MUCH AS THE NUMBER OF ELEMENTS HERE
        //EXAMPLE = https://localhost/api/restaurants/filter/name=pizza&name=pasta&name=carne  
        this.filterTypes.forEach(element => {
            console.log(element);
            //console.log(this.restaurants)
            this.callApiRestaurants(this.API_URL + 'api/restaurants/filter/' + element)
        });
    },

    saveCart() {
        let parsed = JSON.stringify(store.cart);
        localStorage.setItem('cart', parsed);
    },
    addPlate(plate) {
        if (store.cart.length == 0) {
            store.cart.push(plate);
        } else {
            store.cart.forEach(singlePlate => {
                if (plate.restaurant_id == singlePlate.restaurant_id) {
                    store.cart.push(plate);
                }
            });
        }
        store.saveCart();
    },
    addQuantity(prodotto) {
        if (!prodotto.quantita) {
            prodotto.quantita = 2
        } else {
            prodotto.quantita++
        }

        prodotto.prezzoXquantita = prodotto.price * prodotto.quantita
        store.saveCart();
    },
    deleteQuantity(prodotto, i) {
        if (prodotto.quantita == 1 || prodotto.quantita == null) {
            store.cart.splice(i, 1);
        }
        else {
            prodotto.quantita--
        }
        prodotto.prezzoXquantita = prodotto.price * prodotto.quantita
        store.saveCart();
    },
    totalPrice() {
        let totalEl = []
        for (let i = 0; i < store.cart.length; i++) {
            let element = store.cart[i];
            if (!element.quantita) {
                element.prezzoXquantita = element.price
            }
            totalEl.push(element.prezzoXquantita)
        }
        let totalPrice = totalEl.reduce((total, amount) => {
            return total + amount;
        })
        return totalPrice

    }

})
