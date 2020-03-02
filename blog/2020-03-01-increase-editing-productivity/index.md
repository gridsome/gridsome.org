---
title: Increase productity of editing 
date: 2020-03-01
excerpt: emacs editor
author: linuxing3
---

# Table of Contents

1.  [evil-surround](#org89d716a)
2.  [expand-region](#orgbc14a93)
3.  [Chinese character display issue](#orgf757cb6)

I defined the key bindings like this

[private default keybindings](file:///c:/Users/Administrator/.doom.d/modules/private/keybinding/+default-binding.el)

提高编辑效率，善于normal模式快捷键。


<a id="org89d716a"></a>

# evil-surround

v  &ldquo;S&rdquo;  #&rsquo;evil-surround-region
o  &ldquo;s&rdquo;  #&rsquo;evil-surround-edit
o  &ldquo;S&rdquo;  #&rsquo;evil-Surround-edit


<a id="orgbc14a93"></a>

# expand-region

v  &ldquo;v&rdquo;  #&rsquo;er/expand-region
v  &ldquo;V&rdquo;  #&rsquo;er/contract-region

v  &ldquo;R&rdquo;  #&rsquo;select-all-match
v  &ldquo;S&rdquo;  #&rsquo;evil-surround-region

So in `view` mode, you can use `v` to expand select the word or sentence or
paragraph or expand it then `S` to surround the word
or use `R` to select all matched word


<a id="orgf757cb6"></a>

# Chinese character display issue

原来在windows下显示中文异常是因为重装系统后，没有相应的字体。无语。。。

    (if IS-WINDOWS
    	(setq
        doom-font (font-spec :family "Hack" :size 16)
        doom-big-font (font-spec :family "Hack" :size 18)
    		doom-variable-pitch-font (font-spec :family "Yahei Consolas Hybrid" :size 16)
    		doom-unicode-font (font-spec :family "Yahei Consolas Hybrid" :size 16))
    	(setq
        doom-font (font-spec :family "Fira Code" :size 16)
        doom-big-font (font-spec :family "Fira Code" :size 18)
    		doom-variable-pitch-font (font-spec :family "Fira Code" :size 16)
    		doom-unicode-font (font-spec :family "Fira Code" :size 16)))

    (setq set-frame-font (font-spec :family "Yahei Consolas Hybrid" :size 16))

