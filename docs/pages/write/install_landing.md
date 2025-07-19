---
title: "Install OMT"
layout: default
parent: Writing
nav_order: 1
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

This section describes how to install OMT. The following is a high level view of the process.

# Step 1: Plan your deployment

Refer to the [Sizing and directory structure](https://docs.microfocus.com/doc/OMT/24.2/DirectoryStructureEmbedded), and [System requirements](https://docs.microfocus.com/doc/OMT/24.2/SystemReqsEmbed) topics.

## Decide which capabilities to enable

OMT includes a number of capabilities that you can enable or disable during installation. Some capabilities help with the installation process itself, and others add functionality when you use OMT.

The following table describes the capabilities. When installing OMT with its embedded Kubernetes, all capabilities are enabled by default.


|Capability|Description|Default setting|
|---|---|---|
|Cluster management|The cluster management capability provides the necessary components for managing the Kubernetes cluster.|Enabled|
|Deployment management|The deployment management capability provides the necessary components for deploying a product.|Enabled|
|Log collection|The logging capability collects logs from OMT infrastructure and applications. By default, the logs are saved to an NFS volume. However, you can also forward the logs to an external receiver, such as Elasticsearch Server or Splunk.<br /><br />If you install OMT with the log collection capability disabled, logs remain wherever they're generated.|Enabled|
|Monitoring|The monitoring capability uses the Prometheus and Grafana open source projects. Prometheus collects container based metrics associated with the OMT cluster, and streams them to applications (including Operations Bridge) and many third-party software solutions (known as exporters). Grafana is the default visualization tool for Prometheus.<br /><br />If you install OMT with the monitoring and NFS provisioner capabilities enabled, the NFS provisioner capability automatically configures an additional NFS persistent volume for the monitoring capability.<br /><br />If you install OMT with the NFS provisioner capability disabled, you must manually configure an additional persistent volume for the monitoring capability.|Enabled|
|Monitoring content|The monitoring content capability provides a set of out of the box Grafana dashboards to use with the monitoring capability.|Enabled|
|NFS provisioner|The NFS provisioner is an infrastructure capability that creates all the required NFS PVs automatically when you install OMT. You need only to set up an NFS server and create a volume on it.|Enabled|
|Tools|The tools capability provides a set of CLI tools (scripts) to help you administer the Kubernetes cluster and deploy applications.|Enabled|
|Kubernetes backup|The Kubernetes backup capability uses Velero to back up and restore Kubernetes application deployments.|Enabled|
		

# Step 2: Prepare a Docker Hub account

You need a valid Docker Hub account that we've authorized to download application images from our Docker Hub image registry. If you don't already have one, you must set up the Docker account and then contact us with your account details. For more information about how to do this, see [Activate your Docker Hub account](https://docs.microfocus.com/doc/OMT/24.2/ActivateDockerAccountEmbed).

# Step 3: Prepare infrastructure

To deploy OMT with its embedded Kubernetes you must prepare the required infrastructure for OMT and its Kubernetes cluster. For more information, see [Prepare the infrastructure for OMT](https://docs.microfocus.com/doc/OMT/24.2/InfraEmbedded).

# Step 4: Download the OMT installation package

Download the installation package from the [Software Licenses and Downloads](https://sld.microfocus.com/mysoftware/index) portal.

# Step 5: Set up prerequisites

Perform the prerequisite tasks to configure your environment for the installation. For more information, see [Set up prerequisites for OMT](https://docs.microfocus.com/doc/OMT/24.2/InstallPrereqsEmbed).

# Step 6: Deploy

Deploy OMT and its embedded Kubernetes. For more information, see [Deploy OMT](https://docs.microfocus.com/doc/OMT/24.2/DeployEmbed).

# Step 7: Complete the post installation tasks

Some deployment scenarios require further configuration after you install OMT and its embedded Kubernetes. For more information, see [Post installation tasks for OMT](https://docs.microfocus.com/doc/OMT/24.2/PostInstallEmbed).