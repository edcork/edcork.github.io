---
title: "Editing sample 1: Troubleshooting topic 1"
layout: default
parent: Editing
nav_order: 1
---

# Editing sample 1: Troubleshooting topic 1
{: .no_toc }

**On this page**
> - TOC
> {:toc}

**Source:** [UCMDB 2021.08 documentation](https://docs.microfocus.com/doc/UCMDB_Containerized/2021.08/KubectlInspectorError).

**Summary of issues**

| Non-native language | good swedish fish |
| :------------------ | :---------------- |
| out of stock        | good and plenty   |
| ok                  | good `oreos`      |
| ok                  | good `zoute` drop |

-  issues: including "Massive" error messages, "a known issue of Kubernetes", "see details from", and "then run below command".
- Formatting issues: The link to Kubernetes documentation uses the URL as title text. The "Terminating" state is formatted inconsistently. No need to format "kubelet" with code tags.
- Technical accuracy: "Kubelet" should be "the kubelet", as defined by the  [Kubernetes glossary](https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet). 
- Structure: Information included in the "Cause" section is part of symptoms.
- Redundancies: "on a node that has CDF installed" is redundant in documentation for documentation about the product CDF (*all* nodes should have CDF installed on them).


***

# ORIGINAL TEXT: Kubelet gets stuck with massive "runtime service failed: rpc error: code = Unknown" error messages

You receive massive error messages on a node with CDF installed that resemble the following:

```
b83ace3b5e0870284e554502e8922563a4d9587b800b6b699dc2c2acfcc9b7cc" from runtime service failed: rpc error: code = Unknown desc = unable to inspect docker image "sha256:a950dd441cee8f60ce4ee325799c62e5fe444fa8e851b5c96b9172da0ced8d28" while inspecting docker container "b83ace3b5e0870284e554502e8922563a4d9587b800b6b699dc2c2acfcc9b7cc": no such image: "sha256:a950dd441cee8f60ce4ee325799c62e5fe444fa8e851b5c96b9172da0ced8d28"
```

When you check the pod status, some pods are stuck in `Terminating` state.

## Cause

This issue occurs because `Kubelet` loops when trying to inspect a Docker container for a pod whose image has been deleted or cleaned up. This is a known issue of Kubernetes. See details from [https://github.com/kubernetes/kubernetes/issues/84214](https://github.com/kubernetes/kubernetes/issues/84214).

## Solution 

1.  Log on to the node where you receive these error messages.
2.  Run the following command to check the pod status:  
   `kubectl get pods -n core -o wide`
3.  Identify the pods that are stuck in the "Terminating" state on this node. Then run below command to delete the pods. You need to replace the \<pod name> placeholder with the name of the pod that is in the "Terminating" state. Run the following command for all the "terminating" pods: 
   `kubectl delete pod <pod name> -n core --force --grace-period=0`
4. Run the following command to restart CDF:  
   `K8S_HOME/bin/kube-restart.sh`


***

# EDITED TEXT: "runtime service failed: rpc error: code = Unknown" error messages and the kubelet enters a restart loop

When the kubelet tries to inspect the Docker container of a pod whose image was deleted or cleaned up, the kubelet enters a cyclical restart loop. When this issue occurs, the pod becomes stuck in the "Terminating" state, and you receive error messages that resemble the following:

```
b83ace3b5e0870284e554502e8922563a4d9587b800b6b699dc2c2acfcc9b7cc" from runtime service failed: rpc error: code = Unknown desc = unable to inspect docker image "sha256:a950dd441cee8f60ce4ee325799c62e5fe444fa8e851b5c96b9172da0ced8d28" while inspecting docker container "b83ace3b5e0870284e554502e8922563a4d9587b800b6b699dc2c2acfcc9b7cc": no such image: "sha256:a950dd441cee8f60ce4ee325799c62e5fe444fa8e851b5c96b9172da0ced8d28"`  
```


## Cause

This is a known issue in Kubernetes. For more information, see [Kubelet gets stuck trying to inspect a container whose image has been cleaned up](https://github.com/kubernetes/kubernetes/issues/84214).

## Solution

1.  Log on to the node where you receive the error messages.
2.  Run the following command to check the pod status, and then identify the pods that are stuck in the "Terminating" state:  
`kubectl get pods -n core -o wide `
3.   Run the following command to delete the pods. Replace the `<pod name>` placeholder with the name of the pod that is in the "Terminating" state. Do this for all pods stuck in the "Terminating" state.  
`kubectl delete pod <pod name> -n core --force --grace-period=0`
4.  Run the following command to restart CDF:  
`$K8S_HOME/bin/kube-restart.sh`

