+++
title="snake-game1.md"
date="2018-02-16T14:05:34-04:00"
+++

# 从零开始设计一个类贪吃蛇的框架（一）

[从零开始设计一个类贪吃蛇的框架（二）](snake-game2)

[从零开始设计一个类贪吃蛇的框架（三）](snake-game3)

先看看粗糙的效果图

![粗糙的效果图1](http://files.git.oschina.net/group1/M00/00/15/cHwGbFNXu-WAHDvgAAAdNoQ6Dpk093.PNG?token=73a22811cebab7571fc84aaba2c8a295&ts=1398258710&filename=demo.PNG "贪吃蛇")


![粗糙的效果图2](http://files.git.oschina.net/group1/M00/00/15/cHwGbFNXvNGAC9fjAAAZ3w59pSQ046.PNG?token=b529163ff0c93e41c2b39943975a1a6b&ts=1398258898&filename=demo2.PNG "贪吃蛇")

## 首先在quick-cocos2dx中生成一个模板

## 设计一个舞台场景

## 关于场景的分割和布局

我们可以把屏幕分割尾行和列

在` snakeController.lua`中定义这个变量，我们很多的坐标计算按这个格栅来

    COLUMNS = 15
    ROWS = 20

### 构建场景

` snakeController.lua`中输入以下代码
```lua
    local SnakeGameController = class("SnakeController", function()
        return display.newScene("SnakeController")
    end)

    function SnakeGameController:ctor()
        self.layer = display.newLayer()
        self:addChild(self.layer)
    end

    function SnakeGameController:onTouch(event, x, y)
    end

    function SnakeGameController:onEnter()
        self.layer:addTouchEventListener(function(event, x, y)
            return self:onTouch(event, x, y)
        end)
        self.layer:setTouchEnabled(true)
        self:Play()
    end

      function SnakeGameController:Play()
      end

    return SnakeGameController
```

很简单的，我们设计一个场景，然后添加了`onEnter`函数

1. 场景有一个图层

2. 可以响应触摸事件

### 画个方框

下一步要在图层中实现画图，简单绘出一个方框
```lua
    function SnakeGameController:drawGridNode(x,y,color)
            local node = display.newRect(45, 45)
            node:setFill(true)
            node:setColor(color)
            node:setLineWidth(3)
            node:setPosition(x,y)
            self.layer:addChild(node)
            return node
    end
```
这个函数调用`newRect`方法，就可以在图层上绘画

_参数x，y是我们的坐标_

_参数color是色彩，在文件头部添加以下全局变量_
```lua
    GREEN = ccc4f(0, 1, 0, 0.5)
    RED = ccc4f(1, 0, 0, 0.5)
    BLUE = ccc4f(0, 0, 1, 1)
    BLACK = ccc4f(0, 0, 0, 1)
    WHITE = ccc4f(255, 255, 255,1)
```

 _注意在旧的版本中，这个函数的坐标是在坐标系的中央，后面的坐标都要转换。新的版本好像已经统一到了`(0,0)`_

### 画食物

```lua
    function SnakeGameController:drawFoodNode(color)
            food["x"]=display.cx - 45 *math.random(0,20)
            food["y"]=display.cy - 45 *math.random(0,12)
            self["sprite"] = self:drawGridNode(food["x"],food["y"],color)
    end
```

我们通过`math.random`方法可以随机生成食物的位置

好了，我们的基本场景已经就绪


### 增加启动游戏的函数

```lua
      function SnakeGameController:Play()
          self:drawFoodNode(RED)
      end
```

在`onEnter`中调用`self:Play()`就启动了我们的游戏场景了

可以看到一个美味的食物出现在屏幕上！！！

下面就具体实现最难的蛇的部分
