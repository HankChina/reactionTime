jsPsych.plugins['ZH'] = (function(){

  var plugin = {};

  plugin.info = {
    name: 'ZH',
    parameters: {
    }
  }

  plugin.trial = function(display_element, trial){
    jsPsych.finishTrial();
  }

  return plugin;

})();