---
title: Integrate with cloud platforms to enable CMP FinOps
layout: default
parent: Writing
nav_order: 2
has_toc: false
nav_exclude: true
---

# Integrate with cloud platforms to enable CMP FinOps
{: .no_toc }

<details close markdown="block">
  <summary>
  
    On this page
	
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

Cloud Management Platform (CMP) FinOps uses two types of data: cloud account data and cloud cost data. Before you can use CMP FinOps, you must set up two integrations with your cloud provider to retrieve this data.

## Cloud account data ##

CMP FinOps uses cloud account data to help you manage and configure your cloud accounts.

You can set up the integration to retrieve cloud account data using Integration Studio, Service Management's built-in integration platform.

## Cloud cost data ##

CMP FinOps uses cloud cost data to provide cost visualizations and suggest improvements. This includes cloud cost governance reports, cloud insights, and cloud cost limits.

You can't set up an integration to retrieve cloud cost data using Integration Studio, as CMP FinOps retrieves this data differently for each cloud provider. You must instead set up a Cloud Cost Data Provider in the **Admin & Providers** section of Service Management.

## Related topics ##
{: .no_toc }

- To learn how to set up these integrations with AWS, see [Integrate with AWS for CMP FinOps](https://doc/SMAX/25.1/SyncAWSProvider).
- To learn how to set up these integrations with Azure, see [Integrate with Azure for CMP FinOps](https://doc/SMAX/25.1/SyncAzureProvider).
- To learn how to set up these integrations with GCP, see [Integrate with GCP for CMP FinOp](https://doc/SMAX/25.1/SyncGCPProvider).
- For general information about Integration Studio, see [Integration Studio](https://doc/SMAX/25.1/IntegrationHub).
- For general information about Cloud Cost Data Providers, see [Cloud cost data providers](https://doc/SMAX/25.1/CGROIntegrations).
- For an introduction to FinOps, see [Get started with CMP FinOps](https://doc/SMAX/25.1/IntegrationHub).