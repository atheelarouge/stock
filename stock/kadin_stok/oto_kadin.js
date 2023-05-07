const stokKadin = require('./kadın_stok')
const kadin_delExl = require('./kadin_deletexlsx')
const kadin_delJson = require('./kadin_deletejson')
const kadin_expExl = require('./kadin_export')

async function oto_kadin() {
  await (async function() {
    
      await (async function() {
        await kadin_delJson()
      })(),
      await (async function() {
        await stokKadin()
      })(),
      await (async function() {
        await kadin_expExl()
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

module.exports = oto_kadin