---
title: Use API calls to synchronize two environments
layout: default
has_toc: false
nav_exclude: true
---

## Related topics
{: .no_toc }
- For an example of how to use this API, see [Use API calls to synchronize two environments](/pages/write/dev2prod_use_case.html) 

parent: Dev2Prod REST API
nav_order: 1

# Use case: Use API calls to synchronize two environments
{: .no_toc }

<details close markdown="block">
  <summary>
  
    On this page
	
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

To synchronize two environments using API calls, you will use the [Case Exchange REST API](/dummy) together with Dev2Prod REST API. 

## Prerequisites ##

You have already generated a full or granular export package on the source tenant. For detailed instructions how to do this, see [Dev2Prod - Synchronize your development and production tenants](/dummy).

## Workflow and examples ##

1. Run the `https://{serverAddress}/rest/{tenant_id}/dev2prod/export/types/{id}` POST method API to export the package to the File Repository Service (FRS). The expected response is the export ID.

	**Example**<br />
	This example exports package **54321** on tenant **123456789**.
	- API: `https://company.net/rest/123456789/dev2prod/export/types/54321`
	- Response body: 
	```
{
 "Id": "66fabdf1e4b06908b04d4051"
}
```

2. Use the export ID returned in the previous step to run the `https://{serverAddress}/rest/{tenant_id}/dev2prod/export/{id}` GET method API and view the export details.
	
	**Example**<br />
	This example queries export **66fabdf1e4b06908b04d4051** on tenant **123456789**.
	- API: `https://company.net/rest/123456789/dev2prod/export/66fabdf1e4b06908b04d4051`
	- Response body:
	```
{
	"id": "6797556be4b0c05084915394",
	"PackageBundleName": "Package-54321-123456789-2025-01-27 09-44",
	"Status": "COMPLETED",
	"FileId": "c7e87b89-f214-4766-8032-bba6967e1c49",
	"StartTime": 1737971051843,
	"LastUpdateTime": 1737971053134,
	"ItemCount": 352,
	"Statistics": [
		{
			"PackageName": "metadata",
			"ItemCount": 0
		},
		{
			"PackageName": "workflow",
			"ItemCount": 24
		},
		{
			"PackageName": "formLayouts",
			"ItemCount": 117
		},
		{
			"PackageName": "customAction",
			"ItemCount": 0
		},
		{
			"PackageName": "indexConfiguration",
			"ItemCount": 0
		},
		{
			"PackageName": "featureInstances",
			"ItemCount": 26
		},
		{
			"PackageName": "uiComponentConfig",
			"ItemCount": 0
		},
		{
			"PackageName": "notificationTemplateDefinitions",
			"ItemCount": 88
		},
		{
			"PackageName": "notificationTemplateBodies",
			"ItemCount": 97
		},
		{
			"PackageName": "SLTTenantSetting",
			"ItemCount": 0
		},
		{
			"PackageName": "data",
			"ItemCount": 0
		},
		{
			"PackageName": "userOptionMetadata",
			"ItemCount": 0
		},
		{
			"PackageName": "rulesInEntity",
			"ItemCount": 0
		},
		{
			"PackageName": "many2manyRelations",
			"ItemCount": 0
		},
		{
			"PackageName": "attachments",
			"ItemCount": 0
		},
		{
			"PackageName": "customAppSltSettings",
			"ItemCount": 0
		},
		{
			"PackageName": "resourceBundles",
			"ItemCount": 0
		}
	],
	"OperationType": "Export"
}
```
3. Run the `https://{serverAddress}/rest/{tenant_id}/ces/attachment/{attachment_id}` GET method API to download the exported package to the source tenant. Use the `FileID` value from the previous response as the attachment ID.
	 
	**Example**<br />
	This example downloads package **c7e87b89-f214-4766-8032-bba6967e1c49** on tenant **123456789**.
	- API: `https://company.net/rest/123456789/dev2prod/ces/attachment/c7e87b89-f214-4766-8032-bba6967e1c49`
4. Run the `https://{serverAddress}/rest/{tenant_id}/ces/attachment` POST method API to upload the package to FRS.
	 
	**Example**<br />
	This example uploads package **c7e87b89-f214-4766-8032-bba6967e1c49** on tenant **123456789**.
	- API: `https://company.net/rest/123456789/ces/attachment`
	- Headers: Set **User-Agent** to **Apache-HttpClient/4.4.1**. 
	- Request body: Set to **Files[]**, and then click **Choose Files** to select the file to attach.
	- Response body:
```
{
 "Id": "66fabdf1e4b06908b04d4051"
}```
5. Run the `https://{serverAddress}/rest/{tenant_id}/dev2prod/import?dryRun=true` POST method API to simulate importing the package to the target tenant.
	 
	**Example**<br />
	This example simulates importing package **c7e87b89-f214-4766-8032-bba6967e1c49** on tenant **123456789**.
	- API: `https://company.net/rest/123456789/dev2prod/import?dryRun=true`
	- Request body: 
	```
{
  "FileId": "c7e87b89-f214-4766-8032-bba6967e1c49"
}
```
	- Response body:
	```
{
 "Id": "66fabdf1e4b06908b04d4051"
}
```
6. Run the `https://{serverAddress}/rest/{tenant_id}/dev2prod/import/{id}` GET method API to check the import status. If there are no errors, the dry run was successful, and you can import the package.
	 
	**Example**<br />
	This example checks the status of import **66fabdf1e4b06908b04d4051** on tenant **123456789**.
	- API: `https://company.net/rest/123456789/dev2prod/import/66fabdf1e4b06908b04d4051`
	- Response body: 
	```
{
"TimeToLive": 9946986,
"StudioLocked": false,
"SystemLocked": false,
"id": "66fabdf1e4b06908b04d4051",
"FileId": "c7e87b89-f214-4766-8032-bba6967e1c49",
"Status": "COMPLETED",
"DryRun": true,
"PackageManagerId": "67975a8be4b0c050849153b2",
"StartTime": 1737972352849,
"LastUpdateTime": 1737972406603,
"ProcessingServerName": "company-server",
"Results": [
	{
		"PackageName": "metadata",
		"Statistics": {
			"Modified": 300,
			"Removed": 0,
			"Failed": 0,
			"Skipped": 0
		},
		"Errors": [],
		"Warnings": []
	},
	{
		"PackageName": "SLTTenantSetting",
		"Statistics": {
			"Modified": 0,
			"Removed": 0,
			"Failed": 0,
			"Skipped": 0
		},
		"Errors": [],
		"Warnings": []
	},
	{
		"PackageName": "indexConfiguration",
		"Statistics": {
			"Modified": 26,
			"Removed": 0,
			"Failed": 0,
			"Skipped": 0
		},
		"Errors": [],
		"Warnings": []
	}
],
"Totals": {
	"Added": 0,
	"Modified": 326,
	"Removed": 0,
	"Failed": 0,
	"Skipped": 0
},
"OperationType": "Import"
}
```
7. Run the `https://{serverAddress}/rest/{tenant_id}/dev2prod/import` POST method API to import the package to the source tenant.
	 
	**Example**<br />
	This example imports package **c7e87b89-f214-4766-8032-bba6967e1c49** on tenant **123456789**.
	- API:`https://company.net/rest/123456789/dev2prod/import`
	- Request body:
	```
{
  "FileId": "c7e87b89-f214-4766-8032-bba6967e1c49"
}
```
	- Response body:
	```
{
 "Id": "66fabdf1e4b06908b04d4051"
}
```