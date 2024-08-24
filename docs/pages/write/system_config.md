---
title: Update the system configuration
sidebar: write_sidebar
toc: false
permalink: system_config.html
folder: write
---
Before you can deploy OPTIC Management Toolkit (OMT) with the embedded Kubernetes, you must: 

*   Check the SSH configurations
*   Ensure the localhost is resolved to 127.0.0.1
*   Set the required system parameters
*   Disable swap space
*   Install the required Linux packages
*   Check the default gateway
*   Check the host name on every node
*   Synchronize time

The  `node_prereq` script automates the system configuration process, refer to [Use the script to automate the system configuration](/doc/OMT/24.1/EmbeddedK8sSystemConfig#Use_the_script_to_automate_the_system_configuration "Use the script to automate the system configuration") for more information. If you decide not to use the `node_prereq` script and configure the parameters manually, follow the steps in the [Update the system configurations manually](/doc/OMT/24.1/EmbeddedK8sSystemConfig#Update_the_system_configurations_manually "Update the system configurations manually") section.

Check the SSH configurations
----------------------------

OPTIC Management Toolkit (OMT) supports default SSH configurations. If you are using default SSH configurations, ignore the steps in this topic. If you don't have SSH enabled, or aren't aware of the current SSH configurations, follow the steps in this topic.

OpenSSH provides secure and encrypted connections between machines. Enable SSH on all control plane and worker nodes (cluster nodes) in your deployment.

You can run the following command to check whether SSH is enabled and running as the root user or the regular user with elevated permissions:

    systemctl is-active sshd

If the output is `active`, SSH is enabled on this node. However, if you have customized the SSH configurations, perform the following steps on all control plane nodes and worker nodes to check whether your SSH configuration meets the installation requirements.

### Check whether you have enabled SSH

Check the output of the `systemctl is-active sshd` command to make sure that SSH is enabled on this node. An SSH server is installed and enabled on most operating systems, and the configuration file is `/etc/ssh/sshd_config`. 

*   To check whether the SSH server has been installed, run the following command:
    
        systemctl -t service|grep sshd
    
*   If the SSH isn't installed on your node, run the following commands to install and start the SSH server:
    
        yum install openssh-server
        systemctl enable sshd
        systemctl start sshd
    

### Check MAC and Cipher algorithms

For security reasons, the IT administrator may allow only limited algorithms for SSH client connection. Make sure the /etc/ssh/sshd\_config files on all the control plane nodes and worker nodes are configured with at least one of the following values. If no MAC/Cipher algorithm is configured in the /etc/ssh/sshd\_config file, the server uses the default MAC/Cipher algorithm whose default value contains the MAC and Cipher requested by OMT. In that case, you can ignore this "Check MAC and Cipher algorithms" section. 

*   For MAC algorithms: `hmac-sha1,hmac-sha2-256,hmac-sha2-512,hmac-sha1-96`
*   For Cipher algorithms: `3des-cbc,aes128-cbc,aes192-cbc,aes256-cbc,aes128-ctr,aes192-ctr,aes256-ctr,arcfour128,arcfour256,blowfish-cbc`  
      
    For example, add the following lines to the `/etc/ssh/sshd_config` files on all the control plane nodes and worker nodes:
    
    MACs hmac-sha2-256,hmac-sha2-512 
    Ciphers aes128-cbc,aes192-cbc,aes256-cbc,aes128-ctr,aes192-ctr,aes256-ctr
    

### Check the password or key authentication setting

During the installation, you will use either user name and password authentication or user name and key authentication to add control plane nodes and worker nodes on the installation portal. To use a user name and password authentication to add nodes for the installation, make sure the `PasswordAuthentication` parameter in the `/etc/ssh/sshd_config` file is set to `yes`.

You can run the following command to check whether the `PasswordAuthentication` parameter is set to `yes`. Replace `<cluster node>` with the IPv4 address or FQDN of any of the cluster nodes.

    ssh root@<cluster node> echo "It\'s working\!"

The command line will prompt you to enter the password of the cluster node.

If your terminal resembles the following, the `PasswordAuthentication` parameter is set to `yes`.

\[root ~\]# ssh root@192.0.2.0 echo "It\\'s working\\!"
root@192.0.2.0's password:
It's working!

To add the cluster nodes by using a user name and key authentication, make sure the `PubkeyAuthentication` parameter in the `/etc/ssh/sshd_config` file is set to `yes`.

### Enable the password or key authentication setting

If the password or key authentication setting isn't enabled, follow these steps on all control plane and worker nodes to enable the setting:

1.  Log on to the cluster node as the root user.
2.  Open the `/etc/ssh/sshd_config` file with a supported editor.
3.  To enable the password or key authentication, make sure the value of the related parameter is set to `yes`. To enable both, set the value of both these parameters to `yes`.  
      
    **To enable password authentication:** Check that the value of the `PasswordAuthentication` parameter is `yes`. If not, set the value of the parameter to `yes`, as follows:
    
        PasswordAuthentication yes
    
      
    **To enable the key authentication:** Check that the value of the `PubkeyAuthentication` parameter is `yes`. If not, set the value of the parameters to `yes`, as follows:
    
        PubkeyAuthentication yes
    
4.  Set the value of the `PermitRootLogin` parameter. To enable both password and key authentication or only password authentication, set the value of the parameter to `yes`, as follows
    
        PermitRootLogin yes
    
      
    To enable key authentication only, set the value of the parameter to `prohibit-passsword`, as follows:
    
        PermitRootLogin prohibit-password
    
5.  Save the `/etc/ssh/sshd_config` file.
6.  Run the following command to restart the `sshd` service:
    
        systemctl restart sshd.service
    

### Check whether you have enabled SCP

To check if you've enabled SCP, follow these steps: 

1.  Ensure that the `/etc/ssh/disable_scp` file doesn't exist.
2.  Ensure that the `PermitTTY` option in the `/etc/ssh/sshd_config` configuration file is set to `yes`:
    
    PermitTTY yes
    
3.  Ensure that the `/etc/ssh/sshd_config` configuration file doesn't contain the following settings:
    
    ForceCommand internal-sftp
    

Use the script to automate the system configuration
---------------------------------------------------

Role

Location

Privileges required

System administrator

All control plane nodes, all worker nodes, and all NFS nodes

Root or sudo

The `node_prereq` script automates this process. You will need to run the script on all your control plane nodes, worker nodes, and NFS servers.

The `node_prereq` script depends on the `yum` command to install the related packages. Make sure a yum repository has been set up correctly on the server. Contact your IT administrator for help if one hasn't.

### Copy the script to each node

1.  Copy the `<OMT_Embedded_K8s_2x.x-xxx>/node_prereq` script from the first control plane node to the `/tmp` directory on each of the remaining nodes (control plane nodes, worker nodes, and NFS server). 
2.  Navigate to the directory that contains the `node_prereq` script, and then run the following command to add the executive permission: 
    
        chmod +x node_prereq
    

### Run the script

On each node, navigate to the directory that contains the script, and then run the appropriate command. This automates all the required configurations.

*   On the control plane nodes, run: 
    
        ./node_prereq -T master --all
    
*   On the worker nodes, run: 
    
        ./node_prereq -T worker --all
    
*   On the NFS servers, run: 
    
        ./node_prereq -T nfs --all
    

If you want to automate only some required configurations, you can use command options to specify which tasks the script will perform:

*   The **\--etc-hosts** command option ensures the localhost is resolved to 127.0.0.1
*   The **\--sys-param** command option checks and sets the required system parameters
*   The **\--disable-swap** command option disable swap space
*   The **\--install-pkg** command option installs the required Linux packages

Update the system configurations manually
-----------------------------------------

### Ensure localhost is resolved to 127.0.0.1

Role

Location

Privileges required

System administrator

All control plane nodes and worker nodes

Root or sudo

Flannel uses the default gateway to create packet routing for communication. To enable network communication across all the cluster nodes, you must ensure localhost resolves to 127.0.0.1 on all control plane and worker nodes. To do this, follow these steps:  

1.  Run the following command to check your localhost setting:  
     
    
        grep -v '^\s*#' /etc/hosts 2>/dev/null | grep -E '\slocalhost$|\slocalhost\s'
    
      
    If there is no return value, run the following command to set the default route setting:
    
        echo "127.0.0.1 localhost" >> /etc/hosts   
    
     
2.  Open the `/etc/hosts` file with a supported editor and check the configurations in the file. Make sure that localhost resolves to 127.0.0.1. For example:
    
    127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
    
    If you want to enable IPv4/IPv6 dual stack for OMT installation, make sure the localhost resolves to `::1` in `/etc/hosts` file. For example, `::1 localhost localhost6 localhost6.localdomain6`

### Set the required system parameters

Role

Location

Privileges required

System administrator

All control plane nodes and worker nodes

Root or sudo

OMT uses the `br_netfilter` module to enable transparent masquerading and to ease Virtual Extensible LAN (VxLAN) traffic for communication between Kubernetes pods across the cluster nodes. Therefore, you must make sure the `br_netfilter` module is installed on all control plane and worker nodes before you set the system parameters. To do this, follow these steps:

1.  Log in to the node.
2.  Run the following command to check whether the `br_netfilter` module is enabled:
    
        lsmod |grep br_netfilter
    
      
    If there is no return value, the `br_netfilter` module isn't installed. Run the following commands to install it:
    
        modprobe br_netfilter
        echo "br_netfilter" > /etc/modules-load.d/br_netfilter.conf
    
3.  Open the `/etc/sysctl.conf` file in a supported editor. The `sysctl.conf` file contains the following instructions:
    
        # To override a whole file, create a new file with the same in
        # /etc/sysctl.d/ and put new settings there. To override
        # only specific settings, add a file with a lexically later
        # name in /etc/sysctl.d/ and put new settings there.
    
    Ignore these instructions and update the `sysctl.conf` file directly with the settings described below. 
4.  For the operating system with the parameter `fs.may_detach_mounts`, run the following command to check if the parameter exists:
    
        # sysctl -n fs.may_detach_mounts
    
    If you get the following error message or get an integer `1`, you don't need to configure the parameter.
    
        [root@testVM ~]# sysctl -n fs.may_detach_mounts
        sysctl: cannot stat /proc/sys/fs/may_detach_mounts: No such file or directory
    
        [root@testVM ~]# sysctl -n fs.may_detach_mounts
        1
    
    If you get an integer `0`, you must configure the parameter and set it to `1` in the `sysctl.conf` file.
    
        [root@testVM ~]# sysctl -n fs.may_detach_mounts 
        0
    
5.  Set the following system parameters according to the operating system that's installed on the node.  
      
    **Redhat 8.1 and later versions**
    
    net.bridge.bridge-nf-call-iptables = 1
    net.bridge.bridge-nf-call-ip6tables = 1
    net.ipv4.ip\_forward = 1
    kernel.sem=50100 128256000 50100 2560
    
    **Oracle Linux 7.9 and later versions**
    
    net.bridge.bridge-nf-call-iptables = 1
    net.bridge.bridge-nf-call-ip6tables = 1
    net.ipv4.ip\_forward = 1
    kernel.sem=50100 128256000 50100 2560
    
    **Rocky Linux versions**
    
    net.bridge.bridge-nf-call-iptables = 1
    net.bridge.bridge-nf-call-ip6tables = 1
    net.ipv4.ip\_forward = 1
    kernel.sem=50100 128256000 50100 2560
    
    **Other older operating systems, including supported versions of CentOS**
    
    net.bridge.bridge-nf-call-iptables = 1
    net.bridge.bridge-nf-call-ip6tables = 1
    net.ipv4.ip\_forward = 1
    net.ipv4.tcp\_tw\_recycle = 0
    fs.may\_detach\_mounts = 1
    kernel.sem=50100 128256000 50100 2560
    
6.  Save the `/etc/sysctl.conf` file, and then run the following commands to apply the updates to the node:
    
        /sbin/sysctl -p
    

### Disable swap space

Role

Location

Privileges required

System administrator

All control plane nodes and worker nodes

Root or sudo

Complete this task on all control plane and worker nodes. 

1.  Run the following command to disable the swap process:
    
        swapoff -a
    
2.  By default, the swap configuration is in the `/etc/fstab` file. You can check and permanently disable the swap process from that configuration file. Open the `/etc/fstab` file in a supported editor, and then comment out the lines that display "swap" as the disk type.   
      
    For example:
    
        #/dev/mapper/centos_shcentos72x64-swap swap
    

### Install the required Linux packages

Role

Location

Privileges required

System administrator

"Host" in the table below

Root or sudo

The installation depends on various packages that are included in standard yum repositories. The following table describes the packages and the servers on which they must be installed.

Package

Host

CentOS 7.9

OL 7.9

OL 8.8

OL 9.2

RHEL 7.9

RHEL 8.6

RHEL 8.8

RHEL 9.0

RHEL 9.2

Rocky 8.8

Rocky 9.2

`device-mapper-libs`

control plane, workers

`1.02.170-6`

`1.02.170-6`

`1.02.181-9`

`1.02.187-7`

`1.02.170-6`

`1.02.181-3`

`1.02.181-9`

`1.02.183-4`

`1.02.187-7`

`1.02.181-9`

`1.02.187-7`

`java-1.8.0-openjdk`

control plane only

`1.8.0.275.b01-0`

`1.8.0_265-b01`

`1.8.0_372-b07`

`1.8.0_372`

`1.8.0.262.b10`

`1.8.0.302.b08-3`

`1.8.0.372.b07-4`

`1.8.0.322.b06-9`

`1.8.0.362.b09-2`

`1.8.0.372.b07-4`

`1.8.0.372.b07-2`

`libgcrypt`

control plane, workers

`1.5.3-14`

`1.5.3-14`

`1.8.5-7`

`1.10.0-10`

`1.5.3-14`

`1.8.5-6`

`1.8.5-7`

`1.10.0-2`

`1.10.0-10`

`1.8.5-7`

`1.10.0-10`

`libseccomp`

control plane, workers

`2.3.1-4`

`2.3.1-4`

`2.5.2-1`

`2.5.2-2`

`2.3.1-4`

`2.5.2-1`

`2.5.2-1`

`2.5.2-2`

`2.5.2-2`

`2.5.2-1`

`2.5.2-2`

`libtool-ltdl`

control plane, workers

`2.4.2-22`

`2.4.2-22`

`2.4.6-25`

`2.4.6-45`

`2.4.2-22`

`2.4.6-25`

`2.4.6-25`

`2.4.6-45`

`2.4.6-45`

`2.4.6-25`

`2.4.6-45`

`net-tools`

control plane, workers

`2.0-0.25.20131004git`

`2.0-0.25.20131004git`

`2.0-0.52.20160912git`

`2.0-0.62.20160912git`

`2.0-0.25.20131004git` 

`2.0-0.52.20160912git`

`2.0-0.52.20160912git`

`2.0-0.62.20160912git`

`2.0-0.62.20160912git`

`2.0-0.52.20160912git`

`2.0-0.62.20160912git`

`nfs-utils`

control plane, workers, NFS servers

`1.3.0-0.68`

`1.3.0-0.66`

`2.3.3-59`

`2.5.4-18`

`1.3.0-0.68`

`2.3.3-51`

`2.3.3-59`

`2.5.4-10`

`2.5.4-18`

`2.3.3-59`

`2.5.4-18`

`rpcbind`

control plane, workers, NFS servers

`0.2.0-49`

`0.2.0-49`

`1.2.5-10`

`1.2.6-5`

`0.2.0-49`

`1.2.5-8`

`1.2.5-10`

`1.2.6-2`

`1.2.6-5`

`1.2.5-10`

`1.2.6-5`

`systemd-libs (version >= 219)`

control plane, workers

`219-78`

`219-78`

`239-74.0.2`

`252-14.0.1`

`219-78`

`239-58`

`239-74`

`250-6`

`252-13`

`239-74`

`252-13`

`unzip`

control plane, workers

`6.0-21`

`6.0-21`

`6.0-46.0.1`

`6.0-56.0.1`

`6.0-21`

`6.0-46`

`6.0-46`

`6.0-56`

`6.0-56`

`6.0-46`

`6.0-56`

`conntrack-tools`

control plane, workers

`1.4.4-7. el7`

`1.4.4-7.el7`

`1.4.4-11`

`1.4.7-2`

`1.4.4-70.el7`

`1.4.4-10.el8`

`1.4.4-11`

`1.4.5-10.el9`

`1.4.7-2`

`1.4.4-11`

`1.4.7-2`

`curl`

control plane, workers

`7.29.0-59`

`7.29.0-59`

`7.61.1`

`7.76.1`

`7.29.0-59`

`7.61.1-22`

`7.61.1-30`

`7.76.1-14`

`7.76.1-23`

`7.61.1-25`

`7.76.1-19`

`lvm2`

control plane, workers

`2.02.187-6`

`2.02.186-7`

`2.03.14-9`

`2.03.17-7`

`2.02.187-6`

`2.03.14-3`

`2.03.14-9`

`2.03.14-4`

`2.03.17-7`

`2.03.14-9`

`2.03.17-7`

`socat`

control plane, workers

`1.7.3.2-2`

`1.7.3.2-2`

`1.7.4.1-1`

`1.7.4.1-5`

`1.7.3.2-6`

`1.7.4.1-1`

`1.7.4.1-1`

`1.7.4.1-5`

`1.7.4.1-5`

`1.7.4.1-1`

`1.7.4.1-5`

`checkpolicy`

control plane, workers

`2.5-8.el7`

`2.5-8.el7`

`2.9-1`

`3.5-1`

`2.5-8.el7`

`2.9-1.el8`

`2.9-1.el8`

`3.3-1.el9`

`3.5-1.el9`

`2.9-1.el8`

`3.5-1.el9`

`policycoreutils`

control plane, workers

`2.5-8.el7`

`2.5-34.el7`

`2.9-24.0.1`

`3.5-1`

`2.5-8.el7`

`2.9-19.el8`

`2.9-24.el8`

`3.3-6.el9_0`

`3.5-1.el9`

`2.9-24.el8`

`3.5-1.el9`

`policycoreutils-python/policycoreutils-python-utils`

control plane, workers

`2.5-8.el7`

`2.5-34.el7`

`-`

`-`

`2.5-34.el7`

`2.9-19.el8`

`2.9-24.el8`

`3.3-6.el9_0`

`3.5-1.el9`

`2.9-24.el8`

`3.5-1.el9`

`container-selinux`

control plane, workers

`2.74`

`2.74`

`2.205.0-2.module+el8.8.0`

`2.205.0-1.el9_2.noarch`

`2.5-34.el7`

`2.179.1-1`

`2.205.0-2`

`2.179.1-1`

`2.205.0-1`

`2.205.0-2`

`2.205.0-1`

`bind-utils`

control plane, workers

`9.11.4-26`

`9.11.4-16`

`9.11.36-8`

`9.16.23-11`

`9.11.4`

`9.11.36-3`

`9.11.36-8`

`9.16.23-1`

`9.16.23-11`

`9.11.36-8`

`9.16.23-11`

`tar`

control plane, workers

`1.26-35`

`1.26-35`

`1.30-9`

`1.34-6`

`1.26-35`

`1.30-5`

`1.30-9`

`1.34-3`

`1.34-6`

`1.30-9`

`1.34-6`

`iptables`

control plane, workers

`1.4.21-35`

`1.4.21-35`

`1.8.4-24.0.1.el8.x86_64`

`-`

`1.4.21-35`

`1.8.4-22`

`-`

`-`

`1.8.4-24`

`-`

`iptables-nft`

control plane, workers

`-`

`-`

`-`

`1.8.8-6.el9_1.x86_64`

`-`

`-`

`1.8.4-24`

`1.8.7-28`

`1.8.8-6`

`-`

`1.8.8-6`

`rng-tools*****`

control plane, workers

`6.3.1 or higher`

`6.3.1 or higher`

`6.3.1 or higher`

`6.3.1 or higher`

`6.3.1 or higher`

`6.3.1 or higher`

`6.3.1 or higher`

`6.3.1 or higher`

`6.3.1 or higher`

`6.3.1 or higher`

`6.3.1 or higher`

**\*** This package is used to increase the host entropy. If the entropy is too small on the control plane and worker nodes, containers running on the hosts may not start. Run the `cat /proc/sys/kernel/random/entropy_avail` command to check if the hosts have enough entropy. Typically, the output should be larger than `2000`. You can ignore the entropy check on RHEL/Oracle Linux/Centos/Rocky 9.x because there is an improvement in the kernel. It works well even though the available entropy is lower than 2000.

If the packages aren't installed on any of the servers, follow these steps:

1.  Make sure a yum repository has been set up correctly on the server. Contact your IT administrator for help if a yum repository hasn't been set up correctly on your server.
2.  Run the following command to install the required packages:
    
        yum install <package name>
    
    For example, to install the `java-1.8.0-openjdk` package on OL 8.6, run the following command:
    
        yum install java-1.8.0-openjdk-1.8.0.332.b09
    

### Set the default gateway settings

Role

Location

Privileges required

System administrator

All control plane nodes and worker nodes

Root or sudo

If you get an error message "`Default gateway not set`" after the `node_prereq` script checks the default gateway. Run the following command to add a default gateway on that node:

    route add default gw <IP address> <interface name>

For example, you run the following command:

    route add default gw 192.0.2.24 eth0

### Configure the hosts file in the etc directory

Role

Location

Privileges required

System administrator

All control plane nodes and worker nodes

Root or sudo

If you get an error message after the `node_prereq` script checks the node host name, you'll have to configure the host name.

If you have configured Domain Name Service (DNS) in your environment, and the control plane and worker nodes can resolve the FQDN of all cluster nodes, load balancer host, NFS server, and external databases, skip this section.

If the Domain Name Service (DNS) isn't configured in your environment, configure the `/etc/hosts` file on every node (control plane and worker) in the cluster. List all the control plane nodes, worker nodes, external database servers, external access host (HA virtual IP, load balancer), and NFS servers in the `/etc/hosts` file. In an environment that doesn't have DNS configured, you must also configure the `KUBE_DNS_HOSTS` parameter in the `install.properties` file as described in the "Configure the install.properties file" topic. To set up the host name resolution after the installation, follow the steps listed in the "Update the DNS entries" topic.

Add the IP address and FQDN details of all the nodes in the cluster. This includes the external access host (HA virtual IP, load balancer), external database servers, and NFS server. Add an entry for each server using the following syntax:  
`<IP address> <FQDN>`

For example, you can add the following entries to the `/etc/hosts` file:

192.0.2.0 external-accesshost.mycompany.com
192.0.2.1 control1.mycompany.com
192.0.2.2 control2.mycompany.com
192.0.2.3 control3.mycompany.com
192.0.2.4 worker1.mycompany.com
192.0.2.5 worker2.mycompany.com
192.0.2.6 worker3.mycompany.com
192.0.2.7 externalbalancer.mycompany.com
192.0.2.8 externaldb.mycompany.com
192.0.2.9 nfs.mycompany.com

### Synchronize time

Role

Location

Privileges required

System administrator

All control plane nodes, worker nodes, NFS servers, load balancers, and database servers

Root or sudo

OMT components require the time on all nodes to be synchronized. If you get a warning message after the `node_prereq` script checks the node host name. 

Make sure that the Kubernetes cluster nodes can reach the Network Time Protocol (NTP) servers (either internal organization based or external internet based NTP servers).

The following example uses the `chrony` tool to synchronize time across operating systems. You must have a time server prepared for the time synchronization.

1.  On the first control plane node, run the following command to install the `chrony` client:
    
        yum install chrony -y
    
2.  Run the following commands to create the drift file:
    
        mkdir -p /var/lib/chrony
        echo > /var/lib/chrony/driftfile
    
3.  Run the following commands to configure the `chrony` client. Replace the `<Time Server Name or IP Address>` placeholder with the host name or IPv4 address of your time server. You can use a public time server if your cluster can access the Internet. Otherwise, use an existing time server of the organization or create a time server.
    
        cat <<ENDFILE >/etc/chrony.conf
        server <Time Server Name or IP Address> iburst
        driftfile /var/lib/chrony/driftfile
        stratumweight 0
        rtcsync
        makestep 0.1 3
        ENDFILE
    
4.  Run the following commands to enable and start the `chrony` service:
    
        systemctl enable chronyd
        systemctl start chronyd
    
5.  Run the following command to synchronize the operating system time with the NTP server:
    
        chronyc -a makestep
    
6.  Run the following command to restart the `chrony` daemon:
    
        systemctl restart chronyd
    
7.  Run the following command to check the server time synchronization:
    
        timedatectl
    
      
    If your terminal resembles the following with the `NTP synchronized` set to "yes", then you have successfully synchronized the time on the host with the time server:
    
    \[root@ ~\]# timedatectl  status
          Local time: Thu 2020-07-21 13:05:21 CST
      Universal time: Thu 2020-07-21 05:05:21 UTC
            RTC time: Thu 2020-07-21 05:05:21
           Time zone: Asia/Shanghai (CST, +0800)
         NTP enabled: yes
     NTP synchronized: yes
     RTC in local TZ: no
          DST active: n/a
    
8.  Run the following command to synchronize the hardware time from the current system time:
    
        hwclock -w
    
9.  Repeat these steps on all other control plane nodes (if any) and worker nodes. You must also synchronize the time on the NFS servers, load balancers, and database servers once you have created them.

Related topics
--------------

When you have finished, return to [Set up prerequisites (embedded K8s)](/doc/OMT/24.1/InstallPrereqsEmbed "Set up prerequisites for OMT (embedded K8s)") to continue.