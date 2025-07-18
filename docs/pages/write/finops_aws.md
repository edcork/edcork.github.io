---
title: Integrate with AWS for CMP FinOps
layout: default
parent: Integrate with cloud platforms for CMP FinOps
nav_order: 1
---

# Integrate with AWS for CMP FinOps
{: .no_toc }

**On this page**

> - TOC
> {:toc}

Before you can use the Cloud Management Platform (CMP) FinOps solution, you must set up integrations with the cloud platforms from which you want to pull cloud data. We support integrations with Amazon Web Services (AWS), Azure, and Google Cloud Platform (GCP).

The CMP FinOps solution uses three types of cloud data. You will need to set up a separate integration to retrieve Cloud Account Data, but for Cloud Billing and Cloud Recommendations, this data is retrieved within the same integration.

* Cloud account data – The CMP FinOps account management functionality enables you to centrally manage cloud accounts of supported cloud platforms. You must set up an Integration Studio-based integration to import cloud account data.
*   Cloud billing data – The CMP FinOps' cloud cost visualization and optimization functionalities, including cost governance reports, cloud insights, and cloud cost limits, are all based on cloud billing data. You must set up a Cloud Cost Data Provider-based integration to retrieve cloud billing data.
*   Cloud recommendations data - The CMP FinOps' Optimization functionalities, including cloud insights, are based on cloud recommendations that are collected from the different cloud providers.  You must set up a Cloud Cost Data Provider-based integration to retrieve these cloud recommendations.
    Setting up a Cloud Cost Data Provider-based integration with the appropriate permissions (as described below) will give you both cloud billing data and cloud recommendations data within the same integration.

This topic describes how to set up the two AWS integrations that support the CMP FinOps capability: the cloud accounts import integration and the billing data and recommendations retrieval integration.

## Complete prerequisite tasks in AWS


To integrate with AWS, you must complete the following tasks in AWS at the management account level. 

### Set up IAM user and permissions

Generate the security credentials required by the integrations and then grant the required permissions to the corresponding user:

1.  Log in to the AWS management account as an administrator or the root user.
2.  Navigate to the IAM service and then open the **Policies** page.
3.  Add a policy with the following services and permissions:
    
    Service
    
    Permissions
    
    Organizations
    
    *   `DescribeOrganization`
    *   `DescribeAccount`
    *   `ListAccounts`
    
    Cost Explorer Service
    
    *   `ce:Describe*`
    *   `ce:List*`
    *   `ce:Get*`
    *   `ce:StartSavingsPlansPurchaseRecommendationGeneration`
    
    Savings Plans
    
    *   `savingsplans:Describe*`
    *   `savingsplans:List*`
    
    EC2
    
    *   `ec2:DescribeReservedInstances`
    *   `ec2:DescribeReservedInstancesOfferings`
    *   `ec2:DescribeInstances`
    *   `ec2:DescribeVolumes`
    *   `ec2:DescribeRegions`
    
    Trusted Advisor
    
    *   `trustedadvisor:Describe*`
    *   `trustedadvisor:List*`
    *   `trustedadvisor:Get*`
    *   `trustedadvisor:DownloadRisk`
    
    Compute Optimizer
    
    *   `compute-optimizer:Get*`
    *   `compute-optimizer:Describe*`
    
    Cost and Usage Report
    
    *   `cur:DescribeReportDefinitions`
    
    Elastic Container Service
    
    *   `ecs:ListServices`
    *   `ecs:ListClusters`
    
    Lambda
    
    *   `lambda:ListProvisionedConcurrencyConfigs`
    *   `lambda:ListFunctions`
    
    You'll need this policy for the cloud accounts import integration.
4.  Navigate to the **Users** page, and then create an IAM user.
    *   Make sure that the user's access type is **programmatic access**.
    *   Enter some meaningful tags for the user. The CMP FinOps capability will make use of this information.
5.  Attach the policy added earlier and the following AWS managed policies to an appropriate principal entity (user, group, or role), depending on how you manage user permissions in AWS:
    *   **AmazonEC2ReadOnlyAccess**
    *   **AmazonS3ReadOnlyAccess**
    *   **AWSOrganizationsReadOnlyAccess**
    *   **AWSPriceListServiceFullAccess**If you attach the policies to a group or role, assign the created IAM user to the group or assign the role to the user.
6.  Note down the security credentials (**Access key ID** and **Secret access key**) for the user. You will need to enter the credentials when configuring the billing data and cloud accounts import integrations.

For details, see the [AWS documentation](https://docs.aws.amazon.com/ "AWS documentation").

### Enable rightsizing recommendations

1.  Log in to the AWS management account as an administrator or the root user.
2.  Navigate to the **AWS Billing and Cost Management** console, and then open the **Cost Management Preferences** page.
3.  On the **General** tab, select the **Rightsizing Recommendations** and **Enable Allow linked accounts to see recommendations** options.
4.  Save your changes.

For more information, see [AWS Rightsizing Recommendations](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html "AWS Rightsizing Recommendations").

### Configure data export

To enable the billing data retrieval integration, you need to configure a legacy CUR type data export by following the instructions in the [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/dataexports-create-legacy.html "AWS documentation"). Once configured, AWS will automatically generate reports and store them in the designated S3 bucket. The integration will then import these reports for further processing.

This table lists the essential parameters required during the report configuration process. For other parameters, configure values that align with your specific requirements.

Configuration parameter

Required value

Export type

Legacy CUR export

Include resource IDs

Select the option

Split cost allocation data

Select the option

Refresh automatically

Select the option

Report data time granularity

Daily

Report versioning

Create new report version

Report data integration

Don't select any option

Compression type

GZIP

Note down the **S3 bucket name** and the **report path prefix** displayed on the **Review** page of the report creation wizard. You will need these values later when you configure the cloud cost data provider.

After configuring the cost usage report, verify that you can generate the report in this directory of the S3 bucket: `<bucket name>\<report path prefix>`. The actual report path will contain an actual date range instead of the `date-range` value. Note that it might take longer than 24 hours to generate reports in the S3 bucket after you configure the cost and usage report.

Set up an integration via Integration Studio to import cloud accounts
---------------------------------------------------------------------

This section describes how to set up an integration based on Integration Studio for AWS cloud accounts import.

### Prepare an integration user

Section begin - CreateIntUser

Create a dedicated integration user for each integration. 

1.  Log in to Suite Administration (https://<External Access Host>/bo) as suite admin and create an integration user with the **Integration user** role for the integration.
2.  Log in to Agent Interface as the tenant admin and do the following:
    *   Navigate to **Administration** \> **Master Data** > **People** > **Roles**, and create a role (with the Application value **SMAX**) with the **Create**, **View**, and **Update** permissions for the **Cloud Account** record type. 
    *   Navigate to **Administration** \> **Master Data** \> **People**, locate the integration user, and then assign the created role to the user.

Section end - CreateIntUser

### Configure endpoint

Create an endpoint using the Rest Executor 2.0 endpoint type:

1.  Log in to Agent Interface as the cloud integration administrator.
2.  Navigate to **Administration** \> **Utilities** \> **Integration** > **Endpoints**.
3.  Click **Add**.
4.  Select **Rest Executor 2.0** as the endpoint type, enter a name for the endpoint (for example, AWS), and then click **Add**. The system creates the endpoint.
5.  Click **Configure** and set these fields:
    
    Field
    
    Value
    
    Agent
    
    Select **Agentless**.
    
    Authentication type
    
    Select **AWS Signature**.
    
    Access key ID
    
    Enter the access key ID obtained in the prerequisite section.
    
    Secret access key
    
    Enter the secret access key obtained in the prerequisite section.
    
    Session token
    
    Leave the field empty.
    
    Certificate type
    
    Leave the field empty.
    
    Certificate format
    
    Leave the field empty.
    
    Server certificate
    
    Leave the field empty.
    
6.  After completing the configuration, click **Test connection** to validate the configuration.
7.  Click **Save**.

### Create an integration

In the following steps, you'll create an integration with the predefined template.

1.  Navigate to **Administration** \> **Utilities** > **Integration** > **Integration studio**. 
2.  Click **New**, enter the name of your integration, and then click **Save**. The system displays the Integration page.
3.  In the **Details** section, configure the integration user you created for the current SMAX system.
4.  Select the **Active** option to activate the integration.
5.  In the Connector-Endpoint mappings section, click **Add** to add a mapping.
6.  Select **Management & Governance** (under **Amazon Web Services**) as the connector, select the AWS endpoint that you created earlier, and then enter an alias for the mapping.
7.  Click **Save**.

### Configure a scenario

Perform the following steps to add and configure a scenario:

1.  With the integration selected, click **Add scenario**. 
2.  Enter a name for the scenario. For example, AWS account sync.
3.  In the **Template** field, select **AWS accounts sync process** (under **Amazon Web Services** **Management & Governance**).
4.  Click **Save** to add the scenario.
5.  (Optional) Expand the **Set sync parameters** rule in the **Process logic** section of the scenario, and update the value for the `IdleDaysToCleanUp` key. See below for the explanation of this parameter.
6.  Click **Save**.
7.  Manually run the scenario. If you don't do this, CMP FinOps functionality that depends on cloud account data won't work as expected until the first scheduled cloud account sync occurs.

#### Use IdleDaysToCleanUp to control the stale cloud account cleanup duration

Service Management moves cloud accounts removed from the cloud platform to the Archived phase by using transition rules. To do this, it uses the "PENDING\_CLOSURE" account status set by the integration scenario to decide what are the removed accounts. By default, the integration scenario sets the "PENDING\_CLOSURE" status to cloud accounts removed more than 30 days ago. You can update the `IdleDaysToCleanUp` parameter's value (in days) to change this duration.

Section begin - scheduling

### Schedule the import of cloud accounts

Use the scheduler to periodically import cloud accounts from the cloud platform. Create a schedule that executes the cloud accounts import scenario at the scheduled time (for example, trigger the import at **2:00** every day).

To optimize system performance, schedule cloud account imports with intervals of at least 24 hours.

Section end - scheduling

### Check the scenario execution status

To check the scenario execution status, navigate to **Administration** > **Utilities** > **Integration** > **Endpoints**, and then select the AWS endpoint in the left pane. The system displays the execution history for the AWS integration. Each record displayed in this grid corresponds to one scenario rule. Make sure all rules in the cloud accounts import scenario have the green **Success** status.

*   You can check the start and end time (and duration) for two main activities of the scenario: cloud accounts syncing and stale accounts status setting. To do this, click the hyperlinked ID for these rules (_Capture sync time_ and _Clean up sync time end_), and check the value in the **Output details** field. The field displays both the start time and end time for the corresponding activity.
*   The **Connector** column indicates the system where the action of the rule is applied: Management & Governance (AWS), SMAX, or Common. Unlike other values, Common means that this rule doesn't call any APIs, instead, it just sets some values or performs some calculations.
*   Records whose **Connector** value isn't **Common** contain detailed response data in the **Response details** field. Check this field for error codes or error messages for records with a warning or error status.
*   If you find an error code or message in error or warning records for AWS rules (with the **Connector** value **Amazon Web Services** **Management & Governance**), check the Amazon documentation to see if you can find more information about the error.

### Troubleshooting tips

For rules that correspond to API calls (as opposed to Common actions), if the error code or message in the **Response details** field indicates connection or credential errors, take these actions:

*   Click **Run scenario** in the Scenario details page to run the scenario again, and then check the execution history for that rule to see if it succeeds. Use this method to check if temporary network issues are the cause of the error.
*   Open the AWS endpoint's configuration page, and click **Test connection**. If the test connection succeeds, it indicates that invalid AWS security credentials aren't the cause of the error.

Configure a cloud cost data provider to retrieve billing data
-------------------------------------------------------------

With this integration, you can configure retrieval of historical and current billing information for expenditures associated with your cloud provider. This information will be available within the reporting interface.

### Create a cost reporting integration

1.  Log in to Agent Interface as the cloud integration administrator.
2.  Go to **Administration** \> **Providers** \> **Cloud Cost Data Providers.**
3.  On the **Integrations** page, click either **Add Integration** (if no integrations exist) or the ![hcm 2018 11 integrations add.png](/mediawiki/images/7/7a/hcm_2018_11_integrations_add.png) icon on the right pane to add an additional integration.
4.  Select **Amazon AWS** and click **Next**.
5.  Specify these fields:
    
    1.  **Connection Name**: Identifier for the AWS integration, for example, "`My AWS DEV Account`".
    2.  **Access Key ID**: AWS access key obtained in the prerequisite section
    3.  **Secret Access Key**: AWS secret access key obtained in the prerequisite section
    4.  **Billing Bucket Name**: The name of the S3 bucket that stores billing data and that you designated when you configured the data export in AWS.
    5.  **Billing Report Path**: The report path prefix (excluding the `/date-range/` value at the end) that you specified when you configured the data export in AWS.
    
    If you forgot to make a note of the billing bucket name and billing report path when you configured the data export, follow these steps to identify them:
    
    1.  Sign in to the AWS Management Console and open the Amazon S3 console at [https://console.aws.amazon.com/s3/](https://console.aws.amazon.com/s3/ "https://console.aws.amazon.com/s3/").
    2.  In the left navigation pane, select **Buckets**, and then navigate to the bucket associated with the integration.
    3.  Click the **Copy S3 URI** button, and then paste the URI to a text editor. The URI is formatted as follows:
        
            s3://<billing bucket name>/<billing report path>
        
          
        **Important:** The billing report path doesn't include the forward slash that's between it and the billing bucket name. For example, if the S3 URI is `s3://bucket3///reportPath1/`, the billing report path is `//reportPath1/` (with one less forward slash).
    
6.  Check the **I require a proxy server to connect to this provider** box to use a proxy server to connect to the cloud provider. You can either use the system default proxy server (configured by a suite admin) or use a custom proxy server here.
7.  Leave the **I require a custom base URL to connect to this provider** checkbox unchecked to contact the cloud provider at its default endpoint.
8.  Click **Next**.
9.  Specify the following information:
    *   Collection History Cutoff: By default, the integration will fetch all available billing data from the cloud provider. For AWS, Amazon introduced CUR in 2015, and the availability of data depends on the creation date of the configured CUR reports. If, in either case, you wish to limit the amount of data, select a collection start date so that your collection only gathers data from the specified date. For example, selecting January 2020 will fetch data from that point to the present day and into the future. There is no end date.
    *   Cloud Tags: To enable cloud tags for the selected provider, specify the name and key. Cloud tags help you to filter, search, and manage the AWS resources.  
        For more information, see **Configure Cloud Tags**.
10.  Click **Finish**.

After you create the integration, a full data collection (including historical data) will occur. This may result in a longer-than-usual data collection time, and will cause issues if the collection is still running when the next scheduled collection is due to start.  
  
To avoid this issue, we strongly recommend that you disable the integration until the initial full data collection is complete. You can then enable the integration again to resume scheduled data collection. To do this, click the toggle switch under **COLLECTION SETTINGS** so that it says **Collection is disabled**. When the full data collection is complete, click the toggle switch again so that it says **Collection is enabled.**

Related topics
--------------

*   For general information about the Integration Studio, see [Integration Studio](/doc/SMAX/Main/IntegrationHub "Integration Studio").
*   For information on triggering integration scenarios based on scheduler, see [Scheduler](/doc/SMAX/Main/XIEScheduler "Scheduler").
*   For information on how to export and import integrations and scenarios, see [Export and import integrations](/doc/SMAX/Main/XieImportExportIntegrations "Export and import integrations")**.**
*   For information on Cost and Usage Report, see the AWS documentation [Getting Started with CUR](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-reports-gettingstarted.html "Getting Started with CUR").
*   For information on cloud tags, see [Configure cloud tags](/doc/SMAX/Main/CloudTags "Configure cloud tags").