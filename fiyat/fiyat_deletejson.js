const fs = require("fs");
const path1 = require('path')
const chalk = require('chalk')

async function fiyat_delJson() {

  await (async function() {
    const path = path1.join(__dirname, 'boa_fiyat.json')

      try {
        fs.unlinkSync(path);
        console.log("File removed:", path);
      } catch (err) {
        console.error(chalk.bgBlue.bold(err, 'Json Dosayası Önceden Silinmiş...'));
      }
    
  })()
}



module.exports = fiyat_delJson