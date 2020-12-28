<template>
<div>

  <div class="kutu2">

    <span class="ust"><strong>&nbsp;&nbsp;&nbsp;KAMPANYALI ÜRÜNLER</strong

    ></span>

    </div>
  <div class="kutu">

    <div class="urunler">
      <div class="first">
        <img src="images/2.JPG" alt="" class="deneme">
      </div>
      <div class="second">

        <span class="yazı"><strong>GameBooster GB-G3060B RGB Tempere...</strong></span>
        <ul id="ust_ana_menu" class="ust_ana_menu">
          <li>
            <a href="/sihirbaz" target="_self" title="Toplama Pc"><span>Kasa Tipi: MidTower</span></a></li>
          <li>
            <a href="/sihirbaz" target="_self" title="Toplama Pc"><span>Anakart Desteği: ATX</span></a></li>
        </ul>
      </div>

    </div>
    <div class="urun_fiyatlar">
      <div class="urun_kdvdahil_fiyati">499&nbsp;TL</div>
      <div class="indirimsiz_urun_kdvdahil_fiyati">
        <span>609&nbsp;TL</span>
      </div>
    </div>
  </div>
  <div class="kutu">

    <div class="urunler">
      <div class="first">
        <img src="images/3.JPG" alt="" class="deneme">
      </div>
      <div class="second">

        <span class="yazı"><strong>HP LaserJet Pro M130FN Fotokopi Tarayıcı...</strong></span>
        <ul id="ust_ana_menu" class="ust_ana_menu">
          <li>
            <a href="/sihirbaz" target="_self" title="Toplama Pc"><span>Kasa Tipi: MidTower</span></a></li>
          <li>
            <a href="/sihirbaz" target="_self" title="Toplama Pc"><span>Anakart Desteği: ATX</span></a></li>
        </ul>
      </div>

    </div>
    <div class="urun_fiyatlar">
      <div class="urun_kdvdahil_fiyati">499&nbsp;TL</div>
      <div class="indirimsiz_urun_kdvdahil_fiyati">
        <span>609&nbsp;TL</span>
      </div>
    </div>
  </div>
  <div class="kutu">

    <div class="urunler">
      <div class="first">
        <img src="images/4.JPG" alt="" class="deneme">
      </div>
      <div class="second">

        <span class="yazı"><strong>Dell OptiPlex 3070MT i5-9500 4GB 1TB Li...</strong></span>
        <ul id="ust_ana_menu" class="ust_ana_menu">
          <li>
            <a href="/sihirbaz" target="_self" title="Toplama Pc"><span>Kasa Tipi: MidTower</span></a></li>
          <li>
            <a href="/sihirbaz" target="_self" title="Toplama Pc"><span>Anakart Desteği: ATX</span></a></li>
        </ul>
      </div>

    </div>
    <div class="urun_fiyatlar">
      <div class="urun_kdvdahil_fiyati">499&nbsp;TL</div>
      <div class="indirimsiz_urun_kdvdahil_fiyati">
        <span>609&nbsp;TL</span>
      </div>
    </div>
  </div>
  <div class="kutu">

    <div class="urunler">
      <div class="first">
        <img src="images/5.JPG" alt="" class="deneme">
      </div>
      <div class="second">

        <span class="yazı"><strong>Philips 27 271B8QJEB-00 1920x1080 60H...</strong></span>
        <ul id="ust_ana_menu" class="ust_ana_menu">
          <li>
            <a href="/sihirbaz" target="_self" title="Toplama Pc"><span>Kasa Tipi: MidTower</span></a></li>
          <li>
            <a href="/sihirbaz" target="_self" title="Toplama Pc"><span>Anakart Desteği: ATX</span></a></li>
        </ul>
      </div>

    </div>
    <div class="urun_fiyatlar">
      <div class="urun_kdvdahil_fiyati">499&nbsp;TL</div>
      <div class="indirimsiz_urun_kdvdahil_fiyati">
        <span>609&nbsp;TL</span>
      </div>
    </div>
  </div>


</div>
</template>

<script>
export default {


}
</script>

<style scoped>

.second {
  margin-left: 45px;

}
.deneme {
  margin-top: 10px;
}
.yazı {
  margin-left: 59px;
  font-size: 12px;

}

:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}


#ust_ana_menu li a[data-v-791fde45]:before {
  content: '\25A0';
  padding: 0px 5px;
  font-size: 8px;
  color: black;
}
[data-v-791fde45]:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

div.urun_fiyatlar {
  display: flex;
  flex-direction: row;
  align-items: center;
  width:100%;
  margin-left: 100px;
}

div.indirimsiz_urun_fiyati {
  font-size: 14px;
  margin-left: 5px;
  text-decoration: line-through;
  display: inline-block;
  padding: 2px 0;
}

div.indirimsiz_urun_kdvdahil_fiyati {
  font-size: 14px;
  text-decoration: line-through;
  display: inline-block;
  padding: 0;
  color: #676D78;
}

.urun_fiyati {
  font-size: 14px;
  display: inline-block;
  margin-left: 5px;
}


div.urun_kdvdahil_fiyati {
  font-size: 18px;
  font-weight:700;
  display: inline-block;
  margin-right: 10px;
  padding: 0;
  color: #0B8FEC;
}





#ust_ana_menu {

  flex-direction: row;
  justify-content: space-around;
}

#ust_ana_menu li {
  flex-grow:1;
  float: left;
  margin: 0;
}

#ust_ana_menu li:first-child {
  padding-left: 0;
}

.first {
  height: 18px;
  margin-left: 0px;
}
#ust_ana_menu li a {
  text-decoration: none;
  display: flex;
  padding: 10px;
  font-size: 12px;
}
#ust_ana_menu li a:before {
  content:'\25A0';
  padding:0px 5px;
  font-size:8px;
  color: black;

}

li::marker {
  content: none;
}


.kutu {
  border-style: solid;
  border: 1px solid #eceff1;
  border-top-color: #eceff1!important;
  width: 380px;
}

.kutu2 {
  border-style: solid;
  border-color:#eceff1;
  border-top-color: blue!important;
  border-width: 0.1px;
  width: 380px;
  height: 40px;
}

</style>
