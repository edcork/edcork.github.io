---
title: "Sample 2: Troubleshooting topic 2"
layout: default
parent: Editing
nav_order: 2
---

# Editing sample 2: Troubleshooting topic
{: .no_toc }

**On this page**
> - TOC
> {:toc}

**Source:** [SMAX 2021.11 documentation](https://docs.microfocus.com/doc/SMAX/2021.11/RabbitMQNotStart).

**Summary of issues**
 
| Technical accuracy | You do not power off an environment.  The note says "If you... fail to remove these folders," but it's not the user that fails to do this. Further, there are no instructions at the linked Azure files topic, as the described issue was fixed 2.5 years earlier. |
| Clarity | The connection between the first sentence and the first step of the Solution is lost due to poor structure.  |
| Product naming and consistency | The terms "environment" and "system" are used interchangeably. The term "suite" is used instead of the correct product name. Inconsistent formatting of directory paths. |

***

# ORIGINAL TEXT: RabbitMQ isn't ready

The **infra-rabbitmq-\<n>** (\<n>=0, 1, or 2) pod isn’t ready. The pod's readiness state is stuck in 1/2. The following is an example:

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

# EDITED TEXT: RabbitMQ pod isn't ready

The RabbitMQ pod (for example, __infra-rabbitmq-\<n>__, where __\<n>__ is 0, 1, or 2) isn't ready. The pod's readiness state is stuck at **1/2**. For example:

```
	NAME                         READY       STATUS        RESTARTS    AGE

	infra-rabbitmq-0             1/2         Running       0           16h
```

## Cause
This issue may occur because:
- The system was shut down incorrectly. For example, you powered off the system without first shutting down Service Management and OMT.
- Your system doesn’t have enough hardware resources.
- There are network connectivity issues between the NFS server and the worker nodes.


## Solution
OMT automatically restarts RabbitMQ if it fails to start twice. Therefore, first wait 15 minutes, and then check if the issue was resolved automatically.

If the issue still exists, check the system resources and network connectivity.

If there are no resource or network issues, manually restart RabbitMQ. To do this, follow these steps:

1.	Run the following command on a control plane node (embedded Kubernetes) or the bastion node (managed Kubernetes) to stop RabbitMQ:

	`kubectl scale statefulset infra-rabbitmq -n <Service Management namespace> --replicas=0`
2.	Wait until all RabbitMQ pods have stopped.  
3.	Remove the **rabbitmq-infra-rabbitmq-\<n>/data/xservices/rabbitmq/x.x.x.xx/mnesia** folders from the NFS server (or the bastion node if you use a managed NFS, including: EFS, Azure NetApp Files, and Filestore). For example, remove the following folders:  
	- /var/vols/itom/itsma/rabbitmq-infra-rabbitmq-0/data/xservices/rabbitmq/x.x.x.xx/mnesia
	- /var/vols/itom/itsma/rabbitmq-infra-rabbitmq-1/data/xservices/rabbitmq/x.x.x.xx/mnesia
	- /var/vols/itom/itsma/rabbitmq-infra-rabbitmq-2/data/xservices/rabbitmq/x.x.x.xx/mnesia
4.	Restart RabbitMQ. To do this, run the following command on a control plane node (embedded Kubernetes) or on the bastion node (managed Kubernetes):

	`kubectl scale statefulset infra-rabbitmq -n < Service Management namespace> --replicas=3`
