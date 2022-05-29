<template style="position: relative;">
  <div>
    <menu-wallet></menu-wallet>
    <div class="quotes">
      <div class="portfolio">
        <div>
          <p style="font-size: 20px">Portfolio</p>
          <span class="price" style="font-size: 36px; margin-bottom: 20px; font-weight: 600">$ 10,249.94</span>
          <span class="change_price red small_color" style="font-size: 18px">1,3%</span>
        </div>
        <img src="@/assets/rate.png" />
      </div>
      <div class="moneys">
        <exchange-rate v-for="item in rates" :key="item.id" :short_name="item.short_name" :img="item.img"
          :price="item.price" :remains="item.remains" :name="item.name" :change_is="item.change_is"
          :change_price="item.change_price">
        </exchange-rate>
        <div style="height: 90px"></div>
      </div>
    </div>
    <menu-footer 
      :name_input="name_input" 
      :name_output="name_output" 
      :img_input_min="img_input_min" 
      :img_output_min="img_output_min"
      :img_footer= "img_footer"></menu-footer>
  </div>

</template>

<script>
import ExchangeRate from "@/components/ExchangeRate";
import MenuWallet from "@/components/MenuWallet";
import MenuFooter from "@/components/MenuFooter";

import M_bitcoin from "@/assets/M_bitcoin.png";
import M_ethereum from "@/assets/M_ethereum.png";
import M_bnb from "@/assets/M_bnb.png";

import img_input_min from "@/assets/input_min.png";
import img_output_min from "@/assets/output_min.png"
import img_footer from "@/assets/plus.png";

import axios from "axios";

export default {
  name: 'HomeMain',
  data() {
    return {
      M_bitcoin,
      rates: [],
      name_input: 'Deposit',
      name_output: 'Withdraw',
      img_input_min: img_input_min,
      img_output_min: img_output_min,
      img_footer: img_footer,
    }
  },
  created: function () {
    this.updateRates();
    setInterval(this.updateRates, 5000);
  },
  methods: {
    updateRates() {
      axios.get("/api/tokens").then(response => {
        this.rates = []
        response.data.forEach((token) => {
          switch (token["short_name"]) {
            case "BTC":
              token["img"] = M_bitcoin;
              break;
            case "ETH":
              token["img"] = M_ethereum;
              break;
            case "BNB":
              token["img"] = M_bnb;
              break;
          }
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
  margin: 0 7%;
}

.quotes p {
  color: grey;
  font-size: 16px;
  margin-bottom: 6px;
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
  margin: 15px 0 30px 0;
}

.portfolio img {
  width: 12%;
  margin-top: 25px;
}
</style>