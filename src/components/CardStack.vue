<template>
  <section class="wrapper">
    <div class="cardstack-grid">
      <card
        @click.native="cardActivate(card.id)"
        v-for="card in cardsNotActive"
        :key="card.id"
        :card="card"
        inCardStack
      />
    </div>
  </section>
</template>
<script>
import Card from "../components/Card.vue";
export default {
   data() {
    return {};
  },
  props: {
    cardArray: Array,
  },

  components: {
card:Card
  },
methods: {
    cardActivate(id) {
      this.$emit("cardActivate", id);
    }
  },
  computed: {
    cardsNotActive() {
      return this.cardArray.filter(card => !card.isActive);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 35rem;
}
.cardstack-grid {
  display: grid;
  margin-top: 1.4rem;
  grid-template-columns: 1fr;
  grid-auto-rows: 45px;
}
</style>