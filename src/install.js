import bfButton from './components/bf-button'
import bfCard from './components/bf-card'
import bfLoader from './components/bf-loader'
import bfPage from './components/bf-page'

// import Vuetify from 'vuetify/lib/framework';


export default {
  install (Vue, options) {

    console.log('options', options)

    // if (!options || !options.store) {
    //   throw new Error('Please initialise plugin with a Vuex store.')
    // }

    // options.store.registerModule('dummylib', store)
    // Vue.use(Vuetify);

    // Vue.provide(Vuetify)
    Vue.component("bfButton", bfButton);
    Vue.component("bfCard", bfCard);
    Vue.component("bfLoader", bfLoader);
    Vue.component("bfPage", bfPage);
  }
}


// function install(Vue) {
//   if (install.installed) return;
//   install.installed = true;
//   Vue.component("bfText", bfText);
//   Vue.component("bfLoader", bfLoader);
// }
//
// const plugin = {
//   install,
// };
//
// let GlobalVue = null;
// if (typeof window !== "undefined") {
//   GlobalVue = window.Vue;
// } else if (typeof global !== "undefined") {
//   GlobalVue = global.vue;
// }
// if (GlobalVue) {
//   GlobalVue.use(plugin);
// }
// bfText.install = install;
// bfLoader.install = install;
//
// // export default {bfText, bfLoader};
// export default bfText;


