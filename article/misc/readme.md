+++
title="README.md"
date="2018-02-16T14:05:34-04:00"
+++
+++
title="README.md"
date="2018-02-16T14:05:34-04:00"
+++
+++
title="README.md"
date="2018-02-16T14:05:34-04:00"
+++
+++
title="README.md"
date="2018-02-16T14:05:34-04:00"
+++
+++
title = "Quick start"
author = ["linuxing3"]
draft = false
+++

## Configuration layers {#configuration-layers}

Spacemacs divides its configuration into self-contained units called
`configuration layers`. These layers are stacked on top of each other
to achieve a custom configuration.

By default Spacemacs uses a dotfile called `~/.spacemacs` to control which
layers to load. Within this file you can also configure certain features.

A configuration layer is a directory containing at least a `packages.el`
file which defines and configures packages to be downloaded from Emacs
package repositories using the `package.el` built-in feature of Emacs.

If you already have your own `Emacs` configuration you can move it to your
own layer.

The following command creates a layer in the `private` directory:

```text
SPC SPC configuration-layer/create-layer RET
```

Any configuration layers you create must be explicitly loaded in `~/.spacemacs`.

Note: For your privacy, the contents of the `private` directory are not
under source control. See the section on private configuration management in
the [documentation](DOCUMENTATION.org).


## Dotfile (.spacemacs) {#dotfile--dot-spacemacs}

As mentioned `.spacemacs` controls which configuration layers to load and
is also a means to customizing Spacemacs.

The following command will create a `.spacemacs` file in your home directory:

```text
SPC SPC dotspacemacs/install RET
```

To open the installed dotfile:

```text
SPC f e d
```

To load some configuration layers using the variable
`dotspacemacs-configuration-layers`:

```elisp
;; List of configuration layers to load.
dotspacemacs-configuration-layers '(auto-completion smex)
```

Some configuration layers support configuration variables to expose granular
control over layer-specific features, [git layer](../layers/+source-control/git/README.org) being one such example.
Variables can be directly set within `dotspacemacs-configuration-layers` like so:

```elisp
;; List of configuration layers to load.
dotspacemacs-configuration-layers '(auto-completion
                                    (git :variables
                                         git-magit-status-fullscreen t)
                                    smex)
```

At anytime you can apply the changes made to the dotfile or layers
<span class="underline">without restarting</span> Spacemacs by pressing `SPC f e R`.

The [dotfile template](https://github.com/syl20bnr/spacemacs/blob/master/core/templates/.spacemacs.template) contains further information about how to customize
Spacemacs. See the dotfile configuration section of the [documentation](DOCUMENTATION.org) for
more details.


## Dotdirectory (~/.spacemacs.d) {#dotdirectory--dot-spacemacs-dot-d}

Like `Emacs`, Spacemacs initialization can also be contained in an `init.el` file
in a special directory `~/.spacemacs.d`. The contents of the dotfile should be
then copied in the `init.el` file.

The Emacs dotfile or dotdirectory is not replaced but rather
complemented by the Spacemacs dotfile or dotdirectory. During startup,
Emacs still uses `~/.emacs.d/init.el` (or `~/.emacs`) for its
initialization, and variable `user-emacs-directory` will still point
to `~/.emacs.d/`, even if `~/.spacemacs.d` or `~/.spacemacs` are
present. Only now `~/.emacs.d/init.el` is provided by Spacemacs
(e.g. after cloning the Spacemacs git repo into an empty
`~/.emacs.d/`), and your own personnal configurations go into
`~/.spacemacs.d/init.el` (or `~/.spacemacs`).

Have a look into the FAQ for an easy workaround to maintain (your
former) vanilla Emacs and (your new) Spacemacs configurations
side-by-side without the need to rename and backup `~/.emacs.d/`.


## Learning Spacemacs {#learning-spacemacs}


### Editing Styles {#editing-styles}

Spacemacs can be used by Vim users or Emacs users by setting the
`dotspacemacs-editing-style` variable to `vim`, `emacs` or even `hybrid`
in the dotfile `~/.spacemacs`.


### The leader keys {#the-leader-keys}

Spacemacs key bindings use a leader key which is by default bound to
`SPC` (space bar) in `vim` or `hybrid` editing styles and `M-m` in `emacs`
style.

You can change it by setting the variable `dotspacemacs-leader-key` if
you use the `vim` style or `dotspacemacs-emacs-leader-key` if you use
the `emacs` style (these variables must be set in the file `~/.spacemacs`).

For simplicity the documentation always refers to the leader key as
`SPC`.

There is secondary leader key called the major-mode leader key which is
set to `​,​` by default. This key is a shortcut for `SPC m`
where all the major-mode specific commands are bound.


### Evil-tutor {#evil-tutor}

If you are willing to learn the Vim key bindings (highly recommended since
you can benefit from them even in `emacs` style), press `SPC h T`
to begin an Evil-adapted Vimtutor.


### Universal argument {#universal-argument}

In `vim` editing style the universal argument defaults to `SPC u`
instead of `C-u` because the latter is used to scroll up as in Vim.


### Configuration layers and Package discovery {#configuration-layers-and-package-discovery}

By using `helm-spacemacs-help` with `SPC h SPC` you can quickly search
for a package and get the name of the layers using it.

You can also easily go to the `README.org` of a layer or go to the initialization
function of a package.


### Key bindings discovery {#key-bindings-discovery}

Thanks to [which-key](https://github.com/justbur/emacs-which-key), whenever a prefix command is pressed (like `SPC`)
a buffer appears after one second listing the possible keys for this prefix.

It is also possible to search for specific key bindings by pressing:

```text
SPC ?
```

To narrow the bindings list to those prefixed with `SPC`,
type a pattern like this regular expression:

```text
SPC\ b
```

which would list all `buffer` related bindings. **Note:** You are at the
_HELM-Descbind_ prompt, the pattern consists of 6 letters: uppercase `SPC`, a
backslash, an actual space and a lowercase `b`.


### Describe functions {#describe-functions}

`Describe functions` are powerful Emacs introspection commands to get information
about functions, variables, modes etc. These commands are bound thusly:

| Key Binding | Description       |
|-------------|-------------------|
| `SPC h d f` | describe-function |
| `SPC h d k` | describe-key      |
| `SPC h d m` | describe-mode     |
| `SPC h d v` | describe-variable |


## How-To's {#how-to-s}

Some quick `how-to's` are compiled in the [FAQ.](FAQ.org)
