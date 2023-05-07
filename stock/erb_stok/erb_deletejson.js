const fs = require("fs");
const path1 = require('path')

async function erb_delJson() {

  await (async function() {
    const path = path1.join(__dirname, 'dataErb.json')

      try {
        fs.unlinkSync(path);
        console.log("File removed:", path);
      } catch (err) {
        console.error(err);
      }
    
  })()
}



module.exports = erb_delJson