import Vue from 'vue'
import App from './App.vue'
import Splide from './components/Splide';
import SplideSlide from './components/SplideSlide';



export default {
  install( Vue, options ) {
    Vue.component( Splide.name, Splide );
    Vue.component( SplideSlide.name, SplideSlide );
  }
};

export { Splide, SplideSlide };



new Vue({
  el: '#app',
  render: h => h(App)
})
