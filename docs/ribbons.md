#General Ribbon Guideline:

This documentation outlines the building of a ribbon markup.

Note: The codes below are using [BEM](https://en.bem.info/methodology/) naming convention methodology

## The Block

~~~
<section class="r r--ribbonname">
</section>
~~~

The Block is the main parent element for the ribbon.

### Charactertics:
* It can have background color
* It can have background image 
* It always spans full width of the window view port
* For modifying this block on general ribbon level, we can add BEM modifier class e.g. "r--nopadding"
* For modifying this block on specific ribbon level, we can add BEM modifier class e.g. "r--ribbonname--nopadding"

## The Inner Block

The Inner Block is container element for the ribbon. It is used to contain the actual components for the ribbon.

~~~
<section class="r r--ribbonname">
	<div class="r r--ribbonname__inner">
	</div>
</section>
~~~

### Charactertics:
* It spans a general page container width (usually 1200px, or depending on design)
* Or if using bootstrap this block serves as equivalent to ".container" or ".container-fluid"
* This inner block can have its own background color or background image as contrast to the parent block, depending on design


## Component Block

~~~
<section class="r--ribbonname">
	<div class="r--ribbonname__inner">
		<section class="c--componentname">
		</section>
	</div>
</section>
~~~

The Component Block is a modular block that should always be reusable anywhere. It can try to inherit whatever the parent ribbon will give to it, but in general this block should always have its own definitive style.

This block should also have to incorporate the grid system as this row should by default become a row and child nodes are columns. Of course this can also be container that has rows as child nodes if required.

### Charactertics:
* It holds a component level markup
* It is important that this block will live indepedently across any other ribbon parents i.e. become modular
* This block should always have its own style in component level (so to achieve ["separation of concerns"](https://en.wikipedia.org/wiki/Separation_of_concerns))
* Parent ribbon block can change the style if so needed as requirement 
* This block needs to be a "row" as equivalent to bootstrap ".row" class, therefore the child nodes should be columns
* If this block needs to be a "container" as equivalent to bootstrap ".container" or ".container-fluid" then do so as long as the child node is a ".row"
~~~
SASS:
.r--ribbonname{
	.c-componentname{
		// change the padding
		padding: 10px;
	}
}
~~~
