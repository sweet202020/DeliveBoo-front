<script>
export default{
    name: 'works'
}
</script>



<template>
<div class="container text-center my-5">
            <h2>Come funziona Deliveboo ?</h2>
            <p class="px-5 py-3">
                Scegli la consegna a domicilio, ricevi il tuo pasto comodamente a casa o in ufficio. Mangiare è un
                piacere,
                prenditi il tuo tempo, Deliveboo accorcia le distanze e fa dei tuoi desideri un ordine da realizzare.
            </p>
        </div>

        <div class="container py-3">
            <div class="row row-cols-1 row-cols-md-2 row-cols-xxl-4 g-4 nowrap">
              
                <div class="col text-center">
                    <div class="icons">
                        <img src="../../assets/img/ristorante.svg" alt="">
                        <h3>Scegli il ristorante</h3>
                    </div>
                    <p>Che cosa hai voglia di mangiare? Scegli il ristorante che più ti piace tra quelli disponibili</p>
                </div>

                <div class="col text-center">
                    <div class="icons">
                        <img src="../../assets/img/menu.svg" alt="">
                        <h3>Scegli i piatti</h3>
                    </div>
                    <p>Dal menu del ristorante aggiungi al carrello tutti i piatti che hai voglia di gustare</p>
                </div>

                <div class="col text-center">
                    <div class="icons">
                        <img src="../../assets/img/conferma.svg" alt="">
                        <h3>Completa l'ordine</h3>
                    </div>
                    <p>Controlla il carrello, effettua il pagamento e noi ci prenderemo cura di far avere il tuo ordine al ristorante scelto</p>
                </div>

                <div class="col text-center">
                    <div class="icons">
                        <img src="../../assets/img/location.svg" alt="">
                        <h3>La consegna</h3>
                    </div>
                    <p>Inserisci i tuoi dati nel modulo di pagamento e aspetta comodamente a casa il tuo ordine</p>
                </div>          
            </div>
        </div>
</template>



<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;

h2 {
    color: $deliveboo-primary-light;
}

.icons{
    img{
        width: 100px;
        aspect-ratio: 1/1;
        filter: invert(38%) sepia(83%) saturate(698%) hue-rotate(151deg) brightness(90%) contrast(102%);
    }

    h3{
        margin-top: 1rem;
        margin-bottom: 0.6rem;
        color: $deliveboo-secondary;
    }
    
}
</style>