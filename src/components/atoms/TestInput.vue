<template>
  <div>
    <label>
      input:
      <input type="text" :value="value" v-on:input="$emit('input', $event.target.value)">
    </label>
  </div>
</template>

<script>
  export default {
    name: "TestInput",
    props: {
      value: String
    },
  }
</script>

<style scoped>

</style>