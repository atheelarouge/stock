const fs = require('fs')

async function kadin_delExl() {
  await (async function() {
    const path = "C:/Users/athee/Desktop/Oto_stok/kadin_stok.xlsx"

    try {
      fs.unlinkSync(path)
      console.log('Excel dosyası silindi', path)
    } catch (err) {
      console.log(err)
    }
  })()
}

module.exports = kadin_delExl