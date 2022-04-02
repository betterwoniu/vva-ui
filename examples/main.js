import { createApp } from "vue";
import App from "./App.vue";
import vva_ui from "../packages";
// import 'vva-ui/lib/vva-ui.css' 
const app = createApp(App);
app.use(vva_ui);
app.mount("#app");
