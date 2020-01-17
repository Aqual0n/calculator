<template lang="pug">
    include ../tools/mixins.pug

    +b.SECTION.main
        +e.container
            +e.H1.title Калькулятор

            +e.label Введите делитель в поле ниже
            +e.INPUT.input--divider(
                v-model="divider"
            )
            +e.label Введите делимое число в поле ниже
            +e.INPUT.input--number(
                v-model="number"
            )

            +e.result(
                :class="{'wrong': !dividable}"
            ) Число {{number}} {{getResult}} без остатка на {{divider}}

</template>

<script>
    export default {
        data() {
            return {
                resultPresent: false,
                result: null,
                number: 96,
                divider: 8,
                wrong: false,
            }
        },
        methods: {
        },
        computed: {
            getResult() {
                if (this.dividable) {
                    return 'делится';
                } else {
                    return 'не делится';
                }
            },
            dividable() {
                if(this.number%this.divider === 0) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
</script>
<style scoped lang="scss">
.main {
    &__container {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
    }

    &__input {
        display: block;
        width: 300px;
        margin: 0 auto;
        border-radius: 5px;
        border: 1px solid lightgray;
    }

    &__label {
        margin: 16px 0;
    }

    &__button {
        margin-top: 16px;
    }

    &__result {
        font-size: 32px;
        line-height: 48px;
        margin-top: 16px;

        &.wrong {
            color: red;
        }
    }
}
</style>
