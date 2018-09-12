
// import dependencies
// import { TweenMax, CSSPlugin } from "gsap/TweenMax";
// const plugins = [ TweenMax, CSSPlugin ]; 

module.exports = createMyFabSVGInstance;


 function createMyFabSVGInstance(placeholderID) {

  // create an instance of the SVG in the 'placeHolder' element and return an object with the controller methods attached
  return new SVGInstance(placeholderID);
  
 };


 /////////// Define the SVG object instance constructor function //////

function SVGInstance(elmID){

  // define the SVG for this instance
  var SVGElementCode = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="500px" height="250px" viewBox="0 0 500 250" enable-background="new 0 0 500 250" xml:space="preserve"> \
  <g> \
    <rect  id="'+elmID+'_rect1" x="1.535" y="181.732" width="50" height="50" /> \
  </g> \
  </svg>';

  var svgElement = document.getElementById(elmID);
  svgElement.innerHTML = SVGElementCode;


  /////// define the SVG animations timelines for this SVG

  // ... the rect1move animation timeline 
  var rect1move_elm=document.getElementById(elmID+"_rect1");
  var rect1move_rAFref; 
  var x = 0;
  function _rect1move_atimeline (time) {
    x++;
    x = (x>200) ? 0 : x;
    rect1move_elm.setAttribute('x', x);
    rect1move_rAFref = window.requestAnimationFrame(_rect1move_atimeline);
  }
  

  ////// define the SVG animation controls for this SVG

  // ... the rect1move animation controller
  var reqAF1Play = false;
  function _rect1move_actrl (){
    if (reqAF1Play){
      window.cancelAnimationFrame(rect1move_rAFref);
      reqAF1Play = false;
    }else{
      rect1move_rAFref = window.requestAnimationFrame(_rect1move_atimeline);
      reqAF1Play = true;
    }
  }


  ////// define the UI event behaviour of the SVG element
  rect1move_elm.addEventListener('click', _rect1move_actrl);


  ////// expose the public members for this instance
  this.rect1move_actrl = _rect1move_actrl;

}  // end define the SVG Instance constructor function






//  // define the overall access object for the SVG animations in global scope
// window.myFabSVG = {}; 

// window.addEventListener('load', () => {

// 	// wrap setup code in IIFE
// 	(function (globalID) {
// 	//(function () {	

// 		// define the SVG Instance constructor function for this SVG
// 		// will be use to create object corresponding to each instance of the SVG on the page

// 		class SVGInstance {

// 			constructor(elmID) {

// 				// define the SVG for this instance
// 				this.SVGElementCode = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="500px" height="250px" viewBox="0 0 500 250" enable-background="new 0 0 500 250" xml:space="preserve"> \
// 						<g> \
// 							<rect  id="'+ elmID + '_rect1" x="1.535" y="181.732" width="50" height="50" /> \
// 						</g> \
// 						</svg>';

// 				this.svgElement = document.getElementById(elmID);
// 				this.svgElement.innerHTML = this.SVGElementCode;

// 				// create props for the internal svg element to be animated
// 				this.rect1move_elm = document.getElementById(elmID + "_rect1");
// 				// define the SVG animations timelines for this master SVG
// 				this.rect1_a1 = TweenMax.to(this.rect1move_elm, 2, {x:400, paused:true, repeat:-1, ease: Power0.easeNone});

// 				//props used by the ctrl method
// 				this.reqAF1Play = false;
				
// 				// setup the UI event behaviour of the SVG element
// 				this.rect1move_elm.addEventListener('click', () => {this.rect1move_actrl();} );

// 				// Note it is important herein that we use arrow function to wrap the eventlistner callback (as above) this is so that when it is invoked the 'this' will refer to the SVGInstance object and not to the DOM object on which the event occurred (eg a button) 

// 			}  // SVGInstance class constructior


// 			// define the SVG animation ctrl methods for this master SVG   ... these are specific to the above SVGElementCode code

// 			// ... the rect1move animation controller
// 			rect1move_actrl() {
// 				if (this.reqAF1Play){
// 					this.rect1_a1.pause();
// 					this.reqAF1Play = false;
// 				}else{
// 					this.rect1_a1.play();
// 					this.reqAF1Play = true;
// 				}
// 			}

// 		}  // define the SVGInstance Class

// 		// Process the dom for matching placeholders
// 		// get refs to all myFabSVG placeholders on the page and create an object instance for each myFabSVG placeholder in the DOM using the above constructor function
// 		var allSVGElmts = document.querySelectorAll(".myFabSVG");
// 		//var allSVGjsobjects = {};

// 		allSVGElmts.forEach(
// 			(SVGElmt) => {
// 				// get the #id on the placeholder element
// 				var SVGElmtID = SVGElmt.getAttribute('id');
// 				globalID[SVGElmtID] = new SVGInstance(SVGElmtID);
// 			}
// 		);

// 	}(window.myFabSVG)); //end setup IIFE

// }, false); //window loaded eventlistner

