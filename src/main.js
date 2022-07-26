import { createApp } from "vue";
import App from "./App.vue";
import Maska from 'maska';

const app = createApp(App);

app.use(Maska);

import "./assets/main.css";

app.mount("#app");
