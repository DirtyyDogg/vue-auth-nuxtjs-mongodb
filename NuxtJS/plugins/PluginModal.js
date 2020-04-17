import Vue from 'vue';
import Buefy from 'buefy';
import VModal from 'vue-js-modal';
import VueJsModal from 'vue-js-modal';
import 'buefy/dist/buefy.css';


Vue.use(VueJsModal, {
    dialog: true,
    dynamic: true,
    dynamicDefaults: {
    foo: 'foo'
  }
});
Vue.use(VModal, { dialog: true });
Vue.use(Buefy);