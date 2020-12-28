<template>
<div>

  <div class="kare">
    <div class="ust">
      <span>Kupon Kodu: </span>


      <input type="text" id="cek_no" name="cek_no" disabled="">
      <input type="submit" id="cek_kullan" value="KULLAN">
      <input type="button" id="sepeti_guncelle" value="SEPETI GUNCELLE">
    </div>
    <div class="d1">



    </div>
    <div class="d2">
      <tr>
        <th id="ilk" style="text-align:left;width:580px"><i>Ürün</i></th>
        <th style="text-align:right;width:90px;">Birim Fiyat</th>
        <th style="text-align:right;width:70px;">Miktar</th>
        <th style="text-align:right;width:50px;"><span style="cursor:pointer;" id="sepet_urun_sil_tumunu_sec" title="Tümünü Seç">Sil</span></th>
      </tr>

    </div>
    <div class="alt">
      <tr>
        <td style="text-align:left;">
          <div class="urun_resim"><a href="/lenovo-legion-7-15imh05-81yt008ntx-i7-10750h-32gb-1tb-ssd-6gb-rtx2060-156-freedos-pmu366190" title="Lenovo Legion 7 15IMH05 81YT008NTX i7-10750H 32GB 1TB SSD 6GB RTX2060 15.6 FreeDOS"><img src="https://s.eticaretbox.com/466/pictures/thumb/100X-QNVATWEMIJ11172020145140_8.jpg" style="border:0px;width:50px;height:50px;" alt="Lenovo Legion 7 15IMH05 81YT008NTX i7-10750H 32GB 1TB SSD 6GB RTX2060 15.6 FreeDOS" data-original="https://s.eticaretbox.com/466/pictures/thumb/100X-QNVATWEMIJ11172020145140_8.jpg" data-lazyload-ready="true"></a></div>
          <div class="urun_isim_kampanya">

            <a href="/lenovo-legion-7-15imh05-81yt008ntx-i7-10750h-32gb-1tb-ssd-6gb-rtx2060-156-freedos-pmu366190" title="Lenovo Legion 7 15IMH05 81YT008NTX i7-10750H 32GB 1TB SSD 6GB RTX2060 15.6 FreeDOS">Lenovo Legion 7 15IMH05 81YT008NTX i7-10750H 32GB 1TB SSD 6GB <br> RTX2060 15.6 FreeDOS</a>

          </div>
          <div style="clear:both;"></div>
        </td>

          <div class="fiyat">
            <td  style="text-align:right;width:120px; margin-left: 200px" >
              <strike>20.366,76&nbsp;TL
              </strike>16.694,06&nbsp;TL
            </td>
          </div>
          <td style="text-align:center;"><input type="text" name="miktar_822785" id="birim" value="2" data-orginal-value="2"></td>
          <td style="text-align:center;width:25px;">
            <input type="checkbox" class="sepet_urun_sil" id="sepet_urun_sil_822785" name="sepet_urun_sil_822785" value="1"><label for="sepet_urun_sil_822785"></label>
            <input type="hidden" name="sepetteki_idler" value="822785">
          </td>

      </tr>
    </div>
  </div>
  <div class="sagalt">
    <table class="tablo" style="text-align: right" width="250px">
      <tr>
        <td class="baslik" style="padding-top: 5px; padding-right: 8px">Ara Toplam</td>
        <td>14.160,96&nbsp;TL</td>
      </tr>

      <tr>
        <td class="baslik" style="padding-top: 5px; padding-right: 8px">Toplam KDV</td>
        <td>2.548,97&nbsp;TL</td>
      </tr>
      <tr>
        <td class="baslik" style="padding-top: 5px; padding-right: 8px">Sepet Toplam Fiyatı</td>
        <td><b>16.709,93&nbsp;TL</b></td>
      </tr>

    </table>
  </div>
  <input type="submit" id="alısveris"  style="margin-left: 50px" value="ALIŞVERİŞE DEVAM ET">
  <input type="submit" id="satınal"  value="SATIN AL">

</div>
</template>





<script>



export default {

}
</script>


<style scoped>


.fiyat {
  margin-left: 100px;
}


.ust {
  margin-left: 50px;
}
.sagalt {
  margin-left: 610px;
  width: 300px;
  height: 120px;
}
.baslik {
  background-color: #F2F4F7;
  border-style: solid;
  height: 37px;
  border-color: white;



}

#alısveris {
  width: 200px;
  color:#fff;
  background: #898F9B;
  box-shadow: 0px 8px 20px rgba(129, 129, 147, 0.33);
  height: 45px;
  margin-left: 5px;
  border:none;
}
#satınal {
  width: 200px;
  color:#fff;
  background: #0b7de5;
  box-shadow: 0px 8px 20px rgba(129, 129, 147, 0.33);
  height: 45px;
  margin-top: 20px;
  margin-left: 405px;
  border:none;
}



.kare {


  width: 876px;
}


#ilk {
  height: 30px;
}



#birim {

  width: 30px;
  text-align: center;
  margin-left: 30px;
}

#sepet_urun_sil_822785 {
  margin-left: 40px;
}

.alt {
  margin-left: 50px;
}

#cek_kullan {
  color:#fff;
  background: #898F9B;
  box-shadow: 0px 8px 20px rgba(129, 129, 147, 0.33);
  width: 85px;
  height: 35px;
  margin-left: 5px;
  border:none;

}
#sepeti_guncelle {
  color:#fff;
  width: 150px;
  background: #898F9B;
  box-shadow: 0px 8px 20px rgba(129, 129, 147, 0.33);
  margin-left: 300px;
  border:0;
  height: 30px;

}

#cek_no {
  background: #F0F0F0;
}

.d1 {
  margin-left: 50px;

}
.d2 {
  margin-top: 20px;
  margin-left: 50px;
  background-color: #F2F4F7;
  width: 820px;
}


thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}

tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}



</style>
