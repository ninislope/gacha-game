import { SchemaParser, SchemaObject } from "./schema_convertor";
import * as jsyaml from "js-yaml";
import { FileSystemObject } from "fso";

const scriptDir = new FileSystemObject(__dirname);
const masterDataDefinitionDir = scriptDir.parent().join("masterData/definitions");
const masterDataCodeDir = scriptDir.parent().join("app/states/MasterData");

const schemaObjects: {[name: string]: SchemaObject} = {};
for (const schemaFile of masterDataDefinitionDir.childrenSync()) {
    schemaObjects[schemaFile.basename().path.replace(/\.[^.]*$/, "")] = jsyaml.load(schemaFile.readFileSync("utf8"));
}
const parser = new SchemaParser(schemaObjects);

const schemas = parser.parse();

masterDataCodeDir.mkdirAllSync();
masterDataCodeDir.join(schemas.indexFileName).writeFileSync(schemas.toIndexTS());
masterDataCodeDir.join(schemas.modelFileName).writeFileSync(schemas.toModelTS());
for (const schema of schemas.schemas) {
    const extensionFile = masterDataCodeDir.join(schema.ExtensionFileName);
    if (!extensionFile.existsSync()) extensionFile.writeFileSync(schema.toExtensionTS());
}
