<h1>install modules (before first run)</h1>

npm ci

---

<h1>run (compile project to dist)</h1>

npm run build

---

<h1>start local dev-server (127.0.0.1:4200) no need to compile firsts</h2></h1>

npm start

---


<h1>to build/run a PRODUCTION version:</h1>

<h2>in tsconfig.json</h2>

"sourceMap": false,

//"sourceMap": true,

<h2>in webpcak.config.ts</h2>

//devtool: "inline-source-map",

mode: "production",

//mode: "development",

<h2>OR(build to /dist only)</h2>
npm run build-prod

---

<h1>to build/run DEVELOPMENT  version:</h1>

<h2>in tsconfig.json</h2>

//"sourceMap": false,

"sourceMap": true,

<h2>in webpcak.config.ts</h2>

devtool: "inline-source-map",

//mode: "production",

mode: "development",
<h2>OR (build to /dist only)</h2>
npm run build-dev