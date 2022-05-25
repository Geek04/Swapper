<template>
  <router-view/>
</template>

<style>
  #app {
    background-color:black;
    width: 450px;
    margin: 0 auto;
    color: white;
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
  }

  .red{
      color: red;
  }
</style>
