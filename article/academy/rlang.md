+++
title="rlang.md"
date="2018-02-16T14:05:34-04:00"
+++
# R常用命令（Medcl专用精简版）

1.查看base包命令

```sh
library(help="base")
```


2.查看帮助

```sh
?lm
help("*")
help("mean")
help("bs", package = "splines") #在特定包里搜索
help("bs",try.all.packages=TRUE) #在所有包中搜索，默认只在内存加载的包中搜索
help.start()
help.search("tree")
help.search("tree", rebuild = TRUE)) #新安装包之后，需要rebuild
apropos("length")  #查找函数
```


3.赋值

```sh
a<-5
a=5
5->a
```

4.查看对象

```sh
ls(pattern="a")
ls(pat="^a")
```

5.删除对象

```rm(pat="a")
rm(list=ls(pat="a"))
```
6.构建一个dataframe数据框

M <- data.frame(n1, n2, n3)

7.查看数据类型（共有四种：数值型，字符型，复数型7和逻辑型(FALSE或TRUE)）

x <- 1
mode(x)
用Inf和-Inf表示正负无穷，NaN（not a number），NA（not available）

8.工作目录

getwd()
setwd("/home/paradis/R") #如果一个文件不在工作目录里则必须给出它的路径

9.读取文件

read.table(file="Q:/data_24.csv",header=T,sep = "\t",dec=".",quote="\"'")  #创建一个数据框
还有scan（前者可以指定变量的类型）
和read.fwf（以用来读取文件中一些固定宽度格式的数据）

__mydata$V1和mydata[, 1]是向量，而mydata["V1"]是数据框__

10.存数据

write.table
write(x,file ="data.txt"),

工作空间保存加载:

用load("xyz.RData")
save.image()是save(list =ls(all=TRUE),
file=".RData")

11.生成数据

x <- 1:30 #1到30个整数序列
> 1:5
[1] 1 2 3 4 5
> 3;1
[1] 3
[1] 1
> 3:1
[1] 3 2 1
> 1:(10-1)
[1] 1 2 3 4 5 6 7 8 9

> seq(1, 5, 0.5)  #生成实数序列
[1] 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
> seq(length=9, from=1, to=5)
[1] 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0

还可以用函数c直接输入数值：

> c(1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5)
[1] 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0

如果想用键盘输入一些数据也是可以的，只需要直接使用默认选项

的scan函数：
> z <- scan()

函数rep用来创建一个所有元素都相同的向量：
> rep(1, 30)
[1] 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1

#矩阵操作

> matrix(1:6, 2, 3,byrow=F)
[,1] [,2] [,3]
[1,]    1    3    5
[2,]    2    4    6
> matrix(1:6, 2, 3,byrow=T)
[,1] [,2] [,3]
[1,]    1    2    3
[2,]    4    5    6

#维度控制

> x=1:15
> x
[1]  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
> dim(x)
NULL
> dim(x)<-c(5,3)
> x
[,1] [,2] [,3]
[1,]    1    6   11
[2,]    2    7   12
[3,]    3    8   13
[4,]    4    9   14
[5,]    5   10   15

12.数据框和列表

矩阵合并

rbind,基于行，cbind，基于列

> matrix<-rbind(1:7,1:7)
> matrix
[,1] [,2] [,3] [,4] [,5] [,6] [,7]
[1,]    1    2    3    4    5    6    7
[2,]    1    2    3    4    5    6    7

> matrix<-cbind(1:7,1:7)
> matrix
[,1] [,2]
[1,]    1    1
[2,]    2    2
[3,]    3    3
[4,]    4    4
[5,]    5    5
[6,]    6    6
[7,]    7    7

> x <- 1:4; n <- 10; M <- c(10, 35); y <- 2:4
> data.frame(x, y)
错误于data.frame(x, y) : 参数值意味着不同的行数 4, 3
> data.frame(x, M)
x  M
1 1 10
2 2 35
3 3 10
4 4 35
> data.frame(x, n)
x  n
1 1 10
2 2 10
3 3 10
4 4 10
> L1 <- list(x, y); L2 <- list(A=x, B=y)
> L1
[[1]]
[1] 1 2 3 4

[[2]]
[1] 2 3 4

> L2
$A
[1] 1 2 3 4

$B
[1] 2 3 4

> L2$A
[1] 1 2 3 4
> L2$B
[1] 2 3 4

> seq(10,11,0.2)
[1] 10.0 10.2 10.4 10.6 10.8 11.0
> c(1:5,seq(10,11,0.2))
[1]  1.0  2.0  3.0  4.0  5.0 10.0 10.2 10.4 10.6 10.8 11.0

> log2(4)
[1] 2
> log10(1e7)
[1] 7

#比较

> a<-"a"
> b<-"a"
> identical(a,b)
[1] TRUE
> all.equal(a,b)
[1] TRUE
> x=1:5
> x[1]
[1] 1
> x[4]
[1] 4
> x[5]
[1] 5
> x[0]
integer(0)
> x[0]=5
> x[0]
numeric(0)
> x[1]=5
> x[1]
[1] 5
> x
[1] 5 2 3 4 5
> i=c(1,2)
> x[i]
[1] 5 2

> x=matrix(1:3,2,3)
> x
[,1] [,2] [,3]
[1,]    1    3    2
[2,]    2    1    3
> x[2,]
[1] 2 1 3

> x[,2]
[1] 3 1
> x <- 1:10
> x[x>=5]
[1]  5  6  7  8  9 10

> x[x%%2==0]
[1]  2  4  6  8 10
> x[c(F,T)]
[1]  2  4  6  8 10
> x[c(T,F)]
[1] 1 3 5 7 9

#自定义行列名

> names(x)<-c("a","b","c")
> x
a b c
1 2 3
> x<-matrix(1:3,2,3)
> x
[,1] [,2] [,3]
[1,]    1    3    2
[2,]    2    1    3
> rownames(x)<-c("row1","row2")
> colnames(x)<-c("col1","col2","col3")
> x
col1 col2 col3
row1    1    3    2
row2    2    1    3
> dimnames(x)
[[1]]
[1] "row1" "row2"

[[2]]
[1] "col1" "col2" "col3"

> x<-array(1:8,dim=c(2,2,3))
> x
, , 1

[,1] [,2]
[1,]    1    3
[2,]    2    4

, , 2

[,1] [,2]
[1,]    5    7
[2,]    6    8

, , 3

[,1] [,2]
[1,]    1    3
[2,]    2    4

#向量运算

> x<-1:4
> y<-rep(1,4)
> z<-x+y
> z
[1] 2 3 4 5

#不同长度，循环使用

> x=1:2
> y=1:4
> x+y
[1] 2 4 4 6
> x
[1] 1 2
> y
[1] 1 2 3 4

#函数快速参考

sum(x) 对x中的元素求和
prod(x) 对x中的元素求连乘积
max(x) x中元素的最大值
min(x) x中元素的最小值
which.max(x) 返回x中最大元素的下标
which.min(x) 返回x中最小元素的下标
range(x) 与c(min(x), max(x))作用相同
length(x) x中元素的数目
mean(x) x中元素的均值
median(x) x中元素的中位数
var(x) or cov(x) x中元素的的方差（用n ? 1做分母）；如果x是一个矩阵或者一
个数据框，将计算协方差阵
cor(x) 如果x是一个矩阵或者一个数据框则计算相关系数矩阵（如
果x是一个向量则结果是1）
var(x, y) or cov(x, y) x和y的协方差，如果是矩阵或数据框则计算x和y对应列的协方
差
cor(x, y) x和y的线性相关系数，如果是矩阵或者数据框则计算相关系数
矩阵。

round(x, n) 将x中的元素四舍五入到小数点后n位
rev(x) 对x中的元素取逆序
sort(x) 将x中的元素按升序排列；要按降序排列可以用命令rev(sort(x))
rank(x) 返回x中元素的秩
log(x, base) 计算以base为底的x的对数值
scale(x) 如果x是一个矩阵， 则中心化和标准化数据； 若只进行中心化
则使用选项scale=FALSE， 只进行标准化则center=FALSE（ 缺省值
是center=TRUE, scale=TRUE）
pmin(x,y,...) 返回一个向量，它的第i个元素是x[i], y[i], . . . 中最小值
pmax(x,y,...) 同上，取最大值
cumsum(x) 返回一个向量，它的第i个元素是从x[1]到x[i]的和
cumprod(x) 同上，取乘积
cummin(x) 同上，取最小值
cummax(x) 同上，取最大值
match(x, y) 返回一个和x的长度相同的向量，表示x中与y中元素相同的元素在y中
的位置（没有则返回NA）
which(x == a) 返回一个包含x符合条件（当比较运算结果为真（TRUE）的下标的向
量，在这个结果向量中数值i说明x[i] == a（这个函数的参数必须是
逻辑型变量）
choose(n, k) 计算从n个样本中选取k个的组合数
na.omit(x) 忽略有缺失值（NA）的观察数据（如果x是矩阵或数据框则忽略相应的
行）
na.fail(x) 如果x包含至少一个NA则返回一个错误消息
unique(x) 如果x是一个向量或者数据框，则返回一个类似的对象但是去掉所有重
复的元素（对于重复的元素只取一个）
table(x) 返回一个表格，给出x中重复元素的个数列表(尤其对于整数型或者因子
型变量)
table(x, y) x与y的列联表
subset(x, ...) 返回x中的一个满足特定条件...的子集，该条件通常是进行比较运
算：x$V1 < 10；如果x是数据框，选项select给出要保留的变量（或
者用负号表示去掉）
sample(x, size) 从x中无放回抽取size个样本，选项replace = TRUE表示有放回的抽样
```
