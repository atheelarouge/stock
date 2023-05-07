const stokBoa = require('./stok_boa');
const stok_Knack = require('./knack_stok/knack_stock')
const chalk = require('chalk');
const expExl = require('./export');
const delJson = require('../deletejson');
const upload_stok = require('./upload_stok')
const exitPro = require('./exit')
const delExl = require('../deletexlsx')
const stokWagoon = require('../stock/wagoon_stok/wagoon')
const boa_stok = require('./boa_stok/boa_stok')
const co_stok = require('./co_stok/co_stok')

async function oto_stok() {
  await (async function() {
    
      await (async function() {
        await delJson()
      })(),
      await (async function() {
        await boa_stok()
      })(),
      await (async function() {
        await stok_Knack()
      })(),
      await (async function() {
        await stokWagoon()
      })(),
      await (async function() {
        await co_stok()
      })(),
      await (async function() {
        await expExl()
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

module.exports = oto_stok