// eslint-disable-next-line @typescript-eslint/no-var-requires
var task = require('./task')

const GRAPHQL_ENDPOINT = 'http://localhost:1337/graphql'

const cleanSchema = task.newTask('Clean schema', 'npx rimraf ./src/app/data/graphql/schema.json')
const cleanTSInterface = task.newTask('Clean TS Schemas', 'npx rimraf ./src/app/data/graphql/schema.d.ts')
const downloadSchema = task.newTask(
  'Download Schema',
  `npx --no-install apollo client:download-schema --endpoint=${GRAPHQL_ENDPOINT} src/app/data/graphql/schema.json`
)
const runCodegen = task.newTask(
  'Run Codegen',
  'npx --no-install apollo client:codegen --includes=./**/*.graphql --localSchemaFile=./src/app/data/graphql/schema.json --target=typescript --tagName=gql --outputFlat=./src/app/data/graphql/schema.d.ts'
)

;(async function () {
  await task.exec(cleanSchema)
  await task.exec(cleanTSInterface)
  await task.exec(downloadSchema)
  await task.exec(runCodegen)
})()
