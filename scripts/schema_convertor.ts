export type SchemaObjectProperty =
    string |
    {
        type: string;
        refname?: string;
        title?: string;
        description?: string;
    };

export interface SchemaObject {
    [name: string]: SchemaObjectProperty;
}

export interface SchemaObjects {
    [name: string]: SchemaObject;
}

export class SchemaParser {
    schemaObjects: SchemaObjects;

    constructor(schemaObjects: SchemaObjects) {
        this.schemaObjects = schemaObjects;
    }

    parse() {
        return new Schemas(Object.keys(this.schemaObjects).map((name) => this.parseSchema(name)));
    }

    parseSchema(name: string) {
        const schemaObject = this.schemaObjects[name];
        return new Schema(
            name,
            Object.
                keys(schemaObject).
                filter(propertyName => !propertyName.startsWith("$")).
                map((propertyName) => this.parseProperty(propertyName, schemaObject[propertyName])),
            schemaObject.$extend as string,
        );
    }

    parseProperty(propertyName: string, content: SchemaObjectProperty) {
        if (typeof content === "string") {
            const result = content.match(/^(.*?)(\[\])?(\?)?$/);
            return new SchemaProperty({
                name: propertyName,
                type: result![1],
                array: Boolean(result![2]),
                optional: Boolean(result![3]),
            });
        } else {
            const result = content.type.match(/^(.*?)(\[\])?(\?)?$/);
            return new SchemaProperty({
                name: propertyName,
                refname: content.refname,
                type: result![1],
                array: Boolean(result![2]),
                optional: Boolean(result![3]),
                title: content.title,
            });
        }
    }
}

function joinLines(lines: string[]) {
    return lines.map(line => line + "\n").join("");
}

function isNative(type: string): boolean {
    return ({boolean: true, string: true, number: true, Date: true} as any)[type];
}

export class Schemas {
    schemas: Schema[];

    readonly indexFileName = "index.tsx";
    readonly modelFileName = "Models.tsx";

    constructor(schemas: Schema[]) {
        this.schemas = schemas.filter(s => s.abstract).concat(schemas.filter(s => !s.abstract));
    }

    toIndexTS() {
        return joinLines([
            `export * from "./Models";`,
            ``,
            ...this.schemas.map(schema => `import "./${schema.name}";`),
        ]);
    }

    toModelTS() {
        return joinLines([
            `import { BaseRecordList } from "./BaseRecordList";`,
            `import { IBaseRecord, BaseRecord } from "./BaseRecord";`,
            ``,
            ...this.schemas.map((s) => s.toModelTS()),
        ]);
    }
}

export class Schema {
    name: string;
    abstract: boolean;
    properties: SchemaProperty[];
    extend?: string;

    constructor(name: string, properties: SchemaProperty[], extend?: string) {
        if (name.startsWith("_")) {
            this.name = name.slice(1);
            this.abstract = true;
        } else {
            this.name = name;
            this.abstract = false;
        }
        this.properties = properties;
        this.extend = extend || "BaseRecord";
    }

    get jsonSchemaFileName() { return `${this.name}.schema.json`; }

    get ExtensionFileName() { return `${this.name}.tsx`; }

    toJsonSchema() {
        const schema: {[name: string]: object} = {};
        for (const property of this.properties) {
            schema[property.name] = property.toJsonSchema();
        }
        return {
            "$schema": "http://json-schema.org/draft-07/schema",
            "title": this.name,
            "type": "object",
            "properties": schema,
            "required": this.properties.filter(property => !property.optional).map(property => property.name),
        };
    }

    toModelTS() {
        return this.abstract ? this.toAbstractModelTS() : this.toNormalModelTS();
    }

    private toNormalModelTS() {
        return joinLines([
            `export interface I${this.name} extends I${this.extend} {`,
            ...this.properties.reduce((all, prop) => all.concat(prop.toTS("interface")), [] as string[]),
            `}`,
            ``,
            `export class ${this.name} extends ${this.extend}<I${this.name}, ${this.name}> implements I${this.name} {`,
            ...this.properties.reduce((all, prop) => all.concat(prop.toTS("class")), [] as string[]),
            `}`,
            ``,
            `export class ${this.name}List extends ${this.extend}List<I${this.name}, ${this.name}> {`,
            `    readonly name = "${this.name}";`,
            `    readonly recordClass = ${this.name};`,
            `}`,
            ``,
            `export const $${this.name} = new ${this.name}List();`,
        ]);
    }

    private toAbstractModelTS() {
        return joinLines([
            `export interface I${this.name} extends I${this.extend} {`,
            ...this.properties.reduce((all, prop) => all.concat(prop.toTS("interface")), [] as string[]),
            `}`,
            ``,
            `export class ${this.name}<IRecord extends I${this.name}, Record extends IRecord> extends ${this.extend}<IRecord, Record> implements I${this.name} {`,
            ...this.properties.reduce((all, prop) => all.concat(prop.toTS("class")), [] as string[]),
            `}`,
            ``,
            `export abstract class ${this.name}List<IRecord extends I${this.name}, Record extends IRecord> extends ${this.extend}List<IRecord, Record> {`,
            `}`,
        ]);
    }

    toExtensionTS() {
        return this.abstract ? this.toAbstractExtensionTS() : this.toNormalExtensionTS();
    }

    toNormalExtensionTS() {
        return joinLines([
            `import * as Models from "./Models";`,
            `import { applyRecordExtension } from "./applyRecordExtension";`,
            ``,
            `export class ${this.name}Ext {`,
            `}`,
            `export class ${this.name}ListExt {`,
            `}`,
            ``,
            `applyRecordExtension(Models.${this.name}, ${this.name}Ext);`,
            `applyRecordExtension(Models.${this.name}List, ${this.name}ListExt);`,
            ``,
            `declare module "./Models" {`,
            `    interface ${this.name} extends ${this.name}Ext { }`,
            `    interface ${this.name}List extends ${this.name}ListExt { }`,
            `}`,
        ]);
    }

    toAbstractExtensionTS() {
        return joinLines([
            `import * as Models from "./Models";`,
            `import { applyRecordExtension } from "./applyRecordExtension";`,
            ``,
            `export class ${this.name}Ext<IRecord extends Models.I${this.name}, Record extends IRecord> {`,
            `}`,
            `export class ${this.name}ListExt<IRecord extends Models.I${this.name}, Record extends IRecord> {`,
            `}`,
            ``,
            `applyRecordExtension(Models.${this.name}, ${this.name}Ext);`,
            `applyRecordExtension(Models.${this.name}List, ${this.name}ListExt);`,
            ``,
            `declare module "./Models" {`,
            `    interface ${this.name}<IRecord extends I${this.name}, Record extends IRecord> extends ${this.name}Ext<IRecord, Record> { }`,
            `    interface ${this.name}List<IRecord extends I${this.name}, Record extends IRecord> extends ${this.name}ListExt<IRecord, Record> { }`,
            `}`,
        ]);
    }
}

export class SchemaPropertyProps {
    name: string;
    refname?: string;
    type: string;
    array?: boolean;
    optional?: boolean;
    title?: string;

    constructor(props: SchemaPropertyProps) {
        this.name = props.name;
        this.refname = props.refname;
        this.type = props.type;
        this.array = props.array;
        this.optional = props.optional;
        this.title = props.title;
    }
}

export class SchemaProperty extends SchemaPropertyProps {
    toJsonSchema() {
        const schema = {
            type: isNative(this.type) ? this.type : "number",
            title: this.title,
            refname: this.refname,
        };
        return this.array ? { type: "array", items: schema } : schema;
    }

    toTS(target: "interface" | "class") {
        const titleLines = this.title ? [`/** ${this.title} */`] : [""];
        if (isNative(this.type)) {
            if (target === "interface") {
                return [
                    ...titleLines,
                    `${this.name}${this.optional ? "?" : ""}: ${this.type}${this.array ? "[]" : ""};`,
                ].map(line => line ? "    " + line : "");
            } else {
                return [
                    ...titleLines,
                    `readonly ${this.name}${this.optional ? "?" : "!"}: ${this.type}${this.array ? "[]" : ""};`,
                ].map(line => line ? "    " + line : "");
            }
        } else {
            const idTitleLines = this.title ? [`/** ${this.title}ID */`] : [""];
            const refname = this.refname || this.name.replace(/Id(s)?$/, "$1");
            if (target === "interface") {
                return [
                    ...idTitleLines,
                    `${this.name}${this.optional ? "?" : ""}: number${this.array ? "[]" : ""};`,
                ].map(line => line ? "    " + line : "");
            } else {
                return [
                    ...idTitleLines,
                    `readonly ${this.name}${this.optional ? "?" : "!"}: number${this.array ? "[]" : ""};`,
                    ...titleLines,
                    (
                        this.optional ?
                        `get ${refname}() { return this.${this.name} ? $${this.type}.find${this.array ? "All" : ""}(this.${this.name}) : undefined; }` :
                        `get ${refname}() { return $${this.type}.find${this.array ? "All" : ""}(this.${this.name}); }`
                    ),
                ].map(line => line ? "    " + line : "");
            }
        }
    }
}
