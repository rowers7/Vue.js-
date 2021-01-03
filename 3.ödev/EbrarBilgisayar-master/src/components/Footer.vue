<template>
  <div>
    <v-container fluid style="padding:0px; margin-top:100px;">
      <v-row style="background:#eff1f5; padding:0px;">
        <v-col cols="12" class="d-flex justify-center">
          <v-row style="max-width:1200px;">
            <v-col :cols="12">
              <v-card
                style="height: 200px;margin-top: -100px;margin-bottom: 30px;"
              >
                <v-row style="margin:0">
                  <v-col md="9">
                    <v-card-title>TOPLAMA BİLGİSAYAR FİYATLARI</v-card-title>
                    <v-card-text
                      >E-bültenimize kayıt olarak yeniliklerden ve
                      kampanyalardan haberdar olun</v-card-text
                    >

                    <v-row>
                      <v-col :md="8">
                        <v-text-field label="Solo" solo dense></v-text-field>
                      </v-col>

                      <v-col :md="4">
                        <v-btn color="primary" medium> Gönder</v-btn>
                      </v-col>
                    </v-row>
                  </v-col>

                  <v-col
                    md="3"
                    style="align-items: center;display: flex;justify-content: center;"
                  >
                    <p>Lorem İpsum</p>
                  </v-col>
                </v-row>
              </v-card>
              <v-card>
                <v-row style="margin:0px">
                  <v-col
                    :md="6"
                    style="display: flex;align-items: center; font-size: 16px;"
                  >
                    SOSYAL MEDYADA
                    <strong style="color:#0b8feb; margin-left:5px">
                      BİZİ TAKİP EDİN
                    </strong></v-col
                  >
                  <v-col :md="6" style="text-align:right">
                    <v-btn class="mx-2" fab dark small color="#3b5998">
                      <v-icon dark>
                        mdi-minus
                      </v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab dark small color="#26a6d1">
                      <v-icon dark>
                        mdi-minus
                      </v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab dark small color="#c4302b">
                      <v-icon dark>
                        mdi-minus
                      </v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab dark small color="#f96141">
                      <v-icon dark>
                        mdi-minus
                      </v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab dark small color="#489a60">
                      <v-icon dark>
                        mdi-minus
                      </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col
              :md="3"
              v-for="(item, index) in items"
              :key="index"
              style="text-align:center"
            >
              <h4 class="parent_item">{{ item.title }}</h4>
              <br />
              <p
                class="child_item"
                v-for="(child_item, child_index) in item.child_title"
                :key="child_index"
              >
                {{ child_item.title }}
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "KATEGORİLER",
          child_title: [
            { title: "Bilgisayar" },
            { title: "NoteBook" },
            { title: "Gaming Laptop" },
            { title: "Toplama PC" },
          ],
        },
        {
          title: "OEM ÜRÜNLER",
          child_title: [
            { title: "Anakart" },
            { title: "Ram(Bellek)" },
            { title: "Ekran Kartı" },
            { title: "İşlemciler" },
          ],
        },
        {
          title: "SİPARİŞLER",
          child_title: [
            { title: "Garanti Süresi" },
            { title: "Banka Hesap No" },
            { title: "Sipariş Takibi" },
            { title: "Kargo Teslimatı" },
          ],
        },
        {
          title: "KARGO SÜRECİ",
          child_title: [
            { title: "Kargo Teslimatı" },
            { title: "Siparişim Gelmedi" },
            { title: "Hasarlı Teslimat" },
            { title: "Arıza Kaydı" },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.child_item {
  color: #353a42;
  line-height: 20px;
  font-size: 14px;
}
</style>
