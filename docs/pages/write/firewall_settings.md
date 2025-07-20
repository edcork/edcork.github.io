---
title: Check the firewall settings
layout: default
parent: Prepare an environment to install OMT
nav_order: 3
has_toc: false
---

# Check the firewall settings
{: .no_toc }

<details close markdown="block">
  <summary>
  
    On this page
	
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

If you haven't enabled a firewall, skip this topic. 

There are many firewall management tools to manage your firewall. For example, `firewalld` or `iptables`. The following steps are based on a `firewalld` managed firewall. If you are using another firewall management tool, contact your network administrator for detailed steps on how to add the related firewall rules.

To check whether `firewalld` manages your firewall, run the following command:

    systemctl status firewalld

  
If your terminal resembles the following, `firewalld` manages your firewall:

```
[root@sh ~\]# systemctl status firewalld
 firewalld.service - firewalld - dynamic firewall daemon
   Loaded: loaded (/usr/lib/systemd/system/firewalld.service; enabled; vendor preset: enabled)
   Active: active (running) since Mon 2020-06-22 04:36:32 CST; 2 weeks 0 days ago
     Docs: man:firewalld(1)
 Main PID: 878 (firewalld)
    Tasks: 2
   CGroup: /system.slice/firewalld.service
           └─878 /usr/bin/python -Es /usr/sbin/firewalld --nofork --nopid
```

## Add firewall rules for the inbound connections

**For the NFS servers**

1.  Make sure the default policy for the `INPUT` chain is `ACCEPT`. To check the default policy, run the following command:
    
        iptables -S | grep -- '-P INPUT'

    If the default  policy isn't `ACCEPT`, contact your IT system administrator to change the policy.
2.  Run the following commands on the NFS server:
    ```
	systemctl start firewalld; systemctl enable firewalld
	firewall-cmd --permanent --add-port=111/udp
	firewall-cmd --permanent --add-port=111/tcp
	firewall-cmd --permanent --add-port=22/tcp
	firewall-cmd --permanent --add-port=2049/tcp
	firewall-cmd --permanent --add-port=20048/tcp
	firewall-cmd --reload
    ```

**For the master nodes and worker nodes**

If you've enabled firewalld, OMT will add firewall rules automatically on the master and worker nodes with your confirmation.

## Add firewall rules for the outbound connections 

You must make sure you've added the related firewall rules for the required outbound ports to ensure the connection. For example, run the following commands on the worker nodes and master nodes to configure the firewall outbound port 5432 to connect an external PostgreSQL database:

```
systemctl start firewalld; systemctl enable firewalld
    firewall-cmd --permanent --direct --add-rule ipv4 filter OUTPUT 0 -p tcp -m tcp --dport=5432 -j ACCEPT -m comment --comment "connect PostgreSQL"
    firewall-cmd --reload
```

## Enable VRRP protocol for Keepalived in a multiple master node deployment 

If you want to set up a multiple master node (HA) environment by setting the `HA_VIRTUAL_IP` parameter in the `install.properties` file, make sure you've enabled the `vrrp` protocol when you have enabled the firewall on the node. Keepalived will the `vrrp` protocol to support virtual IP. In most default settings, the `vrrp` protocol is enabled. If you have used some custom settings for the server or if Keepalived doesn't work well, run the following command on the node to enable the `vrrp` protocol:

    firewall-cmd --add-protocol vrrp  --permanent
    firewall-cmd --reload

## Related topics ##
{: .no_toc }

When you have finished, return to [Set up prerequisites (embedded K8s)](/doc/OMT/Main/InstallPrereqsEmbed "Set up prerequisites (embedded K8s)") to continue.