---
title: Create an agreement model
layout: default
parent: Record models
nav_order: 1
---

**On this page**

> - TOC
> {:toc}

<p>There are two methods to create an agreement model.</p>

<h2 class="mw-headline" id="Method_1:_create_a_change_model_from_an_existing_record">Method 1: create an agreement model from an existing record</h2>

<ol>
	<li>
	<p>From the <span class="SAW_VariablesMain_menu">main menu</span>, select <strong>Plan</strong>&nbsp;&gt;<b> Service Level</b>, and then select <strong>Service Agreements</strong>, <strong>Support Agreements</strong>, or <strong>Human Resources Agreements</strong> from the drop-down menu. Service Management displays a list of the selected type of agreement record.</p>
	</li>
	<li>
	<p>Select the record you want to use as the model.</p>

	<p>Click the record identifier in the <b>ID</b> column to display the selected record.</p>
	</li>
	<li>
	<p>Click <b>More &gt; Create model from record</b>. Service Management displays the new model form with the values copied from the original record.</p>

	<p>Every agreement model created this way takes all the field values from the existing record, including user options, but excluding:</p>

	<ul>
		<li>
		<p>Service offerings</p>
		</li>
		<li>
		<p>Workflow status</p>
		</li>
	</ul>

	<p><br />
	Note that the title and description of the record are copied to the default values of section the model. You must enter a new title and description for the model itself.</p>
	</li>
	<li>
	<p>Edit the model as required.</p>
	</li>
	<li>
	<p>Click <img alt="Save" data-file-height="21" data-file-width="20" height="21" src="/file/images/6/66/2018.08_Helpcenter/Resources/Images/Icons/SaveIcon.png" width="20" /> <b>Save</b>&nbsp;on the toolbar.</p>
	</li>
</ol>

## Method 2: create an agreement model from scratch ##

<div class="admonition admonition-note-content" data-admonition-icon="admonition-note-icon" data-admonition-type="Note">
<div>The record fields displayed are the same as those detailed in <a href="/doc/423/25.2/addsla" title="Create a change record">Create a Service Level Agreement record</a>. However, out-of-the-box, Service Management disables some fields when creating an agreement model. If you have the appropriate rights, you can customize this behavior.</div>
</div>

<ol>
	<li>
	<p>From the <span class="SAW_VariablesMain_menu">main menu</span>, select <b>Plan</b>&nbsp;&gt; <b>Service Level</b>&nbsp;&gt; <strong>Agreement&nbsp;</strong><b>Models</b>&nbsp;&gt;&nbsp;<b>New</b>. Service Management displays the <b>New Model</b> form.</p>
	</li>
	<li>
	<p>Complete the <b>General model details</b> section.</p>

	<table>
		<tbody>
			<tr>
				<th>Field</th>
				<th>Description</th>
			</tr>
			<tr>
				<td>Title</td>
				<td>
				<p>A name for the model.</p>

				<p><b>Best practice</b>: Choose a meaningful, descriptive, and relatively short name. The name is often the only identification used in selection lists and in other areas to identify components.</p>
				</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>
				<p>A description that captures the details of the model.</p>
				</td>
			</tr>
			<tr>
				<td>Agreement flavor</td>
				<td>
				<p>Choose whether this is a model for service agreements, support agreements, or human resources agreements.</p>
				</td>
			</tr>
			<tr>
				<td>Agreement type</td>
				<td>The type of agreement record sets the <span class="SAW_VariablesWorkflow">workflow</span> type.</td>
			</tr>
		</tbody>
	</table>
	</li>
	<li>
	<p>Click <b>Attachments</b> &gt; <b>Add attachment</b>&nbsp;to upload a file to the agreement model.</p>

	<div class="admonition admonition-note-content" data-admonition-icon="admonition-note-icon" data-admonition-type="Note">
	<div>
	<ul>
		<li>The supported attachment file formats and the maximum file size of an attachment are defined in the tenant's <b>Application settings</b> tab in Suite Administration.</li>
		<li>
		<p>If the Attachments field has been defined as encrypted for this record type and you are a member of an encryption domain, click <b>Add encrypted attachments</b> to attach an encrypted file to the record.</p>
		</li>
		<li>
		<p>Attachments aren't visible in the <span class="SAW_VariablesSelf-Service_Portal">Service Portal</span>.</p>
		</li>
	</ul>
	</div>
	</div>
	</li>
	<li>
	<p>Click the <b>Approvals</b> tab to add approvals to the model.</p>

	<p>For more information about approvals, see <a href="/doc/423/25.2/taskplans" title="Task plans">Task plans</a>.</p>
	</li>
	<li>
	<p>Click the&nbsp;<b>Default values</b>&nbsp;tab and complete the information relevant for the model.</p>

	<ul>
		<li>
		<p>Details</p>

		<table>
			<tbody>
				<tr>
					<th>Field</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>Title</td>
					<td>
					<p>Type a word or phrase that's a unique identifier for the Service Level Agreements created with this model. It should be a value that makes it easy for the end user to understand the purpose of the Service Level Agreement.</p>

					<p><b>Example</b>: Initial review for priority&nbsp;1 incidents.</p>
					</td>
				</tr>
				<tr>
					<td>Default agreement</td>
					<td>
					<p>Select this check box to make the Service Level Agreement records created with this model the default. The default Service Level Agreement (for incidents, changes, support requests, tasks, problems, or custom record types as appropriate) is automatically applied to all incidents and support requests which don't have a matching Service Level target Definition.</p>
					</td>
				</tr>
				<tr>
					<td>Owner</td>
					<td>
					<p>Choose the Service Level Agreement owner for records created with this model.</p>

					<p><b>Example</b>: The owner might be the Service Level Manager.</p>

					<p>If no value is selected, the owner is set to the current user by default.</p>
					</td>
				</tr>
				<tr>
					<td>Technical group</td>
					<td>Choose the technical group to which records created with this model are assigned.</td>
				</tr>
				<tr>
					<td>Financial group</td>
					<td>Choose the financial group to which records created with this model are assigned.</td>
				</tr>
				<tr>
					<td>Description</td>
					<td>Enter a description for the Service Level Agreement records created with this model. It's helpful for other users to understand the purpose and objectives of this Service Level Agreement.</td>
				</tr>
			</tbody>
		</table>
		</li>
		<li>
		<p>Requirement</p>

		<table>
			<tbody>
				<tr>
					<th>Field</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>Cost</td>
					<td>The cost associated with Service Level Agreements created with this model.</td>
				</tr>
				<tr>
					<td>Effort</td>
					<td>The effort associated with Service Level Agreements created with this model.</td>
				</tr>
				<tr>
					<td>Validity start date</td>
					<td>The start date of the period of validity of Service Level Agreements created with this model.</td>
				</tr>
				<tr>
					<td>Validity end date</td>
					<td>The end date of the period of validity of&nbsp;Service Level Agreements created with this model.</td>
				</tr>
			</tbody>
		</table>
		</li>
		<li>
		<p>Review and improvement</p>

		<table>
			<tbody>
				<tr>
					<th>Field</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>Next review date</td>
					<td>The date when Service Level Agreements created with this model must next be reviewed.</td>
				</tr>
				<tr>
					<td>Service quality report</td>
					<td>The service quality report associated with Service Level Agreements created with this model.</td>
				</tr>
				<tr>
					<td>Improvement measures</td>
					<td>The improvement measures associated with Service Level Agreements created with this model.</td>
				</tr>
				<tr>
					<td>Service improvement plan</td>
					<td>The service improvement plan associated with Service Level Agreements created with this model.</td>
				</tr>
			</tbody>
		</table>
		</li>
	</ul>
	</li>
	<li>
	<p>Click <img alt="Save" data-file-height="21" data-file-width="20" height="21" src="/file/images/6/66/2018.08_Helpcenter/Resources/Images/Icons/SaveIcon.png" width="20" /> <b>Save</b>&nbsp;on the toolbar.</p>
	</li>
</ol>

<div class="admonition admonition-note-content" data-admonition-icon="admonition-note-icon" data-admonition-type="Note">
<div>
<p>When you create a model, Service Management automatically creates the <span class="SAW_VariablesWorkflow">workflow</span> and displays the model in draft status.</p>

<ul>
	<li>Click the model's <span class="SAW_VariablesWorkflow">workflow</span> tab to see the <span class="SAW_VariablesWorkflow">workflow</span> and status.</li>
	<li>You may edit the agreement type only when the model is in draft status.</li>
	<li>To change the status to Active, you must have the appropriate rights.&nbsp;</li>
	<li>In order for the model to be available for selection when creating Service Level Agreement records, its status must be Active.</li>
</ul>
</div>
</div>

<h2 class="mw-headline" id="Related_topics">Related topics</h2>

<ul>
	<li><a href="/doc/423/25.2/editagreementmodel" title="Edit a change model">How to edit an agreement model</a></li>
	<li><a href="/doc/423/25.2/retireagreementmodel" title="How to retire an agreement model">How to retire an agreement model</a></li>
</ul>
