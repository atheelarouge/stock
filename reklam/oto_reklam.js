const rnn_reklam = require('./rnn_reklam')

async function oto_reklam() {
  await (async function() {
    
      await (async function() {
        await rnn_reklam()
      })()
    })()
}

module.exports = oto_reklam