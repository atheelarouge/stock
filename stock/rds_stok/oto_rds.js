const stokRDS = require('./rds_stok')
const rds_delExl = require('./rds_deletexlsx')
const rds_delJson = require('./rds_deletejson')
const rds_expExl = require('./rds_export')

async function oto_rds() {
  await (async function() {
    
      await (async function() {
        await rds_delJson()
      })(),
      await (async function() {
        await stokRDS()
      })(),
      await (async function() {
        await rds_expExl()
      })()
      // await (async function() {
      //   await upload_stok()
      // })(),
      // await (async function() {
      //   await delExl()
      // })(),
      // await (async function() {
      //   await exitPro()
      // })()

  })()
}

module.exports = oto_rds