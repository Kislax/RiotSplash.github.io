import '@riotjs/hot-reload'
import { component } from 'riot'
// import registerGlobalComponents from './register-global-components'
import App from './app.riot'

component(App)(document.getElementById("app"))

// // register
// registerGlobalComponents()
//
// // mount all the global components found in this page
// mount('[data-riot-component]')