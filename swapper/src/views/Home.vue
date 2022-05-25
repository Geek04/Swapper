<template>
  <div class="menu">
    <p class="menu_name">Swapper</p>
    <a href="#"><img class="menu_img" src="@/assets/Menu.png" alt=""></a>
  </div>
  <div class="wallet">
    <div class="wallet_info">
      <span class="price">$ 4,229.94</span>
      <span class="change_price green">1,3%</span>
      <p>4.41942 BNB <span style="padding: 0 5px">|</span> 0.0441942 ETH</p>
    </div>
    <div class="wallet_pay">
      <a href="#"><img src="@/assets/input.png" alt=""></a>
      <a href="#"><img src="@/assets/output.png" alt=""></a>
    </div>
  </div>
  <div class="quotes">
    <div class="portfolio">
      <div>
        <p>Portfolio</p>
        <span class="price" style="font-size: 32px; margin-bottom: 20px">$ 4,229.94</span>
        <span class="change_price red" style="font-size: 18px">1,3%</span>
      </div>
      <img src="@/assets/rate.png" />
    </div>
    <exchange-rate></exchange-rate>
    <exchange-rate></exchange-rate>
    <exchange-rate></exchange-rate>
    <exchange-rate></exchange-rate>
    <exchange-rate></exchange-rate>
  </div>
</template>

<script>
import ExchangeRate from "@/components/ExchangeRate";

export default {
  name: 'HomeMain',
  components: {
    ExchangeRate
  }
}

</script>

<style>
  .menu{
    padding: 2%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu_name{
    font-weight: bold;
    font-size: 28px
  }

  .menu_img{
    width: 10%;
    height: 10%;
    justify-content: space-between;
    float: right;
  }

  .wallet{
    background-color: rgb(24, 24, 24);
    border: rgb(109, 109, 109) solid;
    border-width: 1px 0;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .wallet p{
    color: gray;
    font-size: 12px;
  }

  .wallet_pay{
    width: 40%;
  }

  .wallet_pay img{
    width: 25%;
    padding-left: 40px;
    float: right;
  }

  .quotes{
    margin: 0 25px;
  }

  .quotes p{
    color: grey;
    font-size: 16px;
    margin-bottom: 4px;
  }
  
  .portfolio{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0 30px 0;
  }

  .portfolio img{
    width: 12%;
    margin-top: 25px;
  }
</style>