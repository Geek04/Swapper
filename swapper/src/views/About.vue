<template>
  <div class="about">
    <menu-wallet></menu-wallet>
    <div class="type_token">
      <div>
        <p class="type_token_name">Bitcoin - Bitcoin</p>
        <p class="type_token_pair">AMC/BNB ˅</p>
      </div>
      <img src="@/assets/exit.png" />
    </div>
    <Chart class="graf" 
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
      :img_input_min="img_input_min"
      :img_output_min="img_output_min"
      :img_footer= "img_footer"
    ></menu-footer>
  </div>
</template>

<script>
import MenuWallet from "@/components/MenuWallet";
import MenuFooter from "@/components/MenuFooter";

import { Chart } from 'vue-tradingview-widgets';

import img_input_min from "@/assets/input_min.png";
import img_output_min from "@/assets/output_min.png"
import img_footer from "@/assets/wheel.png";

export default {
  name: 'AboutMain',

  data() {
    return {  
      name_input: 'Buy AMC',
      name_output: 'Sell AMC',
      img_input_min: img_input_min,
      img_output_min: img_output_min,
      img_footer: img_footer,
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
    background-color: #1B1B1B;
    border: rgba(109, 109, 109, 0.2) solid;
    border-width: 1px 0;
    padding: 0% 5% 0% 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
  }

  .type_token img{
    border-radius: 50%;
  }

  .type_token_name{
    color: gray;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .type_token_pair{
    font-size: 24px;
    font-weight: bold;
    margin-top: -10px;
  }

  .type_token img:hover .graf{
    animation: graf_animation 1s ease-in-out;
  }

  @keyframes graf_animation {
    0% {transform: translateY(-80px)}
    100% {transform: translateY(0)}
  }



</style>