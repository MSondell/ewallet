<template>
<div>
  <card/>
  <cardForm/>
</div>
</template>
<script>
import CardForm from "../components/CardForm.vue"
import Card from "../components/Card.vue"
export default {
 
  
  methods: {

  },
      components: {
        cardForm: CardForm,
        card: Card
    }
}
</script>

<style>

</style>
