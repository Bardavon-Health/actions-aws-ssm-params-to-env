"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSM = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const AddTagsToResourceCommand_1 = require("./commands/AddTagsToResourceCommand");
const AssociateOpsItemRelatedItemCommand_1 = require("./commands/AssociateOpsItemRelatedItemCommand");
const CancelCommandCommand_1 = require("./commands/CancelCommandCommand");
const CancelMaintenanceWindowExecutionCommand_1 = require("./commands/CancelMaintenanceWindowExecutionCommand");
const CreateActivationCommand_1 = require("./commands/CreateActivationCommand");
const CreateAssociationBatchCommand_1 = require("./commands/CreateAssociationBatchCommand");
const CreateAssociationCommand_1 = require("./commands/CreateAssociationCommand");
const CreateDocumentCommand_1 = require("./commands/CreateDocumentCommand");
const CreateMaintenanceWindowCommand_1 = require("./commands/CreateMaintenanceWindowCommand");
const CreateOpsItemCommand_1 = require("./commands/CreateOpsItemCommand");
const CreateOpsMetadataCommand_1 = require("./commands/CreateOpsMetadataCommand");
const CreatePatchBaselineCommand_1 = require("./commands/CreatePatchBaselineCommand");
const CreateResourceDataSyncCommand_1 = require("./commands/CreateResourceDataSyncCommand");
const DeleteActivationCommand_1 = require("./commands/DeleteActivationCommand");
const DeleteAssociationCommand_1 = require("./commands/DeleteAssociationCommand");
const DeleteDocumentCommand_1 = require("./commands/DeleteDocumentCommand");
const DeleteInventoryCommand_1 = require("./commands/DeleteInventoryCommand");
const DeleteMaintenanceWindowCommand_1 = require("./commands/DeleteMaintenanceWindowCommand");
const DeleteOpsMetadataCommand_1 = require("./commands/DeleteOpsMetadataCommand");
const DeleteParameterCommand_1 = require("./commands/DeleteParameterCommand");
const DeleteParametersCommand_1 = require("./commands/DeleteParametersCommand");
const DeletePatchBaselineCommand_1 = require("./commands/DeletePatchBaselineCommand");
const DeleteResourceDataSyncCommand_1 = require("./commands/DeleteResourceDataSyncCommand");
const DeleteResourcePolicyCommand_1 = require("./commands/DeleteResourcePolicyCommand");
const DeregisterManagedInstanceCommand_1 = require("./commands/DeregisterManagedInstanceCommand");
const DeregisterPatchBaselineForPatchGroupCommand_1 = require("./commands/DeregisterPatchBaselineForPatchGroupCommand");
const DeregisterTargetFromMaintenanceWindowCommand_1 = require("./commands/DeregisterTargetFromMaintenanceWindowCommand");
const DeregisterTaskFromMaintenanceWindowCommand_1 = require("./commands/DeregisterTaskFromMaintenanceWindowCommand");
const DescribeActivationsCommand_1 = require("./commands/DescribeActivationsCommand");
const DescribeAssociationCommand_1 = require("./commands/DescribeAssociationCommand");
const DescribeAssociationExecutionsCommand_1 = require("./commands/DescribeAssociationExecutionsCommand");
const DescribeAssociationExecutionTargetsCommand_1 = require("./commands/DescribeAssociationExecutionTargetsCommand");
const DescribeAutomationExecutionsCommand_1 = require("./commands/DescribeAutomationExecutionsCommand");
const DescribeAutomationStepExecutionsCommand_1 = require("./commands/DescribeAutomationStepExecutionsCommand");
const DescribeAvailablePatchesCommand_1 = require("./commands/DescribeAvailablePatchesCommand");
const DescribeDocumentCommand_1 = require("./commands/DescribeDocumentCommand");
const DescribeDocumentPermissionCommand_1 = require("./commands/DescribeDocumentPermissionCommand");
const DescribeEffectiveInstanceAssociationsCommand_1 = require("./commands/DescribeEffectiveInstanceAssociationsCommand");
const DescribeEffectivePatchesForPatchBaselineCommand_1 = require("./commands/DescribeEffectivePatchesForPatchBaselineCommand");
const DescribeInstanceAssociationsStatusCommand_1 = require("./commands/DescribeInstanceAssociationsStatusCommand");
const DescribeInstanceInformationCommand_1 = require("./commands/DescribeInstanceInformationCommand");
const DescribeInstancePatchesCommand_1 = require("./commands/DescribeInstancePatchesCommand");
const DescribeInstancePatchStatesCommand_1 = require("./commands/DescribeInstancePatchStatesCommand");
const DescribeInstancePatchStatesForPatchGroupCommand_1 = require("./commands/DescribeInstancePatchStatesForPatchGroupCommand");
const DescribeInventoryDeletionsCommand_1 = require("./commands/DescribeInventoryDeletionsCommand");
const DescribeMaintenanceWindowExecutionsCommand_1 = require("./commands/DescribeMaintenanceWindowExecutionsCommand");
const DescribeMaintenanceWindowExecutionTaskInvocationsCommand_1 = require("./commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand");
const DescribeMaintenanceWindowExecutionTasksCommand_1 = require("./commands/DescribeMaintenanceWindowExecutionTasksCommand");
const DescribeMaintenanceWindowScheduleCommand_1 = require("./commands/DescribeMaintenanceWindowScheduleCommand");
const DescribeMaintenanceWindowsCommand_1 = require("./commands/DescribeMaintenanceWindowsCommand");
const DescribeMaintenanceWindowsForTargetCommand_1 = require("./commands/DescribeMaintenanceWindowsForTargetCommand");
const DescribeMaintenanceWindowTargetsCommand_1 = require("./commands/DescribeMaintenanceWindowTargetsCommand");
const DescribeMaintenanceWindowTasksCommand_1 = require("./commands/DescribeMaintenanceWindowTasksCommand");
const DescribeOpsItemsCommand_1 = require("./commands/DescribeOpsItemsCommand");
const DescribeParametersCommand_1 = require("./commands/DescribeParametersCommand");
const DescribePatchBaselinesCommand_1 = require("./commands/DescribePatchBaselinesCommand");
const DescribePatchGroupsCommand_1 = require("./commands/DescribePatchGroupsCommand");
const DescribePatchGroupStateCommand_1 = require("./commands/DescribePatchGroupStateCommand");
const DescribePatchPropertiesCommand_1 = require("./commands/DescribePatchPropertiesCommand");
const DescribeSessionsCommand_1 = require("./commands/DescribeSessionsCommand");
const DisassociateOpsItemRelatedItemCommand_1 = require("./commands/DisassociateOpsItemRelatedItemCommand");
const GetAutomationExecutionCommand_1 = require("./commands/GetAutomationExecutionCommand");
const GetCalendarStateCommand_1 = require("./commands/GetCalendarStateCommand");
const GetCommandInvocationCommand_1 = require("./commands/GetCommandInvocationCommand");
const GetConnectionStatusCommand_1 = require("./commands/GetConnectionStatusCommand");
const GetDefaultPatchBaselineCommand_1 = require("./commands/GetDefaultPatchBaselineCommand");
const GetDeployablePatchSnapshotForInstanceCommand_1 = require("./commands/GetDeployablePatchSnapshotForInstanceCommand");
const GetDocumentCommand_1 = require("./commands/GetDocumentCommand");
const GetInventoryCommand_1 = require("./commands/GetInventoryCommand");
const GetInventorySchemaCommand_1 = require("./commands/GetInventorySchemaCommand");
const GetMaintenanceWindowCommand_1 = require("./commands/GetMaintenanceWindowCommand");
const GetMaintenanceWindowExecutionCommand_1 = require("./commands/GetMaintenanceWindowExecutionCommand");
const GetMaintenanceWindowExecutionTaskCommand_1 = require("./commands/GetMaintenanceWindowExecutionTaskCommand");
const GetMaintenanceWindowExecutionTaskInvocationCommand_1 = require("./commands/GetMaintenanceWindowExecutionTaskInvocationCommand");
const GetMaintenanceWindowTaskCommand_1 = require("./commands/GetMaintenanceWindowTaskCommand");
const GetOpsItemCommand_1 = require("./commands/GetOpsItemCommand");
const GetOpsMetadataCommand_1 = require("./commands/GetOpsMetadataCommand");
const GetOpsSummaryCommand_1 = require("./commands/GetOpsSummaryCommand");
const GetParameterCommand_1 = require("./commands/GetParameterCommand");
const GetParameterHistoryCommand_1 = require("./commands/GetParameterHistoryCommand");
const GetParametersByPathCommand_1 = require("./commands/GetParametersByPathCommand");
const GetParametersCommand_1 = require("./commands/GetParametersCommand");
const GetPatchBaselineCommand_1 = require("./commands/GetPatchBaselineCommand");
const GetPatchBaselineForPatchGroupCommand_1 = require("./commands/GetPatchBaselineForPatchGroupCommand");
const GetResourcePoliciesCommand_1 = require("./commands/GetResourcePoliciesCommand");
const GetServiceSettingCommand_1 = require("./commands/GetServiceSettingCommand");
const LabelParameterVersionCommand_1 = require("./commands/LabelParameterVersionCommand");
const ListAssociationsCommand_1 = require("./commands/ListAssociationsCommand");
const ListAssociationVersionsCommand_1 = require("./commands/ListAssociationVersionsCommand");
const ListCommandInvocationsCommand_1 = require("./commands/ListCommandInvocationsCommand");
const ListCommandsCommand_1 = require("./commands/ListCommandsCommand");
const ListComplianceItemsCommand_1 = require("./commands/ListComplianceItemsCommand");
const ListComplianceSummariesCommand_1 = require("./commands/ListComplianceSummariesCommand");
const ListDocumentMetadataHistoryCommand_1 = require("./commands/ListDocumentMetadataHistoryCommand");
const ListDocumentsCommand_1 = require("./commands/ListDocumentsCommand");
const ListDocumentVersionsCommand_1 = require("./commands/ListDocumentVersionsCommand");
const ListInventoryEntriesCommand_1 = require("./commands/ListInventoryEntriesCommand");
const ListOpsItemEventsCommand_1 = require("./commands/ListOpsItemEventsCommand");
const ListOpsItemRelatedItemsCommand_1 = require("./commands/ListOpsItemRelatedItemsCommand");
const ListOpsMetadataCommand_1 = require("./commands/ListOpsMetadataCommand");
const ListResourceComplianceSummariesCommand_1 = require("./commands/ListResourceComplianceSummariesCommand");
const ListResourceDataSyncCommand_1 = require("./commands/ListResourceDataSyncCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ModifyDocumentPermissionCommand_1 = require("./commands/ModifyDocumentPermissionCommand");
const PutComplianceItemsCommand_1 = require("./commands/PutComplianceItemsCommand");
const PutInventoryCommand_1 = require("./commands/PutInventoryCommand");
const PutParameterCommand_1 = require("./commands/PutParameterCommand");
const PutResourcePolicyCommand_1 = require("./commands/PutResourcePolicyCommand");
const RegisterDefaultPatchBaselineCommand_1 = require("./commands/RegisterDefaultPatchBaselineCommand");
const RegisterPatchBaselineForPatchGroupCommand_1 = require("./commands/RegisterPatchBaselineForPatchGroupCommand");
const RegisterTargetWithMaintenanceWindowCommand_1 = require("./commands/RegisterTargetWithMaintenanceWindowCommand");
const RegisterTaskWithMaintenanceWindowCommand_1 = require("./commands/RegisterTaskWithMaintenanceWindowCommand");
const RemoveTagsFromResourceCommand_1 = require("./commands/RemoveTagsFromResourceCommand");
const ResetServiceSettingCommand_1 = require("./commands/ResetServiceSettingCommand");
const ResumeSessionCommand_1 = require("./commands/ResumeSessionCommand");
const SendAutomationSignalCommand_1 = require("./commands/SendAutomationSignalCommand");
const SendCommandCommand_1 = require("./commands/SendCommandCommand");
const StartAssociationsOnceCommand_1 = require("./commands/StartAssociationsOnceCommand");
const StartAutomationExecutionCommand_1 = require("./commands/StartAutomationExecutionCommand");
const StartChangeRequestExecutionCommand_1 = require("./commands/StartChangeRequestExecutionCommand");
const StartSessionCommand_1 = require("./commands/StartSessionCommand");
const StopAutomationExecutionCommand_1 = require("./commands/StopAutomationExecutionCommand");
const TerminateSessionCommand_1 = require("./commands/TerminateSessionCommand");
const UnlabelParameterVersionCommand_1 = require("./commands/UnlabelParameterVersionCommand");
const UpdateAssociationCommand_1 = require("./commands/UpdateAssociationCommand");
const UpdateAssociationStatusCommand_1 = require("./commands/UpdateAssociationStatusCommand");
const UpdateDocumentCommand_1 = require("./commands/UpdateDocumentCommand");
const UpdateDocumentDefaultVersionCommand_1 = require("./commands/UpdateDocumentDefaultVersionCommand");
const UpdateDocumentMetadataCommand_1 = require("./commands/UpdateDocumentMetadataCommand");
const UpdateMaintenanceWindowCommand_1 = require("./commands/UpdateMaintenanceWindowCommand");
const UpdateMaintenanceWindowTargetCommand_1 = require("./commands/UpdateMaintenanceWindowTargetCommand");
const UpdateMaintenanceWindowTaskCommand_1 = require("./commands/UpdateMaintenanceWindowTaskCommand");
const UpdateManagedInstanceRoleCommand_1 = require("./commands/UpdateManagedInstanceRoleCommand");
const UpdateOpsItemCommand_1 = require("./commands/UpdateOpsItemCommand");
const UpdateOpsMetadataCommand_1 = require("./commands/UpdateOpsMetadataCommand");
const UpdatePatchBaselineCommand_1 = require("./commands/UpdatePatchBaselineCommand");
const UpdateResourceDataSyncCommand_1 = require("./commands/UpdateResourceDataSyncCommand");
const UpdateServiceSettingCommand_1 = require("./commands/UpdateServiceSettingCommand");
const SSMClient_1 = require("./SSMClient");
const commands = {
    AddTagsToResourceCommand: AddTagsToResourceCommand_1.AddTagsToResourceCommand,
    AssociateOpsItemRelatedItemCommand: AssociateOpsItemRelatedItemCommand_1.AssociateOpsItemRelatedItemCommand,
    CancelCommandCommand: CancelCommandCommand_1.CancelCommandCommand,
    CancelMaintenanceWindowExecutionCommand: CancelMaintenanceWindowExecutionCommand_1.CancelMaintenanceWindowExecutionCommand,
    CreateActivationCommand: CreateActivationCommand_1.CreateActivationCommand,
    CreateAssociationCommand: CreateAssociationCommand_1.CreateAssociationCommand,
    CreateAssociationBatchCommand: CreateAssociationBatchCommand_1.CreateAssociationBatchCommand,
    CreateDocumentCommand: CreateDocumentCommand_1.CreateDocumentCommand,
    CreateMaintenanceWindowCommand: CreateMaintenanceWindowCommand_1.CreateMaintenanceWindowCommand,
    CreateOpsItemCommand: CreateOpsItemCommand_1.CreateOpsItemCommand,
    CreateOpsMetadataCommand: CreateOpsMetadataCommand_1.CreateOpsMetadataCommand,
    CreatePatchBaselineCommand: CreatePatchBaselineCommand_1.CreatePatchBaselineCommand,
    CreateResourceDataSyncCommand: CreateResourceDataSyncCommand_1.CreateResourceDataSyncCommand,
    DeleteActivationCommand: DeleteActivationCommand_1.DeleteActivationCommand,
    DeleteAssociationCommand: DeleteAssociationCommand_1.DeleteAssociationCommand,
    DeleteDocumentCommand: DeleteDocumentCommand_1.DeleteDocumentCommand,
    DeleteInventoryCommand: DeleteInventoryCommand_1.DeleteInventoryCommand,
    DeleteMaintenanceWindowCommand: DeleteMaintenanceWindowCommand_1.DeleteMaintenanceWindowCommand,
    DeleteOpsMetadataCommand: DeleteOpsMetadataCommand_1.DeleteOpsMetadataCommand,
    DeleteParameterCommand: DeleteParameterCommand_1.DeleteParameterCommand,
    DeleteParametersCommand: DeleteParametersCommand_1.DeleteParametersCommand,
    DeletePatchBaselineCommand: DeletePatchBaselineCommand_1.DeletePatchBaselineCommand,
    DeleteResourceDataSyncCommand: DeleteResourceDataSyncCommand_1.DeleteResourceDataSyncCommand,
    DeleteResourcePolicyCommand: DeleteResourcePolicyCommand_1.DeleteResourcePolicyCommand,
    DeregisterManagedInstanceCommand: DeregisterManagedInstanceCommand_1.DeregisterManagedInstanceCommand,
    DeregisterPatchBaselineForPatchGroupCommand: DeregisterPatchBaselineForPatchGroupCommand_1.DeregisterPatchBaselineForPatchGroupCommand,
    DeregisterTargetFromMaintenanceWindowCommand: DeregisterTargetFromMaintenanceWindowCommand_1.DeregisterTargetFromMaintenanceWindowCommand,
    DeregisterTaskFromMaintenanceWindowCommand: DeregisterTaskFromMaintenanceWindowCommand_1.DeregisterTaskFromMaintenanceWindowCommand,
    DescribeActivationsCommand: DescribeActivationsCommand_1.DescribeActivationsCommand,
    DescribeAssociationCommand: DescribeAssociationCommand_1.DescribeAssociationCommand,
    DescribeAssociationExecutionsCommand: DescribeAssociationExecutionsCommand_1.DescribeAssociationExecutionsCommand,
    DescribeAssociationExecutionTargetsCommand: DescribeAssociationExecutionTargetsCommand_1.DescribeAssociationExecutionTargetsCommand,
    DescribeAutomationExecutionsCommand: DescribeAutomationExecutionsCommand_1.DescribeAutomationExecutionsCommand,
    DescribeAutomationStepExecutionsCommand: DescribeAutomationStepExecutionsCommand_1.DescribeAutomationStepExecutionsCommand,
    DescribeAvailablePatchesCommand: DescribeAvailablePatchesCommand_1.DescribeAvailablePatchesCommand,
    DescribeDocumentCommand: DescribeDocumentCommand_1.DescribeDocumentCommand,
    DescribeDocumentPermissionCommand: DescribeDocumentPermissionCommand_1.DescribeDocumentPermissionCommand,
    DescribeEffectiveInstanceAssociationsCommand: DescribeEffectiveInstanceAssociationsCommand_1.DescribeEffectiveInstanceAssociationsCommand,
    DescribeEffectivePatchesForPatchBaselineCommand: DescribeEffectivePatchesForPatchBaselineCommand_1.DescribeEffectivePatchesForPatchBaselineCommand,
    DescribeInstanceAssociationsStatusCommand: DescribeInstanceAssociationsStatusCommand_1.DescribeInstanceAssociationsStatusCommand,
    DescribeInstanceInformationCommand: DescribeInstanceInformationCommand_1.DescribeInstanceInformationCommand,
    DescribeInstancePatchesCommand: DescribeInstancePatchesCommand_1.DescribeInstancePatchesCommand,
    DescribeInstancePatchStatesCommand: DescribeInstancePatchStatesCommand_1.DescribeInstancePatchStatesCommand,
    DescribeInstancePatchStatesForPatchGroupCommand: DescribeInstancePatchStatesForPatchGroupCommand_1.DescribeInstancePatchStatesForPatchGroupCommand,
    DescribeInventoryDeletionsCommand: DescribeInventoryDeletionsCommand_1.DescribeInventoryDeletionsCommand,
    DescribeMaintenanceWindowExecutionsCommand: DescribeMaintenanceWindowExecutionsCommand_1.DescribeMaintenanceWindowExecutionsCommand,
    DescribeMaintenanceWindowExecutionTaskInvocationsCommand: DescribeMaintenanceWindowExecutionTaskInvocationsCommand_1.DescribeMaintenanceWindowExecutionTaskInvocationsCommand,
    DescribeMaintenanceWindowExecutionTasksCommand: DescribeMaintenanceWindowExecutionTasksCommand_1.DescribeMaintenanceWindowExecutionTasksCommand,
    DescribeMaintenanceWindowsCommand: DescribeMaintenanceWindowsCommand_1.DescribeMaintenanceWindowsCommand,
    DescribeMaintenanceWindowScheduleCommand: DescribeMaintenanceWindowScheduleCommand_1.DescribeMaintenanceWindowScheduleCommand,
    DescribeMaintenanceWindowsForTargetCommand: DescribeMaintenanceWindowsForTargetCommand_1.DescribeMaintenanceWindowsForTargetCommand,
    DescribeMaintenanceWindowTargetsCommand: DescribeMaintenanceWindowTargetsCommand_1.DescribeMaintenanceWindowTargetsCommand,
    DescribeMaintenanceWindowTasksCommand: DescribeMaintenanceWindowTasksCommand_1.DescribeMaintenanceWindowTasksCommand,
    DescribeOpsItemsCommand: DescribeOpsItemsCommand_1.DescribeOpsItemsCommand,
    DescribeParametersCommand: DescribeParametersCommand_1.DescribeParametersCommand,
    DescribePatchBaselinesCommand: DescribePatchBaselinesCommand_1.DescribePatchBaselinesCommand,
    DescribePatchGroupsCommand: DescribePatchGroupsCommand_1.DescribePatchGroupsCommand,
    DescribePatchGroupStateCommand: DescribePatchGroupStateCommand_1.DescribePatchGroupStateCommand,
    DescribePatchPropertiesCommand: DescribePatchPropertiesCommand_1.DescribePatchPropertiesCommand,
    DescribeSessionsCommand: DescribeSessionsCommand_1.DescribeSessionsCommand,
    DisassociateOpsItemRelatedItemCommand: DisassociateOpsItemRelatedItemCommand_1.DisassociateOpsItemRelatedItemCommand,
    GetAutomationExecutionCommand: GetAutomationExecutionCommand_1.GetAutomationExecutionCommand,
    GetCalendarStateCommand: GetCalendarStateCommand_1.GetCalendarStateCommand,
    GetCommandInvocationCommand: GetCommandInvocationCommand_1.GetCommandInvocationCommand,
    GetConnectionStatusCommand: GetConnectionStatusCommand_1.GetConnectionStatusCommand,
    GetDefaultPatchBaselineCommand: GetDefaultPatchBaselineCommand_1.GetDefaultPatchBaselineCommand,
    GetDeployablePatchSnapshotForInstanceCommand: GetDeployablePatchSnapshotForInstanceCommand_1.GetDeployablePatchSnapshotForInstanceCommand,
    GetDocumentCommand: GetDocumentCommand_1.GetDocumentCommand,
    GetInventoryCommand: GetInventoryCommand_1.GetInventoryCommand,
    GetInventorySchemaCommand: GetInventorySchemaCommand_1.GetInventorySchemaCommand,
    GetMaintenanceWindowCommand: GetMaintenanceWindowCommand_1.GetMaintenanceWindowCommand,
    GetMaintenanceWindowExecutionCommand: GetMaintenanceWindowExecutionCommand_1.GetMaintenanceWindowExecutionCommand,
    GetMaintenanceWindowExecutionTaskCommand: GetMaintenanceWindowExecutionTaskCommand_1.GetMaintenanceWindowExecutionTaskCommand,
    GetMaintenanceWindowExecutionTaskInvocationCommand: GetMaintenanceWindowExecutionTaskInvocationCommand_1.GetMaintenanceWindowExecutionTaskInvocationCommand,
    GetMaintenanceWindowTaskCommand: GetMaintenanceWindowTaskCommand_1.GetMaintenanceWindowTaskCommand,
    GetOpsItemCommand: GetOpsItemCommand_1.GetOpsItemCommand,
    GetOpsMetadataCommand: GetOpsMetadataCommand_1.GetOpsMetadataCommand,
    GetOpsSummaryCommand: GetOpsSummaryCommand_1.GetOpsSummaryCommand,
    GetParameterCommand: GetParameterCommand_1.GetParameterCommand,
    GetParameterHistoryCommand: GetParameterHistoryCommand_1.GetParameterHistoryCommand,
    GetParametersCommand: GetParametersCommand_1.GetParametersCommand,
    GetParametersByPathCommand: GetParametersByPathCommand_1.GetParametersByPathCommand,
    GetPatchBaselineCommand: GetPatchBaselineCommand_1.GetPatchBaselineCommand,
    GetPatchBaselineForPatchGroupCommand: GetPatchBaselineForPatchGroupCommand_1.GetPatchBaselineForPatchGroupCommand,
    GetResourcePoliciesCommand: GetResourcePoliciesCommand_1.GetResourcePoliciesCommand,
    GetServiceSettingCommand: GetServiceSettingCommand_1.GetServiceSettingCommand,
    LabelParameterVersionCommand: LabelParameterVersionCommand_1.LabelParameterVersionCommand,
    ListAssociationsCommand: ListAssociationsCommand_1.ListAssociationsCommand,
    ListAssociationVersionsCommand: ListAssociationVersionsCommand_1.ListAssociationVersionsCommand,
    ListCommandInvocationsCommand: ListCommandInvocationsCommand_1.ListCommandInvocationsCommand,
    ListCommandsCommand: ListCommandsCommand_1.ListCommandsCommand,
    ListComplianceItemsCommand: ListComplianceItemsCommand_1.ListComplianceItemsCommand,
    ListComplianceSummariesCommand: ListComplianceSummariesCommand_1.ListComplianceSummariesCommand,
    ListDocumentMetadataHistoryCommand: ListDocumentMetadataHistoryCommand_1.ListDocumentMetadataHistoryCommand,
    ListDocumentsCommand: ListDocumentsCommand_1.ListDocumentsCommand,
    ListDocumentVersionsCommand: ListDocumentVersionsCommand_1.ListDocumentVersionsCommand,
    ListInventoryEntriesCommand: ListInventoryEntriesCommand_1.ListInventoryEntriesCommand,
    ListOpsItemEventsCommand: ListOpsItemEventsCommand_1.ListOpsItemEventsCommand,
    ListOpsItemRelatedItemsCommand: ListOpsItemRelatedItemsCommand_1.ListOpsItemRelatedItemsCommand,
    ListOpsMetadataCommand: ListOpsMetadataCommand_1.ListOpsMetadataCommand,
    ListResourceComplianceSummariesCommand: ListResourceComplianceSummariesCommand_1.ListResourceComplianceSummariesCommand,
    ListResourceDataSyncCommand: ListResourceDataSyncCommand_1.ListResourceDataSyncCommand,
    ListTagsForResourceCommand: ListTagsForResourceCommand_1.ListTagsForResourceCommand,
    ModifyDocumentPermissionCommand: ModifyDocumentPermissionCommand_1.ModifyDocumentPermissionCommand,
    PutComplianceItemsCommand: PutComplianceItemsCommand_1.PutComplianceItemsCommand,
    PutInventoryCommand: PutInventoryCommand_1.PutInventoryCommand,
    PutParameterCommand: PutParameterCommand_1.PutParameterCommand,
    PutResourcePolicyCommand: PutResourcePolicyCommand_1.PutResourcePolicyCommand,
    RegisterDefaultPatchBaselineCommand: RegisterDefaultPatchBaselineCommand_1.RegisterDefaultPatchBaselineCommand,
    RegisterPatchBaselineForPatchGroupCommand: RegisterPatchBaselineForPatchGroupCommand_1.RegisterPatchBaselineForPatchGroupCommand,
    RegisterTargetWithMaintenanceWindowCommand: RegisterTargetWithMaintenanceWindowCommand_1.RegisterTargetWithMaintenanceWindowCommand,
    RegisterTaskWithMaintenanceWindowCommand: RegisterTaskWithMaintenanceWindowCommand_1.RegisterTaskWithMaintenanceWindowCommand,
    RemoveTagsFromResourceCommand: RemoveTagsFromResourceCommand_1.RemoveTagsFromResourceCommand,
    ResetServiceSettingCommand: ResetServiceSettingCommand_1.ResetServiceSettingCommand,
    ResumeSessionCommand: ResumeSessionCommand_1.ResumeSessionCommand,
    SendAutomationSignalCommand: SendAutomationSignalCommand_1.SendAutomationSignalCommand,
    SendCommandCommand: SendCommandCommand_1.SendCommandCommand,
    StartAssociationsOnceCommand: StartAssociationsOnceCommand_1.StartAssociationsOnceCommand,
    StartAutomationExecutionCommand: StartAutomationExecutionCommand_1.StartAutomationExecutionCommand,
    StartChangeRequestExecutionCommand: StartChangeRequestExecutionCommand_1.StartChangeRequestExecutionCommand,
    StartSessionCommand: StartSessionCommand_1.StartSessionCommand,
    StopAutomationExecutionCommand: StopAutomationExecutionCommand_1.StopAutomationExecutionCommand,
    TerminateSessionCommand: TerminateSessionCommand_1.TerminateSessionCommand,
    UnlabelParameterVersionCommand: UnlabelParameterVersionCommand_1.UnlabelParameterVersionCommand,
    UpdateAssociationCommand: UpdateAssociationCommand_1.UpdateAssociationCommand,
    UpdateAssociationStatusCommand: UpdateAssociationStatusCommand_1.UpdateAssociationStatusCommand,
    UpdateDocumentCommand: UpdateDocumentCommand_1.UpdateDocumentCommand,
    UpdateDocumentDefaultVersionCommand: UpdateDocumentDefaultVersionCommand_1.UpdateDocumentDefaultVersionCommand,
    UpdateDocumentMetadataCommand: UpdateDocumentMetadataCommand_1.UpdateDocumentMetadataCommand,
    UpdateMaintenanceWindowCommand: UpdateMaintenanceWindowCommand_1.UpdateMaintenanceWindowCommand,
    UpdateMaintenanceWindowTargetCommand: UpdateMaintenanceWindowTargetCommand_1.UpdateMaintenanceWindowTargetCommand,
    UpdateMaintenanceWindowTaskCommand: UpdateMaintenanceWindowTaskCommand_1.UpdateMaintenanceWindowTaskCommand,
    UpdateManagedInstanceRoleCommand: UpdateManagedInstanceRoleCommand_1.UpdateManagedInstanceRoleCommand,
    UpdateOpsItemCommand: UpdateOpsItemCommand_1.UpdateOpsItemCommand,
    UpdateOpsMetadataCommand: UpdateOpsMetadataCommand_1.UpdateOpsMetadataCommand,
    UpdatePatchBaselineCommand: UpdatePatchBaselineCommand_1.UpdatePatchBaselineCommand,
    UpdateResourceDataSyncCommand: UpdateResourceDataSyncCommand_1.UpdateResourceDataSyncCommand,
    UpdateServiceSettingCommand: UpdateServiceSettingCommand_1.UpdateServiceSettingCommand,
};
class SSM extends SSMClient_1.SSMClient {
}
exports.SSM = SSM;
(0, smithy_client_1.createAggregatedClient)(commands, SSM);
