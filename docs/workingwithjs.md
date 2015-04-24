#Working with JS

The working javascript (.js) files are all located in 'src/js/' folder.

## Introduction

### Javascript

Javascript is a programming language made for the web, it lives in your web browsers (although there is one called Node.js, a javascript outside of a web browser, which this whole frontend workflow framework depends on). Javascript can do a lot of things to your web pages, from visuals, intectivity to animations, it has provided users of modern websites with a more cooler user experience.

Most of the internet sites depends on Javascript, on so are our projects. But we also need to make sure that the required load time of these scripts is minimized for a better user experience. Fortunately, the starter kit allows you to do something about that.

## Getting Started

Quite likely is that your project will depend on a number of javascript codes, libraries or modules. Traditionally, to include these files into your html you would do this:
~~~
<script src="src/js/jquery.js">
<script src="src/js/bootstrap.js">
<script src="src/js/validate.js">
<script src="src/js/carousel.js">
<script src="src/js/selectric.js">
<script src="src/js/fittext.js">
<script src="src/js/custom.js">
~~~
Nothing wrong with that, but what if you could just bundle all these files into one by doing it this fewer lines of codes onto your html:
~~~
<script src="src/js/jquery.js">
<script src="src/js/pkgd-main.min.js">
~~~

The Starter Kit workflow uses 'Browserify', a node.js based plugin that allows you to 'require' your js modules and bundle them into one file.

### Requiring JS Files

There are advantages upon using Browserify for bundling your javascripts into one file:

* Single or fewer 'http request' means the web browsers will require minimal time handling the request of these files to server.
* Instead of having all these `<script>` tag lines on your html, a single or few `<script>` tags will make your html source code much cleaner to the eyes of backend developers.
* You could even further optimize load time of these scripts by uglifying (removes comments, removes unnecessary spaces, shortens variables, etc. i.e.: make file size smaller) the javascript bundle file.
* Browserify also has the ability to generate source maps of your bundled scripts, great for when debugging an error on your sourcemap supported browser (e.g. chrome).

#### Your main JS file

First, you need to create your base .js file in 'src/js/' folder, you can name this file 'main-demo.js' or any name enough to remind you that it is the bundle version of all your javascript files.

#### Your JS LIB files

Now, these files are the javascript files that your project depends on; like 'validate.js', 'bootstrap.js' and your config or initialize scripts file 'custom.js'. If these js files are library or plugin scripts then its appropriate to store them in a subfolder called 'src/js/lib/'. You can create any subfolder as long as their names are appropriate to what they must contain.  

#### Bower JS files

Sometimes your dependencies are already installed via 'bower' (an installer/manager focusing on frontend javascript and css plugins like 'jquery','bootstrap' and more). You can also find a bower package of any javascript plugins you want to use with your project by going to [http://bower.io/search/](http://bower.io/search/). Once you get the name of the package you want then you can install the package using bower via the command prompt:
~~~
$ bower install bootstrap --save
~~~
The line '--save' is telling bower to save this install (in this case 'bootstrap') to the 'bower.json' file, so the jquery package will be included in the list of your project dependencies automatically, this means that when you clone the project fresh to another computer, you can just type and enter `$ bower install` on the command prompt and bower will reinstall all your saved dependency listed automatically for you.

Note: The bower packages are located in 'project-name/bower_components'.

#### Bundling the JS files

Go back to your main JS file (e.g. 'src/js/main-demo.js'), and start simply adding the 'require()' function to it, like so:

(src/js/main-demo.js)
~~~
require('../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.js');
require('./lib/carousel.js');
require('./lib/validate.js');
require('./lib/selectric.js');
require('./lib/fittext.js');
require('./lib/custom.js');
~~~
The first 'require()' is accessing a bower package called 'bootstrap', you can notice the path `'../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.js'` is relative to the 'src/js' folder. It is important that the paths you specify to the .js files are correct.

You can also use 'require()' on the other js files other than the base js file. for example on the 'carousel.js', you can reference the main carousel javascript (e.g. 'owl.carousel.js') plugin by using 'require()' and then add the configuation codes for to initialize it.

(src/js/lib/carousel.js)
~~~
require('../../bower_components/owl.carousel/dist/owl.carousel.js');

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:5
    }
  }
})
~~~
The 'owl.carousel.js' is actually a bower package as well, so in the 'require()' we specify the correct file path to it. The code blocks below are for initializing the carousel plugin to make it actually work with your own custom configurations, as you would do in a 'custom.js' script file.

This is a powerful way to make your javascript files usage flexible and modularized.

#### The Output JS file

There is one important thing you have to do next to start bundling these javascript files. And that is by typing and entering this command:
~~~
$ gulp scripts
~~~
This will run the 'Browserify' task that will generate the sourcemap and ofcourse bundle all the required javascripts into one packaged file. The output file will be created alongside your base javascript (e.g. 'src/js/main-demo.js') with a filename of ('src/js/pkgd-main-demo.min.js'). It added the 'pkgd-' as a prefix, and then the '.min.js' as the extension of the filename. You can now reference this file to your html like so:
~~~
<script src="src/js/jquery.js">
<script src="src/js/pkgd-main.min.js">
~~~
Note: for now, the jquery plugin shouldn't be bundled yet. It will change in the future though, so that every javascript files your project depends on will be on one `<script>` tag only.

#### Your JS Assets files

When not all of js 'src/js/lib/' files can't be packaged, there is a folder called 'src/js/assets' for putting in files that cannot be bundled (they have errors when running the webpage), that one particular js file we often use is Jquery. So for now put jquery.js into the 'src/js/assets/' folder and call it traditionally using `<script>` tag. You can also put other js files that required to be called separately, e.g. js files that needs to be put into the head tag of the html document rather than the bottom; such js files like 'modernizr.js', 'html5shim.js' and 'respond.js'.
