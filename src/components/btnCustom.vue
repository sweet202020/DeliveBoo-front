<script>


export default{
    name : 'btnCustom'
}


</script>

<template>

    <button class="noselect"><span class="text">Search</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24">
                <!--immagine bottone-->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
            </svg></span>
    </button>

</template>

<style lang="scss" scoped>

button {
    width: 150px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: #0086A8;
    border: none;
    border-radius:0 5px 5px 0;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
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
    border-left: 1px solid #000000;
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

button:hover {
    background: #2CCCF5;
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

button:active .icon svg {
    transform: scale(0.8);
}
</style>