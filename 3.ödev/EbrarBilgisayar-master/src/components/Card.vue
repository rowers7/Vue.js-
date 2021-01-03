<template>
  <div>
    <v-card class="v-card-class">
      <v-img height="300px" :src="require(`@/assets/${item.image}`)"></v-img>
      <v-card-title>{{ item.name }}</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <div
            class="grey--text ml-4"
            style="width:100%; padding:0px 15px;"
            v-for="(spesifications, index) in item.spesifications"
            :key="index"
          >
            {{ spesifications.label }} : {{ spesifications.value }}
          </div>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn color="#0B8FEC" text style="font-size:20px; font-weight:600">
          {{ item.price }}
        </v-btn>
        <v-btn text color="#00000099" style="font-size:20px;">
          <s>{{ item.preprice }}</s>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.v-card-class {
  border-radius: 0px;
}
</style>
