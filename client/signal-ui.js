'use strict';

var constants = require( 'constants' ),
    config = require( 'app-config' ),
    _ = require('underscore');

// constructor
function SignalUI( options ) {

  // merge options with default config
  var settings = _.extend( config, options );

  this.debugMode = settings.config.debugMode;
  this.config    = settings.config;
  this.constants = settings.constants;

  // store for application js
  this.helpers = {};

  this.ready = true;

  // output notice to console if we're in debug mode
  // this.debug( this.messages.system.inDebugMode );

  return this;

};


SignalUI.prototype = {

  init: function(name, id) {

    // Find the correct component
    var path      = name.split('/');
        component = components;

    for(var i=0; i<path.length; i++) {
      component = component[path[i]];
    }

    // Find the element representing the component
    var $script = $('#'+id),
        $el     = $script.prev();

    // Initialize the component
    component.$el = $el;
    component($el);

    $script.remove();

  },

  register: function( component, options ){

  }

};

// export instance to the global namespace
global.SignalUI = global.SignalUI || new SignalUI();

module.exports = SignalUI;
