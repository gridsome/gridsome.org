+++
title="proxytunnel.md"
date="2018-02-16T14:05:34-04:00"
+++
title: proxytunnel
date: 2014-09-28 18:16:18
tags: proxy vps
---

## Using proxytunnel to connect Digital Ocean Host

### Enable `443` port on your Digitalocean droplet

In `/etc/ssh/sshd_config`, adding the `443` port support

```
Port 22
Port 443
```

### Determing if your company proxy support https `connect`

```
proxytunnel -v -p proxy.company.com:80 -d yourdigitalocean.com:443
```

### Make a script to run

```
echo For this to work, you must activate your digital ocean droplet
echo ------------------------------------------
echo Making changes to ~/.ssh/config
rm ~/.ssh/config
echo DynamicForward 1080 >> ~/.ssh/config
echo 'ProxyCommand proxytunnel -v -p proxy.company.com:80 -d %h:%p -H "User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Win32)\n"' >> ~/.ssh/config
echo ServerAliveInterval 30 >> ~/.ssh/config

echo Done editing proxytunnel config file
echo Start a tunnel through local net proxy to digital ocean 443 port
echo ------------------------------------------
echo Connecting to digital ocean 443 port
echo ------------------------------------------
ssh -p 443 root@yourdigitalocean.com
echo Deleting ~/.ssh/config
rm ~/.ssh/config
```
