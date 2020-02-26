+++
title="alpine.md"
date="2018-02-16T14:05:34-04:00"
+++

# chroot to alpine linux

```
install
./sbin/apk.static -X http://nl.alpinelinux.org/alpine/latest-stable/main/ -U --allow-untrusted --root /alpine --initdb add alpine-base

mkdev
mknod -m 666 /alpine/dev/full c 1 7
mknod -m 666 /alpine/dev/ptmx c 5 2
mknod -m 644 /alpine/dev/random c 1 8
mknod -m 644 /alpine/dev/urandom c 1 9
mknod -m 666 /alpine/dev/zero c 1 5
mknod -m 666 /alpine/dev/tty c 5 0
mknod -m 666 /alpine/dev/sda b 8 0
mknod -m 666 /alpine/dev/sda1 b 8 1
mknod -m 666 /alpine/dev/sda2 b 8 2
mknod -m 666 /alpine/dev/sda3 b 8 3
mknod -m 666 /alpine/dev/sda4 b 8 4
mknod -m 666 /alpine/dev/sda5 b 8 5
mknod -m 666 /alpine/dev/sda6 b 8 6
mknod -m 666 /alpine/dev/sdb b 8 16
mknod -m 666 /alpine/dev/sda1 b 8 17
mknod -m 666 /alpine/dev/sda2 b 8 18
mknod -m 666 /alpine/dev/sda3 b 8 19
mknod -m 666 /alpine/dev/sda4 b 8 20
mknod -m 666 /alpine/dev/sda5 b 8 21
mknod -m 666 /alpine/dev/sda6 b 8 22
cp /etc/resolv.conf /alpine/etc/
mkdir -p /alpine/root
mkdir -p /alpine/etc/apk echo "http://nl.alpinelinux.org/alpine/latest-stable/main" > /alpine/etc/apk/repositories

mkbootable
rc-update add devfs sysinit
rc-update add dmesg sysinit
rc-update add mdev sysinit
rc-update add hwclock boot
rc-update add modules boot
rc-update add sysctl boot
rc-update add hostname boot
rc-update add bootmisc boot
rc-update add syslog boot
rc-update add mount-ro shutdown
rc-update add killprocs shutdown
rc-update add savecache shutdown

goalpine
mount -t proc none /alpine/proc
mount -o bind /sys /alpine/sys
mount -o bind /dev /alpine/dev
chroot /alpine /bin/sh -l

echo rc-update add devfs sysinit
echo rc-update add dmesg sysinit
echo rc-update add mdev sysinit
echo rc-update add hwclock boot
echo rc-update add modules boot
echo rc-update add sysctl boot
echo rc-update add hostname boot
echo rc-update add bootmisc boot
echo rc-update add syslog boot
echo rc-update add mount-ro shutdown
echo rc-update add killprocs shutdown
echo rc-update add savecache shutdown
```
