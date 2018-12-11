
# Table of Contents

1.  [OMF Fish configuration](#org27f2a88)
2.  [Setting autoenv in fish](#org6106dda)
3.  [Tips:](#orgb11d755)

---
title: Fish with pipenv
author: xingwenju
excerpt: Fish with pipenv
date: 2018-12-09
---


<a id="org27f2a88"></a>

# OMF Fish configuration

    emit perf:timer:start "Oh My Fish alias initialisation"

    # greeting
    set     fish_greeting

    # find
    set -gx FZF_DEFAULT_OPTS     '--height=50% --min-height=15 --reverse --bind="ctrl-o:execute(code {})+abort"'
    set -gx FZF_DEFAULT_COMMAND  'rg --files --no-ignore-vcs --hidden'
    #set -gx FZF_DEFAULT_COMMAND  'fd -type f'
    set -gx FZF_CTRL_T_COMMAND   $FZF_DEFAULT_COMMAND
    #set -gx FZF_CTRL_T_COMMAND "command find -L \$dir -type f 2> /dev/null | sed '1d; s#^\./##'"

    # personal information
    set -gx LPS_DEFAULT_USERNAME 'linuxing3@qq.com'
    set -gx EVENT_NOKQUEUE       1

    # editor
    set -gx EDITOR               vim

    # Set alias if not set.
    # productivity
    alias rr 'omf reload --reforce'
    alias ff 'fzf | read -l result; and vim $result'
    alias cat 'bat'
    alias ping 'prettyping --nolegend'
    alias preview 'fzf --preview "bat --color \"always\" {}"'
    alias top 'htop'
    alias du 'ncdu --color dark -rr -x --exclude .git --exclude node_modules'
    alias help 'tldr'

    # python
    abbr py   'python'
    abbr ipy   'ipython'
    abbr bk   'jupyter-notebook'

    # git
    abbr g    'git'
    abbr ga   'git add'
    abbr g.   'git add .'
    abbr gb   'git branch'
    abbr gbl  'git blame'
    abbr gc   'git commit -m'
    abbr gco  'git checkout'
    abbr gcp  'git cherry-pick'
    abbr gd   'git diff'
    abbr gf   'git fetch'
    abbr glg  'git log --pretty="format:%Cred%h%Creset - %s %Cgreen(%cr)%Creset %C(blue)<%aN>%C(yellow)%d%Creset" --graph'
    abbr gl   'git log'
    abbr gm   'git merge'
    abbr gmt  'git mergetool'
    abbr grb  'git rebase'
    abbr gp   'git push'
    abbr gpu  'git push upstream'
    abbr gpl  'git pull'
    abbr gplu 'git pull upstream'
    abbr gr   'git remote'
    abbr gg   'git status'
    abbr gs   'git stash'
    abbr gsp  'git stash pop'

    # vim
    abbr v   "$EDITOR"
    abbr vd  "set -x VIM_DEV 1; and $EDITOR; and set -e VIM_DEV"
    abbr v.  "$EDITOR ."
    abbr vd. "set -x VIM_DEV 1; and $EDITOR .; and set -e VIM_DEV"
    abbr vip "$EDITOR +PlugInstall +qall"
    abbr vup "$EDITOR +PlugUpdate"
    abbr vcp "$EDITOR +PlugClean +qall"

    if status --is-interactive
    and command -s tmux >/dev/null
    and not set -q TMUX
      exec tmux new -A -s (whoami)
    end

    # paths
    function addpaths --description 'Persistently prepends paths to your PATH'
        contains -- $argv $fish_user_paths
           or set -U fish_user_paths $fish_user_paths $argv
        # echo "Updated PATH: $PATH"
    end

    function removepath --description 'Persistently remove paths to your PATH'
        if set -l index (contains -i $argv[1] $PATH)
            set --erase --universal fish_user_paths[$index]
            # echo "Updated PATH: $PATH"
        else
            # echo "$argv[1] not found in PATH: $PATH"
        end
    end

    addpaths ~/.local/bin /anaconda3/bin ~/dotfiles/bin ~/.fzf/bin
    # enable autoenv activate with pipenv of python
    source ~/.config/omf/activate.fish

    # aliases

    function emacs-dump
        /usr/local/Cellar/emacs-plus/HEAD-faaaece/bin/emacs --dump-file=/Users/linuxing3/minecraft/spacemacs-dev/.emacs.d/.cache/dumps/spacemacs.pdmp --with-profile spacemacs-dev
    end

    function emacs-plus
        /usr/local/Cellar/emacs-plus/HEAD-faaaece/bin/emacs
    end

    function emacsclient-plus
        /usr/local/Cellar/emacs-plus/HEAD-faaaece/bin/client
    end

    function emacs26
        /Applications/Emacs26.app/Contents/MacOS/Emacs
    end

    function deploy-master
        set MSG "Quick commit to master"; and git add . ; and git commit -m $MSG; and git push -u origin master
    end

    function deploy-develop
        set MSG "Quick commit to develop"; and git add . ; and git commit -m $MSG; and git push -u origin develop
    end

    function xiaomi
        ssh root@10.0.0.1
    end

    function kindle
        ssh root@10.0.0.230 -t tmux at
    end

    function vit
        ssh root@10.0.0.228 -t tmux at
    end

    function huawei
        ssh 192.168.0.105 -p 8022
    end

    function pi
        ssh pi@192.168.0.100 -p 22
    end

    function mini
        ssh linuxing3@10.0.2.2 -p 22
    end

    emit perf:timer:end "Oh My Fish alias initialisation"


<a id="org6106dda"></a>

# Setting autoenv in fish

<https://matthewbilyeu.com/blog/python-environment-with-pipenv-jupyter-and-ein/>

`autoenv_fish` Autoenv magic for fish shell!

Please note that this project is intended to make autoenv available for fish
shell users, this basically means that this version will always be a bit behind
the main project. Any bugs, bugfixes and contributions are very much
appreciated, but keep in mind that any feature requests (unless strictly
fish-related) should be posted here.

Installation To install it, just copy `activate.fish` somewhere to your computer
and source it by typing the following in terminal:

    source ~/.config/omf/activate.fish

If you want to have `autoenv` always
enabled, add the previous line to your fish config file
(~/.config/fish/config.fish) or (~/.config/omf/init.fish).

Homebrew This formula is not in the core homebrew, but if you prefer to use it
(to get automatic updates, for example) you can use this tap (see the code
here):

    brew tap loopbit/tap
    brew install autoenv_fish


<a id="orgb11d755"></a>

# Tips:

-   [ ] `SPC m o 1` Open jounral today and `SPC m o 2` insert the title
-   [ ] `SPC m i 1` to call the src block
-   [ ] `:r` read from `<HOME>/.config/omf/init.fish`
-   [ ] `C-c C-c` to insert the src block
-   [ ] Repeatedly use `v` to select and `S` to surround the keyword

