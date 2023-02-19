import { reactive } from 'vue';
import axios from 'axios';


export const store = reactive({
    API_URL: 'http://127.0.0.1:8000/',
    cart: [],
    platesNew: null,
    restaurants: null,
    singleRestaurant: null,
    alert: false,
    error: false,
    deliveryPrice: '',


    callApiRestaurants(url) {
        this.restaurants = ''
        axios.get(url)
            .then(response => {
                this.restaurants = response.data.results;
            })
    },
    callApiSingleRestaurant(url) {
        this.singleRestaurant = ''
        axios.get(url)
            .then(response => {
                this.singleRestaurant = response.data.results;
                this.platesNew = response.data.results.plates;
                localStorage.setItem('saveDeliveryPrice', this.singleRestaurant.delivery_price);
            })
    },
    saveCart() {
        let parsed = JSON.stringify(store.cart);
        localStorage.setItem('cart', parsed);
    },
    addPlate(plate) {

        if (store.cart.length == 0) {
            store.cart.push(plate);

        } else {
            for (let i = 0; i < store.cart.length; i++) {
                const singlePlate = store.cart[i];
                if (plate.restaurant_id == singlePlate.restaurant_id) {
                    store.cart.push(plate);
                    break
                }
                else {
                    this.error = true
                    setTimeout(() => {
                        this.error = false
                    }, 1500);
                }
            }
        }
        /* if (store.cart.includes(plate.id)) {
            console.log('si');

        }
 */

        for (let i = 0; i < store.cart.length; i++) {
            store.cart[i].quantita = 1

        }
        this.alert = true
        setTimeout(() => {
            this.alert = false
        }, 2000);
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
        if (store.cart.length === 0) {
            this.emptyCart()
        }
        prodotto.prezzoXquantita = prodotto.price * prodotto.quantita
        store.saveCart();
    },
    totalPrice() {
        let totalEl = []
        for (let i = 0; i < store.cart.length; i++) {
            let element = store.cart[i];
            if (element.quantita == 1) {
                element.prezzoXquantita = element.price
            }
            totalEl.push(element.prezzoXquantita)
        }
        let totalPrice = totalEl.reduce((total, amount) => {
            return total + amount;
        })

        let totale = Number(totalPrice) + Number(this.deliveryPrice);
        localStorage.setItem('savetotalPrice', totale);
        return totale
    },
    emptyCart() {
        this.cart = []
        this.deliveryPrice = ''
        localStorage.clear()
    },
    checkCart() {
        if (localStorage.getItem('cart')) {
            try {
                store.cart = JSON.parse(localStorage.getItem('cart'));
            } catch (e) {
                localStorage.removeItem('cart');
            }
        }
    }

})