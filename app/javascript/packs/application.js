// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
require('admin-lte');
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme';
// import '../stylesheets/application'; // This file will contain your custom CSS
/* For AdminLTE 2.4 */
// import "admin-lte/dist/css/AdminLTE.css";
// import "admin-lte/dist/css/skins/_all-skins.css";
/* For AdminLTE 2.4 */
// import "font-awesome/css/font-awesome.css";
import "@fortawesome/fontawesome-free/js/all";
import '../stylesheets/application';


Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
});