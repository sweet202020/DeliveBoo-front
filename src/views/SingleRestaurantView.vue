
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

  <div class="container py-1 position-realtive">

    <!--CONTAINER TOP !!! - RESTAURANT DETAILS -->
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-2 g-5">
        <!--RESTAURANT DETAILS -->
        <div class="col restaurant_details p-4" v-if="store.singleRestaurant">
          <div class="row row-cols-1 row-cols-lg-2 g-4">
            <!-- COVER IMAGE -->
            <div class="col">
              <div v-if="store.singleRestaurant.cover_image">
                <img :src="store.API_URL + 'storage/' + store.singleRestaurant.cover_image" alt="">
              </div>
              <div v-else>
                <img class="placeholder" src="../assets/img/placeholder/placehorder_tondo.png" alt="placeholder">
              </div>
            </div>
            <!-- DESCRIPTION -->
            <div class="col">
              <div>
                <h3 class="pb-2">{{ store.singleRestaurant.restaurant_name }}</h3>
                <div class="font_size d-flex justify-cont">
                  <div class="mx-3"><i class="fa-solid fa-location-dot color"></i></div>
                  <div>{{ store.singleRestaurant.address }}</div>
                </div>
                <div class="font_size d-flex">
                  <div class="mx-3"><i class="fa-regular fa-clock color"></i></div>
                  <div>{{ store.singleRestaurant.opening_time }}</div>
                </div>
                <div class="font_size d-flex">
                  <div class="mx-3"><i class="fa-solid fa-bicycle color"></i></div>
                  <div> Consegna {{ store.singleRestaurant.delivery_price }} €</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- ORDER DETAILS -->
        <!-- <div class="col"> -->
        <!-- CARD -->
        <!-- <div class="order_details p-4">
                                          <h3>Riepilogo ordine</h3>
                                          <div class="font_size mt-3">Prodotti €</div>
                                          <div v-if="store.singleRestaurant">
                                            <div class="font_size mt-3">Consegna {{ store.singleRestaurant.delivery_price }} €</div>
                                          </div> -->
        <!-- BUTTON -->
        <!--    <div class="d-flex justify-content-end pt-3">
             <btnCustomRounded text="vai al carrello" iconFw="fa-solid fa-cart-shopping" bg_btn="bg_blue"
                 bg_hover="hover_blu_light" />
               </div>
               </div>
           </div> -->
      </div>
    </div>


    <!--CONTAINER BOTTOM !!! - PLATES & DRINKS LIST -->
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-2 ">
        <!-- ALERTS -->
        <div class="col">
          <!--  <div class="alert alert-primary fixed_alert" role="alert" v-if="store.alert && !store.error">
                            <strong>Articolo aggiunto al carrello</strong>
                          </div>
                          <div class="alert alert-danger fixed_alert_danger" role="alert" v-if="store.error">
                            <strong>Non puoi ordinare da due ristoranti diversi</strong>
                            <btnCustomRounded @click="store.emptyCart()" bg_btn="bg_blue" bg_hover="hover_blu_light"
                              text="Vuoi svuotare il carrello? Clicca qui" />
                          </div> -->
          <!-- PLATES LIST -->
          <h3 class="mb-3"><i class="fa-solid fa-utensils me-3"></i> Piatti:</h3>
          <div class=" mb-5 pb-5">
            <div v-for="plate in store.platesNew">
              <div v-if="plate.category_id === 1">
                <div class="card_plate my-4 mx-1 p-3 row">
                  <!-- PRODUCT IMAGE -->
                  <div class="col-sm-1 col-md-4 p-1 my-1" v-if="plate.cover_image">
                    <img :src="store.API_URL + 'storage/' + plate.cover_image" alt="">
                  </div>
                  <div class="col-sm-1 col-md-4 p-1 my-1" v-else>
                    <img src="../assets/img/placeholder/placeholder_restaurant.png" alt="">
                  </div>
                  <!-- PRODUCT DESCRIPTION -->
                  <div class="col-sm-1 col-md-8">
                    <div class="d-flex mb-2">
                      <h5 class="name me-auto">{{ plate.name }}</h5>
                      <h5 class="price">{{ plate.price }} €</h5>
                    </div>
                    <p class="ingredients">{{ plate.description }}</p>
                    <div class="btn btn_plate d-flex justify-content-end mt-4" @click="store.addPlate(plate)"><i
                        class="fa-solid fa-plus"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- DRINKS LIST -->
        <div class="col">
          <h3 class="mb-3"><i class="fa-solid fa-utensils me-3"></i> Bibite:</h3>
          <div class=" mb-5 pb-5">
            <div v-for="plate in store.platesNew">
              <div v-if="plate.category_id === 2">
                <!-- PRODUCT IMAGE -->
                <div class="card_plate my-4 mx-1 p-3 row">
                  <div class="col-sm-1 col-md-4 p-1 my-1" v-if="plate.cover_image">
                    <img :src="store.API_URL + 'storage/' + plate.cover_image" alt="">
                  </div>
                  <div class="col-sm-1 col-md-4 p-1 my-1" v-else>
                    <img src="../assets/img/placeholder/placeholder_drink.png" alt="">
                  </div>
                  <!-- PRODUCT DESCRIPTION -->
                  <div class="col-sm-1 col-md-8 prova">
                    <div class="d-flex justify-content-between mb-2">
                      <h5 class="name me-auto">{{ plate.name }}</h5>
                      <h5 class="price">{{ plate.price }} €</h5>
                    </div>
                    <p class="ingredients">{{ plate.description }}</p>
                    <div class="btn btn_plate d-flex justify-content-end mt-4" @click="store.addPlate(plate)"><i
                        class="fa-solid fa-plus"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- DRINKS LIST -->
        <!--  <div class="col">
                  <h3 class="mb-3"><i class="fa-solid fa-champagne-glasses me-3"></i>Le nostre bibite:</h3>
                  <div class="row card_plate my-4 mx-2" v-for="plate in store.platesNew">
                    <div class="col-4 p-3" v-if="plate.category_id === 2">
                      <img :src="store.API_URL + 'storage/' + plate.cover_image" alt="">
                    </div>
                    <div class="col-8 p-3" v-if="plate.category_id === 2">
                      <div class="d-flex justify-content-between mb-2">
                        <h5 class="name">{{ plate.name }}</h5>
                        <h5 class="price">{{ plate.price }} €</h5>
                      </div>
                      <p class="ingredients">{{ plate.description }}</p>
                      <div class="btn btn_plate d-flex justify-content-end mt-5" @click="store.addPlate(plate)"><i
                          class="fa-solid fa-plus"></i>
                      </div>
                    </div>
                  </div> -->
        <!--  <section class=" mb-5 pb-5">
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
                          </section> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.debug {
  border: 2px solid green;
}

.debug_2 {
  border: 3px solid red;
}

.color {
  color: $deliveboo-primary;
  opacity: 80%;
  aspect-ratio: 1/1;
}

p {
  font-size: 1.4rem;
  color: $deliveboo-dark;
}

h3 {
  font-size: 2.2rem;
  color: $deliveboo-primary;
}

h5 {
  font-size: 1.4rem;
  color: $deliveboo-dark;
}

.placeholder {
  background-color: #a5a5a5;
  color: grey;
  border-radius: 0.5rem;
  width: 200px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
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
    font-size: 2.6rem;
  }

  div,
  li {
    color: $deliveboo-dark;
    font-weight: 400;
  }

  img {
    border-radius: 0.5rem;
    width: 100%;
    aspect-ratio: 1/1;
    margin: auto;
  }
}

.font_size {
  font-size: 1.3rem;
}

.card_plate {
  border: 1px solid #d3d3d3;
  border-radius: 10px;

  .btn_plate {
    background-color: $deliveboo-secondary;
    color: $deliveboo-white;

    font-weight: bold;
    transition: 0.5s;

    &:hover {
      background-color: $deliveboo-white;
      color: $deliveboo-secondary;
      opacity: 100%;
    }
  }

  img {
    height: 100%;
    max-height: 150px;
    margin: auto;

  }
}

.fixed_alert {
  background-color: $deliveboo-secondary;
  opacity: 97%;
  color: $deliveboo-white;
  position: absolute;
  top: 0;
  left: 50%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: medium;

}

.fixed_alert_danger {
  background-color: $deliveboo-primary-light;
  opacity: 97%;
  color: $deliveboo-white;
  width: 100%;
  aspect-ratio: 1/1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: x-large;
}

.placeholder {
  border: 2px solid $deliveboo-dark;
}

</style>

