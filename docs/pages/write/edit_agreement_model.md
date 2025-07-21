---
title: Edit an agreement model
layout: default
parent: "Sample 2: Service Management record models"
nav_order: 2
has_toc: false
---

# Edit an agreement model
{: .no_toc }

When you edit an agreement model, the changes have no effect on existing service level records. However, they do affect all new service level records created after the edit.

You can edit multiple records simultaneously by selecting them in the grid and updating them in the **Preview** pane on the right. For more information, see <span style="color: red;"><u>Mass update</u></span>.

1. From the main menu, select **Plan** > **Service Level** > **Agreement Models**.

2. In the **ID** column, click the number of the agreement model that you want to edit. 

3. Edit the **General model details** section as required.

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
				<p>You can't edit this field once the model is created.</p>
				</td>
			</tr>
			<tr>
				<td>Agreement type</td>
				<td>You can't edit this field once the model is created.</td>
			</tr>
		</tbody>
	</table>

4. Click **Attachments** > **Add attachment** to upload a file to the agreement model.

	{: .note }
	>Supported attachment file formats and the maximum file size are defined in the tenant's **Application settings** tab in Suite Administration.
	>
	>If the **Attachments** field of agreement models is encrypted and you are a member of an encryption domain, you can click **Add encrypted attachments** to attach an encrypted file to the record.
	>
	>Attachments to models aren't visible in the Service Portal.
	
5. Click the **Workflow** tab to view and update the model's workflow. Note that to update the workflow status, you must have the appropriate rights.

6. Click the **Approvals** tab to add approvals to the model.

	For more information about approvals, see <span style="color: red;"><u>Task plans</u></span>.
	
7. Click the **Default values** tab to update the values that you want to include in the model.

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

10. Click the **Discussions** tab to view any relevant conversations about the model.

	For more information about discussions, see <span style="color: red;"><u>Discussions</u></span>.

11. To view changes or updates made to the record, click the **History** tab. For more information, see <span style="color: red;"><u>History</u></span>.

12. Click **Save**.

## Related topics
{: .no_toc }

- [Create an agreement model](/pages/write/create_agreement_model.html)
- [Retire an agreement model](/pages/write/retire_agreement_model.html)