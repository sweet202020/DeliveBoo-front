<script>
import navBar from '../components/navBar.vue';
import jumbotronMenu from '../components/jumbotronMenu.vue';
import btnCustom from '../components/btnCustom.vue';

export default {
  name: 'MenuView',
  components: {
    navBar,
    jumbotronMenu,
    btnCustom
  }
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

          <div class="card_plate mt-2 p-3">
            <div class="d-flex justify-content-between">
              <h6 class="title">Margherita</h6>
              <h6>5,00 €</h6>
            </div>
            <p class="text">Pomodoro ◦ mozzarella</p>
            <div class="btn btn_plate d-flex justify-content-end">+</div>
          </div>

          <div class="card_plate mt-2 p-3">
            <div class="d-flex justify-content-between">
              <h6 class="title">Prosciutto e funghi</h6>
              <h6>6,50 €</h6>
            </div>
            <p class="text">Pomodoro ◦ mozzarella ◦ prosciutto cotto ◦ funghi</p>
            <div class="btn btn_plate d-flex justify-content-end">+</div>
          </div>

          <div class="card_plate mt-2 p-3">
            <div class="d-flex justify-content-between">
              <h6 class="title">Quattro formaggi</h6>
              <h6>7,50 €</h6>
            </div>
            <p class="text">Pomodoro ◦ mozzarella ◦ brie ◦ taleggio ◦ branzi</p>
            <div class="btn btn_plate d-flex justify-content-end">+</div>
          </div>

          <div class="card_plate mt-2 p-3">
            <div class="d-flex justify-content-between">
              <h6 class="title">Spek e brie</h6>
              <h6>7,00 €</h6>
            </div>
            <p class="text">Pomodoro ◦ mozzarella ◦ spek ◦ brie</p>
            <div class="btn btn_plate d-flex justify-content-end">+</div>
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
  border: 3px solid $deliveboo-primary-light;
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
  }
}
</style>