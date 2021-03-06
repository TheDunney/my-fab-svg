
////// Dependencies
var gsapTweenMax =  require("gsap/umd/TweenMax");
var gsapCSSPlugin =  require("gsap/umd/CSSPlugin");
const PLUGINS = [ gsapTweenMax, gsapCSSPlugin ]; // just to be sure webpack detects them

////// Exports
module.exports = createMyFabSVGInstance;

function createMyFabSVGInstance(placeholderID) {

  // create an instance of the SVG in the 'placeHolderID' element and return an object with the controller methods attached
  return new SVGInstance(placeholderID);
  
};


/////// Define the SVG object instance constructor function //////

function SVGInstance(elmID){

  // define the SVG for this instance
  this.SVGElementCode = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="500px" height="250px" viewBox="0 0 500 250" enable-background="new 0 0 500 250" xml:space="preserve"> <g> <rect  id="'+elmID+'_rect1" x="1.535" y="181.732" width="50" height="50" /> </g> </svg>';

  this.svgElement = document.getElementById(elmID);
  this.svgElement.innerHTML = this.SVGElementCode;

  // create propertie required for the internal svg elements to be animated
  this.rect1move_elm=document.getElementById(elmID+"_rect1");

  /////// define the SVG animations timelines for this SVG
  this.rect1_a1 = gsapTweenMax.to(this.rect1move_elm, 2, {x:400, paused:true, repeat:-1, ease: Power0.easeNone});

  ////// define the SVG animation controls for this SVG
  // ... the rect1move animation controller
  //this.reqAF1Play = false;
  
  function _rect1move_actrl() {
    if (this.reqAF1Play){
      this.rect1_a1.pause();
      this.reqAF1Play = false;
    }else{
      this.rect1_a1.play();
      this.reqAF1Play = true;
    }
  }

  ////// define the SVG internal event behaviour of the SVG element
  this.rect1move_elm.addEventListener('click', () => {this.rect1move_actrl();} ); // Important, use arrow function to wrap the eventlistner callback (as above), so that when it is invoked the 'this' will refer to the SVGInstance object and not to the DOM object on which the event occurred (eg a button)


  ////// expose the public members for this instance
  this.rect1move_actrl = _rect1move_actrl;

};  // end define the SVG Instance constructor function
