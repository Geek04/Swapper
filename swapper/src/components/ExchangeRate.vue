<template>
    <div class="rate wallet">
        <img :src="img" />
        <div class="rate_info">
            <div class="wallet_info">
                <p>{{name}}</p>
                <span class="price min_price">${{price}}</span>
                <p>{{remains}} {{short_name}}</p>
            </div>
        </div>
        <p v-if="change_is === 'up'" class="rate_change_price green">{{change_price}}%</p>
        <p v-else class="rate_change_price red">{{change_price}}%</p>
    </div>
</template>


<script>
export default {
    name: "ExchangeRate",
    props: {
        name: String,
        change_price: Number,
        short_name: String,
        img: String,
        price: Number,
        remains: Number,
        change_is: String,
  }
}
</script>

<style scoped>
    .rate{
        margin-top: 10px;
        border-radius: 20px;
        justify-content: flex-start;
        position: relative;
    }

    .rate img{
        width: 15%;
    }

    .rate_info .wallet_info p{
        margin: 4px 0 !important;
    }

    .wallet_info{
        margin-left: 40px;
        width: 100%;
    }

    .rate_change_price{
        font-size: 24px;
        font-weight: bold;
        margin-top: 4px;
        position: absolute;
        right: 20px;
    }

    .min_price{
        font-weight: 400;
    }

    .green {
        color: #1BE074;
    }

    .red{
        color: #FE4546;
    }
</style>