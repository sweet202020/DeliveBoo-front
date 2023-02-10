
<script>
import navBar from '../components/navBar.vue';
import jumbotronMenu from '../components/jumbotronMenu.vue';
import btnCustom from '../components/btnCustom.vue';
import { store } from '../store'

export default {
  name: 'MenuView',
  components: {
    navBar,
    jumbotronMenu,
    btnCustom
  },
  data() {
    return {
      store,
      plates: [
        {
          img: 'https://picsum.photos/100/100',
          nome: 'margherita',
          ingredients: 'pomodoro ◦ mozzarella',
          prezzo: 4,
          prezzoXquantita: 4,
          quantita: 1,
        },
        {
          img: 'https://picsum.photos/100/100',
          nome: 'prosciutto e funghi',
          ingredients: 'pomodoro ◦ mozzarella ◦ prosciutto cotto ◦ funghi',
          prezzo: 5,
          prezzoXquantita: 5,
          quantita: 1,
        },
        {
          img: 'https://picsum.photos/100/100',
          nome: 'primavera',
          ingredients: 'pomodoro ◦ mozzarella ◦ tonno ◦ asparagi',
          prezzo: 6,
          prezzoXquantita: 6,
          quantita: 1,
        },
        {
          img: 'https://picsum.photos/100/100',
          nome: 'trevigiana',
          ingredients: 'pomodoro ◦ mozzarella ◦ speck ◦ procini ◦ grana',
          prezzo: 6,
          prezzoXquantita: 6,
          quantita: 1,
        },
        {
          img: 'https://picsum.photos/100/100',
          nome: 'diavola',
          ingredients: 'pomodoro ◦ mozzarella ◦ salame piccante ◦ olio piccante',
          prezzo: 7,
          prezzoXquantita: 7,
          quantita: 1,
        },
        {
          img: 'https://picsum.photos/100/100',
          nome: 'quattro stagioni',
          ingredients: 'pomodoro ◦ mozzarella ◦ cotto ◦ carciofi ◦ funghi di bosco ◦ olive',
          prezzo: 7,
          prezzoXquantita: 7,
          quantita: 1,
        },
      ]
    }
  },
  methods: {
    addPlate(plate, i) {
      //se il piatto è gia nel carello aumenta il caunter di 1 altrimenti lo pushi
      if (!store.cart.includes(plate)) {
        console.log('pusho il piatto');
        store.cart.push(plate);
      }else {
        plate.quantita++
        plate.prezzoXquantita = plate.prezzo * plate.quantita
      }
      this.saveCart();
    }, saveCart() {
      let parsed = JSON.stringify(store.cart);
      localStorage.setItem('cart', parsed);
    }
  },
  mounted() {

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

  <div class="container py-5 position-realtive">
    <div class="row row-cols-1 row-cols-md-3 justify-content-center g-4">
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
        <section class="plates">
          <h3 class="mb-3">Le nostre pizze:</h3>

          <div class="card_plate mt-2 p-3" v-for="plate, i in plates">
            <div class="d-flex justify-content-between">
              <h6 class="name">{{ plate.nome }}</h6>
              <h6 class="price">{{ plate.prezzo }} $</h6>
            </div>
            <p class="ingredients">{{ plate.ingredients }}</p>
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
          <div>Telefono: 3474067309</div>
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

  <!-- menu -->


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