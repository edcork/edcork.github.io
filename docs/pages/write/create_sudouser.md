---
title: Enable a regular user to install OMT
layout: default
parent: Prepare an environment to install OMT
nav_order: 1
has_toc: false
---

# Enable a regular user to install OMT
{: .no_toc }

<details close markdown="block">
  <summary>
  
    On this page
	
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

`sudo` is a command line utility for Unix and Unix based operating systems. The utility provides an efficient way for system administrators to temporarily delegate certain regular users or user groups privileged access to system resources. Therefore, the users can run commands that they can't run under their regular accounts.

OMT requires root user permissions to install OMT. If the root users have security concerns to give a regular user the root password, you can delegate authority to the user before installing OMT. You can revoke the permissions after OMT installation.

The `node_prereq` script can grant a specified regular user authority to run all the commands required to install OMT. You can also grant authority to administer OMT at the same or simply use the default value. But you will have to run the script again when they want to upgrade, as the regular user needs permission to run the upgrade command from the upgrade package. For a full command list that a regular user can run after granting permissions, refer to [Use sudo to enable a regular user to install, upgrade, or administer OMT](/doc/OMT/24.1/AutoSudoAdmin "Use sudo to enable a regular user to install, upgrade, or administer OMT").

## Delegate the authority to install OMT to a regular user

To configure sudo permission, you must run the `node_prereq` script on the cluster node with a root user and the regular user must already exist on the node. Perform the following steps to delegate authority to install OMT to a regular user:

1.  Download the OMT installation package to the first control plane node and unzip it.
    
2.  Change directory into the OMT installation package directory and run the following command to delegate authority to install OMT to a regular user:
    
        ./node_prereq --sudo-user <username> --sudo-for install
    
3.  After finishing the permission configuration on the first node, copy the `node_prereq` script to any directory (For example, `/tmp`) on other nodes and ensure that it has executable permission. Then run the following command:
    
        ./node_prereq --sudo-user <username> --sudo-for install
    

*   If you'll specify the OMT installation directory using the `--cdf-home` option when running the `./install` script, specify the same `cdf home` with `--cdf-home` option when running `node_prereq`:
    
        ./node_prereq --sudo-user <username> --sudo-for install --cdf-home <cdf_home>
    
*   If you'll specify the temporary directory using the `--tmp-folder` option when running the `./install` script, specify the same temporary directory with `--tmp-folder` option when running `node_prereq`:
    
        ./node_prereq --sudo-user <username> --sudo-for install --tmp-folder <tmp_folder>
    
*   If you'll perform administrative tasks with this regular user after installation, add `administer` to `--sudo-for` parameter as below or use the default value to delegate the install and administer authorities to the user:
    
        ./node_prereq --sudo-user <username> --sudo-for 'install,administer'
    

## Install OMT as a regular user

After the regular user got the required authorities, run the command to get a list of commands you can run as a regular user:

    sudo -n -ll -U <username>

To run the commands as a regular user, prefix the command with sudo.

For example, if you'll run the install command: `./install -c /tmp/config.json --nfsprov-server 192.0.2.0 --nfsprov-folder var/vols/itom/data` as a regular user, run `sudo ./install -c /tmp/config.json --nfsprov-server 192.0.2.0 --nfsprov-folder var/vols/itom/data` instead.

### Embedded Kubernetes minimal installation (regular user)

Use this command to install OMT as a regular user.

```
sudo ./install \
-c <config.json file> \
--nfsprov-server <nfs-server> \
--nfsprov-folder <nfs-directory> 
```    

**For example:**

```
sudo ./install \
-c /tmp/config.json \
--nfsprov-server 192.0.2.0 \
--nfsprov-folder /var/vols/itom/data 
```

## Related topics
{: .no_toc }

- When you have finished, return to [Set up prerequisites (embedded K8s)](/doc/OMT/24.1/InstallPrereqsEmbed "Set up prerequisites (embedded K8s)") to continue.
- For how to revoke authority after OMT installation, refer to [Revoke authority to install OMT](/doc/OMT/24.1/PostInstallEmbed#Revoke_authority_to_install_OMT "Revoke authority to install OMT").
- If you don't want to delegate authority to a regular user with the `node_prereq` script, refer to [Delegate authority to a regular user without using the script](/doc/OMT/24.1/AutoSudoAdmin#Delegate_authority_to_a_regular_user_without_using_the_script "Delegate authority to a regular user without using the script").