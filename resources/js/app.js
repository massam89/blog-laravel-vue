require('./bootstrap');

import Vue from 'vue'
import App from './vue/App'
import moment from 'moment'

Vue.config.productionTip = false
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
});

const app = new Vue({
    el: '#app',
    components: { App }
});