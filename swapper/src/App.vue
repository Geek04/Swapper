<template>
  <router-view/>
</template>

<style>
  #app {
    background-color:black;
    width: 450px;
    margin: 0 auto;
    color: white;
    border-radius: 30px;
    height: 900px;
  }

  .price{
    font-size: 24px;
    font-weight: bold;
    position: relative;
  }

  .change_price{
    position: absolute;
    margin-left: 10px;
    font-weight: bold;
  }

  .green {
      color: green;
      background-image: url('assets/up.png');
      background-position: bottom 10px right 68px;
      background-repeat: no-repeat; 
      padding-left: 38px;
      background-size: 20px 10px;
  }

  .small_color{
    background-position: bottom 6px right 41px !important;
    background-size: 16px 6px !important;
  }

  .red{
      color: red;
      background-image: url('assets/down.png');
      background-position: bottom 10px right 68px;
      background-repeat: no-repeat; 
      background-size: 22px;
      padding-left: 38px;
      background-size: 20px 10px;
  }


</style>
