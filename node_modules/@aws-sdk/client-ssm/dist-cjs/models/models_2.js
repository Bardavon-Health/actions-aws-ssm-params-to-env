"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePatchBaselineResultFilterSensitiveLog = exports.UpdatePatchBaselineRequestFilterSensitiveLog = exports.UpdateMaintenanceWindowTaskResultFilterSensitiveLog = exports.UpdateMaintenanceWindowTaskRequestFilterSensitiveLog = exports.UpdateMaintenanceWindowTargetResultFilterSensitiveLog = exports.UpdateMaintenanceWindowTargetRequestFilterSensitiveLog = exports.UpdateMaintenanceWindowResultFilterSensitiveLog = exports.UpdateMaintenanceWindowRequestFilterSensitiveLog = exports.UpdateAssociationStatusResultFilterSensitiveLog = exports.UpdateAssociationResultFilterSensitiveLog = exports.UpdateAssociationRequestFilterSensitiveLog = exports.ResourceDataSyncConflictException = exports.OpsMetadataKeyLimitExceededException = exports.DocumentReviewAction = exports.DuplicateDocumentVersionName = exports.DuplicateDocumentContent = exports.DocumentVersionLimitExceeded = exports.StatusUnchanged = exports.InvalidUpdate = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const models_0_1 = require("./models_0");
const models_1_1 = require("./models_1");
const SSMServiceException_1 = require("./SSMServiceException");
class InvalidUpdate extends SSMServiceException_1.SSMServiceException {
    constructor(opts) {
        super({
            name: "InvalidUpdate",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidUpdate";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidUpdate.prototype);
        this.Message = opts.Message;
    }
}
exports.InvalidUpdate = InvalidUpdate;
class StatusUnchanged extends SSMServiceException_1.SSMServiceException {
    constructor(opts) {
        super({
            name: "StatusUnchanged",
            $fault: "client",
            ...opts,
        });
        this.name = "StatusUnchanged";
        this.$fault = "client";
        Object.setPrototypeOf(this, StatusUnchanged.prototype);
    }
}
exports.StatusUnchanged = StatusUnchanged;
class DocumentVersionLimitExceeded extends SSMServiceException_1.SSMServiceException {
    constructor(opts) {
        super({
            name: "DocumentVersionLimitExceeded",
            $fault: "client",
            ...opts,
        });
        this.name = "DocumentVersionLimitExceeded";
        this.$fault = "client";
        Object.setPrototypeOf(this, DocumentVersionLimitExceeded.prototype);
        this.Message = opts.Message;
    }
}
exports.DocumentVersionLimitExceeded = DocumentVersionLimitExceeded;
class DuplicateDocumentContent extends SSMServiceException_1.SSMServiceException {
    constructor(opts) {
        super({
            name: "DuplicateDocumentContent",
            $fault: "client",
            ...opts,
        });
        this.name = "DuplicateDocumentContent";
        this.$fault = "client";
        Object.setPrototypeOf(this, DuplicateDocumentContent.prototype);
        this.Message = opts.Message;
    }
}
exports.DuplicateDocumentContent = DuplicateDocumentContent;
class DuplicateDocumentVersionName extends SSMServiceException_1.SSMServiceException {
    constructor(opts) {
        super({
            name: "DuplicateDocumentVersionName",
            $fault: "client",
            ...opts,
        });
        this.name = "DuplicateDocumentVersionName";
        this.$fault = "client";
        Object.setPrototypeOf(this, DuplicateDocumentVersionName.prototype);
        this.Message = opts.Message;
    }
}
exports.DuplicateDocumentVersionName = DuplicateDocumentVersionName;
exports.DocumentReviewAction = {
    Approve: "Approve",
    Reject: "Reject",
    SendForReview: "SendForReview",
    UpdateReview: "UpdateReview",
};
class OpsMetadataKeyLimitExceededException extends SSMServiceException_1.SSMServiceException {
    constructor(opts) {
        super({
            name: "OpsMetadataKeyLimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "OpsMetadataKeyLimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, OpsMetadataKeyLimitExceededException.prototype);
    }
}
exports.OpsMetadataKeyLimitExceededException = OpsMetadataKeyLimitExceededException;
class ResourceDataSyncConflictException extends SSMServiceException_1.SSMServiceException {
    constructor(opts) {
        super({
            name: "ResourceDataSyncConflictException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceDataSyncConflictException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceDataSyncConflictException.prototype);
        this.Message = opts.Message;
    }
}
exports.ResourceDataSyncConflictException = ResourceDataSyncConflictException;
const UpdateAssociationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Parameters && { Parameters: smithy_client_1.SENSITIVE_STRING }),
});
exports.UpdateAssociationRequestFilterSensitiveLog = UpdateAssociationRequestFilterSensitiveLog;
const UpdateAssociationResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AssociationDescription && {
        AssociationDescription: (0, models_0_1.AssociationDescriptionFilterSensitiveLog)(obj.AssociationDescription),
    }),
});
exports.UpdateAssociationResultFilterSensitiveLog = UpdateAssociationResultFilterSensitiveLog;
const UpdateAssociationStatusResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AssociationDescription && {
        AssociationDescription: (0, models_0_1.AssociationDescriptionFilterSensitiveLog)(obj.AssociationDescription),
    }),
});
exports.UpdateAssociationStatusResultFilterSensitiveLog = UpdateAssociationStatusResultFilterSensitiveLog;
const UpdateMaintenanceWindowRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
});
exports.UpdateMaintenanceWindowRequestFilterSensitiveLog = UpdateMaintenanceWindowRequestFilterSensitiveLog;
const UpdateMaintenanceWindowResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
});
exports.UpdateMaintenanceWindowResultFilterSensitiveLog = UpdateMaintenanceWindowResultFilterSensitiveLog;
const UpdateMaintenanceWindowTargetRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OwnerInformation && { OwnerInformation: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
});
exports.UpdateMaintenanceWindowTargetRequestFilterSensitiveLog = UpdateMaintenanceWindowTargetRequestFilterSensitiveLog;
const UpdateMaintenanceWindowTargetResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OwnerInformation && { OwnerInformation: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
});
exports.UpdateMaintenanceWindowTargetResultFilterSensitiveLog = UpdateMaintenanceWindowTargetResultFilterSensitiveLog;
const UpdateMaintenanceWindowTaskRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TaskParameters && { TaskParameters: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.TaskInvocationParameters && {
        TaskInvocationParameters: (0, models_1_1.MaintenanceWindowTaskInvocationParametersFilterSensitiveLog)(obj.TaskInvocationParameters),
    }),
    ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
});
exports.UpdateMaintenanceWindowTaskRequestFilterSensitiveLog = UpdateMaintenanceWindowTaskRequestFilterSensitiveLog;
const UpdateMaintenanceWindowTaskResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.TaskParameters && { TaskParameters: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.TaskInvocationParameters && {
        TaskInvocationParameters: (0, models_1_1.MaintenanceWindowTaskInvocationParametersFilterSensitiveLog)(obj.TaskInvocationParameters),
    }),
    ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
});
exports.UpdateMaintenanceWindowTaskResultFilterSensitiveLog = UpdateMaintenanceWindowTaskResultFilterSensitiveLog;
const UpdatePatchBaselineRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Sources && { Sources: obj.Sources.map((item) => (0, models_0_1.PatchSourceFilterSensitiveLog)(item)) }),
});
exports.UpdatePatchBaselineRequestFilterSensitiveLog = UpdatePatchBaselineRequestFilterSensitiveLog;
const UpdatePatchBaselineResultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Sources && { Sources: obj.Sources.map((item) => (0, models_0_1.PatchSourceFilterSensitiveLog)(item)) }),
});
exports.UpdatePatchBaselineResultFilterSensitiveLog = UpdatePatchBaselineResultFilterSensitiveLog;
