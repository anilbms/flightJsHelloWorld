
jQuery(function($) {
  'use strict';

  var helloWorld = flight.component(function() {

    console.log('my frist component constructor');
    
  });

  helloWorld.attachTo(document);

});
