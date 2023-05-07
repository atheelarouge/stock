const chalk = require('chalk');

async function exitPro() {
  await (async function() {
    await console.log(chalk.bold.bgRed('Program Exit...'))
    await process.exit();
  })()
}

module.exports = exitPro