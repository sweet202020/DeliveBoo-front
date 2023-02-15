
<script>
import navBar from '../components/navBar.vue';
import jumbotronMenu from '../components/jumbotronMenu.vue';
import btnCustomRounded from '../components/btnCustomRounded.vue';
import { store } from '../store';

export default {
  name: 'SingleRestaurantView',
  components: {
    navBar,
    jumbotronMenu,
    btnCustomRounded
  },
  data() {
    return {
      store,
    }
  },


  mounted() {
    store.callApiPlates(store.API_URL + 'api/restaurants/' + this.$route.params.slug);
    store.callApiSingleRestaurant(store.API_URL + 'api/restaurants/' + this.$route.params.slug);
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
    <div class="row row-cols-1 row-cols-lg-2 g-4">
      <!--RESTAURANT DETAILS -->
      <div class="col">
        <div class="restaurant_details p-4 d-flex justify-content-between" v-if="store.singleRestaurant">
          <div>
            <img width="300" :src="store.API_URL + 'storage/' + store.singleRestaurant.cover_image" alt="">
          </div>
          <div>
            <h3 class="pb-2">{{ store.singleRestaurant.restaurant_name }}</h3>
            <div class="font_size d-flex">
              <div class="me-3"><i class="fa-solid fa-location-dot color"></i></div>
              <div>{{ store.singleRestaurant.address }}</div>
            </div>
            <!-- <div><strong> partita iva: </strong> {{ store.singleRestaurant.partita_iva }}</div> -->
            <div class="font_size d-flex">
              <div class="me-3"><i class="fa-regular fa-clock color"></i></div>
              <div>{{ store.singleRestaurant.opening_time }}</div>
            </div>
            <div class="font_size d-flex">
              <div class="me-3"><i class="fa-solid fa-bicycle color"></i></div>
              <div> Consegna {{ store.singleRestaurant.delivery_price }} €</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ORDER DETAILS -->
      <div class="col">
        <div class="order_details p-4">
          <!-- CARD -->
          <h3>Riepilogo ordine</h3>
          <div class="font_size mt-3">Prodotti €</div>
          <div v-if="store.singleRestaurant">

            <div class="font_size mt-3">Consegna {{ store.singleRestaurant.delivery_price }} €</div>
          </div>

          <!-- BUTTON -->
          <div class="d-flex justify-content-end pt-3">
            <btnCustomRounded text="vai al carrello" iconFw="fa-solid fa-cart-shopping" bg_btn="bg_blue"
              bg_hover="hover_blu_light" />
          </div>
        </div>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-lg-2">
      <!-- PLATES LIST -->
      <div class="col">
        <section class="plates mb-5 pb-5">
          <h3 class="mb-3">I notri piatti:</h3>
          <div v-for="plate in store.platesNew">
            <div v-if="plate.category_id === 2">
              <div class="card_plate my-4 p-3">
                <div class="d-flex justify-content-between mb-2">
                  <h5 class="name">{{ plate.name }}</h5>
                  <h5 class="price">{{ plate.price }} €</h5>
                </div>
                <p class="ingredients">{{ plate.description }}</p>
                <div class="btn btn_plate d-flex justify-content-end mt-5" @click="store.addPlate(plate)"><i
                    class="fa-solid fa-plus"></i></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- DRINKS LIST -->
      <div class="col">
        <section class="plates mb-5 pb-5">
          <h3 class="mb-3">Le nostre bibite:</h3>
          <div v-for="plate in store.platesNew">
            <div v-if="plate.category_id === 3">
              <div class="card_plate my-4 p-3">
                <div class="d-flex justify-content-between mb-2">
                  <h5 class="name">{{ plate.name }}</h5>
                  <h5 class="price">{{ plate.price }} €</h5>
                </div>
                <p class="ingredients">{{ plate.description }}</p>
                <div class="btn btn_plate d-flex justify-content-end mt-5" @click="store.addPlate(plate)"><i
                    class="fa-regular fa-square"></i></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>


  </div>


</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.color {
  color: $deliveboo-primary;
  opacity: 80%;
  aspect-ratio: 1/1;
}

p {
  font-size: 1.4rem;
  color: #4a4a4a;
}

h3 {
  font-size: 2.1rem;
  color: #4a4a4a;
}

h5 {
  font-size: 1.4rem;
  color: #4a4a4a;
}



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
    font-size: 2.8rem;
  }

  div,
  li {
    color: $deliveboo-dark;
    font-weight: 400;
  }

  img {
    border-radius: 0.5rem;
  }
}

.font_size {
  font-size: 1.3rem;
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
      opacity: 100%;

      color: $deliveboo-white;
    }
  }
}
</style>

