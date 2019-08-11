import Vue from 'vue'
import App from './App.vue'
import '../assets/app.css'
const leaflet = require('leaflet');
import 'leaflet/dist/leaflet.css'

delete leaflet.Icon.Default.prototype._getIconUrl;

const iconRetinaUrl = require('leaflet/dist/images/marker-icon-2x.png');
const iconUrl = require('leaflet/dist/images/marker-icon.png');
const shadowUrl = require('leaflet/dist/images/marker-shadow.png');

leaflet.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl })

new Vue({
  el: '#app',
  render: h => h(App)
})