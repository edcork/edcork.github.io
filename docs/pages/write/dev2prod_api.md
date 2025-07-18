---
title: Dev2Prod REST API
layout: default
parent: Writing
nav_order: 4
---

# Dev2Prod REST API
{: .no_toc }

**On this page**

> - TOC
> {:toc}

<p>Service Management provides a Dev2Prod API to &quot;copy&quot; configuration or data from a development tenant to a production tenant (or between two development tenants) to synchronize and align environments.</p>

## Reference

<p>The following endpoints are available:</p>

<ul>
	<li><code>/export/types/{package_id}</code></li>
	<li><code>/export/{id}</code></li>
	<li><code>/import/{id}</code></li>
	<li><code>/import/</code></li>
</ul>

<h2>/export/types/{package_id}</h2>

<p>Exports a customized package (created in Package Manager) on the source tenant to&nbsp;the File Repository Service (FRS).&nbsp;</p>

<h6>URL structure</h6>

<p><code>https://{serverAddress}/rest/{tenant_id}/dev2prod/export/types/{package_id}</code></p>

<h6>Method</h6>

<p><code>POST</code></p>

<h6>Parameters</h6>

<ul>
	<li><code>{tenant_id}</code>: The tenant ID of the Service Management tenant.&nbsp;</li>
	<li><code>{package_id}</code>:&nbsp;The ID of the export package.</li>
</ul>

<h6>Example call</h6>

<pre>
<code>https://company.net/rest/123456789/dev2prod/export/types/54321</code></pre>

<h6>Example request body</h6>

<pre>
<code>{}</code></pre>

<h6>Example response</h6>

<pre>
<code>{
 "Id": "66fabdf1e4b06908b04d4051"
}</code></pre>

<h6>Error codes</h6>

<ul>
	<li><code>400</code>: Invalid Request</li>
	<li><code>401</code>: Unauthorized</li>
	<li><code>403</code>:&nbsp;Forbidden</li>
	<li><code>404</code>:&nbsp;Page/Resource was not found</li>
	<li><code>500</code>:&nbsp;Internal Server Error</li>
</ul>

<h2>/export/{id}</h2>

<p>Gets the status of an export process.&nbsp;</p>

<h6>URL structure</h6>

<p><code>https://{serverAddress}/rest/{tenant_id}/dev2prod/export/{id}</code></p>

<h6>Method</h6>

<p><code>GET</code></p>

<h6>Parameters</h6>

<ul>
	<li><code>{tenant_id}</code>: The tenant ID of the Service Management tenant.&nbsp;</li>
	<li><code>{id}</code>:&nbsp;The ID of the export process.</li>
</ul>

<h6>Example call</h6>

<pre>
<code>https://company.net/rest/123456789/dev2prod/export/66fabdf1e4b06908b04d4051</code></pre>

<h6>Example response</h6>

<pre>
<code>	{
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
	}</code></pre>

<h6>Error codes</h6>

<ul>
	<li><code>400</code>: Invalid Request</li>
	<li><code>401</code>: Unauthorized</li>
	<li><code>403</code>:&nbsp;Forbidden</li>
	<li><code>404</code>:&nbsp;Page/Resource was not found</li>
	<li><code>500</code>:&nbsp;Internal Server Error</li>
</ul>

<h2>/import/{id}</h2>

<p>Gets the status of an import process.</p>

<h6>URL structure</h6>

<p><code>https://{serverAddress}/rest/{tenant_id}/dev2prod/import/{id}</code></p>

<h6>Method</h6>

<p><code>GET</code></p>

<h6>Parameters</h6>

<ul>
	<li><code>{tenant_id}</code>: The tenant ID of the Service Management tenant.&nbsp;</li>
	<li><code>{id}</code>:&nbsp;The ID of the import process.</li>
</ul>

<h6>Example call</h6>

<pre>
<code>https://company.net/rest/123456789/dev2prod/import/66fabdf1e4b06908b04d4051</code></pre>

<h6>Example response - success</h6>

<pre>
<code>{
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
}</code></pre>

<h6>Error codes</h6>

<ul>
	<li><code>400</code>: Invalid Request</li>
	<li><code>401</code>: Unauthorized</li>
	<li><code>403</code>:&nbsp;Forbidden</li>
	<li><code>404</code>:&nbsp;Page/Resource was not found</li>
	<li><code>500</code>:&nbsp;Internal Server Error</li>
</ul>

<h2>/import/</h2>

<p>Imports a Dev2Prod package to the current tenant.</p>

<h6>URL structure</h6>

<p><code>https://{serverAddress}/rest/{tenant_id}/dev2prod/import</code></p>

<h6>Method</h6>

<p><code>POST</code></p>

<h6>Parameters</h6>

<ul>
	<li><code>{tenant_id}</code>: The tenant ID of the Service Management tenant.&nbsp;</li>
	<li><code>dryRun</code>:&nbsp;Simulates the import process. Helps to find&nbsp;any conflicts or errors without comitting any changes.</li>
</ul>

<h6>Example call</h6>

<pre>
<code>https://company.net/rest/123456789/dev2prod/import?dryRun=true</code></pre>

<h6>Example request body</h6>

<pre>
<code>{
  "FileId": "9bf82520-f087-4763-af10-cf1ed38d893d"
}</code></pre>

<h6>Example response</h6>

<pre>
<code>{
 "Id": "67975cd8e4b0c0508491541f"
}</code></pre>

<h6>Error codes</h6>

<ul>
	<li><code>400</code>: Invalid Request</li>
	<li><code>401</code>: Unauthorized</li>
	<li><code>403</code>:&nbsp;Forbidden</li>
	<li><code>404</code>:&nbsp;Page/Resource was not found</li>
	<li><code>500</code>:&nbsp;Internal Server Error</li>
</ul>

## Use case: Use API calls to perform a synchronization

<p>Service Management provides a&nbsp;REST API&nbsp;that, together with the Case Exchange API, you can use to perform Dev2Prod synchronization. Reference information these APIs is available in the following topics:</p>

<ul>
	<li><a href="/doc/423/25.2/dev2prodapi" title="Dev2Prod REST API">Dev2Prod REST API</a></li>
	<li><a href="/doc/423/25.2/caseexchangeapi" title="Case Exchange REST API">Case Exchange REST API</a></li>
</ul>

<h3>Prerequisites</h3>

<p>You have already generated a full or granular export package on the source tenant, as described above.</p>

<h3>Workflow and examples</h3>

<p>The workflow is as follows:</p>

<ol>
	<li>Run the <code>https://{serverAddress}/rest/{tenant_id}/dev2prod/export/types/{id}</code>&nbsp;POST method API to export the package to&nbsp;the File Repository Service (FRS). The expected response is the export ID.

	<p><strong>Example</strong><br />
	This example exports package &quot;54321&quot; on tenant 123456789.<br />
	<br />
	API:</p>

	<pre>
<code>https://company.net/rest/123456789/dev2prod/export/types/54321</code></pre>
	<br />
	Response body:
	<pre>
<code>{
 "Id": "66fabdf1e4b06908b04d4051"
}</code></pre>
	</li>
	<li>Use the export ID returned in the previous step to run the <code>https://{serverAddress}/rest/{tenant_id}/dev2prod/export/{id}</code>&nbsp;GET method API and&nbsp;view the export details.
	<p><strong>Example</strong><br />
	This example queries export &quot;66fabdf1e4b06908b04d4051&quot; on tenant 123456789.<br />
	<br />
	API:</p>

	<pre>
<code>https://company.net/rest/123456789/dev2prod/export/66fabdf1e4b06908b04d4051</code></pre>
	<br />
	Response body:
	<pre>
<code>	{
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
	}</code></pre>
	</li>
	<li>Run the <code>https://{serverAddress}/rest/{tenant_id}/ces/attachment/{attachment_id}</code>&nbsp;GET method API to download the exported package to the source tenant. Use the <code>FileID</code> value from the previous response as the attachment ID. The expected response is ?<br />
	&nbsp;
	<p><strong>Example</strong><br />
	This example downloads package &quot;c7e87b89-f214-4766-8032-bba6967e1c49&quot; on tenant 123456789.<br />
	<br />
	API:</p>

	<pre>
<code>https://company.net/rest/123456789/dev2prod/ces/attachment/c7e87b89-f214-4766-8032-bba6967e1c49</code></pre>
	</li>
	<li>Run the <code>https://{serverAddress}/rest/{tenant_id}/ces/attachment</code>&nbsp;POST method API to upload the package to FRS.<br />
	&nbsp;
	<p><strong>Example</strong><br />
	This example uploads package &quot;??&quot; on tenant 123456789.<br />
	<br />
	API:</p>

	<pre>
<code>https://company.net/rest/123456789/ces/attachment</code></pre>
	<br />
	Request body:
	<pre>
<code>{
 ??
}</code></pre>
	<br />
	Response body:
	<pre>
<code>{
 "Id": "66fabdf1e4b06908b04d4051"
}</code></pre>
	</li>
	<li>Run the <code>https://{serverAddress}/rest/{tenant_id}/dev2prod/import?dryRun=true</code>&nbsp;POST method API to simulate importing the package to the target tenant.<br />
	&nbsp;
	<p><strong>Example</strong><br />
	This example simulates importing package &quot;c7e87b89-f214-4766-8032-bba6967e1c49&quot; on tenant 123456789.<br />
	<br />
	API:</p>

	<pre>
<code>https://company.net/rest/123456789/dev2prod/import?dryRun=true</code></pre>
	<br />
	Request body:
	<pre>
<code>{
  "FileId": "c7e87b89-f214-4766-8032-bba6967e1c49"
}</code></pre>
	<br />
	Response body:
	<pre>
<code>{
 "Id": "66fabdf1e4b06908b04d4051"
}</code></pre>
	</li>
	<li>Run the <code>https://{serverAddress}/rest/{tenant_id}/dev2prod/import/{id}</code>&nbsp;GET method API to check the import status. If there are no errors, the import dry-run was successful, and you can import the package.<br />
	&nbsp;
	<p><strong>Example</strong><br />
	This example checks the status of import &quot;66fabdf1e4b06908b04d4051&quot; on tenant 123456789.<br />
	<br />
	API:</p>

	<pre>
<code>https://company.net/rest/123456789/dev2prod/import/66fabdf1e4b06908b04d4051</code></pre>
	<br />
	Response body:
	<pre>
<code>{
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
}</code></pre>
	</li>
	<li>Run the <code>https://{serverAddress}/rest/{tenant_id}/dev2prod/import</code>&nbsp;POST method API to import the package to the source tenant.<br />
	&nbsp;
	<p><strong>Example</strong><br />
	This example imports package &quot;c7e87b89-f214-4766-8032-bba6967e1c49&quot; on tenant 123456789.<br />
	<br />
	API:</p>

	<pre>
<code>https://company.net/rest/123456789/dev2prod/import</code></pre>
	<br />
	Request body:
	<pre>
<code>{
  "FileId": "c7e87b89-f214-4766-8032-bba6967e1c49"
}</code></pre>
	Response body:

	<pre>
<code>{
 "Id": "66fabdf1e4b06908b04d4051"
}</code></pre>
	</li>
</ol>
