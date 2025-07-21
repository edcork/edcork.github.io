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

Before you install OPTIC Management Toolkit (OMT), configure your environment by completing the following tasks.

## Prepare to deploy the embedded Kubernetes ##

Make sure your cluster meets the requirements for OMT’s embedded Kubernetes.


|  Task   |  Required?   |  Description  |  Detailed steps|
| --- | --- | --- | --- |
| Enable a regular user to install OMT  |  Optional  |  Required only if installing OMT as a non-root user.  |  [Enable a regular user to install OMT](/pages/write/create_sudouser.html)|
| Update the system configuration  |  Mandatory  |  Configure system settings, including: <br> • Localhost resolution (`127.0.0.1`)<br> • System parameters<br> • Disabled swap space<br> • Required Linux packages<br> • SSH connectivity<br> • Hostname consistency<br> • Time synchronization<br><br>A script is available to automate this. |  [Make required system configurations](/pages/write/system_config.html)  |
| Check the firewall settings  |  Mandatory (if you've set a firewall)  | Make sure your firewall rules meet OMT’s requirements.  |  [Check the firewall settings](/pages/write/firewall_settings.html)  |
| Check that the required ports are open | Mandatory | Confirm all network ports OMT requires for communication are open. | <span style="color: red;"><u>Check that the required ports are open</u></span> |
| Configure High Availability (HA) | Optional | If you have more than one master node, you can configure HA. You can either use Keepalived (included in OMT) or set up your own load balancer(s). | <span style="color: red;"><u>Configure Keepalived for High Availability</u></span><br/><br/><span style="color: red;"><u>Configure an internal load balancer</u></span> |
| Configure the `install.properties` file. | Optional | Configure the installation of the master and worker nodes in the `install.properties` file. You can alternatively use command options to do this when you run the `install` command. | <span style="color: red;"><u>Configure the install.properties file</u></span> |
| Run a preliminary check of the nodes | Optional | Run the `pre-check.sh` script to check node readiness Before installation. This step is optional but highly recommended.| <span style="color: red;"><u>Run a preliminary check</u></span> |

## Request certificates ##

Certificates protect network traffic between OMT and external services. 

*   **Browser > OMT**  
    The OMT installer will create certificate authorities (CAs) to generate and sign server certificates for the ingress controller. For browsers in your organization to trust OMT, request a server certificate pair (server certificate, key, and CA certificate) from your IT team for OMT’s external hostname.
	
	For more information, see <span style="color: red;"><u>Request server certificates</u></span>.
*   **OMT > external database**  
    If you are installing OMT with an external database, connect the database with TLS mode. Request the CA certificate to validate the database server certificate. This is required to configure the `config.json` file later.
*   **OMT > external image registry**  
    If the registry’s server certificate isn’t trusted at the operating system level, request its CA certificate for validation. The CA certificate is required when you run the `install` command later.
	
These certificates are required for OMT installation. Check the application documentation for information about the certificates required by applications.

## Set up persistent volumes ##

If a container stops or restarts, all changes made inside the container are lost. To save information such as configuration files and databases, the information must be stored outside of the container in a persistent volume (PV).

When you install OMT with the embedded Kubernetes, the NFS provisioner capability (enabled by default) creates the required PVs automatically. To use this capability, you must create a single volume on the NFS server. When you run the `install` command, you will specify the NFS server URL and the path to this volume in command options.

For more information about how to set up persistent volumes, see <span style="color: red;"><u>Set up persistent volumes</u></span>.

## Create external databases ##

OMT requires an IdM database. By default, the installer deploys an embedded PostgreSQL instance if you don't specify any database options when you run the `install` command. 

If you want to use your own database instance, see <span style="color: red;"><u>Configure an external database</u></span>.

## Configure log handling ##

By default, OMT stores logs on an NFS volume (`itom-logging-vol`). Optionally, you can forward the logs to an external receiver, such as Elasticsearch Server or Splunk. For more information, see <span style="color: red;"><u>Forward application logs to an external receiver</u></span>.

## Configure on-access security scans ##

On-access scanning (by security products such as McAfee Endpoint Security, Microsoft Defender, or Trend Micro Deep Security Agent) may disrupt installation. To prevent this, exclude certain directories from the scan.

Further information is available in the <span style="color: red;"><u>Security products can't scan files before they're deleted</u></span> troubleshooting topic.

## Prepare a config.json file ##

Before you run the `install` command, you must <span style="color: red;"><u>Create and configure a config.json file</u></span> with all installation parameters. This consolidates decisions from the steps above.


