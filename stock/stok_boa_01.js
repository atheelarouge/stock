const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express');
const chalk = require('chalk');


async function stokBoa() {
  const PORT = 8000

  const app = express()

  const loadNotes = () => {
    try {
      const dataBuffer = fs.readFileSync('D:/Own_Projects/07_web_scarper/data.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)

    } catch {
      return []
    }
  }

  const saveNotes = (num) => {
    const dataJSON = JSON.stringify(num)
    fs.writeFileSync('D:/Own_Projects/07_web_scarper/data.json', dataJSON)

  }

  app.listen(PORT, () => console.log(chalk.bgGrey.bold(`server running on PORT ${PORT}`)))

  const url1 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-spor-keten-sari-beyaz-yuksek-taban-casual-erkek-ayakkabi';



  // Boa Stok //
  await (async function () {
    await console.log(chalk.bold.bgGreen('The Process Started...'))
    await console.log(chalk.bold.bgBlue('Kırmızı renkte hatalı ürünler Boa sisteminden çıkarmış ürünlerdir. Stok "0" girelecektir.'))
    // MDSH003BYZBT
    try {
      await axios(url1).then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const data = loadNotes()

        $('#bedensecin > a:nth-of-type(1)', html).each(function () {
          const title = $(this).text().replace(/\s/g,'').slice(2,5).replace('(', '').replace(')', '')
          data.push({
            "Barkod": "MDSH003BYZBT40",
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(title),
          })
          saveNotes(data)
        })
        $('#bedensecin > a:nth-of-type(2)', html).each(function () {
          const title = $(this).text().replace(/\s/g,'').slice(2,5).replace('(', '').replace(')', '')
          data.push({
            "Barkod": 'MDSH003BYZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(title),
          })
          saveNotes(data)
        })
        $('#bedensecin > a:nth-of-type(3)', html).each(function () {
          const title = $(this).text().replace(/\s/g,'').slice(2,5).replace('(', '').replace(')', '')
          data.push({
            "Barkod": 'MDSH003BYZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(title),
          })
          saveNotes(data)
        })
        $('#bedensecin > a:nth-of-type(4)', html).each(function () {
          const title = $(this).text().replace(/\s/g,'').slice(2,5).replace('(', '').replace(')', '')
          data.push({
            "Barkod": 'MDSH003BYZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(title),
          })
          saveNotes(data)
        })
        $('#bedensecin > a:nth-of-type(5)', html).each(function () {
          const title = $(this).text().replace(/\s/g,'').slice(2,5).replace('(', '').replace(')', '')
          data.push({
            "Barkod": 'MDSH003BYZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(title),
          })
          saveNotes(data)
        })
      })
    } catch (e) {
      console.log(chalk.bold.bgRed(`${e.config.url} error.. "Barkod": MDSH003BYZBT`))
      const data = loadNotes()
      data.push({
        "Barkod": 'MDSH003BYZBT40',
        "Piyasa Satış Fiyatı (KDV Dahil)": "",
        "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
        "Ürün Stok Adedi": 0
      })
      data.push({
        "Barkod": 'MDSH003BYZBT41',
        "Piyasa Satış Fiyatı (KDV Dahil)": "",
        "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
        "Ürün Stok Adedi": 0
      })
      data.push({
        "Barkod": 'MDSH003BYZBT42',
        "Piyasa Satış Fiyatı (KDV Dahil)": "",
        "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
        "Ürün Stok Adedi": 0
      })
      data.push({
        "Barkod": 'MDSH003BYZBT43',
        "Piyasa Satış Fiyatı (KDV Dahil)": "",
        "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
        "Ürün Stok Adedi": 0
      })
      data.push({
        "Barkod": 'MDSH003BYZBT44',
        "Piyasa Satış Fiyatı (KDV Dahil)": "",
        "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
        "Ürün Stok Adedi": 0
      })
      saveNotes(data)
    }
    // await console.log(chalk.bold.bgBlue(`MDSH003BYZBT done ..`))

    await console.log(chalk.bold.bgRed('Finished...'))
  })()
}

module.exports = stokBoa;