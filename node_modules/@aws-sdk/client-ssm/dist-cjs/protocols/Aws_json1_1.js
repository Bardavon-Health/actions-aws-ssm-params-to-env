"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.se_DescribeMaintenanceWindowScheduleCommand = exports.se_DescribeMaintenanceWindowsCommand = exports.se_DescribeMaintenanceWindowExecutionTasksCommand = exports.se_DescribeMaintenanceWindowExecutionTaskInvocationsCommand = exports.se_DescribeMaintenanceWindowExecutionsCommand = exports.se_DescribeInventoryDeletionsCommand = exports.se_DescribeInstancePatchStatesForPatchGroupCommand = exports.se_DescribeInstancePatchStatesCommand = exports.se_DescribeInstancePatchesCommand = exports.se_DescribeInstanceInformationCommand = exports.se_DescribeInstanceAssociationsStatusCommand = exports.se_DescribeEffectivePatchesForPatchBaselineCommand = exports.se_DescribeEffectiveInstanceAssociationsCommand = exports.se_DescribeDocumentPermissionCommand = exports.se_DescribeDocumentCommand = exports.se_DescribeAvailablePatchesCommand = exports.se_DescribeAutomationStepExecutionsCommand = exports.se_DescribeAutomationExecutionsCommand = exports.se_DescribeAssociationExecutionTargetsCommand = exports.se_DescribeAssociationExecutionsCommand = exports.se_DescribeAssociationCommand = exports.se_DescribeActivationsCommand = exports.se_DeregisterTaskFromMaintenanceWindowCommand = exports.se_DeregisterTargetFromMaintenanceWindowCommand = exports.se_DeregisterPatchBaselineForPatchGroupCommand = exports.se_DeregisterManagedInstanceCommand = exports.se_DeleteResourcePolicyCommand = exports.se_DeleteResourceDataSyncCommand = exports.se_DeletePatchBaselineCommand = exports.se_DeleteParametersCommand = exports.se_DeleteParameterCommand = exports.se_DeleteOpsMetadataCommand = exports.se_DeleteMaintenanceWindowCommand = exports.se_DeleteInventoryCommand = exports.se_DeleteDocumentCommand = exports.se_DeleteAssociationCommand = exports.se_DeleteActivationCommand = exports.se_CreateResourceDataSyncCommand = exports.se_CreatePatchBaselineCommand = exports.se_CreateOpsMetadataCommand = exports.se_CreateOpsItemCommand = exports.se_CreateMaintenanceWindowCommand = exports.se_CreateDocumentCommand = exports.se_CreateAssociationBatchCommand = exports.se_CreateAssociationCommand = exports.se_CreateActivationCommand = exports.se_CancelMaintenanceWindowExecutionCommand = exports.se_CancelCommandCommand = exports.se_AssociateOpsItemRelatedItemCommand = exports.se_AddTagsToResourceCommand = void 0;
exports.se_ListOpsMetadataCommand = exports.se_ListOpsItemRelatedItemsCommand = exports.se_ListOpsItemEventsCommand = exports.se_ListInventoryEntriesCommand = exports.se_ListDocumentVersionsCommand = exports.se_ListDocumentsCommand = exports.se_ListDocumentMetadataHistoryCommand = exports.se_ListComplianceSummariesCommand = exports.se_ListComplianceItemsCommand = exports.se_ListCommandsCommand = exports.se_ListCommandInvocationsCommand = exports.se_ListAssociationVersionsCommand = exports.se_ListAssociationsCommand = exports.se_LabelParameterVersionCommand = exports.se_GetServiceSettingCommand = exports.se_GetResourcePoliciesCommand = exports.se_GetPatchBaselineForPatchGroupCommand = exports.se_GetPatchBaselineCommand = exports.se_GetParametersByPathCommand = exports.se_GetParametersCommand = exports.se_GetParameterHistoryCommand = exports.se_GetParameterCommand = exports.se_GetOpsSummaryCommand = exports.se_GetOpsMetadataCommand = exports.se_GetOpsItemCommand = exports.se_GetMaintenanceWindowTaskCommand = exports.se_GetMaintenanceWindowExecutionTaskInvocationCommand = exports.se_GetMaintenanceWindowExecutionTaskCommand = exports.se_GetMaintenanceWindowExecutionCommand = exports.se_GetMaintenanceWindowCommand = exports.se_GetInventorySchemaCommand = exports.se_GetInventoryCommand = exports.se_GetDocumentCommand = exports.se_GetDeployablePatchSnapshotForInstanceCommand = exports.se_GetDefaultPatchBaselineCommand = exports.se_GetConnectionStatusCommand = exports.se_GetCommandInvocationCommand = exports.se_GetCalendarStateCommand = exports.se_GetAutomationExecutionCommand = exports.se_DisassociateOpsItemRelatedItemCommand = exports.se_DescribeSessionsCommand = exports.se_DescribePatchPropertiesCommand = exports.se_DescribePatchGroupStateCommand = exports.se_DescribePatchGroupsCommand = exports.se_DescribePatchBaselinesCommand = exports.se_DescribeParametersCommand = exports.se_DescribeOpsItemsCommand = exports.se_DescribeMaintenanceWindowTasksCommand = exports.se_DescribeMaintenanceWindowTargetsCommand = exports.se_DescribeMaintenanceWindowsForTargetCommand = void 0;
exports.de_CreatePatchBaselineCommand = exports.de_CreateOpsMetadataCommand = exports.de_CreateOpsItemCommand = exports.de_CreateMaintenanceWindowCommand = exports.de_CreateDocumentCommand = exports.de_CreateAssociationBatchCommand = exports.de_CreateAssociationCommand = exports.de_CreateActivationCommand = exports.de_CancelMaintenanceWindowExecutionCommand = exports.de_CancelCommandCommand = exports.de_AssociateOpsItemRelatedItemCommand = exports.de_AddTagsToResourceCommand = exports.se_UpdateServiceSettingCommand = exports.se_UpdateResourceDataSyncCommand = exports.se_UpdatePatchBaselineCommand = exports.se_UpdateOpsMetadataCommand = exports.se_UpdateOpsItemCommand = exports.se_UpdateManagedInstanceRoleCommand = exports.se_UpdateMaintenanceWindowTaskCommand = exports.se_UpdateMaintenanceWindowTargetCommand = exports.se_UpdateMaintenanceWindowCommand = exports.se_UpdateDocumentMetadataCommand = exports.se_UpdateDocumentDefaultVersionCommand = exports.se_UpdateDocumentCommand = exports.se_UpdateAssociationStatusCommand = exports.se_UpdateAssociationCommand = exports.se_UnlabelParameterVersionCommand = exports.se_TerminateSessionCommand = exports.se_StopAutomationExecutionCommand = exports.se_StartSessionCommand = exports.se_StartChangeRequestExecutionCommand = exports.se_StartAutomationExecutionCommand = exports.se_StartAssociationsOnceCommand = exports.se_SendCommandCommand = exports.se_SendAutomationSignalCommand = exports.se_ResumeSessionCommand = exports.se_ResetServiceSettingCommand = exports.se_RemoveTagsFromResourceCommand = exports.se_RegisterTaskWithMaintenanceWindowCommand = exports.se_RegisterTargetWithMaintenanceWindowCommand = exports.se_RegisterPatchBaselineForPatchGroupCommand = exports.se_RegisterDefaultPatchBaselineCommand = exports.se_PutResourcePolicyCommand = exports.se_PutParameterCommand = exports.se_PutInventoryCommand = exports.se_PutComplianceItemsCommand = exports.se_ModifyDocumentPermissionCommand = exports.se_ListTagsForResourceCommand = exports.se_ListResourceDataSyncCommand = exports.se_ListResourceComplianceSummariesCommand = void 0;
exports.de_GetAutomationExecutionCommand = exports.de_DisassociateOpsItemRelatedItemCommand = exports.de_DescribeSessionsCommand = exports.de_DescribePatchPropertiesCommand = exports.de_DescribePatchGroupStateCommand = exports.de_DescribePatchGroupsCommand = exports.de_DescribePatchBaselinesCommand = exports.de_DescribeParametersCommand = exports.de_DescribeOpsItemsCommand = exports.de_DescribeMaintenanceWindowTasksCommand = exports.de_DescribeMaintenanceWindowTargetsCommand = exports.de_DescribeMaintenanceWindowsForTargetCommand = exports.de_DescribeMaintenanceWindowScheduleCommand = exports.de_DescribeMaintenanceWindowsCommand = exports.de_DescribeMaintenanceWindowExecutionTasksCommand = exports.de_DescribeMaintenanceWindowExecutionTaskInvocationsCommand = exports.de_DescribeMaintenanceWindowExecutionsCommand = exports.de_DescribeInventoryDeletionsCommand = exports.de_DescribeInstancePatchStatesForPatchGroupCommand = exports.de_DescribeInstancePatchStatesCommand = exports.de_DescribeInstancePatchesCommand = exports.de_DescribeInstanceInformationCommand = exports.de_DescribeInstanceAssociationsStatusCommand = exports.de_DescribeEffectivePatchesForPatchBaselineCommand = exports.de_DescribeEffectiveInstanceAssociationsCommand = exports.de_DescribeDocumentPermissionCommand = exports.de_DescribeDocumentCommand = exports.de_DescribeAvailablePatchesCommand = exports.de_DescribeAutomationStepExecutionsCommand = exports.de_DescribeAutomationExecutionsCommand = exports.de_DescribeAssociationExecutionTargetsCommand = exports.de_DescribeAssociationExecutionsCommand = exports.de_DescribeAssociationCommand = exports.de_DescribeActivationsCommand = exports.de_DeregisterTaskFromMaintenanceWindowCommand = exports.de_DeregisterTargetFromMaintenanceWindowCommand = exports.de_DeregisterPatchBaselineForPatchGroupCommand = exports.de_DeregisterManagedInstanceCommand = exports.de_DeleteResourcePolicyCommand = exports.de_DeleteResourceDataSyncCommand = exports.de_DeletePatchBaselineCommand = exports.de_DeleteParametersCommand = exports.de_DeleteParameterCommand = exports.de_DeleteOpsMetadataCommand = exports.de_DeleteMaintenanceWindowCommand = exports.de_DeleteInventoryCommand = exports.de_DeleteDocumentCommand = exports.de_DeleteAssociationCommand = exports.de_DeleteActivationCommand = exports.de_CreateResourceDataSyncCommand = void 0;
exports.de_RegisterTaskWithMaintenanceWindowCommand = exports.de_RegisterTargetWithMaintenanceWindowCommand = exports.de_RegisterPatchBaselineForPatchGroupCommand = exports.de_RegisterDefaultPatchBaselineCommand = exports.de_PutResourcePolicyCommand = exports.de_PutParameterCommand = exports.de_PutInventoryCommand = exports.de_PutComplianceItemsCommand = exports.de_ModifyDocumentPermissionCommand = exports.de_ListTagsForResourceCommand = exports.de_ListResourceDataSyncCommand = exports.de_ListResourceComplianceSummariesCommand = exports.de_ListOpsMetadataCommand = exports.de_ListOpsItemRelatedItemsCommand = exports.de_ListOpsItemEventsCommand = exports.de_ListInventoryEntriesCommand = exports.de_ListDocumentVersionsCommand = exports.de_ListDocumentsCommand = exports.de_ListDocumentMetadataHistoryCommand = exports.de_ListComplianceSummariesCommand = exports.de_ListComplianceItemsCommand = exports.de_ListCommandsCommand = exports.de_ListCommandInvocationsCommand = exports.de_ListAssociationVersionsCommand = exports.de_ListAssociationsCommand = exports.de_LabelParameterVersionCommand = exports.de_GetServiceSettingCommand = exports.de_GetResourcePoliciesCommand = exports.de_GetPatchBaselineForPatchGroupCommand = exports.de_GetPatchBaselineCommand = exports.de_GetParametersByPathCommand = exports.de_GetParametersCommand = exports.de_GetParameterHistoryCommand = exports.de_GetParameterCommand = exports.de_GetOpsSummaryCommand = exports.de_GetOpsMetadataCommand = exports.de_GetOpsItemCommand = exports.de_GetMaintenanceWindowTaskCommand = exports.de_GetMaintenanceWindowExecutionTaskInvocationCommand = exports.de_GetMaintenanceWindowExecutionTaskCommand = exports.de_GetMaintenanceWindowExecutionCommand = exports.de_GetMaintenanceWindowCommand = exports.de_GetInventorySchemaCommand = exports.de_GetInventoryCommand = exports.de_GetDocumentCommand = exports.de_GetDeployablePatchSnapshotForInstanceCommand = exports.de_GetDefaultPatchBaselineCommand = exports.de_GetConnectionStatusCommand = exports.de_GetCommandInvocationCommand = exports.de_GetCalendarStateCommand = void 0;
exports.de_UpdateServiceSettingCommand = exports.de_UpdateResourceDataSyncCommand = exports.de_UpdatePatchBaselineCommand = exports.de_UpdateOpsMetadataCommand = exports.de_UpdateOpsItemCommand = exports.de_UpdateManagedInstanceRoleCommand = exports.de_UpdateMaintenanceWindowTaskCommand = exports.de_UpdateMaintenanceWindowTargetCommand = exports.de_UpdateMaintenanceWindowCommand = exports.de_UpdateDocumentMetadataCommand = exports.de_UpdateDocumentDefaultVersionCommand = exports.de_UpdateDocumentCommand = exports.de_UpdateAssociationStatusCommand = exports.de_UpdateAssociationCommand = exports.de_UnlabelParameterVersionCommand = exports.de_TerminateSessionCommand = exports.de_StopAutomationExecutionCommand = exports.de_StartSessionCommand = exports.de_StartChangeRequestExecutionCommand = exports.de_StartAutomationExecutionCommand = exports.de_StartAssociationsOnceCommand = exports.de_SendCommandCommand = exports.de_SendAutomationSignalCommand = exports.de_ResumeSessionCommand = exports.de_ResetServiceSettingCommand = exports.de_RemoveTagsFromResourceCommand = void 0;
const protocol_http_1 = require("@smithy/protocol-http");
const smithy_client_1 = require("@smithy/smithy-client");
const uuid_1 = require("uuid");
const models_0_1 = require("../models/models_0");
const models_1_1 = require("../models/models_1");
const models_2_1 = require("../models/models_2");
const SSMServiceException_1 = require("../models/SSMServiceException");
const se_AddTagsToResourceCommand = async (input, context) => {
    const headers = sharedHeaders("AddTagsToResource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_AddTagsToResourceCommand = se_AddTagsToResourceCommand;
const se_AssociateOpsItemRelatedItemCommand = async (input, context) => {
    const headers = sharedHeaders("AssociateOpsItemRelatedItem");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_AssociateOpsItemRelatedItemCommand = se_AssociateOpsItemRelatedItemCommand;
const se_CancelCommandCommand = async (input, context) => {
    const headers = sharedHeaders("CancelCommand");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CancelCommandCommand = se_CancelCommandCommand;
const se_CancelMaintenanceWindowExecutionCommand = async (input, context) => {
    const headers = sharedHeaders("CancelMaintenanceWindowExecution");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CancelMaintenanceWindowExecutionCommand = se_CancelMaintenanceWindowExecutionCommand;
const se_CreateActivationCommand = async (input, context) => {
    const headers = sharedHeaders("CreateActivation");
    let body;
    body = JSON.stringify(se_CreateActivationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateActivationCommand = se_CreateActivationCommand;
const se_CreateAssociationCommand = async (input, context) => {
    const headers = sharedHeaders("CreateAssociation");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateAssociationCommand = se_CreateAssociationCommand;
const se_CreateAssociationBatchCommand = async (input, context) => {
    const headers = sharedHeaders("CreateAssociationBatch");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateAssociationBatchCommand = se_CreateAssociationBatchCommand;
const se_CreateDocumentCommand = async (input, context) => {
    const headers = sharedHeaders("CreateDocument");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateDocumentCommand = se_CreateDocumentCommand;
const se_CreateMaintenanceWindowCommand = async (input, context) => {
    const headers = sharedHeaders("CreateMaintenanceWindow");
    let body;
    body = JSON.stringify(se_CreateMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateMaintenanceWindowCommand = se_CreateMaintenanceWindowCommand;
const se_CreateOpsItemCommand = async (input, context) => {
    const headers = sharedHeaders("CreateOpsItem");
    let body;
    body = JSON.stringify(se_CreateOpsItemRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateOpsItemCommand = se_CreateOpsItemCommand;
const se_CreateOpsMetadataCommand = async (input, context) => {
    const headers = sharedHeaders("CreateOpsMetadata");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateOpsMetadataCommand = se_CreateOpsMetadataCommand;
const se_CreatePatchBaselineCommand = async (input, context) => {
    const headers = sharedHeaders("CreatePatchBaseline");
    let body;
    body = JSON.stringify(se_CreatePatchBaselineRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreatePatchBaselineCommand = se_CreatePatchBaselineCommand;
const se_CreateResourceDataSyncCommand = async (input, context) => {
    const headers = sharedHeaders("CreateResourceDataSync");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateResourceDataSyncCommand = se_CreateResourceDataSyncCommand;
const se_DeleteActivationCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteActivation");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteActivationCommand = se_DeleteActivationCommand;
const se_DeleteAssociationCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteAssociation");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteAssociationCommand = se_DeleteAssociationCommand;
const se_DeleteDocumentCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteDocument");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteDocumentCommand = se_DeleteDocumentCommand;
const se_DeleteInventoryCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteInventory");
    let body;
    body = JSON.stringify(se_DeleteInventoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteInventoryCommand = se_DeleteInventoryCommand;
const se_DeleteMaintenanceWindowCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteMaintenanceWindow");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteMaintenanceWindowCommand = se_DeleteMaintenanceWindowCommand;
const se_DeleteOpsMetadataCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteOpsMetadata");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteOpsMetadataCommand = se_DeleteOpsMetadataCommand;
const se_DeleteParameterCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteParameter");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteParameterCommand = se_DeleteParameterCommand;
const se_DeleteParametersCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteParameters");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteParametersCommand = se_DeleteParametersCommand;
const se_DeletePatchBaselineCommand = async (input, context) => {
    const headers = sharedHeaders("DeletePatchBaseline");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeletePatchBaselineCommand = se_DeletePatchBaselineCommand;
const se_DeleteResourceDataSyncCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteResourceDataSync");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteResourceDataSyncCommand = se_DeleteResourceDataSyncCommand;
const se_DeleteResourcePolicyCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteResourcePolicy");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteResourcePolicyCommand = se_DeleteResourcePolicyCommand;
const se_DeregisterManagedInstanceCommand = async (input, context) => {
    const headers = sharedHeaders("DeregisterManagedInstance");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeregisterManagedInstanceCommand = se_DeregisterManagedInstanceCommand;
const se_DeregisterPatchBaselineForPatchGroupCommand = async (input, context) => {
    const headers = sharedHeaders("DeregisterPatchBaselineForPatchGroup");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeregisterPatchBaselineForPatchGroupCommand = se_DeregisterPatchBaselineForPatchGroupCommand;
const se_DeregisterTargetFromMaintenanceWindowCommand = async (input, context) => {
    const headers = sharedHeaders("DeregisterTargetFromMaintenanceWindow");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeregisterTargetFromMaintenanceWindowCommand = se_DeregisterTargetFromMaintenanceWindowCommand;
const se_DeregisterTaskFromMaintenanceWindowCommand = async (input, context) => {
    const headers = sharedHeaders("DeregisterTaskFromMaintenanceWindow");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeregisterTaskFromMaintenanceWindowCommand = se_DeregisterTaskFromMaintenanceWindowCommand;
const se_DescribeActivationsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeActivations");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeActivationsCommand = se_DescribeActivationsCommand;
const se_DescribeAssociationCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeAssociation");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeAssociationCommand = se_DescribeAssociationCommand;
const se_DescribeAssociationExecutionsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeAssociationExecutions");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeAssociationExecutionsCommand = se_DescribeAssociationExecutionsCommand;
const se_DescribeAssociationExecutionTargetsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeAssociationExecutionTargets");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeAssociationExecutionTargetsCommand = se_DescribeAssociationExecutionTargetsCommand;
const se_DescribeAutomationExecutionsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeAutomationExecutions");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeAutomationExecutionsCommand = se_DescribeAutomationExecutionsCommand;
const se_DescribeAutomationStepExecutionsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeAutomationStepExecutions");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeAutomationStepExecutionsCommand = se_DescribeAutomationStepExecutionsCommand;
const se_DescribeAvailablePatchesCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeAvailablePatches");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeAvailablePatchesCommand = se_DescribeAvailablePatchesCommand;
const se_DescribeDocumentCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeDocument");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeDocumentCommand = se_DescribeDocumentCommand;
const se_DescribeDocumentPermissionCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeDocumentPermission");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeDocumentPermissionCommand = se_DescribeDocumentPermissionCommand;
const se_DescribeEffectiveInstanceAssociationsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeEffectiveInstanceAssociations");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeEffectiveInstanceAssociationsCommand = se_DescribeEffectiveInstanceAssociationsCommand;
const se_DescribeEffectivePatchesForPatchBaselineCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeEffectivePatchesForPatchBaseline");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeEffectivePatchesForPatchBaselineCommand = se_DescribeEffectivePatchesForPatchBaselineCommand;
const se_DescribeInstanceAssociationsStatusCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeInstanceAssociationsStatus");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeInstanceAssociationsStatusCommand = se_DescribeInstanceAssociationsStatusCommand;
const se_DescribeInstanceInformationCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeInstanceInformation");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeInstanceInformationCommand = se_DescribeInstanceInformationCommand;
const se_DescribeInstancePatchesCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeInstancePatches");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeInstancePatchesCommand = se_DescribeInstancePatchesCommand;
const se_DescribeInstancePatchStatesCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeInstancePatchStates");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeInstancePatchStatesCommand = se_DescribeInstancePatchStatesCommand;
const se_DescribeInstancePatchStatesForPatchGroupCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeInstancePatchStatesForPatchGroup");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeInstancePatchStatesForPatchGroupCommand = se_DescribeInstancePatchStatesForPatchGroupCommand;
const se_DescribeInventoryDeletionsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeInventoryDeletions");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeInventoryDeletionsCommand = se_DescribeInventoryDeletionsCommand;
const se_DescribeMaintenanceWindowExecutionsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeMaintenanceWindowExecutions");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeMaintenanceWindowExecutionsCommand = se_DescribeMaintenanceWindowExecutionsCommand;
const se_DescribeMaintenanceWindowExecutionTaskInvocationsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeMaintenanceWindowExecutionTaskInvocations");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeMaintenanceWindowExecutionTaskInvocationsCommand = se_DescribeMaintenanceWindowExecutionTaskInvocationsCommand;
const se_DescribeMaintenanceWindowExecutionTasksCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeMaintenanceWindowExecutionTasks");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeMaintenanceWindowExecutionTasksCommand = se_DescribeMaintenanceWindowExecutionTasksCommand;
const se_DescribeMaintenanceWindowsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeMaintenanceWindows");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeMaintenanceWindowsCommand = se_DescribeMaintenanceWindowsCommand;
const se_DescribeMaintenanceWindowScheduleCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeMaintenanceWindowSchedule");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeMaintenanceWindowScheduleCommand = se_DescribeMaintenanceWindowScheduleCommand;
const se_DescribeMaintenanceWindowsForTargetCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeMaintenanceWindowsForTarget");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeMaintenanceWindowsForTargetCommand = se_DescribeMaintenanceWindowsForTargetCommand;
const se_DescribeMaintenanceWindowTargetsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeMaintenanceWindowTargets");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeMaintenanceWindowTargetsCommand = se_DescribeMaintenanceWindowTargetsCommand;
const se_DescribeMaintenanceWindowTasksCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeMaintenanceWindowTasks");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeMaintenanceWindowTasksCommand = se_DescribeMaintenanceWindowTasksCommand;
const se_DescribeOpsItemsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeOpsItems");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeOpsItemsCommand = se_DescribeOpsItemsCommand;
const se_DescribeParametersCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeParameters");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeParametersCommand = se_DescribeParametersCommand;
const se_DescribePatchBaselinesCommand = async (input, context) => {
    const headers = sharedHeaders("DescribePatchBaselines");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribePatchBaselinesCommand = se_DescribePatchBaselinesCommand;
const se_DescribePatchGroupsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribePatchGroups");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribePatchGroupsCommand = se_DescribePatchGroupsCommand;
const se_DescribePatchGroupStateCommand = async (input, context) => {
    const headers = sharedHeaders("DescribePatchGroupState");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribePatchGroupStateCommand = se_DescribePatchGroupStateCommand;
const se_DescribePatchPropertiesCommand = async (input, context) => {
    const headers = sharedHeaders("DescribePatchProperties");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribePatchPropertiesCommand = se_DescribePatchPropertiesCommand;
const se_DescribeSessionsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeSessions");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeSessionsCommand = se_DescribeSessionsCommand;
const se_DisassociateOpsItemRelatedItemCommand = async (input, context) => {
    const headers = sharedHeaders("DisassociateOpsItemRelatedItem");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DisassociateOpsItemRelatedItemCommand = se_DisassociateOpsItemRelatedItemCommand;
const se_GetAutomationExecutionCommand = async (input, context) => {
    const headers = sharedHeaders("GetAutomationExecution");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetAutomationExecutionCommand = se_GetAutomationExecutionCommand;
const se_GetCalendarStateCommand = async (input, context) => {
    const headers = sharedHeaders("GetCalendarState");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetCalendarStateCommand = se_GetCalendarStateCommand;
const se_GetCommandInvocationCommand = async (input, context) => {
    const headers = sharedHeaders("GetCommandInvocation");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetCommandInvocationCommand = se_GetCommandInvocationCommand;
const se_GetConnectionStatusCommand = async (input, context) => {
    const headers = sharedHeaders("GetConnectionStatus");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetConnectionStatusCommand = se_GetConnectionStatusCommand;
const se_GetDefaultPatchBaselineCommand = async (input, context) => {
    const headers = sharedHeaders("GetDefaultPatchBaseline");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetDefaultPatchBaselineCommand = se_GetDefaultPatchBaselineCommand;
const se_GetDeployablePatchSnapshotForInstanceCommand = async (input, context) => {
    const headers = sharedHeaders("GetDeployablePatchSnapshotForInstance");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetDeployablePatchSnapshotForInstanceCommand = se_GetDeployablePatchSnapshotForInstanceCommand;
const se_GetDocumentCommand = async (input, context) => {
    const headers = sharedHeaders("GetDocument");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetDocumentCommand = se_GetDocumentCommand;
const se_GetInventoryCommand = async (input, context) => {
    const headers = sharedHeaders("GetInventory");
    let body;
    body = JSON.stringify(se_GetInventoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetInventoryCommand = se_GetInventoryCommand;
const se_GetInventorySchemaCommand = async (input, context) => {
    const headers = sharedHeaders("GetInventorySchema");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetInventorySchemaCommand = se_GetInventorySchemaCommand;
const se_GetMaintenanceWindowCommand = async (input, context) => {
    const headers = sharedHeaders("GetMaintenanceWindow");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetMaintenanceWindowCommand = se_GetMaintenanceWindowCommand;
const se_GetMaintenanceWindowExecutionCommand = async (input, context) => {
    const headers = sharedHeaders("GetMaintenanceWindowExecution");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetMaintenanceWindowExecutionCommand = se_GetMaintenanceWindowExecutionCommand;
const se_GetMaintenanceWindowExecutionTaskCommand = async (input, context) => {
    const headers = sharedHeaders("GetMaintenanceWindowExecutionTask");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetMaintenanceWindowExecutionTaskCommand = se_GetMaintenanceWindowExecutionTaskCommand;
const se_GetMaintenanceWindowExecutionTaskInvocationCommand = async (input, context) => {
    const headers = sharedHeaders("GetMaintenanceWindowExecutionTaskInvocation");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetMaintenanceWindowExecutionTaskInvocationCommand = se_GetMaintenanceWindowExecutionTaskInvocationCommand;
const se_GetMaintenanceWindowTaskCommand = async (input, context) => {
    const headers = sharedHeaders("GetMaintenanceWindowTask");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetMaintenanceWindowTaskCommand = se_GetMaintenanceWindowTaskCommand;
const se_GetOpsItemCommand = async (input, context) => {
    const headers = sharedHeaders("GetOpsItem");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetOpsItemCommand = se_GetOpsItemCommand;
const se_GetOpsMetadataCommand = async (input, context) => {
    const headers = sharedHeaders("GetOpsMetadata");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetOpsMetadataCommand = se_GetOpsMetadataCommand;
const se_GetOpsSummaryCommand = async (input, context) => {
    const headers = sharedHeaders("GetOpsSummary");
    let body;
    body = JSON.stringify(se_GetOpsSummaryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetOpsSummaryCommand = se_GetOpsSummaryCommand;
const se_GetParameterCommand = async (input, context) => {
    const headers = sharedHeaders("GetParameter");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetParameterCommand = se_GetParameterCommand;
const se_GetParameterHistoryCommand = async (input, context) => {
    const headers = sharedHeaders("GetParameterHistory");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetParameterHistoryCommand = se_GetParameterHistoryCommand;
const se_GetParametersCommand = async (input, context) => {
    const headers = sharedHeaders("GetParameters");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetParametersCommand = se_GetParametersCommand;
const se_GetParametersByPathCommand = async (input, context) => {
    const headers = sharedHeaders("GetParametersByPath");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetParametersByPathCommand = se_GetParametersByPathCommand;
const se_GetPatchBaselineCommand = async (input, context) => {
    const headers = sharedHeaders("GetPatchBaseline");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetPatchBaselineCommand = se_GetPatchBaselineCommand;
const se_GetPatchBaselineForPatchGroupCommand = async (input, context) => {
    const headers = sharedHeaders("GetPatchBaselineForPatchGroup");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetPatchBaselineForPatchGroupCommand = se_GetPatchBaselineForPatchGroupCommand;
const se_GetResourcePoliciesCommand = async (input, context) => {
    const headers = sharedHeaders("GetResourcePolicies");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetResourcePoliciesCommand = se_GetResourcePoliciesCommand;
const se_GetServiceSettingCommand = async (input, context) => {
    const headers = sharedHeaders("GetServiceSetting");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetServiceSettingCommand = se_GetServiceSettingCommand;
const se_LabelParameterVersionCommand = async (input, context) => {
    const headers = sharedHeaders("LabelParameterVersion");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_LabelParameterVersionCommand = se_LabelParameterVersionCommand;
const se_ListAssociationsCommand = async (input, context) => {
    const headers = sharedHeaders("ListAssociations");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListAssociationsCommand = se_ListAssociationsCommand;
const se_ListAssociationVersionsCommand = async (input, context) => {
    const headers = sharedHeaders("ListAssociationVersions");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListAssociationVersionsCommand = se_ListAssociationVersionsCommand;
const se_ListCommandInvocationsCommand = async (input, context) => {
    const headers = sharedHeaders("ListCommandInvocations");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListCommandInvocationsCommand = se_ListCommandInvocationsCommand;
const se_ListCommandsCommand = async (input, context) => {
    const headers = sharedHeaders("ListCommands");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListCommandsCommand = se_ListCommandsCommand;
const se_ListComplianceItemsCommand = async (input, context) => {
    const headers = sharedHeaders("ListComplianceItems");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListComplianceItemsCommand = se_ListComplianceItemsCommand;
const se_ListComplianceSummariesCommand = async (input, context) => {
    const headers = sharedHeaders("ListComplianceSummaries");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListComplianceSummariesCommand = se_ListComplianceSummariesCommand;
const se_ListDocumentMetadataHistoryCommand = async (input, context) => {
    const headers = sharedHeaders("ListDocumentMetadataHistory");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListDocumentMetadataHistoryCommand = se_ListDocumentMetadataHistoryCommand;
const se_ListDocumentsCommand = async (input, context) => {
    const headers = sharedHeaders("ListDocuments");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListDocumentsCommand = se_ListDocumentsCommand;
const se_ListDocumentVersionsCommand = async (input, context) => {
    const headers = sharedHeaders("ListDocumentVersions");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListDocumentVersionsCommand = se_ListDocumentVersionsCommand;
const se_ListInventoryEntriesCommand = async (input, context) => {
    const headers = sharedHeaders("ListInventoryEntries");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListInventoryEntriesCommand = se_ListInventoryEntriesCommand;
const se_ListOpsItemEventsCommand = async (input, context) => {
    const headers = sharedHeaders("ListOpsItemEvents");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListOpsItemEventsCommand = se_ListOpsItemEventsCommand;
const se_ListOpsItemRelatedItemsCommand = async (input, context) => {
    const headers = sharedHeaders("ListOpsItemRelatedItems");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListOpsItemRelatedItemsCommand = se_ListOpsItemRelatedItemsCommand;
const se_ListOpsMetadataCommand = async (input, context) => {
    const headers = sharedHeaders("ListOpsMetadata");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListOpsMetadataCommand = se_ListOpsMetadataCommand;
const se_ListResourceComplianceSummariesCommand = async (input, context) => {
    const headers = sharedHeaders("ListResourceComplianceSummaries");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListResourceComplianceSummariesCommand = se_ListResourceComplianceSummariesCommand;
const se_ListResourceDataSyncCommand = async (input, context) => {
    const headers = sharedHeaders("ListResourceDataSync");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListResourceDataSyncCommand = se_ListResourceDataSyncCommand;
const se_ListTagsForResourceCommand = async (input, context) => {
    const headers = sharedHeaders("ListTagsForResource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListTagsForResourceCommand = se_ListTagsForResourceCommand;
const se_ModifyDocumentPermissionCommand = async (input, context) => {
    const headers = sharedHeaders("ModifyDocumentPermission");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ModifyDocumentPermissionCommand = se_ModifyDocumentPermissionCommand;
const se_PutComplianceItemsCommand = async (input, context) => {
    const headers = sharedHeaders("PutComplianceItems");
    let body;
    body = JSON.stringify(se_PutComplianceItemsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_PutComplianceItemsCommand = se_PutComplianceItemsCommand;
const se_PutInventoryCommand = async (input, context) => {
    const headers = sharedHeaders("PutInventory");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_PutInventoryCommand = se_PutInventoryCommand;
const se_PutParameterCommand = async (input, context) => {
    const headers = sharedHeaders("PutParameter");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_PutParameterCommand = se_PutParameterCommand;
const se_PutResourcePolicyCommand = async (input, context) => {
    const headers = sharedHeaders("PutResourcePolicy");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_PutResourcePolicyCommand = se_PutResourcePolicyCommand;
const se_RegisterDefaultPatchBaselineCommand = async (input, context) => {
    const headers = sharedHeaders("RegisterDefaultPatchBaseline");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_RegisterDefaultPatchBaselineCommand = se_RegisterDefaultPatchBaselineCommand;
const se_RegisterPatchBaselineForPatchGroupCommand = async (input, context) => {
    const headers = sharedHeaders("RegisterPatchBaselineForPatchGroup");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_RegisterPatchBaselineForPatchGroupCommand = se_RegisterPatchBaselineForPatchGroupCommand;
const se_RegisterTargetWithMaintenanceWindowCommand = async (input, context) => {
    const headers = sharedHeaders("RegisterTargetWithMaintenanceWindow");
    let body;
    body = JSON.stringify(se_RegisterTargetWithMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_RegisterTargetWithMaintenanceWindowCommand = se_RegisterTargetWithMaintenanceWindowCommand;
const se_RegisterTaskWithMaintenanceWindowCommand = async (input, context) => {
    const headers = sharedHeaders("RegisterTaskWithMaintenanceWindow");
    let body;
    body = JSON.stringify(se_RegisterTaskWithMaintenanceWindowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_RegisterTaskWithMaintenanceWindowCommand = se_RegisterTaskWithMaintenanceWindowCommand;
const se_RemoveTagsFromResourceCommand = async (input, context) => {
    const headers = sharedHeaders("RemoveTagsFromResource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_RemoveTagsFromResourceCommand = se_RemoveTagsFromResourceCommand;
const se_ResetServiceSettingCommand = async (input, context) => {
    const headers = sharedHeaders("ResetServiceSetting");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ResetServiceSettingCommand = se_ResetServiceSettingCommand;
const se_ResumeSessionCommand = async (input, context) => {
    const headers = sharedHeaders("ResumeSession");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ResumeSessionCommand = se_ResumeSessionCommand;
const se_SendAutomationSignalCommand = async (input, context) => {
    const headers = sharedHeaders("SendAutomationSignal");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SendAutomationSignalCommand = se_SendAutomationSignalCommand;
const se_SendCommandCommand = async (input, context) => {
    const headers = sharedHeaders("SendCommand");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SendCommandCommand = se_SendCommandCommand;
const se_StartAssociationsOnceCommand = async (input, context) => {
    const headers = sharedHeaders("StartAssociationsOnce");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_StartAssociationsOnceCommand = se_StartAssociationsOnceCommand;
const se_StartAutomationExecutionCommand = async (input, context) => {
    const headers = sharedHeaders("StartAutomationExecution");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_StartAutomationExecutionCommand = se_StartAutomationExecutionCommand;
const se_StartChangeRequestExecutionCommand = async (input, context) => {
    const headers = sharedHeaders("StartChangeRequestExecution");
    let body;
    body = JSON.stringify(se_StartChangeRequestExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_StartChangeRequestExecutionCommand = se_StartChangeRequestExecutionCommand;
const se_StartSessionCommand = async (input, context) => {
    const headers = sharedHeaders("StartSession");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_StartSessionCommand = se_StartSessionCommand;
const se_StopAutomationExecutionCommand = async (input, context) => {
    const headers = sharedHeaders("StopAutomationExecution");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_StopAutomationExecutionCommand = se_StopAutomationExecutionCommand;
const se_TerminateSessionCommand = async (input, context) => {
    const headers = sharedHeaders("TerminateSession");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_TerminateSessionCommand = se_TerminateSessionCommand;
const se_UnlabelParameterVersionCommand = async (input, context) => {
    const headers = sharedHeaders("UnlabelParameterVersion");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UnlabelParameterVersionCommand = se_UnlabelParameterVersionCommand;
const se_UpdateAssociationCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateAssociation");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateAssociationCommand = se_UpdateAssociationCommand;
const se_UpdateAssociationStatusCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateAssociationStatus");
    let body;
    body = JSON.stringify(se_UpdateAssociationStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateAssociationStatusCommand = se_UpdateAssociationStatusCommand;
const se_UpdateDocumentCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateDocument");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateDocumentCommand = se_UpdateDocumentCommand;
const se_UpdateDocumentDefaultVersionCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateDocumentDefaultVersion");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateDocumentDefaultVersionCommand = se_UpdateDocumentDefaultVersionCommand;
const se_UpdateDocumentMetadataCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateDocumentMetadata");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateDocumentMetadataCommand = se_UpdateDocumentMetadataCommand;
const se_UpdateMaintenanceWindowCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateMaintenanceWindow");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateMaintenanceWindowCommand = se_UpdateMaintenanceWindowCommand;
const se_UpdateMaintenanceWindowTargetCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateMaintenanceWindowTarget");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateMaintenanceWindowTargetCommand = se_UpdateMaintenanceWindowTargetCommand;
const se_UpdateMaintenanceWindowTaskCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateMaintenanceWindowTask");
    let body;
    body = JSON.stringify(se_UpdateMaintenanceWindowTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateMaintenanceWindowTaskCommand = se_UpdateMaintenanceWindowTaskCommand;
const se_UpdateManagedInstanceRoleCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateManagedInstanceRole");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateManagedInstanceRoleCommand = se_UpdateManagedInstanceRoleCommand;
const se_UpdateOpsItemCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateOpsItem");
    let body;
    body = JSON.stringify(se_UpdateOpsItemRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateOpsItemCommand = se_UpdateOpsItemCommand;
const se_UpdateOpsMetadataCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateOpsMetadata");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateOpsMetadataCommand = se_UpdateOpsMetadataCommand;
const se_UpdatePatchBaselineCommand = async (input, context) => {
    const headers = sharedHeaders("UpdatePatchBaseline");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdatePatchBaselineCommand = se_UpdatePatchBaselineCommand;
const se_UpdateResourceDataSyncCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateResourceDataSync");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateResourceDataSyncCommand = se_UpdateResourceDataSyncCommand;
const se_UpdateServiceSettingCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateServiceSetting");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateServiceSettingCommand = se_UpdateServiceSettingCommand;
const de_AddTagsToResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_AddTagsToResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_AddTagsToResourceCommand = de_AddTagsToResourceCommand;
const de_AddTagsToResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            throw await de_InvalidResourceIdRes(parsedOutput, context);
        case "InvalidResourceType":
        case "com.amazonaws.ssm#InvalidResourceType":
            throw await de_InvalidResourceTypeRes(parsedOutput, context);
        case "TooManyTagsError":
        case "com.amazonaws.ssm#TooManyTagsError":
            throw await de_TooManyTagsErrorRes(parsedOutput, context);
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            throw await de_TooManyUpdatesRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_AssociateOpsItemRelatedItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_AssociateOpsItemRelatedItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_AssociateOpsItemRelatedItemCommand = de_AssociateOpsItemRelatedItemCommand;
const de_AssociateOpsItemRelatedItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "OpsItemInvalidParameterException":
        case "com.amazonaws.ssm#OpsItemInvalidParameterException":
            throw await de_OpsItemInvalidParameterExceptionRes(parsedOutput, context);
        case "OpsItemLimitExceededException":
        case "com.amazonaws.ssm#OpsItemLimitExceededException":
            throw await de_OpsItemLimitExceededExceptionRes(parsedOutput, context);
        case "OpsItemNotFoundException":
        case "com.amazonaws.ssm#OpsItemNotFoundException":
            throw await de_OpsItemNotFoundExceptionRes(parsedOutput, context);
        case "OpsItemRelatedItemAlreadyExistsException":
        case "com.amazonaws.ssm#OpsItemRelatedItemAlreadyExistsException":
            throw await de_OpsItemRelatedItemAlreadyExistsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_CancelCommandCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CancelCommandCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CancelCommandCommand = de_CancelCommandCommand;
const de_CancelCommandCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateInstanceId":
        case "com.amazonaws.ssm#DuplicateInstanceId":
            throw await de_DuplicateInstanceIdRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidCommandId":
        case "com.amazonaws.ssm#InvalidCommandId":
            throw await de_InvalidCommandIdRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_CancelMaintenanceWindowExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CancelMaintenanceWindowExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CancelMaintenanceWindowExecutionCommand = de_CancelMaintenanceWindowExecutionCommand;
const de_CancelMaintenanceWindowExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_CreateActivationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateActivationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateActivationCommand = de_CreateActivationCommand;
const de_CreateActivationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidParameters":
        case "com.amazonaws.ssm#InvalidParameters":
            throw await de_InvalidParametersRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_CreateAssociationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateAssociationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateAssociationCommand = de_CreateAssociationCommand;
const de_CreateAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationAlreadyExists":
        case "com.amazonaws.ssm#AssociationAlreadyExists":
            throw await de_AssociationAlreadyExistsRes(parsedOutput, context);
        case "AssociationLimitExceeded":
        case "com.amazonaws.ssm#AssociationLimitExceeded":
            throw await de_AssociationLimitExceededRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            throw await de_InvalidDocumentVersionRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        case "InvalidOutputLocation":
        case "com.amazonaws.ssm#InvalidOutputLocation":
            throw await de_InvalidOutputLocationRes(parsedOutput, context);
        case "InvalidParameters":
        case "com.amazonaws.ssm#InvalidParameters":
            throw await de_InvalidParametersRes(parsedOutput, context);
        case "InvalidSchedule":
        case "com.amazonaws.ssm#InvalidSchedule":
            throw await de_InvalidScheduleRes(parsedOutput, context);
        case "InvalidTag":
        case "com.amazonaws.ssm#InvalidTag":
            throw await de_InvalidTagRes(parsedOutput, context);
        case "InvalidTarget":
        case "com.amazonaws.ssm#InvalidTarget":
            throw await de_InvalidTargetRes(parsedOutput, context);
        case "InvalidTargetMaps":
        case "com.amazonaws.ssm#InvalidTargetMaps":
            throw await de_InvalidTargetMapsRes(parsedOutput, context);
        case "UnsupportedPlatformType":
        case "com.amazonaws.ssm#UnsupportedPlatformType":
            throw await de_UnsupportedPlatformTypeRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_CreateAssociationBatchCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateAssociationBatchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateAssociationBatchResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateAssociationBatchCommand = de_CreateAssociationBatchCommand;
const de_CreateAssociationBatchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationLimitExceeded":
        case "com.amazonaws.ssm#AssociationLimitExceeded":
            throw await de_AssociationLimitExceededRes(parsedOutput, context);
        case "DuplicateInstanceId":
        case "com.amazonaws.ssm#DuplicateInstanceId":
            throw await de_DuplicateInstanceIdRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            throw await de_InvalidDocumentVersionRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        case "InvalidOutputLocation":
        case "com.amazonaws.ssm#InvalidOutputLocation":
            throw await de_InvalidOutputLocationRes(parsedOutput, context);
        case "InvalidParameters":
        case "com.amazonaws.ssm#InvalidParameters":
            throw await de_InvalidParametersRes(parsedOutput, context);
        case "InvalidSchedule":
        case "com.amazonaws.ssm#InvalidSchedule":
            throw await de_InvalidScheduleRes(parsedOutput, context);
        case "InvalidTarget":
        case "com.amazonaws.ssm#InvalidTarget":
            throw await de_InvalidTargetRes(parsedOutput, context);
        case "InvalidTargetMaps":
        case "com.amazonaws.ssm#InvalidTargetMaps":
            throw await de_InvalidTargetMapsRes(parsedOutput, context);
        case "UnsupportedPlatformType":
        case "com.amazonaws.ssm#UnsupportedPlatformType":
            throw await de_UnsupportedPlatformTypeRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_CreateDocumentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateDocumentResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateDocumentCommand = de_CreateDocumentCommand;
const de_CreateDocumentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DocumentAlreadyExists":
        case "com.amazonaws.ssm#DocumentAlreadyExists":
            throw await de_DocumentAlreadyExistsRes(parsedOutput, context);
        case "DocumentLimitExceeded":
        case "com.amazonaws.ssm#DocumentLimitExceeded":
            throw await de_DocumentLimitExceededRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocumentContent":
        case "com.amazonaws.ssm#InvalidDocumentContent":
            throw await de_InvalidDocumentContentRes(parsedOutput, context);
        case "InvalidDocumentSchemaVersion":
        case "com.amazonaws.ssm#InvalidDocumentSchemaVersion":
            throw await de_InvalidDocumentSchemaVersionRes(parsedOutput, context);
        case "MaxDocumentSizeExceeded":
        case "com.amazonaws.ssm#MaxDocumentSizeExceeded":
            throw await de_MaxDocumentSizeExceededRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_CreateMaintenanceWindowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateMaintenanceWindowCommand = de_CreateMaintenanceWindowCommand;
const de_CreateMaintenanceWindowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatch":
        case "com.amazonaws.ssm#IdempotentParameterMismatch":
            throw await de_IdempotentParameterMismatchRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ResourceLimitExceededException":
        case "com.amazonaws.ssm#ResourceLimitExceededException":
            throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_CreateOpsItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateOpsItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateOpsItemCommand = de_CreateOpsItemCommand;
const de_CreateOpsItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "OpsItemAccessDeniedException":
        case "com.amazonaws.ssm#OpsItemAccessDeniedException":
            throw await de_OpsItemAccessDeniedExceptionRes(parsedOutput, context);
        case "OpsItemAlreadyExistsException":
        case "com.amazonaws.ssm#OpsItemAlreadyExistsException":
            throw await de_OpsItemAlreadyExistsExceptionRes(parsedOutput, context);
        case "OpsItemInvalidParameterException":
        case "com.amazonaws.ssm#OpsItemInvalidParameterException":
            throw await de_OpsItemInvalidParameterExceptionRes(parsedOutput, context);
        case "OpsItemLimitExceededException":
        case "com.amazonaws.ssm#OpsItemLimitExceededException":
            throw await de_OpsItemLimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_CreateOpsMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateOpsMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateOpsMetadataCommand = de_CreateOpsMetadataCommand;
const de_CreateOpsMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "OpsMetadataAlreadyExistsException":
        case "com.amazonaws.ssm#OpsMetadataAlreadyExistsException":
            throw await de_OpsMetadataAlreadyExistsExceptionRes(parsedOutput, context);
        case "OpsMetadataInvalidArgumentException":
        case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
            throw await de_OpsMetadataInvalidArgumentExceptionRes(parsedOutput, context);
        case "OpsMetadataLimitExceededException":
        case "com.amazonaws.ssm#OpsMetadataLimitExceededException":
            throw await de_OpsMetadataLimitExceededExceptionRes(parsedOutput, context);
        case "OpsMetadataTooManyUpdatesException":
        case "com.amazonaws.ssm#OpsMetadataTooManyUpdatesException":
            throw await de_OpsMetadataTooManyUpdatesExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_CreatePatchBaselineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreatePatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreatePatchBaselineCommand = de_CreatePatchBaselineCommand;
const de_CreatePatchBaselineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatch":
        case "com.amazonaws.ssm#IdempotentParameterMismatch":
            throw await de_IdempotentParameterMismatchRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ResourceLimitExceededException":
        case "com.amazonaws.ssm#ResourceLimitExceededException":
            throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_CreateResourceDataSyncCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateResourceDataSyncCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateResourceDataSyncCommand = de_CreateResourceDataSyncCommand;
const de_CreateResourceDataSyncCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ResourceDataSyncAlreadyExistsException":
        case "com.amazonaws.ssm#ResourceDataSyncAlreadyExistsException":
            throw await de_ResourceDataSyncAlreadyExistsExceptionRes(parsedOutput, context);
        case "ResourceDataSyncCountExceededException":
        case "com.amazonaws.ssm#ResourceDataSyncCountExceededException":
            throw await de_ResourceDataSyncCountExceededExceptionRes(parsedOutput, context);
        case "ResourceDataSyncInvalidConfigurationException":
        case "com.amazonaws.ssm#ResourceDataSyncInvalidConfigurationException":
            throw await de_ResourceDataSyncInvalidConfigurationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteActivationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteActivationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteActivationCommand = de_DeleteActivationCommand;
const de_DeleteActivationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidActivation":
        case "com.amazonaws.ssm#InvalidActivation":
            throw await de_InvalidActivationRes(parsedOutput, context);
        case "InvalidActivationId":
        case "com.amazonaws.ssm#InvalidActivationId":
            throw await de_InvalidActivationIdRes(parsedOutput, context);
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            throw await de_TooManyUpdatesRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteAssociationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteAssociationCommand = de_DeleteAssociationCommand;
const de_DeleteAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.ssm#AssociationDoesNotExist":
            throw await de_AssociationDoesNotExistRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            throw await de_TooManyUpdatesRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteDocumentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteDocumentCommand = de_DeleteDocumentCommand;
const de_DeleteDocumentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociatedInstances":
        case "com.amazonaws.ssm#AssociatedInstances":
            throw await de_AssociatedInstancesRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidDocumentOperation":
        case "com.amazonaws.ssm#InvalidDocumentOperation":
            throw await de_InvalidDocumentOperationRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteInventoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteInventoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteInventoryCommand = de_DeleteInventoryCommand;
const de_DeleteInventoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDeleteInventoryParametersException":
        case "com.amazonaws.ssm#InvalidDeleteInventoryParametersException":
            throw await de_InvalidDeleteInventoryParametersExceptionRes(parsedOutput, context);
        case "InvalidInventoryRequestException":
        case "com.amazonaws.ssm#InvalidInventoryRequestException":
            throw await de_InvalidInventoryRequestExceptionRes(parsedOutput, context);
        case "InvalidOptionException":
        case "com.amazonaws.ssm#InvalidOptionException":
            throw await de_InvalidOptionExceptionRes(parsedOutput, context);
        case "InvalidTypeNameException":
        case "com.amazonaws.ssm#InvalidTypeNameException":
            throw await de_InvalidTypeNameExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteMaintenanceWindowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteMaintenanceWindowCommand = de_DeleteMaintenanceWindowCommand;
const de_DeleteMaintenanceWindowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteOpsMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteOpsMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteOpsMetadataCommand = de_DeleteOpsMetadataCommand;
const de_DeleteOpsMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "OpsMetadataInvalidArgumentException":
        case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
            throw await de_OpsMetadataInvalidArgumentExceptionRes(parsedOutput, context);
        case "OpsMetadataNotFoundException":
        case "com.amazonaws.ssm#OpsMetadataNotFoundException":
            throw await de_OpsMetadataNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteParameterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteParameterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteParameterCommand = de_DeleteParameterCommand;
const de_DeleteParameterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ParameterNotFound":
        case "com.amazonaws.ssm#ParameterNotFound":
            throw await de_ParameterNotFoundRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteParametersCommand = de_DeleteParametersCommand;
const de_DeleteParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeletePatchBaselineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeletePatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeletePatchBaselineCommand = de_DeletePatchBaselineCommand;
const de_DeletePatchBaselineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.ssm#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteResourceDataSyncCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteResourceDataSyncCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteResourceDataSyncCommand = de_DeleteResourceDataSyncCommand;
const de_DeleteResourceDataSyncCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ResourceDataSyncInvalidConfigurationException":
        case "com.amazonaws.ssm#ResourceDataSyncInvalidConfigurationException":
            throw await de_ResourceDataSyncInvalidConfigurationExceptionRes(parsedOutput, context);
        case "ResourceDataSyncNotFoundException":
        case "com.amazonaws.ssm#ResourceDataSyncNotFoundException":
            throw await de_ResourceDataSyncNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteResourcePolicyCommand = de_DeleteResourcePolicyCommand;
const de_DeleteResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ResourcePolicyConflictException":
        case "com.amazonaws.ssm#ResourcePolicyConflictException":
            throw await de_ResourcePolicyConflictExceptionRes(parsedOutput, context);
        case "ResourcePolicyInvalidParameterException":
        case "com.amazonaws.ssm#ResourcePolicyInvalidParameterException":
            throw await de_ResourcePolicyInvalidParameterExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeregisterManagedInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeregisterManagedInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeregisterManagedInstanceCommand = de_DeregisterManagedInstanceCommand;
const de_DeregisterManagedInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeregisterPatchBaselineForPatchGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeregisterPatchBaselineForPatchGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeregisterPatchBaselineForPatchGroupCommand = de_DeregisterPatchBaselineForPatchGroupCommand;
const de_DeregisterPatchBaselineForPatchGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            throw await de_InvalidResourceIdRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeregisterTargetFromMaintenanceWindowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeregisterTargetFromMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeregisterTargetFromMaintenanceWindowCommand = de_DeregisterTargetFromMaintenanceWindowCommand;
const de_DeregisterTargetFromMaintenanceWindowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "TargetInUseException":
        case "com.amazonaws.ssm#TargetInUseException":
            throw await de_TargetInUseExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeregisterTaskFromMaintenanceWindowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeregisterTaskFromMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeregisterTaskFromMaintenanceWindowCommand = de_DeregisterTaskFromMaintenanceWindowCommand;
const de_DeregisterTaskFromMaintenanceWindowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeActivationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeActivationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeActivationsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeActivationsCommand = de_DescribeActivationsCommand;
const de_DescribeActivationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            throw await de_InvalidFilterRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeAssociationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeAssociationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeAssociationCommand = de_DescribeAssociationCommand;
const de_DescribeAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.ssm#AssociationDoesNotExist":
            throw await de_AssociationDoesNotExistRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidAssociationVersion":
        case "com.amazonaws.ssm#InvalidAssociationVersion":
            throw await de_InvalidAssociationVersionRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeAssociationExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeAssociationExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeAssociationExecutionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeAssociationExecutionsCommand = de_DescribeAssociationExecutionsCommand;
const de_DescribeAssociationExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.ssm#AssociationDoesNotExist":
            throw await de_AssociationDoesNotExistRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeAssociationExecutionTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeAssociationExecutionTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeAssociationExecutionTargetsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeAssociationExecutionTargetsCommand = de_DescribeAssociationExecutionTargetsCommand;
const de_DescribeAssociationExecutionTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.ssm#AssociationDoesNotExist":
            throw await de_AssociationDoesNotExistRes(parsedOutput, context);
        case "AssociationExecutionDoesNotExist":
        case "com.amazonaws.ssm#AssociationExecutionDoesNotExist":
            throw await de_AssociationExecutionDoesNotExistRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeAutomationExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeAutomationExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeAutomationExecutionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeAutomationExecutionsCommand = de_DescribeAutomationExecutionsCommand;
const de_DescribeAutomationExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            throw await de_InvalidFilterKeyRes(parsedOutput, context);
        case "InvalidFilterValue":
        case "com.amazonaws.ssm#InvalidFilterValue":
            throw await de_InvalidFilterValueRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeAutomationStepExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeAutomationStepExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeAutomationStepExecutionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeAutomationStepExecutionsCommand = de_DescribeAutomationStepExecutionsCommand;
const de_DescribeAutomationStepExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AutomationExecutionNotFoundException":
        case "com.amazonaws.ssm#AutomationExecutionNotFoundException":
            throw await de_AutomationExecutionNotFoundExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            throw await de_InvalidFilterKeyRes(parsedOutput, context);
        case "InvalidFilterValue":
        case "com.amazonaws.ssm#InvalidFilterValue":
            throw await de_InvalidFilterValueRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeAvailablePatchesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeAvailablePatchesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeAvailablePatchesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeAvailablePatchesCommand = de_DescribeAvailablePatchesCommand;
const de_DescribeAvailablePatchesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeDocumentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeDocumentResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeDocumentCommand = de_DescribeDocumentCommand;
const de_DescribeDocumentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            throw await de_InvalidDocumentVersionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeDocumentPermissionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeDocumentPermissionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeDocumentPermissionCommand = de_DescribeDocumentPermissionCommand;
const de_DescribeDocumentPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidDocumentOperation":
        case "com.amazonaws.ssm#InvalidDocumentOperation":
            throw await de_InvalidDocumentOperationRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        case "InvalidPermissionType":
        case "com.amazonaws.ssm#InvalidPermissionType":
            throw await de_InvalidPermissionTypeRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeEffectiveInstanceAssociationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeEffectiveInstanceAssociationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeEffectiveInstanceAssociationsCommand = de_DescribeEffectiveInstanceAssociationsCommand;
const de_DescribeEffectiveInstanceAssociationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeEffectivePatchesForPatchBaselineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeEffectivePatchesForPatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeEffectivePatchesForPatchBaselineResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeEffectivePatchesForPatchBaselineCommand = de_DescribeEffectivePatchesForPatchBaselineCommand;
const de_DescribeEffectivePatchesForPatchBaselineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            throw await de_InvalidResourceIdRes(parsedOutput, context);
        case "UnsupportedOperatingSystem":
        case "com.amazonaws.ssm#UnsupportedOperatingSystem":
            throw await de_UnsupportedOperatingSystemRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeInstanceAssociationsStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeInstanceAssociationsStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeInstanceAssociationsStatusResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeInstanceAssociationsStatusCommand = de_DescribeInstanceAssociationsStatusCommand;
const de_DescribeInstanceAssociationsStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeInstanceInformationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeInstanceInformationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeInstanceInformationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeInstanceInformationCommand = de_DescribeInstanceInformationCommand;
const de_DescribeInstanceInformationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            throw await de_InvalidFilterKeyRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        case "InvalidInstanceInformationFilterValue":
        case "com.amazonaws.ssm#InvalidInstanceInformationFilterValue":
            throw await de_InvalidInstanceInformationFilterValueRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeInstancePatchesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeInstancePatchesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeInstancePatchesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeInstancePatchesCommand = de_DescribeInstancePatchesCommand;
const de_DescribeInstancePatchesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            throw await de_InvalidFilterRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeInstancePatchStatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeInstancePatchStatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeInstancePatchStatesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeInstancePatchStatesCommand = de_DescribeInstancePatchStatesCommand;
const de_DescribeInstancePatchStatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeInstancePatchStatesForPatchGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeInstancePatchStatesForPatchGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeInstancePatchStatesForPatchGroupResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeInstancePatchStatesForPatchGroupCommand = de_DescribeInstancePatchStatesForPatchGroupCommand;
const de_DescribeInstancePatchStatesForPatchGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            throw await de_InvalidFilterRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeInventoryDeletionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeInventoryDeletionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeInventoryDeletionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeInventoryDeletionsCommand = de_DescribeInventoryDeletionsCommand;
const de_DescribeInventoryDeletionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDeletionIdException":
        case "com.amazonaws.ssm#InvalidDeletionIdException":
            throw await de_InvalidDeletionIdExceptionRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeMaintenanceWindowExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeMaintenanceWindowExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeMaintenanceWindowExecutionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeMaintenanceWindowExecutionsCommand = de_DescribeMaintenanceWindowExecutionsCommand;
const de_DescribeMaintenanceWindowExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeMaintenanceWindowExecutionTaskInvocationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeMaintenanceWindowExecutionTaskInvocationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeMaintenanceWindowExecutionTaskInvocationsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeMaintenanceWindowExecutionTaskInvocationsCommand = de_DescribeMaintenanceWindowExecutionTaskInvocationsCommand;
const de_DescribeMaintenanceWindowExecutionTaskInvocationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeMaintenanceWindowExecutionTasksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeMaintenanceWindowExecutionTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeMaintenanceWindowExecutionTasksResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeMaintenanceWindowExecutionTasksCommand = de_DescribeMaintenanceWindowExecutionTasksCommand;
const de_DescribeMaintenanceWindowExecutionTasksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeMaintenanceWindowsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeMaintenanceWindowsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeMaintenanceWindowsCommand = de_DescribeMaintenanceWindowsCommand;
const de_DescribeMaintenanceWindowsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeMaintenanceWindowScheduleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeMaintenanceWindowScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeMaintenanceWindowScheduleCommand = de_DescribeMaintenanceWindowScheduleCommand;
const de_DescribeMaintenanceWindowScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeMaintenanceWindowsForTargetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeMaintenanceWindowsForTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeMaintenanceWindowsForTargetCommand = de_DescribeMaintenanceWindowsForTargetCommand;
const de_DescribeMaintenanceWindowsForTargetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeMaintenanceWindowTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeMaintenanceWindowTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeMaintenanceWindowTargetsCommand = de_DescribeMaintenanceWindowTargetsCommand;
const de_DescribeMaintenanceWindowTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeMaintenanceWindowTasksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeMaintenanceWindowTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeMaintenanceWindowTasksCommand = de_DescribeMaintenanceWindowTasksCommand;
const de_DescribeMaintenanceWindowTasksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeOpsItemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeOpsItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeOpsItemsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeOpsItemsCommand = de_DescribeOpsItemsCommand;
const de_DescribeOpsItemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeParametersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeParametersCommand = de_DescribeParametersCommand;
const de_DescribeParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            throw await de_InvalidFilterKeyRes(parsedOutput, context);
        case "InvalidFilterOption":
        case "com.amazonaws.ssm#InvalidFilterOption":
            throw await de_InvalidFilterOptionRes(parsedOutput, context);
        case "InvalidFilterValue":
        case "com.amazonaws.ssm#InvalidFilterValue":
            throw await de_InvalidFilterValueRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribePatchBaselinesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribePatchBaselinesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribePatchBaselinesCommand = de_DescribePatchBaselinesCommand;
const de_DescribePatchBaselinesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribePatchGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribePatchGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribePatchGroupsCommand = de_DescribePatchGroupsCommand;
const de_DescribePatchGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribePatchGroupStateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribePatchGroupStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribePatchGroupStateCommand = de_DescribePatchGroupStateCommand;
const de_DescribePatchGroupStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribePatchPropertiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribePatchPropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribePatchPropertiesCommand = de_DescribePatchPropertiesCommand;
const de_DescribePatchPropertiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeSessionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeSessionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeSessionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeSessionsCommand = de_DescribeSessionsCommand;
const de_DescribeSessionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            throw await de_InvalidFilterKeyRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DisassociateOpsItemRelatedItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DisassociateOpsItemRelatedItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DisassociateOpsItemRelatedItemCommand = de_DisassociateOpsItemRelatedItemCommand;
const de_DisassociateOpsItemRelatedItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "OpsItemInvalidParameterException":
        case "com.amazonaws.ssm#OpsItemInvalidParameterException":
            throw await de_OpsItemInvalidParameterExceptionRes(parsedOutput, context);
        case "OpsItemNotFoundException":
        case "com.amazonaws.ssm#OpsItemNotFoundException":
            throw await de_OpsItemNotFoundExceptionRes(parsedOutput, context);
        case "OpsItemRelatedItemAssociationNotFoundException":
        case "com.amazonaws.ssm#OpsItemRelatedItemAssociationNotFoundException":
            throw await de_OpsItemRelatedItemAssociationNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetAutomationExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetAutomationExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetAutomationExecutionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetAutomationExecutionCommand = de_GetAutomationExecutionCommand;
const de_GetAutomationExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AutomationExecutionNotFoundException":
        case "com.amazonaws.ssm#AutomationExecutionNotFoundException":
            throw await de_AutomationExecutionNotFoundExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetCalendarStateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetCalendarStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetCalendarStateCommand = de_GetCalendarStateCommand;
const de_GetCalendarStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidDocumentType":
        case "com.amazonaws.ssm#InvalidDocumentType":
            throw await de_InvalidDocumentTypeRes(parsedOutput, context);
        case "UnsupportedCalendarException":
        case "com.amazonaws.ssm#UnsupportedCalendarException":
            throw await de_UnsupportedCalendarExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetCommandInvocationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetCommandInvocationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetCommandInvocationCommand = de_GetCommandInvocationCommand;
const de_GetCommandInvocationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidCommandId":
        case "com.amazonaws.ssm#InvalidCommandId":
            throw await de_InvalidCommandIdRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        case "InvalidPluginName":
        case "com.amazonaws.ssm#InvalidPluginName":
            throw await de_InvalidPluginNameRes(parsedOutput, context);
        case "InvocationDoesNotExist":
        case "com.amazonaws.ssm#InvocationDoesNotExist":
            throw await de_InvocationDoesNotExistRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetConnectionStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetConnectionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetConnectionStatusCommand = de_GetConnectionStatusCommand;
const de_GetConnectionStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetDefaultPatchBaselineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetDefaultPatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetDefaultPatchBaselineCommand = de_GetDefaultPatchBaselineCommand;
const de_GetDefaultPatchBaselineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetDeployablePatchSnapshotForInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetDeployablePatchSnapshotForInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetDeployablePatchSnapshotForInstanceCommand = de_GetDeployablePatchSnapshotForInstanceCommand;
const de_GetDeployablePatchSnapshotForInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "UnsupportedFeatureRequiredException":
        case "com.amazonaws.ssm#UnsupportedFeatureRequiredException":
            throw await de_UnsupportedFeatureRequiredExceptionRes(parsedOutput, context);
        case "UnsupportedOperatingSystem":
        case "com.amazonaws.ssm#UnsupportedOperatingSystem":
            throw await de_UnsupportedOperatingSystemRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetDocumentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetDocumentResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetDocumentCommand = de_GetDocumentCommand;
const de_GetDocumentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            throw await de_InvalidDocumentVersionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetInventoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetInventoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetInventoryCommand = de_GetInventoryCommand;
const de_GetInventoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidAggregatorException":
        case "com.amazonaws.ssm#InvalidAggregatorException":
            throw await de_InvalidAggregatorExceptionRes(parsedOutput, context);
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            throw await de_InvalidFilterRes(parsedOutput, context);
        case "InvalidInventoryGroupException":
        case "com.amazonaws.ssm#InvalidInventoryGroupException":
            throw await de_InvalidInventoryGroupExceptionRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        case "InvalidResultAttributeException":
        case "com.amazonaws.ssm#InvalidResultAttributeException":
            throw await de_InvalidResultAttributeExceptionRes(parsedOutput, context);
        case "InvalidTypeNameException":
        case "com.amazonaws.ssm#InvalidTypeNameException":
            throw await de_InvalidTypeNameExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetInventorySchemaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetInventorySchemaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetInventorySchemaCommand = de_GetInventorySchemaCommand;
const de_GetInventorySchemaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        case "InvalidTypeNameException":
        case "com.amazonaws.ssm#InvalidTypeNameException":
            throw await de_InvalidTypeNameExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetMaintenanceWindowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetMaintenanceWindowResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetMaintenanceWindowCommand = de_GetMaintenanceWindowCommand;
const de_GetMaintenanceWindowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetMaintenanceWindowExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetMaintenanceWindowExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetMaintenanceWindowExecutionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetMaintenanceWindowExecutionCommand = de_GetMaintenanceWindowExecutionCommand;
const de_GetMaintenanceWindowExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetMaintenanceWindowExecutionTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetMaintenanceWindowExecutionTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetMaintenanceWindowExecutionTaskResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetMaintenanceWindowExecutionTaskCommand = de_GetMaintenanceWindowExecutionTaskCommand;
const de_GetMaintenanceWindowExecutionTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetMaintenanceWindowExecutionTaskInvocationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetMaintenanceWindowExecutionTaskInvocationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetMaintenanceWindowExecutionTaskInvocationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetMaintenanceWindowExecutionTaskInvocationCommand = de_GetMaintenanceWindowExecutionTaskInvocationCommand;
const de_GetMaintenanceWindowExecutionTaskInvocationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetMaintenanceWindowTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetMaintenanceWindowTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetMaintenanceWindowTaskResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetMaintenanceWindowTaskCommand = de_GetMaintenanceWindowTaskCommand;
const de_GetMaintenanceWindowTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetOpsItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetOpsItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetOpsItemResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetOpsItemCommand = de_GetOpsItemCommand;
const de_GetOpsItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "OpsItemAccessDeniedException":
        case "com.amazonaws.ssm#OpsItemAccessDeniedException":
            throw await de_OpsItemAccessDeniedExceptionRes(parsedOutput, context);
        case "OpsItemNotFoundException":
        case "com.amazonaws.ssm#OpsItemNotFoundException":
            throw await de_OpsItemNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetOpsMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetOpsMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetOpsMetadataCommand = de_GetOpsMetadataCommand;
const de_GetOpsMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "OpsMetadataInvalidArgumentException":
        case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
            throw await de_OpsMetadataInvalidArgumentExceptionRes(parsedOutput, context);
        case "OpsMetadataNotFoundException":
        case "com.amazonaws.ssm#OpsMetadataNotFoundException":
            throw await de_OpsMetadataNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetOpsSummaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetOpsSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetOpsSummaryCommand = de_GetOpsSummaryCommand;
const de_GetOpsSummaryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidAggregatorException":
        case "com.amazonaws.ssm#InvalidAggregatorException":
            throw await de_InvalidAggregatorExceptionRes(parsedOutput, context);
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            throw await de_InvalidFilterRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        case "InvalidTypeNameException":
        case "com.amazonaws.ssm#InvalidTypeNameException":
            throw await de_InvalidTypeNameExceptionRes(parsedOutput, context);
        case "ResourceDataSyncNotFoundException":
        case "com.amazonaws.ssm#ResourceDataSyncNotFoundException":
            throw await de_ResourceDataSyncNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetParameterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetParameterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetParameterResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetParameterCommand = de_GetParameterCommand;
const de_GetParameterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidKeyId":
        case "com.amazonaws.ssm#InvalidKeyId":
            throw await de_InvalidKeyIdRes(parsedOutput, context);
        case "ParameterNotFound":
        case "com.amazonaws.ssm#ParameterNotFound":
            throw await de_ParameterNotFoundRes(parsedOutput, context);
        case "ParameterVersionNotFound":
        case "com.amazonaws.ssm#ParameterVersionNotFound":
            throw await de_ParameterVersionNotFoundRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetParameterHistoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetParameterHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetParameterHistoryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetParameterHistoryCommand = de_GetParameterHistoryCommand;
const de_GetParameterHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidKeyId":
        case "com.amazonaws.ssm#InvalidKeyId":
            throw await de_InvalidKeyIdRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        case "ParameterNotFound":
        case "com.amazonaws.ssm#ParameterNotFound":
            throw await de_ParameterNotFoundRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetParametersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetParametersCommand = de_GetParametersCommand;
const de_GetParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidKeyId":
        case "com.amazonaws.ssm#InvalidKeyId":
            throw await de_InvalidKeyIdRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetParametersByPathCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetParametersByPathCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetParametersByPathResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetParametersByPathCommand = de_GetParametersByPathCommand;
const de_GetParametersByPathCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            throw await de_InvalidFilterKeyRes(parsedOutput, context);
        case "InvalidFilterOption":
        case "com.amazonaws.ssm#InvalidFilterOption":
            throw await de_InvalidFilterOptionRes(parsedOutput, context);
        case "InvalidFilterValue":
        case "com.amazonaws.ssm#InvalidFilterValue":
            throw await de_InvalidFilterValueRes(parsedOutput, context);
        case "InvalidKeyId":
        case "com.amazonaws.ssm#InvalidKeyId":
            throw await de_InvalidKeyIdRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetPatchBaselineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetPatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetPatchBaselineResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetPatchBaselineCommand = de_GetPatchBaselineCommand;
const de_GetPatchBaselineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            throw await de_InvalidResourceIdRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetPatchBaselineForPatchGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetPatchBaselineForPatchGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetPatchBaselineForPatchGroupCommand = de_GetPatchBaselineForPatchGroupCommand;
const de_GetPatchBaselineForPatchGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetResourcePoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetResourcePoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetResourcePoliciesCommand = de_GetResourcePoliciesCommand;
const de_GetResourcePoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ResourcePolicyInvalidParameterException":
        case "com.amazonaws.ssm#ResourcePolicyInvalidParameterException":
            throw await de_ResourcePolicyInvalidParameterExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetServiceSettingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetServiceSettingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetServiceSettingResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetServiceSettingCommand = de_GetServiceSettingCommand;
const de_GetServiceSettingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ServiceSettingNotFound":
        case "com.amazonaws.ssm#ServiceSettingNotFound":
            throw await de_ServiceSettingNotFoundRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_LabelParameterVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_LabelParameterVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_LabelParameterVersionCommand = de_LabelParameterVersionCommand;
const de_LabelParameterVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ParameterNotFound":
        case "com.amazonaws.ssm#ParameterNotFound":
            throw await de_ParameterNotFoundRes(parsedOutput, context);
        case "ParameterVersionLabelLimitExceeded":
        case "com.amazonaws.ssm#ParameterVersionLabelLimitExceeded":
            throw await de_ParameterVersionLabelLimitExceededRes(parsedOutput, context);
        case "ParameterVersionNotFound":
        case "com.amazonaws.ssm#ParameterVersionNotFound":
            throw await de_ParameterVersionNotFoundRes(parsedOutput, context);
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            throw await de_TooManyUpdatesRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListAssociationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListAssociationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListAssociationsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListAssociationsCommand = de_ListAssociationsCommand;
const de_ListAssociationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListAssociationVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListAssociationVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListAssociationVersionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListAssociationVersionsCommand = de_ListAssociationVersionsCommand;
const de_ListAssociationVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.ssm#AssociationDoesNotExist":
            throw await de_AssociationDoesNotExistRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListCommandInvocationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListCommandInvocationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListCommandInvocationsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListCommandInvocationsCommand = de_ListCommandInvocationsCommand;
const de_ListCommandInvocationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidCommandId":
        case "com.amazonaws.ssm#InvalidCommandId":
            throw await de_InvalidCommandIdRes(parsedOutput, context);
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            throw await de_InvalidFilterKeyRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListCommandsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListCommandsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListCommandsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListCommandsCommand = de_ListCommandsCommand;
const de_ListCommandsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidCommandId":
        case "com.amazonaws.ssm#InvalidCommandId":
            throw await de_InvalidCommandIdRes(parsedOutput, context);
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            throw await de_InvalidFilterKeyRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListComplianceItemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListComplianceItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListComplianceItemsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListComplianceItemsCommand = de_ListComplianceItemsCommand;
const de_ListComplianceItemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            throw await de_InvalidFilterRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            throw await de_InvalidResourceIdRes(parsedOutput, context);
        case "InvalidResourceType":
        case "com.amazonaws.ssm#InvalidResourceType":
            throw await de_InvalidResourceTypeRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListComplianceSummariesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListComplianceSummariesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListComplianceSummariesCommand = de_ListComplianceSummariesCommand;
const de_ListComplianceSummariesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            throw await de_InvalidFilterRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListDocumentMetadataHistoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListDocumentMetadataHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListDocumentMetadataHistoryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListDocumentMetadataHistoryCommand = de_ListDocumentMetadataHistoryCommand;
const de_ListDocumentMetadataHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            throw await de_InvalidDocumentVersionRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListDocumentsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListDocumentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListDocumentsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListDocumentsCommand = de_ListDocumentsCommand;
const de_ListDocumentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidFilterKey":
        case "com.amazonaws.ssm#InvalidFilterKey":
            throw await de_InvalidFilterKeyRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListDocumentVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListDocumentVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListDocumentVersionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListDocumentVersionsCommand = de_ListDocumentVersionsCommand;
const de_ListDocumentVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListInventoryEntriesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListInventoryEntriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListInventoryEntriesCommand = de_ListInventoryEntriesCommand;
const de_ListInventoryEntriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            throw await de_InvalidFilterRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        case "InvalidTypeNameException":
        case "com.amazonaws.ssm#InvalidTypeNameException":
            throw await de_InvalidTypeNameExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListOpsItemEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListOpsItemEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListOpsItemEventsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListOpsItemEventsCommand = de_ListOpsItemEventsCommand;
const de_ListOpsItemEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "OpsItemInvalidParameterException":
        case "com.amazonaws.ssm#OpsItemInvalidParameterException":
            throw await de_OpsItemInvalidParameterExceptionRes(parsedOutput, context);
        case "OpsItemLimitExceededException":
        case "com.amazonaws.ssm#OpsItemLimitExceededException":
            throw await de_OpsItemLimitExceededExceptionRes(parsedOutput, context);
        case "OpsItemNotFoundException":
        case "com.amazonaws.ssm#OpsItemNotFoundException":
            throw await de_OpsItemNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListOpsItemRelatedItemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListOpsItemRelatedItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListOpsItemRelatedItemsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListOpsItemRelatedItemsCommand = de_ListOpsItemRelatedItemsCommand;
const de_ListOpsItemRelatedItemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "OpsItemInvalidParameterException":
        case "com.amazonaws.ssm#OpsItemInvalidParameterException":
            throw await de_OpsItemInvalidParameterExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListOpsMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListOpsMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListOpsMetadataResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListOpsMetadataCommand = de_ListOpsMetadataCommand;
const de_ListOpsMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "OpsMetadataInvalidArgumentException":
        case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
            throw await de_OpsMetadataInvalidArgumentExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListResourceComplianceSummariesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListResourceComplianceSummariesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListResourceComplianceSummariesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListResourceComplianceSummariesCommand = de_ListResourceComplianceSummariesCommand;
const de_ListResourceComplianceSummariesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidFilter":
        case "com.amazonaws.ssm#InvalidFilter":
            throw await de_InvalidFilterRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListResourceDataSyncCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListResourceDataSyncCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListResourceDataSyncResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListResourceDataSyncCommand = de_ListResourceDataSyncCommand;
const de_ListResourceDataSyncCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidNextToken":
        case "com.amazonaws.ssm#InvalidNextToken":
            throw await de_InvalidNextTokenRes(parsedOutput, context);
        case "ResourceDataSyncInvalidConfigurationException":
        case "com.amazonaws.ssm#ResourceDataSyncInvalidConfigurationException":
            throw await de_ResourceDataSyncInvalidConfigurationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListTagsForResourceCommand = de_ListTagsForResourceCommand;
const de_ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            throw await de_InvalidResourceIdRes(parsedOutput, context);
        case "InvalidResourceType":
        case "com.amazonaws.ssm#InvalidResourceType":
            throw await de_InvalidResourceTypeRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ModifyDocumentPermissionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ModifyDocumentPermissionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ModifyDocumentPermissionCommand = de_ModifyDocumentPermissionCommand;
const de_ModifyDocumentPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DocumentLimitExceeded":
        case "com.amazonaws.ssm#DocumentLimitExceeded":
            throw await de_DocumentLimitExceededRes(parsedOutput, context);
        case "DocumentPermissionLimit":
        case "com.amazonaws.ssm#DocumentPermissionLimit":
            throw await de_DocumentPermissionLimitRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidPermissionType":
        case "com.amazonaws.ssm#InvalidPermissionType":
            throw await de_InvalidPermissionTypeRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_PutComplianceItemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutComplianceItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_PutComplianceItemsCommand = de_PutComplianceItemsCommand;
const de_PutComplianceItemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ComplianceTypeCountLimitExceededException":
        case "com.amazonaws.ssm#ComplianceTypeCountLimitExceededException":
            throw await de_ComplianceTypeCountLimitExceededExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidItemContentException":
        case "com.amazonaws.ssm#InvalidItemContentException":
            throw await de_InvalidItemContentExceptionRes(parsedOutput, context);
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            throw await de_InvalidResourceIdRes(parsedOutput, context);
        case "InvalidResourceType":
        case "com.amazonaws.ssm#InvalidResourceType":
            throw await de_InvalidResourceTypeRes(parsedOutput, context);
        case "ItemSizeLimitExceededException":
        case "com.amazonaws.ssm#ItemSizeLimitExceededException":
            throw await de_ItemSizeLimitExceededExceptionRes(parsedOutput, context);
        case "TotalSizeLimitExceededException":
        case "com.amazonaws.ssm#TotalSizeLimitExceededException":
            throw await de_TotalSizeLimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_PutInventoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutInventoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_PutInventoryCommand = de_PutInventoryCommand;
const de_PutInventoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomSchemaCountLimitExceededException":
        case "com.amazonaws.ssm#CustomSchemaCountLimitExceededException":
            throw await de_CustomSchemaCountLimitExceededExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        case "InvalidInventoryItemContextException":
        case "com.amazonaws.ssm#InvalidInventoryItemContextException":
            throw await de_InvalidInventoryItemContextExceptionRes(parsedOutput, context);
        case "InvalidItemContentException":
        case "com.amazonaws.ssm#InvalidItemContentException":
            throw await de_InvalidItemContentExceptionRes(parsedOutput, context);
        case "InvalidTypeNameException":
        case "com.amazonaws.ssm#InvalidTypeNameException":
            throw await de_InvalidTypeNameExceptionRes(parsedOutput, context);
        case "ItemContentMismatchException":
        case "com.amazonaws.ssm#ItemContentMismatchException":
            throw await de_ItemContentMismatchExceptionRes(parsedOutput, context);
        case "ItemSizeLimitExceededException":
        case "com.amazonaws.ssm#ItemSizeLimitExceededException":
            throw await de_ItemSizeLimitExceededExceptionRes(parsedOutput, context);
        case "SubTypeCountLimitExceededException":
        case "com.amazonaws.ssm#SubTypeCountLimitExceededException":
            throw await de_SubTypeCountLimitExceededExceptionRes(parsedOutput, context);
        case "TotalSizeLimitExceededException":
        case "com.amazonaws.ssm#TotalSizeLimitExceededException":
            throw await de_TotalSizeLimitExceededExceptionRes(parsedOutput, context);
        case "UnsupportedInventoryItemContextException":
        case "com.amazonaws.ssm#UnsupportedInventoryItemContextException":
            throw await de_UnsupportedInventoryItemContextExceptionRes(parsedOutput, context);
        case "UnsupportedInventorySchemaVersionException":
        case "com.amazonaws.ssm#UnsupportedInventorySchemaVersionException":
            throw await de_UnsupportedInventorySchemaVersionExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_PutParameterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutParameterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_PutParameterCommand = de_PutParameterCommand;
const de_PutParameterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HierarchyLevelLimitExceededException":
        case "com.amazonaws.ssm#HierarchyLevelLimitExceededException":
            throw await de_HierarchyLevelLimitExceededExceptionRes(parsedOutput, context);
        case "HierarchyTypeMismatchException":
        case "com.amazonaws.ssm#HierarchyTypeMismatchException":
            throw await de_HierarchyTypeMismatchExceptionRes(parsedOutput, context);
        case "IncompatiblePolicyException":
        case "com.amazonaws.ssm#IncompatiblePolicyException":
            throw await de_IncompatiblePolicyExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidAllowedPatternException":
        case "com.amazonaws.ssm#InvalidAllowedPatternException":
            throw await de_InvalidAllowedPatternExceptionRes(parsedOutput, context);
        case "InvalidKeyId":
        case "com.amazonaws.ssm#InvalidKeyId":
            throw await de_InvalidKeyIdRes(parsedOutput, context);
        case "InvalidPolicyAttributeException":
        case "com.amazonaws.ssm#InvalidPolicyAttributeException":
            throw await de_InvalidPolicyAttributeExceptionRes(parsedOutput, context);
        case "InvalidPolicyTypeException":
        case "com.amazonaws.ssm#InvalidPolicyTypeException":
            throw await de_InvalidPolicyTypeExceptionRes(parsedOutput, context);
        case "ParameterAlreadyExists":
        case "com.amazonaws.ssm#ParameterAlreadyExists":
            throw await de_ParameterAlreadyExistsRes(parsedOutput, context);
        case "ParameterLimitExceeded":
        case "com.amazonaws.ssm#ParameterLimitExceeded":
            throw await de_ParameterLimitExceededRes(parsedOutput, context);
        case "ParameterMaxVersionLimitExceeded":
        case "com.amazonaws.ssm#ParameterMaxVersionLimitExceeded":
            throw await de_ParameterMaxVersionLimitExceededRes(parsedOutput, context);
        case "ParameterPatternMismatchException":
        case "com.amazonaws.ssm#ParameterPatternMismatchException":
            throw await de_ParameterPatternMismatchExceptionRes(parsedOutput, context);
        case "PoliciesLimitExceededException":
        case "com.amazonaws.ssm#PoliciesLimitExceededException":
            throw await de_PoliciesLimitExceededExceptionRes(parsedOutput, context);
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            throw await de_TooManyUpdatesRes(parsedOutput, context);
        case "UnsupportedParameterType":
        case "com.amazonaws.ssm#UnsupportedParameterType":
            throw await de_UnsupportedParameterTypeRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_PutResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_PutResourcePolicyCommand = de_PutResourcePolicyCommand;
const de_PutResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ResourcePolicyConflictException":
        case "com.amazonaws.ssm#ResourcePolicyConflictException":
            throw await de_ResourcePolicyConflictExceptionRes(parsedOutput, context);
        case "ResourcePolicyInvalidParameterException":
        case "com.amazonaws.ssm#ResourcePolicyInvalidParameterException":
            throw await de_ResourcePolicyInvalidParameterExceptionRes(parsedOutput, context);
        case "ResourcePolicyLimitExceededException":
        case "com.amazonaws.ssm#ResourcePolicyLimitExceededException":
            throw await de_ResourcePolicyLimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_RegisterDefaultPatchBaselineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_RegisterDefaultPatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_RegisterDefaultPatchBaselineCommand = de_RegisterDefaultPatchBaselineCommand;
const de_RegisterDefaultPatchBaselineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            throw await de_InvalidResourceIdRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_RegisterPatchBaselineForPatchGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_RegisterPatchBaselineForPatchGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_RegisterPatchBaselineForPatchGroupCommand = de_RegisterPatchBaselineForPatchGroupCommand;
const de_RegisterPatchBaselineForPatchGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.ssm#AlreadyExistsException":
            throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            throw await de_InvalidResourceIdRes(parsedOutput, context);
        case "ResourceLimitExceededException":
        case "com.amazonaws.ssm#ResourceLimitExceededException":
            throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_RegisterTargetWithMaintenanceWindowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_RegisterTargetWithMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_RegisterTargetWithMaintenanceWindowCommand = de_RegisterTargetWithMaintenanceWindowCommand;
const de_RegisterTargetWithMaintenanceWindowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "IdempotentParameterMismatch":
        case "com.amazonaws.ssm#IdempotentParameterMismatch":
            throw await de_IdempotentParameterMismatchRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ResourceLimitExceededException":
        case "com.amazonaws.ssm#ResourceLimitExceededException":
            throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_RegisterTaskWithMaintenanceWindowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_RegisterTaskWithMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_RegisterTaskWithMaintenanceWindowCommand = de_RegisterTaskWithMaintenanceWindowCommand;
const de_RegisterTaskWithMaintenanceWindowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "FeatureNotAvailableException":
        case "com.amazonaws.ssm#FeatureNotAvailableException":
            throw await de_FeatureNotAvailableExceptionRes(parsedOutput, context);
        case "IdempotentParameterMismatch":
        case "com.amazonaws.ssm#IdempotentParameterMismatch":
            throw await de_IdempotentParameterMismatchRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ResourceLimitExceededException":
        case "com.amazonaws.ssm#ResourceLimitExceededException":
            throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_RemoveTagsFromResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_RemoveTagsFromResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_RemoveTagsFromResourceCommand = de_RemoveTagsFromResourceCommand;
const de_RemoveTagsFromResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidResourceId":
        case "com.amazonaws.ssm#InvalidResourceId":
            throw await de_InvalidResourceIdRes(parsedOutput, context);
        case "InvalidResourceType":
        case "com.amazonaws.ssm#InvalidResourceType":
            throw await de_InvalidResourceTypeRes(parsedOutput, context);
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            throw await de_TooManyUpdatesRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ResetServiceSettingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ResetServiceSettingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ResetServiceSettingResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ResetServiceSettingCommand = de_ResetServiceSettingCommand;
const de_ResetServiceSettingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ServiceSettingNotFound":
        case "com.amazonaws.ssm#ServiceSettingNotFound":
            throw await de_ServiceSettingNotFoundRes(parsedOutput, context);
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            throw await de_TooManyUpdatesRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ResumeSessionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ResumeSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ResumeSessionCommand = de_ResumeSessionCommand;
const de_ResumeSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_SendAutomationSignalCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SendAutomationSignalCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SendAutomationSignalCommand = de_SendAutomationSignalCommand;
const de_SendAutomationSignalCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AutomationExecutionNotFoundException":
        case "com.amazonaws.ssm#AutomationExecutionNotFoundException":
            throw await de_AutomationExecutionNotFoundExceptionRes(parsedOutput, context);
        case "AutomationStepNotFoundException":
        case "com.amazonaws.ssm#AutomationStepNotFoundException":
            throw await de_AutomationStepNotFoundExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidAutomationSignalException":
        case "com.amazonaws.ssm#InvalidAutomationSignalException":
            throw await de_InvalidAutomationSignalExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_SendCommandCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SendCommandCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SendCommandResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SendCommandCommand = de_SendCommandCommand;
const de_SendCommandCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateInstanceId":
        case "com.amazonaws.ssm#DuplicateInstanceId":
            throw await de_DuplicateInstanceIdRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            throw await de_InvalidDocumentVersionRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        case "InvalidNotificationConfig":
        case "com.amazonaws.ssm#InvalidNotificationConfig":
            throw await de_InvalidNotificationConfigRes(parsedOutput, context);
        case "InvalidOutputFolder":
        case "com.amazonaws.ssm#InvalidOutputFolder":
            throw await de_InvalidOutputFolderRes(parsedOutput, context);
        case "InvalidParameters":
        case "com.amazonaws.ssm#InvalidParameters":
            throw await de_InvalidParametersRes(parsedOutput, context);
        case "InvalidRole":
        case "com.amazonaws.ssm#InvalidRole":
            throw await de_InvalidRoleRes(parsedOutput, context);
        case "MaxDocumentSizeExceeded":
        case "com.amazonaws.ssm#MaxDocumentSizeExceeded":
            throw await de_MaxDocumentSizeExceededRes(parsedOutput, context);
        case "UnsupportedPlatformType":
        case "com.amazonaws.ssm#UnsupportedPlatformType":
            throw await de_UnsupportedPlatformTypeRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_StartAssociationsOnceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_StartAssociationsOnceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_StartAssociationsOnceCommand = de_StartAssociationsOnceCommand;
const de_StartAssociationsOnceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.ssm#AssociationDoesNotExist":
            throw await de_AssociationDoesNotExistRes(parsedOutput, context);
        case "InvalidAssociation":
        case "com.amazonaws.ssm#InvalidAssociation":
            throw await de_InvalidAssociationRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_StartAutomationExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_StartAutomationExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_StartAutomationExecutionCommand = de_StartAutomationExecutionCommand;
const de_StartAutomationExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AutomationDefinitionNotFoundException":
        case "com.amazonaws.ssm#AutomationDefinitionNotFoundException":
            throw await de_AutomationDefinitionNotFoundExceptionRes(parsedOutput, context);
        case "AutomationDefinitionVersionNotFoundException":
        case "com.amazonaws.ssm#AutomationDefinitionVersionNotFoundException":
            throw await de_AutomationDefinitionVersionNotFoundExceptionRes(parsedOutput, context);
        case "AutomationExecutionLimitExceededException":
        case "com.amazonaws.ssm#AutomationExecutionLimitExceededException":
            throw await de_AutomationExecutionLimitExceededExceptionRes(parsedOutput, context);
        case "IdempotentParameterMismatch":
        case "com.amazonaws.ssm#IdempotentParameterMismatch":
            throw await de_IdempotentParameterMismatchRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidAutomationExecutionParametersException":
        case "com.amazonaws.ssm#InvalidAutomationExecutionParametersException":
            throw await de_InvalidAutomationExecutionParametersExceptionRes(parsedOutput, context);
        case "InvalidTarget":
        case "com.amazonaws.ssm#InvalidTarget":
            throw await de_InvalidTargetRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_StartChangeRequestExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_StartChangeRequestExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_StartChangeRequestExecutionCommand = de_StartChangeRequestExecutionCommand;
const de_StartChangeRequestExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AutomationDefinitionNotApprovedException":
        case "com.amazonaws.ssm#AutomationDefinitionNotApprovedException":
            throw await de_AutomationDefinitionNotApprovedExceptionRes(parsedOutput, context);
        case "AutomationDefinitionNotFoundException":
        case "com.amazonaws.ssm#AutomationDefinitionNotFoundException":
            throw await de_AutomationDefinitionNotFoundExceptionRes(parsedOutput, context);
        case "AutomationDefinitionVersionNotFoundException":
        case "com.amazonaws.ssm#AutomationDefinitionVersionNotFoundException":
            throw await de_AutomationDefinitionVersionNotFoundExceptionRes(parsedOutput, context);
        case "AutomationExecutionLimitExceededException":
        case "com.amazonaws.ssm#AutomationExecutionLimitExceededException":
            throw await de_AutomationExecutionLimitExceededExceptionRes(parsedOutput, context);
        case "IdempotentParameterMismatch":
        case "com.amazonaws.ssm#IdempotentParameterMismatch":
            throw await de_IdempotentParameterMismatchRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidAutomationExecutionParametersException":
        case "com.amazonaws.ssm#InvalidAutomationExecutionParametersException":
            throw await de_InvalidAutomationExecutionParametersExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_StartSessionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_StartSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_StartSessionCommand = de_StartSessionCommand;
const de_StartSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "TargetNotConnected":
        case "com.amazonaws.ssm#TargetNotConnected":
            throw await de_TargetNotConnectedRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_StopAutomationExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_StopAutomationExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_StopAutomationExecutionCommand = de_StopAutomationExecutionCommand;
const de_StopAutomationExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AutomationExecutionNotFoundException":
        case "com.amazonaws.ssm#AutomationExecutionNotFoundException":
            throw await de_AutomationExecutionNotFoundExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidAutomationStatusUpdateException":
        case "com.amazonaws.ssm#InvalidAutomationStatusUpdateException":
            throw await de_InvalidAutomationStatusUpdateExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_TerminateSessionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_TerminateSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_TerminateSessionCommand = de_TerminateSessionCommand;
const de_TerminateSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UnlabelParameterVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UnlabelParameterVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UnlabelParameterVersionCommand = de_UnlabelParameterVersionCommand;
const de_UnlabelParameterVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ParameterNotFound":
        case "com.amazonaws.ssm#ParameterNotFound":
            throw await de_ParameterNotFoundRes(parsedOutput, context);
        case "ParameterVersionNotFound":
        case "com.amazonaws.ssm#ParameterVersionNotFound":
            throw await de_ParameterVersionNotFoundRes(parsedOutput, context);
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            throw await de_TooManyUpdatesRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateAssociationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateAssociationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateAssociationCommand = de_UpdateAssociationCommand;
const de_UpdateAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.ssm#AssociationDoesNotExist":
            throw await de_AssociationDoesNotExistRes(parsedOutput, context);
        case "AssociationVersionLimitExceeded":
        case "com.amazonaws.ssm#AssociationVersionLimitExceeded":
            throw await de_AssociationVersionLimitExceededRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidAssociationVersion":
        case "com.amazonaws.ssm#InvalidAssociationVersion":
            throw await de_InvalidAssociationVersionRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            throw await de_InvalidDocumentVersionRes(parsedOutput, context);
        case "InvalidOutputLocation":
        case "com.amazonaws.ssm#InvalidOutputLocation":
            throw await de_InvalidOutputLocationRes(parsedOutput, context);
        case "InvalidParameters":
        case "com.amazonaws.ssm#InvalidParameters":
            throw await de_InvalidParametersRes(parsedOutput, context);
        case "InvalidSchedule":
        case "com.amazonaws.ssm#InvalidSchedule":
            throw await de_InvalidScheduleRes(parsedOutput, context);
        case "InvalidTarget":
        case "com.amazonaws.ssm#InvalidTarget":
            throw await de_InvalidTargetRes(parsedOutput, context);
        case "InvalidTargetMaps":
        case "com.amazonaws.ssm#InvalidTargetMaps":
            throw await de_InvalidTargetMapsRes(parsedOutput, context);
        case "InvalidUpdate":
        case "com.amazonaws.ssm#InvalidUpdate":
            throw await de_InvalidUpdateRes(parsedOutput, context);
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            throw await de_TooManyUpdatesRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateAssociationStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateAssociationStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateAssociationStatusResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateAssociationStatusCommand = de_UpdateAssociationStatusCommand;
const de_UpdateAssociationStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AssociationDoesNotExist":
        case "com.amazonaws.ssm#AssociationDoesNotExist":
            throw await de_AssociationDoesNotExistRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        case "StatusUnchanged":
        case "com.amazonaws.ssm#StatusUnchanged":
            throw await de_StatusUnchangedRes(parsedOutput, context);
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            throw await de_TooManyUpdatesRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateDocumentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateDocumentResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateDocumentCommand = de_UpdateDocumentCommand;
const de_UpdateDocumentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DocumentVersionLimitExceeded":
        case "com.amazonaws.ssm#DocumentVersionLimitExceeded":
            throw await de_DocumentVersionLimitExceededRes(parsedOutput, context);
        case "DuplicateDocumentContent":
        case "com.amazonaws.ssm#DuplicateDocumentContent":
            throw await de_DuplicateDocumentContentRes(parsedOutput, context);
        case "DuplicateDocumentVersionName":
        case "com.amazonaws.ssm#DuplicateDocumentVersionName":
            throw await de_DuplicateDocumentVersionNameRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidDocumentContent":
        case "com.amazonaws.ssm#InvalidDocumentContent":
            throw await de_InvalidDocumentContentRes(parsedOutput, context);
        case "InvalidDocumentOperation":
        case "com.amazonaws.ssm#InvalidDocumentOperation":
            throw await de_InvalidDocumentOperationRes(parsedOutput, context);
        case "InvalidDocumentSchemaVersion":
        case "com.amazonaws.ssm#InvalidDocumentSchemaVersion":
            throw await de_InvalidDocumentSchemaVersionRes(parsedOutput, context);
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            throw await de_InvalidDocumentVersionRes(parsedOutput, context);
        case "MaxDocumentSizeExceeded":
        case "com.amazonaws.ssm#MaxDocumentSizeExceeded":
            throw await de_MaxDocumentSizeExceededRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateDocumentDefaultVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateDocumentDefaultVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateDocumentDefaultVersionCommand = de_UpdateDocumentDefaultVersionCommand;
const de_UpdateDocumentDefaultVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidDocumentSchemaVersion":
        case "com.amazonaws.ssm#InvalidDocumentSchemaVersion":
            throw await de_InvalidDocumentSchemaVersionRes(parsedOutput, context);
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            throw await de_InvalidDocumentVersionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateDocumentMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateDocumentMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateDocumentMetadataCommand = de_UpdateDocumentMetadataCommand;
const de_UpdateDocumentMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidDocument":
        case "com.amazonaws.ssm#InvalidDocument":
            throw await de_InvalidDocumentRes(parsedOutput, context);
        case "InvalidDocumentOperation":
        case "com.amazonaws.ssm#InvalidDocumentOperation":
            throw await de_InvalidDocumentOperationRes(parsedOutput, context);
        case "InvalidDocumentVersion":
        case "com.amazonaws.ssm#InvalidDocumentVersion":
            throw await de_InvalidDocumentVersionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateMaintenanceWindowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateMaintenanceWindowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateMaintenanceWindowCommand = de_UpdateMaintenanceWindowCommand;
const de_UpdateMaintenanceWindowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateMaintenanceWindowTargetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateMaintenanceWindowTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateMaintenanceWindowTargetCommand = de_UpdateMaintenanceWindowTargetCommand;
const de_UpdateMaintenanceWindowTargetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateMaintenanceWindowTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateMaintenanceWindowTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateMaintenanceWindowTaskResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateMaintenanceWindowTaskCommand = de_UpdateMaintenanceWindowTaskCommand;
const de_UpdateMaintenanceWindowTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateManagedInstanceRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateManagedInstanceRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateManagedInstanceRoleCommand = de_UpdateManagedInstanceRoleCommand;
const de_UpdateManagedInstanceRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "InvalidInstanceId":
        case "com.amazonaws.ssm#InvalidInstanceId":
            throw await de_InvalidInstanceIdRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateOpsItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateOpsItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateOpsItemCommand = de_UpdateOpsItemCommand;
const de_UpdateOpsItemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "OpsItemAccessDeniedException":
        case "com.amazonaws.ssm#OpsItemAccessDeniedException":
            throw await de_OpsItemAccessDeniedExceptionRes(parsedOutput, context);
        case "OpsItemAlreadyExistsException":
        case "com.amazonaws.ssm#OpsItemAlreadyExistsException":
            throw await de_OpsItemAlreadyExistsExceptionRes(parsedOutput, context);
        case "OpsItemInvalidParameterException":
        case "com.amazonaws.ssm#OpsItemInvalidParameterException":
            throw await de_OpsItemInvalidParameterExceptionRes(parsedOutput, context);
        case "OpsItemLimitExceededException":
        case "com.amazonaws.ssm#OpsItemLimitExceededException":
            throw await de_OpsItemLimitExceededExceptionRes(parsedOutput, context);
        case "OpsItemNotFoundException":
        case "com.amazonaws.ssm#OpsItemNotFoundException":
            throw await de_OpsItemNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateOpsMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateOpsMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateOpsMetadataCommand = de_UpdateOpsMetadataCommand;
const de_UpdateOpsMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "OpsMetadataInvalidArgumentException":
        case "com.amazonaws.ssm#OpsMetadataInvalidArgumentException":
            throw await de_OpsMetadataInvalidArgumentExceptionRes(parsedOutput, context);
        case "OpsMetadataKeyLimitExceededException":
        case "com.amazonaws.ssm#OpsMetadataKeyLimitExceededException":
            throw await de_OpsMetadataKeyLimitExceededExceptionRes(parsedOutput, context);
        case "OpsMetadataNotFoundException":
        case "com.amazonaws.ssm#OpsMetadataNotFoundException":
            throw await de_OpsMetadataNotFoundExceptionRes(parsedOutput, context);
        case "OpsMetadataTooManyUpdatesException":
        case "com.amazonaws.ssm#OpsMetadataTooManyUpdatesException":
            throw await de_OpsMetadataTooManyUpdatesExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdatePatchBaselineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdatePatchBaselineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdatePatchBaselineResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdatePatchBaselineCommand = de_UpdatePatchBaselineCommand;
const de_UpdatePatchBaselineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DoesNotExistException":
        case "com.amazonaws.ssm#DoesNotExistException":
            throw await de_DoesNotExistExceptionRes(parsedOutput, context);
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateResourceDataSyncCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateResourceDataSyncCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateResourceDataSyncCommand = de_UpdateResourceDataSyncCommand;
const de_UpdateResourceDataSyncCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ResourceDataSyncConflictException":
        case "com.amazonaws.ssm#ResourceDataSyncConflictException":
            throw await de_ResourceDataSyncConflictExceptionRes(parsedOutput, context);
        case "ResourceDataSyncInvalidConfigurationException":
        case "com.amazonaws.ssm#ResourceDataSyncInvalidConfigurationException":
            throw await de_ResourceDataSyncInvalidConfigurationExceptionRes(parsedOutput, context);
        case "ResourceDataSyncNotFoundException":
        case "com.amazonaws.ssm#ResourceDataSyncNotFoundException":
            throw await de_ResourceDataSyncNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateServiceSettingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateServiceSettingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateServiceSettingCommand = de_UpdateServiceSettingCommand;
const de_UpdateServiceSettingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.ssm#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "ServiceSettingNotFound":
        case "com.amazonaws.ssm#ServiceSettingNotFound":
            throw await de_ServiceSettingNotFoundRes(parsedOutput, context);
        case "TooManyUpdates":
        case "com.amazonaws.ssm#TooManyUpdates":
            throw await de_TooManyUpdatesRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_AlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.AlreadyExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_AssociatedInstancesRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.AssociatedInstances({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_AssociationAlreadyExistsRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.AssociationAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_AssociationDoesNotExistRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.AssociationDoesNotExist({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_AssociationExecutionDoesNotExistRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.AssociationExecutionDoesNotExist({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_AssociationLimitExceededRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.AssociationLimitExceeded({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_AssociationVersionLimitExceededRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.AssociationVersionLimitExceeded({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_AutomationDefinitionNotApprovedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.AutomationDefinitionNotApprovedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_AutomationDefinitionNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.AutomationDefinitionNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_AutomationDefinitionVersionNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.AutomationDefinitionVersionNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_AutomationExecutionLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.AutomationExecutionLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_AutomationExecutionNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.AutomationExecutionNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_AutomationStepNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.AutomationStepNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ComplianceTypeCountLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.ComplianceTypeCountLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_CustomSchemaCountLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.CustomSchemaCountLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_DocumentAlreadyExistsRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.DocumentAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_DocumentLimitExceededRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.DocumentLimitExceeded({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_DocumentPermissionLimitRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.DocumentPermissionLimit({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_DocumentVersionLimitExceededRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_2_1.DocumentVersionLimitExceeded({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_DoesNotExistExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.DoesNotExistException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_DuplicateDocumentContentRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_2_1.DuplicateDocumentContent({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_DuplicateDocumentVersionNameRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_2_1.DuplicateDocumentVersionName({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_DuplicateInstanceIdRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.DuplicateInstanceId({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_FeatureNotAvailableExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.FeatureNotAvailableException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_HierarchyLevelLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.HierarchyLevelLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_HierarchyTypeMismatchExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.HierarchyTypeMismatchException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_IdempotentParameterMismatchRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.IdempotentParameterMismatch({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_IncompatiblePolicyExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.IncompatiblePolicyException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InternalServerErrorRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InternalServerError({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidActivationRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidActivation({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidActivationIdRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidActivationId({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidAggregatorExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidAggregatorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidAllowedPatternExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidAllowedPatternException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidAssociationRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidAssociation({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidAssociationVersionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidAssociationVersion({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidAutomationExecutionParametersExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidAutomationExecutionParametersException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidAutomationSignalExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidAutomationSignalException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidAutomationStatusUpdateExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidAutomationStatusUpdateException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidCommandIdRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidCommandId({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidDeleteInventoryParametersExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidDeleteInventoryParametersException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidDeletionIdExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidDeletionIdException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidDocumentRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidDocument({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidDocumentContentRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidDocumentContent({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidDocumentOperationRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidDocumentOperation({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidDocumentSchemaVersionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidDocumentSchemaVersion({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidDocumentTypeRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidDocumentType({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidDocumentVersionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidDocumentVersion({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidFilterRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidFilter({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidFilterKeyRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidFilterKey({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidFilterOptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidFilterOption({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidFilterValueRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidFilterValue({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidInstanceIdRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidInstanceId({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidInstanceInformationFilterValueRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidInstanceInformationFilterValue({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidInventoryGroupExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidInventoryGroupException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidInventoryItemContextExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidInventoryItemContextException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidInventoryRequestExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidInventoryRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidItemContentExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidItemContentException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidKeyIdRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidKeyId({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidNextTokenRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidNextToken({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidNotificationConfigRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidNotificationConfig({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidOptionExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidOptionException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidOutputFolderRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidOutputFolder({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidOutputLocationRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidOutputLocation({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidParametersRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidParameters({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidPermissionTypeRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidPermissionType({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidPluginNameRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidPluginName({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidPolicyAttributeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidPolicyAttributeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidPolicyTypeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidPolicyTypeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidResourceIdRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidResourceId({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidResourceTypeRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidResourceType({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidResultAttributeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidResultAttributeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidRoleRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvalidRole({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidScheduleRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidSchedule({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidTagRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidTag({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidTargetRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidTarget({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidTargetMapsRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidTargetMaps({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidTypeNameExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidTypeNameException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidUpdateRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_2_1.InvalidUpdate({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvocationDoesNotExistRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.InvocationDoesNotExist({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ItemContentMismatchExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.ItemContentMismatchException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ItemSizeLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.ItemSizeLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_MaxDocumentSizeExceededRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.MaxDocumentSizeExceeded({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_OpsItemAccessDeniedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.OpsItemAccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_OpsItemAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.OpsItemAlreadyExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_OpsItemInvalidParameterExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.OpsItemInvalidParameterException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_OpsItemLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.OpsItemLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_OpsItemNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.OpsItemNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_OpsItemRelatedItemAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.OpsItemRelatedItemAlreadyExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_OpsItemRelatedItemAssociationNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.OpsItemRelatedItemAssociationNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_OpsMetadataAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.OpsMetadataAlreadyExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_OpsMetadataInvalidArgumentExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.OpsMetadataInvalidArgumentException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_OpsMetadataKeyLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_2_1.OpsMetadataKeyLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_OpsMetadataLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.OpsMetadataLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_OpsMetadataNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.OpsMetadataNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_OpsMetadataTooManyUpdatesExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.OpsMetadataTooManyUpdatesException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ParameterAlreadyExistsRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.ParameterAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ParameterLimitExceededRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.ParameterLimitExceeded({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ParameterMaxVersionLimitExceededRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.ParameterMaxVersionLimitExceeded({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ParameterNotFoundRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ParameterNotFound({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ParameterPatternMismatchExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.ParameterPatternMismatchException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ParameterVersionLabelLimitExceededRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.ParameterVersionLabelLimitExceeded({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ParameterVersionNotFoundRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.ParameterVersionNotFound({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_PoliciesLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.PoliciesLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ResourceDataSyncAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ResourceDataSyncAlreadyExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ResourceDataSyncConflictExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_2_1.ResourceDataSyncConflictException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ResourceDataSyncCountExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ResourceDataSyncCountExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ResourceDataSyncInvalidConfigurationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ResourceDataSyncInvalidConfigurationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ResourceDataSyncNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ResourceDataSyncNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ResourceInUseExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ResourceInUseException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ResourceLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ResourceLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ResourcePolicyConflictExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ResourcePolicyConflictException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ResourcePolicyInvalidParameterExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ResourcePolicyInvalidParameterException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ResourcePolicyLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.ResourcePolicyLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ServiceSettingNotFoundRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.ServiceSettingNotFound({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_StatusUnchangedRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_2_1.StatusUnchanged({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_SubTypeCountLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.SubTypeCountLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_TargetInUseExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.TargetInUseException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_TargetNotConnectedRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.TargetNotConnected({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_TooManyTagsErrorRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.TooManyTagsError({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_TooManyUpdatesRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.TooManyUpdates({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_TotalSizeLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.TotalSizeLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_UnsupportedCalendarExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.UnsupportedCalendarException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_UnsupportedFeatureRequiredExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.UnsupportedFeatureRequiredException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_UnsupportedInventoryItemContextExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.UnsupportedInventoryItemContextException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_UnsupportedInventorySchemaVersionExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.UnsupportedInventorySchemaVersionException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_UnsupportedOperatingSystemRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.UnsupportedOperatingSystem({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_UnsupportedParameterTypeRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_1_1.UnsupportedParameterType({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_UnsupportedPlatformTypeRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.UnsupportedPlatformType({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const se_AssociationStatus = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        AdditionalInfo: [],
        Date: (_) => Math.round(_.getTime() / 1000),
        Message: [],
        Name: [],
    });
};
const se_ComplianceExecutionSummary = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        ExecutionId: [],
        ExecutionTime: (_) => Math.round(_.getTime() / 1000),
        ExecutionType: [],
    });
};
const se_CreateActivationRequest = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        DefaultInstanceName: [],
        Description: [],
        ExpirationDate: (_) => Math.round(_.getTime() / 1000),
        IamRole: [],
        RegistrationLimit: [],
        RegistrationMetadata: smithy_client_1._json,
        Tags: smithy_client_1._json,
    });
};
const se_CreateMaintenanceWindowRequest = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        AllowUnassociatedTargets: [],
        ClientToken: [true, (_) => _ ?? (0, uuid_1.v4)()],
        Cutoff: [],
        Description: [],
        Duration: [],
        EndDate: [],
        Name: [],
        Schedule: [],
        ScheduleOffset: [],
        ScheduleTimezone: [],
        StartDate: [],
        Tags: smithy_client_1._json,
    });
};
const se_CreateOpsItemRequest = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        AccountId: [],
        ActualEndTime: (_) => Math.round(_.getTime() / 1000),
        ActualStartTime: (_) => Math.round(_.getTime() / 1000),
        Category: [],
        Description: [],
        Notifications: smithy_client_1._json,
        OperationalData: smithy_client_1._json,
        OpsItemType: [],
        PlannedEndTime: (_) => Math.round(_.getTime() / 1000),
        PlannedStartTime: (_) => Math.round(_.getTime() / 1000),
        Priority: [],
        RelatedOpsItems: smithy_client_1._json,
        Severity: [],
        Source: [],
        Tags: smithy_client_1._json,
        Title: [],
    });
};
const se_CreatePatchBaselineRequest = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        ApprovalRules: smithy_client_1._json,
        ApprovedPatches: smithy_client_1._json,
        ApprovedPatchesComplianceLevel: [],
        ApprovedPatchesEnableNonSecurity: [],
        ClientToken: [true, (_) => _ ?? (0, uuid_1.v4)()],
        Description: [],
        GlobalFilters: smithy_client_1._json,
        Name: [],
        OperatingSystem: [],
        RejectedPatches: smithy_client_1._json,
        RejectedPatchesAction: [],
        Sources: smithy_client_1._json,
        Tags: smithy_client_1._json,
    });
};
const se_DeleteInventoryRequest = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        ClientToken: [true, (_) => _ ?? (0, uuid_1.v4)()],
        DryRun: [],
        SchemaDeleteOption: [],
        TypeName: [],
    });
};
const se_GetInventoryRequest = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        Aggregators: (_) => se_InventoryAggregatorList(_, context),
        Filters: smithy_client_1._json,
        MaxResults: [],
        NextToken: [],
        ResultAttributes: smithy_client_1._json,
    });
};
const se_GetOpsSummaryRequest = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        Aggregators: (_) => se_OpsAggregatorList(_, context),
        Filters: smithy_client_1._json,
        MaxResults: [],
        NextToken: [],
        ResultAttributes: smithy_client_1._json,
        SyncName: [],
    });
};
const se_InventoryAggregator = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        Aggregators: (_) => se_InventoryAggregatorList(_, context),
        Expression: [],
        Groups: smithy_client_1._json,
    });
};
const se_InventoryAggregatorList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_InventoryAggregator(entry, context);
    });
};
const se_MaintenanceWindowLambdaParameters = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        ClientContext: [],
        Payload: context.base64Encoder,
        Qualifier: [],
    });
};
const se_MaintenanceWindowTaskInvocationParameters = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        Automation: smithy_client_1._json,
        Lambda: (_) => se_MaintenanceWindowLambdaParameters(_, context),
        RunCommand: smithy_client_1._json,
        StepFunctions: smithy_client_1._json,
    });
};
const se_OpsAggregator = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        AggregatorType: [],
        Aggregators: (_) => se_OpsAggregatorList(_, context),
        AttributeName: [],
        Filters: smithy_client_1._json,
        TypeName: [],
        Values: smithy_client_1._json,
    });
};
const se_OpsAggregatorList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_OpsAggregator(entry, context);
    });
};
const se_PutComplianceItemsRequest = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        ComplianceType: [],
        ExecutionSummary: (_) => se_ComplianceExecutionSummary(_, context),
        ItemContentHash: [],
        Items: smithy_client_1._json,
        ResourceId: [],
        ResourceType: [],
        UploadType: [],
    });
};
const se_RegisterTargetWithMaintenanceWindowRequest = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        ClientToken: [true, (_) => _ ?? (0, uuid_1.v4)()],
        Description: [],
        Name: [],
        OwnerInformation: [],
        ResourceType: [],
        Targets: smithy_client_1._json,
        WindowId: [],
    });
};
const se_RegisterTaskWithMaintenanceWindowRequest = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        AlarmConfiguration: smithy_client_1._json,
        ClientToken: [true, (_) => _ ?? (0, uuid_1.v4)()],
        CutoffBehavior: [],
        Description: [],
        LoggingInfo: smithy_client_1._json,
        MaxConcurrency: [],
        MaxErrors: [],
        Name: [],
        Priority: [],
        ServiceRoleArn: [],
        Targets: smithy_client_1._json,
        TaskArn: [],
        TaskInvocationParameters: (_) => se_MaintenanceWindowTaskInvocationParameters(_, context),
        TaskParameters: smithy_client_1._json,
        TaskType: [],
        WindowId: [],
    });
};
const se_StartChangeRequestExecutionRequest = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        AutoApprove: [],
        ChangeDetails: [],
        ChangeRequestName: [],
        ClientToken: [],
        DocumentName: [],
        DocumentVersion: [],
        Parameters: smithy_client_1._json,
        Runbooks: smithy_client_1._json,
        ScheduledEndTime: (_) => Math.round(_.getTime() / 1000),
        ScheduledTime: (_) => Math.round(_.getTime() / 1000),
        Tags: smithy_client_1._json,
    });
};
const se_UpdateAssociationStatusRequest = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        AssociationStatus: (_) => se_AssociationStatus(_, context),
        InstanceId: [],
        Name: [],
    });
};
const se_UpdateMaintenanceWindowTaskRequest = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        AlarmConfiguration: smithy_client_1._json,
        CutoffBehavior: [],
        Description: [],
        LoggingInfo: smithy_client_1._json,
        MaxConcurrency: [],
        MaxErrors: [],
        Name: [],
        Priority: [],
        Replace: [],
        ServiceRoleArn: [],
        Targets: smithy_client_1._json,
        TaskArn: [],
        TaskInvocationParameters: (_) => se_MaintenanceWindowTaskInvocationParameters(_, context),
        TaskParameters: smithy_client_1._json,
        WindowId: [],
        WindowTaskId: [],
    });
};
const se_UpdateOpsItemRequest = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        ActualEndTime: (_) => Math.round(_.getTime() / 1000),
        ActualStartTime: (_) => Math.round(_.getTime() / 1000),
        Category: [],
        Description: [],
        Notifications: smithy_client_1._json,
        OperationalData: smithy_client_1._json,
        OperationalDataToDelete: smithy_client_1._json,
        OpsItemArn: [],
        OpsItemId: [],
        PlannedEndTime: (_) => Math.round(_.getTime() / 1000),
        PlannedStartTime: (_) => Math.round(_.getTime() / 1000),
        Priority: [],
        RelatedOpsItems: smithy_client_1._json,
        Severity: [],
        Status: [],
        Title: [],
    });
};
const de_Activation = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ActivationId: smithy_client_1.expectString,
        CreatedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        DefaultInstanceName: smithy_client_1.expectString,
        Description: smithy_client_1.expectString,
        ExpirationDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Expired: smithy_client_1.expectBoolean,
        IamRole: smithy_client_1.expectString,
        RegistrationLimit: smithy_client_1.expectInt32,
        RegistrationsCount: smithy_client_1.expectInt32,
        Tags: smithy_client_1._json,
    });
};
const de_ActivationList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Activation(entry, context);
    });
    return retVal;
};
const de_Association = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AssociationId: smithy_client_1.expectString,
        AssociationName: smithy_client_1.expectString,
        AssociationVersion: smithy_client_1.expectString,
        DocumentVersion: smithy_client_1.expectString,
        InstanceId: smithy_client_1.expectString,
        LastExecutionDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Name: smithy_client_1.expectString,
        Overview: smithy_client_1._json,
        ScheduleExpression: smithy_client_1.expectString,
        ScheduleOffset: smithy_client_1.expectInt32,
        TargetMaps: smithy_client_1._json,
        Targets: smithy_client_1._json,
    });
};
const de_AssociationDescription = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AlarmConfiguration: smithy_client_1._json,
        ApplyOnlyAtCronInterval: smithy_client_1.expectBoolean,
        AssociationId: smithy_client_1.expectString,
        AssociationName: smithy_client_1.expectString,
        AssociationVersion: smithy_client_1.expectString,
        AutomationTargetParameterName: smithy_client_1.expectString,
        CalendarNames: smithy_client_1._json,
        ComplianceSeverity: smithy_client_1.expectString,
        Date: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        DocumentVersion: smithy_client_1.expectString,
        InstanceId: smithy_client_1.expectString,
        LastExecutionDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastSuccessfulExecutionDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastUpdateAssociationDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        MaxConcurrency: smithy_client_1.expectString,
        MaxErrors: smithy_client_1.expectString,
        Name: smithy_client_1.expectString,
        OutputLocation: smithy_client_1._json,
        Overview: smithy_client_1._json,
        Parameters: smithy_client_1._json,
        ScheduleExpression: smithy_client_1.expectString,
        ScheduleOffset: smithy_client_1.expectInt32,
        Status: (_) => de_AssociationStatus(_, context),
        SyncCompliance: smithy_client_1.expectString,
        TargetLocations: smithy_client_1._json,
        TargetMaps: smithy_client_1._json,
        Targets: smithy_client_1._json,
        TriggeredAlarms: smithy_client_1._json,
    });
};
const de_AssociationDescriptionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AssociationDescription(entry, context);
    });
    return retVal;
};
const de_AssociationExecution = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AlarmConfiguration: smithy_client_1._json,
        AssociationId: smithy_client_1.expectString,
        AssociationVersion: smithy_client_1.expectString,
        CreatedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        DetailedStatus: smithy_client_1.expectString,
        ExecutionId: smithy_client_1.expectString,
        LastExecutionDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ResourceCountByStatus: smithy_client_1.expectString,
        Status: smithy_client_1.expectString,
        TriggeredAlarms: smithy_client_1._json,
    });
};
const de_AssociationExecutionsList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AssociationExecution(entry, context);
    });
    return retVal;
};
const de_AssociationExecutionTarget = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AssociationId: smithy_client_1.expectString,
        AssociationVersion: smithy_client_1.expectString,
        DetailedStatus: smithy_client_1.expectString,
        ExecutionId: smithy_client_1.expectString,
        LastExecutionDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        OutputSource: smithy_client_1._json,
        ResourceId: smithy_client_1.expectString,
        ResourceType: smithy_client_1.expectString,
        Status: smithy_client_1.expectString,
    });
};
const de_AssociationExecutionTargetsList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AssociationExecutionTarget(entry, context);
    });
    return retVal;
};
const de_AssociationList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Association(entry, context);
    });
    return retVal;
};
const de_AssociationStatus = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AdditionalInfo: smithy_client_1.expectString,
        Date: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Message: smithy_client_1.expectString,
        Name: smithy_client_1.expectString,
    });
};
const de_AssociationVersionInfo = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ApplyOnlyAtCronInterval: smithy_client_1.expectBoolean,
        AssociationId: smithy_client_1.expectString,
        AssociationName: smithy_client_1.expectString,
        AssociationVersion: smithy_client_1.expectString,
        CalendarNames: smithy_client_1._json,
        ComplianceSeverity: smithy_client_1.expectString,
        CreatedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        DocumentVersion: smithy_client_1.expectString,
        MaxConcurrency: smithy_client_1.expectString,
        MaxErrors: smithy_client_1.expectString,
        Name: smithy_client_1.expectString,
        OutputLocation: smithy_client_1._json,
        Parameters: smithy_client_1._json,
        ScheduleExpression: smithy_client_1.expectString,
        ScheduleOffset: smithy_client_1.expectInt32,
        SyncCompliance: smithy_client_1.expectString,
        TargetLocations: smithy_client_1._json,
        TargetMaps: smithy_client_1._json,
        Targets: smithy_client_1._json,
    });
};
const de_AssociationVersionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AssociationVersionInfo(entry, context);
    });
    return retVal;
};
const de_AutomationExecution = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AlarmConfiguration: smithy_client_1._json,
        AssociationId: smithy_client_1.expectString,
        AutomationExecutionId: smithy_client_1.expectString,
        AutomationExecutionStatus: smithy_client_1.expectString,
        AutomationSubtype: smithy_client_1.expectString,
        ChangeRequestName: smithy_client_1.expectString,
        CurrentAction: smithy_client_1.expectString,
        CurrentStepName: smithy_client_1.expectString,
        DocumentName: smithy_client_1.expectString,
        DocumentVersion: smithy_client_1.expectString,
        ExecutedBy: smithy_client_1.expectString,
        ExecutionEndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ExecutionStartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        FailureMessage: smithy_client_1.expectString,
        MaxConcurrency: smithy_client_1.expectString,
        MaxErrors: smithy_client_1.expectString,
        Mode: smithy_client_1.expectString,
        OpsItemId: smithy_client_1.expectString,
        Outputs: smithy_client_1._json,
        Parameters: smithy_client_1._json,
        ParentAutomationExecutionId: smithy_client_1.expectString,
        ProgressCounters: smithy_client_1._json,
        ResolvedTargets: smithy_client_1._json,
        Runbooks: smithy_client_1._json,
        ScheduledTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        StepExecutions: (_) => de_StepExecutionList(_, context),
        StepExecutionsTruncated: smithy_client_1.expectBoolean,
        Target: smithy_client_1.expectString,
        TargetLocations: smithy_client_1._json,
        TargetMaps: smithy_client_1._json,
        TargetParameterName: smithy_client_1.expectString,
        Targets: smithy_client_1._json,
        TriggeredAlarms: smithy_client_1._json,
    });
};
const de_AutomationExecutionMetadata = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AlarmConfiguration: smithy_client_1._json,
        AssociationId: smithy_client_1.expectString,
        AutomationExecutionId: smithy_client_1.expectString,
        AutomationExecutionStatus: smithy_client_1.expectString,
        AutomationSubtype: smithy_client_1.expectString,
        AutomationType: smithy_client_1.expectString,
        ChangeRequestName: smithy_client_1.expectString,
        CurrentAction: smithy_client_1.expectString,
        CurrentStepName: smithy_client_1.expectString,
        DocumentName: smithy_client_1.expectString,
        DocumentVersion: smithy_client_1.expectString,
        ExecutedBy: smithy_client_1.expectString,
        ExecutionEndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ExecutionStartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        FailureMessage: smithy_client_1.expectString,
        LogFile: smithy_client_1.expectString,
        MaxConcurrency: smithy_client_1.expectString,
        MaxErrors: smithy_client_1.expectString,
        Mode: smithy_client_1.expectString,
        OpsItemId: smithy_client_1.expectString,
        Outputs: smithy_client_1._json,
        ParentAutomationExecutionId: smithy_client_1.expectString,
        ResolvedTargets: smithy_client_1._json,
        Runbooks: smithy_client_1._json,
        ScheduledTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Target: smithy_client_1.expectString,
        TargetMaps: smithy_client_1._json,
        TargetParameterName: smithy_client_1.expectString,
        Targets: smithy_client_1._json,
        TriggeredAlarms: smithy_client_1._json,
    });
};
const de_AutomationExecutionMetadataList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AutomationExecutionMetadata(entry, context);
    });
    return retVal;
};
const de_Command = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AlarmConfiguration: smithy_client_1._json,
        CloudWatchOutputConfig: smithy_client_1._json,
        CommandId: smithy_client_1.expectString,
        Comment: smithy_client_1.expectString,
        CompletedCount: smithy_client_1.expectInt32,
        DeliveryTimedOutCount: smithy_client_1.expectInt32,
        DocumentName: smithy_client_1.expectString,
        DocumentVersion: smithy_client_1.expectString,
        ErrorCount: smithy_client_1.expectInt32,
        ExpiresAfter: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        InstanceIds: smithy_client_1._json,
        MaxConcurrency: smithy_client_1.expectString,
        MaxErrors: smithy_client_1.expectString,
        NotificationConfig: smithy_client_1._json,
        OutputS3BucketName: smithy_client_1.expectString,
        OutputS3KeyPrefix: smithy_client_1.expectString,
        OutputS3Region: smithy_client_1.expectString,
        Parameters: smithy_client_1._json,
        RequestedDateTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ServiceRole: smithy_client_1.expectString,
        Status: smithy_client_1.expectString,
        StatusDetails: smithy_client_1.expectString,
        TargetCount: smithy_client_1.expectInt32,
        Targets: smithy_client_1._json,
        TimeoutSeconds: smithy_client_1.expectInt32,
        TriggeredAlarms: smithy_client_1._json,
    });
};
const de_CommandInvocation = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        CloudWatchOutputConfig: smithy_client_1._json,
        CommandId: smithy_client_1.expectString,
        CommandPlugins: (_) => de_CommandPluginList(_, context),
        Comment: smithy_client_1.expectString,
        DocumentName: smithy_client_1.expectString,
        DocumentVersion: smithy_client_1.expectString,
        InstanceId: smithy_client_1.expectString,
        InstanceName: smithy_client_1.expectString,
        NotificationConfig: smithy_client_1._json,
        RequestedDateTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ServiceRole: smithy_client_1.expectString,
        StandardErrorUrl: smithy_client_1.expectString,
        StandardOutputUrl: smithy_client_1.expectString,
        Status: smithy_client_1.expectString,
        StatusDetails: smithy_client_1.expectString,
        TraceOutput: smithy_client_1.expectString,
    });
};
const de_CommandInvocationList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_CommandInvocation(entry, context);
    });
    return retVal;
};
const de_CommandList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Command(entry, context);
    });
    return retVal;
};
const de_CommandPlugin = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Name: smithy_client_1.expectString,
        Output: smithy_client_1.expectString,
        OutputS3BucketName: smithy_client_1.expectString,
        OutputS3KeyPrefix: smithy_client_1.expectString,
        OutputS3Region: smithy_client_1.expectString,
        ResponseCode: smithy_client_1.expectInt32,
        ResponseFinishDateTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ResponseStartDateTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        StandardErrorUrl: smithy_client_1.expectString,
        StandardOutputUrl: smithy_client_1.expectString,
        Status: smithy_client_1.expectString,
        StatusDetails: smithy_client_1.expectString,
    });
};
const de_CommandPluginList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_CommandPlugin(entry, context);
    });
    return retVal;
};
const de_ComplianceExecutionSummary = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ExecutionId: smithy_client_1.expectString,
        ExecutionTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ExecutionType: smithy_client_1.expectString,
    });
};
const de_ComplianceItem = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ComplianceType: smithy_client_1.expectString,
        Details: smithy_client_1._json,
        ExecutionSummary: (_) => de_ComplianceExecutionSummary(_, context),
        Id: smithy_client_1.expectString,
        ResourceId: smithy_client_1.expectString,
        ResourceType: smithy_client_1.expectString,
        Severity: smithy_client_1.expectString,
        Status: smithy_client_1.expectString,
        Title: smithy_client_1.expectString,
    });
};
const de_ComplianceItemList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ComplianceItem(entry, context);
    });
    return retVal;
};
const de_CreateAssociationBatchResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Failed: smithy_client_1._json,
        Successful: (_) => de_AssociationDescriptionList(_, context),
    });
};
const de_CreateAssociationResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AssociationDescription: (_) => de_AssociationDescription(_, context),
    });
};
const de_CreateDocumentResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        DocumentDescription: (_) => de_DocumentDescription(_, context),
    });
};
const de_DescribeActivationsResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ActivationList: (_) => de_ActivationList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_DescribeAssociationExecutionsResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AssociationExecutions: (_) => de_AssociationExecutionsList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_DescribeAssociationExecutionTargetsResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AssociationExecutionTargets: (_) => de_AssociationExecutionTargetsList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_DescribeAssociationResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AssociationDescription: (_) => de_AssociationDescription(_, context),
    });
};
const de_DescribeAutomationExecutionsResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AutomationExecutionMetadataList: (_) => de_AutomationExecutionMetadataList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_DescribeAutomationStepExecutionsResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        StepExecutions: (_) => de_StepExecutionList(_, context),
    });
};
const de_DescribeAvailablePatchesResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        Patches: (_) => de_PatchList(_, context),
    });
};
const de_DescribeDocumentResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Document: (_) => de_DocumentDescription(_, context),
    });
};
const de_DescribeEffectivePatchesForPatchBaselineResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        EffectivePatches: (_) => de_EffectivePatchList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_DescribeInstanceAssociationsStatusResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        InstanceAssociationStatusInfos: (_) => de_InstanceAssociationStatusInfos(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_DescribeInstanceInformationResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        InstanceInformationList: (_) => de_InstanceInformationList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_DescribeInstancePatchesResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        Patches: (_) => de_PatchComplianceDataList(_, context),
    });
};
const de_DescribeInstancePatchStatesForPatchGroupResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        InstancePatchStates: (_) => de_InstancePatchStatesList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_DescribeInstancePatchStatesResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        InstancePatchStates: (_) => de_InstancePatchStateList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_DescribeInventoryDeletionsResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        InventoryDeletions: (_) => de_InventoryDeletionsList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_DescribeMaintenanceWindowExecutionsResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        WindowExecutions: (_) => de_MaintenanceWindowExecutionList(_, context),
    });
};
const de_DescribeMaintenanceWindowExecutionTaskInvocationsResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        WindowExecutionTaskInvocationIdentities: (_) => de_MaintenanceWindowExecutionTaskInvocationIdentityList(_, context),
    });
};
const de_DescribeMaintenanceWindowExecutionTasksResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        WindowExecutionTaskIdentities: (_) => de_MaintenanceWindowExecutionTaskIdentityList(_, context),
    });
};
const de_DescribeOpsItemsResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        OpsItemSummaries: (_) => de_OpsItemSummaries(_, context),
    });
};
const de_DescribeParametersResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        Parameters: (_) => de_ParameterMetadataList(_, context),
    });
};
const de_DescribeSessionsResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        Sessions: (_) => de_SessionList(_, context),
    });
};
const de_DocumentDescription = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ApprovedVersion: smithy_client_1.expectString,
        AttachmentsInformation: smithy_client_1._json,
        Author: smithy_client_1.expectString,
        Category: smithy_client_1._json,
        CategoryEnum: smithy_client_1._json,
        CreatedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        DefaultVersion: smithy_client_1.expectString,
        Description: smithy_client_1.expectString,
        DisplayName: smithy_client_1.expectString,
        DocumentFormat: smithy_client_1.expectString,
        DocumentType: smithy_client_1.expectString,
        DocumentVersion: smithy_client_1.expectString,
        Hash: smithy_client_1.expectString,
        HashType: smithy_client_1.expectString,
        LatestVersion: smithy_client_1.expectString,
        Name: smithy_client_1.expectString,
        Owner: smithy_client_1.expectString,
        Parameters: smithy_client_1._json,
        PendingReviewVersion: smithy_client_1.expectString,
        PlatformTypes: smithy_client_1._json,
        Requires: smithy_client_1._json,
        ReviewInformation: (_) => de_ReviewInformationList(_, context),
        ReviewStatus: smithy_client_1.expectString,
        SchemaVersion: smithy_client_1.expectString,
        Sha1: smithy_client_1.expectString,
        Status: smithy_client_1.expectString,
        StatusInformation: smithy_client_1.expectString,
        Tags: smithy_client_1._json,
        TargetType: smithy_client_1.expectString,
        VersionName: smithy_client_1.expectString,
    });
};
const de_DocumentIdentifier = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Author: smithy_client_1.expectString,
        CreatedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        DisplayName: smithy_client_1.expectString,
        DocumentFormat: smithy_client_1.expectString,
        DocumentType: smithy_client_1.expectString,
        DocumentVersion: smithy_client_1.expectString,
        Name: smithy_client_1.expectString,
        Owner: smithy_client_1.expectString,
        PlatformTypes: smithy_client_1._json,
        Requires: smithy_client_1._json,
        ReviewStatus: smithy_client_1.expectString,
        SchemaVersion: smithy_client_1.expectString,
        Tags: smithy_client_1._json,
        TargetType: smithy_client_1.expectString,
        VersionName: smithy_client_1.expectString,
    });
};
const de_DocumentIdentifierList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_DocumentIdentifier(entry, context);
    });
    return retVal;
};
const de_DocumentMetadataResponseInfo = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ReviewerResponse: (_) => de_DocumentReviewerResponseList(_, context),
    });
};
const de_DocumentReviewerResponseList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_DocumentReviewerResponseSource(entry, context);
    });
    return retVal;
};
const de_DocumentReviewerResponseSource = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Comment: smithy_client_1._json,
        CreateTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ReviewStatus: smithy_client_1.expectString,
        Reviewer: smithy_client_1.expectString,
        UpdatedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
    });
};
const de_DocumentVersionInfo = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        CreatedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        DisplayName: smithy_client_1.expectString,
        DocumentFormat: smithy_client_1.expectString,
        DocumentVersion: smithy_client_1.expectString,
        IsDefaultVersion: smithy_client_1.expectBoolean,
        Name: smithy_client_1.expectString,
        ReviewStatus: smithy_client_1.expectString,
        Status: smithy_client_1.expectString,
        StatusInformation: smithy_client_1.expectString,
        VersionName: smithy_client_1.expectString,
    });
};
const de_DocumentVersionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_DocumentVersionInfo(entry, context);
    });
    return retVal;
};
const de_EffectivePatch = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Patch: (_) => de_Patch(_, context),
        PatchStatus: (_) => de_PatchStatus(_, context),
    });
};
const de_EffectivePatchList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_EffectivePatch(entry, context);
    });
    return retVal;
};
const de_GetAutomationExecutionResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AutomationExecution: (_) => de_AutomationExecution(_, context),
    });
};
const de_GetDocumentResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AttachmentsContent: smithy_client_1._json,
        Content: smithy_client_1.expectString,
        CreatedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        DisplayName: smithy_client_1.expectString,
        DocumentFormat: smithy_client_1.expectString,
        DocumentType: smithy_client_1.expectString,
        DocumentVersion: smithy_client_1.expectString,
        Name: smithy_client_1.expectString,
        Requires: smithy_client_1._json,
        ReviewStatus: smithy_client_1.expectString,
        Status: smithy_client_1.expectString,
        StatusInformation: smithy_client_1.expectString,
        VersionName: smithy_client_1.expectString,
    });
};
const de_GetMaintenanceWindowExecutionResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        EndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        StartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Status: smithy_client_1.expectString,
        StatusDetails: smithy_client_1.expectString,
        TaskIds: smithy_client_1._json,
        WindowExecutionId: smithy_client_1.expectString,
    });
};
const de_GetMaintenanceWindowExecutionTaskInvocationResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        EndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ExecutionId: smithy_client_1.expectString,
        InvocationId: smithy_client_1.expectString,
        OwnerInformation: smithy_client_1.expectString,
        Parameters: smithy_client_1.expectString,
        StartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Status: smithy_client_1.expectString,
        StatusDetails: smithy_client_1.expectString,
        TaskExecutionId: smithy_client_1.expectString,
        TaskType: smithy_client_1.expectString,
        WindowExecutionId: smithy_client_1.expectString,
        WindowTargetId: smithy_client_1.expectString,
    });
};
const de_GetMaintenanceWindowExecutionTaskResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AlarmConfiguration: smithy_client_1._json,
        EndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        MaxConcurrency: smithy_client_1.expectString,
        MaxErrors: smithy_client_1.expectString,
        Priority: smithy_client_1.expectInt32,
        ServiceRole: smithy_client_1.expectString,
        StartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Status: smithy_client_1.expectString,
        StatusDetails: smithy_client_1.expectString,
        TaskArn: smithy_client_1.expectString,
        TaskExecutionId: smithy_client_1.expectString,
        TaskParameters: smithy_client_1._json,
        TriggeredAlarms: smithy_client_1._json,
        Type: smithy_client_1.expectString,
        WindowExecutionId: smithy_client_1.expectString,
    });
};
const de_GetMaintenanceWindowResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AllowUnassociatedTargets: smithy_client_1.expectBoolean,
        CreatedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Cutoff: smithy_client_1.expectInt32,
        Description: smithy_client_1.expectString,
        Duration: smithy_client_1.expectInt32,
        Enabled: smithy_client_1.expectBoolean,
        EndDate: smithy_client_1.expectString,
        ModifiedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Name: smithy_client_1.expectString,
        NextExecutionTime: smithy_client_1.expectString,
        Schedule: smithy_client_1.expectString,
        ScheduleOffset: smithy_client_1.expectInt32,
        ScheduleTimezone: smithy_client_1.expectString,
        StartDate: smithy_client_1.expectString,
        WindowId: smithy_client_1.expectString,
    });
};
const de_GetMaintenanceWindowTaskResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AlarmConfiguration: smithy_client_1._json,
        CutoffBehavior: smithy_client_1.expectString,
        Description: smithy_client_1.expectString,
        LoggingInfo: smithy_client_1._json,
        MaxConcurrency: smithy_client_1.expectString,
        MaxErrors: smithy_client_1.expectString,
        Name: smithy_client_1.expectString,
        Priority: smithy_client_1.expectInt32,
        ServiceRoleArn: smithy_client_1.expectString,
        Targets: smithy_client_1._json,
        TaskArn: smithy_client_1.expectString,
        TaskInvocationParameters: (_) => de_MaintenanceWindowTaskInvocationParameters(_, context),
        TaskParameters: smithy_client_1._json,
        TaskType: smithy_client_1.expectString,
        WindowId: smithy_client_1.expectString,
        WindowTaskId: smithy_client_1.expectString,
    });
};
const de_GetOpsItemResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        OpsItem: (_) => de_OpsItem(_, context),
    });
};
const de_GetParameterHistoryResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        Parameters: (_) => de_ParameterHistoryList(_, context),
    });
};
const de_GetParameterResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Parameter: (_) => de_Parameter(_, context),
    });
};
const de_GetParametersByPathResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        Parameters: (_) => de_ParameterList(_, context),
    });
};
const de_GetParametersResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        InvalidParameters: smithy_client_1._json,
        Parameters: (_) => de_ParameterList(_, context),
    });
};
const de_GetPatchBaselineResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ApprovalRules: smithy_client_1._json,
        ApprovedPatches: smithy_client_1._json,
        ApprovedPatchesComplianceLevel: smithy_client_1.expectString,
        ApprovedPatchesEnableNonSecurity: smithy_client_1.expectBoolean,
        BaselineId: smithy_client_1.expectString,
        CreatedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Description: smithy_client_1.expectString,
        GlobalFilters: smithy_client_1._json,
        ModifiedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Name: smithy_client_1.expectString,
        OperatingSystem: smithy_client_1.expectString,
        PatchGroups: smithy_client_1._json,
        RejectedPatches: smithy_client_1._json,
        RejectedPatchesAction: smithy_client_1.expectString,
        Sources: smithy_client_1._json,
    });
};
const de_GetServiceSettingResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ServiceSetting: (_) => de_ServiceSetting(_, context),
    });
};
const de_InstanceAssociationStatusInfo = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AssociationId: smithy_client_1.expectString,
        AssociationName: smithy_client_1.expectString,
        AssociationVersion: smithy_client_1.expectString,
        DetailedStatus: smithy_client_1.expectString,
        DocumentVersion: smithy_client_1.expectString,
        ErrorCode: smithy_client_1.expectString,
        ExecutionDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ExecutionSummary: smithy_client_1.expectString,
        InstanceId: smithy_client_1.expectString,
        Name: smithy_client_1.expectString,
        OutputUrl: smithy_client_1._json,
        Status: smithy_client_1.expectString,
    });
};
const de_InstanceAssociationStatusInfos = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_InstanceAssociationStatusInfo(entry, context);
    });
    return retVal;
};
const de_InstanceInformation = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ActivationId: smithy_client_1.expectString,
        AgentVersion: smithy_client_1.expectString,
        AssociationOverview: smithy_client_1._json,
        AssociationStatus: smithy_client_1.expectString,
        ComputerName: smithy_client_1.expectString,
        IPAddress: smithy_client_1.expectString,
        IamRole: smithy_client_1.expectString,
        InstanceId: smithy_client_1.expectString,
        IsLatestVersion: smithy_client_1.expectBoolean,
        LastAssociationExecutionDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastPingDateTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastSuccessfulAssociationExecutionDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Name: smithy_client_1.expectString,
        PingStatus: smithy_client_1.expectString,
        PlatformName: smithy_client_1.expectString,
        PlatformType: smithy_client_1.expectString,
        PlatformVersion: smithy_client_1.expectString,
        RegistrationDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ResourceType: smithy_client_1.expectString,
        SourceId: smithy_client_1.expectString,
        SourceType: smithy_client_1.expectString,
    });
};
const de_InstanceInformationList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_InstanceInformation(entry, context);
    });
    return retVal;
};
const de_InstancePatchState = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        BaselineId: smithy_client_1.expectString,
        CriticalNonCompliantCount: smithy_client_1.expectInt32,
        FailedCount: smithy_client_1.expectInt32,
        InstallOverrideList: smithy_client_1.expectString,
        InstalledCount: smithy_client_1.expectInt32,
        InstalledOtherCount: smithy_client_1.expectInt32,
        InstalledPendingRebootCount: smithy_client_1.expectInt32,
        InstalledRejectedCount: smithy_client_1.expectInt32,
        InstanceId: smithy_client_1.expectString,
        LastNoRebootInstallOperationTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        MissingCount: smithy_client_1.expectInt32,
        NotApplicableCount: smithy_client_1.expectInt32,
        Operation: smithy_client_1.expectString,
        OperationEndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        OperationStartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        OtherNonCompliantCount: smithy_client_1.expectInt32,
        OwnerInformation: smithy_client_1.expectString,
        PatchGroup: smithy_client_1.expectString,
        RebootOption: smithy_client_1.expectString,
        SecurityNonCompliantCount: smithy_client_1.expectInt32,
        SnapshotId: smithy_client_1.expectString,
        UnreportedNotApplicableCount: smithy_client_1.expectInt32,
    });
};
const de_InstancePatchStateList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_InstancePatchState(entry, context);
    });
    return retVal;
};
const de_InstancePatchStatesList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_InstancePatchState(entry, context);
    });
    return retVal;
};
const de_InventoryDeletionsList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_InventoryDeletionStatusItem(entry, context);
    });
    return retVal;
};
const de_InventoryDeletionStatusItem = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        DeletionId: smithy_client_1.expectString,
        DeletionStartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        DeletionSummary: smithy_client_1._json,
        LastStatus: smithy_client_1.expectString,
        LastStatusMessage: smithy_client_1.expectString,
        LastStatusUpdateTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        TypeName: smithy_client_1.expectString,
    });
};
const de_ListAssociationsResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Associations: (_) => de_AssociationList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_ListAssociationVersionsResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AssociationVersions: (_) => de_AssociationVersionList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_ListCommandInvocationsResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        CommandInvocations: (_) => de_CommandInvocationList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_ListCommandsResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Commands: (_) => de_CommandList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_ListComplianceItemsResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ComplianceItems: (_) => de_ComplianceItemList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_ListDocumentMetadataHistoryResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Author: smithy_client_1.expectString,
        DocumentVersion: smithy_client_1.expectString,
        Metadata: (_) => de_DocumentMetadataResponseInfo(_, context),
        Name: smithy_client_1.expectString,
        NextToken: smithy_client_1.expectString,
    });
};
const de_ListDocumentsResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        DocumentIdentifiers: (_) => de_DocumentIdentifierList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_ListDocumentVersionsResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        DocumentVersions: (_) => de_DocumentVersionList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_ListOpsItemEventsResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        Summaries: (_) => de_OpsItemEventSummaries(_, context),
    });
};
const de_ListOpsItemRelatedItemsResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        Summaries: (_) => de_OpsItemRelatedItemSummaries(_, context),
    });
};
const de_ListOpsMetadataResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        OpsMetadataList: (_) => de_OpsMetadataList(_, context),
    });
};
const de_ListResourceComplianceSummariesResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        ResourceComplianceSummaryItems: (_) => de_ResourceComplianceSummaryItemList(_, context),
    });
};
const de_ListResourceDataSyncResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        NextToken: smithy_client_1.expectString,
        ResourceDataSyncItems: (_) => de_ResourceDataSyncItemList(_, context),
    });
};
const de_MaintenanceWindowExecution = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        EndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        StartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Status: smithy_client_1.expectString,
        StatusDetails: smithy_client_1.expectString,
        WindowExecutionId: smithy_client_1.expectString,
        WindowId: smithy_client_1.expectString,
    });
};
const de_MaintenanceWindowExecutionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_MaintenanceWindowExecution(entry, context);
    });
    return retVal;
};
const de_MaintenanceWindowExecutionTaskIdentity = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AlarmConfiguration: smithy_client_1._json,
        EndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        StartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Status: smithy_client_1.expectString,
        StatusDetails: smithy_client_1.expectString,
        TaskArn: smithy_client_1.expectString,
        TaskExecutionId: smithy_client_1.expectString,
        TaskType: smithy_client_1.expectString,
        TriggeredAlarms: smithy_client_1._json,
        WindowExecutionId: smithy_client_1.expectString,
    });
};
const de_MaintenanceWindowExecutionTaskIdentityList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_MaintenanceWindowExecutionTaskIdentity(entry, context);
    });
    return retVal;
};
const de_MaintenanceWindowExecutionTaskInvocationIdentity = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        EndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ExecutionId: smithy_client_1.expectString,
        InvocationId: smithy_client_1.expectString,
        OwnerInformation: smithy_client_1.expectString,
        Parameters: smithy_client_1.expectString,
        StartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Status: smithy_client_1.expectString,
        StatusDetails: smithy_client_1.expectString,
        TaskExecutionId: smithy_client_1.expectString,
        TaskType: smithy_client_1.expectString,
        WindowExecutionId: smithy_client_1.expectString,
        WindowTargetId: smithy_client_1.expectString,
    });
};
const de_MaintenanceWindowExecutionTaskInvocationIdentityList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_MaintenanceWindowExecutionTaskInvocationIdentity(entry, context);
    });
    return retVal;
};
const de_MaintenanceWindowLambdaParameters = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ClientContext: smithy_client_1.expectString,
        Payload: context.base64Decoder,
        Qualifier: smithy_client_1.expectString,
    });
};
const de_MaintenanceWindowTaskInvocationParameters = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Automation: smithy_client_1._json,
        Lambda: (_) => de_MaintenanceWindowLambdaParameters(_, context),
        RunCommand: smithy_client_1._json,
        StepFunctions: smithy_client_1._json,
    });
};
const de_OpsItem = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ActualEndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ActualStartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Category: smithy_client_1.expectString,
        CreatedBy: smithy_client_1.expectString,
        CreatedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Description: smithy_client_1.expectString,
        LastModifiedBy: smithy_client_1.expectString,
        LastModifiedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Notifications: smithy_client_1._json,
        OperationalData: smithy_client_1._json,
        OpsItemArn: smithy_client_1.expectString,
        OpsItemId: smithy_client_1.expectString,
        OpsItemType: smithy_client_1.expectString,
        PlannedEndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        PlannedStartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Priority: smithy_client_1.expectInt32,
        RelatedOpsItems: smithy_client_1._json,
        Severity: smithy_client_1.expectString,
        Source: smithy_client_1.expectString,
        Status: smithy_client_1.expectString,
        Title: smithy_client_1.expectString,
        Version: smithy_client_1.expectString,
    });
};
const de_OpsItemEventSummaries = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_OpsItemEventSummary(entry, context);
    });
    return retVal;
};
const de_OpsItemEventSummary = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        CreatedBy: smithy_client_1._json,
        CreatedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Detail: smithy_client_1.expectString,
        DetailType: smithy_client_1.expectString,
        EventId: smithy_client_1.expectString,
        OpsItemId: smithy_client_1.expectString,
        Source: smithy_client_1.expectString,
    });
};
const de_OpsItemRelatedItemSummaries = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_OpsItemRelatedItemSummary(entry, context);
    });
    return retVal;
};
const de_OpsItemRelatedItemSummary = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AssociationId: smithy_client_1.expectString,
        AssociationType: smithy_client_1.expectString,
        CreatedBy: smithy_client_1._json,
        CreatedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastModifiedBy: smithy_client_1._json,
        LastModifiedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        OpsItemId: smithy_client_1.expectString,
        ResourceType: smithy_client_1.expectString,
        ResourceUri: smithy_client_1.expectString,
    });
};
const de_OpsItemSummaries = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_OpsItemSummary(entry, context);
    });
    return retVal;
};
const de_OpsItemSummary = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ActualEndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ActualStartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Category: smithy_client_1.expectString,
        CreatedBy: smithy_client_1.expectString,
        CreatedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastModifiedBy: smithy_client_1.expectString,
        LastModifiedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        OperationalData: smithy_client_1._json,
        OpsItemId: smithy_client_1.expectString,
        OpsItemType: smithy_client_1.expectString,
        PlannedEndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        PlannedStartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Priority: smithy_client_1.expectInt32,
        Severity: smithy_client_1.expectString,
        Source: smithy_client_1.expectString,
        Status: smithy_client_1.expectString,
        Title: smithy_client_1.expectString,
    });
};
const de_OpsMetadata = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        CreationDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastModifiedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastModifiedUser: smithy_client_1.expectString,
        OpsMetadataArn: smithy_client_1.expectString,
        ResourceId: smithy_client_1.expectString,
    });
};
const de_OpsMetadataList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_OpsMetadata(entry, context);
    });
    return retVal;
};
const de_Parameter = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ARN: smithy_client_1.expectString,
        DataType: smithy_client_1.expectString,
        LastModifiedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Name: smithy_client_1.expectString,
        Selector: smithy_client_1.expectString,
        SourceResult: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
        Value: smithy_client_1.expectString,
        Version: smithy_client_1.expectLong,
    });
};
const de_ParameterHistory = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AllowedPattern: smithy_client_1.expectString,
        DataType: smithy_client_1.expectString,
        Description: smithy_client_1.expectString,
        KeyId: smithy_client_1.expectString,
        Labels: smithy_client_1._json,
        LastModifiedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastModifiedUser: smithy_client_1.expectString,
        Name: smithy_client_1.expectString,
        Policies: smithy_client_1._json,
        Tier: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
        Value: smithy_client_1.expectString,
        Version: smithy_client_1.expectLong,
    });
};
const de_ParameterHistoryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ParameterHistory(entry, context);
    });
    return retVal;
};
const de_ParameterList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Parameter(entry, context);
    });
    return retVal;
};
const de_ParameterMetadata = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AllowedPattern: smithy_client_1.expectString,
        DataType: smithy_client_1.expectString,
        Description: smithy_client_1.expectString,
        KeyId: smithy_client_1.expectString,
        LastModifiedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastModifiedUser: smithy_client_1.expectString,
        Name: smithy_client_1.expectString,
        Policies: smithy_client_1._json,
        Tier: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
        Version: smithy_client_1.expectLong,
    });
};
const de_ParameterMetadataList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ParameterMetadata(entry, context);
    });
    return retVal;
};
const de_Patch = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AdvisoryIds: smithy_client_1._json,
        Arch: smithy_client_1.expectString,
        BugzillaIds: smithy_client_1._json,
        CVEIds: smithy_client_1._json,
        Classification: smithy_client_1.expectString,
        ContentUrl: smithy_client_1.expectString,
        Description: smithy_client_1.expectString,
        Epoch: smithy_client_1.expectInt32,
        Id: smithy_client_1.expectString,
        KbNumber: smithy_client_1.expectString,
        Language: smithy_client_1.expectString,
        MsrcNumber: smithy_client_1.expectString,
        MsrcSeverity: smithy_client_1.expectString,
        Name: smithy_client_1.expectString,
        Product: smithy_client_1.expectString,
        ProductFamily: smithy_client_1.expectString,
        Release: smithy_client_1.expectString,
        ReleaseDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Repository: smithy_client_1.expectString,
        Severity: smithy_client_1.expectString,
        Title: smithy_client_1.expectString,
        Vendor: smithy_client_1.expectString,
        Version: smithy_client_1.expectString,
    });
};
const de_PatchComplianceData = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        CVEIds: smithy_client_1.expectString,
        Classification: smithy_client_1.expectString,
        InstalledTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        KBId: smithy_client_1.expectString,
        Severity: smithy_client_1.expectString,
        State: smithy_client_1.expectString,
        Title: smithy_client_1.expectString,
    });
};
const de_PatchComplianceDataList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_PatchComplianceData(entry, context);
    });
    return retVal;
};
const de_PatchList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Patch(entry, context);
    });
    return retVal;
};
const de_PatchStatus = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ApprovalDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ComplianceLevel: smithy_client_1.expectString,
        DeploymentStatus: smithy_client_1.expectString,
    });
};
const de_ResetServiceSettingResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ServiceSetting: (_) => de_ServiceSetting(_, context),
    });
};
const de_ResourceComplianceSummaryItem = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ComplianceType: smithy_client_1.expectString,
        CompliantSummary: smithy_client_1._json,
        ExecutionSummary: (_) => de_ComplianceExecutionSummary(_, context),
        NonCompliantSummary: smithy_client_1._json,
        OverallSeverity: smithy_client_1.expectString,
        ResourceId: smithy_client_1.expectString,
        ResourceType: smithy_client_1.expectString,
        Status: smithy_client_1.expectString,
    });
};
const de_ResourceComplianceSummaryItemList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ResourceComplianceSummaryItem(entry, context);
    });
    return retVal;
};
const de_ResourceDataSyncItem = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        LastStatus: smithy_client_1.expectString,
        LastSuccessfulSyncTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastSyncStatusMessage: smithy_client_1.expectString,
        LastSyncTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        S3Destination: smithy_client_1._json,
        SyncCreatedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        SyncLastModifiedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        SyncName: smithy_client_1.expectString,
        SyncSource: smithy_client_1._json,
        SyncType: smithy_client_1.expectString,
    });
};
const de_ResourceDataSyncItemList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ResourceDataSyncItem(entry, context);
    });
    return retVal;
};
const de_ReviewInformation = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ReviewedTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Reviewer: smithy_client_1.expectString,
        Status: smithy_client_1.expectString,
    });
};
const de_ReviewInformationList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ReviewInformation(entry, context);
    });
    return retVal;
};
const de_SendCommandResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Command: (_) => de_Command(_, context),
    });
};
const de_ServiceSetting = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ARN: smithy_client_1.expectString,
        LastModifiedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastModifiedUser: smithy_client_1.expectString,
        SettingId: smithy_client_1.expectString,
        SettingValue: smithy_client_1.expectString,
        Status: smithy_client_1.expectString,
    });
};
const de_Session = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Details: smithy_client_1.expectString,
        DocumentName: smithy_client_1.expectString,
        EndDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        MaxSessionDuration: smithy_client_1.expectString,
        OutputUrl: smithy_client_1._json,
        Owner: smithy_client_1.expectString,
        Reason: smithy_client_1.expectString,
        SessionId: smithy_client_1.expectString,
        StartDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Status: smithy_client_1.expectString,
        Target: smithy_client_1.expectString,
    });
};
const de_SessionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Session(entry, context);
    });
    return retVal;
};
const de_StepExecution = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Action: smithy_client_1.expectString,
        ExecutionEndTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ExecutionStartTime: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        FailureDetails: smithy_client_1._json,
        FailureMessage: smithy_client_1.expectString,
        Inputs: smithy_client_1._json,
        IsCritical: smithy_client_1.expectBoolean,
        IsEnd: smithy_client_1.expectBoolean,
        MaxAttempts: smithy_client_1.expectInt32,
        NextStep: smithy_client_1.expectString,
        OnFailure: smithy_client_1.expectString,
        Outputs: smithy_client_1._json,
        OverriddenParameters: smithy_client_1._json,
        Response: smithy_client_1.expectString,
        ResponseCode: smithy_client_1.expectString,
        StepExecutionId: smithy_client_1.expectString,
        StepName: smithy_client_1.expectString,
        StepStatus: smithy_client_1.expectString,
        TargetLocation: smithy_client_1._json,
        Targets: smithy_client_1._json,
        TimeoutSeconds: smithy_client_1.expectLong,
        TriggeredAlarms: smithy_client_1._json,
        ValidNextSteps: smithy_client_1._json,
    });
};
const de_StepExecutionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_StepExecution(entry, context);
    });
    return retVal;
};
const de_UpdateAssociationResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AssociationDescription: (_) => de_AssociationDescription(_, context),
    });
};
const de_UpdateAssociationStatusResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AssociationDescription: (_) => de_AssociationDescription(_, context),
    });
};
const de_UpdateDocumentResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        DocumentDescription: (_) => de_DocumentDescription(_, context),
    });
};
const de_UpdateMaintenanceWindowTaskResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AlarmConfiguration: smithy_client_1._json,
        CutoffBehavior: smithy_client_1.expectString,
        Description: smithy_client_1.expectString,
        LoggingInfo: smithy_client_1._json,
        MaxConcurrency: smithy_client_1.expectString,
        MaxErrors: smithy_client_1.expectString,
        Name: smithy_client_1.expectString,
        Priority: smithy_client_1.expectInt32,
        ServiceRoleArn: smithy_client_1.expectString,
        Targets: smithy_client_1._json,
        TaskArn: smithy_client_1.expectString,
        TaskInvocationParameters: (_) => de_MaintenanceWindowTaskInvocationParameters(_, context),
        TaskParameters: smithy_client_1._json,
        WindowId: smithy_client_1.expectString,
        WindowTaskId: smithy_client_1.expectString,
    });
};
const de_UpdatePatchBaselineResult = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ApprovalRules: smithy_client_1._json,
        ApprovedPatches: smithy_client_1._json,
        ApprovedPatchesComplianceLevel: smithy_client_1.expectString,
        ApprovedPatchesEnableNonSecurity: smithy_client_1.expectBoolean,
        BaselineId: smithy_client_1.expectString,
        CreatedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Description: smithy_client_1.expectString,
        GlobalFilters: smithy_client_1._json,
        ModifiedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Name: smithy_client_1.expectString,
        OperatingSystem: smithy_client_1.expectString,
        RejectedPatches: smithy_client_1._json,
        RejectedPatchesAction: smithy_client_1.expectString,
        Sources: smithy_client_1._json,
    });
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => (0, smithy_client_1.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError = (0, smithy_client_1.withBaseException)(SSMServiceException_1.SSMServiceException);
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
function sharedHeaders(operation) {
    return {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": `AmazonSSM.${operation}`,
    };
}
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};
