---
title: My emacs development workflow
author: Xing Wenju
date: 2018-11-18
excerpt: "Awesome and fluid workflow with emacs when developing"
---
# Emacs workflow

## Writing a blog

`SPC SPC` to call my-gridsome-create-newpost-empty

`SPC p !` to call projectile-run-command-in-root and then type `deploy-master`,
this will push to `github` and deploy directly in [My Gridsome Blog](https://gridsome.netlify.com)

## Doom Emacs
As you know, I’m fond of the notion of living in Emacs to the greatest extent
possible. For me, that’s an ongoing process:a process that is always seeking
perfection but that is never complete.

One of the highest learning curves I have ever had to deal with was getting into
Emacs. Doom is very much built around Evil Mode and is meant to make VI users
feel at home.

I also would like to call my Emacs configuration EOS, The Emacs Operating
System. It’s a thing of beauty. I have modules for nearly every component of his
workflow—even most of his Web browsing. Those modules are supported with a
powerful configuration made by doom emacs, a configuration for stuborn emacs
user.

To get started, make sure you have Emacs installed and then follow the [Doom
installation guide](https://github.com/hlissner/.emacs.d#installation)

The module setup is nice because it allows you to choose the parts that support
your workflow while ignoring the rest. If you have a minimal configuration, a
good strategy would be to clone EOS, make the changes that are sensible for your
workflow, and then install it. If you already have an extensive configuration,
doom’s configuration will serve as a model for rationalizing your
configuration’s structure and as a source of ideas for additions to your
configuration.

Even if you aren’t interested in moving your life into Emacs, doom’s
configuration is worth looking at for the many ideas you can mine from it. It’s
an excellent resource.

<p>
<img class="progressiveMedia-image js-progressiveMedia-image"
data-src="https://cdn-images-1.medium.com/max/1000/1*I6svBlHhkufsMTYbC5YFUw.png"
src="https://cdn-images-1.medium.com/max/1000/1*I6svBlHhkufsMTYbC5YFUw.png">
</p>


<p>
<img class="progressiveMedia-image js-progressiveMedia-image"
data-src="https://cdn-images-1.medium.com/max/1000/1*IV-oNecF-hVgi9vInBxWZA.png"
src="https://cdn-images-1.medium.com/max/1000/1*IV-oNecF-hVgi9vInBxWZA.png">
</p>


By default, the screen will be in “normal” mode, which means that it is
expecting commands (just like if you opened up vi). If you hit the “i” key, it
will convert to INSERT mode and you can type text as you normally would in vi.
To go back to normal mode, hit the Escape key. Once you’re back in normal mode,
you can navigate to other files within the same project by using the sequence:

### SPC SPC

This opens up the already familiar navigator and lets you pick another
file to switch to within the same project. If you want to open a file from a
different project, you can use the “SPC p p” sequence from earlier again. If you
would like to switch between files that you have already opened (these currently
open screens are called “buffers” in Emacs) then you can use:

### SPC ,

Evil mode emacs is so vi-esque that your old friends “:w” and “:q” are
available to save and quit as well.

Window Management and Navigation What good is an editor if you can only have a
single thing on screen at one time? Not much good, and it makes your 4k monitor
cry to be so underutilized. In Emacs, you can easily split the screen
horizontally and/or vertically into different windows that contain different
data. In the background, Emacs has a bunch of buffers open, one for each file
you have opened to edit. When you open a window, it assigns a buffer to that
window. If you happen to have the same file open in two different windows, then
you are actually editing the same buffer! So if you edit the contents of one
window, you’d see that change happening on all of the other windows with that
same file. This can actually be super useful if you have a long file and you
want to look at one part of it while you edit the other part.

So how do you create these new windows? To split your current window into two
side-by-side windows with Doom, press:

### SPC w v

This will open up a split window for you like this with the same buffer
open in both windows:

You may be starting to see a pattern in these key presses. They are actually
categorized! SPC is the evil leader, so it indicates that you want to execute
some command. “w” is actually for the “window” category. If you forget exactly
which key to press, but you can remember the category, then Doom has the plugins
set up to guide you through the process. For example, pressing:

### SPC w
will open up this guidance section in the minibuffer:


You can see that “v” executes evil-window-vsplit. Can you see what key to press
instead of “v” if you wanted to split the window into top and bottom? I’ll give
you a hint — it’s just called evil-window-split.

Once you have some windows open, you need to be able to move in between them.
Your mouse will actually work, but that’s not very Emacs-esque. There are a few
different ways, but my favorites to move around are:


And what if you want to get rid of some of these windows? To close the currently
selected window:

### SPC w c

You can also use Ctrl-X 0 (zero). There are a ton of other things you
can do with these windows. Go through the list of options shown after pressing
“SPC w” and try them out!

File Structure Navigation (neotree) What if you don’t quite know what your
project layout looks like and you’re more comfortable seeing a tree of your file
system? Fear not! Neotree is one of the most widely used file system tree views
in Emacs, and it comes preconfigured with Doom.

To open the Neotree view:

### SPC o n
You can do this from pretty much anywhere (except insert mode — so think
anywhere you would be able to use :w or :q). The really great part is that this
is actually a smart open! If you are not currently inside of a Projectile
project, then it will start with your home folder. If, however, you already
selected a project and are working in that context, it will open up the tree
view of just that project.


You can use the arrow keys to move up and down on tree, or if you’re already
used to it — h,j,k and l also work. Pressing ENTER on a file will open it up in
the original window and move the focus of your cursor over to that window.

To create a new file in neotree so you can start editing it, press the “c” key.
It will open up a dialog in the minibuffer to let you specify the path to the
file. Once you are done typing the path, hit enter and it will close the
minibuffer and create the file (and any parent folders) in neotree for you to
select and open.

To delete a file or folder that you have selected in neotree, press:

C-c C-d If you are currently in the neotree window and you want to close it, you
can just press the Escape key or the “q” key. “SPC w c” will still work, but
escape is a lot more intuitive to me since I feel like I am closing out a
temporary dialog.

Using the terminal Finally, what if you want to do something in the CLI that you
don’t have (or don’t know) the keybinding for yet? Do you have to leave Emacs
for this? Fear not!! You can open up a terminal instance right in Emacs as one
of its windows. I personally find this handy for doing git-related commands
since my muscle memory for git is much more tied to the CLI than to the editor.

To open up a CLI window, press:

SPC o t You may have gotten the idea of those categories from earlier. Since we
use “SPC o t” for the terminal and “SPC o n” for neotree, you can probably guess
that “o” is the category for opening popup windows.


You can perform whatever CLI operations you want in here, and even use the
window navigation keys to switch between your editing windows and the CLI
window. Once you are done with the terminal, you can close it by pressing:

C-x 0 (zero) This will close it back out and return you to your normal editing.

Conclusion One final tip — if you are sure that a command must exist for
something but you aren’t sure what it’s called, press Alt-X (or “M-x”) on your
keyboard and you will get the buffer to actually type the named commands into
Emacs. Each of the key sequences listed here is actually tied to essentially a
function name, and you can call that function by searching for it as well. If
you decide that you don’t actually want to call a function after all, you can
always press Ctrl-G to cancel whatever you were in the middle of doing.

This is only barely scratching the surface of what kind of power you have
available, but hopefully it can help you get over the initial learning curve and
start down the path of Emacs wizardry!

## Ref:

1. [Doom Emacs for Newbies](https://medium.com/urbint-engineering/emacs-doom-for-newbies-1f8038604e3b)
