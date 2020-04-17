<template>
<div class="container">
        <div class="header">
            <h1>Here might be a page title</h1>
        

    <div class="main">
        <Modalcomp />
        <Modalcompp />
       
        <Navbar />
        <nuxt />
        </div>
        </div>
        </div>
    
</template>
  
    

<script>
import Navbar from '~/components/site-partials/Navbar'


export default {
    components: {
        Navbar,
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
