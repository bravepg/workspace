<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#" v-link="{ path: '/' }">Shopping Cart</a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li v-link="{ path: '/index', activeClass: 'active' }"><a href="#!"> iPhone6S <span class="sr-only">(current)</span></a></li>
                    <li v-link="{ path: '/cart', activeClass: 'active' }"><a href="#!"> 购物车 <span class="badge text-danger" v-text="totalItem" v-if="totalItem"></span></a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Nav',

        vuex: {
            getters: {
                cart: ({ index }) => index.cart
            }
        },

        computed: {
            'totalItem': function() {
                return this.cart.length
            }
        }
    }
</script>

<style media="screen">
    .text-danger {
        color: #fff;
        background-color: #d9534f;
    }
</style>