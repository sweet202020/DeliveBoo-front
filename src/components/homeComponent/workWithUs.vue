<script>
import btnCustomRoundedMedium from '../btnCustomRoundedMedium.vue';



export default {
    name: 'workWithUs',
    components: {
        btnCustomRoundedMedium,
    }
}

</script>

<template>

    <div class="container pb-5">
        <h2 class=" text-center pt-5 mt-5">VOI E NOI</h2>
        <div class="row row-cols-1 row-cols-md-3 py-5 mx-2">

            <!-- SECTION RIDER -->
            <div class="col my-3">
                <div class="card altezza_card">
                    <img src="../../assets/img/delivery-3.png" class="card-img-top p-4" alt="...">
                    <div class="card-body">
                        <h5 class="card-title pt-5">Rider</h5>
                        <p class="card-text">
                            Diventa un rider: flessibilità, ottimi guadagni e un mondo di vantaggi per te.
                        </p>
                    </div>
                    <div class="max_witdh">
                        <btnCustomRoundedMedium text="Diventa Rider" iconFw="fa-solid fa-motorcycle" bg_btn="bg_blue"
                            bg_hover="hover_blu_light" class="my-5 ms-3 " />
                    </div>
    
                </div>
            </div>

            <!-- SECTION PARTNER -->
            <div class="col my-3">
                <div class="card altezza_card">
                    <img src="../../assets/img/ristoratore.png" class="card-img-top p-" alt="...">
                    <div class="card-body">
                        <h5 class="card-title pt-5">Ristoranti</h5>
                        <p class="card-text">
                            Diventa partner di Deliveroo e raggiungi sempre più clienti. Ci occupiamo noi della
                            consegna, così che la tua unica preoccupazione sia continuare a preparare il miglior
                            cibo.
                        </p>
                    </div>
                    <btnCustomRoundedMedium text="Diventa Partner" iconFw="fa-solid fa-utensils" bg_btn="bg_blue"
                        bg_hover="hover_blu_light" class="my-5 ms-3" />
 
                </div>
            </div>

            <!-- SECTION LAVORA CON NOI -->
            <div class="col my-3">
                <div class="card altezza_card">
                    <img src="../../assets/img/team-4.png" class="card-img-top p-3" alt="...">
                    <div class="card-body">
                        <h5 class="card-title pt-5">Lavora con noi</h5>
                        <p class="card-text">
                            La nostra missione è trasformare il modo in cui le persone mangiano. È un obiettivo
                            ambizioso, come noi, e ci servono persone che ci aiutino a raggiungerlo.
                        </p>
                    </div>
                    
                        <btnCustomRoundedMedium text="Lavora con noi" iconFw="fa-solid fa-users-line" bg_btn="bg_blue"
                        bg_hover="hover_blu_light" class="my-5 ms-3" />

                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;

//TODO cambiare lo stile delle card

.max_witdh{
    max-width: 60%;
}

h2 {
    color: $deliveboo-secondary;
    font-size: 50px;
}

h5 {
    color: $deliveboo-secondary;
}

img {
    width: 70%;
    margin: auto;
    aspect-ratio: 1/1;
}

.altezza_card {
    height: 100%;
    border: 1px solid $deliveboo-secondary;
    box-shadow: 2px 2px 7px $deliveboo-secondary;
}
</style>