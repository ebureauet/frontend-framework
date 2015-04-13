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
8. Autoprefix CSS
9. Image Compression Tools
10. JSHint, HTMLhint, CSSLint
11. Icon Font Generation
12. BrowserSync
13. Notifier

### Production

1. Jquery
2. Normalize (CSS Reset)
3. OwlCarousel (Slideshows, Carousels)

## Project Setup  

### System Requirements:

* Node.js [download link](https://nodejs.org/download/)
* Git Commandline Tools
  * GitBash [download link](http://git-scm.com/downloads)
  * GitShell [download link (also has windows gui of github)](https://windows.github.com/index.html)
* Phyton [download link](https://www.python.org/downloads/) (required for browsersync)
* Visual Studio 2013 update 4 (required for browsersync and libsass)
* Install Node-GYP (required by libsass)
~~~
$ npm install -g node-gyp
~~~

### Starting Your New Project

If you wish to use this as a foundation to your new project then you will need to fork this repository, by doing so it will create a copy of this repository on your github account (note: the cloned repository will be open to public), at this point you should rename the cloned repository to a new name of your project.

If you want to contribute and help me improve this 'Website Starter' project. Just clone this repository to your local without forking and ask a request to make you an authorized contributor, so you can write changes to this repo.

### Setting Up Local Repository

1. Clone your new project repository (copy url from the 'HTTPS clone URL' on the github sidebar)
~~~
$ git clone https://github.com/teej043/your-new-project.git
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
