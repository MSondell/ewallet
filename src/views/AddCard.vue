<template>
<div>
  <!-- <card : card="placeholderCard" addCard/> -->
  <card :card="card"/>
  <cardForm :card="card"/>
</div>
</template>
<script>
import CardForm from "../components/CardForm.vue"
import Card from "../components/Card.vue"
export default {
 
  
  methods: {
    addCard(newCard) {
      newCard.id = this.$root.cardId;
      this.cardArray.push(newCard);
      this.$root.IdCounter();
      // this.$router.push("/");
    }
  },
   
   components: {
        cardForm: CardForm,
        card: Card
    },
    
    data() {
    return {
      // cardArray: [],
      card: {
        id: 0,
        cardholderName: "FIRSTNAME LASTNAME",
        cardValidThru: "XX/XX",
        cardNumber: "",
        isActive: false,
        color: "#fff",
        blipDark: false,
      }
      ,
      newcard: Object
    };
  }

}

</script>

<style>

</style>