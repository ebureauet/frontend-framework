# E-bureauet Website Starter

This is a starter project template for use by E-bureauet frontend developers.

## Tools

### Development

1. LibSass (NodeJS CSS Preprocessor, alternative to the ruby powered sass)
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

* Node.js [download link](https://nodejs.org/download/)
* GitBash or GitShell Command Line Interfaces [download gitbash](http://git-scm.com/downloads) [download gitshell (also has windows gui of github)](https://windows.github.com/index.html) (terminal/commandline interfaces)
* Ruby 2.1.5+ [download link](http://rubyinstaller.org/downloads/)
* Sass [download link](http://sass-lang.com/install)
If you are having security errors installing sass, try entering this:
~~~
gem source -a http://rubygems.org/
~~~
* Phyton [download link](https://www.python.org/downloads/) (required for browsersync)
* Visual Studio 2013 update 4 (required for browsersync and libsass)

### Setting Up Local Repository

1. Clone the repository

~~~
$ git clone https://github.com/teej043/website-starter.git
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
