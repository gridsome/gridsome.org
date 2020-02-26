+++
title="vultr.md"
date="2018-02-16T14:05:34-04:00"
+++

## Transfered to Vultr Japan


### `ssh` is simple with `proxytunnel`

* `~/.ssh/config`

```
DynamicForward 1080
ProxyCommand proxytunnel -v -p proxy:80 -d %h:%p -H "User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Win32)\n"
ServerAliveInterval 30
```

* And connect to ssh server
```
ssh root@vultrhost
```

### For high speed test

Very fast from mainland!
