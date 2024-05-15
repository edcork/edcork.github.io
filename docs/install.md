---
layout: page
title: "Install OMT"
permalink: /install
---
<p>This section describes how to install OMT. The following is&nbsp;a high level view of the process.</p>

<h2>Step 1: Plan your deployment</h2>

<p>Refer to the <a href="/doc/OMT/Main/DirectoryStructureEmbedded" title="Sizing and directory structure (embedded K8s)">Sizing and directory structure (embedded K8s)</a>, and <a href="/doc/OMT/Main/SystemReqsEmbed" title="System requirements (embedded K8s)">System requirements (embedded K8s)</a> topics.</p>

<h3>Decide which capabilities to enable</h3>

<p>OMT includes a number of capabilities that you can enable or disable during installation. Some capabilities help with the installation process itself, and others add functionality when you use OMT.</p>

<p>The following table describes the capabilities.&nbsp;When installing OMT with its embedded Kubernetes, all capabilities are enabled by default.</p>


|Capability|Description|Default setting|
|---|---|---|
|Cluster management|The cluster management capability provides the necessary components for managing the Kubernetes cluster.|Enabled|
|Deployment management|The deployment management capability provides the necessary components for deploying a product.|Enabled|
|Log collection|The logging capability collects logs from OMT infrastructure and applications on an NFS volume (by default). However, you can also forward the logs to an external receiver, such as Elasticsearch Server or Splunk.<br /><br />If you install OMT with the log collection capability disabled, logs remain wherever they're generated.|Enabled|
|Monitoring|The monitoring capability uses the Prometheus and Grafana open source projects. Prometheus&nbsp;collects container based metrics associated with the OMT cluster, and streams them to applications&nbsp;(including Operations Bridge)&nbsp;and many third-party software solutions&nbsp;(known as exporters). Grafana&nbsp;is the default visualization tool for Prometheus.<br /><br />If you install OMT with the monitoring and NFS provisioner capabilities enabled, the NFS provisioner capability automatically configures an additional NFS persistent volume for the monitoring capability.<br /><br />If you install OMT with the NFS provisioner capability disabled, you must manually configure an additional persistent volume for the monitoring capability.|Enabled|
|Monitoring content|The monitoring content capability provides a set of out of the box Grafana dashboards to use with the monitoring capability.|Enabled|
|NFS provisioner|The NFS provisioner is an infrastructure capability that creates all the required NFS PVs automatically when you install OMT. You need only to set up an NFS server and create a volume on it.|Enabled|
|Tools|The tools capability provides a set of CLI tools (scripts) to help you administer the Kubernetes cluster and deploy applications.|Enabled|
|Kubernetes backup|The Kubernetes backup capability uses Velero to back up and restore Kubernetes&nbsp;application deployments.|Enabled|
		

<h2>Step 2: Prepare&nbsp;a Docker Hub account&nbsp;</h2>

<p>You need a valid Docker Hub account that we've authorized to download application images from our Docker Hub image registry. If you don't already have one, you must set up the Docker account and then contact us with your account details. For more information about how to do this, see <a href="/doc/OMT/Main/ActivateDockerAccountEmbed" title="Activate your Docker Hub account">Activate your Docker Hub account</a>.</p>

<h2>Step 3: Prepare infrastructure</h2>

<p>To deploy OMT with its embedded Kubernetes you must prepare the required infrastructure for OMT and its Kubernetes cluster. For more information, see <a href="/doc/OMT/Main/InfraEmbedded" title="Prepare the infrastructure for OMT (embedded K8s)">Prepare the infrastructure for OMT (embedded K8s)</a>.</p>

<h2>Step 4: Download the OMT installation package</h2>

<p>Download the installation package from&nbsp;the&nbsp;<a href="https://sld.microfocus.com/mysoftware/index" title="Software Licenses and Downloads">Software&nbsp;Licenses and Downloads</a>&nbsp;portal. For more information, see&nbsp;<a href="/doc/OMT/Main/DownloadInstallPackageEmbed" title="Download the installation package (embedded K8s)">Download the installation package (embedded K8s)</a>.</p>

<h2>Step 5: Set up&nbsp;prerequisites</h2>

<p>Perform the prerequisite&nbsp;tasks to configure your environment for the installation.&nbsp;For more information, see&nbsp;<a href="/doc/OMT/Main/InstallPrereqsEmbed" title="Set up prerequisites for OMT (embedded K8s)">Set up prerequisites for OMT (embedded K8s)</a>.</p>

<h2>Step 6: Deploy</h2>

<p>Deploy OMT and its embedded Kubernetes.&nbsp;For more information, see&nbsp;<a href="/doc/OMT/Main/DeployEmbed" title="Deploy OMT (embedded K8s)">Deploy OMT (embedded K8s)</a>.</p>

<h2>Step 7: Complete the post installation tasks</h2>

<p>Some deployment scenarios require further configuration after you install OMT and its embedded Kubernetes. For more information, see&nbsp;<a href="/doc/OMT/Main/PostInstallEmbed" title="Post installation tasks for OMT (embedded K8s)">Post installation tasks for OMT (embedded K8s)</a>.</p>

