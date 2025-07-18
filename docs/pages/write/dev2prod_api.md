---
title: Dev2Prod REST API
layout: default
parent: Writing
nav_order: 4
---

# Dev2Prod REST API
{: .no_toc }

<details close markdown="block">
  <summary>
  
    On this page
	
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

The Service Management Dev2Prod API enables you to synchronize configuration information or data from a development environment to a production environment (or between two development environments).  

## API reference ##  

The Dev2Prod API includes the following endpoints:

- `/export/types/{package_id}`
- `/export/{id}`
- `/import/{id}`
- `/import/`

### /export/types/{package_id} ###

Exports a customized package (created in Package Manager) on the source tenant to the File Repository Service (FRS).

#### URL structure ####
{: .no_toc }

`https://{serverAddress}/rest/{tenant_id}/dev2prod/export/types/{package_id}`

#### Method ####
{: .no_toc }

`POST`

#### Parameters ####
{: .no_toc }

- `{tenant_id}`: The tenant ID of the Service Management tenant. 
- `{package_id}`: The ID of the export package.

#### Example call ####
{: .no_toc }

```
https://company.net/rest/123456789/dev2prod/export/types/54321
```

#### Example request body ####
{: .no_toc }

```
{}
```

#### Example response ####
{: .no_toc }

```
{
 "Id": "66fabdf1e4b06908b04d4051"
}
```

#### Error codes ####
{: .no_toc }

- `400`: Invalid Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Page/Resource was not found
- `500`: Internal Server Error

### /export/{id} ###

Gets the status of an export process. 

#### URL structure ####
{: .no_toc }

<p><code>https://{serverAddress}/rest/{tenant_id}/dev2prod/export/{id}</code></p>

#### Method ####
{: .no_toc }

`GET`

#### Parameters ####
{: .no_toc }

- `{tenant_id}`: The tenant ID of the Service Management tenant. 
- `{id}`: The ID of the export process.

#### Example call ####
{: .no_toc }

```
https://company.net/rest/123456789/dev2prod/export/66fabdf1e4b06908b04d4051
```

#### Example response ####
{: .no_toc }

```
{
    "id": "6797556be4b0c05084915394",
    "PackageBundleName": "Package-10204-555500000-2025-01-27 09-44",
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
        }
    ],
    "OperationType": "Export"
}
```

#### Error codes ####
{: .no_toc }

- `400`: Invalid Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Page/Resource was not found
- `500`: Internal Server Error

### /import/{id} ###

Gets the status of an import process.

#### URL structure ####
{: .no_toc }

`https://{serverAddress}/rest/{tenant_id}/dev2prod/import/{id}`

#### Method ####
{: .no_toc }

`GET`

#### Parameters ####
{: .no_toc }

- `{tenant_id}`: The tenant ID of the Service Management tenant.
- `{id}`: The ID of the import process.

#### Example call ####
{: .no_toc }

```
https://company.net/rest/123456789/dev2prod/import/66fabdf1e4b06908b04d4051
```

#### Example response - success ####
{: .no_toc }

```
{
    "TimeToLive": 9946986,
    "StudioLocked": false,
    "SystemLocked": false,
    "id": "67975a80e4b0c050849153ae",
    "FileId": "9bf82520-f087-4763-af10-cf1ed38d893d",
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

#### Error codes ####
{: .no_toc }

- `400`: Invalid Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Page/Resource was not found
- `500`: Internal Server Error

### /import/ ###

Imports a Dev2Prod package to the current tenant.

#### URL structure ####
{: .no_toc }

`https://{serverAddress}/rest/{tenant_id}/dev2prod/import`

#### Method ####
{: .no_toc }

`POST`

#### Parameters ####
{: .no_toc }

- `{tenant_id}`: The tenant ID of the Service Management tenant. 
- `dryRun`: Simulates the import process. Helps to find any conflicts or errors without comitting any changes.

#### Example call ####
{: .no_toc }

```
https://company.net/rest/123456789/dev2prod/import?dryRun=true
```

#### Example request body ####
{: .no_toc }

```
{
  "FileId": "9bf82520-f087-4763-af10-cf1ed38d893d"
}
```

#### Example response ####
{: .no_toc }

```
{
 "Id": "67975cd8e4b0c0508491541f"
}
```

#### Error codes ####
{: .no_toc }

- `400`: Invalid Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Page/Resource was not found
- `500`: Internal Server Error

## Use case: Use API calls to synchronize two environments

To synchronize two environments using API calls, you will use the [Case Exchange REST API](/dummy) together with Dev2Prod REST API. 

### Prerequisites ###

You have already generated a full or granular export package on the source tenant. For detailed instructions how to do this, see [Dev2Prod - Synchronize your development and production tenants](/dummy).

### Workflow and examples ###

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