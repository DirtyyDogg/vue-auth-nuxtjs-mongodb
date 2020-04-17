<template>
<div class="container">
    <Navbar />
    <nuxt />

</div>
     
</template>
    

<script>
import Navbar from '~/components/site-partials/Navbar'
export default {
    components: {
        Navbar
    },
    data () {
        return {
            showNav: false
        }
    }
}
</script>
<style>
    html {
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  }
</style>
