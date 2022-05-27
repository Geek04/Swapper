<template>
    <div class="footer">
      <img :src="img_input" alt=""><a href="#">{{name_input}}</a>
      <img :src="img_output" alt=""><a href="#">{{name_output}}</a>
      <a href="#"><img class="footer_plus" :src="img_footer" /></a>
    </div>  
</template>


<script>
export default {
    name: "MenuFooter",
    props: {
        name_input: String,
        name_output: String,
        img_input: String,
        img_output: String,
        img_footer: String,
  }
}
</script>

<style scoped>
  .footer{
    background-color:rgb(24, 24, 24);
    box-shadow: 0px -15px 15px black;
    position: absolute;
    bottom: 50px;
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
    font-size: 18px;
    font-weight: bold;
    margin-left: 5px;
  }

  .footer img{
    width: 10%;
    margin-left: 25px;;
  }

  .footer_plus{
    bottom: 30px;
    left: 330px;
    width: 17% !important;
    position: absolute;
    border-radius: 50%;
    box-shadow: 0px 0px 10px white;
  }

  .footer_plus:hover{
    box-shadow: 0px 0px 15px white;
  }
</style>