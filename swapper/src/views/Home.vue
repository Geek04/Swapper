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
        <exchange-rate v-for="item in rates"
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
    <menu-footer :name_input:="name_input" :name_output="name_output" :img_input="img_input" :img_output="img_output"
      :img_plus="img_plus"></menu-footer>
  </div>

</template>

<script>
import ExchangeRate from "@/components/ExchangeRate";
import MenuWallet from "@/components/MenuWallet";
import MenuFooter from "@/components/MenuFooter";

import M_bitcoin from "@/assets/M_bitcoin.png";
import img_input from "@/assets/input.png";
import img_output from "@/assets/output.png"
import img_plus from "@/assets/plus.png";

import axios from "axios";

export default {
  name: 'HomeMain',
  data() {
    return {
      M_bitcoin,
      rates: [
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
          name: 'Binance Token',
          short_name: 'ETH',
          img: M_bitcoin,
          price: '7,893,249.94',
          remains: 0.001942,
          change_price: 0.05,
          change_is: 'up'
        },
      ],
      name_input: 'Deposit',
      name_output: 'Withdraw',
      img_input: img_input,
      img_output: img_output,
      img_plus: img_plus,
    }
  },
  created: function () {
    setInterval(this.updateRates, 5000);
  },
  methods: {
    updateRates() {
      axios.get("/api/tokens").then(response => {
        this.rates = []
        response.data.forEach((token) => {
          token["img"] = M_bitcoin;
          this.rates.push(token);
          });
        });
    }
  },
  components: {
    ExchangeRate,
    MenuWallet,
    MenuFooter,
  }

}

</script>

<style>
.quotes {
  margin: 0 25px;
}

.quotes p {
  color: grey;
  font-size: 16px;
  margin-bottom: 4px;
}

.moneys {
  overflow: scroll;
  height: 550px;
}

.moneys::-webkit-scrollbar {
  width: 0;
}

.portfolio {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 30px 0;
}

.portfolio img {
  width: 12%;
  margin-top: 25px;
}
</style>