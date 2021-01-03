<template>
  <v-row class="page-wrapper-row">
    <v-col :md="5" style="height:100%">
      <v-card class="form-card">
        <v-row>
          <v-col
            cols="12"
            style="display: flex;
    justify-content: center;"
          >
            <v-img
              class="shrink mr-2"
              contain
              src="@/assets/nrich.png"
              transition="scale-transition"
              width="250"
            />
          </v-col>
          <v-col cols="12">
            <v-form ref="form">
              <v-card-title>
                <div class="card-title-text">
                  ... Hesabına Giriş Yap!
                </div>
              </v-card-title>
              <v-text-field
                outlined
                solo
                v-model="email"
                label="Email"
              ></v-text-field>

              <v-text-field
                outlined
                solo
                v-model="email"
                label="password"
              ></v-text-field>
              <v-btn depressed color="#ffb347" block>
                Giriş Yap
              </v-btn>
              <br />
              <v-divider></v-divider>

              <v-card-text>
                <div class="card-subtitle-text">
                  Hesabınız yok mu? Hemen oluşturun !
                </div>
              </v-card-text>
              <v-btn class="ma-2" outlined color="#ffb347" block>
                Hesap oluştur
              </v-btn>
              <v-card-text>
                <div class="card-sub-text">
                  <span> Gizlilik Sözleşmesi </span>
                  <span>Hizmet Politikası</span>
                </div>
              </v-card-text>
            </v-form>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
.page-wrapper-row {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-card {
  /* background-image: url("../assets/registerbg.png"); */
  background-position: bottom;
  min-height: 350px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.form-item-wrapper-col {
  padding: 0px 15px;
}
.v-form {
  width: 100%;
  padding: 0px 50px;
}
.card-subtitle-text {
  text-align: center;
  margin: 0;
  color: #00000099;
  font-size: 1rem;
}

.card-sub-text {
  margin: 0;
  color: #00000099;
  font-size: 1rem;
  justify-content: space-between;
  display: flex;
}

.card-title-text {
  text-align: center;
  font-size: 1.5rem;
  width: 100%;
  margin-bottom: 15px;
}
</style>
