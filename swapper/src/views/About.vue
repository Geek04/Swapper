<template>
  <div class="about">
    <menu-wallet></menu-wallet>
    <div class="type_token">
      <p class="type_token_name">Bitcoin - Bitcoin</p>
      <p class="type_token_pair">AMC/BNB ˅</p>
    </div>
    <Chart 
      :options="{
        width: '450px', height: '500px',
        symbol: 'NASDAQ:AAPL',
        theme: 'dark', interval: 'D', style: '8',
        toolbar_bg: '#f1f3f6',
        enable_publishing: 'true', hide_top_toolbar: 'true', hide_legend: 'true',
      }"/>
      <menu-footer
        :name_input="name_input"
        :name_output="name_output"
        :img_input="img_input"
        :img_output="img_output"
        :img_plus= "img_plus"
      ></menu-footer>
  </div>
</template>

<script>
import MenuWallet from "@/components/MenuWallet";
import MenuFooter from "@/components/MenuFooter";

import { Chart } from 'vue-tradingview-widgets';

import img_input from "@/assets/input.png";
import img_output from "@/assets/output.png"
import img_plus from "@/assets/plus.png";

export default {
  name: 'AboutMain',

  data() {
    return {  
      name_input: 'Buy AMC',
      name_output: 'Sell AMC',
      img_input: img_input,
      img_output: img_output,
      img_plus: img_plus,
    }
  },
  components: {
    MenuWallet,
    MenuFooter,
    Chart,
  },    
};
</script>

<style scoped>
  .type_token{
    background-color: rgb(24, 24, 24);
    border: rgb(109, 109, 109) solid;
    border-width: 1px 0;
    padding: 2% 5% 2% 5%;
  }

  .type_token_name{
    color: gray;
    font-size: 14px;
  }

  .type_token_pair{
    font-size: 24px;
    font-weight: bold;
    margin-top: -10px;
  }
</style>