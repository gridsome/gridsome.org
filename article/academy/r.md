+++
title="r.md"
date="2018-02-16T14:05:34-04:00"
+++
# R language

## Install pacakges

in R environment
```R
install.pacakges("ggplot2")
```

- In case of can't install directly, install it from local path
```sh
cd /path/packages
R CMD INSTALL ggplot2
```

## Missing packages
```sh
pacman -S gcc-fortran
```

## read data

```sh
table.read("file",rw)
```

## new data

```sh
df = data.frame(x,y)
data.edit(df)
```

## logging

```sh
sink("output.txt")
pdf("output.pdf")
```
