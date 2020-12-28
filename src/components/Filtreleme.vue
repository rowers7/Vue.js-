<template>
  <div class="kategori_urunleri_daraltma">
    <p class="ana_baslik">Seçiminizi Daraltın</p>
    <div class="ana_icerik">

      <script type="text/html" id="selected_options_template">
        <div class="darlatma_secilmisler">
          <p class="darlatma_secilmisler_baslik">Seçimleriniz</p>
          <div class="darlatma_secilmis">
            <div class="darlatma_secilmis_button">
              <a href="#" class="daraltma_kaldir" title="Seçimi Kaldır">%title% : %value%</a>
            </div>
          </div>
          <div class="secimleri_kaldir"><a href="javascript:void(0);" title="Tüm Seçimlerimi Kaldır">Tüm Seçimlerimi Kaldır</a></div>
        </div>
      </script>

      <form id="daraltma_secenkeleri_frm" method="get" autocomplete="off">
        <input type="hidden" name="ob" id="ob_siralama" value="1">

        <div class="daraltma daraltma_markalar">
          <p class="baslik" data-title="Marka">Marka<a href="#"></a></p>
          <div class="icerik">
            <ul>

              <li data-value="Asus">
                <input type="checkbox"  name="marka" id="marka_0" value="Asus">
                <label for="marka_0"  title="Asus">Asus</label>
              </li>

              <li data-value="Dell">
                <input type="checkbox" name="marka" id="marka_1" value="Dell">
                <label for="marka_1" title="Dell">Dell</label>
              </li>

              <li data-value="HP">
                <input type="checkbox" name="marka" id="marka_2" value="HP">
                <label for="marka_2" title="HP">HP</label>
              </li>

              <li data-value="Lenovo">
                <input type="checkbox" name="marka" id="marka_3" value="Lenovo">
                <label for="marka_3" title="Lenovo">Lenovo</label>
              </li>

              <li data-value="MSI">
                <input type="checkbox" name="marka" id="marka_4" value="MSI">
                <label for="marka_4" title="MSI">MSI</label>
              </li>

            </ul>
          </div>
        </div>

        <div class="daraltma daraltma_fiyatlar">
          <p class="baslik" data-title="Fiyat">Fiyat Aralığı<a href="#"></a></p>
          <div class="icerik">
            <ul>

              <li data-value="2000 TL - 3000 TL">
                <input type="checkbox" name="fiyat" id="fiyat_0" value="2000_3000">
                <label for="fiyat_0" title="2000 TL - 3000 TL">2000 TL - 3000 TL</label>
              </li>

              <li data-value="3000 TL ve üzeri">
                <input type="checkbox" name="fiyat" id="fiyat_1" value="3000_">
                <label for="fiyat_1" title="3000 TL ve üzeri">3000 TL ve üzeri</label>
              </li>

            </ul>
          </div>
        </div>

        <div class="daraltma daraltma_sadece">
          <p class="baslik" data-title="Sadece">Sadece<a href="#"></a></p>
          <div class="icerik">

            <ul>

              <li data-value="İndirimli Ürünler">
                <input type="checkbox" name="sc" id="sc_0" value="0">
                <label for="sc_0" title="İndirimli Ürünler">İndirimli Ürünler</label>
              </li>

              <li data-value="Yeni Ürünler">
                <input type="checkbox" name="sc" id="sc_1" value="1">
                <label for="sc_1" title="Yeni Ürünler">Yeni Ürünler</label>
              </li>

              <li data-value="Stokta Olanlar">
                <input type="checkbox" name="sc" id="sc_2" value="2">
                <label for="sc_2" title="Stokta Olanlar">Stokta Olanlar</label>
              </li>

              <li data-value="Kargo Bedava Ürünler">
                <input type="checkbox" name="sc" id="sc_5" value="5">
                <label for="sc_5" title="Kargo Bedava Ürünler">Kargo Bedava Ürünler</label>
              </li>

              <li data-value="Fotoğraflı Ürünler">
                <input type="checkbox" name="sc" id="sc_3" value="3">
                <label for="sc_3" title="Fotoğraflı Ürünler">Fotoğraflı Ürünler</label>
              </li>

              <li data-value="Aynı Gün Kargolu Ürünler">
                <input type="checkbox" name="sc" id="sc_4" value="4">
                <label for="sc_4" title="Aynı Gün Kargolu Ürünler">Aynı Gün Kargolu Ürünler</label>
              </li>

            </ul>
          </div>
        </div>


        <div class="daraltma daraltma_ozellikler">
          <p class="baslik" data-title="İşletim Sistemi">İşletim Sistemi<a href="#"></a></p>
          <div class="icerik">
            <ul>

              <li data-value="Free Dos">
                <input type="checkbox" name="oz" id="oz_110_558" value="110_558">
                <label for="oz_110_558" title="Free Dos">Free Dos</label>
              </li>

              <li data-value="Linux">
                <input type="checkbox" name="oz" id="oz_110_1869" value="110_1869">
                <label for="oz_110_1869" title="Linux">Linux</label>
              </li>

              <li data-value="Windows 10">
                <input type="checkbox" name="oz" id="oz_110_1542" value="110_1542">
                <label for="oz_110_1542" title="Windows 10">Windows 10</label>
              </li>

              <li data-value="Windows 10 Pro">
                <input type="checkbox" name="oz" id="oz_110_2099" value="110_2099">
                <label for="oz_110_2099" title="Windows 10 Pro">Windows 10 Pro</label>
              </li>

            </ul>
          </div>
        </div>

        <div class="daraltma daraltma_ozellikler">
          <p class="baslik" data-title="İşlemci Tipi">İşlemci Tipi<a href="#"></a></p>
          <div class="icerik">
            <ul>

              <li data-value="Amd Ryzen">
                <input type="checkbox" name="oz" id="oz_43_2511" value="43_2511">
                <label for="oz_43_2511" title="Amd Ryzen">Amd Ryzen</label>
              </li>

              <li data-value="Intel Celeron">
                <input type="checkbox" name="oz" id="oz_43_204" value="43_204">
                <label for="oz_43_204" title="Intel Celeron">Intel Celeron</label>
              </li>

              <li data-value="Intel Core i3">
                <input type="checkbox" name="oz" id="oz_43_207" value="43_207">
                <label for="oz_43_207" title="Intel Core i3">Intel Core i3</label>
              </li>

              <li data-value="Intel Core i5">
                <input type="checkbox" name="oz" id="oz_43_208" value="43_208">
                <label for="oz_43_208" title="Intel Core i5">Intel Core i5</label>
              </li>

              <li data-value="Intel Core i7">
                <input type="checkbox" name="oz" id="oz_43_209" value="43_209">
                <label for="oz_43_209" title="Intel Core i7">Intel Core i7</label>
              </li>

              <li data-value="Intel Core i9">
                <input type="checkbox" name="oz" id="oz_43_2582" value="43_2582">
                <label for="oz_43_2582" title="Intel Core i9">Intel Core i9</label>
              </li>

              <li data-value="Intel Pentium">
                <input type="checkbox" name="oz" id="oz_43_205" value="43_205">
                <label for="oz_43_205" title="Intel Pentium">Intel Pentium</label>
              </li>

            </ul>
          </div>
        </div>

        <div class="daraltma daraltma_ozellikler">
          <p class="baslik" data-title="Sistem Belleği (Gb)">Sistem Belleği (Gb)<a href="#"></a></p>
          <div class="icerik">
            <ul>

              <li data-value="2 Gb">
                <input type="checkbox" name="oz" id="oz_44_3198" value="44_3198">
                <label for="oz_44_3198" title="2 Gb">2 Gb</label>
              </li>

              <li data-value="4 Gb">
                <input type="checkbox" name="oz" id="oz_44_215" value="44_215">
                <label for="oz_44_215" title="4 Gb">4 Gb</label>
              </li>

              <li data-value="8 Gb">
                <input type="checkbox" name="oz" id="oz_44_217" value="44_217">
                <label for="oz_44_217" title="8 Gb">8 Gb</label>
              </li>

              <li data-value="16 Gb">
                <input type="checkbox" name="oz" id="oz_44_1514" value="44_1514">
                <label for="oz_44_1514" title="16 Gb">16 Gb</label>
              </li>

              <li data-value="32 Gb">
                <input type="checkbox" name="oz" id="oz_44_2544" value="44_2544">
                <label for="oz_44_2544" title="32 Gb">32 Gb</label>
              </li>

              <li data-value="64 Gb">
                <input type="checkbox" name="oz" id="oz_44_2744" value="44_2744">
                <label for="oz_44_2744" title="64 Gb">64 Gb</label>
              </li>

            </ul>
          </div>
        </div>

        <div class="daraltma daraltma_ozellikler">
          <p class="baslik" data-title="Sabit Disk">Sabit Disk<a href="#"></a></p>
          <div class="icerik">
            <ul>

              <li data-value="500 Gb">
                <input type="checkbox" name="oz" id="oz_45_219" value="45_219">
                <label for="oz_45_219" title="500 Gb">500 Gb</label>
              </li>

              <li data-value="1 Tb">
                <input type="checkbox" name="oz" id="oz_45_220" value="45_220">
                <label for="oz_45_220" title="1 Tb">1 Tb</label>
              </li>

              <li data-value="2 Tb">
                <input type="checkbox" name="oz" id="oz_45_534" value="45_534">
                <label for="oz_45_534" title="2 Tb">2 Tb</label>
              </li>

              <li data-value="4 Tb">
                <input type="checkbox" name="oz" id="oz_45_3427" value="45_3427">
                <label for="oz_45_3427" title="4 Tb">4 Tb</label>
              </li>

              <li data-value="Yok">
                <input type="checkbox" name="oz" id="oz_45_2269" value="45_2269">
                <label for="oz_45_2269" title="Yok">Yok</label>
              </li>

            </ul>
          </div>
        </div>

        <div class="daraltma daraltma_ozellikler">
          <p class="baslik" data-title="SSD">SSD<a href="#"></a></p>
          <div class="icerik">
            <ul>

              <li data-value="32 Gb">
                <input type="checkbox" name="oz" id="oz_259_3184" value="259_3184">
                <label for="oz_259_3184" title="32 Gb">32 Gb</label>
              </li>

              <li data-value="64 Gb">
                <input type="checkbox" name="oz" id="oz_259_3067" value="259_3067">
                <label for="oz_259_3067" title="64 Gb">64 Gb</label>
              </li>

              <li data-value="128 Gb">
                <input type="checkbox" name="oz" id="oz_259_2136" value="259_2136">
                <label for="oz_259_2136" title="128 Gb">128 Gb</label>
              </li>

              <li data-value="256 Gb">
                <input type="checkbox" name="oz" id="oz_259_2137" value="259_2137">
                <label for="oz_259_2137" title="256 Gb">256 Gb</label>
              </li>

              <li data-value="512 Gb">
                <input type="checkbox" name="oz" id="oz_259_2138" value="259_2138">
                <label for="oz_259_2138" title="512 Gb">512 Gb</label>
              </li>

              <li data-value="1 Tb">
                <input type="checkbox" name="oz" id="oz_259_3022" value="259_3022">
                <label for="oz_259_3022" title="1 Tb">1 Tb</label>
              </li>

              <li data-value="2 Tb">
                <input type="checkbox" name="oz" id="oz_259_3023" value="259_3023">
                <label for="oz_259_3023" title="2 Tb">2 Tb</label>
              </li>

              <li data-value="Yok">
                <input type="checkbox" name="oz" id="oz_259_2244" value="259_2244">
                <label for="oz_259_2244" title="Yok">Yok</label>
              </li>

            </ul>
          </div>
        </div>

        <div class="daraltma daraltma_ozellikler">
          <p class="baslik" data-title="Ekran Kartı Belleği">Ekran Kartı Belleği<a href="#"></a></p>
          <div class="icerik">
            <ul>

              <li data-value="Paylaşımlı">
                <input type="checkbox" name="oz" id="oz_47_230" value="47_230">
                <label for="oz_47_230" title="Paylaşımlı">Paylaşımlı</label>
              </li>

              <li data-value="Paylaşımsız (2 Gb)">
                <input type="checkbox" name="oz" id="oz_47_229" value="47_229">
                <label for="oz_47_229" title="Paylaşımsız (2 Gb)">Paylaşımsız (2 Gb)</label>
              </li>

              <li data-value="Paylaşımsız (6 GB)">
                <input type="checkbox" name="oz" id="oz_47_2526" value="47_2526">
                <label for="oz_47_2526" title="Paylaşımsız (6 GB)">Paylaşımsız (6 GB)</label>
              </li>

              <li data-value="Paylaşımsız (8 GB)">
                <input type="checkbox" name="oz" id="oz_47_1872" value="47_1872">
                <label for="oz_47_1872" title="Paylaşımsız (8 GB)">Paylaşımsız (8 GB)</label>
              </li>

              <li data-value="Paylaşımsız (11 GB)">
                <input type="checkbox" name="oz" id="oz_47_2673" value="47_2673">
                <label for="oz_47_2673" title="Paylaşımsız (11 GB)">Paylaşımsız (11 GB)</label>
              </li>

            </ul>
          </div>
        </div>

        <div class="daraltma daraltma_ozellikler">
          <p class="baslik" data-title="Grafik Serisi">Grafik Serisi<a href="#"></a></p>
          <div class="icerik">
            <ul>

              <li data-value="AMD Radeon R7">
                <input type="checkbox" name="oz" id="oz_262_3247" value="262_3247">
                <label for="oz_262_3247" title="AMD Radeon R7">AMD Radeon R7</label>
              </li>

              <li data-value="GeForce GT 7 Serisi">
                <input type="checkbox" name="oz" id="oz_262_3168" value="262_3168">
                <label for="oz_262_3168" title="GeForce GT 7 Serisi">GeForce GT 7 Serisi</label>
              </li>

              <li data-value="GeForce GT 10 Serisi">
                <input type="checkbox" name="oz" id="oz_262_2508" value="262_2508">
                <label for="oz_262_2508" title="GeForce GT 10 Serisi">GeForce GT 10 Serisi</label>
              </li>

              <li data-value="GeForce GTX 10 Serisi">
                <input type="checkbox" name="oz" id="oz_262_2149" value="262_2149">
                <label for="oz_262_2149" title="GeForce GTX 10 Serisi">GeForce GTX 10 Serisi</label>
              </li>

              <li data-value="GeForce GTX 16 Serisi">
                <input type="checkbox" name="oz" id="oz_262_2719" value="262_2719">
                <label for="oz_262_2719" title="GeForce GTX 16 Serisi">GeForce GTX 16 Serisi</label>
              </li>

              <li data-value="GeForce RTX 20 Serisi">
                <input type="checkbox" name="oz" id="oz_262_2576" value="262_2576">
                <label for="oz_262_2576" title="GeForce RTX 20 Serisi">GeForce RTX 20 Serisi</label>
              </li>

            </ul>
          </div>
        </div>

        <div class="daraltma daraltma_ozellikler">
          <p class="baslik" data-title="Grafik İşlemcisi">Grafik İşlemcisi<a href="#"></a></p>
          <div class="icerik">
            <ul style="max-height: 205.938px; overflow-y: auto; overscroll-behavior: contain;">

              <li data-value="Radeon R7 430">
                <input type="checkbox" name="oz" id="oz_263_3248" value="263_3248">
                <label for="oz_263_3248" title="Radeon R7 430">Radeon R7 430</label>
              </li>

              <li data-value="GeForce GT730">
                <input type="checkbox" name="oz" id="oz_263_3167" value="263_3167">
                <label for="oz_263_3167" title="GeForce GT730">GeForce GT730</label>
              </li>

              <li data-value="GeForce GT1030">
                <input type="checkbox" name="oz" id="oz_263_2509" value="263_2509">
                <label for="oz_263_2509" title="GeForce GT1030">GeForce GT1030</label>
              </li>

              <li data-value="GeForce GTX1050">
                <input type="checkbox" name="oz" id="oz_263_2515" value="263_2515">
                <label for="oz_263_2515" title="GeForce GTX1050">GeForce GTX1050</label>
              </li>

              <li data-value="GeForce GTX1660">
                <input type="checkbox" name="oz" id="oz_263_2720" value="263_2720">
                <label for="oz_263_2720" title="GeForce GTX1660">GeForce GTX1660</label>
              </li>

              <li data-value="GeForce GTX1660 Super">
                <input type="checkbox" name="oz" id="oz_263_3143" value="263_3143">
                <label for="oz_263_3143" title="GeForce GTX1660 Super">GeForce GTX1660 Super</label>
              </li>

              <li data-value="GeForce GTX1060Ti">
                <input type="checkbox" name="oz" id="oz_263_2721" value="263_2721">
                <label for="oz_263_2721" title="GeForce GTX1060Ti">GeForce GTX1060Ti</label>
              </li>

              <li data-value="GeForce RTX2060">
                <input type="checkbox" name="oz" id="oz_263_2577" value="263_2577">
                <label for="oz_263_2577" title="GeForce RTX2060">GeForce RTX2060</label>
              </li>

              <li data-value="GeForce RTX2060 Super">
                <input type="checkbox" name="oz" id="oz_263_3145" value="263_3145">
                <label for="oz_263_3145" title="GeForce RTX2060 Super">GeForce RTX2060 Super</label>
              </li>

              <li data-value="GeForce RTX2070 Super">
                <input type="checkbox" name="oz" id="oz_263_3230" value="263_3230">
                <label for="oz_263_3230" title="GeForce RTX2070 Super">GeForce RTX2070 Super</label>
              </li>

              <li data-value="GeForce RTX2080">
                <input type="checkbox" name="oz" id="oz_263_2579" value="263_2579">
                <label for="oz_263_2579" title="GeForce RTX2080">GeForce RTX2080</label>
              </li>

              <li data-value="GeForce RTX2080 Super">
                <input type="checkbox" name="oz" id="oz_263_3231" value="263_3231">
                <label for="oz_263_3231" title="GeForce RTX2080 Super">GeForce RTX2080 Super</label>
              </li>

              <li data-value="GeForce RTX2080Ti">
                <input type="checkbox" name="oz" id="oz_263_2674" value="263_2674">
                <label for="oz_263_2674" title="GeForce RTX2080Ti">GeForce RTX2080Ti</label>
              </li>

            </ul>
          </div>
        </div>

        <div class="daraltma daraltma_ozellikler">
          <p class="baslik" data-title="Ekran Boyutu">Ekran Boyutu<a href="#"></a></p>
          <div class="icerik">
            <ul>

              <li data-value="Yok">
                <input type="checkbox" name="oz" id="oz_46_2501" value="46_2501">
                <label for="oz_46_2501" title="Yok">Yok</label>
              </li>

            </ul>
          </div>
        </div>

        <div class="daraltma daraltma_ozellikler">
          <p class="baslik" data-title="Dokunmatik Ekran">Dokunmatik Ekran<a href="#"></a></p>
          <div class="icerik">
            <ul>

              <li data-value="Yok">
                <input type="checkbox" name="oz" id="oz_52_240" value="52_240">
                <label for="oz_52_240" title="Yok">Yok</label>
              </li>

            </ul>
          </div>
        </div>

        <div class="daraltma daraltma_ozellikler">
          <p class="baslik" data-title="Klavye Mouse">Klavye Mouse<a href="#"></a></p>
          <div class="icerik">
            <ul>

              <li data-value="Yok">
                <input type="checkbox" name="oz" id="oz_48_2585" value="48_2585">
                <label for="oz_48_2585" title="Yok">Yok</label>
              </li>

              <li data-value="Kablolu">
                <input type="checkbox" name="oz" id="oz_48_231" value="48_231">
                <label for="oz_48_231" title="Kablolu">Kablolu</label>
              </li>

              <li data-value="Kablosuz">
                <input type="checkbox" name="oz" id="oz_48_232" value="48_232">
                <label for="oz_48_232" title="Kablosuz">Kablosuz</label>
              </li>

            </ul>
          </div>
        </div>

        <div class="daraltma daraltma_ozellikler">
          <p class="baslik" data-title="Renk">Renk<a href="#"></a></p>
          <div class="icerik">
            <ul>

              <li data-value="Siyah">
                <input type="checkbox" name="oz" id="oz_53_243" value="53_243">
                <label for="oz_53_243" title="Siyah">Siyah</label>
              </li>

              <li data-value="Beyaz">
                <input type="checkbox" name="oz" id="oz_53_244" value="53_244">
                <label for="oz_53_244" title="Beyaz">Beyaz</label>
              </li>

              <li data-value="Gri">
                <input type="checkbox" name="oz" id="oz_53_2236" value="53_2236">
                <label for="oz_53_2236" title="Gri">Gri</label>
              </li>

            </ul>
          </div>
        </div>

        <div class="daraltma daraltma_ozellikler">
          <p class="baslik" data-title="Vesa">Vesa<a href="#"></a></p>
          <div class="icerik">
            <ul>

              <li data-value="Var">
                <input type="checkbox" name="oz" id="oz_279_2267" value="279_2267">
                <label for="oz_279_2267" title="Var">Var</label>
              </li>

              <li data-value="Yok">
                <input type="checkbox" name="oz" id="oz_279_2268" value="279_2268">
                <label for="oz_279_2268" title="Yok">Yok</label>
              </li>

            </ul>
          </div>
        </div>

      </form>
    </div>
    <div class="kategori_html_sol"></div>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
p.baslik {
  font-family: "Times New Roman";
  text-transform: uppercase;
}
.baslik{
  margin-top: 10px;
  font-weight: bold;

}
.icerik {
  font-size: 15px;
  font-family: "Rage Italic";
  color: gray();
}
.kategori_urunleri_daraltma{
  margin-left: 250px;
  width: 300px;

}





.icerik li {
  list-style:none;
  position: relative;
  text-align: left;
}


.icerik li checkbox {
  background-color: black;
}
.icerik li:hover input ~ .checkmark {
  background-color: #ccc;
}

.yeni_urunler_daraltma div.ana_icerik,
.arama_urunleri_daraltma div.ana_icerik,
.indirimli_urunler_daraltma div.ana_icerik,
.kategori_urunleri_daraltma div.ana_icerik {
  min-height: 12px;

}

.yeni_urunler_daraltma div.ana_icerik p.baslik,
.arama_urunleri_daraltma div.ana_icerik p.baslik,
.indirimli_urunler_daraltma div.ana_icerik p.baslik,
.kategori_urunleri_daraltma div.ana_icerik p.baslik {
  margin: 0;
  padding: 12px 0px;
  border-bottom: 1px solid #eceff1;
  font-weight: 600;
  position: relative;
  text-transform: uppercase;
  font-size: 14px;
  margin-left: 40px;
}
.daraltma_kategoriler,
#daraltma_secenkeleri_frm > div {
  margin-bottom: 20px;
}

.yeni_urunler_daraltma div.ana_icerik p.baslik a,
.arama_urunleri_daraltma div.ana_icerik p.baslik a,
.indirimli_urunler_daraltma div.ana_icerik p.baslik a,
.kategori_urunleri_daraltma div.ana_icerik p.baslik a {
  position:absolute;
  right:5px;
  top:16px;
  padding:5px;
}

.yeni_urunler_daraltma div.ana_icerik div.icerik,
.arama_urunleri_daraltma div.ana_icerik div.icerik,
.indirimli_urunler_daraltma div.ana_icerik div.icerik,
.kategori_urunleri_daraltma div.ana_icerik div.icerik {
  padding:12px 0px;
  font-size:13px;
}

.yeni_urunler_daraltma div.ana_icerik div.icerik ul li a,
.arama_urunleri_daraltma div.ana_icerik div.icerik ul li a,
.indirimli_urunler_daraltma div.ana_icerik div.icerik ul li a,
.kategori_urunleri_daraltma div.ana_icerik div.icerik ul li a {
  display: block;
  text-decoration: none;
  line-height: 140%;
  width: 183px;
  margin: 5px 5px 5px 0;
  padding: 2px 0;
  font-size:13px;
}

.yeni_urunler_daraltma div.ana_icerik div.icerik ul li a span,
.arama_urunleri_daraltma div.ana_icerik div.icerik ul li a span,
.indirimli_urunler_daraltma div.ana_icerik div.icerik ul li a span,
.kategori_urunleri_daraltma div.ana_icerik div.icerik ul li a span {
  font-size: 10px;
}

.yeni_urunler_daraltma div.ana_icerik div.icerik div.tumunu_goster,
.arama_urunleri_daraltma div.ana_icerik div.icerik div.tumunu_goster,
.indirimli_urunler_daraltma div.ana_icerik div.icerik div.tumunu_goster,
.kategori_urunleri_daraltma div.ana_icerik div.icerik div.tumunu_goster {
  text-align: left;
}






.yeni_urunler_daraltma div.ana_icerik div.icerik div.tumunu_goster a,
.arama_urunleri_daraltma div.ana_icerik div.icerik div.tumunu_goster a,
.indirimli_urunler_daraltma div.ana_icerik div.icerik div.tumunu_goster a,
.kategori_urunleri_daraltma div.ana_icerik div.icerik div.tumunu_goster a {
  display: block;
  padding: 6px 12px;
}

.yeni_urunler_daraltma div.ana_icerik div.icerik div.tumunu_goster a:hover,
.arama_urunleri_daraltma div.ana_icerik div.icerik div.tumunu_goster a:hover,
.indirimli_urunler_daraltma div.ana_icerik div.icerik div.tumunu_goster a:hover,
.kategori_urunleri_daraltma div.ana_icerik div.icerik div.tumunu_goster a:hover {
  text-decoration: underline;
}

.yeni_urunler_daraltma div.ana_icerik div.darlatma_secilmisler div.secimleri_kaldir,
.arama_urunleri_daraltma div.ana_icerik div.darlatma_secilmisler div.secimleri_kaldir,
.indirimli_urunler_daraltma div.ana_icerik div.darlatma_secilmisler div.secimleri_kaldir,
.kategori_urunleri_daraltma div.ana_icerik div.darlatma_secilmisler div.secimleri_kaldir {
  text-align: left;
  margin-bottom: 5px;
  padding: 6px 12px;
}

.yeni_urunler_daraltma div.ana_icerik div.darlatma_secilmisler div.secimleri_kaldir a,
.arama_urunleri_daraltma div.ana_icerik div.darlatma_secilmisler div.secimleri_kaldir a,
.indirimli_urunler_daraltma div.ana_icerik div.darlatma_secilmisler div.secimleri_kaldir a,
.kategori_urunleri_daraltma div.ana_icerik div.darlatma_secilmisler div.secimleri_kaldir a {
  text-decoration: none;
}

.yeni_urunler_daraltma div.ana_icerik div.darlatma_secilmisler,
.arama_urunleri_daraltma div.ana_icerik div.darlatma_secilmisler,
.indirimli_urunler_daraltma div.ana_icerik div.darlatma_secilmisler,
.kategori_urunleri_daraltma div.ana_icerik div.darlatma_secilmisler {
  font-size: 12px;
  padding:10px;
  margin-bottom:20px;
}

.yeni_urunler_daraltma div.ana_icerik div.darlatma_secilmisler p.darlatma_secilmisler_baslik,
.arama_urunleri_daraltma div.ana_icerik div.darlatma_secilmisler p.darlatma_secilmisler_baslik,
.indirimli_urunler_daraltma div.ana_icerik div.darlatma_secilmisler p.darlatma_secilmisler_baslik,
.kategori_urunleri_daraltma div.ana_icerik div.darlatma_secilmisler p.darlatma_secilmisler_baslik {
  display: none;
}

.yeni_urunler_daraltma div.ana_icerik div.darlatma_secilmisler div.darlatma_secilmis p.darlatma_secilmis_baslik,
.arama_urunleri_daraltma div.ana_icerik div.darlatma_secilmisler div.darlatma_secilmis p.darlatma_secilmis_baslik,
.indirimli_urunler_daraltma div.ana_icerik div.darlatma_secilmisler div.darlatma_secilmis p.darlatma_secilmis_baslik,
.kategori_urunleri_daraltma div.ana_icerik div.darlatma_secilmisler div.darlatma_secilmis p.darlatma_secilmis_baslik {
  font-weight:bold;
  padding: 3px 0;
}

.yeni_urunler_daraltma div.ana_icerik div.darlatma_secilmisler div.darlatma_secilmis div.darlatma_secilmis_button a,
.arama_urunleri_daraltma div.ana_icerik div.darlatma_secilmisler div.darlatma_secilmis div.darlatma_secilmis_button a,
.indirimli_urunler_daraltma div.ana_icerik div.darlatma_secilmisler div.darlatma_secilmis div.darlatma_secilmis_button a,
.kategori_urunleri_daraltma div.ana_icerik div.darlatma_secilmisler div.darlatma_secilmis div.darlatma_secilmis_button a {
  display: block;
  font-size: 13px;
  margin-bottom: 5px;
  border-width: 1px;
  border-style:solid;
  padding: 6px 12px;
}

.yeni_urunler_daraltma div.ana_icerik div.icerik ul li.with_cb,
.arama_urunleri_daraltma div.ana_icerik div.icerik ul li.with_cb,
.indirimli_urunler_daraltma div.ana_icerik div.icerik ul li.with_cb,
.kategori_urunleri_daraltma div.ana_icerik div.icerik ul li.with_cb {
  padding: 4px 0;
}

.yeni_urunler_daraltma div.ana_icerik div.icerik ul li.with_cb div.checker,
.arama_urunleri_daraltma div.ana_icerik div.icerik ul li.with_cb div.checker,
.indirimli_urunler_daraltma div.ana_icerik div.icerik ul li.with_cb div.checker,
.kategori_urunleri_daraltma div.ana_icerik div.icerik ul li.with_cb div.checker {
  float: left;
}

.yeni_urunler_daraltma div.ana_icerik div.icerik ul li.with_cb label,
.arama_urunleri_daraltma div.ana_icerik div.icerik ul li.with_cb label,
.indirimli_urunler_daraltma div.ana_icerik div.icerik ul li.with_cb label,
.kategori_urunleri_daraltma div.ana_icerik div.icerik ul li.with_cb label {
  float: left;
  cursor: pointer;
}

.yeni_urunler_daraltma div.ana_icerik div.icerik ul li.with_cb span.ozellik_daralt_sayi,
.arama_urunleri_daraltma div.ana_icerik div.icerik ul li.with_cb span.ozellik_daralt_sayi,
.indirimli_urunler_daraltma div.ana_icerik div.icerik ul li.with_cb span.ozellik_daralt_sayi,
.kategori_urunleri_daraltma div.ana_icerik div.icerik ul li.with_cb span.ozellik_daralt_sayi {
  float: left;
  font-size:10px;
  position: relative;
  line-height: 20px;
  margin-left: 2px;
}

.etiket_urunleri_daraltma div.icerik {
  min-height: 12px;
  border-width:1px;
  border-style:solid;
  padding: 6px;
}

.etiket_urunleri_daraltma div.icerik ul li a {
  display: block;
  text-decoration: none;
  line-height: 140%;
  width: 183px;
  margin: 5px 5px 5px 0;
  padding: 2px 9px;
}

.daraltma_secenegine_yonlendir {
  display: none!important;
}
.arama_urunleri_daraltma{
  position: sticky;
  top: 55px;
}

.yeni_urunler_daraltma,
.arama_urunleri_daraltma,
.indirimli_urunler_daraltma,
.kategori_urunleri_daraltma,
.etiket_urunleri_daraltma {
  float: left;
  width: 220px!important;
}

.yeni_urunler_daraltma p.ana_baslik,
.arama_urunleri_daraltma p.ana_baslik,
.indirimli_urunler_daraltma p.ana_baslik,
.kategori_urunleri_daraltma p.ana_baslik,
.etiket_urunleri_daraltma p.baslik {
  font-size: 16px;
  padding:12px;
  text-transform: uppercase;
  font-weight: 600;
  display:none;
}

.yeni_urunler_daraltma p.ana_baslik i,
.arama_urunleri_daraltma p.ana_baslik i,
.indirimli_urunler_daraltma p.ana_baslik i,
.kategori_urunleri_daraltma p.ana_baslik i,
.etiket_urunleri_daraltma p.baslik i {
  margin-right: 10px;
}

.yeni_urunler_daraltma div.ana_icerik div.daraltma_markalar div.icerik,
.arama_urunleri_daraltma div.ana_icerik div.daraltma_markalar div.icerik,
.indirimli_urunler_daraltma div.ana_icerik div.daraltma_markalar div.icerik,
.kategori_urunleri_daraltma div.ana_icerik div.daraltma_markalar div.icerik,
.yeni_urunler_daraltma div.ana_icerik div.daraltma_fiyatlar div.icerik,
.arama_urunleri_daraltma div.ana_icerik div.daraltma_fiyatlar div.icerik,
.indirimli_urunler_daraltma div.ana_icerik div.daraltma_fiyatlar div.icerik,
.kategori_urunleri_daraltma div.ana_icerik div.daraltma_fiyatlar div.icerik,
.yeni_urunler_daraltma div.ana_icerik div.daraltma_sadece div.icerik,
.arama_urunleri_daraltma div.ana_icerik div.daraltma_sadece div.icerik,
.indirimli_urunler_daraltma div.ana_icerik div.daraltma_sadece div.icerik,
.kategori_urunleri_daraltma div.ana_icerik div.daraltma_sadece div.icerik {
  display: block;
}

.yeni_urunler_daraltma div.ana_icerik div.icerik ul li a i,
.arama_urunleri_daraltma div.ana_icerik div.icerik ul li a i,
.indirimli_urunler_daraltma div.ana_icerik div.icerik ul li a i,
.kategori_urunleri_daraltma div.ana_icerik div.icerik ul li a i,
.etiket_urunleri_daraltma div.icerik ul li a i {
  margin-right: 6px;

}
</style>
