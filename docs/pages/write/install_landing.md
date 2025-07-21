---
title: "Install OMT"
layout: default
parent: Writing
nav_order: 1
has_toc: false
---

# Install OMT
{: .no_toc }

<details close markdown="block">
  <summary>
  
    On this page
	
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

This section describes how to install OMT. The following is a high--level view of the process.

# Step 1: Plan your deployment

Before you install OMT, review
- <span style="color: red;"><u>Sizing and directory structure</u></span>
- <span style="color: red;"><u>System requirements</u></span> 

## Decide which capabilities to enable
{: .no_toc }

OMT includes optional capabilities that can be enabled or disabled during installation. 

Some capabilities help with the installation process, and others add functionality when you use OMT. When you install OMT with its embedded Kubernetes, all capabilities are enabled by default.

|Capability|Description|Default setting|
|---|---|---|
|Cluster management|Manages the Kubernetes cluster.|Enabled|
|Deployment management|Deploys applications.|Enabled|
|Log collection|Collects logs from OMT infrastructure and applications. Logs are stored on an NFS volume by default but can be forwarded to external systems (e.g., Elasticsearch, Splunk). If disabled, logs remain at their source.|Enabled|
|Monitoring|Enables Prometheus (for metrics collection) and Grafana (for visualization). If enabled with the NFS provisioner, an additional NFS volume is automatically configured. If NFS is disabled, you must manually set up a persistent volume.|Enabled|
|Monitoring content|Provides preconfigured Grafana dashboards.|Enabled|
|NFS provisioner|Automatically creates required NFS persistent volumes (PVs). Requires an NFS server with a preconfigured volume.|Enabled|
|Tools|Includes CLI tools for cluster and application administration.|Enabled|
|Kubernetes backup|Uses Velero for backup and restore of Kubernetes deployments.|Enabled|
		

# Step 2: Prepare a Docker Hub account

You need a Docker Hub account authorized by us to download application images from our Docker Hub image registry. 

If you don't already have one, set up an account, and then contact us to authorize it. For more information, see <span style="color: red;"><u>Activate your Docker Hub account</u></span>.

# Step 3: Prepare infrastructure

Prepare the required infrastructure for OMT and its embedded Kubernetes cluster. For more information, see <span style="color: red;"><u>Prepare the infrastructure for OMT</u></span>.

# Step 4: Download the OMT installation package

Download the installation package from the <span style="color: red;"><u>Software Licenses and Downloads</u></span> portal.

# Step 5: Prepare an environment to install OMT

Configure your environment before installation. For more information, see [Prepare an environment to install OMT](/pages/write/install_prereq_tasks.html).

# Step 6: Deploy

Run the installer to deploy OMT and its embedded Kubernetes. For more information, see <span style="color: red;"><u>Deploy OMT</u></span>.

# Step 7: Complete the post installation tasks

Some deployments require additional setup after installation. For more information, see <span style="color: red;"><u>Post installation tasks for OMT</u></span>.