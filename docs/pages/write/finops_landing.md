---
title: Integrate with cloud platforms for CMP FinOps
layout: default
parent: Writing
nav_order: 2
---

# Integrate with cloud platforms for CMP FinOps
{: .no_toc }

To use the Cloud Management Platform (CMP) FinOps solution, firstly you need to retrieve cloud data from the cloud platforms that we support: Amazon Web Services (AWS), Azure, and Google Cloud Platform (GCP).

The CMP FinOps solution uses two types of cloud data:

*   Cloud billing data – The CMP FinOps' cloud cost visualization and optimization functionalities, including cost governance reports, cloud insights, and cloud cost limits, are all based on the retrieved billing data.
*   Cloud account data – The CMP FinOps account management functionality enables you to centrally manage cloud accounts of supported cloud platforms.

You need to set up two types of integrations to retrieve the cloud data:

*   Cloud Cost Data Provider-based integrations that retrieve cloud billing data
*   Integration Studio-based integrations that import cloud account data

See these topics for how to set up the integrations to retrieve cloud data from each cloud platform:

*   [Integrate with AWS for CMP FinOps](/doc/SMAX/Main/SyncAWSProvider "Integrate with AWS for CMP FinOps")
*   [Integrate with Azure for CMP FinOps](/doc/SMAX/Main/SyncAzureProvider "Integrate with Azure for CMP FinOps")
*   [Integrate with GCP for CMP FinOps](/doc/SMAX/Main/SyncGCPProvider "Integrate with GCP for CMP FinOps")