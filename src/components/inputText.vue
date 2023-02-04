<script>

export default {
    name: 'inputText',
    props: {
        text: String,
    }
}

</script>

<template>
    <div class="form__group">
        <input type="text" class="form__field w-100" placeholder="Input text">
        <label for="name" class="form__label"> {{ text }} </label>
    </div>
</template>

<style lang="scss">
.form__group {
    position: relative;
}

.form__field {
    border: 1px solid silver !important;
    border-radius: 5px 0 0 5px;
    box-sizing: border-box;
    color: #313a46;
    height: 40px;
    padding: 0rem 15px;
}

.form__field::placeholder {
    color: transparent;
}

.form__field:placeholder-shown~.form__label {
    top: 10px;
    border-right: none;
    border-left: none;
}

.form__label {
    background-color: white;
    border-left: 1px solid silver;
    border-right: 1px solid silver;
    color: #9b9b9b;
    display: block;
    font-size: .9em;
    margin-left: 10px;
    padding: 0 10px;
    pointer-events: none;
    position: absolute;
    top: -10px;
    transition: 0.2s;
}

.form__field:focus {
    border: 1px solid #0086A8 !important;
    outline: none;
}

.form__field:focus~.form__label {
    background-color: white;
    border-right: 1px solid #0086A8;
    border-left: 1px solid #0086A8;
    color: #0086A8;
    font-size: .9em;
    margin-left: 10px;
    padding: 0 10px;
    position: absolute;
    top: -10px;
    transition: 0.2s;
}
</style>