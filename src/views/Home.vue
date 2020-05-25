<template>
  <div>
    <h1>Active Card</h1>
    <card
      v-if="getActiveCard != null" 
     :card ="getActiveCard"/>
    <cardStack :cardArray ="cardArray" @cardActivate="cardActivate"/>
  </div>
</template>
<script>
import CardStack from "../components/CardStack.vue";
import Card from "../components/Card.vue";
export default {
  name: "Home",
  data() {
    return {
      cardArray: Array,
    };
  },

  components: {
    cardStack: CardStack,
    card: Card
  },
computed: {
        getActiveCard() {
      let activeCard;
      if (this.cardArray.length > 0) {
        this.cardArray.map(card => {
          if (card.isActive) activeCard = card;
        });
      }
      return activeCard;
    }
  },
  

  beforeMount() {
    this.cardArray = this.$root.cardArray;
  },

  methods: {
    cardActivate(id) {
      this.cardArray.map(card => {
        if (card.id != id) {
          card.isActive = false;
        } else {
          card.isActive = true;
        }
      });
    }
  }
};
</script>

<style>
</style>
