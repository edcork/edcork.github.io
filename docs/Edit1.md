# "runtime service failed: rpc error: code = Unknown" error messages and Kubelet gets stuck 

You receive massive error messages on a node with CDF installed that resemble the following:

`b83ace3b5e0870284e554502e8922563a4d9587b800b6b699dc2c2acfcc9b7cc" from runtime service failed: rpc error: code = Unknown desc = unable to inspect docker image "sha256:a950dd441cee8f60ce4ee325799c62e5fe444fa8e851b5c96b9172da0ced8d28" while inspecting docker container "b83ace3b5e0870284e554502e8922563a4d9587b800b6b699dc2c2acfcc9b7cc": no such image: "sha256:a950dd441cee8f60ce4ee325799c62e5fe444fa8e851b5c96b9172da0ced8d28"`  

When this issue occurs, some pods become stuck in the "Terminating" state.

## Cause

This issue occurs because `Kubelet` loops when trying to inspect a Docker container for a pod whose image has been deleted or cleaned up. This is a known issue of Kubernetes. See details from https://github.com/kubernetes/kubernetes/issues/84214.

## Solution
1. Log on to the node where you receive these error messages.
2. Run the following command to check the pod status:  
`kubectl get pods -n core -o wide `
4. Identify the pods that are stuck in the "Terminating" state on this node. Then run below command to delete the pods. You need to replace the <pod name> placeholder with the name of the pod that is in the "Terminating" state. Run the following command for all the "terminating" pods.  
`kubectl delete pod <pod name> -n core --force --grace-period=0`
5. Run the following command to restart CDF:  
`$K8S_HOME/bin/kube-restart.sh`
