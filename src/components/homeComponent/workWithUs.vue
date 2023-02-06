<script>

export default{
    name: 'workWithUs',
}

</script>

<template>

<div class="container">
            <h2 class=" text-center py-5">Lavora con noi</h2>
            <div class="row py-5">
                <div class="col">
                    <div class="card altezza_card">
                        <img src="https://picsum.photos/300/300" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Rider</h5>
                            <p class="card-text">
                                Diventa un rider: flessibilità, ottimi guadagni e un mondo di vantaggi per te.
                            </p>
                        </div>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="col">
                    <div class="card altezza_card">
                        <img src="https://picsum.photos/300/300" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Ristoranti</h5>
                            <p class="card-text">
                                Diventa partner di Deliveroo e raggiungi sempre più clienti. Ci occupiamo noi della
                                consegna, così che la tua unica preoccupazione sia continuare a preparare il miglior
                                cibo.
                            </p>
                        </div>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="col">
                    <div class="card altezza_card">
                        <img src="https://picsum.photos/300/300" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">lavora con noi</h5>
                            <p class="card-text">
                                La nostra missione è trasformare il modo in cui le persone mangiano. È un obiettivo
                                ambizioso, come noi, e ci servono persone che ci aiutino a raggiungerlo.
                            </p>
                        </div>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>

</template>


<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;

//TODO cambiare lo stile delle card


h2 {
    color: $deliveboo-primary-light;
}

.altezza_card{
    height: 600px;
}
</style>