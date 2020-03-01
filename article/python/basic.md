+++
title="basic.md"
date="2018-02-16T14:05:34-04:00"
+++
# python

## basic walk

```py
for root,dirs,files in os.walk('/workspace/techbook'):
    for file in files:
        if os.path.splitext(file)[1] == '.markdown':
            src = os.path.join(root,file)
            print(src)
            new_file = os.path.splitext(file)[0] + '.md'
            dst = os.path.join(root, new_file)
            print(dst)
            os.rename(src,dst)
```
