#General Ribbon Characteristics:

Note: The codes below is using BEM naming convention methodology

## The Block

~~~
<section class="r r--ribbonname">
</section>
~~~

### Charactertics:
* It can have background color
* It can have background image 
* It always spans full width of the window view port
* For modifying this block on general ribbon level, we can add BEM modifier class e.g. "r--nopadding"
* For modifying this block on specific ribbon level, we can add BEM modifier class e.g. "r--ribbonname--nopadding"

## The Inner Block

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

~~~
<section class="r-ribbonname">
	<div class="r-ribbonname__inner">
		<section class="c-componentname">
		</section>
	</div>
</section>
~~~
