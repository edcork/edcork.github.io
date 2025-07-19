---
title: Integrate with OCI for CMP FinOps
layout: default
parent: Integrate with cloud platforms to enable CMP FinOps
nav_order: 3
has_toc: false
---

# Integrate with OCI for CMP FinOps
{: .no_toc }

**On this page**

> - TOC
> {:toc}

Before you can use the Cloud Management Platform (CMP) FinOps solution, you must set up integrations with the cloud platforms from which you want to pull cloud data. We support integrations with Amazon Web Services (AWS), Azure, Google Cloud Platform (GCP), and Oracle Cloud Infrastructure (OCI).

The CMP FinOps solution currently supports only the collection of cloud billing data from OCI (integrations with AWS, Azure, and GCP also support the collection of cloud account and cloud recommendations data).

This topic describes how to set up a Cloud Cost Data Provider-based integration to retrieve cloud billing data from OCI. To view this data, you will need to set up an integration with Power BI.

## Complete prerequisite tasks in OCI 

OCI generates Cost and Usage (CUR) reports, which contain the cloud billing data that CMP FinOps uses, by default. You can't modify these reports. Therefore, you don't have to set up or configure CUR reports to set up an integration with OCI. However, you do have to perform some initial setup to access the reports.

### Create a user and generate a secret key

OCI does not have service accounts. In order to grant CMP FinOps API access to the OCI cloud data, you must create a real user- no service users in OCI, so create a real user and use "customer secret key" to grant API access to CMP FinOps.

1.  Log in to OCI Console as a member of the Administrators group.
2.  In the navigation menu, click **Identity & Security** > **Domains**, and then select the identity domain that you want to work in. You might need to change the compartment to find the domain that you want.
3.  Click **Users** > **Create user.**
4.  In the **First name** and **Last name** fields enter the user's name. For example, you name this user "FinOps Admin".
5.  Leave the **Use the email address as the username** option selected.
6.  In the **Username / Email** field, enter an email address for the user account, and then click **Create**.
7.  In the left-hand **Resources** menu, click **Customer secret keys**, and then click **Generate secret key**.
8.  Enter a name for the key, and then click **Generate secret key**.
9.  Make a note of the values in the **Name** and **Access key** columns. You will need these values when configuring the Cloud Cost Data Provider-based integration.

### Set up and configure a group

1.  In the navigation menu, click **Identity & Security** > **Domains**, and then select the identity domain that you want to work in. You might need to change the compartment to find the domain that you want.
2.  Click **Groups** > **Create group**.
3.  In the **Name** and **Description** fields of the **Create group** window, enter the name of the group (for example, "oci\_finops") and a description.
4.  Add the user that you created earlier to the group.
5.  Click **Create**.

### Create a policy

1.  In the navigation menu, click **Identity & Security** > **Identity** \> **Create Policy**.
2.  In the **Name** and **Description** fields of the **Create policy** window, enter the name of the policy (for example, "oci\_cur\_reports") and a description.
3.  If you want to attach the policy to a compartment other than the one you're viewing, select it from the **Compartment** list. 
4.  Click **Show manual editor**, and then copy the following text to the **Policy Builder** text box.
    
    				`define tenancy usage-report as ocid1.tenancy.oc1..aaaaaaaaned4fkpkisbwjlr56u7cj63lf3wffbilvqknstgtvzub7vhqkggq endorse group <group> to read objects in tenancy usage-report`
    			
    
    Update the `<group>` placeholder in this text with the name of the group that you created earlier. For example, "oci\_finops".
5.  Click **Create**.

Set up a Cloud Cost Data Provider-based integration 
----------------------------------------------------

This integration enables you to retrieve historical and current cloud billing data for expenditures associated with your cloud provider. This information will be available within the reporting interface.

1.  Log in to Agent Interface as the cloud integration administrator.
2.  Go to **Administration** \> **Providers** \> **Cloud Cost Data Providers.**
3.  On the **Integrations** page, click **Add Integration** (if no integrations exist) or the ![hcm 2018 11 integrations add.png](/mediawiki/images/7/7a/hcm_2018_11_integrations_add.png) icon on the right pane (to add an additional integration).
4.  Select **Oracle Cloud Infrastructure**, click **NEXT**, and then enter the following information:
    
    Field
    
    Description
    
    **Connection Name**
    
    Identifier for the OCI integration, for example, "My OCI".
    
    **Access Key ID**
    
    The name of the customer secret key that you created in OCI Console earlier.
    
    **Secret Access Key**
    
    The access key of the customer secret key that you created in OCI Console earlier.
    
    **Billing Bucket Name**
    
    The Oracle Cloud ID (OCID) of your root compartment.  
      
    To see the OCID of all your compartments (including the root compartment), log in to OCI Console as a member of the Administrators group, and then click **Identity & Security** > **Compartments** in the navigation menu.
    
    **Billing Report Path**
    
    Enter `reports/cost-csv`.
    
    **Bucket Endpoint URL**
    
    Enter `https://bling.compat.objectstorage.<OCI region>.oraclecloud.com`.  
     
    
    Replace the `<OCI region>` placeholder with your OCI home region. For example, you enter `https://bling.compat.objectstorage.us-ashburn-1.oraclecloud.com`.  
      
    For information about OCI home regions, see [Managing Regions](https://docs.oracle.com/en-us/iaas/Content/Identity/Tasks/managingregions.htm#The "Managing Regions").
    
5.  Leave **I require a proxy server to connect to this provider** unselected if you want to use a proxy server to connect to the cloud provider. You can use either the system default proxy server (configured by a suite administrator) or a custom proxy server.
6.  Select **I require a custom base URL to connect to this provider** if you don't want to contact the cloud provider at its default endpoint.
7.  Click **NEXT**.
8.  (Optional) Specify the **Collection History Cutoff**. By default, all available cloud billing data is fetched from the cloud provider. If you wish to limit the amount of data, select a collection start date so that your collection only gathers data from the specified date. For example, selecting January 2022 will fetch data from that point to the present day and into the future. There is no end date.
9.  Click **FINISH**.

After you create the integration, a full data collection (including historical data) will occur. This may result in a longer-than-usual data collection time, and will cause issues if the collection is still running when the next scheduled collection is due to start.  
  
To avoid this issue, we strongly recommend that you disable the integration until the initial full data collection is complete. You can then enable the integration again to resume scheduled data collection. To do this, click the toggle switch under **COLLECTION SETTINGS** so that it says **Collection is disabled**. When the full data collection is complete, click the toggle switch again so that it says **Collection is enabled.**

Related topics
--------------

*   For more information about cost and usage reports in OCI, see [Cost and Usage Reports](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/costusagereportsoverview.htm "Cost and Usage Reports").
*   For more information about users in OCI, see [Managing Users](https://docs.oracle.com/en-us/iaas/Content/Identity/users/about-managing-users.htm "Managing Users").
*   For more information about groups in OCI, see [Managing Groups](https://docs.oracle.com/en-us/iaas/Content/Identity/groups/managinggroups.htm "Managing Groups").
*   For more information about policies in OCI, see [Managing Policies](https://docs.oracle.com/en-us/iaas/Content/Identity/policymgmt/managingpolicies_topic-tasks.htm "Managing Policies").
*   For more information about Power BI, see [Integrate with Power BI to create FinOps reports](/doc/SMAX/Main/BYOBI "Integrate with Power BI to create FinOps reports").