import { app } from './app.js';
import './style.css'

const api = import.meta.env.VITE_LOCAL_API


document.querySelector("#app").innerHTML = app();
