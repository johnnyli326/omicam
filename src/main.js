import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import currencyFilter from './filters/currency';
import timestampFormat from './filters/timestampFormat';

Vue.filter('currency', currencyFilter);
Vue.filter('timeFormat', timestampFormat);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

app.use(express.static('dist'));
app.get('*', (req, res) => {
  const indexHTMLPath = path.join(__dirname, 'dist',
    'index.html');
  res.sendFile(indexHTMLPath);
});
app.listen(port, () => {
  console.log('Example app listening on port 8080!');
});
