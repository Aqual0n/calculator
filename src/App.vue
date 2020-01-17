<template lang="pug">
    include tools/mixins.pug
    #app
        main-component

</template>

<script>
  import Main from "./components/Main.vue";
  export default {
      data() {
          return {

          }
      },
      components: {
          'main-component': Main,
      }
  }
</script>

<style lang="scss">

</style>
