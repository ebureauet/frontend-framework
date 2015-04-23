#Working With Icon Fonts

The working .svg source files are all located in 'src/svg/' folder.

## Introduction

Icon fonts are those symbols and shapes (often referred to as 'glyphs') you see often on modern websites, they are fonts in that they only have single color just like regular text fonts, and you can manipulate them using some text and font style properties (e.g. 'text-decoration', 'text-shadow', 'font-size', 'color', 'text-stroke', 'background-clip : text', etc.). And best of all is that they are resolution independent, in that they scale to whatever size and yet they don't lose quality, unlike bitmaps (or raster image files) where their shapes edges gets reduced into pixels once you zoomed them in.

In todays web design, icon fonts are now prevalent and will probably stay for a longer time. Gone are the days when you have to create pixelly symbols or icons in your photoshop software, export the image in .png or .gif (raster formats) and display in your web page. Due to the modern web designs (flat design), icons now are flat, in solid color, and have to be made in a vector editing software like Illustrator, CorelDraw or InkScape in a form of .svg (scalable vector graphics) the resolution independent graphic image. But the svg needs to be converted into glyphs before it can function as a font, and that is what we are going to do next.

## Getting Started

Generating icon fonts in this starter kit is really easy, provided if you already have the .svg files. Guides on how to create a drawing in .svg files is out of the scope of this tutorial, a skillful graphic artist who is adept at using drawing tools like InkScape or CorelDraw can design shapes and export them into .svg file format. However we will going discuss about how to export .svg files in InkScape software that will be compatible with the icon font generator that the starter kit has.

### Exporting SVG from InkScape

InkScape is the best free software alternative to Adobe Illustrator and Corel Draw, I even believe so that it is the better tool to use for icon fonts or svg for use in web in general, because it's native format is already SVG.

Open the svg file in InkScape, then degroup every shapes (Ctrl+Shift+G), convert to pathes (Ctrl+Maj+C) and merge them (Ctrl++). Then save you SVG, prefer 'simple SVG' file type.

For using correct glyph size and canvas size, you can open the provided .svg files in InkScape as templates to your future .svg files you're going to make.

### Create Icon Font from SVG

Once you have the .svg files you want to convert into icon font glyphs, then Go to 'src/svg/' folder and put all your .svg files there. You can now use your command prompt and enter this command:
~~~
$ gulp makeicons
~~~
This will read each .svg files and into a process of combining them, analyzing them, adjust their sizes, convert them into glyphs, assign a reference code to each of them, and put them into different web font formats ('woff', 'svg', 'ttf' and 'eot'). After that, the system will generate an .scss file 'src/scss/components/_icons.scss' where the css classes are defined and ready to be used in to your html elements. The stylesheets and html will also be pre-processed.

### Using the Icon Fonts

The class names generated are based on the original .svg filenames, for example if the .svg filename was 'demo.svg' then the class name will be 'icon-demo'. So, to use an icon font you simply need to put the class to an element, for example:
~~~
<span class="icon-demo"></span>
~~~
Then that blank `span` element will create a psuedo child element ('::before') that will have the 'demo.svg' icon in it.

## Why not use SVG directly instead?

Well, you can indeed use the .svg files easily and directly into your html (because they have xml structure similar to html) or by assigning them as source to an `<img>` element, or having them as 'background-image' to your stylesheet. But one thing that is not so easy about using them in this manner is that it's difficult to change their color. Icon fonts on the other hand, are treated like fonts to your html texts are, that is, you can change their style rules as you do with your fonts; `color : red;` for changing the color (albeit one color only, just like fonts) and `font-size : 30px;` to resize them. Any font and text styling will apply to them.
