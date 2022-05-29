<template>
    <div class="footer">
      <img :src="img_input_min" alt=""><a href="#">{{name_input}}</a>
      <img :src="img_output_min" alt=""><a href="#">{{name_output}}</a>
      <router-link v-bind:to=button_url><img class="footer_plus" :src="img_footer" />
      </router-link>
    </div>  
</template>


<script>
import {useRoute} from 'vue-router'
import {computed} from 'vue'

export default {
  name: "MenuFooter",
  props: {
      name_input: String,
      name_output: String,
      img_input_min: String,
      img_output_min: String,
      img_footer: String,
      },
  data() {
    return {
      button_url: "/about"
    }
  },
  created: function () {
    const route = useRoute();
    const path = computed(() =>route.path).value;

    if (path == '/about') {
      this.button_url = '/';
    }
    else if (path == '/') {
      this.button_url = '/about';
    }
  }
}
</script>

<style scoped>
  .footer{
    background-color:rgb(24, 24, 24);
    box-shadow: 0px -15px 15px black;
    position: absolute;
    top: 820px;
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
    font-size: 20px;
    font-weight: bold;
    margin-left: 5px;
  }

  .footer img{
    margin-top: -5px;
    width: 5%;
    margin-left: 7%;
  }

  .footer_plus {
    bottom: 30px;
    left: 330px;
    width: 17% !important;
    position: absolute;
    border-radius: 50%;
    box-shadow: 0px 0px 10px white;
  }

  .footer_plus:hover {
    box-shadow: 0px 0px 15px white;
  }
</style>
