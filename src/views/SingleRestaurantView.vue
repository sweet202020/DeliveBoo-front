
<script>
import navBar from '../components/navBar.vue';
import jumbotronMenu from '../components/jumbotronMenu.vue';
import { store } from '../store'
//TEST CALL - import axios
import axios from 'axios'

export default {
  name: 'SingleRestaurantView',
  components: {
    navBar,
    jumbotronMenu,
  },
  data() {
    return {
      store,
      restaurant: null,
      loading: true,
      //TO DO!!! REFACTORING!!! sostituire poi l'url con quello che abbiamo già fatto pescandolo dallo store
      //api_base_url: 'http://127.0.0.1:8000',

    }
  },
  methods: {


  },
  mounted() {
    //console.log(this.$route.params.slug);
    //TO DO!!! REFACTORING!!! sostituire poi l'url con quello che abbiamo già fatto pescandolo dallo store
    const url = store.API_URL + 'api/restaurants/' + this.$route.params.slug
    console.log(url);
    axios.get(url)
      .then(response => {
        if (response.data.success) {
          this.restaurant = response.data.results

        } else {
          console.log('page not found');
        }
        console.log(response);
      }).catch(error => {
        console.log(error);
      })

  },

}
</script>

<template>
  <navBar />
  <jumbotronMenu />
  <div class="container mt-5">

    <h1>single restaurant view</h1>
    <h2>{{ $route.params.slug }}</h2>

   

    

  </div>


</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
</style>

