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
14. Sprite Generation
15. SVG to PNG

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

If you wish to use this as a foundation to your new project without cloning or forking (your project will still be tied to this original master repository) but having your repository independent from this starter kit's updates, then you will need to use "Download ZIP" and extract the folder 'website-starter-master/'. You must rename this folder to the new project name you like. Next, if you have installed Git Bash you can right-click on your project folder and choose 'Git Bash' or 'Git Bash here'. It will open the command prompt where you should type and enter this:
~~~
$ git init
~~~
At this point you now have your own git local repository, next thing to do is add and commit the contents of your folder by doing this:
~~~
$ git add --all
$ git commit -m "My first commit"
~~~

Now, go back to your github.com account and create a new repository bearing the same name as your new project folder. Then follow the steps about "push an existing repository from the command line". It goes like this: (Note: Change `demo-user` to your github account name, and change `demo-project` to name of the new project folder)
~~~
$ git remote add origin https://github.com/demo-user/demo-project.git
$ git push -u origin master
~~~
By doing so it will link your local repository on your github account as your remote repository. Which you can now push your files to your github account:
~~~
$ git push origin master
~~~

If you want to contribute and help me improve this 'Website Starter' project. Just clone this repository to your local without forking and ask a request to make you an authorized contributor, so you can write changes to this repo.

### Setting Up the Project Workflow

Now, that your repository is created you must next set up the project workflow system by doing the following:

1. Install Node dependencies
~~~
$ npm install
~~~
2. Install Bower dependencies
~~~
$ bower install
~~~

## Usage

The gulpfile in this project is setup to run `gulp-sass` and to watch the scss file for changes. Use the `gulp` command to start the process.

~~~
$ gulp
~~~

That's it!

## Browse the Documentations:

* [About](https://github.com/ebureauet/website-starter/blob/master/docs/documentation.md)
* [Cheat Sheets](https://github.com/ebureauet/website-starter/blob/master/docs/thecheatsheets.md)
* [Working Folders](https://github.com/ebureauet/website-starter/blob/master/docs/workingdirectory.md)
* [Working with HTML](https://github.com/ebureauet/website-starter/blob/master/docs/workingwithhtml.md)
* [Working with SASS](https://github.com/ebureauet/website-starter/blob/master/docs/workingwithsass.md)
* [Working with JS](https://github.com/ebureauet/website-starter/blob/master/docs/workingwithjs.md)
* [Working with Icon Fonts](https://github.com/ebureauet/website-starter/blob/master/docs/workingwithiconfonts.md)
