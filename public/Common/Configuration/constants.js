"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constant = void 0;
exports.Constant = {
    DefaultTenant: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    AuthorityHostUrl: 'https://login.microsoftonline.com',
    AppInsightErrorMessage: 'Not able to set up app insights, bypassing this step',
    MavenType: "Maven",
    NuGetType: "NuGet",
    SWElectronicType: "SW Electronic",
    PolicyJsonFilePath: "../InputJsons/policy.json",
    SubmitReleaseJsonFilePath: "../InputJsons/submitRelease.json",
    PomFileExtension: ".pom",
    TaskJsonDistanceFromManagerFolder: '../../task.json',
    Developer: "Developer",
    PreProd: "PreProd",
    Prod: "Prod",
    Bad: 'bad',
    Success: "success",
    GatewayOperationsSuccess: "ESRP Release Gateway submission and polling task completed. \n",
    HappyPathSuccessExecutionMessage: "Task completed, Reach out to <esrpreldri@microsoft.com> for assistance. \n",
    FailurePathExecutionMessage: "Task failed, Please see the error details and reach out to <esrpreldri@microsoft.com> for further assistance. \n",
    ConfigValidationSuccess: "Config Values Validated successfully. \n",
    ConfigPopulatingSuccess: "Config Values Populated successfully. \n",
    GatewayRequestMessage: "ESRP Release Gateway Request Message Sent. \n",
    VersionNumber2: "2",
    GatewayResponseMessage: "ESRP Release Gateway Response Message Received with Operation Id - ",
    ReleaseDetailsFetchingMessage: "Executing GRD (Get Release Details) to fetch the latest Status of the Release. \n",
    HasReachedTerminalState: " has reached terminal state which is - ",
    Status: " status :- ",
    GatewaySessionRequestMessageSend: "Gateway Session Request Message Sent to request Containers for file upload. \n",
    GatewaySessionsShardsReceived: "Gateway Session Response Message Received with container sas urls. \n",
    FileContentManipulationStarted: "Fetching Package file Content and starting zip creation. \n",
    POMFileExists: "Found pom file with the name - ",
    DefaultDescription: "Default description",
    DefaultName: "DefaultName",
    DefaultVersion: "1.1",
    LocationTypeUNC: "1",
    UploadSuccessFullyDone: "UploadSuccessFullyDone",
    DelayBetweenEveryGetStatus: 60000,
    AppInsightsLoggingKey: "b667d8f7-a179-42b0-901e-4461166e9c37",
    APIAccessDefaultScope: "/.default",
    GatewayBlobExpiryInHours: 25,
    GatewaySessionRequestPartitionCount: 3,
    GatewaySessionRequestIsProvision: true,
    ZipExtension: '.zip',
    Comma: ',',
    DefaultIsAutoApprovedValue: true,
    DefaultIsMandatoryApprovalValue: false,
    JWTTokenExpiryOneHour: '1h',
    RSA256Algorithm: 'RS256',
    TokenExpiryInHours: 25,
    TicksTill111997: 621355968280000000,
    TokenHeaderValidationCriteria: "exp,x5t",
    Project: 'project',
    Description: 'description',
    ArtifactId: "artifactId",
    Version: 'version',
    ReleaseUIAccessMessage: 'Status can be checked here as well - https://releaseui-wus-esrp-prod.azurewebsites.net/Release/Search/#',
    DescriptionMandatoryMessage: "Description is not present and is a mandatory field, adding product name to description \n"
};
