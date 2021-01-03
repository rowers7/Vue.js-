<template>
  <div class="home">
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-row style="max-width:1200px;">
          <v-col md="8">
            <Slider />
          </v-col>
          <v-col md="4">
            <v-img
              style="width:100%; height:100%"
              :src="require(`@/assets/Slider/${image}`)"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row style="background:#eff1f5; padding:0px;">
      <v-col md="12" class="d-flex justify-center">
        <v-row style="max-width:1200px">
          <v-col cols="12">
            <h3 style="margin:15px 0px">
              MUHTEŞEM FIRSATLARI KAÇIRMA
            </h3>
            <carousel
              :autoplay="true"
              :nav="true"
              :dots="false"
              :loop="true"
              :responsive="{
                0: { items: 1, nav: false },
                600: { items: 2, nav: false },
                1200: { items: 4, nav: false },
              }"
            >
              <v-col
                v-for="(item, index) in products"
                :key="index"
                @click="goProduct(item)"
                style="cursor:pointer"
              >
                <Card :item="item" />
              </v-col>
            </carousel>
          </v-col>
          <v-col md="6" v-for="(item, index) in categories_card" :key="index">
            <v-card class="v-card-class">
              <v-row class="default-row">
                <v-col cols="6" class="just-padding"
                  ><v-card-title>{{ item.title }}</v-card-title>
                  <v-card-text>
                    {{ item.description }}
                  </v-card-text>
                </v-col>
                <v-col cols="6" class="just-padding">
                  <v-img
                    style="width:100%; height:100%"
                    :src="require(`@/assets/Slider/${item.image}`)"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row style="height:500px"> </v-row>
  </div>
</template>

<script>
import Card from "@/components/Card";
import carousel from "vue-owl-carousel";
import products from "@/db/products";
import Slider from "@/components/Slider";

export default {
  components: { carousel, Slider, Card },
  name: "Home",
  data() {
    return {
      image: "slide1.jpg",
      products: products,
      categories_card: [
        {
          title: "Hazır Sistem",
          description: "İstediğin gibi özelleştir",
          image: "slide1.jpg",
        },
        {
          title: "Gaming Laptop",
          description: "GeForce GTX 16 Serisi",
          image: "slide2.jpg",
        },
      ],
    };
  },
  methods: {
    goProduct(row) {
      this.$router.push({ name: "Product", params: { productDetail: row } });
    },
  },
};
</script>

<style>
.v-card-class {
  border-radius: 0px;
}
.just-padding {
  padding: 15px;
}
.default-row {
  margin: 0;
}
</style>
