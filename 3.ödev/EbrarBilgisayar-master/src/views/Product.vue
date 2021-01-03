<template>
  <div>
    <v-container fluid style="padding:0px;">
      <v-row style="background:#eff1f5; padding:0px;">
        <v-col cols="12" class="d-flex justify-center">
          <v-card style="padding:15px">
            <v-row style="max-width:1200px;">
              <v-col md="6" style="box-shadow:5px 1px 5px -5px grey">
                <v-img
                  style="width 500px; height:500px"
                  :src="require(`@/assets/products/${productById.image}`)"
                ></v-img>
              </v-col>
              <v-col md="6">
                <v-card-title style="padding:0px 15px">
                  <span class="spesification-title">
                    {{ productById.name }}
                  </span>
                </v-card-title>
                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <span
                      class="spesification-text"
                      v-for="(spesifications,
                      index) in productById.spesifications"
                      :key="index"
                    >
                      • {{ spesifications.label }} :
                      {{ spesifications.value }}</span
                    >
                  </v-row>
                </v-card-text>
                <v-row>
                  <v-col class="just-padding">
                    <v-row>
                      <v-col class="frame">
                        <v-rating
                          v-model="productById.rate"
                          background-color="orange lighten-3"
                          color="orange"
                          readonly
                          size="15"
                        ></v-rating>
                      </v-col>
                      <v-col
                        class="frame"
                        style="display:flex; justify-content:space-between; font-size:14px; color:#5f6671; align-items:center "
                      >
                        <span>Yorumlar</span>
                        <span>Kıyasla</span>
                      </v-col>
                      <v-col class="frame">
                        <font-awesome-icon icon="facebook" />
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-card-title style="padding:0px 15px;">
                      <span class="preprice">
                        <s> {{ productById.preprice }} ₺ </s>
                      </span>

                      <span class="price"> {{ productById.price }} ₺ </span>
                    </v-card-title>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="just-padding">
                    <b>65 TL </b>'den başlayan taksit seçenekleri için
                    <a href="">tıklayın</a>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="just-padding">
                    <v-row>
                      <v-col md="2"> </v-col>
                      <v-col md="5">
                        <v-btn color="primary" block @click="sendProduct"
                          >Sepete ekle</v-btn
                        >
                      </v-col>

                      <v-col md="5">
                        <v-btn block @click="sendProduct">Satın Al</v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-row style="margin-top:15px">
                  <v-col class="just-padding">
                    <v-row>
                      <v-col
                        md="4"
                        class="frame"
                        style="color:#676D78; font-size:14px"
                      >
                        HIZLI KARGO
                      </v-col>
                      <v-col
                        md="4"
                        class="frame"
                        style="color:#676D78; font-size:14px"
                      >
                        ÜCRETSİZ KARGO
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-row style="background:#FFF; padding:0px;">
        <v-col cols="12" class="d-flex justify-center">
          <v-row style="max-width:1200px;">
            <Tab />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Tab from "@/components/Tabs";

export default {
  components: {
    Tab,
  },
  props: ["productDetail"],
  data() {
    return {
      productById: {},
    };
  },
  methods: {
    sendProduct() {
      let product = [];
      if (JSON.parse(window.localStorage.getItem("cart")) != null) {
        let currentArr = JSON.parse(window.localStorage.getItem("cart"));
        currentArr.forEach((element) => {
          product.push(element);
        });
      }
      product.push(this.productById);
      window.localStorage.setItem("cart", JSON.stringify(product));
    },
  },
  created() {
    this.$store.dispatch("getProductByID", this.productDetail).then(() => {
      this.productById = this.$store.getters.getProductByID;
    });
  },
};
</script>

<style lang="scss" scoped>
.spesification-text {
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  margin-bottom: 5px;
  font-size: 10px;
  color: #676d78;
}
.spesification-title {
  font-size: 18px;
  font-weight: 600;
}
.just-padding {
  padding: 0px 30px;
}
.frame {
  box-shadow: 0px 0px 1px 0px;
}
.price {
  color: #0b8fec;
  font-size: 26px;
  font-weight: 700;
  width: 100%;
}
.preprice {
  color: #999;
  font-size: 18px;
  font-weight: normal;
}
</style>
