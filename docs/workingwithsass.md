#Working with SASS

The working sass source files are all located in 'src/scss/' folder.

## Introduction

### CSS Pre-processors

If you haven't heard about the wonderful CSS Preprocessors, you might be living under a rock for four years, or you may knew about it but being a css purist you try wholeheartedly to deny its existence to very depths asking why would I need to over-complicate my CSS workflow for me when it's working fine all these years, and why should I go back to learning how to use command-line tools?. To tell you the truth I also had my reservations against CSS Preprocessors like SASS and LESS, I had the same questions but dismisses the answers when I thought they we're complicated but at the same time truthful. It's not a long time ago when I finally left my comfort zone in the land of CSS and moved to know CSS Preprocessors well, I was then first introduced to SASS and never went back.

### SASS

Syntactically Awesome Style Sheets, is a CSS Preprocessor that just like LESS. The idea of a CSS Preprocessor is to bring in some simple yet powerful scripting like directives and functions (or simply "tools") and have you write a stylesheet very similar to regular CSS while using those powerful tools in a file extension .sass or .scss (I prefer .scss) and then ask a css preprocessor compiler from a commandline to compile your .scss to actual .css stylesheets. Basically, it gives more power to your regular CSS. So much power that it gives you the ability to:

#### Variables and Operators

You can define your own variables and use them anywhere in your stylesheet, so instead of editing the very same value on all style rule (this is what we do in the old CSS), you instead just edit this one variable that you made and every style rule that references this variable will have theirs changed accordingly and automatically.  
~~~
$my-variable: 10px;

body {
  margin: $my-variable;
}
~~~

You can also use standard math operators like +, -, *, /, and %.
~~~
.container { width: 100%; }

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complimentary"] {
  float: right;
  width: 300px / 960px * 100%;
}
~~~



#### Create Functions

In Sass, there are at least two seemingly similar directives that acting like programming function; the 'function' (the actual function) and the 'mixin'. They both accept a variable as parameter and make use the value in that variable to return something.

a Function
~~~
@function my-function($first-number, $second-number){
  @return $first-number + $second-number
}
~~~
a Mixin
~~~
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
~~~

These are really powerful, there so many possible ways it could be proven useful. I can't imagine why I lingered on using just regular CSS for many years.

#### Nesting

You can nest your style rules up. This basically gets rid of the necessity of retyping (or copy-pasting) same class or id names for each child style rule.
~~~
//So this

div.my-block{
  position: relative;
  width: 100%;
  float: left;
  ul.lists{
    list-style: none;
    padding-left: 0px;
    li.list{
      width: 100%;
      a.link{
        text-decoration:none;
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
}

//Instead of having these long lines of classes you have to type

div.my-block{
  position: relative;
  width: 100%;
  float: left;
}

div.my-block ul.lists{
  list-style: none;
  padding-left: 0px;
}

div.my-block ul.lists li.list{
  width: 100%;
}

div.my-block ul.lists li.list a.link{
  text-decoration:none;
}

div.my-block ul.lists li.list a.link:hover{
  text-decoration: underline;
}

~~~

Also, imagine if you had to rename the '.my-block' class for some reason, with the old CSS you would probably rely on the find/replace function of your text editor, on Sass just edit the top most bracket class.

#### Inheritance

You can reuse an existing style rule and apply to another by using the "@extend" directive
~~~
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
~~~
Another good modularity implementation to CSS. really nifty stuff; "One style rule to rule them all".

#### Maps and Control Directives

These are another SASS goodness; Maps are variables that are key:value pairs list (similar to arrays or json), and Control directives are for programming tasks like '@if', '@for', '@each' and '@while'. These are too advanced though for a typical use, but then they can be invaluable in how they can help you in some simple situations like:

SCSS
~~~
$turtles: (
  raphael: red,
  michaelangelo: orange,
  leonardo: blue,
  donatello: purple,
);

@each $turtles, $bgcolor in $turtles {
  .turtle-mask--#{$profile} {
      background-color: $bgcolor;
  }
}
~~~
The output CSS
~~~
.turtle-mask--raphael{
  background-color: red;
}

.turtle-mask--michaelangelo{
  background-color: orange;
}

.turtle-mask--leonardo{
  background-color: blue;
}

.turtle-mask--donatello{
  background-color: purple;
}

~~~
In the SCSS example above, I used a map called '$turtles', inside are four key:value pairs for each turtles. I also used a @each directive to loop through the $turtles map and create a background-color style rule based on the values in the $turtles map.

Imagine, if you have 50 turtles with different turtle-mask colors, the SCSS above will be really helpful on saving you from lots of typing or copy/pasting.

#### Imports and Partials

If you haven't read the Working with HTML documentation, this part about Imports and Partials in SCSS is similar to HTML's Include directive, in that you can import a smaller .scss and import it into your main .scss. It gives your workflow the ability to structure stylesheets using different meaningful named folders and/or filenames.
