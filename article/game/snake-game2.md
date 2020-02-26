+++
title="snake-game2.md"
date="2018-02-16T14:05:34-04:00"
+++
# 从零开始设计一个类贪吃蛇的框架（二）

[从零开始设计一个类贪吃蛇的框架（一）](snake-game1)

[从零开始设计一个类贪吃蛇的框架（三）](snake-game3)

## 画蛇身

画出蛇身也很简单，可以把蛇想象成很多节，每节就是一个方框

画蛇全身就是把多个方框连接起来

### 首先我们定义蛇的一些基本属性

```lua
    snake ={
        x={},
        y={},
        nodes=5,
        nodeArray={},
        direction=1,
        life=1,
        sprite=nil,
        brain=nil
    }
```

其中`x`和`y`是我们用来存放每节蛇身坐标的数组

我们的`node`是蛇身节的数量

### 首先画蛇身的函数添加到`Play`中

```lua
      function SnakeGameController:Play()
          self:drawSnakeNode(RED)
      end
```

### 接下来就是画蛇身的函数

在`ctor`函数中增加以下代码来初始化蛇的属性

```lua
      for i=1,snake["nodes"] do
          snake["x"][i] = display.cx - (COLUMN-i) *45
          snake["y"][i] = display.cy - (ROW-1) *45
          print(snake["x"][i]..snake["y"][i])
      end
```

在文件中增加以下函数

```lua
      function SnakeGameController:drawSnakeNode(color)
          for i=1,snake["nodes"] do
              local node = self:drawGridNode(snake["x"][i],snake["y"][i],color)
          end
      end
```

这样我们的蛇就画出来了！

#### 让蛇动起来

激动人心的时候到了，让蛇动起来。

动画离不开帧的概念，我们的思路就是，每一帧把蛇身末尾的一节去除，在头部增加一节，这样蛇身就产生了移动效果了

##### 先增加一个函数`SnakeGameController:moveSnake`

```lua
    function SnakeGameController:moveSnake()
        print("original coordinates")
        local lenght = snake["nodes"]
        for i=1,snake["nodes"] do--/*蛇每环节往前移动,也贪吃蛇关键算法*/
               print(snake["x"][i]..snake["y"][i])
        end
        -- remove last node
        self:drawGridNode(snake["x"][1], snake["y"][1],BLACK)
        table.remove(snake["x"],1)
        table.remove(snake["y"],1)
        -- 查看方向
        local switch = {
            [1] = function()
                table.insert(snake["x"],lenght,snake["x"][lenght-1] + 45)
                table.insert(snake["y"],lenght,snake["y"][lenght-1])
            end,
            [2] = function()
                table.insert(snake["x"],lenght,snake["x"][lenght-1] - 45)
                table.insert(snake["y"],lenght,snake["y"][lenght-1])
            end,
            [3] = function()
                table.insert(snake["y"],lenght,snake["y"][lenght-1] + 45)
                table.insert(snake["x"],lenght,snake["x"][lenght-1])
            end,
            [4] = function()
                table.insert(snake["y"],lenght,snake["y"][lenght-1] - 45)
                table.insert(snake["x"],lenght,snake["x"][lenght-1])
            end,
        }
        --按方向更新蛇每节坐标数组
        switch[snake["direction"]]()

        print("updating coordinates")
        self:drawSnakeNode(RED)
    end
```

`lua`语言中没有`switch`的关键字，但是通过表和闭包的方式，我们很容易可以模拟出`switch`的效果

上面函数中`switch`的主要目的是判断蛇的方向

#####  然后要在帧动画中注册这个方法

```lua
    function SnakeGameController:onEnterFrame(dt)
            self:moveSnake()
    end
```

##### 并将帧动画实现函数，注册到`onEnter`函数中

```lua
     self:schedule((function(dt) self:onEnterFrame(dt) end),1)
```

看看，我们的蛇动起来了！！！
