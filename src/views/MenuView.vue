<script>
import navBar from '../components/navBar.vue';
import jumbotronMenu from '../components/jumbotronMenu.vue';

export default {
  name: 'MenuView',
  components: {
    navBar,
    jumbotronMenu
  }
}
</script>

<template>
  <navBar />
  <jumbotronMenu />

  <!-- restaurant & order details -->
  <div class="container py-5 position-realtive">
    <div class="row row-cols-1 row-cols-md-3 justify-content-center g-5">
      <!-- restaurant details -->
      <div class="col restaurant_details p-3 me-2">
        <h3>Boa pizza</h3>
        <div>pizza | bibite</div>
        <div>Via delle vie, Il mio paese (PAESE)</div>
        <div>Telefono: 3474067309</div>
        <div>orari di apertura:</div>
        <ul>
          <li>mar-gio --> 12:00/14:00 + 19:00/22:00</li>
          <li>ven-sab --> 12:00/14:00 + 19:00/01:00</li>
          <li>dom --> 12:00/14:00 + 19:00/01:00</li>
        </ul>
      </div>
      <!-- order details -->
      <div class="col order_details p-3 ms-2">
        <h3>Il tuo ordine</h3>
        <div>pizza | bibite</div>
        <div>Via delle vie, Il mio paese (PAESE)</div>
        <div>Telefono: 3474067309</div>
        <div>orari di apertura:</div>
        <ul>
          <li>mar-gio --> 12:00/14:00 + 19:00/22:00</li>
          <li>ven-sab --> 12:00/14:00 + 19:00/01:00</li>
          <li>dom --> 12:00/14:00 + 19:00/01:00</li>
        </ul>
      </div>
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
  box-shadow: 3px 3px 10px $deliveboo-primary;

  h3 {
    color: $deliveboo-primary;
  }

  div,
  li {
    color: $deliveboo-dark;
    font-weight: 400;
  }
}
</style>