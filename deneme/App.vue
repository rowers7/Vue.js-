<template>
  <div id="app">
    <Navbar/>
  </div>
  
</template>
<script>
  import globalComponent from "./components/globalComponent";
export default {
  components:{
    ...globalComponent
  }
}



</script>
<style>

 .deneme{
    background-color:blue!important;
 }

  .tumkategoriler{
    background-color:gray!important;
    margin-left: 200px;
    width: 200px;
 }

.navbar-brand {
  margin-left: 70px;
  font-size: 42px!important;
}
.navbar-brand2 {
  margin-left: 90px;
  font-size: 13px;
}

.üst_bar {
  background-color:blue!important;
  color:white;
}

.deee {
  margin-left: 70px;
}
.nokta {
  font-size: 30px;
}

.uzak_mesafe {
  margin-left: 520px;
}
.mesafe {
  margin-left: 30px;
}


  .arama{
    background-color:yellow!important;
    
 }

  .arama2{
    background-color:white!important;
    width: 400px!important;
 }


  .arama3{
    background-color:transparent!important;
    color: black;
    
 }
.arama3:hover {
  color: red;
}

.beyaz {
  color: white;
}

</style>
