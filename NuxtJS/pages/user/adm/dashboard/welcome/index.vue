<template src="./try.html">
  
</template>

<script>
export default {
  layout: 'defaultVuetify',
  name: 'app',
  data() {
      return {
      example1Form: {
        src: 'http://localhost:8080/',
        searchTerm: ''
      },
      iframeLoading: true
    }
  },
  methods: {
    onLoad() {
      console.log('iframe loaded');

      this.iframeLoading = false;
    },
    onIframeLoad() {
      console.log('iframe loaded');
    }
  }
};
</script>
