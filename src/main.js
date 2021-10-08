import { createApp } from "vue";
import App from "./App.vue";
import VueParticles from "vue-particles";

const app = createApp(App);
app.use(VueParticles);

app.mount("#app");
