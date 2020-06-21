(function(global) {

  'use strict';

/** Global Methods **/
/***************************************************************************/

/**
 * Create the global controller. All contained methods and properties apply
*/
global.Button = function(settings) {
   this.init(settings);
};

Button.prototype = {
  defaultOptions: {
   el:'body',
   className:'custom-btn',
   destination:'https://github.com/geobde/button.js',
   text:'Click Me',
   onClick: () => window.location = Button.prototype.defaultOptions.destination
  },

  /**
   * Initialize the global Button object.
  */
  init: function(settings) {
     let self = this;
     let options = Object.assign(self.defaultOptions, settings)
     self.createElement(options)
  },
  createElement: function(options) {
      let self = this;
      let divElement = document.createElement("div")
      divElement.innerHTML =  options.text
      self.setAttributes('attribute', divElement, {'class':options.className})
      self.setAttributes('listener', divElement,  {'click': options.onClick})
      document.querySelector(options.el).appendChild(divElement)
  },
  setAttributes: function(type, el, attrs)  {
     for(let key in attrs) {
       type === 'attribute'
       ? el.setAttribute(key, attrs[key]) 
       : el.addEventListener(key, attrs[key])
      }
  },
  containsClass: function(elem, yourClass)  {
      if (!elem || typeof yourClass !== "string") {
        return false;
      } else if (
        elem.className &&
        elem.className
          .trim()
          .split(/\s+/gi)
          .indexOf(yourClass) > -1
      ) {
        return true;
      } else {
        return false;
      }
  },
}

})(window);