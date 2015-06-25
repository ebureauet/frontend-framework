# Frequently Used Commands

## Things To Remember
* You input your commands using terminal or shell interface such as GitBash or GitShell.
* (this is what most beginners always forgets) Make sure your command prompt is at your correct project path where its followed by 'master'. See example below:

In linux style, (gitbash/cygwin terminal) command prompts are like this:
~~~
OWNER@COMPUTERNAME-PC /D/projects/myproject (master)
$ _
~~~
In Windows (powershell/gitshell) style, command prompts are like this
~~~
D:\projects\myproject [master]> _
~~~
* When you see the above text on your command line interface, that means you can input commands, otherwise it is busy processing and you will not able to issue commands.
* When it is busy processing or seemed not responding, hit 'Ctrl + C' to make it stop and bring back the command prompt.
* The text 'master' simply refers to what is the current branch your working folder is on.

### GIT

Note: These are mostly basic git commands which I find using frequently and is enough for modifying and updating scenarios. These commands have variations that does same thing with slight configuration. In the long run we will update this list with more advanced commands as we go along using them.

To see current information about your working folder, it shows if you have new files, modified files or deleted files.
~~~
$ git status
~~~

This lets you set all the files that are new and modified to the staging. Any file listed as 'staged' can be safely committed.
~~~
$ git add .
~~~

Same as above except, it will also include deleted files to be staged.
~~~
$ git add --all
~~~

Staged files will be committed (they will now be tracked as officially added or modified), you can also write a message log about why you do the commit so the other team members working on the same project will know what is going on, the message will be attached to the committed files in the batch.
~~~
$ git commit -m "your commit message log"
~~~

This uploads the commits on the remote repository on github.com so it will be updated.
~~~
$ git push origin master
~~~

Get changes on the origin master (remote repository on github.com) and download it to your local repository so your local files will be updated.
~~~
$ git pull
~~~

To see the list of branch in your repository. In the list, the branch name with * before it is the current branch.
~~~
$ git branch
~~~

To switch to another branch, e.g: 'anotherbranch'. Note: you must maintain a clean working directory on your branch before switching to another branch, that means no untracked files (new files), deleted files or modified files, because if they are not committed to the current branch these files will maintain their state on the branch you switched to.
~~~
$ git branch anotherbranch
~~~

To merge another branch (e.g. 'anotherbranch') to your current branch. Git will determine the merge algorithm automatically.
~~~
$ git merge anotherbranch
~~~

To delete a branch regardless if it is not yet fully merged.
~~~
$ git branch -D anotherbranch
~~~

To remove all uncommitted files like new files, deleted files, modified files and bring them back to their last commit status:
~~~
$ git reset --hard
~~~

To sync from remote repository using "theirs" merge strategy (To auto-merge without conflicts):
~~~
$ git pull -X theirs
~~~


### GULP

Gulp runs a number of tasks in the background. You can choose which gulp command you need to use based on situations:
Note: This gulp commands may change in the future as I go figure much better task implementations on certain situations.

Default command, it waits for any changes on the source folder ('src/') particular files that ends with .scss, .html, .js. Then it runs precompilers and bundlers to update the pre-build files on the source so they can be tested. You need to reload the page on the browser to see the changes.
~~~
$ gulp
~~~

Serve command, it is same as the above but it also starts a server and allows you to see changes automatically on the internet browser of any device without reloading.
~~~
$ gulp serve
~~~

Gulp sass command, compiles your .scss. It only runs once, unlike the commands above where they also watch changes and re runs their tasks.
~~~
$ gulp sass
~~~

Gulp html command, concatenates your included .html files to main html file template, It only runs once.
~~~
$ gulp html
~~~

Gulp scripts command, creates bundled .js files containing all of your required .js modules. It only runs once.
~~~
$ gulp scripts
~~~

Gulp makeicons command, creates a ready to use webfont package and css classes from your svg files located in 'src/svg/' folder.
~~~
$ gulp makeicons
~~~

Gulp build command, finally creates or updates a folder 'build/' and puts the production version of your project. The files produced are optimized, minified and compressed so they can be small files in size.
~~~
$ gulp build
~~~
