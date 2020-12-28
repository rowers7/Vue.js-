<template>
<div>
  <div id="uye_giris_kayit">
    <div class="icerik">
      <div class="giristutucu"><div class="uye_giris">
        <div class="uyegirisi"><h1 >&nbsp;&nbsp;Üye Girişi</h1></div>
        <div class="uye_giris_aciklama">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSitemize üye iseniz, giriş yapmak için; lütfen E-posta ve Şifrenizi girdikten sonra Giriş
          <br>&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; butonuna tıklayınız.</div>
        <div class="uye_giris_hata_mesaji"></div>
        <form method="post" name="uye_giris_frm" id="uye_giris_frm" autocomplete="off" novalidate="novalidate">
          <input type="hidden" name="islem" value="uye_giris">
          <input type="hidden" name="sid" value="2037223264">
          <table>
            <tbody><tr>
              <span class="eposta"><td width="80"><label for="uye_giris_email">E-posta</label></td></span>

              <td style="clear: both;"><input type="text" id="uye_giris_email" name="uye_giris_email" value=""></td>
            </tr>
            <tr>
              <span class="eposta"><td width="80"><label for="uye_giris_sifre">Şifre</label></td></span>

              <td style="clear: both;"><input type="password" id="uye_giris_sifre" name="uye_giris_sifre"></td>
            </tr>


              <input  id="uye_giris_beni_hatirla"  name="uye_giris_beni_hatirla" type="checkbox"  value="1"><label for="uye_giris_beni_hatirla"><span class="beni">Beni hatırla</span></label>


            </tbody></table>
          <div class="sifremi_unuttum"><input id="uye_giris_submit" type="submit" value="Giriş">
            <a rel="sexylightbox" href="https://www.ebrarbilgisayar.com/sifremi-unuttum?sid=1018611632TB_iframe=true&amp;height=330&amp;width=400&amp;modal=1"><span>Şifremi Unuttum</span></a>
          </div></form>

      </div>



      </div>

      <div class="PM_clear"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
input[type=text] {

  box-sizing: border-box;
  border: 1px solid #eceff1;


}
input[type=password] {

  box-sizing: border-box;
  border: 1px solid #eceff1;


}


.sifremi_unuttum {
  border-style: solid;
  border: 1px solid #eceff1;
  border-top-color: #eceff1!important;

}
.eposta {
  color: #B16D6E;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  margin-left: 20px;
}

.uyegirisi {
  margin-bottom: 0px;
}

#uye_giris_kayit {
  margin-left: 40px;
}

#uye_giris_beni_hatirla {
  margin-left: 27px;

}
.beni {
  margin-left: 5px;
  color: #B16D6E;
  font-family: 'Montserrat', sans-serif;
}


#uye_giris_kayit div.uye_giris {
  width: 650px;
  border: 1px solid #eceff1;
  border-top-color: #0b8feb!important;
  margin-right: 30px;
}

#uye_giris_frm > table{
  padding-left:15px;
}
#uye_giris_kayit div.uye_giris div.uye_giris_hata_mesaji {
  display: none;
}

#uye_giris_kayit div.uye_giris div.uye_giris_hata_mesaji em {
  display: block;
}

#uye_giris_kayit div.uye_giris div.uye_giris_hata_mesaji em label {
  font-style: normal;
  padding: 3px 0;
}


 #uye_giris_kayit div.uye_giris {
    background: #fff;
}
 #uye_giris_kayit div.uye_giris{
   border-color: #ECEFF2;
}
#uye_giris_kayit div.uye_giris {
    width: 650px;
    border: 1px solid #eceff1;
    border-top-color: #0b8feb!important;
    margin-right: 30px;
}



#uye_giris_kayit div.uye_giris table tr td:first-child {
  width: 110px;
}

#uye_giris_kayit div.uye_giris table tr td {
  margin-bottom: 5px;
  clear: none!important;
  padding: 6px;
}

#uye_giris_kayit div.uye_giris table tr td input:not(#uye_giris_beni_hatirla) {
  width: 250px;
}
#uye_giris_kayit div.uye_giris #uye_giris_submit {
    color: #FFF;
    background-color: #0B8FEC;
}
#uye_giris_kayit div.uye_giris #uye_giris_submit {
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  padding: 13px 50px;
  box-shadow: 0px 10px 30px rgba(68, 142, 246, 0.3);
  margin-bottom: 15px;
  margin-top: 15px;
  margin-left: 28px;
  border: 0;
}

#uye_giris_kayit div.uye_giris div.uye_giris_aciklama  {
    color: #6d8496;
    border-color: #f2f7fb;
    background: #f2f7fb;


}


#uye_giris_kayit div.uye_giris div.sifremi_unuttum a {
    color: #6d6d6d;
    margin-left: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
}







#uye_giris_kayit div.uye_kayit div.facebook_login_buton a,
#uye_giris_kayit div.uye_kayit div.google_login_buton a,
#uye_giris_kayit div.uye_kayit div.twitter_login_buton a{
  display: block;
}



#uye_giris_kayit div.uye_kayit div.facebook_login_buton a:before{
  content: "FACEBOOK İLE BAĞLAN";
  box-shadow: 0px 10px 30px rgba(58, 88, 152, 0.24);
}

#uye_giris_kayit div.uye_kayit div.google_login_buton a:before{
  content: "GOOGLE İLE BAĞLAN";
}

#uye_giris_kayit div.uye_kayit div.twitter_login_buton a:before{
  content: "TWİTTER İLE BAĞLAN";
}

#uye_giris_kayit div.uye_giris h1,
#uye_giris_kayit div.uye_kayit h3 {
  font-size: 14px;
  text-transform: uppercase;
  padding: 5px 20px;


  font-weight: 600;
}

#uye_giris_kayit div.uye_kayit div.uye_kayit_buton img,
#uye_giris_kayit div.uye_kayit div.facebook_login_buton img ,
#uye_giris_kayit div.uye_kayit div.google_login_buton img ,
#uye_giris_kayit div.uye_kayit div.twitter_login_buton img {
  display: none;
}

</style>
