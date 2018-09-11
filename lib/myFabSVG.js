
// import dependencies
import { TweenMax, CSSPlugin } from "gsap/TweenMax";
const plugins = [ TweenMax, CSSPlugin ]; 

module.exports = createMyFabSVGInstance;

/**
 * Create a MyFabSVG instance.
 *
 * @return {Function}
 * @api public
 */


 function createMyFabSVGInstance(placeholderID) {

  return function(){
    console.log('creating a MyFabSVG instance for the element with id .... ' + placeholderID );
  }
  
 }

///////////////////////////////



 // define the overall access object for the SVG animations in global scope
window.myFabSVG = {}; 

window.addEventListener('load', () => {

	// wrap setup code in IIFE
	(function (globalID) {
	//(function () {	

		// define the SVG Instance constructor function for this SVG
		// will be use to create object corresponding to each instance of the SVG on the page

		class SVGInstance {

			constructor(elmID) {

				// define the SVG for this instance
				this.SVGElementCode = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="500px" height="250px" viewBox="0 0 500 250" enable-background="new 0 0 500 250" xml:space="preserve"> \
						<g> \
							<rect  id="'+ elmID + '_rect1" x="1.535" y="181.732" width="50" height="50" /> \
						</g> \
						</svg>';

				this.placeHolder = document.getElementById(elmID);
				this.placeHolder.innerHTML = this.SVGElementCode;

				// create props for the internal svg element to be animated
				this.rect1move_elm = document.getElementById(elmID + "_rect1");
				// define the SVG animations timelines for this master SVG
				this.rect1_a1 = TweenMax.to(this.rect1move_elm, 2, {x:400, paused:true, repeat:-1, ease: Power0.easeNone});

				//props used by the ctrl method
				this.reqAF1Play = false;
				
				// setup the UI event behaviour of the SVG element
				this.rect1move_elm.addEventListener('click', () => {this.rect1move_actrl();} );

				// Note it is important herein that we use arrow function to wrap the eventlistner callback (as above) this is so that when it is invoked the 'this' will refer to the SVGInstance object and not to the DOM object on which the event occurred (eg a button) 

			}  // SVGInstance class constructior


			// define the SVG animation ctrl methods for this master SVG   ... these are specific to the above SVGElementCode code

			// ... the rect1move animation controller
			rect1move_actrl() {
				if (this.reqAF1Play){
					this.rect1_a1.pause();
					this.reqAF1Play = false;
				}else{
					this.rect1_a1.play();
					this.reqAF1Play = true;
				}
			}

		}  // define the SVGInstance Class

		// Process the dom for matching placeholders
		// get refs to all myFabSVG placeholders on the page and create an object instance for each myFabSVG placeholder in the DOM using the above constructor function
		var allSVGElmts = document.querySelectorAll(".myFabSVG");
		//var allSVGjsobjects = {};

		allSVGElmts.forEach(
			(SVGElmt) => {
				// get the #id on the placeholder element
				var SVGElmtID = SVGElmt.getAttribute('id');
				globalID[SVGElmtID] = new SVGInstance(SVGElmtID);
			}
		);

	}(window.myFabSVG)); //end setup IIFE

}, false); //window loaded eventlistner

