---
title: Edit an agreement model
layout: default
parent: Record models
nav_order: 2
has_toc: false
---

**On this page**

> - TOC
> {:toc}

<div class="admonition admonition-note-content" data-admonition-icon="admonition-note-icon" data-admonition-type="Note">
<div>
<p>If you edit an agreement model, the changes have no effect on existing service level records, but affect all new service level records created after the edit.</p>
</div>
</div>

<p>You can edit multiple records simultaneously by selecting them in the grid and updating them in the Preview pane on the right. For more information, see <a href="/doc/smax/25.1/editrecpreview#Mass" title="Mass update">Mass update</a>.</p>

<ol>
	<li>
	<p>From the <span class="SAW_VariablesMain_menu" style="font-weight: normal;">main menu</span>, select <b>Plan</b> &gt; <b>Service Level </b>&gt;<b> Agreement Models</b>.</p>
	</li>
	<li>
	<p>Click the record identifier in the <b>ID</b> column to display the selected record.</p>

	<p>To filter the record list, click the <b>Add filter</b>&nbsp; <img alt="FilterByIcon.png" data-file-height="18" data-file-width="19" height="18" src="/file/images/c/cb/2018.08_Helpcenter/Resources/Images/Icons/FilterByIcon.png" width="19" /> button. For more information, see <a href="/doc/423/25.2/filters" title="Filters">Filters</a>.</p>
	</li>
	<li>
	<p>Edit the <b>General model details</b> section as required.</p>

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
				<p>You can't edit this field once the model is created.</p>
				</td>
			</tr>
			<tr>
				<td>Agreement type</td>
				<td>You can't edit this field once the model is created.</td>
			</tr>
		</tbody>
	</table>
	</li>
	<li>
	<p>Click <b>Attachments</b> &gt; <b>Add attachment</b> to upload a file to the agreement model.</p>

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
	<p>Click the <b>Workflow</b> tab, to view the <span class="SAW_VariablesWorkflow">workflow</span> for the model. Note that to change the status, you must have the appropriate rights.&nbsp;</p>
	</li>
	<li>
	<p>Click the <b>Approvals</b> tab to add approvals to the model.</p>

	<p>For more information about approvals, see&nbsp;<a href="/doc/423/25.2/taskplans" title="Task plans">Task plans</a>.</p>
	</li>
	<li>
	<p>Click the <b>Default values</b> tab and complete the information relevant to the model.</p>

	<div class="admonition admonition-note-content" data-admonition-icon="admonition-note-icon" data-admonition-type="Note">
	<div>
	<p>The record fields displayed are the same as those detailed in <a href="/doc/423/25.2/addsla" title="Create a change record">Create a Service Level Agreement record</a>. However, out-of-the-box, Service Management disables some fields when creating an agreement model. If you have the appropriate rights, you can customize this behavior.</p>
	</div>
	</div>

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
					<p>Type a word or phrase that's a unique identifier for this Service Level Agreement. It should be a value that makes it easy for the end user to understand the purpose of the Service Level Agreement.</p>

					<p><b>Example</b>: Initial review for priority&nbsp;1 incidents.</p>
					</td>
				</tr>
				<tr>
					<td>Default agreement</td>
					<td>
					<p>Select this check box to make this Service Level Agreement record the default. The default Service Level Agreement (for incidents, changes, support requests, tasks, problems, or custom record types as appropriate) is automatically applied to all incidents and support requests which don't have a matching Service Level target Definition.</p>
					</td>
				</tr>
				<tr>
					<td>Owner</td>
					<td>
					<p>Choose the Service Level Agreement owner.</p>

					<p><b>Example</b>: the owner might be the Service Level Manager.</p>

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
					<td>Enter a description for the Service Level Agreement. It's helpful for other users to understand the purpose and objectives of this Service Level Agreement.</td>
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
	<p>Click the <b>Group target sets</b>&nbsp;tab to add target sets to the model.</p>

	<table>
		<tbody>
			<tr>
				<th>Section</th>
				<th>Description</th>
			</tr>
			<tr>
				<td>Target Sets&nbsp;</td>
				<td>
				<p>The target set selected for the agreement is the same one selected in the <b>Target Sets</b> section in the General tab. You can select it from here also.</p>

				<p>The list of available target sets includes only target sets with a matching module:</p>

				<ul>
					<li>For <b>Support OLAs</b>, only the target sets of Type OLA with Incident, Support request, Change, Task, Problem, or customized record type selected as Module are available.</li>
					<li>For <b>Service&nbsp;OLAs</b>, only target sets of module Service Request of type OLA are available.</li>
				</ul>
				</td>
			</tr>
			<tr>
				<td>Group override rules</td>
				<td>
				<p>In the <b>Group override rules</b> section, you can define override rules to override the default target set for specified groups.</p>

				<ul>
					<li>
					<p>To add an override rule, click <img alt="PlusIcon.png" data-file-height="22" data-file-width="24" height="22" src="/file/images/6/64/2018.08_Helpcenter/Resources/Images/Icons/PlusIcon.png" width="24" /> <b>Add</b>. In the New group override rule dialog box, enter the following information:</p>

					<ul>
						<li><b>Name.</b> Enter a name for the rule</li>
						<li>
						<p><b>Groups.</b> Click in the <b>Groups by name</b> box to display a drop-down list of groups. Select the required groups to add.</p>

						<p>You can't select the same group in more than one override rule in an agreement.</p>
						</li>
						<li><b>Target sets.</b> Select the target sets. The target sets selected should be with a same Module
						<ul>
							<li>For <b>Support OLAs</b>, only the target sets of Type OLA with Incident, Support request, Change, Task, Problem, or customized record type selected as Module are available.</li>
							<li>For <b>Service&nbsp;OLAs</b>, only target sets of module Service Request of type OLA are available.</li>
						</ul>
						</li>
						<li>Click <b>Save</b> to save the rule.</li>
					</ul>
					</li>
					<li>To edit an override rule, select the required rule and click <img alt="EditIcon.png" data-file-height="21" data-file-width="24" height="21" src="/file/images/f/f0/2018.08_Helpcenter/Resources/Images/Icons/EditIcon.png" width="24" /> <b>Edit</b>.</li>
					<li>To delete an override rule, select the rule and click <img alt="DeleteIcon.png" data-file-height="26" data-file-width="26" height="26" src="/file/images/f/ff/2018.08_Helpcenter/Resources/Images/Icons/DeleteIcon.png" width="26" /> <b>Delete</b>.</li>
				</ul>

				<p>The maximum number of target sets that can be added is 500.</p>
				</td>
			</tr>
		</tbody>
	</table>
	</li>
	<li>
	<p>Click the <b>Discussions</b> tab to view any relevant conversations about the model.</p>

	<p>For more information about discussions, see <a href="/doc/423/25.2/discussions" title="Discussions">Discussions</a>.</p>
	</li>
	<li>To view changes or updates made to the record, click the <b>History</b> tab. For more information, see <a href="/doc/423/25.2/history" title="History">History</a>.</li>
	<li>
	<p>Click <b>Save</b>.</p>
	</li>
</ol>

<p>You can edit multiple records simultaneously by selecting them in the grid and updating them in the Preview pane on the right. For more information, see <a href="/doc/smax/25.1/editrecpreview#Mass" title="Mass update">Mass update</a>.</p>

<h2 id="Related_topics">Related topics</h2>

<ul>
	<li><a href="/doc/423/25.2/createagreementmodel" title="How to create an agreement model">How to create an agreement model</a></li>
	<li><a href="/doc/423/25.2/retireagreementmodel" title="How to retire an agreement model">How to retire an agreement model</a></li>
</ul>