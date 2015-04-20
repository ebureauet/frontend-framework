# Working with HTML

The working html source files are all located in 'src/html/' folder.

## Templating System

Before we begin working with the html files, you must know that we are using a more modular approach in that we maintain several small markup parts (or partial html files) and render them all together into one static output html file. Similar to actual server side web content management systems where its using a template engine in which small parts of html are rendered to form a single webpage with dynamic data from a database. However, since we are building frontend (and not an actual website), we are supplying limited data only.

The very idea of applying modular templating system methodology to our frontend workflow is to provide both maintainability, distributively and scalability to the project:

### Maintainable

It is easy to maintain frontend project when you can find certain parts of a static html page in separate entities (partial html files), rather than finding them in the entirety of a single static html file. You first create a template file (your main html file), in this template you can include partial html files that serves different purposes, as an example you can can create partials like header, content, and footer separately as an individuals, you can then use them (include) into your main template file. You can also define an apprehensible tree folder structure so for your collaborators to make sense of where you put these files to, e.g. template files belongs to 'src/html/templates' folder, while general partials can go to 'src/html/general/' folder, and for feature partials you can maybe add a 'src/html/modules/' folder to store them.

### Distributive

Adding modular approach to your workflow also opens up better collaboration between developers in such a way that a partial file can be maintained by a collaborator, while the other collaborators can work on other partial files, this creates a friction-less, parallel working environment between your team and can be a solution to improve source merge issues with the version control system.

### Scalable

When the project gets bigger this is when modular approach is best, in that it allows a project to grow without duplicating one code base to another. This is because the partial html files can be reused in another html template so as to extend its features. Your partials are the building blocks of your templates.

Overall, the sum of all the advantages mentioned above can greatly enhance the frontend workflow against the traditional development process wherein frontend static html pages are developed in single files rather than having parts of it separated.


## Getting Started

### Template HTML files

The template html files are your base html files. You can only create template html files under the 'src/html/templates/' folder, this is where the Starter Kit looks for them, place them elsewhere and they will be ignored.

### Partial HTML files

The partial html files contains markups that do not have the document head and document body tags. They can be a single container block 'div', they can even be a list 'ul' with several 'li' in it, or any markup structure you want as long as you design them well to be inserted on any template html.

### Including Partial files
Ofcourse the files are still .html files, you can write regular html codes on these files as you do with a regular html. But you are missing a lot if don't utilize the 'partials' and build your static html from ground up by adding them to your 'template' files. To include a partial html file to your main template file: 'demo.html', you need to insert
~~~
@@include('../path/to/partial.html')
~~~
Now the '@@include()' is a directive or function that takes a relative path to your desired partial html file. You need to make sure that the path parameter string value is relative to the calling template file path, so if you are looking to include a partial that is stored inside 'src/html/general/' folder, then you need to prepend '..' to the path as value to the '@@include()' directive.

src/html/templates/demo.html
~~~
@@include('../general/document-top.html')
~~~

This will include a partial file named 'document-top.html' to the 'demo.html'. The 'document-top.html' contains this markup:
~~~
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Demo</title>
  <!--[if lt IE 9]>
    <script src="js/lib/html5shiv.min.js"></script>
    <script src="js/lib/respond.min.js"></script>
  <![endif]-->
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="page">

~~~

Now, let's complete a proper html document onto the 'demo.html' by including this partial called 'document-bottom.html', that has this markup:
~~~
  </div>
</body>
</html>
~~~

src/html/templates/demo.html
~~~
@@include('../general/document-top.html')
@@include('../general/document-bottom.html')
~~~

Now, that we included the 'document-bottom.html' then let's see the output by typing and entering this line 'gulp html' to your command prompt:
~~~
TEEJAY@TEEJAY-PC /C/wamp/www/website-starter (master)
$ gulp html
~~~

By doing so, the system will pre-process the template files and outputs the compiled html files that shares the same names of their template file counterparts (in our example 'demo.html') and puts them into the 'src/' folder.

You can now check this 'src/demo.html' on to your browser, or open the file on your text editor, and you will see this:

src/demo.html
~~~
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Demo</title>
  <!--[if lt IE 9]>
    <script src="js/lib/html5shiv.min.js"></script>
    <script src="js/lib/respond.min.js"></script>
  <![endif]-->
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="page">

  </div>
</body>
</html>
~~~

Now, that we have managed to generate a proper html document by using the template system, we can now go add some content into it.

src/html/templates/demo.html
~~~
@@include('../general/document-top.html')

<div class="content">
  <h1>This is just a demo</h1>
</div>

@@include('../general/document-bottom.html')
~~~

Remember, just because you can use partials at anytime it doesn't mean you should. It also still goes down to how well you structure your markups so that it can also be scalable without running into problems later on.
