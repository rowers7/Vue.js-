<template>
  <div>
    <v-container fluid style="padding:0">
      <v-row style="background:#0B8FEC; margin:0px; justify-content:center">
        <v-col cols="12" style="max-width:1200px; padding-bottom:0px;">
          <v-row style="font-size:14px; color:white; margin:0px">
            <div>
              <span>
                <b>0535 566 55 56</b>
              </span>
              <span style="margin-left:30px">
                info@example.com
              </span>
            </div>
            <v-spacer></v-spacer>
            <div>
              <v-btn
                style="font-size:0.65rem; text-transform:none"
                text
                color="#fff"
                small
                v-for="(item, index) in header_link"
                :key="index"
                >• {{ item.title }}</v-btn
              >
            </div>
          </v-row>
          <v-divider></v-divider>
        </v-col>
        <v-col cols="12" style="max-width:1200px">
          <v-row>
            <v-col>
              <v-img
                @click="$router.push('/')"
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="@/assets/ebrarbilgisayar.png"
                transition="scale-transition"
                width="280"
              />
            </v-col>
            <v-spacer></v-spacer>
            <v-col md="6" style="padding-bottom:0px;">
              <v-text-field
                outlined
                solo
                dense
                v-model="search"
                label="Search"
                class="search"
                style="padding-right:0px;"
              >
                <div slot="prepend">
                  <v-select
                    class="search-select"
                    :items="categories"
                    solo
                    dense
                    label="Tüm Kategoriler"
                  >
                  </v-select>
                </div>

                <div
                  slot="append"
                  style="background:#FCDB67; width: 80px;height: 40px; display:flex; align-items:center; justify-content:center; cursor:pointer"
                >
                  Ara
                </div>
              </v-text-field>
            </v-col>
            <v-col md="2" style="justify-content:space-around; display:flex;">
              <v-icon dark size="30">
                mdi-account
              </v-icon>
              <v-badge
                bordered
                color="#FCDB67"
                :content="cart_badge"
                overlap
                style="margin-top:5px"
              >
                <v-icon dark size="30" @click="$router.push('/Cart')">
                  mdi-cart
                </v-icon>
              </v-badge>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="menu-wrapper-row">
        <v-col
          cols="12"
          class="d-flex justify-space-between"
          style="max-width:1200px;"
        >
          <el-dropdown
            v-for="(parent_item, index) in menus.filter(
              (x) => x.parent_menu_id == 0
            )"
            :key="index"
          >
            <span class="el-dropdown-link">
              {{ parent_item.name
              }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu class="child-menus" slot="dropdown">
              <template>
                <v-row class="menu-card-wrapper-row">
                  <v-col
                    cols="3"
                    style="box-shadow:1px 0px 0px 0px grey; padding:0px 15px; display:flex; align-items:center"
                  >
                    <div>
                      <v-row
                        v-for="(child_item, child_index) in menus.filter(
                          (x) => x.parent_menu_id == parent_item.id
                        )"
                        :key="child_index"
                      >
                        <el-dropdown-item>{{
                          child_item.name
                        }}</el-dropdown-item>
                      </v-row>
                    </div>
                  </v-col>
                  <v-col cols="9" style="padding:0px">
                    <v-row>
                      <v-col
                        cols="3"
                        v-for="(item, index) in card_item"
                        :key="index"
                        style="padding:0px"
                        class="menu-card-wrapper-col"
                      >
                        <Card :item="item" />
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </template>
            </el-dropdown-menu>
          </el-dropdown>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      cart_badge: "0",
      search: null,
      categories: [
        "Notebook",
        "Bilgisayar",
        "Bilgisayar Bileşenleri",
        "Veri Depolama",
        "Monitörler",
        "Çevre Birimleri",
        "Yazıcılar",
        "Yazılım",
      ],
      menus: [],
      card_item: [],
      header_link: [
        { title: "Toplama Pc", route: "/" },
        { title: "Sipariş Takibi", route: "/" },
        { title: "Kıyaslama Listesi", route: "/" },
        { title: "Yardım", route: "/help" },
        { title: "İletişim", route: "/contact" },
      ],
    };
  },
  created() {
    this.$store.dispatch("getAllMenus").then(() => {
      this.menus = this.$store.getters.getMenus;
    });

    this.$store.dispatch("getHeaderProducts").then(() => {
      this.card_item = this.$store.getters.getHeaderCart;
    });
    if (JSON.parse(window.localStorage.getItem("cart")) != null) {
      let cart = JSON.parse(window.localStorage.getItem("cart"));
      this.cart_badge = cart.length;
    }
  },
};
</script>

<style scoped>
.menus {
  max-width: 1200px;
}
.child-menus {
  margin-top: 50px;
  width: 100%;
  padding: 0px;
  background: transparent;
  border: none;
  box-shadow: 0 0 0 0 transparent;
}
.menu-card-wrapper-row {
  background: #fff;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0px 0px 1px 0px grey;
}
.menu-wrapper-row {
  justify-content: center;
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #e0e5ef;
}
.v-app-bar >>> .v-toolbar__content {
  max-width: 1200px;
  margin: 0 auto;
}
.search >>> .v-input__prepend-outer {
  margin: 0px !important;
}
.search-select {
  height: 50px;
}
.search {
  height: 50px;
}

.search >>> .v-input__control .v-input__slot {
  padding-right: 0px !important;
}

.search-select >>> .v-input__control {
  margin-top: 1px !important;
}
</style>
