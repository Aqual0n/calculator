<template lang="pug">
    include ../tools/mixins.pug

    +b.SECTION.main
        +e.container
            +e.H1.title Калькулятор

            +e.label Выберите делитель:

            +e.wrapper
                +e.fieldset
                    +e.BUTTON.radio(
                        v-on:click="divider = 4"
                        :class="{'active': divider === 4}"
                    ) 4
                    +e.BUTTON.radio(
                        v-on:click="divider = 8"
                        :class="{'active': divider === 8}"
                    ) 8

                +e.BUTTON.input--button(
                    v-on:click="toggleInputMode"
                    v-if="!customInput"
                ) ...или введите вручную сюда
                +e.INPUT.input--divider(
                    v-model="divider"
                    v-if="customInput"
                    v-on:blur="toggleInputMode"
                    ref="dividerInput"
                )
                +e.label Введите число:
                +e.INPUT.input--number(
                    v-model="number"
                )

            +e.result(
                :class="{'wrong': !dividable}"
            ) {{getResult}}

            +e.closest(
                v-if="!dividable"
            ) Ближайшие числа, которые делятся - {{getClosest.closestMin}} и {{getClosest.closestMax}}


            +e.H3.subtitle Внизу пример того как будет выглядеть текст:
            +e.example(
                :style="getStyle"
            ) съешь ещё этих мягких французских булок, да выпей чаю съешь ещё этих мягких французских булок, да выпей чаю съешь ещё этих мягких французских булок, да выпей чаю съешь ещё этих мягких французских булок, да выпей чаю съешь ещё этих мягких французских булок, да выпей чаю
</template>

<script>
    export default {
        data() {
            return {
                resultPresent: false,
                result: null,
                number: 32,
                divider: 8,
                wrong: false,
                customInput: false,
            }
        },
        methods: {
            toggleInputMode() {
                this.customInput = !this.customInput;
                if(this.customInput === true) {
                    this.$nextTick(()=> {
                        this.$refs.dividerInput.focus();
                    });
                }
            },
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
            },
            getClosest() {
                if(!this.dividable) {
                    let closestMin = this.number - this.number%this.divider;
                    let closestMax = +this.number + +this.divider - this.number%this.divider;

                    return {
                        closestMin: closestMin,
                        closestMax: closestMax,
                    }
                }
            },
            getStyle() {
                return {
                    fontSize: this.number + 'px',
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

    &__wrapper {
        display: inline-block;

        width: 300px;
    }

    &__input {
        display: block;
        margin: 0 auto;
        border-radius: 10px;
        border: 1px solid lightgray;

        padding: 8px 16px;
        box-sizing: border-box;

        width: 100%;
        font-size: 16px;
        line-height: 21px;

        &--button {
            background-color: #fff;
            transition: .3s ease;
            transition-property: border-color, background-color;
            &:hover {
                border-color: transparent;
                background-color: lightblue;
            }
        }
    }

    &__result {
        font-size: 32px;
        line-height: 48px;
        margin-top: 16px;

        color: green;

        &.wrong {
            color: red;
        }
    }

    &__fieldset {
        margin: 8px 0;
        display: inline-block;
        border-radius: 10px;
        overflow: hidden;

        border: 1px solid #000;
    }

    &__radio {
        display: inline-block;
        border: none;
        padding: 8px;

        background-color: #fff;

        & + & {
            border-left: 1px solid gray;
        }

        outline: none;

        transition: .3s ease;
        transition-property: box-shadow, background-color;

        &.active {
            background-color: lightgray;
            -webkit-box-shadow: inset 0px 0px 5px 1px rgba(0,0,0,0.75);
            -moz-box-shadow: inset 0px 0px 5px 1px rgba(0,0,0,0.75);
            box-shadow: inset 0px 0px 5px 1px rgba(0,0,0,0.75);
        }
    }

    &__example {
        border: 1px solid lightgray;
        padding: 5px;
        text-align: left;
        margin: 0 auto;
        width: 800px;
    }
}
</style>
