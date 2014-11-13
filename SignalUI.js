var components = require('./components/index');

var SignalUI = function(name, id) {
  // Find the correct component
  var path      = name.split('/');
      component = components;

  for(var i=0; i<path.length; i++) {
    component = component[path[i]];
  }

  // Find the element representing the component
  var $el = $('#'+id).prev();

  // Initialize the component
  component($el);
};

window['SignalUI'] = SignalUI;
