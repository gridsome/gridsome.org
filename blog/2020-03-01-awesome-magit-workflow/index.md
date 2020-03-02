---
title: awesome magit workflow
author: Xing Wenju
date: 2020-03-01
excerpt: 
---
# Awesome magit workflow 

https://magit.vc/screenshots/


```emacs-lisp
(defhydra yt-hydra/help (:color blue :hint nil)
  "
_msa_ stage-modified _mp_ push #_mc_ commit #_md_ diff #_mla_ log all #_mla_ status
"
  ;;Magit part
  ("msa" magit-stage-modified)
  ("mp" magit-push)
  ("mc" magit-commit)
  ("md" magit-diff)
  ("mla" magit-log-all)
  ("ms" magit-status)
  )
(global-set-key (kbd "<f1>") 'yt-hydra/help/body)
```

