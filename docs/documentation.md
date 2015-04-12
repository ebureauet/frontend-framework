# E-bureauet Website Starter Documentation

## About

E-bureauet Website Starter is a frontend foundation for web projects that is built on top of nodejs tools that brings several technologies to help in the development and build process of a frontend (static html site) development for a website project. It is designed to have the best practices and standards to provide robust static html site frontend builds that makes up the actual website that has an actual backend (cms, .net or php). This Website Starter is basically catered for E-bureauet frontend developers, but the backend team are also encouraged to learn how to use it.

## TL;DR



## Why use the Website Starter

The Website Starter is not just a blank frontend template, but also a robust workflow for the developers that opens up access to efficient tools:

### GIT and GITHUB

We use Github.com because its a service that runs around the 'git' VCS technology (version control system) for source management, it caters to open source projects but we already have a private account which render our projects not to be 'open source' or publicly available to anyone outside the team. GIT is a VCS or Version Control System implementation which is what makes collaborators record change history, push updates, pull changes, compare changes, merge changes from the local repository to the remote master repository.

Why we use git?

* Git is small, fast and modern version control system implementation.
* History tracking, Lets you see why, when and what any team member/collaborator did to a file.
* Distributed, so network connectivity does not block work. You can have your own local repository that you can commit your changes to.
* Using Git on command line interface (gitbash) is easier than you think.
* Content level precision, not whole files.
* Git + GitHub allows you to focus on the objectives and the people more than the aspect of using source management tool.


### CSS Preprocessors

CSS Preprocessors are alternative stylesheet coding language (but it still accepts regular CSS syntax) that adds more power to the css writer in that it opens up functionalities like able to use variables, create functions, use math calculations, nesting syntax (easier to read), and much more. We use SASS (short for Syntactically Awesome Stylesheets) as our CSS preprocessor.

### HTML Includes

Allows frontend developers to split a supposed html document into separate parts or partial html source files. This opens up a more modular approach in creating and maintaining html templates especially when there is a collaboration between frontend developers for one project instance.

### JS Modules

This is the same with the 'HTML Includes', where it allows developers to create one javascript file containing required .js files; they could be individual custom javascript files or javascript plugins/libraries. We use the tool Browserify to do this task.

### SVG Icon Fonts Generator

From the emergence of Flat UI designs and higher mobile display resolutions (retina display) Vector graphics finds itself becoming a mainstay in website development. What is an icon font anyway? Icon fonts are a collection of glyphs (vector shapes or simply 'icon' drawings), icon fonts are basically a collection of SVG files combined together that you can use easily by positioning inline to your html texts elements like (e.g.: when you want to use a customized symbol for your unordered list instead of using the default dot or disc symbol). You can manipulate icon fonts color, or resize them the same way you do with regular text fonts. There lots of ways to obtain icon fonts, but if you want a more customized icons for your site then it is really difficult to obtain a fully working icon font.

So I added an ability to the workflow to generate icon fonts easily, all you need to do is obtain or create your .svg files and put them to the svg folder. The build system will handle the process of combining these svg files into web font formats ('woff', 'ttf', 'eot') and generate the .scss file to create classes ('.icon--logo') making it easily available for you when you want to use them in your html page.
