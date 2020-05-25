<template>

<section class="card-form">
 
 <div class="card-number flex">
    <label>CARD NUMBER</label>

      <input v-model="card.cardNumber" type="text" placeholder="card number">
</div>

  <div class="cardholder-name flex">
    <label>CARDHOLDER NAME</label>
      <input v-model="card.cardholderName" type="text" placeholder="FIRSTNAME LASTNAME">
 </div>

  <div class="card-valid-thru flex">
    <label>VALID THRU</label>
      <input v-model="card.cardValidThru" type="text" placeholder="MM/YY">
 </div>
  <div class="card-ccv-code flex">
    <label>CCV</label>
      <input v-model="card.cardCcvCode" type="text" placeholder="ccv code">
 </div>


</section>
</template>
<script>

export default {

    data() {
        return {
           
        }
    },
    props:{
        card:Object
    },
    methods: {
    },
    computed:{

    }

}
</script>

<style lang="scss" scoped>
.card-form{
margin-top: 2rem;
margin-bottom: 1rem;
    min-width: 80vw;
    max-width: 396px;


input{
  box-sizing: border-box;
  
}
  .flex {

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input {
      width:100%;
      height: 2rem;
      background: rgb(240, 240, 240);
      border: 0.1rem solid black;
      margin-bottom: 0.5rem;
      border-radius: 5px;
      
    }
  }
  }
</style>