
<script>
import navBar from '../components/navBar.vue';
import jumbotronMenu from '../components/jumbotronMenu.vue';
import btnCustom from '../components/btnCustom.vue';
import { store } from '../store';
import axios from 'axios'

export default {
  name: 'SingleRestaurantView',
  components: {
    navBar,
    jumbotronMenu,
    btnCustom
  },
  data() {
    return {
      store,
      platesNew: null,
      restaurant: null,
      //TO DO!!! REFACTORING!!! sostituire poi l'url con quello che abbiamo già fatto pescandolo dallo store
      //api_base_url: 'http://127.0.0.1:8000',

    }
  },
  methods: {
    //AGGIUNTA ARTICOLO AL CARRELLO DI FEDE
    addPlate(plates, i) {
      //se il piatto è presente quantità++ altrimenti lo pusha
      if(!store.cart.includes(plates)) {
      }else {
        //TODO ??
      }
      store.cart.push(plates);
      
      this.saveCart();
    }, saveCart() {
      let parsed = JSON.stringify(store.cart);
      localStorage.setItem('cart', parsed);
    },
    //CHIAMATA PER PIATTI MENU
    callApi(url) {
      axios.get(url)
        .then(response => {
          console.log(response.data.results.plates);
          this.platesNew = response.data.results.plates;
          console.log(this.platesNew);
        })
    }


  },
  mounted() {
    this.callApi(store.API_URL + 'api/restaurants/' + this.$route.params.slug);
    //DON'T TOUCH!!
    if (localStorage.getItem('cart')) {
      try {
        store.cart = JSON.parse(localStorage.getItem('cart'));
      } catch (e) {
        localStorage.removeItem('cart');
      }
    }
  },

}
</script>

<template>
  <navBar />
  <jumbotronMenu />



  <!--  <h5>test slug single restaurant = {{ $route.params.slug }}</h5> -->

  <div class="container py-5 position-realtive">
    <div class="row row-cols-1 row-cols-md-3 justify-content-center g-4 flex-wrap">
      <div class="col sx">
        <!-- restaurant details -->
        <section class="restaurant_details p-3">

          <h3>Boa pizza</h3>
          <div>pizza | bibite</div>
          <div>Via delle vie, Il mio paese (PAESE)</div>
          <div>Telefono: 349.4044257</div>
          <div>orari di apertura:</div>

          <ul>
            <li>mar-gio --> 12:00/14:00 + 19:00/22:00</li>
            <li>ven-sab --> 12:00/14:00 + 19:00/01:00</li>
            <li>dom --> 12:00/14:00 + 19:00/01:00</li>
          </ul>
        </section>
        <!-- menu piatti -->
        <section class="plates mb-5 pb-5">
          <h3 class="mb-3">I nostri piatti:</h3>

          <!-- TEST API CALL -->
          <div class="card_plate mt-2 p-3" v-for="plate, i in platesNew">
            <div class="d-flex justify-content-between">
              <h6 class="name">{{ plate.name }}</h6>
              <h6 class="price">{{ plate.price }} $</h6>
            </div>
            <p class="ingredients">{{ plate.description }}</p>
            <div class="btn btn_plate d-flex justify-content-end" @click="addPlate(plate, i)">+</div>
          </div>

        </section>
      </div>

      <!-- order details -->
      <section class="col dx">
        <div class="order_details p-3">
          <h3>Il tuo ordine</h3>
          <div>pizza | bibite</div>
          <div>Via delle vie, Il mio paese (PAESE)</div>
          <div>orari di apertura:</div>
          <ul>
            <li>Pizza Margherita</li>
            <li>Pizza capricciosa</li>
            <li>Pizza Mare e Monti</li>
            <li>coca cola 33cl</li>
            <li>coca cola 33cl</li>
            <li>birra moretti 66cl</li>
            <li>birra moretti 66cl</li>
            <li>birra moretti 66cl</li>
          </ul>
          <div>Totale ordine: 30€</div>
          <div class="d-flex justify-content-end pt-3">
            <btnCustom text="paga" iconFw="fa-solid fa-cart-shopping" bg_btn="bg_blue" bg_hover="hover_blu_light" />
          </div>
        </div>

      </section>
    </div>
  </div>


</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.restaurant_details,
.order_details {
  background-color: #fcfcfc;
  border: 2px solid $deliveboo-primary-light;
  border-radius: 10px;
  position: relative;
  top: -100px;
  //box-shadow: 3px 3px 9px $deliveboo-dark;
  box-shadow: 3px 3px 9px $deliveboo-primary;

  h3 {
    color: $deliveboo-primary;
  }

  div,
  li {
    color: $deliveboo-dark;
    font-weight: 400;
  }
}

.card_plate {
  border: 1px solid #d3d3d3;

  .btn_plate {
    background-color: $deliveboo-white;
    color: $deliveboo-secondary;
    font-weight: bold;
    transition: 0.5s;

    &:hover {
      background-color: $deliveboo-secondary;
      color: $deliveboo-white;
    }
  }
}
</style>

