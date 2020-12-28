<template>
<div>
  <div class="simplePagerContainer"><div class="yorumlar">

    <div class="yorum simplePagerPage1" style="">
      <p class="baslik">
									<span class="isim" itemprop="author">
									<img src="images/yorum.PNG" alt="">Umut Aydoğdu
									</span>
        <span class="tarih"><time itemprop="datePublished" datetime="2018-01-31"><i>31.01.2018</i></time></span>
      </p>
      <div class="icerik" itemprop="description">
        güvenilir ve çok temiz f/p ürünü
      </div>
    </div>

    <div class="yorum simplePagerPage1" style="">
      <p class="baslik">
									<span class="isim" itemprop="author">
									<img src="images/yorum.PNG" alt="">hasan erdem
									</span>
        <span class="tarih"><time itemprop="datePublished" datetime="2018-01-24"><i>24.01.2018</i></time></span>
      </p>
      <div class="icerik" itemprop="description">
        Ürün sıfır poşetinde aynı ürün teşekkürler
      </div>
    </div>

    <div class="yorum simplePagerPage1" style="">
      <p class="baslik">
									<span class="isim" itemprop="author">
									<img src="images/yorum.PNG" alt="">ahmet toker
									</span>
        <span class="tarih"><time itemprop="datePublished" datetime="2018-01-24"><i>24.01.2018</i></time></span>
      </p>
      <div class="icerik" itemprop="description">
        Beğendim Sessiz çalışıyor
      </div>
    </div>

    <div class="yorum simplePagerPage2" style="display: none;">
      <p class="baslik">
									<span class="isim" itemprop="author">
									MURAT biçer
									</span>
        <span class="tarih"><time itemprop="datePublished" datetime="2018-01-19">19.01.2018</time></span>
      </p>
      <div class="icerik" itemprop="description">
        24 saat içinde elime ulaştı.Bilgisayara takıp, Windows kurulumunu yaptım. oldukça hızlı
      </div>
    </div>

    <div class="yorum simplePagerPage2" style="display: none;">
      <p class="baslik">
									<span class="isim" itemprop="author">
									kaan ekiz
									</span>
        <span class="tarih"><time itemprop="datePublished" datetime="2018-01-16">16.01.2018</time></span>
      </p>
      <div class="icerik" itemprop="description">
        Hızlı ve temiz kargo paketler sağlam ürün sorunsuz
      </div>
    </div>

    <div class="yorum simplePagerPage2" style="display: none;">
      <p class="baslik">
									<span class="isim" itemprop="author">
									MEHMET KURU
									</span>
        <span class="tarih"><time itemprop="datePublished" datetime="2017-12-29">29.12.2017</time></span>
      </p>
      <div class="icerik" itemprop="description">
        Kendi sınıfında en iyilerinden biri. Paketlemesi gayet iyiydi hiçbir sıkıntı olmadan kullanmaya başladım
      </div>
    </div>

    <div class="yorum simplePagerPage3" style="display: none;">
      <p class="baslik">
									<span class="isim" itemprop="author">
									Kemaş Hayat
									</span>
        <span class="tarih"><time itemprop="datePublished" datetime="2017-05-16">16.05.2017</time></span>
      </p>
      <div class="icerik" itemprop="description">
        hayır uyumlu değil. masaüstü diskibu. sen 2,5 hdd bakmalaısın.<br>http://www.ebrarbilgisayar.com/sabit-diskler-pmk184?ob=1&amp;oz=185_1492
      </div>
    </div>

    <div class="yorum simplePagerPage3" style="display: none;">
      <p class="baslik">
									<span class="isim" itemprop="author">
									Misafir
									</span>
        <span class="tarih"><time itemprop="datePublished" datetime="2015-05-18">18.05.2015</time></span>
      </p>
      <div class="icerik" itemprop="description">
        Asus X550JK-X0012D notebook için bu HDD uyumlu mu ?
      </div>
    </div>

    <div class="yorum simplePagerPage3" style="display: none;">
      <p class="baslik">
									<span class="isim" itemprop="author">
									Güven Akın
									</span>
        <span class="tarih"><time itemprop="datePublished" datetime="2015-05-16">16.05.2015</time></span>
      </p>
      <div class="icerik" itemprop="description">
        Asus X550JK-X0012D 8GB modeli için bu hdd uyumlu mu
      </div>
    </div>

  </div><ul class="simplePagerNav"><li class="currentPage simplePageNav1"><a rel="1" href="#"><i>1</i></a></li><li class="simplePageNav2"><a rel="2" href="#"><i>2</i></a></li><li class="simplePageNav3"><a rel="3" href="#"><i>3</i></a></li></ul></div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>

.simplePagerPage1 {
  border-style: solid;
  border-width: 1px;
  border-color: #ECEFF2;
  width: 760px;
  margin-left: 50px;
}

.simplePageNav1,.simplePageNav2,.simplePageNav3 {
  list-style:none;
  color:yellow!important;
}




.urun_detay_tablar *{
  font-family:'Montserrat',sans-serif!important;
}
.katgorsel {
  box-shadow: 0px 6px 12px #ECEFF2;
}

.ustdetay{
  margin-bottom:0px!important;
}
.detayust_row{
  background:#F2F4F7;
  padding-top:30px;
  padding-bottom:40px;
}
.d_toplayici{
  float: left;
  width: 598px;
  border: 1px solid #eceff2;
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin-bottom:30px;
}

.d_toplayici a.link_4{
  padding-left: 25px;
  display: inline-block;
  vertical-align: middle;
  font-weight:500;
}
.staryorum{

}

.staryorum .s_first{
  padding-left:25px;
  margin-right:30px;
  font-size:14px;
  color:#5f6671;
}

.staryorum .s_second{
  padding-left:25px;
  font-size:14px;
  color:#5f6671;
}

.staryorum .s_second:hover,
.staryorum .s_first:hover{
  color:#fc8f00;
}



.urun_ozeelik_aciklama{
  font-size: 12px;
  padding: 2px 8px;
  display: inline-block;
  vertical-align: middle;
}



.urun_detay_kategori_agaci {
  margin: 0;
  height: 60px;
  overflow: hidden;
  width: 1160px;
  margin: 0 auto;
  text-align: left;
  padding: 0px 20px;
  box-shadow: 0px 6px 12px #ECEFF2;
  margin-bottom:30px;
}

.urun_detay_kategori_agaci ul {
  margin: 0 auto;
  padding: 0;
  width:1200px;
  padding:21px 0px;

}

.urun_detay_kategori_agaci ul li {
  display: inline-block;
  padding-right:8px;
}


.urun_detay_kategori_agaci ul li:after {
  content:'/';
  font-size:13px;
  margin-left:10px;
}

.urun_detay_kategori_agaci ul li:last-child:after {
  content:'';
}

.urun_detay_kategori_agaci ul li h1 {
  display: inline-block;
  font-weight: bold;
  font-size: 13px;
  padding: 0;
  margin: 0;
}

.urun_detay_kategori_agaci ul li.first {
  background: none;
  padding-left: 0px;
}

.urun_detay_kategori_agaci ul li a {
  text-decoration: none;
  font-size: 13px;
}

#PM_urun_detayi .urun_bilgiler{
  display: flex;
  flex-direction: row;
  width: 1200px;
  margin:0 auto;
  box-shadow: 0px 6px 12px #ECEFF2;
}


#PM_urun_detayi > div.icerik {

}

#PM_urun_detayi h1.urun_ismi {
  font-size: 18px;
  font-weight: 600;
  float: left;
  margin:20px 0px;
  width:630px;
}
#PM_urun_detayi #aciklamam {
  font-size: 10px;
  float:left;
  color:#676D78;
  margin-bottom:20px;
  margin-top:-10px;
  width:630px;
}

#PM_urun_detayi #aciklamam span {
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  margin-bottom:5px;
}

#PM_urun_detayi div.uyeye_ozel_kampanya_bar {
  display: none;
  margin-bottom: 10px;
  margin-top: -15px;
}

#PM_urun_detayi div.uyeye_ozel_kampanya_bar div.uyeye_ozel_kampanya_aciklama {
  padding: 15px;
  width: 1170px;
  margin: 0 auto;
  margin-bottom: 25px;
  margin-top: 40px;
  background: #fcdb67;
  color: #333;
  box-shadow: 0px 6px 12px #fcdb6757;
}

#PM_urun_detayi div.urun_detay_sol {
  float: left;
  display: block;
  text-align: center;
  width: 450px;
  padding:30px;
  margin-right:30px;
  border-right-width:1px;
  border-right-style:solid;
}

#PM_urun_detayi div.urun_detay_sol div.urun_resmi {
  width:450px;
  height:450px;
  overflow: hidden;
  background: #fff;
}

#PM_urun_detayi div.urun_detay_sol div.urun_resmi a {
  position: relative;
  width:450px;
  height:450px;
  display: none;
}
#PM_urun_detayi div.urun_detay_sol div.urun_resmi a img{
  cursor: -moz-zoom-in;
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
}

.zoomPad {
  position: relative;
  float: left;
  z-index: 99;
  cursor: pointer;
}

.zoomPreload {
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  z-index: 110;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 49px;
  padding: 8px;
}

.zoomPup {
  position: absolute;
  z-index: 101;
  cursor: pointer;
  opacity:0.8;
}

.zoomOverlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 101;
}

.zoomWindow {
  position: absolute;
  left: 110%;
  top: 40px;
  height: auto;
  z-index: 110;
  background: #fff;
}

.zoomWrapper {
  position: relative;
  z-index: 110;
}

.zoomWrapperTitle {
  display: block;
  height: 18px;
  line-height: 18px;
  width: 100%;
  overflow: hidden;
  text-align: center;
  font-size: 10px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 120;
}

.zoomWrapperImage {
  display: block;
  position: relative;
  z-index: 110;
}

.zoomWrapperImage img {
  border: 0;
  display: block;
  position: absolute;
  z-index: 101;
}

.zoomIframe {
  z-index: -1;
  position: absolute;
  display: block;
}

#PM_urun_detayi div.urun_resmi_kucuk {
  text-align: left;
  cursor: default;
  position: relative;
  margin-top: 25px;
  width: 452px;
  overflow: hidden;
  padding-left: 5px;

}

.modal-xl,
.modal-xl .modal-content {
  width: 1200px !important;
}

#PM_urun_detayi div.urun_resmi_kucuk div.urun_resmi_kucuk_container{
  margin: 0 auto;
}

#PM_urun_detayi div.urun_resmi_kucuk,
#PM_urun_detayi div.urun_resmi_kucuk div.urun_resmi_kucuk_container,
#PM_urun_detayi div.urun_resmi_kucuk div.urun_resmi_kucuk_content {
  height:70px;
}

#PM_urun_detayi div.urun_resmi_kucuk div.urun_resmi_kucuk_container {
  position: relative;
  left: 0;
}

#PM_urun_detayi div.urun_resmi_kucuk div.urun_resmi_kucuk_content {
  display: block;
  float:left;
}

#PM_urun_detayi div.urun_resmi_kucuk img {
  border:none;
  width: 70px;
  height: 70px;
  cursor: pointer;
  margin-right:20px;
  display:block;
  opacity:1!important;
}

#PM_urun_detayi div.urun_resmi_kucuk img.secili {
  border:none;
}

#PM_urun_detayi div.urun_para_puan {
  display:none;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat {
  display: block;
  text-align: left;
  margin-bottom:40px;
  width: 600px;
  float:left;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat div.urun_fiyati,
.uye_indirimli_urun_fiyati {
  font-size: 26px;
  font-weight: 700;
  margin-right: 10px;
  display: inline-block;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat div.indirimsiz_urun_fiyati,
.urun_fiyati_ozel {
  text-decoration:line-through;
  font-size:16px!important;
  display:inline-block;
  font-weight:normal!important;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat div.indirimliler_gelsin {
  padding:10px 0px;
  font-size:14px;
}

.urun_taksit_secenekleri_kisa {
  padding-left: 20px;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat div.urun_havale_fiyati,
#PM_urun_detayi div.urun_detay_orta div.urun_fiyat div.urun_tekcekim_fiyati {
  display:inline-block;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat table {
  width: 100%;
  border-collapse: collapse;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat table td {
  padding: 6px 8px;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat table td.baslik {
  width: 140px;
  font-size: 16px;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat table td div.indirimsiz_urun_fiyati {
  font-size: 16px;
  text-decoration: line-through;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat table td div.urun_fiyati {
  display: inline-block;
  font-size: 24px;
  font-weight: 700;
}

.kazanciniz {
  display:none;
}

.indirimsizler{
  display: block;
  margin-bottom: -5px;
}

.indirimliler{
  display: block;
}

.indirimli_yeni .urun_fiyati{
  font-size:16px!important;
  font-weight:normal!important;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat table td div.uye_indirimli_urun_fiyati {
  font-size: 24px;
  font-weight: 700;
}
#PM_urun_detayi div.urun_detay_orta div.urun_fiyat .urun_kdvdahil_fiyati {
  font-size: 26px;
  font-weight: 700;
  display:inline-block;
  margin-right:10px;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat table td div.urun_kdvdahil_fiyati {
  font-size: 24px;
  font-weight: 700;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat div.urun_fiyat_hvl_krd {
  margin-left: 8px;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
  border-width: 1px;
  border-style:solid;
  border-right: none;
  border-left: none;
  padding: 6px 8px;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat div.urun_fiyat_hvl_krd div {
  display: inline-block;
  margin-right: 10px;
  text-align: center;
  padding: 6px 12px;
}

.urun_indirimli_kampanya_yazisi_icerik {
  border-width: 1px;
  border-style:solid;
  margin: 10px 0 15px;
  padding: 10px;
  font-size:13px;
}

.urun_indirimli_kampanya_yazisi_icerik p {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 5px;
  padding: 0 5px;
}

.urun_indirimli_kampanya_yazisi_icerik div {
  line-height: 140%;
  padding: 0 5px;
}
#PM_urun_detayi div.urun_detay_orta > div.urun_ikonlar {
  margin-left:1px;
  display:flex;
  clear:both;
  float:left;
}

#PM_urun_detayi div.urun_detay_orta div.urun_ikonlar .aynigunkargo {
  width:200px;
  height:50px;
  display: inline-block;
  vertical-align:middle;
  margin-left:-1px;
}

#PM_urun_detayi div.urun_detay_orta div.urun_ikonlar .kritikstok {
  width:200px;
  height:50px;
  display: inline-block;
  vertical-align:middle;
  margin-left:-1px;
}
#PM_urun_detayi div.urun_detay_orta div.urun_ikonlar .kargobedava {

  width:200px;
  height:50px;
  display: inline-block;
  vertical-align:middle;
  margin-left:-1px;
}





#PM_urun_detayi div.urun_detay_orta div.urun_ikonlar div.urun_temin_suresi {
  display:flex;
  align-items:center;
  font-size:14px;
  vertical-align:middle;
  border:1px solid #eceff2;
  padding:9px 10px;
}
#PM_urun_detayi div.urun_detay_orta div.urun_ikonlar div.urun_temin_suresi i {
  margin-right:10px;
  font-size:30px;
  color: #676D78;
}

#PM_urun_detayi div.urun_detay_orta div.urun_ikonlar div.urun_temin_suresi:after {
  content: 'GÜNDE KARGODA!';
  display: inline-block;
  font-weight: 500;
  color: #898F9B;
  font-size: 14px;
}

#PM_urun_detayi div.urun_detay_orta div.urun_ikonlar div.urun_temin_suresi .urun_temin_suresi_gun {
  display:inline-block;
  margin-right:5px;
  font-weight:600;
}



#PM_urun_detayi div.urun_detay_orta div.urun_taksit_secenekleri_kisa a {
  font-weight: 700;
}

#urun_detay_sepete_ekle_form {
  margin-bottom: 40px;
  float:left;
}

#PM_urun_detayi div.urun_detay_orta div.urun_secenekleri {
  margin-bottom: 10px;
}

.oklar{
  float:left;
}

#arttir {
  border-width: 0px;
  border-style: solid;
  display: block;
  cursor: pointer;
  padding: 5px 8px;
}


#azalt {
  border-width: 0px;
  border-style: solid;
  display: block;
  cursor: pointer;
  padding: 6px 8px 5px 8px;
}

#PM_urun_detayi div.urun_detay_orta div.urun_secenekleri table td {
  display: block;
  padding-right:10px;
}

#PM_urun_detayi div.urun_detay_orta div.urun_secenekleri table td label {
  display: block;
  font-size: 14px;
  margin: 0;
  padding: 0;
}

#PM_urun_detayi div.urun_detay_orta div.urun_secenekleri table td.baslik {
  padding-right: 10px;
}

#PM_urun_detayi div.urun_detay_orta div.sepete_ekle_adet_virt {
  float: left;
  display: block;
  margin-right: 20px;
  position: relative;
}

#PM_urun_detayi div.urun_detay_orta div.sepete_ekle_adet_virt table td input {
  font-size: 16px;
  line-height: 18px;
  width: 60px;
  border-width: 0px;
  border-style: solid;
  height: 50px;
  text-align: center;
  float: left;
  margin: 0;
  padding: 0;
  background: none;
}

#PM_urun_detayi div.urun_detay_orta div.sepete_ekle_adet_virt table tr > td {
  padding: 0px;
  background: #F2F4F7;
}

#PM_urun_detayi div.urun_detay_orta div.sepete_ekle_adet_virt table td label {
  padding-right: 5px;
  font-size: 16px;
}

#PM_urun_detayi div.urun_detay_orta div.sepete_ekle_adet_virt table td.miktar_hatali{
  display:none;
}

#PM_urun_detayi div.urun_detay_orta div.sepete_ekle_adet_virt table td.miktar_hatali label {
  display: block;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  margin-top: 10px;
  font-weight:bold;
  font-size:14px;
  position:absolute;
}


#sepete_ekle_buton {
  display: inline-block;
  margin-right: 20px;
  text-align: center;
}

#sepete_ekle_buton:before {
  font-size: 14px;
  content: "SEPETE EKLE";
  cursor: pointer;
  padding: 16px 0px;
  transition: all 0.20s ease-in-out;
  font-weight: 600;
  width: 237.5px;
  display: block;
}

#hemenal_buton {
  display: inline-block;
  text-align: center;
}

#hemenal_buton:before {
  font-size: 14px;
  font-weight: 600;
  content: "SATIN AL";
  cursor: pointer;
  padding: 16px 0px;
  transition: all 0.20s ease-in-out;
  width: 237.5px;
  display: block;
}

#PM_urun_detayi div.urun_detay_orta{
  min-height:200px;
}
#PM_urun_detayi div.urun_detay_orta div.urun_temin_edilemiyor {
  font-size: 14px;
  display: block;
  border-width: 1px;
  border-style:solid;
  width: 568px;
  margin-bottom: 15px;
  padding: 10px 15px;
  float:left;
}

#PM_urun_detayi div.urun_detay_orta div.urun_temin_edilemiyor div.haber_ver_yazi {
  display: block;
  float: left;
  padding-top: 4px;
}

#PM_urun_detayi div.urun_detay_orta div.urun_secenekleri_haber_ver {
  padding-top: 10px;
  clear: left;
  float: left;
  display: block;
}

#PM_urun_detayi div.urun_detay_orta div.urun_secenekleri_haber_ver table tr {
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}

#PM_urun_detayi div.urun_detay_orta div.urun_secenekleri_haber_ver table tr td{
  padding:0px;
}

#PM_urun_detayi div.urun_detay_orta div.urun_secenekleri_haber_ver table td label {
  display: block;
  font-size: 16px;
  margin: 0;
  padding: 0;
}
#PM_urun_detayi div.urun_detay_orta div.sepete_ekle_adet_virt table tr > td{
  padding:0px;
}

#PM_urun_detayi div.urun_detay_orta div.sepete_ekle_adet_virt table td label[for="urun_miktar_secenekleri"]{
  display:none;
}

#PM_urun_detayi div.urun_detay_orta div.urun_secenekleri_haber_ver table td.baslik {
  padding-right: 10px;
  padding-bottom: 5px;
}

#PM_urun_detayi div.urun_detay_orta div.urun_temin_edilemiyor div.haber_ver {
  float: left;
  display: block;
}

#PM_urun_detayi div.urun_detay_orta div.urun_temin_edilemiyor div.haber_ver a{
  display: block;
  margin-left:15px;
}

#PM_urun_detayi div.urun_detay_orta div.urun_secenekleri_haber_ver + div.haber_ver {
  clear: both;
  float: none;
  display: block;
  margin-top: 0;
  margin-left: 485px;
  position: absolute;
}

#PM_urun_detayi div.urun_detay_orta div.urun_temin_edilemiyor div.haber_ver a:before {
  content: "Haber Ver";
  cursor: pointer;
  display: block;
  font-size: 14px;
  padding: 4px 12px;
  transition: all 0.20s ease-in-out;
}

#PM_urun_detayi div.urun_detay_orta div.stoktaki_benzer_urunler {
  width: 600px;
  float:left;
}

#PM_urun_detayi div.urun_detay_orta div.stoktaki_benzer_urunler p.stoktaki_benzer_urunler_baslik {
  font-size: 14px;
  border-width: 1px;
  border-style:solid;
  border-bottom: none;
  padding: 10px 15px;
}

#PM_urun_detayi div.urun_detay_orta div.stoktaki_benzer_urunler p.stoktaki_benzer_urunler_baslik i {
  margin-right: 10px;
}

#PM_urun_detayi div.urun_detay_orta div.stoktaki_benzer_urunler div.stoktaki_benzer_urunler_icerik {
  float: left;
  display:flex;
  width: 598px;
  border-width: 1px;
  border-style:solid;
}

#PM_urun_detayi div.urun_detay_orta div.stoktaki_benzer_urunler div.stoktaki_benzer_urunler_icerik div.urun {
  border: none;
  float: left;
  min-height: 190px;
  margin-top: 0;
  margin-right: 0;
  width: 185px;
  border-right-width: 1px;
  border-right-style:solid;
  box-shadow: none;
  background:none;
}

#PM_urun_detayi div.urun_detay_orta div.stoktaki_benzer_urunler div.stoktaki_benzer_urunler_icerik div.urun:hover div.urun_resmi{
  margin-top:auto!important;
}

#PM_urun_detayi div.urun_detay_orta div.stoktaki_benzer_urunler div.stoktaki_benzer_urunler_icerik div.urun div.butonveikonlar,
#PM_urun_detayi div.urun_detay_orta div.stoktaki_benzer_urunler div.stoktaki_benzer_urunler_icerik div.urun div.urun_butonlar {

}

#PM_urun_detayi div.urun_detay_orta div.stoktaki_benzer_urunler div.stoktaki_benzer_urunler_icerik div.urun div.urun_butonlar a:before {
  font-size: 14px;
}

#PM_urun_detayi div.urun_detay_orta div.stoktaki_benzer_urunler div.stoktaki_benzer_urunler_icerik div.urun:last-child {
  border-right: none;
}

#PM_urun_detayi div.urun_detay_orta div.stoktaki_benzer_urunler div.stoktaki_benzer_urunler_icerik div.urun div.urun_resmi a img {
  width: 100px;
  height: 100px;
}

#PM_urun_detayi div.urun_detay_sag {

}
.contain div.urun_oy{
  padding:9px;
  display: inline-block;
  vertical-align: middle;
}
.urun_paylas_butonlar a {
  display: inline-block;
  font-size: 17px;
  vertical-align: middle;
  padding: 7px 9px;
  width: 15px;
  text-align: center;
  color:#8D99B1;
}
.urun_paylas_butonlar a.wslink {
  font-size: 21px;
}
.urun_paylas_butonlar > div {
  display:none;
}

.urun_paylas_butonlar i {
  width:20px;
}

.urun_paylas_butonlar a.paylas_twitter{
  border-right: 0px;
}

.urun_ekstra_butonlar {
  border-left-width: 1px;
  border-left-style:solid;
}

.urun_ekstra_butonlar > ul li i {
  margin-right: 10px;
}

.urun_ekstra_butonlar > ul li{
  border-bottom-width: 1px ;
  border-style:solid;
}

.urun_ekstra_butonlar > ul li:last-child{
  border-bottom-width: 0px ;
}

.urun_ekstra_butonlar > ul  li:last-child{
  border-right:none;
}

.urun_ekstra_butonlar > ul {

}

.urun_ekstra_butonlar > ul  a {
  display: block;
  font-size: 13px;
  padding: 10px 20px;
  text-decoration: none;
  text-align: left;
}
.urun_paylas_butonlar{
  padding: 6px 21px 6px 21px;
  border-left-width: 1px;
  border-style: solid;
}
.facebook_begen_buton {

}

.star-rating,
.star-rating a:hover,
.star-rating a:active,
.star-rating a:focus,
.star-rating .current-rating {
  background-repeat: repeat-x;
  background-position: left -1000px;
}

.urun_oy{
  border-right:1px solid #e4e9eb;
  padding:12px 15px;
}
.star-rating {
  position: relative;
  width: 125px!important;
  height: 24px;
  overflow: hidden;
  list-style: none;
  margin:0px;
  padding: 0;
  background-position: left top;
}

.star-rating li {
  display: inline;
}

.star-rating a,
.star-rating .current-rating {
  position: absolute;
  top: 0;
  left: 0;
  text-indent: -1000em;
  height: 24px;
  line-height: 24px;
  outline: none;
  overflow: hidden;
  border: none;
  transition:none;
}

.star-rating a:hover,
.star-rating a:active,
.star-rating a:focus {
  background-position: left center;
}

.star-rating .current-rating {
  z-index: 1;
  background-position: left bottom;
}

div.star-rating-result {
  display: none;
  font-size: 0;
}
div.urun_detay_tablar {
  position: relative;
  margin-bottom:40px;
}

.tabrow{
  border-bottom:1px solid #eceff2;
  height:55px;
}

ul.urun_detay_tablar_ul {
  list-style: none;
  height:55px;
  width: 1200px;
  margin: 0 auto;
  padding: 0;
  white-space:nowrap;
  font-size:0;
}

ul.urun_detay_tablar_ul li {
  display:inline-block;
  line-height: 42px;
  overflow: hidden;
  position: relative;
  padding: 0;
}

ul.urun_detay_tablar_ul li a {
  text-decoration: none;
  display: block;
  font-size: 14px;
  font-weight: 500;
  outline: none;
  padding: 7px 30px 7px 30px;
  text-align: center;
  text-transform:uppercase;
  color: #898F9B;
}

ul.urun_detay_tablar_ul li a i{
  display: block;
  font-size: 18px;
}

ul.urun_detay_tablar_ul li:first-child{

}

.tab_container {
  width: 1200px;
  overflow: hidden;
  margin: 0 auto;
  border-top: none;
  padding:20px 0px
}

.tab_content {
  position: relative;
  min-height: 100px;
  display: block;
  border-top: none;
}

#urun_detay_tab1 div.urun_aciklama {
  margin-bottom: 10px;
}

div.saticiya_danis #danis_buton {
  display: block;
  font-size: 16px;
  text-decoration: none;
  padding: 6px 12px;
}

.urun_ozellikler table td.baslik a {
  text-decoration: none;
  font-size: 14px;
  padding: 0px 6px;
  vertical-align: text-top;
  float: right;
  display: block;
}

.urun_ozellikler table td.baslik a:after {
  display:table;
  content:" ";
  clear:both;
}

.urun_ozellikler div.kiyasla_div {
  display:none;
}

.urun_ozellikler div.kiyasla_div a {
  text-decoration: none;
  font-size:16px;
  padding: 6px 12px;
}

#urun_detay_tab2 div.urun_kampanyalari {
  width: 1168px;
}

#urun_detay_tab2 div.urun_kampanyalari div.kampanya_aciklama {
  font-size: 13px;
  margin-bottom: 20px;
  border-width: 1px;
  border-style:solid;
  padding: 15px;
}

#urun_detay_tab2 div.urun_kampanyalari div.kampanya_urunleri {
  position: relative;
  display: table;
  border-spacing: 20px;
  margin: -20px;
}

#urun_detay_tab2 div.urun_kampanyalari div.kampanya_urun {
  display: table-cell;
  height: 100%;
  vertical-align: top;
  width: 354px;
  margin-right: 8px;
  font-size: 12px;
  border-width: 1px;
  border-style:solid;
  padding: 10px;
}

#urun_detay_tab2 div.urun_kampanyalari div.kampanya_urun a,
#urun_detay_tab2 div.urun_kampanyalari div.kampanya_urun b{
  font-size:12px;
}
#urun_detay_tab2 div.urun_kampanyalari div.kampanya_urun img{
  float:left;
  width:100px;
  height:100px;
}

#urun_detay_tab2 div.urun_kampanyalari div.kampanya_urun div.kampanya_fiyat {
  display: inline-block;
  margin-top: 8px;
  width: 218px;
  border-width: 1px;
  border-style:solid;
  padding: 6px 12px;
  font-size: 13px;
}

#urun_detay_tab2 div.urun_kampanyalari div.kampanya_urun.urun_resimsiz_kampanya {
  height: 120px;
  padding-left: 120px;
  width: 245px;
}

#urun_detay_tab2 div.urun_kampanyalari div.kampanya_urun div.model4_aciklama {
  padding-top: 10px;
}

#urun_detay_tab2 div.urun_kampanyalari p {
  display: block;
  border-width: 1px;
  border-style: solid;
  margin: -10px -10px 10px;
  padding: 7px 0 7px 5px;
  font-size: 13px;
}

#urun_detay_tab2 div.urun_kampanyalari p a{
  font-size:13px;
}

#urun_detay_tab2 div.urun_kampanyalari p label {
  cursor: pointer;
}

#urun_detay_tab2 div.urun_kampanyalari div.kampanya_tarih {
  display: block;
  font-size: 14px;
  padding: 10px 0 0;
}

#urun_detay_tab3 div.banka_taksit_secenkeleri {
  border-top: 1px solid transparent;
  padding: 10px 0 0;
}

#urun_detay_tab3 div.banka_taksit_secenkeleri p {
  font-size: 13px;
  border-width: 1px;
  border-style:solid;
  line-height: 140%;
  margin: 8px 0 15px;
  padding: 15px;
}


#urun_detay_tab3 div.banka_taksit_secenkeleri div.banka_taksitleri {
  display: table;
  border-spacing: 20px;
  margin: -20px;
}

#urun_detay_tab3 div.banka_taksit_secenkeleri div.virt_banka_taksitler {
  display: table-cell;
  width: 273px;
  border-width: 1px;
  border-style:solid;
  padding: 5px;
}

#urun_detay_tab3 div.banka_taksit_secenkeleri div.virt_banka_taksitler:hover {
  border-width: 1px;
  border-style:solid;
}

#urun_detay_tab3 div.banka_taksit_secenkeleri div.virt_banka_taksitler table.banka_taksitler {
  border-spacing: 0;
  width: 100%;
}

#urun_detay_tab3 div.banka_taksit_secenkeleri table.banka_taksitler tr td {
  font-size: 12px;
  margin: 0;
  padding: 6px 12px;
}

#urun_detay_tab3 div.banka_taksit_secenkeleri table.banka_taksitler tr.basliklar td {
  font-size: 14px;
}

#urun_detay_tab3 div.banka_taksit_secenekleri_kampanyalar {
  margin-bottom: 20px;
  border-width: 1px;
  border-style:solid;
  line-height: 140%;
  padding: 15px;
}

#urun_detay_tab3 div.banka_taksit_secenkeleri .taksit_not {
  text-align: left;
  font-weight: 400;
  position:relative;
}

#urun_detay_tab3 div.banka_taksit_secenkeleri .taksit_not i {
  position: absolute;
  margin-left: 4px;
  top: -8px;
}

#urun_detay_tab3 div.banka_taksit_secenkeleri table {
  text-align: center;
}



#urun_detay_tab7 div.urun_videolari_icerik #video_goster {
  width: 100%;
  height: 400px;
}

#urun_detay_tab4 div.yorum_yok {
  min-height: 20px;
  padding: 15px;
}

#urun_detay_tab4 div.yorum_yok a {
  text-decoration: none;
  font-size: 14px;
  margin: 0 10px;
  padding: 4px 12px;
}


#urun_detay_tab4 div.yorumlar_bilgi {
  position: absolute;
  top: auto;
  width: 300px!important;
  margin-left: 868px;
  border-width: 1px;
  border-style:solid;
  padding: 15px;
  background: #f9f9f9;
}

#urun_detay_tab4 div.yorumlar_bilgi div.yorum_yap {
  line-height: 140%;
}

#urun_detay_tab4 div.yorumlar_bilgi div.yorum_yap a {
  text-align: center;
  width: 100px;
  display: block;
  margin-top: 10px;
  text-decoration: none;
  font-size: 14px;
  padding: 6px 12px;
}
.baslik{

  background-color: #F2F4F7;
  width: 760px;
  height: 30px;

}
.icerik{
  margin-left: 20px;
  width: 700px;
  height: 30px;
  margin-top:12px;

}

.baslik .isim {
  margin-left: 20px;
}
span.tarih {
  position: absolute;
  right: 1120px;
  margin-top: 5px;
  font-size: 12px;
  color:#333333;
  font-family:'Montserrat',sans-serif!important;
}

#urun_detay_tab4 div.yorumlar div.yorum {
  margin-bottom: 20px;
  border-width: 1px;
  border-style:solid;
}

#urun_detay_tab4 div.yorumlar div.yorum p.baslik {
  font-size: 14px;
  color: #333;
  padding: 8px 16px;
}

#urun_detay_tab4 div.yorumlar div.yorum p.baslik span.isim {
  padding-left: 20px;
}

#urun_detay_tab4 div.yorumlar div.yorum p.baslik span.tarih {
  float: right;
  font-size: 12px;
  font-style: italic;
}

#urun_detay_tab4 div.yorumlar div.yorum div.icerik {
  padding: 15px;
}

.simplePagerNav {
  margin-top: 10px;
  text-align: right;
  display: block;
  margin-left: 670px;
  margin-top: 20px;
}



.simplePagerNav li a {
  margin-left: -1px;
  position: relative;
  float: left;
  line-height: 1.42857143;
  text-decoration: none;
  border-width: 1px;
  border-style:solid;
  border-color: #F2F4F7;
  padding: 6px 12px;
  color: #333333;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;

}
.simplePagerNav li a:hover {
  background-color: #F2F4F7;
  color:#0B8FEC;
}
.simplePagerNav  a:focus {
  background-color: #F2F4F7;
}

#urun_detay_tab5 div.urun_yardim {
  font-size:14px;
  color: #000;
}

#urun_detay_tab6 div.teklif_isteme div.aciklama {
  margin-bottom: 20px;
  border-width: 1px;
  border-style:solid;
  padding: 15px;
}

#urun_detay_tab6 div.teklif_isteme table {
  width: 100%;
  margin: 0;
  padding: 0;
}

#urun_detay_tab6 div.teklif_isteme table td {
  padding: 5px 5px 5px 0;
}

#urun_detay_tab6 div.teklif_isteme label {
  display: block;
  padding: 5px 0;
}

#urun_detay_tab6 div.teklif_isteme input[type=text] {
  width: 300px;
}

#urun_detay_tab6 div.teklif_isteme textarea {
  width: 491px;
  height: 100px;
}

em.teklif_iste_hata_mesaji {
  display: none!important;
}

input.teklif_iste_hata_mesaji {
  border-width: 1px;
  border-style:solid;
}


#teklif_iste_btn {
  cursor: pointer;
  margin-left: -295px;
}


#PM_urun_detayi div.urun_onerileri {
  display: block;
  width: 1200px;
  min-height: 320px;
  margin: 0px auto;
  overflow:hidden;
  border: 1px solid #eceff2;
  margin-bottom:40px;
}

#PM_urun_detayi div.urun_onerileri p.baslik {
  font-size: 14px;
  padding: 15px 20px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  text-transform: uppercase;
  font-weight: 500;
}

#PM_urun_detayi div.urun_onerileri div.icerik {
  display: block;
  height: 100%;
  width: 1200px;
}

#PM_urun_detayi div.urun_onerileri div.icerik .jcarousel-container-horizontal {
  width: 1200px;
  display: block;
}

#PM_urun_detayi div.urun_onerileri div.icerik .jcarousel-clip-horizontal {
  width: 1202.5px;
  display: block;
}

#PM_urun_detayi div.urun_onerileri div.icerik .jcarousel-item {
  width:240.5px;
}

#PM_urun_detayi div.urun_onerileri div.icerik .jcarousel-next-horizontal {
  position: absolute;
  top: -50px;
  right: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-left-width: 1px;
  border-style: solid;
}

#PM_urun_detayi div.urun_onerileri div.icerik .jcarousel-next-disabled-horizontal,
.urun_onerileri .jcarousel-next-disabled-horizontal:hover,
.urun_onerileri .jcarousel-next-disabled-horizontal:active {
  cursor: default;
  background-position: -27px -29px;
}

#PM_urun_detayi div.urun_onerileri div.icerik .jcarousel-prev-horizontal {
  position: absolute;
  top: -50px;
  right: 50px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-left-width: 1px;
  border-style: solid;

}

#PM_urun_detayi div.urun_onerileri div.icerik .jcarousel-prev-disabled-horizontal,
.urun_onerileri .jcarousel-prev-disabled-horizontal:hover,
.urun_onerileri .jcarousel-prev-disabled-horizontal:active {
  cursor: default;
  background-position: 3px -29px;
}

#PM_urun_detayi div.urun_onerileri div.icerik div.urun{
  box-shadow:none;
  margin:0px;
  border-right-width: 1px;
  border-right-style:solid;
}


#PM_urun_detayi div.urun_onerileri div.icerik div.urun div.urun_butonlar {

}

#PM_urun_detayi div.urun_taglari {
  display: block;
  width: 1200px;
  border:1px solid #eceff2;
  margin:0 auto;
  margin-bottom:40px;
}

#PM_urun_detayi div.urun_taglari p.baslik {
  font-size: 14px;
  font-weight:500;
  padding: 10px 20px;
  border-bottom-width: 1px;
  border-bottom-style:solid;
  text-transform:uppercase;
}

#PM_urun_detayi div.urun_taglari .icerik {
  border-top: none;
  padding: 30px 15px;
}

#PM_urun_detayi div.urun_taglari div.icerik ul li {
  display: inline-block;
  padding: 10px 2px;
}

#PM_urun_detayi div.urun_taglari div.icerik ul li a {
  display: inline;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  padding: 9px 30px;
  font-size: 12px;
}



#PM_urun_detayi div.uyeye_ozel_kampanya_bar div.uyeye_ozel_kampanya_aciklama span,
#urun_detay_tab3 div.havale_indirim_secenkeleri div span,
#urun_detay_tab3 div.tekcekim_indirim_secenkeleri div span {
  font-weight: 700;
}

#PM_urun_detayi div.urun_detay_orta,
#PM_urun_detayi div.urun_detay_orta div.urun_secenekleri table tr{
  float: left;
  margin-bottom:15px;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat table td div.urun_havale_fiyati,
#PM_urun_detayi div.urun_detay_orta div.urun_fiyat table td div.urun_tekcekim_fiyati {
  font-size: 24px;
  font-weight: 700;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat table td.urun_indirimli_kampanya_yazisi,
.urun_ekstra_butonlar ul li {
  padding: 0;
}

div.urun_fiyati_yok,
div.fiyat_gorme_yetkim_yok {
  font-size: 16px;
  border-width: 1px;
  border-style:solid;
  padding: 15px;
}

div.urun_fiyati_yok a,
div.fiyat_gorme_yetkim_yok a {
  font-weight: 700;
}

#PM_urun_detayi div.urun_detay_orta div.urun_taksit_secenekleri_kisa a:hover,
#urun_detay_tab2 div.urun_kampanyalari a:hover {
  text-decoration: underline;
}



#PM_urun_detayi div.urun_detay_orta div.urun_secenekleri table,
#PM_urun_detayi div.urun_detay_orta div.sepete_ekle_adet_virt table,
#PM_urun_detayi div.urun_detay_orta div.urun_secenekleri_haber_ver table {
  border-collapse: collapse;
}

#PM_urun_detayi div.urun_detay_orta div.urun_sepete_ekle a img,
#PM_urun_detayi div.urun_detay_orta div.urun_temin_edilemiyor div.haber_ver a img,
.urun_paylas_butonlar a.paylas_friendfeed,
.urun_paylas_butonlar a.paylas_myspace,
.urun_paylas_butonlar a.paylas_delicious,
.urun_ekstra_butonlar ul li a.link_7,
div.urun_oy p,
#PM_urun_detayi div.urun_onerileri div.icerik div.urun .sepete_ekle_adet_virt {
  display: none;
}


#PM_urun_detayi div.urun_detay_orta div.urun_temin_edilemiyor:after,
#urun_detay_tab4 div.yorumlar div.yorum p.baslik:before {
  clear: both;
}

#PM_urun_detayi div.urun_detay_orta div.urun_secenekleri_haber_ver table td,
div.saticiya_danis {
  display: block;
  padding: 0;
}


#urun_detay_tab4 ul.simplePagerNav li {
  display: inline-block;
}



#urun_detay_tab1 div.urun_aciklama table.entegrasyon_ozellik,
.urun_ozellikler table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 10px;
}



#urun_detay_tab1 div.urun_aciklama table.entegrasyon_ozellik th,
.urun_ozellikler table th {
  font-size:16px;
  font-weight:bold;
  text-align: left;
  padding: 4px 8px;
}

#urun_detay_tab1 div.urun_aciklama table.entegrasyon_ozellik td,
.urun_ozellikler table td {
  font-size:14px;
  border-top: 2px solid transparent;
  padding: 4px 8px;
}

#urun_detay_tab1 div.urun_aciklama table.entegrasyon_ozellik td.baslik,
.urun_ozellikler table td.baslik {
  width: 150px;
}

#urun_detay_tab2 div.urun_kampanyalari div.kampanya_urunleri_row,
#urun_detay_tab3 div.banka_taksit_secenkeleri div.banka_taksitleri_row {
  display: table-row;
}

#urun_detay_tab3 div.havale_indirim_secenkeleri,
#urun_detay_tab3 div.tekcekim_indirim_secenkeleri {
  margin-right: 10px;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 20px;
  border-width: 1px;
  border-style:solid;
  padding: 15px;
}

#urun_detay_tab3 div.havale_indirim_secenkeleri p,
#urun_detay_tab3 div.tekcekim_indirim_secenkeleri p {
  font-size: 14px;
  margin-bottom: 5px;
}

#urun_detay_tab4 div.yorumlar,
#PM_urun_detayi div.urun_taglari div.icerik ul {
  display: block;
}


#PM_urun_detayi div.urun_detay_orta div.urun_fiyat .indirimyuzdesi {
  background: #FCDB67;
  color: #50555f;
  text-align: center;
  width: 55px;
  display: inline-block;
  vertical-align: middle;
  height: 44px;
  font-size: 20px;
  padding: 3px 0px;
  margin-right: 10px;
  font-weight:800;
  border-radius: 2px;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat .indirimyuzdesi span {
  font-size: 12px;
  margin-top: -2px;
  display: block;
  font-weight: 400;
}

#PM_urun_detayi div.urun_detay_orta div.urun_fiyat .fiyattopla {
  display: inline-block;
  vertical-align: middle;
}
#PM_urun_detayi div.urun_detay_orta div.urun_fiyat > table {
  display: none;
}


/* KAMPANYALAR*/

#PM_urun_detayi div.urun_detay_orta .urun_kampanyalar{
  float: left;
  width: 596px;
  border: 1px solid #eceff2;
  margin-top: 40px;
  margin-bottom: 20px;
}
#PM_urun_detayi div.urun_detay_orta .urun_kampanyalar h6{
  border-bottom: 1px solid #eceff2;
  color: #353A42;
  font-size: 12px;
  font-weight: 600;
  padding: 11px 20px;
}
#PM_urun_detayi div.urun_detay_orta .urun_kampanyalar ul{
  overflow-y: scroll;
  height: 152px;
}

.urun_kampanyalar ul::-webkit-scrollbar-track{
  background-color: #ECEFF2;
  border-radius:10px;
}

.urun_kampanyalar ul::-webkit-scrollbar{
  width: 6px;
  background-color: #F5F5F5;
  border-radius:10px;
}

.urun_kampanyalar ul::-webkit-scrollbar-thumb{
  background-color: #898F9B;
  border-radius:10px;
}




#PM_urun_detayi div.urun_detay_orta .urun_kampanyalar ul li{
  border-bottom: 1px solid #eceff2;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-weight:500
}
#PM_urun_detayi div.urun_detay_orta .urun_kampanyalar ul li:last-child{
  border-bottom: none;
}
#PM_urun_detayi div.urun_detay_orta .urun_kampanyalar ul li .x_price{
  font-size:11px;
  color:#EB5757;
  display:flex;
}
#PM_urun_detayi div.urun_detay_orta .urun_kampanyalar ul li .x_price .minprice{
  text-decoration:underline;
}
#PM_urun_detayi div.urun_detay_orta .urun_kampanyalar ul li .disabledli{
  opacity:.4;
}

#PM_urun_detayi div.urun_detay_orta .urun_kampanyalar ul li > div{
  display: flex;
  align-items: center;
  font-weight: 500;
}

#PM_urun_detayi div.urun_detay_orta .urun_kampanyalar ul li a{
  display: flex;
  align-items: center;
  font-size: 11px;
}
#PM_urun_detayi div.urun_detay_orta .urun_kampanyalar ul li a img{
  margin-right: 10px;
}


#PM_urun_detayi div.urun_detay_orta .urun_kampanyalar ul li label{
  position:relative;
  height: 20px;
  line-height: 20px;
  display:inline-block;
  vertical-align: middle;
  cursor:pointer;
  width:20px;
  margin-right:10px;
}

#PM_urun_detayi div.urun_detay_orta .urun_kampanyalar ul li label input{
  width: 20px;
  height: 20px;
  position: absolute;
  left: 0;
}
#PM_urun_detayi div.urun_detay_orta .urun_kampanyalar ul li label input ~ div{

  padding-left: 25px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: 0 0;
  position:absolute;
}

#PM_urun_detayi div.urun_detay_orta .urun_kampanyalar ul li label input[type=checkbox]:checked~div {
  background-position: 0 -40px;
}

.modal_contain img{
  display: inline-block;
  padding: 0px 20px;
  vertical-align: top;
  border: 1px solid #eceff2;
  margin-right: 20px;
}
.modal_contain .aciklama{
  display: inline-block;
  width: 50%;
  vertical-align: top;
}
.modal_contain .urunisim{
  display:inline-block;
  font-size:20px;
  font-weight:600;
  margin-bottom:20px;
}


.popup_right{
  padding:0px!important;

}
.popup_right ul{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-content: flex-start;
  height: 600px;
  background: #F2F4F7;
  flex-wrap: wrap;
  margin-bottom: 0px;
  padding-left: 20px;
  overflow: hidden;
  overflow-y: scroll;
  padding-bottom: 20px;
}
.popup_right ul li{
  margin-right: 20px;
  margin-top: 20px;
  box-shadow: 0px 6px 12px #ECEFF2;
  cursor:pointer;
}
.popup_right ul li.active{
  box-shadow: 0px 12px 25px #dadfe4;
}
.popup_right ul li img{
  padding: 9px;
  background: #fff;
}



.popup_right ul::-webkit-scrollbar-track{
  background-color: #ECEFF2;
  border-radius:10px;
}

.popup_right ul::-webkit-scrollbar{
  width: 3px;
  background-color: #F5F5F5;
  border-radius:10px;
}

.popup_right ul::-webkit-scrollbar-thumb{
  background-color: #898F9B;
  border-radius:10px;
}






</style>
