+++
title="clojure.md"
date="2018-02-16T14:05:34-04:00"
+++
title: Clojure is great
---

# Clojure

## define functions

A function can take arguments

A function can have comments as doc

A function will return the last statement


```
(defn hello [arg1 arg2]
  "This is my playground of clojure"
  (println (str "Multiple " arg1 "*" arg2))
  (println "=")
  (def mul (* arg1 arg2))
  (println mul)
)

(defn factional [n]
  (reduce * (range 1 (inc n))))

(println (factional 3))
```

# Discrimination of elements in a list

* `inc n` : Increase the number by 1

* `range 1 n` Range start from 1

* `reduce action list`:Apply the action the first and second element of a list, reducing into a new element as the head of a list. And do the same through the whole list.
