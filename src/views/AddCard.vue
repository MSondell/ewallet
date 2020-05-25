<template>
<div class="add-card">
  <top :header="'ADD A NEW BANK CARD'" addCard/>
  <card :card="card"/>
  <cardForm :card="card"/>
</div>
</template>
<script>
import Top from "../components/Top.vue"
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
        top: Top,
        cardForm: CardForm,
        card: Card
    },
    
    data() {
    return {
    
      card: {
        id: 0,
        cardholderName: "FIRSTNAME LASTNAME",
        cardValidThru: "XX/XX",
        cardNumber: "",
        isActive: false,
        color: "#fff",
        vendor: "vendor-bitcoin.svg",
        chip: "chip-dark.svg",
        blipDark: false,
      }
      ,
      newcard: Object
    };
  }

}
</script>

<style lang="scss" scoped>
.add-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    // width:90vw;

}
</style>

