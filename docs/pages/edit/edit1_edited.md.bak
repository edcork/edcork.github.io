---
title: Example troubleshooting page
sidebar: edit_sidebar
permalink: edit1_edited.html
---

# "runtime service failed: rpc error: code = Unknown" error messages and Kubelet gets stuck 

The kubelet loops when it tries to inspect the Docker container for a pod whose image is deleted or cleaned up. When this issue occurs, the pod becomes stuck in the "Terminating" state, and you receive error messages that resemble the following:

`b83ace3b5e0870284e554502e8922563a4d9587b800b6b699dc2c2acfcc9b7cc" from runtime service failed: rpc error: code = Unknown desc = unable to inspect docker image "sha256:a950dd441cee8f60ce4ee325799c62e5fe444fa8e851b5c96b9172da0ced8d28" while inspecting docker container "b83ace3b5e0870284e554502e8922563a4d9587b800b6b699dc2c2acfcc9b7cc": no such image: "sha256:a950dd441cee8f60ce4ee325799c62e5fe444fa8e851b5c96b9172da0ced8d28"`  



## Cause

This issue occurs because of a known issue in Kubernetes. For more information, see https://github.com/kubernetes/kubernetes/issues/84214.

## Solution

1.  Log on to the node where you receive these error messages.
2.  Run the following command to check the pod status:  
`kubectl get pods -n core -o wide `
4.  Identify the pods that are stuck in the "Terminating" state on this node. Then run below command to delete the pods. You need to replace the <pod name> placeholder with the name of the pod that is in the "Terminating" state. Run the following command for all the "terminating" pods.  
`kubectl delete pod <pod name> -n core --force --grace-period=0`
5.  Run the following command to restart CDF:  
`$K8S_HOME/bin/kube-restart.sh`

