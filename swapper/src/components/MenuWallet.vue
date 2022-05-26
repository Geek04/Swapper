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
</style>