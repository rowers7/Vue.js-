<template>
  <div>


     <!---->
        <acilirsekme></acilirsekme>
        <slider1></slider1>
        <hr>
        <hr>
        <mandalina></mandalina>
        <hr>
        <uyegirisi></uyegirisi>
        <hr>
        <cakma></cakma>
        <hr>
        <satınal></satınal>
        <hr>
        <sıralama></sıralama>
        <hr>
        <yorumlar></yorumlar>
        <hr><hr>
        <urunbilgileri2></urunbilgileri2>
        <filtreleme></filtreleme>
        <SplideSlide></SplideSlide>
        <Splide></Splide>
        -->

  </div>
</template>



<script>
  import Component from "./components/denenem";
  import Sıralama from "./components/sıralama";
  import Yorumlar from "./components/yorumlar";
  import Filtreleme from "./components/Filtreleme";
  import üyeol from "./components/üyeol";
  import urunbilgileri from "./components/urunbilgileri";
  import urunbilgileri2 from "./components/urunbilgileri2";
  import satınal from "./components/satın al";
  import cakma from "./components/çakma";
  import slider1 from "./components/slider1";
  import mandalina from "./components/mandalina";
  import uyegirisi from "./components/uyegirisi";
  import acilirsekme from "./components/acılır sekme"




export default {

  components : {
    component : Component,
    sıralama : Sıralama,
    yorumlar:Yorumlar,
    filtreleme:Filtreleme,
    uyeol:üyeol,
    urunbilgileri:urunbilgileri,
    urunbilgileri2:urunbilgileri2,
    satınal:satınal,
    cakma:cakma,
    slider1:slider1,
    mandalina:mandalina,
    uyegirisi:uyegirisi,
    acilirsekme:acilirsekme


  }


}
</script>


<style>


</style>
