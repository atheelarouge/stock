const rnn_reklam_mida = require('./rnn_reklam_mida')

async function oto_reklam_mida() {
  await (async function() {
    
      await (async function() {
        await rnn_reklam_mida()
      })()
    })()
}

module.exports = oto_reklam_mida