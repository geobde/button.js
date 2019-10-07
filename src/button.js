let options = {
   className:'custom-btn',
   destination:'https://getemoji.com',
   text:'😝',
   onClick: () => window.location = options.destination
};

function Button(settings) {
  return new Button.prototype.init(settings)
};

Button.prototype.init = function(settings) {
  options = Object.assign(options, settings)
  createElement(options)
};

createElement = (options) => {
    let divElement = document.createElement("div")
    divElement.innerHTML =  options.text
    setAttributes('attribute', divElement, {'class':options.className})
    setAttributes('listener', divElement,  {'click': options.onClick})
    document.querySelector('body').appendChild(divElement)
};

setAttributes = (type, el, attrs) => {
   for(let key in attrs) {
     type === 'attribute'
     ? el.setAttribute(key, attrs[key]) 
     : el.addEventListener(key, attrs[key])
   }
};

showElement = () => {
  const elements = document.querySelectorAll(options.className)
  return Array.prototype.map.call(elements, node => ( { node } ))
};

containsClass = (elem, yourClass) => {
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
}