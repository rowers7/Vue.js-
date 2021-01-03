<template>
  <div>
    <v-carousel cycle height="400">
      <v-carousel-item
        v-for="(item, i) in slider"
        :key="i"
        :src="require(`@/assets/Slider/${item.src}`)"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>  
export default {
  data() {
    return {
      slider: [],
    };
  },
  created() {
    this.$store.dispatch("getSliderItem").then(() => {
      this.slider = this.$store.getters.getSliderItem;
    });
  },
};
</script>

<style lang="scss" scoped></style>
