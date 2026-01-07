---
title: Online help restructure
layout: default
parent: Design
nav_order: 1
has_toc: false
---

The decision to make an internal document publically-visible presented an opportunity to restructure it for clarity, navigability, and SEO.

A content audit and workshops with SMEs enabled me to:

- Reduce the total number of topics by over 50% (491 down to 241)
- Identify and remove obsolete troubleshooting topics (identified 60% of troubleshooting topics to be redundant)
- Merge 4 installtion sub-sections into a single user journey
- Reduce the maximum depth of the ToC to 3 (down from 6)

OMT: 241 topics. TS: 56. Depth 3.
CDF: 491 topics. TS: 142. Depth 6. 


## OMT
<ul>
  <li>Release notes
    <ul>
      <li>Enhancements</li>
      <li>Fixed issues</li>
      <li>Deprecation and obsolescence</li>
      <li>Known issues</li>
    </ul>
  </li>
  <li>Get started
    <ul>
      <li>Glossary</li>
      <li>User roles</li>
      <li>Deployment models</li>
      <li>Service dependency</li>
      <li>OMT architecture
        <ul>
          <li>Components</li>
          <li>Packaging</li>
          <li>Networking</li>
          <li>Security</li>
          <li>Storage</li>
          <li>High availability (HA)</li>
          <li>Databases</li>
          <li>Back up, restore and disaster recovery</li>
          <li>Elasticity</li>
          <li>Monitoring</li>
          <li>Licensing</li>
          <li>Supportability</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Install
    <ul>
      <li>Deployment Architecture</li>
      <li>System requirements</li>
      <li>Activate your Docker Hub account</li>
      <li>Download the installation package</li>
      <li>Set up prerequisites</li>
      <li>Deploy OMT</li>
      <li>Post installation tasks</li>
      <li>Uninstall</li>
      <li>Reference topics
        <ul>
          <li>Create and configure a config.json file</li>
          <li>Manage High Availability (HA) in a cluster with multiple control plane nodes</li>
          <li>Configure Keepalived for High Availability</li>
          <li>Configure storage for the Kubernetes backup capability</li>
          <li>Set up persistent storage</li>
          <li>Forward application logs to an external receiver</li>
          <li>Configure sudo access</li>
          <li>Synchronize time</li>
          <li>Make required system configurations</li>
          <li>Check the default gateway settings</li>
          <li>Check the firewall settings</li>
          <li>Check the host name and set up host name resolutions</li>
          <li>Configure the install.properties file</li>
          <li>Check the SSH configurations</li>
          <li>Create a new Security Context Constraint (external K8s)</li>
          <li>Request server certificates</li>
          <li>Configure external databases</li>
          <li>Download the OMT images and then upload them to an external image registry</li>
          <li>Run a preliminary check</li>
          <li>Configure an internal load balancer</li>
          <li>Configure external load balancers</li>
          <li>Install the itom-cdf-alias script for non-root users</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Upgrade
    <ul>
      <li>System requirements</li>
      <li>Download the OMT packages</li>
      <li>Set up prerequisites for upgrades</li>
      <li>Upgrade OMT</li>
      <li>Post-upgrade configurations</li>
      <li>Reference
        <ul>
          <li>Free disk space</li>
          <li>Generate an upgrade runbook</li>
          <li>Check that the hostname hasn't changed</li>
          <li>Back up data</li>
          <li>Upload images to an external registry</li>
          <li>Configure permissions</li>
          <li>Configure SSH connections</li>
          <li>Disable on-access security scans</li>
          <li>Make sure that all nodes or pods are running</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Administer
    <ul>
      <li>Cluster management
        <ul>
          <li>Management Portal</li>
          <li>Restart OMT</li>
          <li>Update the DNS entries</li>
          <li>Update the operating system</li>
          <li>Post steps after applying an OS patch</li>
          <li>Convert from CentOS to RHEL using convert2rhel</li>
          <li>Configure application proxies after you install OMT</li>
          <li>Change the POD_CIDR parameter value after OMT installation</li>
          <li>Change the SERVICE_CIDR parameter value after OMT installation</li>
          <li>Change the HA virtual IP address after OMT installation</li>
          <li>Enable High Availability (HA) after you install OMT</li>
          <li>Monitor the deployment with the "cdf-help" and Kubernetes commands</li>
          <li>Change the persistent volumes (PVs) after you install OMT</li>
          <li>Change from root user to non-root user after installation</li>
          <li>Rebind a PV and a PVC</li>
          <li>Add or remove nodes from a cluster by using the Management portal</li>
          <li>Add or remove nodes from a cluster via CLI commands</li>
          <li>Manage node labels</li>
          <li>Change cluster runlevel</li>
          <li>Security overview</li>
          <li>Enable a firewall on a node</li>
          <li>Manage OMT certificates</li>
          <li>Set the security context</li>
          <li>Enable the Pod Security Policy</li>
          <li>Change system UID and GID after installation</li>
          <li>Disaster recovery</li>
          <li>Back up</li>
          <li>Update scheduled time or backup scope for the Kubernetes backup capability</li>
          <li>Restore</li>
          <li>Back up and restore IdM</li>
          <li>Clean up local registry images</li>
          <li>Change the password of the local registry admin user</li>
          <li>Change the registry setting</li>
        </ul>
      </li>
      <li>Administer AppHub
        <ul>
          <li>Change the external access host name of the OMT cluster</li>
          <li>Modify the configuration information of external databases</li>
          <li>Add, remove, and reconfigure OMT capabilities</li>
          <li>Create a values.yaml file to enable capabilities after installation</li>
          <li>Enable the cluster management and deployment management capabilities</li>
          <li>Enable the log collection capability</li>
          <li>Enable the monitoring capability</li>
          <li>Enable the Tools capability on a new bastion node</li>
          <li>Enable the Kubernetes backup capability manually on external Kubernetes</li>
          <li>Disable a capability</li>
        </ul>
      </li>
      <li>Administer the logging capability</li>
      <li>Administer the monitoring capability
        <ul>
          <li>Map a pod IP address in the Grafana dashboard with the real host IP address</li>
          <li>Configure the number of Prometheus and alertmanager replicas</li>
          <li>Configure resource requests and limits of the monitoring capability</li>
          <li>Configure the collection interval of the monitoring capability</li>
          <li>Configure the log retention period of the monitoring capability</li>
          <li>Expose Prometheus</li>
        </ul>
      </li>
      <li>CLI tools</li>
    </ul>
  </li>
  <li>Use
    <ul>
      <li>Get started with AppHub
        <ul>
          <li>Log in to AppHub</li>
          <li>AppHub Applications page</li>
          <li>Save a draft application configuration</li>
          <li>Export application resources</li>
          <li>Missing images</li>
          <li>Signature validation</li>
          <li>AppHub Deployments page</li>
          <li>Viewing a Deployment</li>
          <li>Editing a Deployment</li>
          <li>Upgrading a Deployment</li>
          <li>Rolling Back a Deployment</li>
          <li>Onboarding a Deployment</li>
          <li>Troubleshooting Deployments</li>
          <li>Using the YAML Editor</li>
        </ul>
      </li>
      <li>Manage applications and deployments
        <ul>
          <li>Upload a Helm chart using AppHub or the CLI</li>
          <li>Download the application images and then upload them to an image registry</li>
          <li>Deploy the application using AppHub or the CLI</li>
          <li>Delete a deployment using AppHub or the CLI</li>
        </ul>
      </li>
      <li>Identity Management (IdM)
        <ul>
          <li>Manage organizations</li>
          <li>Customize an organization's login page</li>
          <li>Manage users</li>
          <li>Manage groups</li>
          <li>Manage roles and roles-based access control</li>
          <li>Set up database user authentication</li>
          <li>Set up LDAP authentication</li>
          <li>Set up certificate-based authentication</li>
          <li>Set up SAML authentication</li>
          <li>Set up OAuth 2.0 authentication</li>
          <li>Set up RADIUS authentication</li>
          <li>Set up reference authentication</li>
          <li>Create and configure authentication groups</li>
          <li>Add a proxy to access an external IdP</li>
          <li>IdM system settings</li>
          <li>IdM audit</li>
          <li>Manage OpenID Connect</li>
        </ul>
      </li>
      <li>Monitoring
        <ul>
          <li>Access the Grafana homepage</li>
          <li>Grafana dashboards</li>
        </ul>
      </li>
      <li>Kubernetes Dashboard
        <ul>
          <li>View existing images</li>
          <li>Manage cluster</li>
          <li>Manage deployments</li>
          <li>Manage namespaces</li>
          <li>Manage replica sets</li>
          <li>Manage replication controllers</li>
          <li>Manage stateful sets</li>
          <li>Manage daemon sets</li>
          <li>View jobs</li>
          <li>Pods in OMT</li>
          <li>Manage pods</li>
          <li>View Services</li>
          <li>View Ingresses</li>
          <li>View Persistent Volume Claims</li>
          <li>View Secrets</li>
          <li>View ConfigMaps</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Troubleshoot
    <ul>
      <li>Troubleshoot installation
        <ul>
          <li>Can't export the NFS volumes</li>
          <li>Can't access service which is running on another node</li>
          <li>"Checking containerd service not installed" error during OMT installation</li>
          <li>"Checking HA_VIRTUAL_IP unreachable" error during OMT installation</li>
          <li>"Checking image availability timeout" error during OMT installation</li>
          <li>"Checking kernel parameters" error during OMT installation</li>
          <li>"Checking kubelet service not installed " error during OMT installation</li>
          <li>"Checking localhost" error during OMT installation</li>
          <li>"Checking swap is disabled" error during OMT installation</li>
          <li>"database connection test failed" error during OMT installation</li>
          <li>"Insufficient CPU, insufficient memory" error message and a pod is stuck in "Pending" state</li>
          <li>"IPv4 forwarding is disabled" error during OMT installation</li>
          <li>OMT installation fails due to intermittent DNS resolution failures</li>
          <li>"Package net-tools is not installed" error during OMT installation</li>
          <li>Primary DNS server goes down and OMT installation fails</li>
        </ul>
      </li>
      <li>Troubleshoot upgrade
        <ul>
          <li>"Failed to pull image" error when you try to upgrade OMT</li>
          <li>Flannel pod doesn't start after you restart a node</li>
          <li>IdM pod crashes during OMT upgrade</li>
          <li>Jobs aren't updated after you upgrade OMT</li>
          <li>Kubernetes keeps forwarding requests to the old iptables rules after upgrading OMT</li>
          <li>"panic: runtime error: index out of range [1] with length 1" error when upgrading OMT</li>
          <li>Prometheus pod is missing after you upgrade OMT</li>
          <li>"UPGRADE FAILED" error after updating certificates from OMT Management Portal</li>
          <li>"Warning FailedCreatePodSandBox" error and pods don't start during OMT upgrade</li>
        </ul>
      </li>
      <li>Troubleshoot administration
        <ul>
          <li>Can't access a node from other nodes by using its FQDN</li>
          <li>Can't delete an application deployment on AppHub</li>
          <li>Can't delete a pod after a worker node crashes</li>
          <li>Can't reset Grafana Admin password</li>
          <li>Can't restart the PostgreSQL data pod</li>
          <li>Can't run kubectl or kube-status.sh commands as a non-root user</li>
          <li>Can't run the replaceExternalAccess.sh script</li>
          <li>Certificates don't show up on AppHub</li>
          <li>"curl: (77) Problem with the SSL CA cert (path? access rights?)" error occurs when running gen_secret.sh</li>
          <li>"Error from server" error when you try to get a secret</li>
          <li>"Failed to get IP address of itom-pg-backup pod" when running backup_recover.sh or db_admin.sh</li>
          <li>Grafana and Prometheus-operator pods in CrashLoopBackOff state</li>
          <li>itom-prometheus-grafana pod gets stuck in Init:CrashLoopBackOff status</li>
          <li>itom-vault pod is running but other pods don't start</li>
          <li>"No valid CRL for current time found" error and the cdfapiserver service doesn't start</li>
          <li>Prometheus pod crashes repeatedly</li>
          <li>Red Hat, CentOS, or Oracle Linux restarts unexpectedly</li>
          <li>Security products can't scan files before they are deleted</li>
          <li>"UnrecognizedClientException" error while creating ECR repository with aws-create-repository</li>
        </ul>
      </li>
      <li>Troubleshoot IdM
        <ul>
          <li>Admin user can't log in to the Management Portal after resetting an expired password</li>
          <li>IdM pods don't restart automatically after a broken database recovers</li>
          <li>Invalid user name/password or user account is locked or expired</li>
          <li>Login is slow for LDAP users</li>
          <li>You can't log in and a "The service is unavailable at this time" message is displayed</li>
        </ul>
      </li>
      <li>OMT Doctor</li>
      <li>Find the log files</li>
      <li>Contact support</li>
    </ul>
  </li>
</ul>


## CDF
<ul>
  <li>Release notes
    <ul>
      <li>Enhancements</li>
      <li>Fixed issues</li>
      <li>Known issues</li>
      <li>Deprecations and obsolescence</li>
    </ul>
  </li>
  <li>Get started
    <ul>
      <li>Supported deployment models</li>
      <li>Glossary</li>
      <li>FAQs</li>
      <li>User roles</li>
      <li>Supported Configurations</li>
      <li>CDF Delivery and Deployment FAQ</li>
      <li>Enterprise readiness whitepaper
        <ul>
          <li>ITOM Suites</li>
          <li>Container Deployment Foundation (CDF)</li>
          <li>Deployment models</li>
          <li>Networking</li>
          <li>Security</li>
          <li>Storage</li>
          <li>High availability (HA)</li>
          <li>Updates</li>
          <li>Databases</li>
          <li>Backup/restore and disaster recovery</li>
          <li>Multi-tenancy</li>
          <li>Elasticity</li>
          <li>Monitoring</li>
          <li>Licensing</li>
          <li>Supportability</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Install
    <ul>
      <li>Classic installation (Classic, standard, on-prem)
        <ul>
          <li>Plan (Classic, standard, on-prem)
            <ul>
              <li>System requirements (on-premises)</li>
              <li>Check the file system requirements</li>
            </ul>
          </li>
          <li>Prepare (Classic, standard, on-prem)
            <ul>
              <li>Activate your Docker Hub account (on-premises)</li>
              <li>Configure external databases</li>
              <li>Configure load balancers (Classic, standard, on-prem)</li>
              <li>Configure SUDO access</li>
              <li>Set up SELinux</li>
              <li>Download the required installation packages (on-premises)</li>
              <li>Perform preliminary checks</li>
              <li>Update some system configurations
                <ul>
                  <li>Ensure localhost resolves to 127.0.0.1</li>
                  <li>Set the system parameters</li>
                  <li>Disable swap space</li>
                  <li>Install the prerequisite packages</li>
                </ul>
              </li>
              <li>Synchronize time (Classic, standard, on-prem)</li>
              <li>Check the default gateway settings</li>
              <li>Check the network settings</li>
              <li>Check the host names and set up host name resolutions</li>
              <li>Start to download the suite images (on-premises)</li>
              <li>Configure the install.properties file</li>
              <li>Configure a storage driver</li>
              <li>Check the SSH configurations</li>
              <li>Export logs to a remote destination</li>
              <li>Configure NFS volumes</li>
            </ul>
          </li>
          <li>Deploy (Classic, standard, on-prem)
            <ul>
              <li>Upload images to an external registry</li>
              <li>Install ITOM Container Deployment Foundation (on-premises)</li>
              <li>Select the deployment configuration (on-premises)</li>
              <li>Download the container images (on-premises)</li>
              <li>Prepare the control plane and worker nodes (Classic, standard, on-prem)</li>
              <li>Deploy the suite (Classic, standard, on-prem)</li>
              <li>Silent installation (on-premises)</li>
              <li>Deploy cluster nodes without SSH access</li>
            </ul>
          </li>
          <li>Uninstall (on-premises)</li>
        </ul>
      </li>
      <li>Classic installation (managed K8s, cloud)
        <ul>
          <li>System Requirements (Classic, managed K8s, cloud)</li>
          <li>Prepare (Classic, managed K8s, cloud)
            <ul>
              <li>Activate your Docker Hub account (Classic, managed K8s, cloud)</li>
              <li>Prepare external databases (Classic, managed K8s, cloud)</li>
              <li>Configure OpenShift (Classic BYOK)</li>
              <li>Download the required installation packages (Classic, managed K8s, cloud)</li>
              <li>Create the CDF and suite namespaces (Classic managed K8S)</li>
              <li>Configure NFS volumes (Classic BYOK)</li>
              <li>Create a new Security Context Constraint</li>
            </ul>
          </li>
          <li>Deploy (Classic, managed K8s, cloud)
            <ul>
              <li>Install ITOM Container Deployment Foundation (Classic, managed K8s)</li>
              <li>Create an OpenShift route for port 3000</li>
              <li>Create OpenShift routes for ports 5443 and 443</li>
              <li>Silent installation (Classic, managed K8s)</li>
              <li>Install CDF Alias (Classic installation, managed K8s, cloud)</li>
            </ul>
          </li>
          <li>Uninstall CDF and the suite (Classic, managed K8s, cloud)</li>
        </ul>
      </li>
      <li>Helm installation (standard, on-prem)
        <ul>
          <li>Plan (Helm, standard, on-prem)
            <ul>
              <li>System requirements</li>
              <li>Check the file system requirements</li>
            </ul>
          </li>
          <li>Prepare (Helm, standard, on-prem)
            <ul>
              <li>Activate your Docker Hub account (Helm, standard, on-prem)</li>
              <li>Configure load balancers (Helm, standard, on-prem)</li>
              <li>Configure sudo access (Helm)</li>
              <li>Set up SELinux (Helm, standard, on-prem)</li>
              <li>Download the required installation packages (Helm)</li>
              <li>Perform preliminary check (Helm)</li>
              <li>Update some system configurations (Helm)
                <ul>
                  <li>Ensure localhost is resolved to 127.0.0.1 (Helm)</li>
                  <li>Set the system parameters (Helm)</li>
                  <li>Disable swap space (Helm)</li>
                  <li>Install the prerequisite packages (Helm)</li>
                </ul>
              </li>
              <li>Synchronize time (Helm)</li>
              <li>Check the default gateway settings (Helm)</li>
              <li>Check the network settings (Helm)</li>
              <li>Check the host name and set up host name resolutions</li>
              <li>Configure the install.properties file(Helm)</li>
              <li>Configure a storage driver (Helm)</li>
              <li>Check the SSH configurations (Helm, standard, on-prem)</li>
              <li>Export logs to a remote destination (Helm, standard, on-prem)</li>
              <li>Configure NFS volumes (Helm)</li>
              <li>Create and configure a config.json file (Helm)</li>
            </ul>
          </li>
          <li>Deploy (Helm, standard, on-prem)
            <ul>
              <li>Install CDF (Helm)</li>
              <li>Download the required installation images (Helm)</li>
              <li>Upload the images to local registry</li>
              <li>Install an ITOM application (Helm, standard, on-prem)</li>
              <li>Add additional worker nodes (Helm, standard, on-prem)</li>
            </ul>
          </li>
          <li>Uninstall (Helm)</li>
        </ul>
      </li>
      <li>Helm installation (managed K8s, cloud)
        <ul>
          <li>System Requirements (Helm, managed K8s, cloud)</li>
          <li>Prepare (Helm, managed K8s, cloud)
            <ul>
              <li>Activate your Docker Hub account</li>
              <li>Download the required installation images (Helm BYOK)</li>
              <li>Create and configure a config.json file (Helm, managed K8s, cloud)</li>
            </ul>
          </li>
          <li>Deploy (Helm, managed K8s, cloud)
            <ul>
              <li>Install ITOM Container Deployment Foundation (Helm, managed K8s, cloud)</li>
              <li>Install an ITOM application (Helm-based managed Kubernetes)</li>
            </ul>
          </li>
          <li>Uninstall (Helm, managed K8s, cloud)</li>
        </ul>
      </li>
      <li>AppHub installation (standard, on-prem)
        <ul>
          <li>Plan the deployment (AppHub, standard, on-prem)
            <ul>
              <li>System requirements (AppHub, standard, on-prem)</li>
              <li>Check the file system requirements (AppHub)</li>
            </ul>
          </li>
          <li>Prepare (AppHub, standard, on-prem)
            <ul>
              <li>Activate your Docker Hub account (AppHub, standard, on-prem)</li>
              <li>Configure an external default-db database (AppHub, standard, on-prem)</li>
              <li>Configure load balancers (AppHub, standard, on-prem)</li>
              <li>Configure SUDO access (AppHub, standard, on-prem)</li>
              <li>Set up SELinux (AppHub, standard, on-prem)</li>
              <li>Download the required installation package (AppHub)</li>
              <li>Perform preliminary check (AppHub)</li>
              <li>Update some system configurations (AppHub, standard, on-prem)
                <ul>
                  <li>Ensure localhost is resolved to 127.0.0.1 (AppHub)</li>
                  <li>Set the system parameters (AppHub)</li>
                  <li>Disable swap space (AppHub)</li>
                  <li>Install the prerequisite packages (AppHub)</li>
                </ul>
              </li>
              <li>Synchronize time (AppHub, standard, on-prem)</li>
              <li>Check the default route for the localhost and default gateway settings (AppHub, standard, on-prem)</li>
              <li>Check the network settings (AppHub)</li>
              <li>Check the host name and set up host name resolutions (AppHub, standard, on-prem)</li>
              <li>Configure the install.properties file (AppHub)</li>
              <li>Configure a storage driver (AppHub)</li>
              <li>Check the SSH configurations (AppHub, standard, on-prem)</li>
              <li>Export logs to a remote destination (AppHub, standard, on-prem)</li>
              <li>Configure NFS volumes (AppHub)</li>
              <li>Create and configure a config.json file (AppHub)</li>
            </ul>
          </li>
          <li>Deploy (AppHub, standard, on-prem)
            <ul>
              <li>Install CDF (AppHub)</li>
              <li>Upload a Helm chart file (AppHub)</li>
              <li>Download the required installation images (AppHub)</li>
              <li>Upload the images to local registry (AppHub)</li>
              <li>Create custom certificates</li>
            </ul>
          </li>
          <li>Uninstall (AppHub, standard, on-prem)</li>
        </ul>
      </li>
      <li>AppHub Installation (managed K8s)
        <ul>
          <li>Plan
            <ul>
              <li>System Requirements</li>
            </ul>
          </li>
          <li>Prepare
            <ul>
              <li>Activate your Docker Hub account</li>
              <li>Prepare External Databases</li>
              <li>Download Installation Packages</li>
              <li>Set up persistent storage</li>
              <li>Create and configure a config.json file</li>
              <li>Create custom certificates</li>
              <li>Upload CDF images to an external registry</li>
            </ul>
          </li>
          <li>Deploy
            <ul>
              <li>Install CDF</li>
              <li>Upload Helm charts</li>
              <li>Download required installation images</li>
              <li>Upload images to the local registry</li>
            </ul>
          </li>
          <li>Uninstall</li>
        </ul>
      </li>
      <li>OPTIC AppHub
        <ul>
          <li>About OPTIC AppHub</li>
          <li>Getting Started</li>
          <li>Logging In to OPTIC AppHub</li>
          <li>OPTIC AppHub Applications
            <ul>
              <li>Configuring an Application
                <ul>
                  <li>Configuring General Settings<ul>
                  <li>Configuring Advanced Settings</li></ul></li>
                  <li>Configuring Services</li>
                  <li>Configuring Security Settings</li>
                  <li>Configuring Integrations</li>
                </ul>
              </li>
              <li>Deploying an Application</li>
              <li>Saving a Draft</li>
              <li>Exporting an Application</li>
              <li>Missing Images</li>
              <li>Signature Validation</li>
            </ul>
          </li>
          <li>OPTIC AppHub Deployments
            <ul>
              <li>Viewing a Deployment</li>
              <li>Editing a Deployment</li>
              <li>Upgrading a Deployment</li>
              <li>Rolling Back a Deployment</li>
              <li>Onboarding a Deployment</li>
              <li>Troubleshooting Deployments</li>
              <li>Deleting a Deployment</li>
              <li>Editing the values.YAML File</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Upgrade
    <ul>
      <li>Upgrade (standard distribution)
        <ul>
          <li>Plan an on-premises upgrade
            <ul>
              <li>Select an upgrade point (Standard distribution)</li>
              <li>Required disk space and available memory</li>
              <li>Free up disk space</li>
              <li>Upgrade system requirements</li>
            </ul>
          </li>
          <li>Prepare (Standard distribution)
            <ul>
              <li>Add additional worker nodes if required</li>
              <li>Check that the hostname has not changed</li>
              <li>Back up data</li>
              <li>Download, unzip, and verify the upgrade package (single hop upgrades only)</li>
              <li>Download, unzip, and verify the upgrade package (single and multihop upgrades)</li>
              <li>Upload the images if you use an external registry</li>
              <li>Configure sudo access (standard distribution)</li>
              <li>Configure SSH connections (Standard distribution)</li>
              <li>Make sure that all control plane and worker nodes are running</li>
            </ul>
          </li>
          <li>Upgrade CDF (Standard distribution; single hop upgrades only)</li>
          <li>Upgrade CDF (Standard distribution; single and multihop upgrades)</li>
          <li>Verify</li>
          <li>ITOM_Container_Deployment_Foundation:2021.11/PostUpgrade
            <ul>
              <li>Disable JNDI Lookup in CDF namespace</li>
              <li>Reapply your Alertmanager rules</li>
              <li>Clear the browser cache (Standard distribution)</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Upgrade (managed K8S)</li>
    </ul>
  </li>
  <li>Administer
    <ul>
      <li>Monitoring
        <ul>
          <li>Access the Grafana homepage</li>
          <li>Grafana dashboards</li>
          <li>Map a pod IP address in the Grafana dashboard with the real host IP address</li>
          <li>Configure the number of Prometheus and Alertmanager replicas</li>
          <li>Configure resource requests and limits of the monitoring capability</li>
          <li>Configure the log retention period of the monitoring capability</li>
          <li>Configure the collection interval of the ITOM Monitoring Pack</li>
          <li>Expose Prometheus</li>
        </ul>
      </li>
      <li>Add, remove, and reconfigure CDF capabilities
        <ul>
          <li>Enable the cluster management and deployment management capabilities</li>
          <li>Enable the log collection capability</li>
          <li>Enable the monitoring capability</li>
          <li>Disable a capability</li>
        </ul>
      </li>
      <li>Set the security context</li>
      <li>Remove the License menu item from the CDF Management Portal</li>
      <li>Configure application proxies after you install CDF</li>
      <li>Enabling Highly Availability (HA) of the cluster after CDF installation</li>
      <li>Use cdfctl to management CDF and the deployment</li>
      <li>Install CDF alias for non root users</li>
      <li>Access Kubernetes API server with a bearer token</li>
      <li>Add or remove nodes from a cluster on the Management portal</li>
      <li>Add or remove nodes from a cluster via CLI commands (Classic, Helm)</li>
      <li>Manage node labels</li>
      <li>Manage node labels (Helm)</li>
      <li>Change CDF cluster runlevel</li>
      <li>Enable CDF capabilities Tools on a new bastion node</li>
      <li>Change the external access host name of the CDF cluster</li>
      <li>Update the DNS entries</li>
      <li>Rebind a PV and a PVC</li>
      <li>Update the operating system</li>
      <li>Update the operating system (Helm)</li>
      <li>Administer IdM
        <ul>
          <li>Use an organization as a template to create a new organization in IdM</li>
          <li>Manage users</li>
          <li>Manage groups</li>
          <li>Manage roles</li>
          <li>Manage OpenID Connect</li>
          <li>Back up and restore IdM</li>
          <li>Create and configure authentication groups</li>
          <li>Add a database user and give permissions</li>
          <li>Customize password policy</li>
          <li>Customize the Management Portal login page</li>
          <li>Log in to the Management Portal with different attributes</li>
          <li>Manage hierarchical organizations in CDF</li>
          <li>Manage authentication
            <ul>
              <li>Use reference authentication to log in to the Management Portal</li>
              <li>Use a certificate to log in to the Management Portal</li>
              <li>Use SAML credentials to log in to the Management Portal</li>
              <li>Use OAuth 2 authentication to log in to the Management Portal
                <ul>
                  <li>Set up OAuth 2.0 authentication with a Google IdP</li>
                  <li>Set up OAuth 2.0 authentication with an Azure IdP</li>
                  <li>Set up OAuth 2.0 authentication with a Keycloak IdP</li>
                </ul>
              </li>
              <li>Set up RADIUS authentication</li>
              <li>Set up LDAP authentication</li>
            </ul>
          </li>
          <li>Configure a SAML IDP server
            <ul>
              <li>Use a Microsoft ADFS as an IDP server for CDF IdM</li>
              <li>Use Azure as SAML IDP for CDF IdM</li>
            </ul>
          </li>
          <li>Renew IdM SAML SSO certificate (Helm)</li>
          <li>Renew IdM SAML SSO certificate</li>
          <li>Add a proxy to access an external IdP</li>
        </ul>
      </li>
      <li>Manage suite metadata</li>
      <li>Modify the configuration information of external databases</li>
      <li>Restart CDF</li>
      <li>Restart CDF components in a managed Kubernetes environment</li>
      <li>Security
        <ul>
          <li>Authorization</li>
          <li>Data integrity</li>
          <li>Enable a firewall on a node (Helm)</li>
          <li>Enable a firewall on a node</li>
          <li>Manage CDF certificates (Helm)</li>
          <li>Manage CDF certificates</li>
          <li>Encryption</li>
          <li>Enable the Pod Security Policy</li>
          <li>Installation security recommendations</li>
        </ul>
      </li>
      <li>Restart a single cluster node</li>
      <li>CDF backup, restore and disaster recovery
        <ul>
          <li>Restore a Helm-based deployment of CDF</li>
          <li>Back up an on-premises deployment of CDF</li>
          <li>Back up CDF (managed Kubernetes distribution)</li>
          <li>Back up a Helm-based deployment of CDF</li>
          <li>Restore an on-premises deployment of CDF</li>
          <li>Restore a managed Kubernetes deployment of CDF</li>
          <li>Disaster recovery of an on-premise deployment of CDF</li>
        </ul>
      </li>
      <li>Update the persistent volumes (PVs) to use new storage locations</li>
      <li>Change system UID and GID after installation</li>
      <li>Change the password of the local registry admin user</li>
      <li>Delete unwanted images from the local registry</li>
      <li>Change the POD_CIDR parameter value after CDF installation</li>
      <li>Change the SERVICE_CIDR parameter value after CDF installation</li>
      <li>Reset the IdM portal login password (Helm)</li>
      <li>Reset CDF Management Portal password</li>
      <li>List CDF deployments</li>
      <li>Run a precheck on an external database</li>
      <li>Change the HA virtual IP address after CDF installation</li>
    </ul>
  </li>
  <li>Use
    <ul>
      <li>Access CDF</li>
      <li>View existing images</li>
      <li>List of CDF scripts</li>
      <li>Manage cluster</li>
      <li>Manage deployments</li>
      <li>Manage namespaces</li>
      <li>Manage replica sets</li>
      <li>Manage replication controllers</li>
      <li>Manage stateful sets</li>
      <li>Manage daemon sets</li>
      <li>View jobs</li>
      <li>Pods in CDF</li>
      <li>Manage pods</li>
      <li>View Services</li>
      <li>View Ingresses</li>
      <li>View Persistent Volume Claims</li>
      <li>View Secrets</li>
      <li>View ConfigMaps</li>
      <li>Manage High Availability (HA) in a cluster with multiple control plane nodes</li>
      <li>View help</li>
      <li>View available suite updates</li>
      <li>Manage CDF logs</li>
      <li>Monitor the deployment</li>
      <li>Manual verification commands</li>
      <li>CDF Doctor</li>
    </ul>
  </li>
  <li>Troubleshoot
    <ul>
      <li>Troubleshoot installation
        <ul>
          <li>CDF installation fails on low performance nodes</li>
          <li>CDF installation fails if DNS is not configured</li>
          <li>0 of X required images are available in the registry</li>
          <li>Can't download the suite images</li>
          <li>Can't export the NFS volumes</li>
          <li>Can't log in to the Docker Hub</li>
          <li>Can't mount an NFS server from a worker node</li>
          <li>Can't reinstall a suite after uninstalling it</li>
          <li>CDF installation fails due to intermittent DNS resolution failures</li>
          <li>CDF installation fails with "cdf-deployer":"FAILED" error</li>
          <li>CDF installation fails with "cannot re-use a name that is still in use" error</li>
          <li>CDF installation fails with a "fail to pull image" error message</li>
          <li>CDF installation fails with the first control plane node in the NotReady status</li>
          <li>CDF silent installation fails with a "Failed to update keepalived nodeSelector." error message</li>
          <li>CDF on GKE doesn't support an SSL connection to the native Google PostgreSQL database</li>
          <li>"Checking command xxx failed" during CDF installation</li>
          <li>"Checking containerd service not installed" error during CDF installation</li>
          <li>"Checking HA_VIRTUAL_IP unreachable" error during CDF installation</li>
          <li>"Checking image availability timeout" error during CDF installation</li>
          <li>"Checking localhost" error during CDF installation</li>
          <li>"Checking kubelet service not installed " error during CDF installation</li>
          <li>"Checking kernel parameters" error during CDF installation</li>
          <li>"Checking overlayfs device is used on docker" error during CDF installation</li>
          <li>"Checking port xxx failed" during CDF installation</li>
          <li>"Checking range overlap of docker bip and host network" error during OMT installation</li>
          <li>"Checking swap is disabled" error during CDF installation</li>
          <li>"Checking udev sync support" error during CDF installation</li>
          <li>"Could not issue certificates" error and cluster pods go down</li>
          <li>"database connection test failed" error during CDF installation</li>
          <li>Fail to install some required prerequisite packages</li>
          <li>FAILED: Checking DNS server connection timeout</li>
          <li>"FATAL: docker installation failed." error during CDF installation</li>
          <li>Failed to configure and start the ETCD database after enabling fapolicyd</li>
          <li>FATAL: Invalid value for --nfs-server</li>
          <li>File consumption on the devicemapper grows rapidly (Helm)</li>
          <li>File consumption on the devicemapper grows rapidly</li>
          <li>First control plane node goes down during CDF installation</li>
          <li>Image xxx not found</li>
          <li>Installation fails with PV issues</li>
          <li>"Insufficient CPU, insufficient memory" error message and a pod is stuck in "Pending" state</li>
          <li>Invalid character "{" in host name</li>
          <li>"IPv4 forwarding is disabled" error during CDF installation</li>
          <li>"Package net-tools is not installed" error during CDF installation</li>
          <li>Pods are stuck in the "Terminating" state when you install CDF</li>
          <li>Primary DNS server goes down and CDF installation fails</li>
          <li>"semodule: Failed on... selinux-addition.pp!" error message and installation fails</li>
          <li>The browser does not trust certificates</li>
          <li>The NXDOMAIN logs show irrelevant information</li>
          <li>"userauth_pubkey: key type ssh-rsa not in PubkeyAcceptedKeyTypes" error while adding worker node</li>
          <li>Timeout errors occur when CDF calls the AKS API server</li>
        </ul>
      </li>
      <li>Troubleshoot upgrade
        <ul>
          <li>CDF upgrade fails if the bastion node is running Ubuntu</li>
          <li>"Device is busy" or "waiting for IO/CPU to become free" error messages during upgrade</li>
          <li>"Error: client: etcd cluster is unavailable or misconfigured; error: tls: bad certificate" during upgrade</li>
          <li>Errors occur when upgrading from CDF 2021.08 to 2021.11</li>
          <li>Error "org.postgresql.util.PSQLException: FATAL: password authentication failed for user "postgres"" during upgrade</li>
          <li>"Failed to find CDF_HOME" error</li>
          <li>"Failed to pull image" error when you try to upgrade CDF</li>
          <li>Failed to pull images during upgrade when McAfee on-access scan is enabled</li>
          <li>Flannel pod doesn't start after you restart a node</li>
          <li>IdM pod crashes during CDF upgrade</li>
          <li>Jobs are not updated after a CDF upgrade</li>
          <li>kube-apiserver doesn't enable encryption correctly after an upgrade</li>
          <li>"panic: runtime error: index out of range [1] with length 1" error when upgrading OMT</li>
          <li>Patching a deployment on GKE 1.17 takes a long time</li>
          <li>Prometheus node exporters are not running in worker nodes after updating to 2021.08</li>
          <li>Prometheus pod is missing after you upgrade CDF</li>
          <li>Prometheus pod is in "Pending" state after you upgrade CDF</li>
          <li>Service portal is down and pods are in init status</li>
          <li>Suite upgrade fails and the suite pod stays in a Pending state</li>
          <li>The Update button on CDF Management Portal is not working well</li>
          <li>ImagePullBackOff errors when upgrading CDF</li>
          <li>Upgrade fails after your session is disconnected</li>
          <li>Upgrade fails when you run the "upgrade --u" command</li>
          <li>Upgrade fails when the system locale isn't en_US.utf8</li>
          <li>Error "UPGRADE FAILED" during helm upgrade</li>
          <li>"UPGRADE FAILED" error after updating certificates from CDF Management Portal</li>
          <li>"renew, ERR: precheck: cert validity" during CDF upgrade</li>
          <li>"userauth_pubkey: key type ssh-rsa not in PubkeyAcceptedKeyTypes" error while upgrading CDF</li>
          <li>"Waiting for upgrade finished timeout" error during CDF upgrade</li>
          <li>"Warning FailedCreatePodSandBox" message and pods do not start during upgrade</li>
        </ul>
      </li>
      <li>Troubleshoot administration
        <ul>
          <li>Application helm charts didn't display on AppHub after uploading successfully</li>
          <li>Can't get password from Vault</li>
          <li>Can't run the replaceExternalAccess.sh script</li>
          <li>replaceExternalAccessHost script fails with "Waiting for idm pod ready..."</li>
          <li>Cannot access a node from other nodes by using its FQDN</li>
          <li>Cannot delete a pod after a worker node crashes</li>
          <li>Cannot restart the PostgreSQL data pod</li>
          <li>Cannot log into CDF Swagger UI page</li>
          <li>Can't reset Grafana Admin password</li>
          <li>Can't run kubectl or kube-status.sh commands as a non-root user</li>
          <li>CDF-API-server volume verification failed</li>
          <li>cleanRegistry failed with error "failed to garbage collect: error enumerating blobs..."</li>
          <li>CrashLoopBackOff status on the terminal when you migrate one node to another node</li>
          <li>"curl: (77) Problem with the SSL CA cert (path? access rights?)" error occurs when running gen_secret.sh</li>
          <li>"error="failed to new session: ssh: rejected: connect failed (open failed)" when adding node</li>
          <li>"Error from server" error when you try to get a secret</li>
          <li>Failed to access the Management Portal</li>
          <li>Failed to add a node with "ALREADY DONE" in the log</li>
          <li>"Failed to get IP address of itom-pg-backup pod" when running backup_recover.sh or db_admin.sh</li>
          <li>Failed to issue nginx-ingress-controller certificates</li>
          <li>Failed to update database configuration with the updateExternalDbInfo script</li>
          <li>Fluentd has high CPU usage</li>
          <li>Grafana and Prometheus-operator pods in CrashLoopBackOff state</li>
          <li>Intermittently failed to connect exposed service via external FQDN with HA using Keepalived</li>
          <li>itom-prometheus-grafana pod gets stuck in Init:CrashLoopBackOff status</li>
          <li>itom-vault pod is running but other pods don't start</li>
          <li>kube-apiserver failed to start up</li>
          <li>Kubelet gets stuck with massive "runtime service failed: rpc error: code = Unknown" error messages</li>
          <li>Kubernetes gets stuck when rebooting the server</li>
          <li>Pods failed to start up and got stuck in Init status after upgrading Linux distribution</li>
          <li>Red Hat, CentOS, or Oracle Linux restarts unexpectedly</li>
          <li>Some PostgreSQL pod stuck in 1/2 state</li>
          <li>Prometheus pod crashes repeatedly</li>
          <li>"server returned HTTP status 404 Not Found" error</li>
          <li>The downloadimages.sh script failed to authenticate the docker account with 2FA enabled</li>
          <li>"The external certificates have already expired" error when logging in to the Management portal</li>
          <li>The IdM login page is not displayed</li>
          <li>The itom-vault pod doesn't go up after system reboot</li>
          <li>The Kubelet service does not work when installing the suite to a pre-occupied port</li>
          <li>The RHEL7.4 NFS4.1 client can loop in its stage manager</li>
          <li>The Vault server is unavailable due to etcd failure</li>
          <li>"Unable to inspect docker image" in /var/log/messages</li>
          <li>Vault pod failed to start when NFS disk usage reaching 100%</li>
          <li>Vault reports an "[ERROR] expiration: error restoring leases" error after restarting</li>
          <li>A CDF cluster node becomes "NotReady" after a vMotion VM migration</li>
          <li>Worker nodes cannot be deleted from the CDF Management Portal</li>
        </ul>
      </li>
      <li>Troubleshoot IdM
        <ul>
          <li>Admin user can't log in to the Management Portal after resetting an expired password</li>
          <li>IdM fails to connect to database</li>
          <li>IdM pods are in "idle in transaction" state in PostgreSQL</li>
          <li>Invalid user name/password or user account is locked or expired</li>
          <li>"The request token is invalid" errors during login</li>
          <li>"Unable to upgrade connection" error trying to get IdM secret</li>
          <li>You can't log in and a "The service is unavailable at this time" message is displayed</li>
        </ul>
      </li>
      <li>Find the log files</li>
      <li>Service dependency (Classic deployment)</li>
      <li>Service dependency (Helm deployment)</li>
      <li>Contact support</li>
    </ul>
  </li>
</ul>

