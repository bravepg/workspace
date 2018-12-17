<template>
  <div id="app">
    <cart-nav></cart-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import Nav from './components/Nav.vue'
  import store from './vuex/store'
  export default {
    name: 'App',

    store,
    data() {
      return {

      }
    },
    components: {
      'cart-nav': Nav
    }
  }
</script>