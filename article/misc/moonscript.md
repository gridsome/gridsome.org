+++
title="moonscript.md"
date="2018-02-16T14:05:34-04:00"
+++
title: Moonscript
---

# Moonscript

语法特点类似python和coffescript

## 类的使用

### 定义一个类，作为模块输入也可以

``` moon
module "WS",package.seeall

require "lfs"

class WS
	-- Constructor
	-- class variables:
	-- @dirs table holds array of files name to handle
	new: =>
		@dirs = {}
		@source = ""
		@target = ""

	-- pwd
	-- print current working directory
	pwd:()=>
      pwd = lfs.currentdir!
      print(pwd)

	-- link
	-- making symbolic link,s as source file,t as target file
	link:(s,t)=>
      lfs.link s,t,1

	mkdp:(path)=>
		lfs.mkdir path

	-- walk
	-- walk through a directory
	-- if is directory, continue searching the subdirectories and files
	-- getting attributes and show them
	walk:(path)=>
		for file in lfs.dir path
			if file != "." and file != ".."
				filepath = path.."/"..file
				attr = lfs.attributes filepath
				if attr.mode == "directory"
					@walk filepath
				else
					for i,v in pairs attr
						print i,v

	--checking os
	--uname
	--ostypes are Darwin,Linux,Windows
	checkos:(v)=>
		switch v
			when "Linux" then return "Linux"
			when "Darwin" then return "Darwin"
			when "Windows" then retrun "Windows"
```

### 使用这个类非常简单

``` moon
WS = require "WS"

dirs = {
	"java101",
	"lua101",
	"python101",
	"R101",
	"tex101",
	"java101",
	"wiki101",
}

base_linux = "/home/linuxing3/workspace"
newbase_linux = "/workspace"
base_mac = "/Volumes/mac/Tdownload/workspace"
newbase_mac = "/Users/linuxing3/workspace"

-- class WS
-- A object of workspace
ws = WS!
ws\pwd!

-- initialize ws object with dirs,source,target
ws.dirs = dirs
ws.source = base_linux
ws.target = newbase_linux

print "Your source directory is "..ws.source
print "Your source directory is "..ws.target
print file for i,file in pairs ws.dirs

switch ws\checkos "Linux"
	when "Linux" then ws.source = base_linux

```
