import Vue from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Vue.config.productionTip = false

Sentry.init({
  dsn: 'xxxxxx',
  integrations: [
    new Integrations.Vue({
      Vue,
      attachProps: true,
    }),
  ],
})

new Vue({
  render: h => h(App),
}).$mount('#app')
