---
title: ipython with lsp
date: 2020-03-01
excerpt: python lsp
author: linuxing3
---

# Table of Contents

1.  [Skills](#orgbaa7abf)
2.  [Lsp](#org3b0f62a)



<a id="orgbaa7abf"></a>

# Skills

Using Ipython within org

    import sys
    sys.version


<a id="org3b0f62a"></a>

# Lsp

Already included int the recent PR of `doom-emacs`

    (def-package! lsp-typescript
      :when (featurep! +lsp)
      :when (featurep! :feature-x lsp)
      :hook ((js2-mode web-mode typescript-mode) . lsp-typescript-enable))
    
    (def-package! tide
      :config
      (map! :map tide-mode-map
          :localleader
          :n "R" #'tide-restart-server
          :n "E" #'tide-project-errors
          :n "D" #'tide-documentation-at-point
          :n "o" #'tide-organize-imports
          :n "d" #'tide-jsdoc-template
          :n "F" #'tide-refactor
          :n "X" #'tide-fix
          :n "s" #'tide-rename-symbol
          :n "f" #'tide-rename-file))

