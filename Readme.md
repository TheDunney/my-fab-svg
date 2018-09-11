My Fab SVG animatable via a JS API .


```js
var theFabSVG = require('my-fab-svg')
var firstFabSVGonthepage = theFabSVG('mySVGp1')

// create a placeholder HTML element on the page with corresponding #id
// for example ... <div id="mySVGp1"> <div>
// ... then to animate the rectangle in that instance of the SVG do ..
firstFabSVGonthepage.rect1animate();

```

## Installation


This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install my-fab-svg
```

Follow [our installing guide](http://expressjs.com/en/starter/installing.html)
for more information.

## Features

  * create multiple instances on the page
  * animate each instance independently

## Docs & Community

  * 


### Security Issues

If you discover a security vulnerability in Express, please see [Security Policies and Procedures](Security.md).

## Quick Start

In order to use the animated SVG module the devp will use it by putting an HTML element on the page with a unique #ID. The devp will then require the svg animation module, passing it the #ID, and the module will return a namespace object which is specific to that instance of the SVG on the page, and which exposes the methods for animating the SVG, and which is assigned to a JS vairable 

... for example if we have an SVG animation module called 'myFabSVG' ... which provides an animation method called 'rect1animate()' ... and we install the module using npm so that it is accessible to our js main script in the dev env ... and we create a place holder HTML element on our page ...
    <div id="mySVGp1"> <div> 
... and we then require the svg animation module in as follows ...
    var theFabSVG = require('my-fab-svg');
    var firstFabSVGonthepage = theFabSVG('mySVGp1');
... then to animate the rectangle in that instance of the SVG we do ..
    firstFabSVGonthepage.rect1animate();


```bash
$ npm install my-fab-svg
```




