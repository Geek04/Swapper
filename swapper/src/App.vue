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

  @font-face {
    font-family: "TTCommons-Regular"; 
    src: url("@/assets/TTCommons-Regular.ttf") format("truetype"); 
    font-style: normal; 
    font-weight: 400; 
  } 

  p, a, span{
    font-family: "TTCommons-Regular";
  }

  .price{
    font-size: 30px;
    font-weight: bold;
    position: relative;
    font-weight: 400; 
  }

  .change_price{
    font-size: 20px;
    position: absolute;
    margin-left: 10px;
    font-weight: bold;
    font-weight: 600; 
  }

  .green {
      color: #1BE074;
      font-weight: 500; 
      background-image: url('assets/up.png');
      background-position: bottom 10px right 68px;
      background-repeat: no-repeat; 
      padding-left: 20px;
      background-size: 20px 10px;
  }

  .small_color{
    background-position: bottom 12px right 34px !important;
    background-size: 16px 6px !important;
  }

  .red{
      color:#FE4546;
      font-weight: 500; 
      background-image: url('assets/down.png');
      background-position: bottom 10px right 68px;
      background-repeat: no-repeat; 
      background-size: 22px;
      padding-left: 20px;
      background-size: 20px 10px;
  }


</style>
