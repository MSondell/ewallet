<template>

<section class="card-form">
 
 <div class="field-card-number flex">
    <label class="baselabel">CARD NUMBER</label>
    <div class="basecontrol">
      <input v-model="card.cardNumber" type="text" placeholder="card number">
    </div>
 </div>

  <div class="field-cardholder-name flex">
    <label class="baselabel">CARDHOLDER NAME</label>
    <div class="basecontrol">
      <input v-model="card.cardholderName" type="text" placeholder="FIRSTNAME LASTNAME">
    </div>
 </div>

  <div class="field-card-valid-thru flex">
    <label class="baselabel">VALID THRU</label>
    <div class="basecontrol">
      <input v-model="card.cardValidThru" type="text" placeholder="MM/YY">
    </div>
 </div>


 
  <div class="field-card-ccv-code">
    <label class="baselabel">CCV</label>
    <div class="basecontrol">
      <input v-model="card.cardCcvCode" type="text" placeholder="ccv code">
    </div>
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

<style>

</style>