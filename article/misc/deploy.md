+++
title="deploy.md"
date="2018-02-16T14:05:34-04:00"
+++
title: auto git deploy
---

## A simple `bash` script to push your code to `git`

```sh
# !/bin/bash
set -o nounset
set -o errexit
echo $0
echo $*
echo $$
echo "Will deploy your code to git server..."
git add -A
git commit -m "$1"
git push -u origin $2
echo "Done!"
```
