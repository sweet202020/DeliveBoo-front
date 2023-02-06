import { createApp } from 'vue'
import App from './App.vue'
import './styles/general.scss';
import * as bootstrap from 'bootstrap'
//import router per le rotte
import {router} from './router.js'
//createApp(App).mount('#app')
//installazione view router per collegamento pagine
createApp(App).use(router).mount('#app')


//installazione fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();



