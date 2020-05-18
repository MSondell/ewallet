<template>
  <div class="card-item">
    <section class="card">
      <!-- <h6 v-if="cardTitle">{{ cardTitle }}</h6>  -->
      <article class="card-active">
        <div class="chip-and-vendor">
          <img class="chip-light" src="../assets/chip-light.svg" alt="Chip picture light" />
        </div>
        <div class="card-number">
          <p>{{ computedCardNumber }}</p>
        </div>
        <div class="card-info">
          <div class="cardholder-name">
            <label>CARDHOLDER NAME</label>
            <h4>{{ computedCardholderName }}</h4>
          </div>
          <div class="card-valid-thru">
            <label>VALID THRU</label>
            <h4>{{ card.cardValidThru }}</h4>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  props: {
    card: Object
  
  },
computed: {
    computedCardNumber(){
        if(!this.card.cardNumber){
            return "XXXX XXXX XXXX XXXX"
        }
        return this.card.cardNumber
    },
    computedCardholderName(){
        if(!this.card.cardholderName){
            return "FIRSTNAME LASTNAME"
        }
        return this.card.cardholderName
    }

}
,

methods: {}
};

</script>

<style>
</style>