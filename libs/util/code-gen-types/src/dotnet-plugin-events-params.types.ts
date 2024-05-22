import { CodeBlock } from "@amplication/csharp-ast";
import {
  Entity,
  EntityLookupField,
  ModuleContainer,
  ModuleAction,
  entityActions,
} from "./code-gen-types";
import { EventParams } from "./plugins.types";

export interface CreateEntityServiceBaseParams extends EventParams {
  entity: Entity;
  resourceName: string;
  apisDir: string;
  moduleActions: ModuleAction[];
  entities: Entity[];
}

export interface CreateEntityServiceParams extends EventParams {
  entity: Entity;
  resourceName: string;
  apisDir: string;
  entityActions: entityActions;
}

// export interface CreateCustomModuleServiceParams extends EventParams {
//   customModuleName: string;
//   templateMapping: { [key: string]: any };
//   serviceId: namedTypes.Identifier;
//   template: namedTypes.File;
//   moduleActions: ModuleAction[];
//   dtoNameToPath: Record<string, string>;
// }
export interface CreateEntityControllerParams extends EventParams {
  entity: Entity;
  resourceName: string;
  apisDir: string;
  entityActions: entityActions;
}

// export interface CreateCustomModuleControllerParams extends EventParams {
//   template: namedTypes.File;
//   customModuleName: string;
//   templateMapping: { [key: string]: any };
//   controllerId: namedTypes.Identifier;
//   serviceId: namedTypes.Identifier;
//   moduleActions: ModuleAction[];
//   customModuleServiceModule: string;
//   dtoNameToPath: Record<string, string>;
// }
export interface CreateEntityControllerBaseParams extends EventParams {
  entity: Entity;
  resourceName: string;
  apisDir: string;
  moduleActions: ModuleAction[];
  entities: Entity[];
}

export interface CreateEntityGrpcControllerParams extends EventParams {
  entity: Entity;
}
export interface CreateEntityGrpcControllerBaseParams extends EventParams {
  entity: Entity;
}

export interface CreateEntityInterfaceParams extends EventParams {
  entity: Entity;
  resourceName: string;
  apisDir: string;
  moduleContainers: ModuleContainer[];
  moduleActions: ModuleAction[];
  entities: Entity[];
}

export interface CreateEntityControllerToManyRelationMethodsParams
  extends EventParams {
  field: EntityLookupField;
  entity: Entity;
}

export interface CreateServerAuthParams extends EventParams {}

export interface CreateServerParams extends EventParams {}

export type VariableDictionary = {
  [variable: string]: string;
}[];

export interface CreateServerGitIgnoreParams extends EventParams {
  gitignorePaths: string[];
}

export interface CreateServerDockerComposeParams extends EventParams {
  fileContent: string;
  updateProperties: { [key: string]: any }[];
  outputFileName: string;
}

export interface CreateServerDockerComposeDevParams extends EventParams {
  fileContent: string;
  updateProperties: { [key: string]: any }[];
  outputFileName: string;
}

export interface CreateServerCsprojParams extends EventParams {
  packageReferences: {
    include: string;
    version: string;
    includeAssets?: string;
    privateAssets?: string;
  }[];
}
export interface CreateServerAppsettingsParams extends EventParams {
  updateProperties: { [key: string]: any };
}

export interface CreateMessageBrokerParams extends EventParams {}

export interface CreateMessageBrokerTopicsEnumParams extends EventParams {}

export interface CreateMessageBrokerClientOptionsFactoryParams
  extends EventParams {}

export interface CreateMessageBrokerServiceParams extends EventParams {}
export interface CreateMessageBrokerServiceBaseParams extends EventParams {}

export interface CreateProgramFileParams extends EventParams {
  /**
   * List of code blocks that will be added to the program file.
   * The code blocks will be added to the `builder` object, before builder.Build() gets called.
   * i.e. `builder.services.AddControllers();`
   * @type {CodeBlock[]}
   */
  builderServicesBlocks: CodeBlock[];
  /**
   * List of code blocks that will be added to the program file.
   * The code blocks will be added to the `app` object after builder.Build() gets called.
   * i.e. `app.UseCors();`
   * @type {CodeBlock[]}
   */
  appBlocks: CodeBlock[];
}

export interface CreateSwaggerParams extends EventParams {
  fileDir: string;
  outputFileName: string;
}

export interface CreateSeedParams extends EventParams {
  fileDir: string;
  outputFileName: string;
  dtoNameToPath: Record<string, string>;
}
export interface CreateDTOsParams extends EventParams {
  entity: Entity;
  dtoName: string;
  dtoBasePath: string;
}
export interface LoadStaticFilesParams extends EventParams {
  source: string;
  basePath: string;
}

export interface CreateServerSecretsManagerParams extends EventParams {
  /**
   * Array of secretsName secrectKey pairs that will generate the SecretsNameKey enum.
   * SecrectKey is used by the Secrets Manager Service to retrieve the secret value
   */
  secretsNameKey: SecretsNameKey[];
}
export interface CreateEntityExtensionsParams extends EventParams {
  entity: Entity;
  resourceName: string;
  apisDir: string;
}

export interface SecretsNameKey {
  name: string;
  key: string;
}
