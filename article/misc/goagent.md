+++
title="goagent.md"
date="2018-02-16T14:05:34-04:00"
+++
title: Goagent on Archlinux
---

# Configuring `goagent` in Archlinux

## Install

```sh
pacman -S goagent
```

## Install certificates

``` sh
mkdir /usr/share/ca-certificates/goagent
cp /usr/share/goagent/local/CA.crt /usr/share/ca-certificates/goagent/GoAgent.crt
echo 'goagent/GoAgent.crt' >> /etc/ca-certificates.conf
update-ca-certificates
```

## Configure `/etc/goagent`

```sh
[gae]
appid = you appid
[proxy]
enable = 1
autodetect = 1
host = 127.0.0.1
port = 3127
```

- Note: this `[proxy]` is the father proxy for goagent since I'm behind a http proxy of my company

## Start it!

```sh
systemctl start goagent
systemctl enable goagent

```

## The full `goagent.ini`,for being overwitten

```sh
[listen]
ip = 127.0.0.1
port = 8087
username =
password =
visible = 1
debuginfo = 0

[gae]
appid = goagent
password =
path = /2
mode = https
profile = ipv4
window = 4
obfuscate = 0
validate = 0
transport = 0
options =
regions =

[iplist]
google_cn = www.google.cn|www.g.cn
google_hk = www.google.com|mail.google.com|www.google.com.hk|www.google.com.tw|www.l.google.com
google_talk =talk.google.com|talk.l.google.com|talkx.l.google.com
google_ipv6 = 2404:6800:4005:c00::64|2404:6800:4005:c00::65|2404:6800:4005:c00::5e|2404:6800:4005:c00::67|2404:6800:4005:c00::2f
;google_tw = www.google.com.tw|www.google.com.sg|www.google.co.jp|www.google.sg|www.google.cat|mail.google.com|mail.l.google.com

[ipv4/hosts]
mtalk.google.com =
talk.google.com = google_talk
talk.l.google.com = google_talk
talkx.l.google.com = google_talk
.google.com = google_hk
.google.com.hk = google_hk
.googleapis.com = google_hk
.android.com = google_hk
.appspot.com = google_hk
.googletagservices.com = google_hk
.googlegroups.com = google_hk
.googlesource.com = google_hk
.googleusercontent.com = google_hk
.google-analytics.com = google_hk
.googlecode.com = google_hk
.gstatic.com = google_hk
.ggpht.com = google_hk
.dropbox.com:443 =
.box.com:443 =
.copy.com:443 =
; .c.youtube.com =
; .youtube.com = google_hk
; .googlevideo.com =
; https?://www\.youtube\.com/watch = google_hk
; https?://www\.example\.com/.+\.html = file:///C:/README.txt

[ipv4/http]
crlfsites = scholar.google.com|.appspot.com
withgae = play.google.com|wenda.google.com.hk|clients.google.com|clients1.google.com
forcehttps = www.youtube.com|www.google.com|www.google.com.hk|code.google.com|plus.google.com|plus.url.google.com|groups.google.com|docs.google.com|s1.googleusercontent.com|s2.googleusercontent.com|images1-focus-opensocial.googleusercontent.com|images2-focus-opensocial.googleusercontent.com|images3-focus-opensocial.googleusercontent.com|lh0.googleusercontent.com|lh1.googleusercontent.com|lh2.googleusercontent.com|lh3.googleusercontent.com|lh4.googleusercontent.com|lh5.googleusercontent.com|lh6.googleusercontent.com|lh7.googleusercontent.com|lh8.googleusercontent.com|lh9.googleusercontent.com|lh10.googleusercontent.com|lh11.googleusercontent.com|lh12.googleusercontent.com
fakehttps = plus.google.com|s.ytimg.com|ssl.gstatic.com|fonts.googleapis.com|mail-attachment.googleusercontent.com|webcache.googleusercontent.com|s1.googleusercontent.com|s2.googleusercontent.com|images1-focus-opensocial.googleusercontent.com|images2-focus-opensocial.googleusercontent.com|images3-focus-opensocial.googleusercontent.com|lh0.googleusercontent.com|lh1.googleusercontent.com|lh2.googleusercontent.com|lh3.googleusercontent.com|lh4.googleusercontent.com|lh5.googleusercontent.com|lh6.googleusercontent.com|lh7.googleusercontent.com|lh8.googleusercontent.com|lh9.googleusercontent.com|lh10.googleusercontent.com|lh11.googleusercontent.com|lh12.googleusercontent.com

[ipv6/hosts]
talk.google.com =
talk.l.google.com =
talkx.l.google.com =
.google.com = google_ipv6
.googleusercontent.com = google_ipv6
.googleapis.com = google_ipv6
.google-analytics.com = google_ipv6
.googlecode.com = google_ipv6
.google.com.hk = google_ipv6
.googlegroups.com = google_ipv6
.googlesource.com = google_ipv6
.appspot.com = google_ipv6
.android.com = google_ipv6
.dropbox.com:443 =
.box.com:443 =
.copy.com:443 =
; .youtube.com =
; .googlevideo.com =
; https?://www\.youtube\.com/watch = google_hk

[ipv6/http]
dns = 2001:4860:4860::8888|2001:4860:4860::8844|2001:470:20::2
crlfsites = .youtube.com|.google.com
withgae = play.google.com
forcehttps = code.google.com|groups.google.com|docs.google.com
fakehttps =

[pac]
enable = 1
ip = 0.0.0.0
port = 8086
file = proxy.pac
admode = 1
adblock = https://easylist-downloads.adblockplus.org/easylistchina.txt
gfwlist = https://autoproxy-gfwlist.googlecode.com/svn/trunk/gfwlist.txt
expired = 86400

[php]
enable = 0
password = 123456
crlf = 0
validate = 0
listen = 127.0.0.1:8088
fetchserver = http://.com/
usehosts = 1

[proxy]
enable = 1
autodetect = 1
host = 127.0.0.1
port = 3127
username =
password =

[autorange]
hosts = *.c.youtube.com|*.atm.youku.com|*.googlevideo.com|*av.vimeo.com|smile-*.nicovideo.jp|video.*.fbcdn.net|s*.last.fm|x*.last.fm|*.x.xvideos.com|*.edgecastcdn.net|*.d.rncdn3.com|cdn*.public.tube8.com|videos.flv*.redtubefiles.com|cdn*.public.extremetube.phncdn.com|cdn*.video.pornhub.phncdn.com|*.mms.vlog.xuite.net|vs*.thisav.com|archive.rthk.hk|video*.modimovie.com|*.c.docs.google.com
endswith = .f4v|.flv|.hlv|.m4v|.mp4|.mp3|.ogg|.avi|.dmg|.iso
noendswith = .xml|.json|.html|.php|.py|.js|.css|.jpg|.jpeg|.png|.gif|.ico|.webp
threads = 3
maxsize = 1048576
waitsize = 524288
bufsize = 8192

[dns]
enable = 0
listen = 127.0.0.1:53
servers = 8.8.8.8|8.8.4.4|114.114.114.114|114.114.115.115
blacklist = 1.1.1.1|255.255.255.255|74.125.127.102|74.125.155.102|74.125.39.102|74.125.39.113|209.85.229.138|4.36.66.178|8.7.198.45|37.61.54.158|46.82.174.68|59.24.3.173|64.33.88.161|64.33.99.47|64.66.163.251|65.104.202.252|65.160.219.113|66.45.252.237|72.14.205.104|72.14.205.99|78.16.49.15|93.46.8.89|128.121.126.139|159.106.121.75|169.132.13.103|192.67.198.6|202.106.1.2|202.181.7.85|203.161.230.171|203.98.7.65|207.12.88.98|208.56.31.43|209.145.54.50|209.220.30.174|209.36.73.33|209.85.229.138|211.94.66.147|213.169.251.35|216.221.188.182|216.234.179.13|243.185.187.3|243.185.187.39
tcpover = .youtube.com|.ytimg.com|.googlevideo.com

[useragent]
enable = 0
string = Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A543a Safari/419.3

[fetchmax]
local =
server =

[love]
enable = 1
tip = \u8bf7\u5173\u6ce8\u5317\u4eac\u5931\u5b66\u513f\u7ae5~~
```
