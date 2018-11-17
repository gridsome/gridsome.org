---
title:write-blog
---
# Document Title

Write a simple function to quickly add gridsome blog file

```emacs-lisp
 (defun my-gridsome-create-newpost-empty (gridsome-post-subdir)
	"Saving the current buffer as a gridsome post
in a specific hugo post directory"
	(interactive
		(let ((gridsome-post-subdirs '("blog" "docs" )))
				(list (ido-completing-read "Directory Name:" gridsome-post-subdirs))
		))
	(progn
			(setq daily-name (format-time-string "%Y-%m-%d"))
			(setq gridsome-post-filename
				(read-from-minibuffer "File Name：" "write-blog"))
      (if (string= gridsome-post-subdir "docs")
        ;; filpath: gridsome.org/docs/write-blog.md
        (setq gridsome-post-filepath
          (concat blog-gridsome-base-dir "/" gridsome-post-subdir "/" gridsome-post-filename ".md"))
        ;; filepath: gridsome.org/blog/2018-01-01-write-blog/index.md
        (setq gridsome-post-filepath
          (concat blog-gridsome-base-dir "/" gridsome-post-subdir "/" daily-name "-" gridsome-post-filename "/index.md")))
        (find-file gridsome-post-filepath)
        (goto-char (point-min))
        (insert "---\n")
        (insert (concat "title:" gridsome-post-filename "\n"))
        (insert "---\n")))

```

