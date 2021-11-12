// eslint-disable-next-line @typescript-eslint/no-var-requires
const { newTask, exec } = require('./task')

const cleanNodeModules = newTask('Clean node_modules', 'npx rimraf node_modules')
const cleanDist = newTask('Clean dist', 'npx rimraf dist')

;(async function () {
  await Promise.all([cleanNodeModules, cleanDist].map(exec))
})()
