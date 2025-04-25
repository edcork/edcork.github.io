---
title: "Example 2: Troubleshooting topic 2"
layout: default
parent: Editing
nav_order: 2
---

# Example 2: Troubleshooting topic 2
{: .no_toc }

**On this page**
> - TOC
> {:toc}

**Source:** [SMAX 2021.11 documentation](https://docs.microfocus.com/doc/SMAX/2021.11/RabbitMQNotStart).

- Issues: logic issues ("powering off an environment", "and fail to remove these folders"—it's not the user that fails to do it)
- Clarity (start of Solution)
- product naming and consistency ("suite", "environment", "system", "OMT")
- Accuracy: "fail to remove" wrong
- Note: Link is wrong, there's no failure, issue fixed on Azure files 2.5 years prior to edit.
- passive voice


***

# ORIGINAL TEXT: RabbitMQ isn't ready

The **infra-rabbitmq-\<n>** (\<n>=0, 1, or 2) pod isn’t ready. The pod's readiness state is stuck in 1/2. The following is an example:

```
NAME                         READY       STATUS        RESTARTS    AGE

infra-rabbitmq-0             1/2         Running       0           16h
```

## Cause

There are many causes for this issue. Here are some examples.

- The suite environment wasn't shut down gracefully. For example, you powered off the environment directly without shutting down the suite and OMT pods first.
- Your system has insufficient hardware resources.
- There are issues with the network connectivity between the NFS server and worker nodes.

## Solution

When RabbitMQ fails to start twice, the system will automatically perform a fresh start of RabbitMQ. When this issue occurs:

1. Wait up to 15 minutes, the issue is probably gone.
2. If the problem still persists, check your system resources and network connectivity.
3. If it's not a resource or network issue, manually restart RabbitMQ.

How to manually restart RabbitMQ:

1. Run the following command on a master node (embedded Kubernetes) or the bastion node (managed Kubernetes) to stop RabbitMQ:
   
	`kubectl scale statefulset infra-rabbitmq -n &lt;suite namespace&gt; --replicas=0`

2. Wait until all RabbitMQ pods are terminated.
3. Remove the `<rabbitmq-infra-rabbitmq-n>/data/xservices/rabbitmq/x.x.x.xx/mnesia` folders on the NFS server or the bastion node (if managed NFS is used, including EFS, Azure Files, Azure NetApp Files, and Filestore).
   
   For example, remove the following folders:
   
	```
	/var/vols/itom/itsma/rabbitmq-infra-rabbitmq-0/data/xservices/rabbitmq/x.x.x.xx/mnesia
	/var/vols/itom/itsma/rabbitmq-infra-rabbitmq-1/data/xservices/rabbitmq/x.x.x.xx/mnesia
	/var/vols/itom/itsma/rabbitmq-infra-rabbitmq-2/data/xservices/rabbitmq/x.x.x.xx/mnesia
	```

	**Note** If you use Azure Files as the storage service and fail to remove these folders, follow the instructions at <a class="external text" href="https://docs.microsoft.com/en-us/azure/storage/files/storage-troubleshoot-cannot-delete-files-azure-file-share" rel="nofollow" target="1" title="Fail to delete files">Fail to delete files</a> except that you don't need to install Azure Powershell Module. Instead, you can run all the commands with <a class="external text" href="https://docs.microsoft.com/en-us/azure/cloud-shell/overview" rel="nofollow" target="1" title="Azure Cloud Shell">Azure Cloud Shell</a> from the Azure portal.

4. Run the following command on a master node (embedded Kubernetes) or the bastion node (managed Kubernetes) to restart RabbitMQ:
   
	`kubectl scale statefulset infra-rabbitmq -n <suite namespace> --replicas=3`

***

# EDITED TEXT: RabbitMQ Pod Isn’t Ready SEE WORD FILE FOR MY VERSION, BELOW IS CHTGPT

If the **infra-rabbitmq-\<n>** pod (where `<n>` is 0, 1, or 2) is not ready, its status shows **1/2**, and the pod is stuck. For example:

	NAME                         READY       STATUS        RESTARTS    AGE

	infra-rabbitmq-0             1/2         Running       0           16h

## Cause
- The system was shut down without stopping Service Management and OMT.
- The system does not have enough hardware resources.
- There are network problems between the NFS server and worker nodes.

## Solution
RabbitMQ automatically restarts itself if it fails to start twice.

1. **Wait 15 minutes** to see if it recovers on its own.  
2. **Check your system resources** and network connections.  
3. If the problem continues, follow these steps to do a manual restart:

1. On a control plane node (embedded Kubernetes) or a bastion node (managed Kubernetes), run:
	```
	kubectl scale statefulset infra-rabbitmq -n <Service Management namespace> --replicas=0
	```

