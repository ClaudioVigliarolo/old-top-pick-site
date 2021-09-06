import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import store, { ActionTypes } from "@/store";
import "./styles/styles.css";

async function main() {
  await store.dispatch(ActionTypes.STARTUP);
}

Vue.use(Antd);

// Optionally install the BootstrapVue icon components plugin
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
main();
