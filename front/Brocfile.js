/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
//app.import('bower_components/sails.io.js/dist/sails.io.js');
app.import(app.bowerDirectory + '/moment/locale/es.js');
app.import(app.bowerDirectory + '/L.GeoSearch/src/js/l.control.geosearch.js');
app.import(app.bowerDirectory + '/L.GeoSearch/src/js/l.geosearch.provider.google.js');
app.import(app.bowerDirectory + '/L.GeoSearch/src/css/l.geosearch.css');
app.import(app.bowerDirectory + '/leaflet-omnivore/leaflet-omnivore.min.js');


module.exports = app.toTree();
