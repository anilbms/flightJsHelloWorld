
jQuery(function($) {
  'use strict';

  var helloWorld = flight.component(function() {
 
  // click event handler
  this.onClick = function() {
    alert('you just clicked the h1');
  };

  // initialize
  this.after('initialize', function() {
    this.on('click', this.onClick);
  });

});


  helloWorld.attachTo('h1');
});
