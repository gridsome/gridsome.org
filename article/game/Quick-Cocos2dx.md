+++
title="Quick-Cocos2dx.md"
date="2018-02-16T14:05:34-04:00"
+++
## Quick-cocos2d-x开发经验


### 安装`java`

### 安装`android_sdk`和`android_ndk`

### 设置环境变量

    %ANDROID_SKD %
    %ANDROID_NDK%
    %QUICK_COCOS2DX_ROOT%
    %COCOS2DX_ROOT%
    %JAVA_HOME%

### 设置路径

    D:\usr\lib\android\sdk\tools
    D:\usr\lib\android\sdk\platform-tools
    D:\usr\lib\coco\quick-cocos2d-x\bin
    %QUICK_COCOS2DX_ROOT%\bin\win32
    D:\usr\lib\jdk\bin

### 编译`x-plyaer`，好像只需要一次就行

### 导入`libcocos2dx`，编译成lib（非常关键）

### 用`create_project`生成工程模板

#### 执行`build_native.bat`，生成`libgame.so`


    mkdir "%APP_ANDROID_ROOT%assets\scripts"
    xcopy /s /q "%APP_ROOT%scripts\*.*" "%APP_ANDROID_ROOT%assets\scripts\"
    mkdir "%APP_ANDROID_ROOT%assets\res"
    xcopy /s /q "%APP_ROOT%res\*.*" "%APP_ANDROID_ROOT%assets\res\"

    "%ANDROID_NDK_ROOT%\ndk-build" %ANDROID_NDK_BUILD_FLAGS% -C %APP_ANDROID_ROOT% NDK_MODULE_PATH=%QUICK_COCOS2DX_ROOT%;%COCOS2DX_ROOT%;%COCOS2DX_ROOT%\cocos2dx\platform\third_party\android\prebuilt


#### 确认`project.android`目录下文件

#### 编辑过程中主要改变两个文件夹

* `script`文件夹，存放脚本文件

* `res`文件夹，存放资源文件

将两个文件夹复制到`project.android`中，就可以改变`android`程序

### 将工程导入`Eclipse`作为`Android工程`

### 确认`libcocos2dx`加载正确

### 编译运行
