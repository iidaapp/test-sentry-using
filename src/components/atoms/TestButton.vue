<template>
  <div>
    <button v-on:click="onClick">{{ text }}</button>
  </div>
</template>

<script>
  export default {
    name: "TestButton",
    props: {
      text: String,
    },
    methods: {
      onClick: function() {
        this.$emit('clicked')
      },
    },
  }
</script>

<style scoped>

</style>