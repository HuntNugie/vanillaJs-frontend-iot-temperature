import { getData } from '../utils/api.js';
import { app } from './app.js';
import './style.css'

setInterval(async()=>{
    const data = await getData();
    document.querySelector("#app").innerHTML = app(data);
},2000)
