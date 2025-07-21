---
title: Update the system configuration
layout: default
parent: Prepare an environment to install OMT
nav_order: 2
has_toc: false
---

# Update the system configuration
{: .no_toc }

<details close markdown="block">
  <summary>
  
    On this page
	
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

These configurations are required for OMT with embedded Kubernetes. All of these tasks (except SSH configuration) can be automated using the `node_prereq` script.

If you don't want to use the `node_prereq` script, see [Update the system configurations manually](#manual_steps) for detailed steps. Remember to also configure SSH.  

1. Copy the `node_prereq` script from the first master node to the `/tmp` directory on every node (master nodes, worker nodes, and NFS server).

2. On each node, go to the `/tmp` directory, and then run the following command to add executive permission:

	```
	chmod +x node_prereq
	```
3. On each node, run the following command to execute the script:

	```
	./node_prereq -T <node_type> --all
	```

	**Values for \<node_type>:**

	- `master` for master nodes
	- `worker` for worker nodes
	- `nfs` for NFS servers

{: .important }
>The `node_prereq` script depends on the `yum` command to install the related packages. Make sure a yum repository has been set up correctly on the server. Contact your IT administrator for help if one hasn't.

## Configure SSH ##

Ignore this section if you are using default SSH configurations. If SSH isn't enabled, or you don't know the current SSH configuration, follow the steps in this section.

### Check whether you have enabled SSH

1. Run the following command to check whether SSH is enabled and running:

	```
	systemctl is-active sshd
	```
	
2. If the response is `inactive`, run the following commands to install and start the SSH server:

    ```
	yum install openssh-server
	systemctl enable sshd
	systemctl start sshd
    ```

### Check MAC and Cipher algorithms

Ignore this section if no MAC/Cipher algorithm is configured in the `/etc/ssh/sshd\_config` file.

For security reasons, the IT administrator may allow only limited algorithms for SSH client connection. Make sure the `/etc/ssh/sshd\_config` files on all the master nodes and worker nodes contain at least one of the following values. 

*   **MAC algorithms:** `hmac-sha1,hmac-sha2-256,hmac-sha2-512,hmac-sha1-96`
*   **Cipher algorithms:** `3des-cbc,aes128-cbc,aes192-cbc,aes256-cbc,aes128-ctr,aes192-ctr,aes256-ctr,arcfour128,arcfour256,blowfish-cbc`  
      
    For example, add the following lines to the `/etc/ssh/sshd_config` files on all the master nodes and worker nodes:
	
    ```
    MACs hmac-sha2-256,hmac-sha2-512 
    Ciphers aes128-cbc,aes192-cbc,aes256-cbc,aes128-ctr,aes192-ctr,aes256-ctr
    ```

### Check the password or key authentication setting

The installation process requires either user name/password authentication or user name/key authentication. 

- To use user name/password authentication, make sure the `PasswordAuthentication` parameter in the `/etc/ssh/sshd_config` file is set to `yes`.
- To use user name/key authentication, make sure the `PubkeyAuthentication` parameter in the `/etc/ssh/sshd_config` file is set to `yes`.

If password or key authentication setting isn't enabled, follow these steps on all master and worker nodes:

1.  Open the `/etc/ssh/sshd_config` file with a supported editor.
3.  To enable password or key authentication, set the value of the related parameter to `yes`. For example:
    
        PubkeyAuthentication yes
    
4.  To enable password authentication or both password and key authentication, set the value of the `PermitRootLogin` parameter to `yes`:
    
        PermitRootLogin yes
    
      
    To enable key authentication only, set the value of the parameter to `prohibit-passsword`, as follows:
    
        PermitRootLogin prohibit-password
    
5.  Save the `/etc/ssh/sshd_config` file.
6.  Run the following command to restart the `sshd` service:
    
        systemctl restart sshd.service
    

### Check whether you have enabled SCP

To check if you've enabled SCP, follow these steps:

1.  Make sure that the `/etc/ssh/disable_scp` file doesn't exist.
2.  Make sure that the `PermitTTY` option in the `/etc/ssh/sshd_config` configuration file is set to `yes`:

    ```
    PermitTTY yes
    ```
	
3.  Make sure that the `/etc/ssh/sshd_config` configuration file doesn't contain the following setting:

    ```
    ForceCommand internal-sftp
    ```

## Update the system configurations manually ## {#manual_steps}

If you don't want to use the `node_prereq` script, follow the steps below.

### Ensure localhost is resolved to 127.0.0.1

Flannel uses the default gateway to create packet routing for communication. To enable network communication across all the cluster nodes, make sure localhost resolves to 127.0.0.1 on all master and worker nodes.

1.  Run the following command to check your localhost setting:  
    
        grep -v '^\s*#' /etc/hosts 2>/dev/null | grep -E '\slocalhost$|\slocalhost\s'
    
      
    If there is no return value, run the following command to set the default route setting:
    
        echo "127.0.0.1 localhost" >> /etc/hosts 
    
    
2.  Open the `/etc/hosts` file with a supported editor. Make sure that localhost resolves to 127.0.0.1. For example:
    ```
    127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
    ```
    If you want to enable IPv4/IPv6 dual stack for OMT installation, make sure the localhost resolves to ::1 in the `/etc/hosts` file. For example: 
	
	```
	::1 localhost localhost6 localhost6.localdomain6
	```

### Set the required system parameters

OMT uses the `br_netfilter` module to enable transparent masquerading and to ease Virtual Extensible LAN (VxLAN) traffic for communication between Kubernetes pods across the cluster nodes. Make sure the `br_netfilter` module is installed on all master and worker nodes before you set the system parameters. 

1.  Log in to the node.
2.  Run the following command to check whether the `br_netfilter` module is enabled:
    
        lsmod |grep br_netfilter
    
      
    If there is no return value, run the following commands to install the `br_netfilter` module:
    
        modprobe br_netfilter
        echo "br_netfilter" > /etc/modules-load.d/br_netfilter.conf
    
3.  Open the `/etc/sysctl.conf` file in a supported editor. 

	{: .important }
	> The `sysctl.conf` file contains the following instructions. Ignore them and update the `sysctl.conf` file directly with the settings described below.
	>
    >```
    >    # To override a whole file, create a new file with the same in
    >    # /etc/sysctl.d/ and put new settings there. To override
    >    # only specific settings, add a file with a lexically later
    >    # name in /etc/sysctl.d/ and put new settings there.
    >```
	
4.  Run the following command to check if the `fs.may_detach_mounts` parameter exists:
    
        # sysctl -n fs.may_detach_mounts
    
	- If the response is `sysctl: cannot stat /proc/sys/fs/may_detach_mounts: No such file or directory` or the integer `1`, you don't need to configure the parameter.
	- If the response is `0`, configure the parameter and set it to `1` in the `sysctl.conf` file.
    
5.  Set the following system parameters according to the operating system installed on the node.  
      
    **Redhat 8.1 and later versions**
	
    ```
    net.bridge.bridge-nf-call-iptables = 1
    net.bridge.bridge-nf-call-ip6tables = 1
    net.ipv4.ip\_forward = 1
    kernel.sem=50100 128256000 50100 2560
    ```
	
    **Oracle Linux 7.9 and later versions**
	
    ```
    net.bridge.bridge-nf-call-iptables = 1
    net.bridge.bridge-nf-call-ip6tables = 1
    net.ipv4.ip\_forward = 1
    kernel.sem=50100 128256000 50100 2560
    ```
	
    **Rocky Linux versions**
	
    ```
    net.bridge.bridge-nf-call-iptables = 1
    net.bridge.bridge-nf-call-ip6tables = 1
    net.ipv4.ip\_forward = 1
    kernel.sem=50100 128256000 50100 2560
	
    ```
    **Other older operating systems, including supported versions of CentOS**
    ```
    net.bridge.bridge-nf-call-iptables = 1
    net.bridge.bridge-nf-call-ip6tables = 1
    net.ipv4.ip\_forward = 1
    net.ipv4.tcp\_tw\_recycle = 0
    fs.may\_detach\_mounts = 1
    kernel.sem=50100 128256000 50100 2560
    ```
	
6.  Save the `/etc/sysctl.conf` file, and then run the following command to apply the updates:
    
        /sbin/sysctl -p
    
### Disable swap space

Complete this task on all master and worker nodes.

1.  Run the following command to disable the swap process:
    
        swapoff -a
    
2.  By default, the swap configuration is in the `/etc/fstab` file. You can check and permanently disable the swap process from that configuration file. Open the `/etc/fstab` file in a supported editor, and then comment out the lines that display `swap` as the disk type. 
      
    For example:
    
        #/dev/mapper/centos_shcentos72x64-swap swap
    

### Install the required Linux packages

The installation depends on various packages that are included in standard yum repositories. 

To install the packages, follow these steps:

1.  Make sure a yum repository has been set up correctly on the server. Contact your IT administrator for help if a yum repository hasn't been set up correctly on your server.
2.  Run the following command on the NFS servers:

    ```
    yum install nfs-utils rpcbind
	```
	
3. Run the following command on all master and worker nodes:

	```
    yum install device-mapper-libs libgcrypt libtool-ltdl net-tools nfs-utils rpcbind systemd-libs unzip conntrack-tools curl lvm2 socat checkpolicy policycoreutils container-selinux bind-utils tar rng-tools iptables
	```
	
4. Run the following command on the master nodes only:  

	```
	yum install java-1.8.0-openjdk
	```

### Set the default gateway settings

If you receive a `Default gateway not set` error message after the `node_prereq` script checks the default gateway, run the following command:

    route add default gw <IP address> <interface name>

For example:

    route add default gw 192.0.2.24 eth0

### Configure the hosts file in the etc directory

If you receive an error message after the `node_prereq` script checks the node host name, you must configure the host name.

- Skip this section if you have configured Domain Name Service (DNS) in your environment, and the master and worker nodes can resolve the FQDN of all cluster nodes, load balancer host, NFS server, and external databases.
- If the DNS isn't configured in your environment, you must configure the `/etc/hosts` file on every master and worker node. 

	Add the IP address and FQDN details of all the nodes to the file. This includes the external access host (HA virtual IP, load balancer), external database servers, and NFS server. Add an entry for each server using the following syntax:  

	```
	<IP address> <FQDN>
	```

	For example, add the following entries to the `/etc/hosts` file:
	```
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
	```

### Synchronize time

OMT components require the time on all nodes to be synchronized. If you receive a warning message after the `node_prereq` script checks the node host name, make sure that the Kubernetes cluster nodes can reach the Network Time Protocol (NTP) servers (either internal organization-based or external internet-based NTP servers).

The following example uses the chrony tool to synchronize time across operating systems. You must have a time server prepared for the time synchronization.

1.  On the first master node, run the following command to install chrony:
    
        yum install chrony -y
    
2.  Run the following commands to create the drift file:
    
        mkdir -p /var/lib/chrony
        echo > /var/lib/chrony/driftfile
    
3.  Run the following commands to configure chrony. Replace the `<Time Server Name or IP Address>` placeholder with the host name or IPv4 address of your time server. You can use a public time server if your cluster can access the Internet. Otherwise, use a time server in your organization.
    
        cat <<ENDFILE >/etc/chrony.conf
        server <Time Server Name or IP Address> iburst
        driftfile /var/lib/chrony/driftfile
        stratumweight 0
        rtcsync
        makestep 0.1 3
        ENDFILE
    
4.  Run the following commands to enable and start the chrony service:
    
        systemctl enable chronyd
        systemctl start chronyd
    
5.  Run the following command to synchronize the operating system time with the NTP server:
    
        chronyc -a makestep
    
6.  Run the following command to restart the chrony daemon:
    
        systemctl restart chronyd
    
7.  Run the following command to check the server time synchronization:
    
        timedatectl
    
      
    If your terminal resembles the following with `NTP synchronized` set to `yes`, then you have successfully synchronized the time on the host with the time server:
	
    ```
    \[root@ ~\]# timedatectl  status
          Local time: Mon 2025-07-21 13:05:21 CST
      Universal time: Mon 2025-07-21 05:05:21 UTC
            RTC time: Mon 2025-07-21 05:05:21
           Time zone: Asia/Shanghai (CST, +0800)
         NTP enabled: yes
     NTP synchronized: yes
     RTC in local TZ: no
          DST active: n/a
    ```
	
8.  Run the following command to synchronize the hardware time from the current system time:
    
        hwclock -w
    
9.  Repeat these steps on all other master nodes (if any) and worker nodes, NFS servers, load balancers, and database servers.

## Related topics ##
{: .no_toc }

- When you have finished, return to [Prepare an environment to install OMT](/pages/write/install_prereq_tasks.html) to continue.