---
title: Dev2Prod REST API
layout: default
parent: Writing
nav_order: 4
has_toc: false
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

The Dev2Prod API includes the following endpoints:

- `/export/types/{package_id}`
- `/export/{id}`
- `/import/{id}`
- `/import/`

## /export/types/{package_id} ##

Exports a customized package (created in Package Manager) on the source tenant to the File Repository Service (FRS).

### URL structure ###
{: .no_toc }

`https://{serverAddress}/rest/{tenant_id}/dev2prod/export/types/{package_id}`

### Method ###
{: .no_toc }

`POST`

### Parameters ###
{: .no_toc }

- `{tenant_id}`: The tenant ID of the Service Management tenant. 
- `{package_id}`: The ID of the export package.

### Example call ###
{: .no_toc }

```
https://company.net/rest/123456789/dev2prod/export/types/54321
```

### Example request body ###
{: .no_toc }

```
{}
```

### Example response ###
{: .no_toc }

```
{
 "Id": "66fabdf1e4b06908b04d4051"
}
```

### Error codes ###
{: .no_toc }

- `400`: Invalid Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Page/Resource was not found
- `500`: Internal Server Error

## /export/{id} ##

Gets the status of an export process. 

### URL structure ###
{: .no_toc }

<p><code>https://{serverAddress}/rest/{tenant_id}/dev2prod/export/{id}</code></p>

### Method ###
{: .no_toc }

`GET`

### Parameters ###
{: .no_toc }

- `{tenant_id}`: The tenant ID of the Service Management tenant. 
- `{id}`: The ID of the export process.

### Example call ###
{: .no_toc }

```
https://company.net/rest/123456789/dev2prod/export/66fabdf1e4b06908b04d4051
```

### Example response ###
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

### Error codes ###
{: .no_toc }

- `400`: Invalid Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Page/Resource was not found
- `500`: Internal Server Error

## /import/{id} ##

Gets the status of an import process.

### URL structure ###
{: .no_toc }

`https://{serverAddress}/rest/{tenant_id}/dev2prod/import/{id}`

### Method ###
{: .no_toc }

`GET`

### Parameters ###
{: .no_toc }

- `{tenant_id}`: The tenant ID of the Service Management tenant.
- `{id}`: The ID of the import process.

### Example call ###
{: .no_toc }

```
https://company.net/rest/123456789/dev2prod/import/66fabdf1e4b06908b04d4051
```

### Example response - success ###
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

### Error codes ###
{: .no_toc }

- `400`: Invalid Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Page/Resource was not found
- `500`: Internal Server Error

## /import ##

Imports a Dev2Prod package to the current tenant.

### URL structure ###
{: .no_toc }

`https://{serverAddress}/rest/{tenant_id}/dev2prod/import`

### Method ###
{: .no_toc }

`POST`

### Parameters ###
{: .no_toc }

- `{tenant_id}`: The tenant ID of the Service Management tenant. 
- `dryRun`: Simulates the import process. Helps to find any conflicts or errors without committing any changes.

### Example call ###
{: .no_toc }

```
https://company.net/rest/123456789/dev2prod/import?dryRun=true
```

### Example request body ###
{: .no_toc }

```
{
  "FileId": "9bf82520-f087-4763-af10-cf1ed38d893d"
}
```

### Example response ###
{: .no_toc }

```
{
 "Id": "67975cd8e4b0c0508491541f"
}
```

### Error codes ###
{: .no_toc }

- `400`: Invalid Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Page/Resource was not found
- `500`: Internal Server Error

