<template>
    <button @click="handleClick">点我</button>
</template>
<script>
export default {
  name: 'AsyncError',
  methods: {
    async handleClick () {
      let a = {}
      console.log(a.b.c)
    }
  }
}
</script>
