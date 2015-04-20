# The Development Folder 'src'

The folder named 'src' is your primary working directory, you will find yourself accessing the files in this folder a lot during development.

## Development Subfolders

There are subfolders inside the 'src/' folder that contains actual source files that you need to modify in order to create changes to project output. Namely:

### HTML

This is where the '.html' files are located. It has the 'templates' subfolder where the actual main html source files are located (Note: The .html files in the root of the 'src' folder are not the actual source files, they are output html files). The other subfolders may contain partial html source files that the main html source files may require.

### SCSS

This is where the '.scss' stylesheet files are located. The SCSS folder has '.scss' files in its root (e.g. 'styles.scss') which are the main stylesheet files (unlike 'src/html/' folder where it has 'templates' folder for the main html source files). stylesheet files (file names which begins with "_" character) in its subfolders are partials or required styles that are meant to be imported by the main stylesheet files.

### JS

This is where the '.js' javascript files resides. Like the 'SCSS' folder, its main .js files (e.g. 'main.js') are located in its root. The subfolders are containers, for example javascript plugins or third party javascript files should be located in 'src/js/lib/' folder, other '.js' files can be put inside the 'src/js/general/' folder. Use the main 'src/js/main.js' file to require the other javascript files in subfolders.

### SVG

This is where you place your '.svg' files that you wish to be converted into icon fonts. The icon font generated will be located in 'fonts/icons/' folder. There is however some guidelines on the correct exporting of .svg files from your svg editor that needs to be followed so the generated icon fonts won't have any unexpected results.


## Assets Subfolders

These are subfolders that contains static files in that they are not source files, but they are part of the project resources.

### IMAGES

The 'images/' folder should contain images in different file formats. For raster image files '.gif', '.png' and '.jpeg' or '.jpg'. For vector image files '.svg'. On the production build, these image files will also undergo compression and optimization process so their file sizes will be smaller.

### FONTS

The 'fonts/' folder should contain webfont files. A font can have multiple extensions format ('.woff', '.woff2', '.svg', '.ttf' and '.eot'). Also, this folder has a subfolder named 'icons/' where it contains webfont files that gets generated based on the 'SVG' folder files.

## Generated Files and Subfolders

These are generated files and subfolders that do not necessarily need to be modified or edited, they are static files that are in fact output files generated based on the source files from previous folders mentioned above. They are not necessarily important to be included in the remote repository since they are only generated files, however their existence in this folder serves a purpose, in that they are needed for local testing the project directly in development folder, rather than building the production output.

### CSS

This folder contains generated stylesheet files based on the compiled source stylesheet files from the 'scss/' folder.

### CSS/ICONS

This folder resides under the 'src/css/' folder. It has generated webfont files based on the list of asset files inside the 'src/svg' folder.

### STATIC .js FILES

The 'src/js/' folder has a file called 'main.min.js' it is actually a generated file based on the 'main.js' file on the same folder.

### STATIC .html FILES

The development folder has .html files in its root (src/*.html), they are however static and are generated output based on the preprocessed source files inside the 'src/html/' folder. You use these output html files to test your project development on the browser.
