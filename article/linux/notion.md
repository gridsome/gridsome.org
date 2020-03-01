+++
title="notion.md"
date="2018-02-16T14:05:34-04:00"
+++


# Notion Tiling

## Mostly used

Win+P up/down
Win+Tab left/right
Win+s   split up-down
Win+k s split left-right
Win+,   swith workspace
Win+Enter Maximize

" ============================================================================
" Netrw Directory Listing                                        (netrw v152)
"   /root
"   Sorted by      name
"   Sort sequence: [\/]$,\<core\%(\.\d\+\)\=\>,\.h$,\.c$,\.cpp$,\~\=\*$,*,\.o$,\.obj$,\.info$,\.swp$,\.bak$,\~$
"   Copy/Move Tgt: /root/Desktop/ (local)
"   Quick Help: <F1>:help  -:go up dir  D:delete  R:rename  s:sort-by  x:special
" ==============================================================================
../
./
.adobe/
.android/
.atom/
.cache/
.config/
.cscope.vim/
.dbus/
.dock-formulas/
.emacs.d/
.fltk/
.gem/
.getmail/
.links/
.local/
.luarocks/
.luarocks_/
.macromedia/
.meteor/
.mozilla/
.node-gyp/
.notion/
.npm/
.pip/
.pki/
.putty/
.ssh/
.vim-fuf-data/
.vim/
.vnc/
.w3m/
Desktop/
Downloads/
VirtualBox VMs/
bin/
dev/
dotfiles/
init/
me/
.osx*
Aptfile*
Brewfile*
Caskfile*
Pacmanfile*
.Xauthority
.Xdefaults
.Xdefaults.light
.aliases
.bash_history
.bash_profile
.bash_prompt
.bashrc
.curlrc
.editorconfig
.emacs
.esmtprc
.exports
.extras
.fbtermrc
.fbtermrc.light
.functions
.gemrc
.git-credentials
.gitattributes
.gitconfig
.gitignore
.gvimrc
.hgignore
.hushlogin
.inputrc
.java_history
.lesshst
.msmtprc
.mutt.alias
.muttrc
.npmrc
.path
.procmail
.python_history
.rediscli_history
.screenrc
.taskrc
.tmux.conf
.todo
.viminfo
.viminfo.tmp
.vimrc
.wgetrc
.xinitrc
dump.rdb
linuxing3@
## Globally available bindings

```sh
       Mod1+C Close current frames or screens

       Mod1+1, Mod1+2, Mod1+3, Mod1+4, Mod1+5, Mod1+6, Mod1+7, Mod1+8, Mod1+9, Mod1+0
              Switch to n:th object (workspace, full  screen  client  window)  within  current
              screen.

       Mod1+comma, Mod1+period
              Switch to next/previous object within current screen.

       Mod1+K K
              Go to first region demanding attention or previously active one.

       Mod1+K T
              Clear all tags.

       Mod1+Shift+1, Mod1+Q, Mod1+Shift+2, Mod1+W, Mod1+Shift+3, Mod1+E
              Go to n:th screen on multihead setup.

       Mod1+Shift+comma, Mod1+I, Mod1+O, Mod1+grave
              Go to next/previous screen on multihead setup.

       Mod1+F9
              Create a new workspace of chosen default type.

       F12, Button3 press
              Display the main menu.

       Button2 press
              Display the window list menu.

       Mod1+Tab
              Forward-circulate focus.

       Mod1+K Tab
              Backward-circulate focus.

       Mod1+K R
              Raise focused object, if possible.






   Bindings operating on all frames
       Mod1+K H, Mod1+K V
              Maximize the frame horizontally/vertically.

       Button3 press
              Display context menu.

       Mod1+R Begin move/resize mode.

       Button1 click at tab, Button2 click at tab
              Switch the frame to display the object indicated by the tab.

       Button1 drag at border, Mod1+Button3 drag
              Resize the frame.

       Mod1+Button1 drag
              Move the frame.

       Button1 drag at tab, Button2 drag at tab
              Move objects between frames by dragging and dropping the tab.

       Mod1+Button4 click, Mod1+Button5 click
              Switch to next/previous object within the frame.



   Bindings operating on top-level (non-transient) frames and screens
       Mod1+T Toggle tag of current object.

       Mod1+L Lock screen

       F1     Query for manual page to be displayed.

       Mod1+F1
              Show the Notion manual page.

       F2     Run a terminal emulator.

       F3     Query for command line to execute.

       Mod1+F3
              Query for Lua code to execute.

       F4     Query for host to connect to with SSH.

       F5     Query for file to edit.

       F6     Query for file to view.

       F9     Query for workspace to go to or create a new one.

       Mod1+G Query for a client window to go to.

       Mod1+M Display context menu.

       Mod1+K D
              Detach (float) or reattach an object to its previous location.



   Bindings operating on top-level (non-transient) frames
       Mod1+A Query for a client window to attach.

       Mod1+K  1, Mod1+K 2, Mod1+K 3, Mod1+K 4, Mod1+K 5, Mod1+K 6, Mod1+K 7, Mod1+K 8, Mod1+K
       9, Mod1+K 0
              Switch to n:th object within the frame.

       Mod1+K N, Mod1+K P
              Switch to next/previous object within the frame.

       Mod1+K comma, Mod1+K period
              Move current object within the frame left/right.

       Mod1+K H, Mod1+K V
              Maximize the frame horizontally/vertically.

       Mod1+K A
              Attach tagged objects to this frame.



   Bindings for floating/detached frames
       Button1 double click at tab
              Toggle shade mode

       Button1 press at tab, Button1 press at border, Mod1+Button1 click
              Raise the frame.

       Mod1+Button3 click
              Lower the frame.

       Button1 drag at tab
              Move the frame.

       Mod1+K B
              Tile frame, if no tiling exists on the workspace



   Bindings for tilings and tiled frames [mod_tiling]
       Mod1+S Split current frame vertically.

       Mod1+P, Mod1+N, Mod1+Shift+Button4 click, Mod1+Shift+Button5 click
              Go to frame above/below current frame.

       Mod1+Tab, Mod1+K Tab
              Go to frame right/left of current frame.

       Mod1+K S
              Split current frame horizontally.

       Mod1+K X
              Destroy current frame.



   Bindings for client windows
       Mod1+K Mod1+L
              Nudge the client window. This might help with some programs' resizing problems.

       Mod1+K C
              Kill client owning the client window.

       Mod1+K Q
              Send next key press to the client window. Some programs may not  allow  this  by
              default.


       Mod1+Return
              Toggle client window group full-screen mode



   Move/resize mode bindings
       Escape Cancel the resize mode.

       Return End the resize mode.

       Left, Right, Up, Down, F, B, P, N
              Grow in specified direction.

       Shift+Left, Shift+Right, Shift+Up, Shift+Down, Shift+F, Shift+B, Shift+P, Shift+N
              Shrink in specified direction.

       Mod1+Left, Mod1+Right, Mod1+Up, Mod1+Down, Mod1+F, Mod1+B, Mod1+P, Mod1+N
              Move in specified direction.



   Bindings for message boxes and queries [mod_query]
       Escape, Control+G, Control+C
              Close the query/message box, not executing bound actions.

       Control+U, Control+V, Page_Up, Page_Down
              Scroll the message or completions up/down.



   Bindings for editing in queries [mod_query]
       These  bindings  are  similar  to those of the joe(1) text editor.  Cut, copy and paste
       works in a more conventional manner, though, but the keys are equivalent.


       Control+F, Control+B, Right, Left
              Move one character forward/backward.

       Control+E, Control+A, End, Home
              Go to end/beginning.

       Control+X, Control+Z
              Skip one word forward/backward.

       Control+D, Delete
              Delete next character.

       BackSpace, Control+H
              Delete previous character.

       Control+W, Control+O
              Delete one word forward/backward.

       Control+J
              Delete to end of line.

       Control+Y
              Delete the whole line.

       Control+T
              Transpose characters.

       Control+P, Control+N, Up, Down, Control+Up, Control+Down
              Select next/previous (matching) history entry.

       Button2 click, Control+K C
              Paste from the clipboard.

       Control+K B
              Set mark/begin selection.

       Control+K Y
              Cut selection.

       Control+K K
              Copy selection.

       Control+K G
              Clear mark/cancel selection.

       Tab, Shift+Tab, Control+Tab
              Try to complete the entered text or cycle through completions.

       Control+R, Control+S
              Complete from history

       Control+M, Return, KP_Enter
              Close the query and execute bound action.



   Bindings for menus [mod_menu]
       Escape, Control+G, Control+C, Left
              Close the menu.

       Return, KP_Enter, Control+M, Right
              Activate current menu entry.

       Control+N, Control+P, Up, Down
              Select next/previous menu entry.

       BackSpace
              Clear the menu's typeahead find buffer.
```
