var jade        = require('jade'),
    fs          = require('fs'),
    initScript  = jade(fs.readFileSync('./initScript.jade')),
    templates   = {},
    idCounter   = 0;

var generateId = function() {
  if(idCounter > 1000000) {
    idCounter = 0;
  }

  idCounter++;
  return 'SignalUI-'+idCounter;
};

module.exports = function(name, config) {
  var template = templates[name];

  if(!template) {
    var file = fs.readFileSync('../components/'+name+'/index.jade', 'utf8');
    template = jade(file, {});
    templates[name] = template;
  }

  config.generateId = generateId;

  return template(config) + initScript({
    name: name,
    id:   generateId()
  });
};
