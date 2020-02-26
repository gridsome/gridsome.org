+++
title="docker.md"
date="2018-02-16T14:05:34-04:00"
+++

# Docker: Containerized Virtual Machine System for easy deploy

About Docker, meaning in English is transporter on ship. You can image a docker as container.

Docker is a abstracted layer of `lxc` with `aufs`(Advanced Union File System).

Under the hard work of docker, and application can be packaged as a container, which can lay on images standarized by docker.


| redis           | node | nginx |
| --------------- | ---- | ----- |
| ubuntu image    |      |       |
| Docker layer    |      |       |
| lxc    AUFS     |      |       |
| Kernel modules  |      |       |


## Installtion of archlinux

1. Using Grub4dos

Put the file `grldr` on `c:\` Drive

Edit the `boot.ini` file

```
c:\grldr = "install arch"
```

2. Editing menulist

```
title install archlinux
root (hd0,0)
kernel (hd0,0)/vmlinuz label=ARCH-201408
initrd (hd0,0)/archiso.img
boot
```

3. Booting pre system

4. Fallback to basic shell

5. Getting the `iso` file to be recognized

The trick is to find the `archlinux.iso` file and set it the `loop` device

Then link the loop device to the same label of `Grub`

```
mkdir /iso
mount -t ntfs -r /dev/sda1 /iso
modprobe loop
losetup /dev/loop6 /iso/archlnux.iso
ln -s /dev/loop6 /udisk/dev/by-label/ARCH-201408
exit
```

6. Booting real system of `iso`

Finnaly we go the live iso running and ready to install everything

7. Following the normal installtion procedure

8. Install bootloader

Copy the two files `vmlinuz-linux` and `initramfs-linux.img` from `archlinux` system to `C:` Drive

These two files will be used to preload

```
title archlinux
root (hd0,0)
kernel (hd0,0)/vmlinuz-linux ro vga=791
initrd (hd0,0)/initramfs-linux.img
boot
```

## Installtion of Docker

```
pacman -S docker
docker -d &
docker pull ubuntu:latest
docker search redis
docker run ubuntu /bin/echo hello world
docker run -i -t ubuntu /bin/bash
docker run -p 6379:6379 redis /usr/local/bin/redis-server
docker ps -a
docker ps
docker stop ubuntu
docker rm ubuntu
docker login
docker push -m "Updated" -t me/ubuntu ubuntu
```

## maniy popular images

> alpine
> debian
> nginx


## some common dockerfiles

#### Run a git server in a container.

```dockerfile
#
# docker run --rm -it -p 1234:22 \
# 	-e DEBUG=true \
# 	-e "PUBKEY=$(cat ~/.ssh/id_ed25519.pub)" \
# 	--name gitserver \
# 	jess/gitserver
FROM alpine
MAINTAINER xingwenju<linuxing3@qq.com>

ENV HOME /root

RUN apk --no-cache add \
	git \
	openssh \
	&& sed -i "s/#PasswordAuthentication yes/PasswordAuthentication no/" /etc/ssh/sshd_config \
	&& sed -i "s/#PubkeyAuthentication yes/PubkeyAuthentication yes/" /etc/ssh/sshd_config \
	&& echo -e "AllowUsers git\n" >> /etc/ssh/sshd_config \
	&& echo -e "Port 22\n" >> /etc/ssh/sshd_config \
	&& addgroup git \
	&& adduser -D -S -s /usr/bin/git-shell -h /home/git -g git git \
	&& mkdir -p /home/git/.ssh \
	&& chown -R git:git /home/git \
	&& passwd -u git

ENV HOME /home/git
EXPOSE 22
WORKDIR $HOME

COPY ./start.sh /
COPY create_repo /usr/bin/create_repo

ENTRYPOINT ["/start.sh"]
CMD ["/usr/sbin/sshd", "-D", "-e", "-f", "/etc/ssh/sshd_config"]
```

#### Run a vncserver in a container

```
FROM debian:stretch
MAINTAINER xingwenju<linuxing3@qq.com>

RUN apt-get update && apt-get install -y \
	libgssapi-krb5-2 \
	rdesktop \
	--no-install-recommends \
	&& rm -rf /var/lib/apt/lists/*

ENTRYPOINT [ "rdesktop" ]
```


##### My iamges

```sh
zixia/wechaty           latest              6983abd102f3        5 days ago          1.19GB
mhart/alpine-node       latest              84e8c92ba0a8        2 weeks ago         66.8MB
jare/vim-bundle         latest              cdac66b264c1        3 weeks ago         291MB
continuumio/anaconda3   latest              279ba92400be        3 months ago        3.05GB
alpine                  latest              76da55c8019d        5 months ago        3.97MB
jare/drop-in            latest              6a02f36eb456        12 months ago       438MB
jare/go-tools           latest              0070db6a3e96        12 months ago       566MB
```
