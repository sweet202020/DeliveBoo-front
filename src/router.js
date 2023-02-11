import { createRouter, createWebHistory } from "vue-router";
import HomeView from './views/HomeView.vue';
import RestaurantsView from './views/RestaurantsView.vue';
import MenuView from './views/MenuView.vue';
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
        {
            //PROMEMORIA: MENU = soluzione temporanea per poter vedere la pagina
            path: '/menu',
            name: 'menu',
            component: MenuView
        },
        //PROMEMORIA: questa sarà la rotta del singolo ristorante
       /*  {
            path: '/restaurants/:slug',
            name: 'menu',
            component: MenuView
        }, */
        {
            path: '/carrello',
            name: 'carrello',
            component: CartView
        }
    ]
})

export { router }