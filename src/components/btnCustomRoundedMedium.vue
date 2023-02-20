<script>

export default {
    name: 'btnCustom',
    props: {
        text: String,
        iconFw: String,
        bg_btn: String,
        bg_hover: String,
    }
}


</script>

<template>
    <button class="noselect" :class="this.bg_btn, this.bg_hover">
        <span class="text">{{ text }}</span>
        <span class="icon"> <i :class="this.iconFw"></i></span>
    </button>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;


button {
    /* larghezza btn */
    width: 172px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
    opacity: 95%;

    .icon {
        color: $deliveboo-white;
    }

    &:hover {
        background-color: $deliveboo-secondary;
    }

}

button,
button span {
    transition: 200ms;
}

button .text {
    transform: translateX(10px);
    color: $deliveboo-white;
    font-weight: bold;
}

button .icon {
    position: absolute;
    border-left: 1px solid $deliveboo-white;
    /* distanza iconca */
    transform: translateX(135px);
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

button svg {
    width: 15px;
    fill: #eee;
}


button:hover .text {
    color: transparent;
}

button:hover .icon {
    width: 150px;
    border-left: none;
    /* distanza scorrimento icona nell'over */
    transform: translateX(10px);
}

button:focus {
    outline: none;
}

button:active .icon {
    transform: scale(0.8);
}




</style>