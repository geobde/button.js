var Button = function(settings) {
   return Button.prototype.init(settings);
};

Button.prototype = {
  defaultOptions: {
   el:'body',
   className:'custom-btn',
   destination:'https://github.com/geobde/button.js',
   text:'Click Me',
   onClick: () => window.location = Button.prototype.defaultOptions.destination
  },
  init: function(settings) {
     options = Object.assign(this.defaultOptions, settings)
     this.createElement(options)
  },
  createElement: function(options) {
      let divElement = document.createElement("div")
      divElement.innerHTML =  options.text
      this.setAttributes('attribute', divElement, {'class':options.className})
      this.setAttributes('listener', divElement,  {'click': options.onClick})
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
};