const fiyatBoa = require('./boa_fiyat')
const fiyat_delJson = require('./fiyat_deletejson')
const fiyat_delExl = require('./fiyat_deletexlsx')
const fiyat_expExl = require('./fiyat_export')

async function oto_fiyat() {
    await (async function() {

        await (async function() {
            await fiyat_delJson()
          })(),
          await (async function() {
            await fiyatBoa()
          })(),
          await (async function() {
            await fiyat_expExl()
          })()

    })()
}

module.exports = oto_fiyat