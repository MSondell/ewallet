<template>
  
    <div>
    

      <div class="active-card"
      :style="{ backgroundColor: card.color }"
      :class="{ dark: card.nfcDark, hoverEffect: inCardStack }"
    >
      <div class="chip-and-vendor">
        <img src="@/assets/chip-dark.svg" v-if="!card.nfcDark" />
        <img src="@/assets/chip-light.svg" v-else />
        <img src="@/assets/vendor-bitcoin.svg" v-if="card.vendor == 'bitcoin'" />
        <img src="@/assets/vendor-blockchain.svg" v-if="card.vendor == 'blockchain'" />
        <img src="@/assets/vendor-evil.svg" v-if="card.vendor == 'evil'" />
        <img src="@/assets/vendor-ninja.svg" v-if="card.vendor == 'ninja'" />
      </div>
      <div class="cardnumber">
        <p>{{ card.cardNumber }}</p>
      </div>
      <div class="cardinfo">
        <div class="cardholder">
          <label>CARDHOLDER NAME</label>
          <h4>{{ card.name }}</h4>
        </div>
        <div class="valid">
          <label>VALID THRU</label>
          <h4>{{ card.valid }}</h4>
        </div>
      </div>
        </div>
    </div>

</template>
<script>
export default {
   
    
    props: {
       card: Object,
       inCardStack: Boolean
    }
}
</script>

<style lang="scss" scoped>
    .active-card {
  box-sizing: border-box;
  padding: 1rem;
  background-color: #ffb443;
  border-radius: 8px;
  margin: 0 auto;
  box-shadow: 3px 3px 8px 0 rgba(0, 0, 0, 0.4);
  transition: .3s all ease;
  .chip-and-vendor {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .cardnumber {
    p {
      font-size: 1.5rem;
      font-weight: 500;
    }
    margin: 0.5rem 0 1rem 0;
  }
  .cardinfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    label {
      font-size: 0.7rem;
      margin-bottom: 0.2rem;
    }
    h4 {
      font-size: 0.9rem;
    }
    .cardholder {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .valid {
      display: flex;
      flex-direction: column;
      h4 {
        font-weight: 500;
      }
    }
  }
}
</style>
