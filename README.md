# E-bureauet Website Starter

This is a starter project template for use by E-bureauet frontend developers.

## Tools

### Development

1. LibSass (NodeJS CSS Preprocessor)
2. Bootstrap-Sass
3. Susy + Breakpoint (Grid System optional)
4. Browserify
5. HTML File Includes
6. Source Maps
7. Minify CSS, Uglify JS
8. JSHint, HTMLhint, CSSLint
9. Image Compression tools7
10. BrowserSync

### Production

1. Jquery
2. Normalize (CSS Reset)
3. OwlCarousel (Slideshows, Carousels)

## Project Setup  

### System Requirements:

1. Install node.js
2. Install ruby 2.1.5+
3. Install sass
4. Install phyton (required for browsersync)
5. Install Visual Studio 2013 update 4 (required for browsersync)

### Setting Up Local Repository

1. Clone the repository

~~~
git clone https://github.com/teej043/website-starter.git
~~~

2. Install Node dependencies

~~~
$ npm install
~~~

3. Install Bower dependencies

~~~
$ bower install
~~~

## Usage

The gulpfile in this project is setup to run `gulp-sass` and to watch the scss file for changes. Use the `gulp` command to start the process.

~~~
$ gulp
~~~

That's it!
