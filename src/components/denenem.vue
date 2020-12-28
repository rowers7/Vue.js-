<template>
<div class="header">
  <div class="first_row">
    <div id="ust_ana_menuler_yerlesimi">
      <div class="lefticons">
        <span class="ws_x"><a target="_blank" href="https://api.whatsapp.com/send?phone=905425323590&amp;text=">0542 532 35 90</a></span>
        <span class="ms_x">info@ebrarbilgisayar.com</span>
      </div>
      <div class="righticons">
        <ul id="ust_ana_menu" class="ust_ana_menu"><li>
          <a href="/sihirbaz" target="_self" title="Toplama Pc"><span>Toplama Pc</span></a></li>
          <li>
            <a href="/siparis-takibi" target="_self" title="Sipariş Takibi"><span>Sipariş Takibi</span></a></li>
          <li>
            <a href="/kiyaslama-listem" target="_self" title="Kıyaslama Listesi"><span>Kıyaslama Listesi</span></a></li>
          <li>
            <a href="/musteri-hizmetleri" target="_self" title="Yardım"><span>Yardım</span></a></li>
          <li>
            <a href="/iletisim" target="_self" title="İletişim"><span>İletişim</span></a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="row2">
    <div id="logo_ve_uyelik">
      <div class="logo">
        <a href="/?ref=logo" title="Laptop, Gaming Notebook, Toplama Pc, Oem Parçalar&nbsp;| Ebrar Bilgisayar"><img src="https://s.eticaretbox.com/466/img/logo.png?q=87223238" alt="Laptop, Gaming Notebook, Toplama Pc, Oem Parçalar&nbsp;| Ebrar Bilgisayar"></a>
      </div>
      <div id="ust_arama_kismi">
        <form method="get" action="/arama" name="urun_arama_form" id="urun_arama_form">
          <select id="urun_arama_select" name="kat">
            <option value="0">Tüm Kategoriler</option>
            <option value="189">Notebook</option><option value="301">Bilgisayar</option><option value="183">Bilgisayar Bileşenleri</option><option value="329">Veri Depolama</option><option value="154">Monitörler</option><option value="4">Çevre Birimleri</option><option value="195">Yazıcılar</option><option value="100">Yazılım</option>
          </select>
          <input type="hidden" name="tip" value="1">
          <input id="urun_arama_input" type="text" name="word" value="" placeholder="Ürün arayın..." autocomplete="off" class="ac_input">
          <input id="urun_arama_submit" type="submit" name="submit" value="ARA" >
        </form>
      </div>
      <div id="ust_sepet_kismi_container">
        <!--<div class="siparis_holder"><span class="tooltiptext2">Sipariş Takibi</span><a href="/siparis-takibi" class="siparis_ico"></a></div>
        <div class="kiyasla_holder"><span class="tooltiptext">Kıyaslama Listesi</span><a href="/kiyaslama-listem" class="kiyaslama_ico"></a></div>-->
        <div id="ust_uyelik_alani">
          <div style="" class="uyelikisim1"></div>

          <div class="uyelik_butonlar">
            <div class="uyelikarrow"></div>
            <ul id="ust_uye_giris_ul">
              <div class="butonlarrow">
                <li><a class="link_1" href="/uye-girisi"><span>ÜYE GİRİŞİ</span></a></li>
                <li><a class="link_2" href="/uye-ol"><span>ÜYE OL</span></a></li>
              </div>


              <li class="facebook_login_button"><a href="//social.platinmarket.com/facebook/login?params=islem%3Dsocial%5Flogin&amp;token=5f133192760d8c7d317b69afc2cc52de2054bcfd3b9a5c1559785eda1acd4027"><b>facebook</b> login</a></li>

            </ul>
          </div>

        </div>
        <div id="ust_sepet_kismi">

          <a class="link_1 sepet_link" href="/alisveris-sepetim" title="">
            <span>0</span>
          </a>
          <div class="mini_sepetim_container">

          </div>
        </div>
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




.first_row{
  border-bottom:1px solid #299DEE;
  height: 40px;
}
.header {
  background-color: #0B8FEC;
}
.lefticons{
  display: flex;
  align-items: center;
}
.lefticons span{
  color:#fff;
  font-size:12px;
}
.righticons span{
  color:#fff;
  font-size:12px;
}
.lefticons .ws_x{

  font-weight:600;
  margin-right:30px;
  padding-left:20px;
}
.lefticons .ws_x a{
  font-size:12px;
  color:#fff;
}
.lefticons .ms_x{

  padding-left: 20px;
}

.ucan_header {
  width: 100%;
  height:56px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8888;
  display: none;
}


#toTop {
  width: 78px;
  height: 30px;
  position: fixed;
  bottom: 100px;
  right: 15px;
  cursor: pointer;
  z-index: 9999;
}
.canli_destek_row{

  width: 140px;
  height: 38px;
  position: fixed;
  bottom: 40px;
  right: 15px;
}
.kiyasla_holder{
  margin:-13px 30px 0px -10px;
  position:relative;
}
.kiyaslama_ico{

  width: 22px;
  height: 22px;
  display:block;
  transition:none;
}


.siparis_holder{
  margin:-13px 38px 0px -10px;
  position:relative;
}
.siparis_ico{

  width: 22px;
  height: 22px;
  display:block;
  transition:none;
}


.tooltiptext2,
.tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #0f205a;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 30px;
  left: -45px;
  font-size: 12px;
}

.siparis_holder:hover .tooltiptext2 {
  visibility: visible;
}
.kiyasla_holder:hover .tooltiptext {
  visibility: visible;
}


.bannerline h1.baslik {
  width: 1160px;
  margin: 0 auto;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 4px;
  text-align: left;
}

.bannerline p.baslik {
  display:none;
}

#PM_ust {
  margin-bottom: 30px;
  position: -webkit-sticky;
  position: sticky;
  top:-120px;
  z-index:999;
}

#logo_ve_uyelik {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height:80px;
}

#logo_ve_uyelik .guvenli{
  display:flex;
  align-items:center;
}

#logo_ve_uyelik .guvenli .g_gorsel{

  width:36px;
  height:40px;
}
#logo_ve_uyelik .guvenli .g_right{
  margin-left: 10px;
}
#logo_ve_uyelik .guvenli .g_right h4{
  font-size: 15px;
}



#logo_ve_uyelik .logo a img{
  max-height:100px;
  max-width:280px;
}


.row2 {
  width: 1200px;
  position: relative;
  margin: 0 auto;
}

.row3{
  border-bottom:1px solid #E0E5EF;
}

.row4 {
  display:none;
}

#ust_ana_menuler_yerlesimi {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:1200px;
  height: 45px;
  margin:0 auto;
}

#ust_ana_menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

#ust_ana_menu li {
  flex-grow:1;
  float: left;
  margin: 0;
}

#ust_ana_menu li:first-child {
  padding-left: 0;
}

#ust_ana_menu li a {
  text-decoration: none;
  display: flex;
  padding: 10px;
  font-size: 12px;
  align-items: center;
}
#ust_ana_menu li a:before {
  content:'\25A0';
  padding:0px 5px;
  font-size:8px;
  color: white;

}

li::marker {
  content: none;
}



#ust_uyelik_alani {
  text-align: left;
  cursor: pointer;
  margin-bottom: 10px;
  height: 45px;
  padding-bottom: 10px;
  margin-top: 30px;
  padding-right:10px;
}


.uyelikisim2{
  text-align: center;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px 12px;
}

.uyelikisim1{
  width:23px;
  height:22px;
}

.uyelikisim1 i.right,
.uyelikisim2 i.right{
  margin-left:2px;
}
.uyelikisim1 i.left,
.uyelikisim2 i.left{
  margin-right:6px;
  font-size: 16px;
}


.uyelikisim2 > span{
  font-weight: 600;
}



.uyelik_butonlar{
  position:absolute;
  top:90px;
  right:0;
  visibility:hidden;
  opacity:0;
  margin:0;
  padding: 40px 30px 30px 30px;
  z-index: 9999;
  transition: all 0.20s ease-in-out;
  transition-delay:200ms;
  width:240px;
}

.uyelikarrow {

  height: 13px;
  position: absolute;
  top: -9px;
  right: 60px;
  width: 26px;
}

#ust_uyelik_alani:hover #ust_uye_panel_ul,
#ust_uyelik_alani:hover .uyelik_butonlar{
  visibility:visible;
  opacity:1;
  top:96px;
}

#ust_uye_giris_ul .facebook_login_button a{
  border-radius:2px;
  padding:13px 12px;
}


#ust_uye_giris_ul {
  display: block;
  margin: 0;
  padding: 0;
}

#ust_uye_panel_ul{
  text-align: center;
  display: block;
}

#ust_uye_panel_ul > li {
  display: block;
  text-align:center;
}

#ust_uye_giris_ul > li {
  display: block;
  text-align:center;
}

#ust_uye_giris_ul > li.facebook_login_button {
  margin: 40px -30px -30px;
  background: #0B8FEC;
  padding:30px;
}

#ust_uye_giris_ul li a.link_2 i
#ust_uye_giris_ul li a.link_1 i {

}

.butonlarrow{
  background: #FFFFFF;
  box-shadow: 0px 10px 20px rgba(129, 129, 147, 0.12);
  border-radius: 2px;
}
.butonlarrow li{

}
.butonlarrow li:first-child{
  border-bottom: 1px solid #ECEFF2;
}
.butonlarrow li a{
  color:#898F9B;
  height: 18px;
  font-weight: 500;
  text-align:center;
}
.butonlarrow li a.link_1{
  border-top-left-radius:2px;
  border-top-right-radius:2px;
}
.butonlarrow li a.link_2{
  border-bottom-left-radius:2px;
  border-bottom-right-radius:2px;
}
.butonlarrow li a:hover{
  background:#ECEFF2;
}

#ust_uye_giris_ul li a  span{
  display: inline-block;
  vertical-align: middle;
}

#ust_uye_panel_ul > li > a {
  text-decoration: none;
  display: block;
  padding: 10px 12px;
  border-radius:2px;
  margin-bottom:10px;
}
#ust_uye_panel_ul > li:last-child > a {
  margin-bottom:-2px;
}

#ust_uye_giris_ul li a {
  text-decoration: none;
  display: block;
  padding: 16px 12px;
}


#ust_uye_panel_ul > li.uye_ismi {
  padding:6px 0px;
}

#ust_uye_panel_ul > li.uye_ismi span {
  font-weight: 700;
}

#ust_uye_panel_ul div {
  display: none;
  width: 160px;
  position: absolute;
  text-align: left;
  z-index: 99999;
  left: -128px;
  top: 0px;
  height: 257px;
}

#ust_uye_panel_ul div li {
  font-weight: 400;
  display: block;
}

#ust_uye_panel_ul div li a {
  display: block;
  border-left: none;
  padding: 5px 12px 10px 12px;
  font-size:12px;
}



#ust_arama_kismi {
  font-size: 0;
  line-height: 0;
  padding: 0;
}

#urun_arama_input {
  width: 400px;
  float: left;
  font-size: 12px;
  padding: 0px 15px;
  border-radius: 0px;
  background: #fff;
  height: 42px;
  border: none;

}
::-webkit-input-placeholder{
  color:#8D99B1;
}

#urun_arama_submit {
  cursor: pointer;
  background-color:#F4C82D;
  padding: 13px 40px;
  background-repeat:no-repeat;
  background-position:center;
  border-top-left-radius:0px;
  border-bottom-left-radius:0px;
  border-top-right-radius:2px;
  border-bottom-right-radius:2px;
  border:none;
  height:42px;


}
#urun_arama_submit:hover {

  background-color: #CCAB39;
}
#urun_arama_select {
  font-size: 12px;
  padding: 12px 15px;
  float: left;
  border-right: none;
  width:180px;
  height:42px;
  border-top-left-radius:2px;
  border-bottom-left-radius:2px;
  border-top-right-radius:0px;
  border-bottom-right-radius:0px;
  background-color:#ECEFF2;
  color:#8D99B1;
  border:none;
}

.sepet_link {
  font-size: 14px;
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: center;
}



.sepet_link label{
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  font-weight: 600;
  margin-left:8px;
}
.sepet_link label i{
  margin-left:5px;
}

.sepet_link span {
  border-radius: 30px;
  width: 17px;
  height: 17px;
  line-height: 17px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  font-weight: 600;
  position: absolute;
  left: 25px;
  top: 5px;
}

.sepet_link:before {
  content:'';

  width:22px;
  height:22px;
  display:inline-block;
}
.sepet_link:hover:before {
  content:'';

}

#ust_sepet_kismi_container {
  text-align: right;
  position:relative;
  display:flex;
  align-items:center;
  margin-bottom:-13px;
}

.mini_sepetim_container{
  padding: 29px 0px;
}

#ust_sepet_kismi {
  position:relative;
  margin-top:45px;
  padding: 0px 10px 0px 10px;
  margin-left:10px;
}

#ust_sepet_kismi div.mini_sepetim {
  display: none;
  min-width: 300px;
  position: absolute;
  right: 0px;
  z-index: 999999;
  border-radius:0px;
}

.sepet_bos {
  padding: 6px 12px;
}

#ust_sepet_kismi #sepet_detay_mini .sepet_urunler {
  padding-top:30px;
}
#ust_sepet_kismi #sepet_detay_mini .urun {
  display: block;
  padding: 20px;
  margin: 0px;
}
#ust_sepet_kismi #sepet_detay_mini .urun:hover {
  box-shadow:none;
}

#ust_sepet_kismi #sepet_detay_mini .urun .alt_urun{
  font-size: 12px;
  border-radius: 4px;
  padding: 2px 5px;
}

#ust_sepet_kismi #sepet_detay_mini .urun:first-child {
  padding-top: 0;
}

#ust_sepet_kismi #sepet_detay_mini .urun .urun_resim {
  float: left;
  margin-right:15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.08);
}
#ust_sepet_kismi #sepet_detay_mini .urun .urun_resim  img{
  width:90px;
  height:auto;
}

#ust_sepet_kismi #sepet_detay_mini .urun .urun_isim_icerik .urun_isim {
  min-width: 100px;
  max-width: 350px;
  overflow: hidden;
  text-align:left;
  font-weight:500;
  font-size:12px;
}

#ust_sepet_kismi #sepet_detay_mini .urun .urun_fiyat {
  display: block;
  margin-top: 15px;
  float: left;
  line-height: 18px;
  text-align: left;
  white-space: nowrap;
  vertical-align: baseline;
  font-weight: 500;
  width: 140px;
}

#ust_sepet_kismi #sepet_detay_mini .urun .urun_fiyat strike {
  color: #afb8c7;
}

#ust_sepet_kismi #sepet_detay_mini .sepet_toplamlar {
  margin-top: 15px;
  padding: 15px 0;
}

#ust_sepet_kismi #sepet_detay_mini .sepet_toplamlar td {
  padding: 3px 6px;
}

#ust_sepet_kismi #sepet_detay_mini .sepet_toplamlar .baslik {
  text-align: right;
}

#ust_sepet_kismi #sepet_detay_mini .sepete_git_buton {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  padding:30px 20px;
  text-align: center;
}

#ust_sepet_kismi #sepet_detay_mini .sepete_git_buton > a {
  font-size: 13px;
  padding: 14px 30px;
  font-weight: 500;
}

#ust_sepet_kismi #sepet_detay_mini .sepete_git_buton > a.sepetime_a {
  margin-bottom:20px;
}


#ust_ek_menuler_yerlesimi {
  clear: both;
  display: block;
  width: 1200px;
  position: relative;
  margin: 0 auto;
}

.op2 #ust_ek_menu_2{
  width:980px;
}

#ust_ek_menuler_yerlesimi.op2 {
  width: 980px;
  padding-left: 220px;
}

#ust_ek_menuler_yerlesimi .home {
  display: table-cell;
  float: left;
  font-size: 32px;
  padding: 12px 16px;
}

#ust_ek_menu_2 {
  list-style-type: none;
  display: table-cell;
  width: 1200px;
  margin: 0;
}

#ust_ek_menu_2 li.tum_kategoriler {
  width:220px;
}

#ust_ek_menu_2:after {
  content: '';
  display: block;
  clear: both;
}

#ust_ek_menu_2 li a {
  font-size: 14px;
  text-decoration: none;
  display: block;
  line-height: 24px;
  padding: 16px 20px;
}



#ust_ek_menu_3 li a {
  font-size: 14px;
  text-decoration: none;
  display: block;
  line-height: 24px;
  padding: 16px;
}

#ust_ek_menu_4 {
  list-style-type: none;
  float: left;
  clear: left;
  margin: 0;
}


#ust_ek_menu_5 {
  display: none;
  list-style-type: none;
  float: left;
  clear: left;
  margin: 0;
}

#kayan_yazi_alani {
  clear: both;
  display: block;
  margin-top: 20px;
  border-radius:4px;
  padding: 10px;
  width:1180px;
  margin:0 auto;
  overflow:hidden;
  margin-bottom:20px;
}

#kayan_yazi_alani.darorta {
  display: block;
  border-radius:4px;
  padding: 10px;
  width: 698px;
  overflow: hidden;
  margin-bottom:20px;
}

.acilirmenu{
  width:1200px;
  margin: 0 auto;
}

.acilirmenu > ul{
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content:flex-start;
  flex-wrap: wrap;
}

.acilirmenu > ul > li > a{
  font-size: 13px;
  font-weight:500;
  text-decoration: none;
  display: block;
  line-height: 24px;
  padding: 13px 5px;
  text-align:center;
}


.acilirmenu > ul > li{
  flex-grow: 1;
}

.acilirmenu > ul > li > div.menu_container{
  background-color: #FFF;
  position: absolute;
  left: 0;
  margin-top: -10px;
  width:1200px;
  z-index: 9991;
  visibility: hidden;
  opacity:0;
  transition: all 0.20s ease-in-out;
  display: flex;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #e0e5ef;
  transition-delay:500ms;

}


.acilirmenu > ul > li:hover > div.menu_container {
  visibility: visible;
  margin-top: 0;
  opacity:1;
}
.acilirmenu > ul > li > ul > li:hover > ul {
  visibility: visible;
  left:220px;
  opacity:1;
}


.menum {
  width: 220px;
  margin-bottom: 20px;
  margin-right: 5px;
  position: relative;
}

.menum .baslik {
  font-size: 16px;
  padding: 17px 15px;
  font-weight: 400;
}

.menum .baslik:before {
  display: inline-block;
  font-family: FontAwesome!important;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  content: "\f107";
  font-size: 18px;
  margin-right: 10px;
}

.menum > ul {
  border-width: 1px;
  border-style:solid;
  border-top: none;
  border-bottom-left-radius:6px;
  border-bottom-right-radius:6px;
}

.menum > ul > li > a,
.menum > ul > li > ul > li > ul > li > a {
  border-bottom-width: 1px;
  border-style:solid;
  text-decoration: none;
  display: block;
  position: relative;
  padding: 14px 15px;
  transition: all 0.20s ease-in-out;
  font-size:13px;
}



.menum > ul > li > ul {
  position: absolute;
  z-index: 9991;
  visibility: hidden;
  border-width: 1px;
  border-style:solid;
  left: 200px;
  margin-top: -48px;
  opacity:0;
  transition: all 0.20s ease-in-out;
  border-top-right-radius:6px;
  border-bottom-right-radius:6px;
}

.menum > ul > li > ul > li > ul {
  position: absolute;
  z-index: 9991;
  visibility: hidden;
  border-width: 1px;
  border-style:solid;
  left: 200px;
  margin-top: -48px;
  opacity:0;
  transition: all 0.20s ease-in-out;
  border-top-right-radius:6px;
  border-bottom-right-radius:6px;
}

.menum > ul > li > ul > li > ul > li > ul{
  display:none;
}

.menum > ul > li:last-child > ul {
  margin-top: -40px;
}

.menum > ul > li > ul > li:last-child > ul {
  margin-top: -40px;
}

.menum > ul > li:hover > ul {
  visibility: visible;
  left: 219px;
  opacity:1;
}
.menum > ul > li > ul > li:hover > ul {
  visibility: visible;
  left: 249px;
  opacity:1;
  overflow-y:auto;
}

.menum > ul > li > ul > li > a {
  display: block;
  border-bottom-width: 1px;
  border-style: solid;
  padding: 14px 12px;
  font-size: 13px;
}

.menum > ul > li:last-child > a {
  border-bottom: none;
}
.menum > ul > li > ul > li:last-child > a {
  border-bottom: none;
}

.menum > ul > li > ul > li > ul > li,
.menum > ul > li > ul > li {
  width: 250px;
}


.arrow_right {
  font-size: 16px;
  position: absolute;
  right: 0px;
  padding: 8px 12px;
  float: right;
  margin-top: -8px;
  transition: all 0.20s ease-in-out;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.arrow_down {
  font-size: 16px;
  padding-left: 5px;
}

.ustmenu {
  width: 1200px;
  overflow: hidden;
  height: 45px;
}

.ustmenu ul {
  width: 1200px!important;
}

.ust_container,
.menu_uyelik {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

#ust_uye_giris_ul > li a.link_1,
#ust_uye_giris_ul > li a.link_2 {
  padding: 10px 12px;
  border-radius: 4px!important;
  margin-bottom: 10px;
}

#ust_uye_giris_ul > li a.link_1 i,
#ust_uye_giris_ul > li a.link_2 i {
  margin-right: 8px;
}

#ust_sepet_kismi #sepet_detay_mini h1,
#ust_sepet_kismi #sepet_detay_mini .urun .urun_isim_icerik .uyeye_ozel_indirim_yazisi,
#ust_sepet_kismi #sepet_detay_mini .urun .urun_isim_icerik .kampanya_yazisi,
#ust_sepet_kismi #sepet_detay_mini .urun .urun_isim_icerik .urun_puan,
.PopupSL > span,
.ustmenu ul li ul {
  display: none!important;
}

.ustmenu ul li {
  float: left;
}

#ust_ek_menu_2 li,
#ust_ek_menu_3 li,
#ust_ek_menu_4 li,
#ust_ek_menu_5 li {
  list-style-type: none;
  float: left;
  margin: 0;
}

#ust_ek_menu_2 li a span,
#ust_ek_menu_3 li a span,
#ust_ek_menu_4 li a span,
#ust_ek_menu_5 li a span {
  text-decoration: none;
}

#ust_ek_menu_4 li a,
#ust_ek_menu_5 li a {
  font-size:12px;
  font-weight:bold;
  text-decoration: none;
  display: block;
  padding: 7px 8px 7px 2px;
}

#ust_ek_menuler_yerlesimi #PopupMenu1{
  margin-top: -167px!important;
  border-top-right-radius: 0px!important;
  border-top-left-radius: 0px!important;
  margin-left: -20px;
}

#ust_ek_menuler_yerlesimi .Popup{
  width:220px!important;
  border-radius: 4px;
  padding:8px!important;
}

#ust_ek_menuler_yerlesimi .Popup li a{
  font-family: 'Montserrat', sans-serif!important;
  font-size:14px!important;
  border-radius:0px!important;
  padding:4px 6px!important;
}

#ust_ek_menuler_yerlesimi .Popup li a.PopupO .PopupS{
  right:6px!important;
}

#ust_ek_menuler_yerlesimi .PopupS{
  transition: all 0.20s ease-out;
  height:15px!important;
  width:10px!important;
  background-image:none!important;
  overflow:visible!important;
}

#ust_ek_menuler_yerlesimi .PopupS:before{
  display: inline-block;
  font-family: FontAwesome!important;
  font-style: normal;
  font-weight: normal;
  font-size:18px;
  height:15px!important;
  line-height: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content:"\f105";
}

.PopupSL > span {
  display:none;
}

.tum_kategoriler a:after{
  margin-left:6px;
  display: inline-block;
  font-family: FontAwesome!important;
  font-style: normal;
  font-weight: normal;
  font-size:18px;
  height:15px!important;
  line-height: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content:"\f107";
}


.menu_sol{
  flex: 1 1 25%;
  padding-left:30px;
}

.menu_sol ul li{
  line-height: 40px;
}

.menu_sol ul li a{
  font-weight: 500;
}

.menu_sag{
  display: flex;
  flex-direction: row;
  flex: 1 1 75%;
}
.menu_sag .urun{
  flex:1 1 25%;
  border-left:1px solid #E6E9EB;
  margin:0px;
  padding-bottom:35px;
}
.menu_sag .urun .urun_resmi{
  height:190px;
}
.menu_sag .urun .urun_resmi a{
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}
.menu_sag .urun .urun_resmi a img{
  height: auto;
  max-width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin-top: auto;
  margin-bottom: auto;
}



.menu_sag .urun {
  text-align: center;
  overflow: hidden;
  position: relative;
  transition: all linear 0.2s;
  padding:15px;
  z-index:0;
}


.menu_sag .urun:hover {
  box-shadow: 0px 8px 16px 0px rgba(208, 213, 223, 0.5);
  z-index:1;
}

.menu_sag .urun_ismi {
  text-align: left;
  color: #353A42;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 25px;
  height: 36px;
  overflow: hidden;
}

.menu_sag .tanitim_yazisi {
  text-align: left;
  line-height: 22px;
  color: #676D78;
  font-size: 10px;
  margin-bottom:20px;
}


.menu_sag .urun_ismi a {
  font-size:13px;
}

.menu_sag .urun_resmi{
  transition: all 0.20s ease-in-out;
  margin-bottom:10px;
}

.menu_sag .urun_resmi a {
  display: block;
  width: 100%;
}

.menu_sag .urun_resmi a img{
  height:auto;
  max-width: 100%;
}
div.urun.urunfixed div.urun_resmi a img{
  max-width:300px;
  height:auto;
}

.menu_sag .urun_stok_yok {
  font-size: 12px;
  padding: 0px 12px;
  border-radius: 30px;
  position: absolute;
  top: 90px;
  left: 15px;
  height: 25px;
  line-height: 25px;
}

.menu_sag .urun_fiyatlar {
  display: flex;
  flex-direction: row;
  align-items: center;
  width:100%;
}

.menu_sag .indirimsiz_urun_fiyati {
  font-size: 14px;
  margin-left: 5px;
  text-decoration: line-through;
  display: inline-block;
  padding: 2px 0;
}

.menu_sag .indirimsiz_urun_kdvdahil_fiyati {
  font-size: 14px;
  text-decoration: line-through;
  display: inline-block;
  padding: 0;
  color: #676D78;
}

.menu_sag .urun_fiyati {
  font-size: 14px;
  display: inline-block;
  margin-left: 5px;
}

.menu_sag .urun_kdvdahil_fiyati {
  font-size: 18px;
  font-weight:700;
  display: inline-block;
  margin-right: 10px;
  padding: 0;
  color: #0B8FEC;
}

.menu_sag .urun_fiyati_yok {
  font-size: 16px;
  padding: 6px 12px;
}


.menu_sag .urun_butonlar a.urun_incele:before {
  content: "\f002";
}


.menu_sag .butonveikonlar{
  display: flex;
  align-items: center;
}


.menu_sag .indirimli_urun {
  position: absolute;
  top: 90px;
  left: 15px;
  font-size: 12px;
  width: 50px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  border-radius: 30px;
}

.menu_sag .urun_ikonlar {
  display:none;
}


div.urun img.yeni_urun_ikon {
  position: absolute;
  top: 90px;
  right: 15px;
  display: block;
  width:inherit;
}

.menu_sag .urun_ikonlar i {
  width: 24px;
  height: 25px;
  line-height:24px;
  border-radius:4px;
  overflow: hidden;
  display: block;
  position: relative;
  transition: all 0.20s ease-in-out;
  margin:5px 3px;
  margin-bottom:10px;
}




.menu_sag .urun_butonlar img,
.menu_sag .urun_butonlar a.urun_incele,
.menu_sag .urun_ikonlar img,
.menu_sag .urun_ikonlar .yeni_urun_ikon_a {
  display: none;
}



.urun_butonlar.block_button a{
  display:block;
}

.back_x{
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}



.platintelif{
  display: inline-block;
  margin-left: -250px;
}
.platintelif a{

  width: 145px;
  height: 30px;
  display:block;
}

</style>
