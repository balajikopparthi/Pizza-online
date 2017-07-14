module.exports = function(markup) {
  if (typeof document !== 'undefined') return;

  var jsdom = require('mocha').jsdom;

  global.document = jsdom(markup || '');
  global.window = document.defaultView;
  global.navigator = {
    userAgent: 'node.js'
  };
};