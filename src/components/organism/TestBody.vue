<template>
  <div>
    <TestInput v-model="inputText" />
    <TestButton :text="'submit'" @clicked="doSuccess" />
    <TestButton :text="'submit (error)'" @clicked="doError" />
    <h3>Submit Text: <span class="submitText">{{ submitText }}</span></h3>
  </div>
</template>

<script>
  import TestButton from '../atoms/TestButton'
  import TestInput from "../atoms/TestInput"
  export default {
    name: 'TestBody',
    components: {
      TestInput,
      TestButton,
    },
    data: function() {
      return {
        inputText: '',
        submitText: ''
      }
    },
    methods: {
      doSuccess: function() {
        console.log('success')
        this.submitText = this.inputText
      },
      doError: function() {
        throw new Error('hogehoge')
      },
    }
  }
</script>

<style scoped>
  .submitText {
    color: goldenrod;
  }
</style>