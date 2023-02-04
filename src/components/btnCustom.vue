<script>

export default{
    name : 'btnCustom',
    props: {
        text: String,
        iconFw: String,
        bg_btn: String,
        bg_hover:String,
    }
}


</script>

<template>

    <button class="noselect" :class="this.bg_btn , this.bg_hover">
        <span class="text">{{ text }}</span>
        <span class="icon" > <i :class=" this.iconFw" ></i></span>
    </button>

</template>

<style lang="scss" scoped>

@use '../styles/partials/variables.scss' as *;


button {
    width: 150px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    border-radius:0 5px 5px 0;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
    .icon{
        color: white;
    }

}

button,
button span {
    transition: 200ms;
}

button .text {
    transform: translateX(35px);
    color: white;
    font-weight: bold;
}

button .icon {
    position: absolute;
    border-left: 1px solid white;
    transform: translateX(110px);
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
    transform: translateX(0);
}

button:focus {
    outline: none;
}

button:active .icon  {
    transform: scale(0.8);
}
</style>