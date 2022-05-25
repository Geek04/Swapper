<template>
    <div class="rate wallet">
        <img src="@/assets/M_bitcoin.png" />
        <div class="rate_info">
            <div class="wallet_info" style="margin-left: -60%;">
                <p>Bitcoin</p>
                <span class="price">$2,638.02</span>
                <p>0.001942 BTC</p>
            </div>
        </div>
        <p class="rate_change_price green">0.02%</p>
    </div>
</template>


<script>
export default {
  name: "ExchangeRate",
}
</script>

<style scoped>
    .rate{
        margin-top: 10px;
        border-radius: 20px;
    }

    .rate img{
        width: 15%;
    }

    .rate_info .wallet_info p{
        margin: 4px 0 !important;
    }

    .rate_change_price{
        right: 10%;
        font-size: 18px;
        font-weight: bold;
    }

    .green {
        color: green;
    }

    .red{
        color: red;
    }
</style>