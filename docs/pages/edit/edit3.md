---
title: "Sample 3: Integration guide"
layout: default
parent: Editing
nav_order: 3
---

# Editing sample 3: Integration guide
{: .no_toc }

**On this page**
> - TOC
> {:toc}

**Source:** [Service Management 25.1 documentation](https://docs.microfocus.com/doc/SMAX/25.1/IntegrateCloudProviderFinOps).

**Summary of issues**
 
| Clarity and structure| The topic is a series of lists, which obscure what should be a simple message: the product relies on 2 types of data, and each type of data is retrieved a different way.  |
| Non-native language mistakes | "Firstly you need to..." |

***

# ORIGINAL TEXT: Integrate with cloud platforms for CMP FinOps

To use the Cloud Management Platform (CMP) FinOps solution, firstly you need to retrieve cloud data from the cloud platforms that we support: Amazon Web Services (AWS), Azure, and Google Cloud Platform (GCP).

The CMP FinOps solution uses two types of cloud data:

- Cloud billing data - The CMP FinOps' cloud cost visualization and optimization functionalities, including cost governance reports, cloud insights, and cloud cost limits, are all based on the retrieved billing data.
- Cloud account data - The CMP FinOps account management functionality enables you to centrally manage cloud accounts of supported cloud platforms.

You need to set up two types of integrations to retrieve the cloud data:

- Cloud Cost Data Provider-based integrations that retrieve cloud billing data
- Integration Studio-based integrations that import cloud account data

See these topics for how to set up the integrations to retrieve cloud data from each cloud platform:

- [Integrate with AWS for CMP FinOps](https://docs.microfocus.com/doc/SMAX/25.1/SyncAWSProvider)
- [Integrate with Azure for CMP FinOps](https://docs.microfocus.com/doc/SMAX/25.1/SyncAzureProvider)
- [Integrate with GCP for CMP FinOps](https://docs.microfocus.com/doc/SMAX/25.1/SyncGCPProvider)

## Related topics ##

- [Integration Studio](https://docs.microfocus.com/doc/SMAX/25.1/IntegrationHub)
- [Cloud cost data providers](https://docs.microfocus.com/doc/SMAX/25.1/CGROIntegrations)
- [Cloud account management](https://docs.microfocus.com/doc/SMAX/25.1/AccountMgmt)
- [Cost governance reports](https://docs.microfocus.com/doc/SMAX/25.1/ShowbackReports)

***

# EDITED TEXT: Integrate with cloud platforms to enable CMP FinOps

Cloud Management Platform (CMP) FinOps uses two types of data: cloud account data and cloud cost data. Before you can use CMP FinOps, you must set up two integrations with your cloud provider to retrieve this data.

## Cloud account data ##

CMP FinOps uses cloud account data to help you manage and configure your cloud accounts.

You can set up the integration to retrieve cloud account data using Integration Studio, Service Management's built-in integration platform.

## Cloud cost data ##

CMP FinOps uses cloud cost data to provide cost visualizations and suggest improvements. This includes cloud cost governance reports, cloud insights, and cloud cost limits.

You can't set up an integration to retrieve cloud cost data using Integration Studio, as CMP FinOps retrieves this data differently for each cloud provider. You must instead set up a Cloud Cost Data Provider in the **Admin & Providers** section of Service Management.

## Related topics ##

- To learn how to set up these integrations with AWS, see [Integrate with AWS for CMP FinOps](https://doc/SMAX/25.1/SyncAWSProvider).
- To learn how to set up these integrations with Azure, see [Integrate with Azure for CMP FinOps](https://doc/SMAX/25.1/SyncAzureProvider).
- To learn how to set up these integrations with GCP, see [Integrate with GCP for CMP FinOp](https://doc/SMAX/25.1/SyncGCPProvider).
- For general information about Integration Studio, see [Integration Studio](https://doc/SMAX/25.1/IntegrationHub).
- For general information about Cloud Cost Data Providers, see [Cloud cost data providers](https://doc/SMAX/25.1/CGROIntegrations).
- For an introduction to FinOps, see [Get started with CMP FinOps](https://doc/SMAX/25.1/IntegrationHub).
