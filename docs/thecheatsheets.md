# Frequently Used Commands

## Things To Remember
* You input your commands using terminal or shell interface such as GitBash or GitShell.
* Make sure your command prompt is at your correct project path where its followed by 'master' text (this is what most beginners always forgets). See example below:
in Unix style, (gitbash/cygwin terminal) command prompts are like this:
~~~
OWNER@COMPUTERNAME-PC /D/projects/myproject (master)
$ _
~~~
in Windows (powershell/gitshell) style, command prompts are like this
~~~
D:\projects\myproject [master]> _
~~~
* When you see the above text on your command line interface, that means you can input commands, otherwise it is busy processing and you will not able to issue commands.
* When it is busy processing or seemed not responding, hit 'Ctrl + C' to make it stop and bring back the command prompt.

### GIT

Note: These are mostly basic git commands are only which I find using frequently. These commands have variations that does same thing with slight configuration. In the long run we will update this list with more advanced commands as we go along using them. 

~~~
$ git status
~~~
To see current information about your working folder, it shows if you have new files, modified files or deleted files.

~~~
$ git add .
~~~
This lets you set all the files that are new and modified to the staging. Any file listed as 'staged' can be safely committed.

~~~
$ git add --all
~~~
Same as above except, it will also include deleted files to be staged.

~~~
$ git commit -m "your commit message log"
~~~
Staged files will be committed (they will now be tracked as officially added or modified), you can also write a message log about why you do the commit so the other team members working on the same project will know what is going on, the message will be attached to the committed files in the batch.

~~~
$ git push origin master
~~~
This uploads the commits on the remote repository on github.com so it will be updated.

~~~
$ git pull
~~~
Get changes on the origin master (remote repository on github.com) and download it to your local repository so your local files will be updated.
