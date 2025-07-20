---
title: "Prepare an environment to install OMT"
layout: default
parent: Install OMT
nav_order: 1
has_toc: false
---

# Prepare an environment to install OMT
{: .no_toc }

<details close markdown="block">
  <summary>
  
    On this page
	
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

Before you install OPTIC Management Toolkit (OMT), you must perform some prerequisite tasks to configure the environment.

## Prepare to deploy the embedded Kubernetes ##

You must ensure that the cluster is correctly configured for the install script to deploy the Kubernetes that is embedded in OMT. This comprises the following tasks.


|  Task   |  Required?   |  Description  |  Detailed steps|
| --- | --- | --- | --- |
| Enable a regular user to install OMT  |  Optional  |  You need only do this if you will use a regular user to perform the installation.  |  [Enable a regular user to install OMT](/doc/OMT/24.1/AutoSudoInstall "Enable a regular user to install OMT")|
| Update the system configuration  |  Mandatory  |  Update the system configuration to meet the deployment requirements. This includes ensuring the localhost resolves to 127.0.0.1, setting the required system parameters, disabling swap space, making sure all required Linux packages are installed, checking the SSH connection, checking default gateway, checking the host name on every node, and synchronizing time. A script is available to automate this process. |  [Make required system configurations](/doc/OMT/24.1/EmbeddedK8sSystemConfig "Make required system configurations")  |
| Check the firewall settings  |  Mandatory (if you've set a firewall)  | If you have enabled a firewall in your network, you must check that the firewall settings meet the deployment requirements.  |  [Check the firewall settings](/doc/OMT/24.1/CheckNetworkSetting "Check the firewall settings")  |
| Check that the required ports are open | Mandatory | Check that all the ports that OMT required for network communication are open. | [Check that the required ports are open (embedded K8s)](/doc/OMT/24.1/OpenPortsEmbedded "Check that the required ports are open (embedded K8s)") |
| Configure High Availability (HA) | Optional | If you have more than one master node, you can configure HA. To do this, you can either use Keepalived (included in OMT) or set up your own load balancer(s). | [Configure Keepalived for High Availability](/doc/OMT/24.1/ConfigKeepalived "Configure Keepalived for High Availability") [Configure an internal load balancer](/doc/OMT/24.1/ConfigureLB "Configure an internal load balancer") |
| Configure the `install.properties` file. | Optional | Configure the installation of the master and worker nodes in the `install.properties` file. You can also use command options to do this when you run the `install` command. | [Configure the install.properties file](/doc/OMT/24.1/ConfigureInstallProperties "Configure the install.properties file") |
| Run a preliminary check of the nodes | Optional | You can run a script (`pre-check.sh`) that checks the readiness of the nodes for the deployment. This step is optional. However, it's highly advisable that you perform a preliminary check on all the master nodes and worker nodes before you perform the remaining preparatory tasks to check whether your prepared nodes meet the basic requirements to install OPTIC Management Toolkit (OMT).| [Run a preliminary check](/doc/OMT/24.1/PrelimCheckInstall "Run a preliminary check") |

## Request certificates ##

Certificates protect network traffic between OMT and external services. The network traffic flows include:

*   Browser  -> OMT  
    The OMT installer will create certificate authorities (CAs) to generate and sign server certificates for the ingress controller. However, the browsers in your organization won't be able to validate these certificates, as they're not in your organization's trust store. If you want the browsers in your organization to connect to OMT securely, you must contact your IT administrator and request a server certificate pair (including a server certificate, a server key, and the CA cert which signed the server certificate). The server certificate pair is generated for the external access host name of OMT. For more information, see [Request server certificates (embedded K8s)](/doc/OMT/24.1/RequestCertificatesEmbedded "Request server certificates (embedded K8s)").
*   OMT -> external database  
    If you are installing OMT with an external database, connect the database with TLS mode. In this case, contact the database administrator to request the CA certificate to validate the database server certificate. You'll use the CA certificate when you configure the `config.json` file later.
*   OMT -> external image registry  
    If you are installing OMT with an external image registry, if the registry server certificate is already trusted on the operating system level, the CA cert of the registry isn't required. Otherwise, contact the external registry administrator to request the CA cert to validate the registry server certificate. The CA cert will be used while running the install command.

These certificates are required for OMT installation. For the certificates required by applications, please check the applications' documentation.

## Set up persistent volumes ##

If a container stops or restarts, all changes made inside the container are lost. To save information such as configuration files and databases, the information must be stored outside of the container in a persistent volume (PV).

When you install OMT with the embedded Kubernetes, the NFS provisioner capability (which is enabled by default) creates the required PVs automatically. To use this capability, you must create a single volume on the NFS server. When you run the `install` command, you will specify the NFS server URL and the path to this volume in command options.

For more information about how to set up persistent volumes, see [Set up persistent volumes (embedded K8s)](/doc/OMT/24.1/PreparePersistentVolumesEmbedded "Set up persistent volumes (embedded K8s)").

## Create external databases ##

OMT uses an IdM database. Unless you will use the PostgreSQL instance that's embedded in OMT, you must create it on the database server that you prepared earlier. For more information about how to do this, see [Configure external databases (embedded K8s)](/doc/OMT/24.1/PrepareExternalDatabasesEmbedded "Configure external databases (embedded K8s)").

If you want to use the embedded database instance, you don't need to create the databases. The install script will deploy the required databases automatically if you don't specify any database options when you run the `install` command.

## Decide what happens to log files ##

OMT infrastructure and applications produce log files. By default, OMT collects these logs on an NFS volume (`itom-logging-vol`). However, you can also forward the logs to an external receiver, such as Elasticsearch Server or Splunk. For more information about how to do this, see [Forward application logs to an external receiver (embedded K8s)](/doc/OMT/24.1/MountLogsEmbedded "Forward application logs to an external receiver (embedded K8s)").

## Configure on-access security scans ##

OMT installation may fail if you have enabled on-access scanning by security products such as McAfee Endpoint Security, Microsoft Defender, or Trend Micro Deep Security Agent in your environment. To prevent this, you must exclude certain directories from the on-access scan.

Further information is available in the [Security products can't scan files before they're deleted](/doc/OMT/24.1/McafeeCannotScanFilesDeleted "Security products can't scan files before they're deleted") troubleshooting topic.

## Create and configure a config.json file ##

Before you run the `install` command, you must [Create and configure a config.json file (embedded K8s)](/doc/OMT/24.1/ConfigureConfigJsonEmbedded "Create and configure a config.json file (embedded K8s)") that contains all the necessary parameters for the installation script. This file will capture information about many of the decisions you have made while following the steps in this topic.


