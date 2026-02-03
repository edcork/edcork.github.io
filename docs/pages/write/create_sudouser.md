---
title: Enable a regular user to install OMT
layout: default
parent: "Sample 1: Installation guide"
nav_order: 2
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

Sudo is a command line utility that lets regular users run important system commands that, normally, only the administrator (root user) can run.

## Why use sudo for OMT installation?

- OMT requires administrator permissions to install
- Instead of sharing the root password, you can safely give temporary permissions to a regular user
- These permissions can be removed after installation

## Delegate the authority to install OMT to a regular user

To configure sudo permission, you must be logged in to the first master node as the root user (administrator). The regular user must already exist on the system.

1.  Download the OMT installation package to the first master node and unzip it.
    
2.  Go to the OMT installation package directory.

3.  Run the following command to delegate authority to install OMT to a regular user. Replace `<username>` with the actual username.
    
        ./node_prereq --sudo-user <username> --sudo-for install
    
4.  Copy the `node_prereq` script to any directory (For example, `/tmp`) on all other nodes.

5.  Run the following command to make sure that the script has executable permission:

		chmod +x /tmp/node_prereq

6.  Then, run the following command. Replace `<username>` with the actual username.
    
        ./node_prereq --sudo-user <username> --sudo-for install

### Additional options   

*   If you'll specify the OMT installation directory using the `--cdf-home` option when running the `./install` script, specify the same directory with `--cdf-home` option when running `node_prereq`:
    
        ./node_prereq --sudo-user <username> --sudo-for install --cdf-home <cdf_home>
    
*   If you'll specify the temporary directory using the `--tmp-folder` option when running the `./install` script, specify the same temporary directory with `--tmp-folder` option when running `node_prereq`:
    
        ./node_prereq --sudo-user <username> --sudo-for install --tmp-folder <tmp_folder>
    
*   If you'll perform administrative tasks with this regular user after installation, add `administer` to `--sudo-for` parameter as below or use the default value to delegate the install and administer authorities to the user:
    
        ./node_prereq --sudo-user <username> --sudo-for 'install,administer'
    

## Installing OMT as a regular user

After permissions are set, the regular user can:

- Check their permissions:

	```
    sudo -n -ll -U <username>
	```
	
- Run installation commands by prefixing the command with `sudo`. For example, instead of: 

    ```
	./install -c /tmp/config.json --nfsprov-server 192.0.2.0 --nfsprov-folder var/vols/itom/data
    ```
	
	The user should run:
	
	```
	sudo ./install -c /tmp/config.json --nfsprov-server 192.0.2.0 --nfsprov-folder var/vols/itom/data
	```

### Simple installation example

```
sudo ./install \
-c /tmp/config.json \
--nfsprov-server 192.0.2.0 \
--nfsprov-folder /var/vols/itom/data 
```

{: .important }
>The root user will need to grant these permissions again for future upgrades.

## Related topics
{: .no_toc }

- When you have finished, return to [Prepare an environment to install OMT](/pages/write/install_prereq_tasks.html) to continue.
- For instructions how to revoke authority after OMT installation, see <span style="color: red;"><u>Revoke authority to install OMT</u></span>.
- For a full command list that a regular user can run after granting permissions, see <span style="color: red;"><u>Use sudo to enable a regular user to install, upgrade, or administer OMT</u></span>.
