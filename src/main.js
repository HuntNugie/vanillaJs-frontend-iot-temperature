import {getData} from '../utils/api.js';
import {app} from './app.js';
import './style.css';
import {Chart} from "chart.js/auto"

document.querySelector ('#app').innerHTML = app ();
setInterval (async () => {
  const data = await getData ();
  document.getElementById("ambient-temp").textContent = data.suhu
  document.getElementById("object-temp").textContent = data.realSuhu
  document.getElementById("humidity-value").textContent = data.kelembapan
//   const ctx = document.getElementById ('temperatureChart');
//   const config = {
//     type: 'line',
//     data: data,
//     options: {
//       responsive: true,
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   };
//   const grafik = new Chart (ctx, config);
}, 2000);
