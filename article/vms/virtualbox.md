+++
title="virtualbox.md"
date="2018-02-16T14:05:34-04:00"
+++

# virtualbox

```sh
BoxManage storageattach machineA --storagectl "IDE Controller" --port 0 --device 0 --type hdd --medium
VBoxManage createvm -name machineA -register
VBoxManage storagectl machineA --name "IDE Controller" --add ide
VBoxManage storageattach machineA --storagectl "IDE Controller" --port 0 --device 0 --type hdd --medium \path\to\file.vmdk
```
