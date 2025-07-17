---
title: "Example 3: Integration doc"
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

**Summary of issues: 
- ESL: long not massive
- Passive voice
- Tech terms: the kubelet not "Kubelet"
- structure: Cause is part of symptoms.
- Fleisch-Kincaid reading
- Redundancies: "on a node that has CDF installed"

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

- [Integrate with AWS for CMP FinOps](https://docs.microfocus.com/doc/SMAX/2023.05/SyncAWSProvider)
- [Integrate with Azure for CMP FinOps](https://docs.microfocus.com/doc/SMAX/2023.05/SyncAzureProvider)
- [Integrate with GCP for CMP FinOps](https://docs.microfocus.com/doc/SMAX/2023.05/SyncGCPProvider)

## Related topics ##

- [Integration Studio](https://docs.microfocus.com/doc/SMAX/2023.05/IntegrationHub)
- [Cloud cost data providers](https://docs.microfocus.com/doc/SMAX/2023.05/CGROIntegrations)
- [Cloud account management](https://docs.microfocus.com/doc/SMAX/2023.05/AccountMgmt)
- [Cost governance reports](https://docs.microfocus.com/doc/SMAX/2023.05/ShowbackReports)

***

# EDITED TEXT: Integrations for CMP FinOps

Cloud Management Platform (CMP) FinOps uses two types of cloud data: account data and cost data. Before you can use CMP FinOps, you must set up two integrations with your cloud provider to collect this data.

## Cloud account data ##

CMP FinOps uses cloud account data to help you manage and configure your cloud accounts.

You must set up an integration to import cloud account data from your cloud provider. You can do this using Integration Studio, our built-in integration platform.

## Cloud cost data ##

CMP FinOps uses cloud cost data to provide cost visualizations and suggest improvements. This includes cloud cost governance reports, cloud insights, and cloud cost limits.

You must set up an integration to fetch cloud cost data from your cloud provider. You can't do this using Integration Studio, as CMP FinOps fetches this data differently for each cloud provider. You must instead set up a Cloud Cost Data Provider in the Admin & Providers section.

## Related topics ##

- To learn how to set up these integrations with AWS, see [Integrate with AWS for CMP FinOps](https://doc/SMAX/Main/SyncAWSProvider).
- To learn how to set up these integrations with Azure, see [Integrate with Azure for CMP FinOps](https://doc/SMAX/Main/SyncAzureProvider).
- To learn how to set up these integrations with GCP, see [Integrate with GCP for CMP FinOp](https://doc/SMAX/Main/SyncGCPProvider).
- For general information about Integration Studio, see [Integration Studio](https://doc/SMAX/Main/IntegrationHub).
- For general information about Cloud Cost Data Providers, see [Cloud cost data providers](https://doc/SMAX/Main/CGROIntegrations).
- For basic information about FinOps, see [Get started with CMP FinOps](https://doc/SMAX/Main/IntegrationHub).
