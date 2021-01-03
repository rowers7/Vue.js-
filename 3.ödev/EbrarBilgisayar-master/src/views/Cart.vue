<template>
  <div>
    <v-row style="justify-content:center">
      <v-col style="max-width:1200px">
        <v-row style="margin:0; border: 1px solid #eceff2;">
          <v-col :cols="12" :md="12" class="just-padding">
            <div class="aciklama">
              <tr>
                <td>
                  Satın almak istediğiniz ürünlerin miktarlarını değiştirmek
                  için; "Miktar" kutucuğuna satın almak isteğiniz miktarı yazın
                  ve/veya sepetinizden ürün çıkartmak için ürünün yanındaki
                  kutucuğu işaretleyin ve değişiklikliğin uygulanması için
                  "Sepeti Güncelle" butonuna tıklayın.
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  Hediye çeki ya da indirim kuponu kullanabilmek için sitemize
                  üye olmanız gereklidir. Üye olmak / Üye girişi yapmak için
                  tıklayın
                </td>
              </tr>
            </div>
          </v-col>
          <v-col :cols="12" :md="12" class="just-padding">
            <v-row>
              <v-col :md="4">
                <div>
                  <v-text-field label="Outlined" outlined dense>
                    <label slot="prepend" style="color:#444; min-width:100px"
                      >Kupon Kodu</label
                    >
                  </v-text-field>
                </div>
              </v-col>
              <v-col :md="3">
                <v-btn dark color="#898F9B">KULLAN</v-btn>
              </v-col>
              <v-col :md="5" style="text-align:right">
                <v-btn dark color="#898F9B">SEPETİ GÜNCELLE</v-btn>
              </v-col>
            </v-row>
          </v-col>

          <v-col :md="12" class="just-padding">
            <table>
              <thead>
                <tr>
                  <th style="text-align:left; width:900px">Ürün</th>
                  <th style="text-align:left;width:120px;">Birim Fiyat</th>
                  <th style="text-align:left;width:80px;">Miktar</th>
                  <th style="text-align:left;">
                    <span
                      style="cursor:pointer;"
                      id="sepet_urun_sil_tumunu_sec"
                      title="Tümünü Seç"
                      >Sil</span
                    >
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in cart_items" :key="index">
                  <td>{{ item.name }}</td>
                  <td>{{ item.price }}</td>
                  <td>1</td>
                  <td>
                    <v-btn color="danger" @click="deleteProduct(index)"
                      >Sil</v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <v-row>
              <v-col cols="12" style="display:flex; justify-content:flex-end">
                <table style="width:400px">
                  <tr>
                    <td style="width:200px; background:#f2f4f7">Ara Toplam</td>
                    <td>{{ total }} ₺</td>
                  </tr>
                  <tr>
                    <td style="width:200px; background:#f2f4f7">Toplam KDV</td>
                    <td style=" background:#FFF">0%</td>
                  </tr>
                  <tr>
                    <td style="width:200px; background:#f2f4f7">
                      Sepet Toplam Fiyatı
                    </td>
                    <td>{{ total }} ₺</td>
                  </tr>
                </table>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart_items: [],
      total: 0,
    };
  },
  watch: {
    cart_items(val) {
      this.total = 0;
      val.forEach((element) => {
        this.total += parseFloat(element.price);
      });
    },
  },
  methods: {
    deleteProduct(index) {
      this.cart_items.splice(index, 1);
      this.$store.dispatch("deleteCartProducts" , this.cart_items)
      this.getItems();
    },
    getItems() {
      this.$store.dispatch("getCartProduct").then(() => {
        this.cart_items = this.$store.getters.getCartProduct;
      });
    },
  },
  created() {
    // this.cart_items = JSON.parse(window.localStorage.getItem("cart"));
    this.getItems();
  },
};
</script>

<style scoped>
.just-padding {
  padding: 30px;
}
.aciklama {
  color: #6d8496;
  border-color: #f2f7fb;
  background: #f2f7fb;
  font-size: 13px;
  padding: 15px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

th {
  background-color: #f2f4f7;
}
td,
th {
  border: 1px solid #f2f4f7;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f4f7;
}
</style>
