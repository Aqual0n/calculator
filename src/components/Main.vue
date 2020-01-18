<template lang="pug">
    include ../tools/mixins.pug

    +b.SECTION.main
        +e.container
            +e.H1.title Калькулятор

            +e.label Выберите делитель:

            +e.wrapper
                +e.fieldset
                    +e.item
                        +e.LABEL.radio-label(
                            for="four"
                        ) 4
                        +e.INPUT.radio(
                            type="radio"
                            id="four"
                            value="4"
                            v-model="divider"
                        )
                    +e.item
                        +e.LABEL.radio-label(
                            for="eight"
                        ) 8
                        +e.INPUT.radio(
                            type="radio"
                            id="eight"
                            value="8"
                            v-model="divider"
                        )
                    +e.item
                        +e.LABEL.radio-label(
                            for="ten"
                        ) 10
                        +e.INPUT.radio(
                            type="radio"
                            id="ten"
                            value="10"
                            v-model="divider"
                        )
                    +e.item
                        +e.LABEL.radio-label(
                            for="twelve"
                        ) 12
                        +e.INPUT.radio(
                            type="radio"
                            id="twelve"
                            value="12"
                            v-model="divider"
                        )
                +e.BUTTON.input--button(
                    v-on:click="toggleInputMode"
                    v-if="!customInput"
                ) ...или введите вручную
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

    &__label {
        margin: 8px 0;
    }

    &__result {
        font-size: 32px;
        line-height: 48px;
        margin-top: 16px;

        &.wrong {
            color: red;
        }
    }

    &__fieldset {
        margin-bottom: 8px;
    }

    &__item {
        display: inline-block;
        & + & {
            margin-left: 8px;
        }
    }
}
</style>
