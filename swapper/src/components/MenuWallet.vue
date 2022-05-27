<template>
    <div>
        <div class="menu">
            <p class="menu_name">Swapper</p>
            <a href="#"><img class="menu_img" src="@/assets/Menu.png" alt=""></a>
        </div>
        <div class="wallet">
            <div class="wallet_info">
                <span class="price">$ 4,229.94</span>
                <span class="change_price green small_color">1,3%</span>
                <p>4.41942 BNB <span style="padding: 0 5px">|</span> 0.0441942 ETH</p>
            </div>
            <div class="wallet_pay">
                <a href="#"><img src="@/assets/input.png" alt=""></a>
                <a href="#"><img src="@/assets/output.png" alt=""></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuWallet"
}
</script>

<style scoped>
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
</style>