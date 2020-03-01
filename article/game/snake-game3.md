+++
title="snake-game3.md"
date="2018-02-16T14:05:34-04:00"
+++
# 从零开始设计一个类贪吃蛇的框架（三）

[从零开始设计一个类贪吃蛇的框架（一）](snake-game1)

[从零开始设计一个类贪吃蛇的框架（二）](snake-game2)

我们的蛇不能老是傻傻地瞎转悠

为了让蛇显得聪明些，我们增加一些相关的效果

比如停、撞墙、躲避墙

## 让蛇停下来

```lua
      function SnakeGameController:stopSnake()
          print("stopping snake!")
          for i=1,snake["nodes"] do
              snake["x"][i] = display.cx
              snake["y"][i] = display.cy
          end
          self:drawSnakeNode(BLUE)
      end
```

## 如果点击或触摸，让蛇转向

### 转向要首先判断方向，我们把他单独实现出来

```lua
      function SnakeGameController:needChangeDirection(x,y)
          print("Detected touch!!!!!")
          x = x - display.width/2
          y = y - display.height/2
          curDirection = snake["direction"]
          snakeHead = snake["nodes"]
          if curDirection<3 and y > snake["y"][snakeHead] then
               newDirection = 3
          elseif curDirection<3 and y < snake["y"][snakeHead] then
              newDirection = 4
          elseif curDirection>2 and x > snake["x"][snakeHead] then
              newDirection = 1
          elseif curDirection>2 and x < snake["x"][snakeHead] then
              newDirection = 2
          end
          return newDirection
      end
```

### 触摸事件，按方向移动

```lua
      function SnakeGameController:onTouch(event, x, y)
           newDirection = self:needChangeDirection(x,y)
           print("Direction is "..newDirection)
           snake["direction"] = newDirection
           self:moveSnake()
      end
```

### 能够聪明地躲避墙，自动转向

注意调用这个函数后，都要重新画蛇身，这个功能我们已经在帧函数中实现。

```
    function SnakeGameController:needChangeDirectionFromWall()
        curDirection = snake["direction"]
        snakeHead = snake["nodes"]
        switch = {
            [1] = function( ... )
                if snake["x"][snakeHead] > display.width/2 - 100 then
                   snake["direction"] =  math.random(3,4)
                end
            end,
            [2]=  function( ... )
                if snake["x"][snakeHead] == 100 then
                   snake["direction"] = math.random(3,4)
                end
            end,
            [3] = function( ... )
                if snake["y"][snakeHead] > display.height/2 - 100 then
                  snake["direction"] =  math.random(1,2)
                end
            end,
            [4] = function ( ... )
                if snake["y"][snakeHead] < 100 then
                    snake["direction"] = math.random(1,2)
                end
            end,
        }
        print(switch[curDirection]())
        return switch[curDirection]()
    end
```

### 如果蛇撞墙就结束

```lua
      function SnakeGameController:snakeHitWall()

          for i=1,snake["nodes"] do
              if snake["x"][i] > display.width/2 or
                 snake["x"][i] < -display.width/2 or
                 snake["y"][i] > display.height/2 or
                 snake["y"][i] < -display.height/2 then
                 snake["life"] = 0

                 snake["brain"]:getState()
                 snake["brain"]:doEvent("panic")
                 snake["brain"]:getState()

                 -- self:GameOver()

             end
          end -- for
      end
```

### 添加结束函数，终止游戏

```lua
    function SnakeGameController:GameOver()
        print("Game Over!")
        local label = ui.newTTFLabel({
            text = "Game Over!",
            size = 64,
            x = display.cx,
            y = display.cy,
            align = ui.TEXT_ALIGN_CENTER
        })
        self:addChild(label)
        self.state = "IDLE"
    end
```

### 添加胜利函数

```lua
      function SnakeGameController:GameWin()
          print("Game Win!")
          local label = ui.newTTFLabel({
              text = "Game Win!",
              size = 64,
              x = display.cx,
              y = display.cy,
              align = ui.TEXT_ALIGN_CENTER
          })
          self:addChild(label)
          -- self.state = "IDLE"
      end
```

## 进阶设计--让蛇躲避墙（Artificial Inteligence）

为了让我们的蛇更聪明，我们可以调用`人工智能`的概念，让蛇判断自己的方位，当靠近四周墙壁的时候就自动转向

### 在文件前面引用一个`状态机`。这个文件是在`framework`目录下

```lua
      local StateMachine = import("controller.stateMachine")
```

### 在`ctor`函数中为我们的蛇增加状态机

```lua
      snake["brain"] = self:SnakeStateMachine()
```

### 增加`SnakeStateMachine`函数，用来定义`snake`的状态机

```lua
      function SnakeGameController:SnakeStateMachine()
          local fsm = StateMachine.new()
          local fsm = StateMachine.new()
          fsm:setupState({
              initial = "green",
              events  = {
                      {name = "warn",  from = "green",  to = "yellow"},
                      {name = "panic", from = "green",  to = "red"   },
                      {name = "calm",  from = "red",    to = "yellow"},
                      {name = "clear", from = "yellow", to = "green" },
              },
              callbacks = {
                  onbeforestart = function(event) print("[FSM] STARTING UP") end,
                  onstart       = function(event) print("[FSM] READY") end,
                  onbeforewarn  = function(event) print("[FSM] START   EVENT: warn!") end,
                  onbeforepanic = function(event) print("[FSM] START   EVENT: panic!") end,
                  onbeforecalm  = function(event) print("[FSM] START   EVENT: calm!") end,
                  onbeforeclear = function(event) print("[FSM] START   EVENT: clear!") end,
                  onpanic        = function(event) self:needChangeDirectionFromWall() end,
                  onwarn        = function(event) self:stopSnake() end,
              }})
          print(fsm:isReady())
          return fsm
      end
```

注意到，上面的很多功能可以通过状态机来进行跟踪和协调

基本的思路就是，没更改一种状态，就调用相应的响应函数

比如更改精灵的图片，改变它的位置等等。

状态机的设计比较复杂，再说吧！
