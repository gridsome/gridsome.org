+++
title="loving-ssh.md"
date="2018-02-16T14:05:34-04:00"
+++
# ssh

ssh 绝对不不仅仅是类似 telnet 这样远程登录管理主机那么简单。下面的些 技巧，或许可以激发起你对这个「老朋友」重新认识的兴趣。

有部分内容来自： [ssh setting](http://derwiki.tumblr.com/post/841579929/how-i-learned-to-stop-worrying-and-love-ssh) 。

## 直接指定运行远程主机的命令

ssh 其实可以直接指定运行远程主机的命令。例如，每次登录并查看线上的日志是件非常繁琐的累活。其实你可以使用下面的命令

    ssh user@remotehost "taif -f /var/log/apache/access.log"

它会 ssh 登录以后直接执行指定的命令。这样我们可以构建本地脚本让其接受远程服务器的输出，做更多的事情。

## 不想开启 SFTP 工具传送文件

有时候不想开启 SFTP 工具传送文件，那么下面的命令会帮到你

    tar cvfz - localFileOrDir | ssh user@remotehost 'cd /remote/path/to/unpack/ ; tar xvfz -'

这个命令可以自动将本地的文件或者目录打包压缩以后，通过 ssh 传输到 remotehost 主机，然后 remotehost 会自动将其解压缩。

## 不用每次都要输入密码

最后个 ssh 技巧，上面的技巧的确是很实用，但是我们也受不了每次都要输入次密码。如果你的确厌烦了这些，那么尝试执行下面的命令：

    ssh user@remotehost 'cat >> ~/.ssh/authorized_keys' < ~/.ssh/id_rsa.pub

这样远程的主机就会保存你本地的公钥，你就可以自动 ssh 登录远程主机（ 详细 ）。

    ssh-copyid user@remotehost

顺便提醒：强烈提醒您保护好您主目录下的 ssh 私钥，否则您的帐户可能会面临风险。

## 进行端口的转发

将远程3128转到本地的8086

    ssh username@remotehost -p 8090 -R 3128:localhost:8086

将本地3128转到远程的8086,可以是第三个主机

    ssh username@remotehost -p 8090 -L 3128:remote:8086

## 还有些有用的参数

-C 这个参数可以将文本数据压缩传送
-X 如果远程服务器支持 X11 forwarding ，那么远程的 X 应用直接可以在本地显示运行（当然你本地要有 X Server）
