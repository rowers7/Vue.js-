<template>
  <v-tabs style="width:100%">
    <v-tab>
      ÜRÜN AÇIKLAMASI
    </v-tab>
    <v-tab>
      TEKNİK ÖZELLİKLER
    </v-tab>
    <v-tab>
      TAKSİT/ÖDEME
    </v-tab>

    <v-tab>
      YORUMLAR
    </v-tab>

    <v-tab>
      İADE KOŞULLARI
    </v-tab>

    <v-tab-item>
      <v-card flat>
        <v-row class="d-flex; justify-center">
          <v-col md="10">
            <h1>
              {{ product.description }}
            </h1>
          </v-col>
          <v-col md="12">
            <table>
              <tr class="tech-tr">
                <th>Teknik Özellikler</th>
              </tr>
              <tr
                class="tech-tr"
                v-for="(item, index) in product.spesifications"
                :key="index"
              >
                <td class="tech-td table-label">{{ item.label }}</td>
                <td class="tech-td table-value">{{ item.value }}</td>
              </tr>

              <tr class="tech-tr">
                <th>Diğer Özellikler</th>
              </tr>
              <tr v-for="(item, index) in product.spesifications" :key="index">
                <td class="tech-td table-label">{{ item.label }}</td>
                <td class="tech-td table-value">{{ item.value }}</td>
              </tr>
            </table>
          </v-col>
        </v-row>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <table>
          <tr class="tech-tr">
            <th>Teknik Özellikler</th>
          </tr>
          <tr
            class="tech-tr"
            v-for="(item, index) in product.spesifications"
            :key="index"
          >
            <td class="tech-td table-label">{{ item.label }}</td>
            <td class="tech-td table-value">{{ item.value }}</td>
          </tr>
        </table>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        3
      </v-card>
    </v-tab-item>

    <v-tab-item>
      <v-card flat>
        4
      </v-card>
    </v-tab-item>

    <v-tab-item>
      <v-card flat>
        5
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {
      product: {
        id: 1,
        name: "PRODUCT - 1",
        image: "1.jpg",
        price: "5.000",
        preprice: "6.500",
        rate: 4,
        spesifications: [
          { value: "20", label: "Ekran Boyutu" },
          { value: "20", label: "Çözünürlük" },
          { value: "20", label: "Bağlantı" },
          { value: "20", label: "Yenileme Hızı" },
          { value: "20", label: "Parlaklık" },
        ],
        description:
          "Intel X99 ve 100 Serisi anakartlarda yüksek performanslı hızaşırtma için tasarlandı",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td {
  padding: 0px;
}
th {
  text-align: left;
  padding: 8px;
}
.tech-td {
  padding: 0px 8px;
}
.table-label {
  width: 150px;
  font-size: 14px;
}
.table-label {
  font-size: 14px;
}
.tech-tr:nth-child(even) {
  background-color: #f2f4f7;
}
</style>
