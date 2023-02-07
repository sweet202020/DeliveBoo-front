<script>

export default{
    name: 'cardRestaurant',
    props: {
        img: String,
        name: String,
        info: String,
        description: String,
    }
}

</script>

<template>

<div class="col my-3 d-flex justify-content-center">
                        <article class="custom_card">
                            <div class="">
                                
                                <img :src="img" alt="">
                            </div>
                            <div class="card_content">
                                <span class="card_title">{{ name }}</span>
                                <span class="card_subtitle">
                                    <p>{{ info }} <!-- TODO cosa si mette? --></p>
                                </span>
                                <p class="card_description">{{ description }}</p>
                            </div>
                        </article>
                    </div>

</template>

<style lang="scss">
@use '../../styles/partials/variables.scss' as *;


//TODO guardare classi card

/*#region card*/

.custom_card {
    position: relative;
    width: 250px;
    height: 250px;
    color: #2e2d31;
    background: #131313;
    overflow: hidden;
    border-radius: 20px;
}

.temporary_text {
    font-weight: bold;
    font-size: 24px;
    padding: 6px 12px;
    color: #f8f8f8;
}

.card_title {
    font-weight: bold;
}

.card_content {
    position: absolute;
    left: 0;
    bottom: 0;
    /* edit the width to fit card */
    width: 100%;
    padding: 10px;
    background: #f2f2f2;
    border-top-left-radius: 20px;
    /* edit here to change the height of the content box */
    transform: translateY(150px);
    transition: transform .25s;
}

.card_content::before {
    content: '';
    position: absolute;
    top: -47px;
    right: -45px;
    width: 100px;
    height: 100px;
    transform: rotate(-175deg);
    border-radius: 50%;
    box-shadow: inset 48px 48px #f2f2f2;
}

.card_title {
    color: #131313;
    line-height: 15px;
}

.card_subtitle {
    display: block;
    font-size: 12px;
    margin-bottom: 10px;
}

.card_description {
    font-size: 14px;
    opacity: 0;
    transition: opacity .5s;
}

.custom_card:hover .card_content {
    transform: translateY(0);
}

.custom_card:hover .card_description {
    opacity: 1;
    transition-delay: .25s;
}

/*#endregion card*/

</style>