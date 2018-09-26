System.config({
    map: {
        "ts": "https://unpkg.com/plugin-typescript@8.0.0/lib/plugin.js",
        "typescript": "https://unpkg.com/typescript@3.0.3/lib/typescript.js",
        "react": "https://unpkg.com/react@16.5.0/umd/react.production.min.js",
        "react-dom": "https://unpkg.com/react-dom@16.5.0/umd/react-dom.production.min.js",
        "mobx": "https://unpkg.com/mobx@5.1.0/lib/mobx.umd.min.js",
        "mobx-react": "https://unpkg.com/mobx-react@5.2.6/index.min.js",
    },
    transpiler: "ts",
    typescriptOptions: {
        tsconfig: true,
    },
    meta: {
        typescript: {
            exports: "ts",
        },
        /*
        "*.ts": {
            // // 必ずトランスパイルされるよう ECMAScript Module であることを明示
            // https://github.com/systemjs/systemjs/blob/master/docs/module-formats.md
            format: "esm"
        },
        */
    },
    packages: {
        app: {
            main: "./main.tsx",
            defaultExtension: "tsx",
        },
    },
});

// appパッケージの読み込み(エントリーポイントである app/main.ts が読み込まれる)
System.import("app").catch(console.error.bind(console));
