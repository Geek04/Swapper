<template style="position: relative;">
  <div>
    <menu-wallet></menu-wallet>
    <div class="quotes">
      <div class="portfolio">
        <div>
          <p>Portfolio</p>
          <span class="price" style="font-size: 32px; margin-bottom: 20px">$ 4,229.94</span>
          <span class="change_price red small_color" style="font-size: 18px">1,3%</span>
        </div>
        <img src="@/assets/rate.png" />
      </div>
      <div class="moneys">
        <exchange-rate
          v-for="item in rates" 
          :key="item.id"
          :short_name="item.short_name"
          :img="item.img"
          :price="item.price"
          :remains="item.remains" 
          :name="item.name"
          :change_is="item.change_is"
          :change_price="item.change_price">
        </exchange-rate>
        <div style="height: 90px"></div>
      </div>
    </div>
    <div class="footer">
      <img src="@/assets/input.png" alt=""><a href="#">Deposit</a>
      <img src="@/assets/output.png" alt=""><a href="#">Withdraw</a>
      <a href="#"><img class="footer_plus" src="@/assets/plus.png" /></a>
    </div>    
  </div>

</template>

<script>
import ExchangeRate from "@/components/ExchangeRate";
import MenuWallet from "@/components/MenuWallet";
import M_bitcoin from "@/assets/M_bitcoin.png";


export default {
  name: 'HomeMain',
   data() {
    return {  
      M_bitcoin,
      rates:[
        {
          name: 'Bitcoin',
          short_name: 'BTC',
          img: M_bitcoin,
          price: '2,638.02',
          remains: 0.001942, 
          change_price: 0.02,
          change_is: 'up'
        },
        {
          name: 'Etherium',
          short_name: 'ETH',
          img: M_bitcoin,
          price: '7,893,249.94',
          remains: 0.001942, 
          change_price: 0.05,
          change_is: 'up'
        },
        {
          name: 'Etherium',
          short_name: 'ETH',
          img: M_bitcoin,
          price: '7,893,249.94',
          remains: 0.001942, 
          change_price: 0.05,
          change_is: 'down'
        },
        {
          name: 'Etherium',
          short_name: 'ETH',
          img: M_bitcoin,
          price: '7,893,249.94',
          remains: 0.001942, 
          change_price: 0.05,
          change_is: 'down'
        },
        {
          name: 'Etherium',
          short_name: 'ETH',
          img: M_bitcoin,
          price: '7,893,249.94',
          remains: 0.001942, 
          change_price: 0.05,
          change_is: 'up'
        },
        {
          name: 'Etherium',
          short_name: 'ETH',
          img: M_bitcoin,
          price: '7,893,249.94',
          remains: 0.001942, 
          change_price: 0.05,
          change_is: 'up'
        },
      ]
    }
  },
  components: {
    ExchangeRate,
    MenuWallet,
  }
  
}

</script>

<style>
  .menu{
    padding: 0 4%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu_name{
    font-weight: bold;
    font-size: 34px
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

  .moneys{
    overflow: scroll;
    height: 550px;
  }

  .moneys::-webkit-scrollbar {
    width: 0;
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

  .footer{
    background-color:rgb(24, 24, 24);
    box-shadow: 0px -15px 15px black;
    position: absolute;
    bottom: 50px;
    border-radius: 0 0 30px 30px;
    width: 450px;
    height: 90px;
    display: flex;
    align-items: center;
  }

  .footer a{
    color: white;
    text-decoration: none;
    padding: 1%;
    font-size: 18px;
    font-weight: bold;
    margin-left: 5px;
  }

  .footer img{
    width: 10%;
    margin-left: 25px;;
  }

  .footer_plus{
    bottom: 30px;
    left: 330px;
    width: 17% !important;
    position: absolute;
    border-radius: 50%;
    box-shadow: 0px 0px 15px white;
  }
</style>