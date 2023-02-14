import { createRouter, createWebHistory } from "vue-router";
import HomeView from './views/HomeView.vue';
import RestaurantsView from './views/RestaurantsView.vue';
import SingleRestaurantView from './views/SingleRestaurantView.vue';
import CartView from './views/CartView.vue';
//TO DO!!! - menu diventerà poi single-restaurant come abbiamo fatto per il portfolio e andranno aggiornati tutti i nomi


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/restaurants',
            name: 'restaurants',
            component: RestaurantsView
        },
       
        //PROMEMORIA: questa sarà la rotta del singolo ristorante
        {
            path: '/restaurants/:slug',
            name: 'single-restaurant',
            component: SingleRestaurantView
        }, 
        {
            path: '/carrello',
            name: 'carrello',
            component: CartView
        }
    ]
})

export { router }