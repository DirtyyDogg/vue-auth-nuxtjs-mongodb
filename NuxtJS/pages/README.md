# PAGES 

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).

<hooper :rtl="true">
  <slide>
      <img src="~/assets/logo.jpg">
    slide 1
  </slide>
  <slide>
      <img src="~/assets/logo2.jpg">
    slide 2
  </slide>
  <slide>
      <img src="~/assets/logo3.jpg">
    slide 1
  </slide>
  <slide>
      <img src="~/assets/logo.jpg">
    slide 2
  </slide>
  

</hooper>



<script>
import carousel from 'vue-owl-carousel';
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
name: 'App',
  components: {
    Hooper,
    Slide,
    carousel
  }
};
</script>

<style scoped>

</style>