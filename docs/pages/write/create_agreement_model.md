---
title: Create an agreement model
layout: default
parent: Service Management record models
nav_order: 1
has_toc: false
---

# Create an agreement model
{: .no_toc }

<details close markdown="block">
  <summary>
  
    On this page
	
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

There are two methods to create an agreement model.

## Method 1: Create an agreement model from an existing record

When you create an agreement model created this way, all field values from the existing record (including user options, but excluding service offerings and workflow status) are copied to the draft model. You can then edit the values as required.

1.  From the main menu, select **Plan** > **Service Level**, and then select **Service Agreements**, **Support Agreements**, or **Human Resources Agreements** from the drop-down menu. 

	Service Management displays a list of the selected type of agreement record.
    
2.  In the **ID** column, click the number of the agreement record that you want to use as a model. 

	Service Management displays the agreement record details.
    
3.  Click **More** > **Create model from record**. 

	Service Management displays the new model form, populated with the values copied from the original record.
  
4.  Edit the model as required.

	{: .note }
	>The title and description of the original record are copied to the default values in the model. You must enter a new title and description for the model itself.
    
5.  On the toolbar, click **Save**.

## Method 2: Create an agreement model from scratch ##

1.  From the main menu, select **Plan** > **Service Level** > **Agreement** **Models** > **New**. Service Management displays the **New Model** form.
    
2.  Complete the **General model details** section.

	<table>
		<tbody>
			<tr>
				<th>Field</th>
				<th>Description</th>
			</tr>
			<tr>
				<td>Title</td>
				<td>
				<p>A meaningful, descriptive, and relatively short name for the model. The model name is often the only identifier displayed in selection lists.</p>
				</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>
				<p>A description that summarizes the model details.</p>
				</td>
			</tr>
			<tr>
				<td>Agreement flavor</td>
				<td>
				<p>Whether this model applies to service agreements, support agreements, or human resources agreements.</p>
				</td>
			</tr>
			<tr>
				<td>Agreement type</td>
				<td>The type of agreement record sets the workflow type.</td>
			</tr>
		</tbody>
	</table>

3. (Optional) Click **Attachments** > **Add attachment** to upload a file to the agreement model.

	{: .note }
	>Supported attachment file formats and the maximum file size are defined in the tenant's **Application settings** tab in Suite Administration.
	>
	>If the **Attachments** field of agreement models is encrypted and you are a member of an encryption domain, you can click **Add encrypted attachments** to attach an encrypted file to the record.
	>
	>Attachments to models aren't visible in the Service Portal.

4. (Optional) Click the **Approvals** tab to add approvals to the model.

	For more information about approvals, see <span style="color: red;"><u>Task plans</u></span>.

5. Click the **Default values** tab and enter the values that you want to include in the model.

	**Details**

	<table>
		<tbody>
			<tr>
				<th>Field</th>
				<th>Description</th>
			</tr>
			<tr>
				<td>Title</td>
				<td>
				<p>A unique word or phrase that's an identifier for the agreement records created with this model. This should be a value that makes it easy for end users to understand the purpose of the agreement record.</p>

				<p><b>Example</b>: Initial review for priority 1 incidents</p>
				</td>
			</tr>
			<tr>
				<td>Default agreement</td>
				<td>
				<p>This option applies this model by default when end users create agreement records. </p>
				</td>
			</tr>
			<tr>
				<td>Owner</td>
				<td>
				<p>The Service Level Agreement owner for records created with this model. If you leave this field empty, the Service Level Agreement owner defaults to the current user when end users create a record with this model.</p>

				<p><b>Example</b>: Service Level Manager.</p>

				<p></p>
				</td>
			</tr>
			<tr>
				<td>Technical group</td>
				<td>The technical group to which records created with this model are assigned.</td>
			</tr>
			<tr>
				<td>Financial group</td>
				<td>The financial group to which records created with this model are assigned.</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>A description of the records created with this model. </td>
			</tr>
		</tbody>
	</table>
		
	**Requirement**

	<table>
		<tbody>
			<tr>
				<th>Field</th>
				<th>Description</th>
			</tr>
			<tr>
				<td>Cost</td>
				<td>The cost of agreement records created with this model.</td>
			</tr>
			<tr>
				<td>Effort</td>
				<td>The effort associated with agreement records created with this model.</td>
			</tr>
			<tr>
				<td>Validity start date</td>
				<td>The start date of the period of validity of agreement records created with this model.</td>
			</tr>
			<tr>
				<td>Validity end date</td>
				<td>The end date of the period of validity of agreement records created with this model.</td>
			</tr>
		</tbody>
	</table>
	
	**Review and improvement**

	<table>
		<tbody>
			<tr>
				<th>Field</th>
				<th>Description</th>
			</tr>
			<tr>
				<td>Next review date</td>
				<td>The date when agreement records created with this model must next be reviewed.</td>
			</tr>
			<tr>
				<td>Service quality report</td>
				<td>The service quality report associated with agreement records created with this model.</td>
			</tr>
			<tr>
				<td>Improvement measures</td>
				<td>The improvement measures associated with agreement records created with this model.</td>
			</tr>
			<tr>
				<td>Service improvement plan</td>
				<td>The service improvement plan associated with agreement records created with this model.</td>
			</tr>
		</tbody>
	</table>
		
6. On the toolbar, click **Save**.


## Activate the new agreement model

When you create a model, Service Management automatically creates its workflow and displays the model in Draft status. In order for the model to be available for selection when creating agreement records, its status must be Active.

To set a model's status to Active, click the model's workflow tab to see the workflow and status. On the toolbar, click **Activate**, and then click **Save**.

{: .note }
>To change the status to Active, you must have the appropriate rights.
>
>You may edit the agreement type only when the model has Draft status.

## Related topics
{: .no_toc }

- [Edit an agreement model](/pages/write/edit_agreement_model.html)
- [Retire an agreement model](/pages/write/retire_agreement_model.html)
