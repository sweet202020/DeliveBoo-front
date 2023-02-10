<script>
import btnCustomRounded from '../btnCustomRounded.vue';



export default {
    name: 'workWithUs',
    components: {
        btnCustomRounded,
    }
}

</script>

<template>

    <div class="container pb-5">
        <h2 class=" text-center pt-5 mt-5">VOI E NOI</h2>
        <div class="row py-5">

            <!-- SECTION RIDER -->
            <div class="col">
                <div class="card altezza_card">
                    <img src="../../assets/img/delivery-3.png" class="card-img-top p-4" alt="...">
                    <div class="card-body">
                        <h5 class="card-title pt-5">Rider</h5>
                        <p class="card-text">
                            Diventa un rider: flessibilità, ottimi guadagni e un mondo di vantaggi per te.
                        </p>
                    </div>
                    <btnCustomRounded text="Diventa Rider" iconFw="fa-solid fa-motorcycle" bg_btn="bg_blue"
                        bg_hover="hover_blu_light" class="mb-3 ms-3" />
                    <!-- <a href="#" class="btn btn-primary">Go somewhere<i class="fa-solid fa-motorcycle"></i></a> -->
                </div>
            </div>

            <!-- SECTION PARTNER -->
            <div class="col">
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
                    <btnCustomRounded text="Diventa Partner" iconFw="fa-solid fa-utensils" bg_btn="bg_blue"
                        bg_hover="hover_blu_light" class="mb-3 ms-3" />
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                </div>
            </div>

            <!-- SECTION LAVORA CON NOI -->
            <div class="col">
                <div class="card altezza_card">
                    <img src="../../assets/img/team-4.png" class="card-img-top p-3" alt="...">
                    <div class="card-body">
                        <h5 class="card-title pt-5">Lavora con noi</h5>
                        <p class="card-text">
                            La nostra missione è trasformare il modo in cui le persone mangiano. È un obiettivo
                            ambizioso, come noi, e ci servono persone che ci aiutino a raggiungerlo.
                        </p>
                    </div>
                    <btnCustomRounded text="Lavora con noi" iconFw="fa-solid fa-users-line" bg_btn="bg_blue"
                        bg_hover="hover_blu_light" class="mb-3 ms-3" />
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;

//TODO cambiare lo stile delle card


h2 {
    color: $deliveboo-secondary;
    font-size: 50px;
}

h5 {
    color: $deliveboo-secondary;
}

img {
    width: 100%;
    aspect-ratio: 1/1;

}

.altezza_card {
    height: 700px;
    border: 1px solid $deliveboo-secondary;
    box-shadow: 2px 2px 7px $deliveboo-secondary;
}
</style>