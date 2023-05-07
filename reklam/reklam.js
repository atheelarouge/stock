const reklam_tik = require('./reklam_tik') 

const reklam = async () => {
  await (async function() {
      await (async function() {
        await reklam_tik()
      })()
  })()
}


module.exports = reklam