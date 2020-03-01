+++
title="pointer.md"
date="2018-02-16T14:05:34-04:00"
+++
# Using C++

## standard input and output

## printf with format

## function call

## pointer and reference

## template of pan-class

## compile as follows

``` sh
g++ -o hello hello.cpp
```

## source code `hello.cpp`

``` c++
#include <stdio.h>
#include <iostream>

#define Say(str) puts(#str)

class myClass
{
public:
  int n;
  int array[3];
private:
};

template<class T>
void display(T *p,int v){
  printf("| 0x%x| <-------|%d|\n",p,v);
}

void displayClass(myClass *p,int v){
  printf("| 0x%x| <-------|%d|\n",p,v);
}

void displayInt(int *p,int v){
  printf("| 0x%x| <-------|%d|\n",p,v);
}

void addFive(int* n){
  *n = *n + 5;
}

int main( int argc, char **argv )
{
  int a = 10;
  int *p,*p2;
  p = & a;
  addFive(p);
  printf("---------\n");
  printf("addr:   | 0x%x|\n",p);
  printf("---------\n");
  printf("value of variable a |%d|\n",a);
  printf("---------\n");
  printf("value of pointer:  |%d|\n",*p);
  printf("---------\n");
  p2 = p++;
  printf("---------\n");
  printf("addr:   | 0x%x|\n",p2);
  printf("---------\n");
  printf("value of variable a |%d|\n",a);
  printf("---------\n");
  printf("value of pointer:  |%d|\n",*p2);
  printf("---------\n");
  // class called
  myClass *mc = new myClass;
  int input;
  std::cout<< "Input a number:\n" << std::endl;
  std::cin >> input;
  mc->n = input;
  int *pArray;
  mc->array[0]= 30;
  pArray = & mc->array[0];
  std::cout<< "Display with no template :\n" << std::endl;
  displayClass(mc,mc->n);
  displayInt(pArray,mc->array[0]);
  std::cout<< "Display with template :\n" << std::endl;
  display(mc,mc->n);
  display(pArray,mc->array[0]);
  return 0;
}
```
