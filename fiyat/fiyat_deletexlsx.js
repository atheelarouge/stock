const fs = require('fs')

async function fiyat_delExl() {
  await (async function() {
    const path = "C:/Users/athee/Desktop/Oto_stokfiyat.xlsx"

    try {
      fs.unlinkSync(path)
      console.log('Excel dosyası silindi', path)
    } catch (err) {
      console.log(err)
    }
  })()
}

module.exports = fiyat_delExl