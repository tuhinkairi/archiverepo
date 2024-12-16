import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueMeta from 'vue-meta';

import App from './App.vue';
import router from './router';

import api from './util/backend-api';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faPhoneAlt, faEnvelope, faStar, faSearch, faChevronUp,
  faLongArrowAltRight, faLongArrowAltLeft, faPlayCircle, faArrowAltCircleLeft, faArrowAltCircleRight,
  faWindowClose, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { faFacebook, faFacebookF, faTwitter, faYoutube,
  faInstagram, faSnapchat, faBehance, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

// Add FontAwesome icons to the library
library.add(faPhoneAlt, faEnvelope, faFacebook, faFacebookF,
  faTwitter, faYoutube, faInstagram, faSnapchat, faStar, faSearch,
  faChevronUp, faLongArrowAltRight, faLongArrowAltLeft, faPlayCircle, faBehance,
  faGooglePlusG, faArrowAltCircleLeft, faArrowAltCircleRight, faWindowClose, faBars, faTimes);

// Register FontAwesome component
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Use BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Set API globally
Vue.prototype.api = api;

// Disable production tip
Vue.config.productionTip = false;

// Use VueMeta for managing meta tags
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

// Function to dynamically insert Google Tag Manager script
function addGTM() {
  const gtmScript = document.createElement('script');
  gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TVWN3SXF');`;
  document.head.appendChild(gtmScript);
}

// Add GTM to the page when the app is created
addGTM();

// Track each route change with Google Tag Manager
router.afterEach((to) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'pageview',
      page: to.fullPath, // Record the full path of the route
    });
  }
});

// Create and mount the Vue instance
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
