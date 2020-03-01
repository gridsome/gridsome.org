+++
title="archlinux.md"
date="2018-02-16T14:05:34-04:00"
+++

# Install Archlinux from beggining

## Boot from iso file

将安装的your_arch_image.iso文件放在`win_drive`的根目录，假设这里是`ntfs`格式

使用grub4dos来引导最小镜像文件

```
root (hd0,0)
kernel /vmlinuz archisolabel=ARCH2016
initrd /archiso.img
```

启动后会进入系统安全模式，在这里执行

```
mkdir /mnt/iso
mount -r -t ntfs /dev/win_drive /mnt/iso
modprobe loop
losetup /dev/loop6 /mnt/iso/your_arch_image.iso
ln -s /dev/loop6 /dev/disks/by-label/ARCH2016
exit
```

这样就可以启动安装光盘了！

## Prepare your partition

### Using `fdisk` to create partition table

```sh
fdisk /dev/sda
n # creating new partion
w # write
```

### Format partition

```sh
mkfs.ext4 /dev/sda1
```

### Mount new partition as install target

```sh
mount /dev/sda1 /mnt
```

## Setting network

### Setting network with `netctl`

```sh
cp /etc/netctl/examples/ethernet-static /etc/netctl/office
netctl list
netctl start office
```

### `office` profie as follows

``` sh
Description='A basic dhcp ethernet connection'
Interface=eth0
Connection=ethernet
IP=dhcp
ForceConnect=yes
DHCPClient="dhclient"
```

### Setting network behind proxy

-  `NAT Forward`
-  `ssh` to the virtual machine with port forward

And don't forget to export your new environment variables

```sh
export http_proxy=your_proxy_id:your_proxy_port
```

### Generating file system `genfstab -o /mnt /mnt/etc/fstab`


### change root `arch-chroot /mnt`

Ok, Now your job on iso live environment is done!


## Next steps are in you newly installed archlinux environment

### `vim etc/fstab`
```sh
/dev/sda1           	/         	ext4      	rw,relatime,data=ordered	0 1
/dev/sda2           	/home       ext4      	rw,relatime,data=ordered	0 1
```

# `nano /etc/hostname`
arch

### Basic Configuration
```sh
nano /etc/hosts
ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
nano /etc/locale.gen
nano /etc/locale.conf
nano /usr/share/i18n/locales/zh_CN
locale-gen
mkinitcpio -p linux
grub-install /dev/sda
grub-mkconfig -o /boot/grub/grub.cfg
passwd root
```

### `nano /etc/pacman.d/mirrorlist`

```sh
Server = http://mirror.bjtu.edu.cn/archlinux/$repo/os/$arch
Server = http://mirrors.163.com/archlinux/$repo/os/$arch
Server = http://mirrors.ustc.edu.cn/archlinux/$repo/os/$arch
Server = http://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch
Server = http://mirrors.neusoft.edu.cn/archlinux/$repo/os/$arch
Server = http://mirrors.hust.edu.cn/archlinux/$repo/os/$arch
```

### `nano /etc/pacman.conf`

```sh
[options]
HoldPkg     = pacman glibc
#XferCommand = /usr/bin/wget --passive-ftp -c -O %o %u
#CleanMethod = KeepInstalled
#UseDelta    = 0.7
Architecture = auto

[core]
Include = /etc/pacman.d/mirrorlist

[extra]
Include = /etc/pacman.d/mirrorlist

[community]
Include = /etc/pacman.d/mirrorlist

[archlinuxfr]
SigLevel = Optional TrustAll
Server = http://repo.archlinux.fr/$arch

```

### Using pacman to install programs

```
pacman -Syy
pacman -S gvim
pacman -S git ruby lua clojure node gem npm
pacman -S python
pacman -S python-pip python-setuptools
pacman -S calcurse ranger
pacman -S cmus
pacman -S tmux
pacman -S openssh
pacman -S xorg-xauth
pacman -S xorg-server xorg-xinit
pacman -S notion
pacman -S enlightenment
pacman -S connman
pacman -S redis
pacman -S mongodb
pacman -S mysql
pacman -S couchdb
pacman -S wqy-bitmapfont wqy-zenhei ttf-arphic-ukai ttf-arphic-uming
pacman -S ttf-monaco
pacman -S ttf-dejavu
pacman -S wqy-zenhei
pacman -S fbterm
pacman -S libx86
pacman -S fcitx
pacman -S fcitx-fbterm
pacman -S yaourt
pacman -S rsync customizepkg
yaourt -S infinality
yaourt -S fongconfig-infinality
pacman -S urxvt
pacman -S rxvt-unicode
pacman -S gtk2-perl
pacman -S vim-ultisnips
pacman -S vim-fugitive
pacman -S vim-nerdtree vim-minibufexpl vim-supertab vim-surround
```

### linking conf files

```sh
ln -s archdotfiles/.curlrc ~/.curlrc
ln -s archdotfiles/.wgetrc ~/.wgetrc
ln -s archdotfiles/.bashrc ~/.bashrc
ln -s archdotfiles/.gitconfig ~/.gitconfig
ln -s archdotfiles/.xinitrc ~/.xinitrc
ln -s archdotfiles/.Xdefaults ~/.Xdefaults
```

-  The `gitconfig` file like

```sh
[user]
        name = your name
        email = your email
[push]
        default = matching
[http]
	proxy=http://127.0.0.1:3127
[credential]
	helper=store
```

### installing separate servers by compling from source

```sh
wget http://openresty.org/download/ngx_openresty-1.5.12.1.tar.gz
mv ngx_openresty-1.5.12.1.tar.gz /home/shared/
tar zxvf ngx_openresty-1.5.12.1.tar.gz
cd ngx_openresty-1.5.12.1
./configure --with-luajit
make
make install
/usr/local/openresty/nginx/sbin/nginx &
```

### evince to display chinese charaters

#### install `doppler-data`

```sh
pacman -S doppler-data
```

#### modify `/etc/fonts/conf.d/49-sansserif.confi`

```sh
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
<!--
  If the font still has no generic name, add sans-serif
 -->
	<match target="pattern">
		<test qual="all" name="family" compare="not_eq">
			<string>sans-serif</string>
		</test>
		<test qual="all" name="family" compare="not_eq">
			<string>serif</string>
		</test>
		<test qual="all" name="family" compare="not_eq">
			<string>monospace</string>
		</test>
		<edit name="family" mode="append_last">
			<string>wqy-zenhei</string>
		</edit>
	</match>
</fontconfig>
```

### Virtualbox-guest-utils

After installing, run the following script

```sh
echo "load virtualbox modules"
echo "you can install virtualbox-guest-utils first"
modprobe -a vboxguest vboxsf vboxvideo
echo "mounting virtualbox shared folders"
echo "mounting winshared in /root/winshared"
mount -t vboxsf winshared /root/winshared
echo "mounting mfa in /home/mfa"
mount -t vboxsf mfa /home/mfa
echo "rsync from windows shared folder to /home/shared"
echo "Done"
```

### Doing sync for shared folders

```sh
rsync /root/winshared/* /home/shared/
```

## Great! You have a fully operational Archlinux in your computer

### More configuration in office

We must configure the network by defining the ip address and route

We have 2 subnet, first 192.168.76.x,second 192.168.5.x

We need proper routes to comunicate between them

```
echo "Configure your network and routing"
ifconfig enp3s0 down
ifconfig enp3s0 192.168.76.54 netmask 255.255.252.0
route add -net 0.0.0.0 netmask 0.0.0.0 gateway 192.168.76.1 dev enp3s0
route add -net 192.168.76.0 netmask 255.255.252.0 gateway 192.168.76.63 dev enp3s0
route add -net 192.168.76.255 netmask 255.255.255.255 gateway 192.168.76.63 dev enp3s0
route add -net 224.0.0.0 netmask 240.0.0.0 gateway 192.168.76.3 dev enp3s0
route add -net 255.255.255.255 netmask 255.255.255.255 gateway 192.168.76.3 dev enp3s0
ifconfig enp3s0 up
echo "Done!"
```

The route `224.0.0.0` is the key for connecting two subnet

The gateway is `192.168.76.3`, not as default `76.1`

## The grub setting

### grub4dos

A problem os `grub2dos` is that it may not know

#### how to install on my Mac mini

* install refind

[rEFInd引导程序](http://www.rodsbooks.com/refind/installing.html#windows)会以图标的方式列出你所有的操作系统。因此，你可以通过点击相应的图标来启动Windows、Ubuntu或者优盘中的操作系统。

[点击这里下载rEFInd for Windows 8](http://sourceforge.net/projects/refind/files/0.8.4/refind-bin-0.8.4.zip/download)。

[点击这里下载rEFInd Shell](https://edk2.svn.sourceforge.net/svnroot/edk2/trunk/edk2/ShellBinPkg/UefiShell/X64/Shell.efi)

[点击这里下载rEFInd Shell for old EFI](http://dl.dropbox.com/u/17629062/Shell2.zip)


*  install rEFInd

If you haven't installed rEFInd previously, unpack its zip file to a FAT partition. This can be the ESP itself or another partition, such as a USB flash drive. If you're simply repairing a lost NVRAM entry, you needn't move your existing rEFInd files.


*    Identify your filesystems

which are labelled with the form fsn:, as in fs0: for the first filesystem, fs1: for the second, and so on. Type the filesystem number followed by the Enter key to begin using it. You can then type ls or dir to see the contents of the filesystem. Chances are your ESP will be fs0:, but it could be something else. (The following steps assume your ESP is fs0:; you'll need to adjust them if it's not.) If rEFInd's source files are on another device, you must identify it, too.

* create a directory

If necessary, create a directory for rEFInd by typing mkdir fs0:\EFI\refind. (If the fs0:\EFI directory doesn't already exist, you must create it first, though.)


* Change to the directory in which rEFInd's files exist.

Type `cp refind_x64.efi fs0:\EFI\refind` to copy the rEFInd binary file. Adjust the name if you're using an IA32 or AARCH64 computer.)

Type `cp refind.conf-sample fs0:\EFI\refind\refind.conf` to copy and rename
   the sample rEFInd configuration file.

Type `cp -r icons fs0:\EFI\refind\` to copy rEFInd's icons.

Optionally, `type cp -r drivers_x64 fs0:\EFI\refind\` to copy rEFInd's X64 drivers. (You could instead copy the IA32 or AARCH64 drivers or limit
   yourself to just the drivers you need, of course.)

Type `fs0:`, if necessary, to change to the ESP.

Type `cd \EFI\refind` to change to rEFInd's installation directory.

If you want to edit rEFInd's options, type `edit refind.conf` and use the shell's built-in text editor to do so. Press `F2` followed by the Enter key
   to save your changes and `F3` to exit.

Type `bcfg boot dump -b` to see a list of existing NVRAM entries. Pay attention to their numbers (labelled Option: and Variable:, with the latter number preceded by the string Boot, as in Boot0007). You'll want to create
a boot entry for rEFInd using a number that's not in use.

Type `bcfg boot add 3 fs0:\EFI\refind\refind_x64.efi "rEFInd"`, adjusting the number (3 in this example), filesystem (fs0:), and filename (\EFI\refind\refind_x64.efi) as necessary for your system.

If you're used to Linux, be sure to use backslashes (\), not Linux-style forward slashes (/), as directory separators. Note that some shells may ignore the number you entered and use another one, so watch for this possibility.

Type `bcfg boot mv 3 0`, substituting the option number for the entry you
   created for 3. This moves rEFInd to the top of the boot order.

Type `reset` to reboot the computer.


2.下载和解压以后，按照以下的步骤安装rEFInd。

    返回桌面

    右击开始按钮，选择管理员命令行

    输入 `mountvol g: /s` (这将你的EFI目录结构映射到G盘)

    进入解压的rEFInd目录。例如： `cd c:\users\gary\downloads\refind-bin-0.8.4\refind-bin-0.8.4` 。

    当你输入 `dir` 命令，你可以看到一个refind目录

    输入如下命令将refind拷贝到EFI引导区 `xcopy /E refind g:\EFI\refind\`

    输入如下命令进入refind文件夹 `cd g:\EFI\refind`

    重命名示例配置文件 `rename refind.conf-sample refind.conf`

    运行如下命令将rEFind设置为引导程序 `bcdedit /set {bootmgr} path \EFI\refind\refind_x64.efi`

    重启你的电脑

    你将会看到一个包含`Ubuntu`和`Windows`的图形菜单


* install windows with winclone

* boot windows

* edit `BCD` with `bootice` to add `grub4dos` based on `grldr.mbr`

* edit `menu.lst` to add `linux` entry

* install `linux`
