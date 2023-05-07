const PORT = 7777;
const fs = require('fs')
const express = require('express')
const puppeteer = require('puppeteer');
const waitSync = require('wait-sync');
const chalk = require('chalk')

const app = express()

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('data.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

  } catch {
    return []
  }
}

const saveNotes = (num) => {
  const dataJSON = JSON.stringify(num)
  fs.writeFileSync('data.json', dataJSON)
   
}


// /* KNACK URL */ 
// const knkkurlgn = 'https://www.bayiknack.com/uyelik/giris-yap'
const knkurl1 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-vizon'
const knkurl2 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-bordo'
const knkurl3 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-beyaz'
const knkurl4 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-gri'
const knkurl5 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-haki'
const knkurl6 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-kahverengi'
const knkurl7 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-lacivert'
const knkurl8 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-siyah'
const knkurl9 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-taba'
const knkurl10 = 'https://www.bayiknack.com/urun/knack-knack-loafer-erkek-ayakkabi-007-antrasit'
const knkurl11 = 'https://www.bayiknack.com/urun/knack-knack-loafer-erkek-ayakkabi-007-kum'
const knkurl12 = 'https://www.bayiknack.com/urun/knack-knack-loafer-erkek-ayakkabi-007-lacivert'
const knkurl13 = 'https://www.bayiknack.com/urun/knack-knack-loafer-erkek-ayakkabi-007-mavi'
const knkurl14 = 'https://www.bayiknack.com/urun/knack-knack-loafer-erkek-ayakkabi-007-siyah'
const knkurl15 = 'https://www.bayiknack.com/urun/knack-knack-loafer-erkek-ayakkabi-007-taba'
const knkurl16 = 'https://www.bayiknack.com/urun/knack-knack-loafer-erkek-ayakkabi-007-vizon'
const knkurl17 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-beyaz'
const knkurl18 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-kirmizi'
const knkurl19 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-mavi'
const knkurl20 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-sari'
const knkurl21 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-siyah-siyah-taban'
const knkurl22 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-siyah-taba-taban'
const knkurl23 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-taba'
const knkurl24 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-yesil'
const knkurl25 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-beyaz'
const knkurl26 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-fume'
const knkurl27 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-haki'
const knkurl28 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-kahverengi'
const knkurl29 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-siyah-beyaz-taban'
const knkurl30 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-siyah-siyah-taban'
const knkurl31 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-haki'
const knkurl32 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-suet-ayakkabi-040-sari'
const knkurl33 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-suet-ayakkabi-040-kirmizi'
const knkurl34 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-suet-ayakkabi-040-siyah-beyaz-taban'
const knkurl35 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-suet-ayakkabi-040-siyah-siyah-taban'
const knkurl36 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-suet-ayakkabi-040-tas'
const knkurl37 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-suet-ayakkabi-040-turuncu'
const knkurl38 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-siyah-beyaz-taban'
const knkurl39 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-siyah-beyaz-taban'
const knkurl40 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-siyah-kurukafa'
const knkurl41 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-hot'
const knkurl42 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-kurukafa-renkli'
const knkurl43 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-beyaz-kurukafa'
const knkurl44 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-kuba-renkli'
const knkurl45 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-eng-renkli'
const knkurl46 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-ghost-skull-renkli'
const knkurl47 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-senegal-renkli'
const knkurl48 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-gri'
const knkurl49 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-haki'
const knkurl50 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-jamaika-renkli'
const knkurl51 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-pate-renkli'
const knkurl52 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-kirmizi'
const knkurl53 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-dead-renkli'
const knkurl54 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-simps-renkli'
const knkurl55 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-taba'
const knkurl56 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-beyaz'
const knkurl57 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-sari'
const knkurl58 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-beyaz'
const knkurl59 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-haki'
const knkurl60 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-siyah-beyaz-taban'
const knkurl61 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-siyah-siyah-taban'
const knkurl62 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-siyah-suet-beyaz-taban'
const knkurl63 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-taba'
const knkurl64 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-taba-suet'
const knkurl65 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-999-beyaz'
const knkurl66 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-999-gri'
const knkurl67 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-999-siyah-beyaz-taban'
const knkurl68 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-999-siyah-siyah-taban'
const knkurl69 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-999-taba'
const knkurl70 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-beyaz'
const knkurl71 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-haki'
const knkurl72 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-vizon'
const knkurl73 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-siyah-beyaz-taban'
const knkurl74 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-siyah-siyah-taban'
const knkurl75 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-taba'
const knkurl76 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-beyaz'
const knkurl77 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-haki'
const knkurl78 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-lacivert'
const knkurl79 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-siyah-beyaz-taban'
const knkurl80 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-siyah-siyah-taban'
const knkurl81 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-vizon'
const knkurl82 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-f-505-beyaz'
const knkurl83 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-f-505-gri'
const knkurl84 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-f-505-siyah-beyaz-taban'
const knkurl85 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-f-505-siyah-siyah-taban'
const knkurl86 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-f-505-taba'
const knkurl87 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-beyaz'
const knkurl88 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-siyah-beyaz-taban'
const knkurl89 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-siyah-suet-beyaz-taban'
const knkurl90 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-taba-suet'
const knkurl91 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-tas'
const knkurl92 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-vizon-suet'
const knkurl93 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-020-siyah-beyaz-taban'
const knkurl94 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-020-siyah-siyah-taban'
const knkurl95 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-020-taba'
const knkurl96 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-020-sari'
const knkurl97 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-020-tas'
const knkurl98 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-022-siyah-beyaz-taban'
const knkurl99 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-022-siyah-siyah-taban'
const knkurl100 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-022-taba'
const knkurl101 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-022-tas'

// /* Knack Stok */


// MDSHKNK002ACKKHVBT
async function knackStock() {

  try {
await (async function() {
      const browser = await puppeteer.launch({headless: true})
      const page = await browser.newPage();
      await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
      await page.waitForSelector('#User_Email')

      await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
      await page.type('#User_Password', 'tma200786', { delay: 200})
      await page.click('button.button.button-login.right', { delay: 200})

      await page.waitForSelector('.user-info.left')
      await page.goto(knkurl1)
      await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

      const num40 = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
      })

      const num41  = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
      })

      const num42 = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
      })

      const num43 = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
      })

      const num44 = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
      })

      data = loadNotes()

      data.push({
        barkod: 'MDSHKNK002ACKKHVBT40',
        no: num40[0],
      })

      data.push({
        barkod: 'MDSHKNK002ACKKHVBT41',
        no: num41[0],
      })

      data.push({
        barkod: 'MDSHKNK002ACKKHVBT42',
        no: num42[0],
      })

      data.push({
        barkod: 'MDSHKNK002ACKKHVBT43',
        no: num43[0],
      })

      data.push({
        barkod: 'MDSHKNK002ACKKHVBT44',
        no: num44[0],
      })
      saveNotes(data)

      await browser.close()

      console.log(chalk.bgBlue.bold('MDSHKNK002ACKKHVBT Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
} 
  // MDSHKNK002BRDBT
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl2)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK002BRDBT40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK002BRDBT41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK002BRDBT42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK002BRDBT43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK002BRDBT44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK002BRDBT Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK002BYZBT
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl3)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK002BYZBT40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK002BYZBT41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK002BYZBT42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK002BYZBT43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK002BYZBT44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK002BYZBT Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK002GRİBT
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl4)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK002GRİBT40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK002GRİBT41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK002GRİBT42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK002GRİBT43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK002GRİBT44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK002GRİBT Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK002HKKBT
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl5)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK002HKKBT40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK002HKKBT41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK002HKKBT42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK002HKKBT43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK002HKKBT44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK002HKKBT Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK002KYKHVBT
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl6)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK002KYKHVBT40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK002KYKHVBT41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK002KYKHVBT42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK002KYKHVBT43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK002KYKHVBT44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK002KYKHVBT Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK002LCVRTBT
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl7)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK002LCVRTBT40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK002LCVRTBT41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK002LCVRTBT42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK002LCVRTBT43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK002LCVRTBT44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK002LCVRTBT Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK002SYHBT
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl8)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK002SYHBT40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK002SYHBT41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK002SYHBT42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK002SYHBT43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK002SYHBT44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK002SYHBT Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK002TabaBT
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl9)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK002TabaBT40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK002TabaBT41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK002TabaBT42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK002TabaBT43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK002TabaBT44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK002TabaBT Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK007ANTRSTSUET
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl10)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK007ANTRSTSUET40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK007ANTRSTSUET41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK007ANTRSTSUET42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK007ANTRSTSUET43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK007ANTRSTSUET44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK007ANTRSTSUET Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK007KUMSUET
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl11)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK007KUMSUET40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK007KUMSUET41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK007KUMSUET42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK007KUMSUET43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK007KUMSUET44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK007KUMSUET Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK007LCVRTSUET
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl12)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK007LCVRTSUET40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK007LCVRTSUET41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK007LCVRTSUET42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK007LCVRTSUET43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK007LCVRTSUET44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK007LCVRTSUET Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK007MVSUET
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl13)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK007MVSUET40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK007MVSUET41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK007MVSUET42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK007MVSUET43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK007MVSUET44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK007MVSUET Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK007SYHSUET
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl14)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK007SYHSUET40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK007SYHSUET41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK007SYHSUET42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK007SYHSUET43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK007SYHSUET44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK007SYHSUET Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK007TABASUET
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl15)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK007TABASUET40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK007TABASUET41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK007TABASUET42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK007TABASUET43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK007TABASUET44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK007TABASUET Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK007VZNSUET
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl16)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK007VZNSUET40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK007VZNSUET41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK007VZNSUET42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK007VZNSUET43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK007VZNSUET44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK007VZNSUET Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK008BYZBT
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl17)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK008BYZBT40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK008BYZBT41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK008BYZBT42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK008BYZBT43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK008BYZBT44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK008BYZBT Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK008GRİBT
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl17)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK008GRİBT40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK008GRİBT41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK008GRİBT42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK008GRİBT43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK008GRİBT44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK008GRİBT Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK008KRMZBT
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl18)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK008KRMZBT40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK008KRMZBT41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK008KRMZBT42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK008KRMZBT43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK008KRMZBT44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK008KRMZBT Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK008LCVRTBT
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl19)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK008LCVRTBT40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK008LCVRTBT41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK008LCVRTBT42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK008LCVRTBT43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK008LCVRTBT44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK008LCVRTBT Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK008SARIBT
  try {
await (async function() {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
  await page.waitForSelector('#User_Email')

  await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
  await page.type('#User_Password', 'tma200786', { delay: 200})
  await page.click('button.button.button-login.right', { delay: 200})

  await page.waitForSelector('.user-info.left')
  await page.goto(knkurl20)
  await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")

  const num40 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num41  = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num42 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num43 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
  })

  const num44 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
  })

  data = loadNotes()

  data.push({
    barkod: 'MDSHKNK008SARIBT40',
    no: num40[0],
  })

  data.push({
    barkod: 'MDSHKNK008SARIBT41',
    no: num41[0],
  })

  data.push({
    barkod: 'MDSHKNK008SARIBT42',
    no: num42[0],
  })

  data.push({
    barkod: 'MDSHKNK008SARIBT43',
    no: num43[0],
  })

  data.push({
    barkod: 'MDSHKNK008SARIBT44',
    no: num44[0],
  })

  saveNotes(data)

  await browser.close()
  console.log(chalk.bgBlue.bold('MDSHKNK008SARIBT Done...'))
  })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK008SYHST
  try {
await (async function() {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage();
    await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
    await page.waitForSelector('#User_Email')
  
    await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
    await page.type('#User_Password', 'tma200786', { delay: 200})
    await page.click('button.button.button-login.right', { delay: 200})
  
    await page.waitForSelector('.user-info.left')
    await page.goto(knkurl21)
    await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
  
    const num40 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num41  = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num42 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num43 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num44 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    data = loadNotes()
  
    data.push({
      barkod: 'MDSHKNK008SYHST40',
      no: num40[0],
    })
  
    data.push({
      barkod: 'MDSHKNK008SYHST41',
      no: num41[0],
    })
  
    data.push({
      barkod: 'MDSHKNK008SYHST42',
      no: num42[0],
    })
  
    data.push({
      barkod: 'MDSHKNK008SYHST43',
      no: num43[0],
    })
  
    data.push({
      barkod: 'MDSHKNK008SYHST44',
      no: num44[0],
    })
  
    saveNotes(data)
  
    await browser.close()
    console.log(chalk.bgBlue.bold('MDSHKNK008SYHST Done...'))
    })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK008SYHTT
  try {
await (async function() {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage();
    await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
    await page.waitForSelector('#User_Email')
  
    await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
    await page.type('#User_Password', 'tma200786', { delay: 200})
    await page.click('button.button.button-login.right', { delay: 200})
  
    await page.waitForSelector('.user-info.left')
    await page.goto(knkurl22)
    await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
  
    const num40 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num41  = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num42 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num43 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num44 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    data = loadNotes()
  
    data.push({
      barkod: 'MDSHKNK008SYHTT40',
      no: num40[0],
    })
  
    data.push({
      barkod: 'MDSHKNK008SYHTT41',
      no: num41[0],
    })
  
    data.push({
      barkod: 'MDSHKNK008SYHTT42',
      no: num42[0],
    })
  
    data.push({
      barkod: 'MDSHKNK008SYHTT43',
      no: num43[0],
    })
  
    data.push({
      barkod: 'MDSHKNK008SYHTT44',
      no: num44[0],
    })
  
    saveNotes(data)
  
    await browser.close()
    console.log(chalk.bgBlue.bold('MDSHKNK008SYHTT Done...'))
    })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK008TABATT
  try {
await (async function() {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage();
    await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
    await page.waitForSelector('#User_Email')
  
    await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
    await page.type('#User_Password', 'tma200786', { delay: 200})
    await page.click('button.button.button-login.right', { delay: 200})
  
    await page.waitForSelector('.user-info.left')
    await page.goto(knkurl23)
    await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
  
    const num40 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num41  = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num42 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num43 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num44 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    data = loadNotes()
  
    data.push({
      barkod: 'MDSHKNK008TABATT40',
      no: num40[0],
    })
  
    data.push({
      barkod: 'MDSHKNK008TABATT41',
      no: num41[0],
    })
  
    data.push({
      barkod: 'MDSHKNK008TABATT42',
      no: num42[0],
    })
  
    data.push({
      barkod: 'MDSHKNK008TABATT43',
      no: num43[0],
    })
  
    data.push({
      barkod: 'MDSHKNK008TABATT44',
      no: num44[0],
    })
  
    saveNotes(data)
  
    await browser.close()
    console.log(chalk.bgBlue.bold('MDSHKNK008TABATT Done...'))
    })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK008YSLBT
  try {
await (async function() {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage();
    await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
    await page.waitForSelector('#User_Email')
  
    await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
    await page.type('#User_Password', 'tma200786', { delay: 200})
    await page.click('button.button.button-login.right', { delay: 200})
  
    await page.waitForSelector('.user-info.left')
    await page.goto(knkurl24)
    await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
  
    const num40 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num41  = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num42 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num43 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num44 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    data = loadNotes()
  
    data.push({
      barkod: 'MDSHKNK008YSLBT40',
      no: num40[0],
    })
  
    data.push({
      barkod: 'MDSHKNK008YSLBT41',
      no: num41[0],
    })
  
    data.push({
      barkod: 'MDSHKNK008YSLBT42',
      no: num42[0],
    })
  
    data.push({
      barkod: 'MDSHKNK008YSLBT43',
      no: num43[0],
    })
  
    data.push({
      barkod: 'MDSHKNK008YSLBT44',
      no: num44[0],
    })
  
    saveNotes(data)
  
    await browser.close()
    console.log(chalk.bgBlue.bold('MDSHKNK008YSLBT Done...'))
    })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}
  
  // MDSHKNK022BYZBT
  try {
await (async function() {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage();
    await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
    await page.waitForSelector('#User_Email')
  
    await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
    await page.type('#User_Password', 'tma200786', { delay: 200})
    await page.click('button.button.button-login.right', { delay: 200})
  
    await page.waitForSelector('.user-info.left')
    await page.goto(knkurl25)
    await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
  
    const num40 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num41  = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num42 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num43 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num44 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    data = loadNotes()
  
    data.push({
      barkod: 'MDSHKNK022BYZBT40',
      no: num40[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022BYZBT41',
      no: num41[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022BYZBT42',
      no: num42[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022BYZBT43',
      no: num43[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022BYZBT44',
      no: num44[0],
    })
  
    saveNotes(data)
  
    await browser.close()
    console.log(chalk.bgBlue.bold('MDSHKNK022BYZBT Done...'))
    })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK022FUMEBT
  try {
await (async function() {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage();
    await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
    await page.waitForSelector('#User_Email')
  
    await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
    await page.type('#User_Password', 'tma200786', { delay: 200})
    await page.click('button.button.button-login.right', { delay: 200})
  
    await page.waitForSelector('.user-info.left')
    await page.goto(knkurl26)
    await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
  
    const num40 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num41  = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num42 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num43 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num44 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    data = loadNotes()
  
    data.push({
      barkod: 'MDSHKNK022FUMEBT40',
      no: num40[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022FUMEBT41',
      no: num41[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022FUMEBT42',
      no: num42[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022FUMEBT43',
      no: num43[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022FUMEBT44',
      no: num44[0],
    })
  
    saveNotes(data)
  
    await browser.close()
    console.log(chalk.bgBlue.bold('MDSHKNK022FUMEBT Done...'))
    })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK022HKKBT
  try {
await (async function() {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage();
    await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
    await page.waitForSelector('#User_Email')
  
    await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
    await page.type('#User_Password', 'tma200786', { delay: 200})
    await page.click('button.button.button-login.right', { delay: 200})
  
    await page.waitForSelector('.user-info.left')
    await page.goto(knkurl27)
    await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
  
    const num40 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num41  = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num42 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num43 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num44 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    data = loadNotes()
  
    data.push({
      barkod: 'MDSHKNK022HKKBT40',
      no: num40[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022HKKBT41',
      no: num41[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022HKKBT42',
      no: num42[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022HKKBT43',
      no: num43[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022HKKBT44',
      no: num44[0],
    })
  
    saveNotes(data)
  
    await browser.close()
    console.log(chalk.bgBlue.bold('MDSHKNK022HKKBT Done...'))
    })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK022KHVBT
  try {
await (async function() {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage();
    await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
    await page.waitForSelector('#User_Email')
  
    await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
    await page.type('#User_Password', 'tma200786', { delay: 200})
    await page.click('button.button.button-login.right', { delay: 200})
  
    await page.waitForSelector('.user-info.left')
    await page.goto(knkurl28)
    await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
  
    const num40 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num41  = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num42 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num43 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num44 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    data = loadNotes()
  
    data.push({
      barkod: 'MDSHKNK022KHVBT40',
      no: num40[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022KHVBT41',
      no: num41[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022KHVBT42',
      no: num42[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022KHVBT43',
      no: num43[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022KHVBT44',
      no: num44[0],
    })
  
    saveNotes(data)
  
    await browser.close()
    console.log(chalk.bgBlue.bold('MDSHKNK022KHVBT Done...'))
    })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK022SYHBT
  try {
await (async function() {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage();
    await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
    await page.waitForSelector('#User_Email')
  
    await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
    await page.type('#User_Password', 'tma200786', { delay: 200})
    await page.click('button.button.button-login.right', { delay: 200})
  
    await page.waitForSelector('.user-info.left')
    await page.goto(knkurl29)
    await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
  
    const num40 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num41  = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num42 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num43 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num44 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    data = loadNotes()
  
    data.push({
      barkod: 'MDSHKNK022SYHBT40',
      no: num40[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022SYHBT41',
      no: num41[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022SYHBT42',
      no: num42[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022SYHBT43',
      no: num43[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022SYHBT44',
      no: num44[0],
    })
  
    saveNotes(data)
  
    await browser.close()
    console.log(chalk.bgBlue.bold('MDSHKNK022SYHBT Done...'))
    })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK022SYHST
  try {
await (async function() {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage();
    await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
    await page.waitForSelector('#User_Email')
  
    await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
    await page.type('#User_Password', 'tma200786', { delay: 200})
    await page.click('button.button.button-login.right', { delay: 200})
  
    await page.waitForSelector('.user-info.left')
    await page.goto(knkurl30)
    await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
  
    const num40 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num41  = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num42 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num43 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num44 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    data = loadNotes()
  
    data.push({
      barkod: 'MDSHKNK022SYHST40',
      no: num40[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022SYHST41',
      no: num41[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022SYHST42',
      no: num42[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022SYHST43',
      no: num43[0],
    })
  
    data.push({
      barkod: 'MDSHKNK022SYHST44',
      no: num44[0],
    })
  
    saveNotes(data)
  
    await browser.close()
    console.log(chalk.bgBlue.bold('MDSHKNK022SYHST Done...'))
    })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK040HKKBTSUET
  try {
await (async function() {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage();
    await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
    await page.waitForSelector('#User_Email')
  
    await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
    await page.type('#User_Password', 'tma200786', { delay: 200})
    await page.click('button.button.button-login.right', { delay: 200})
  
    await page.waitForSelector('.user-info.left')
    await page.goto(knkurl31)
    await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
  
    const num40 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num41  = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num42 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num43 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num44 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    data = loadNotes()
  
    data.push({
      barkod: 'MDSHKNK040HKKBTSUET40',
      no: num40[0],
    })
  
    data.push({
      barkod: 'MDSHKNK040HKKBTSUET41',
      no: num41[0],
    })
  
    data.push({
      barkod: 'MDSHKNK040HKKBTSUET42',
      no: num42[0],
    })
  
    data.push({
      barkod: 'MDSHKNK040HKKBTSUET43',
      no: num43[0],
    })
  
    data.push({
      barkod: 'MDSHKNK040HKKBTSUET44',
      no: num44[0],
    })
  
    saveNotes(data)
  
    await browser.close()
    console.log(chalk.bgBlue.bold('MDSHKNK040HKKBTSUET Done...'))
    })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK040HRDBTSUET
  try {
await (async function() {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage();
    await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
    await page.waitForSelector('#User_Email')
  
    await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
    await page.type('#User_Password', 'tma200786', { delay: 200})
    await page.click('button.button.button-login.right', { delay: 200})
  
    await page.waitForSelector('.user-info.left')
    await page.goto(knkurl32)
    await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
  
    const num40 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num41  = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num42 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num43 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    const num44 = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
    })
  
    data = loadNotes()
  
    data.push({
      barkod: 'MDSHKNK040HRDBTSUET40',
      no: num40[0],
    })
  
    data.push({
      barkod: 'MDSHKNK040HRDBTSUET41',
      no: num41[0],
    })
  
    data.push({
      barkod: 'MDSHKNK040HRDBTSUET42',
      no: num42[0],
    })
  
    data.push({
      barkod: 'MDSHKNK040HRDBTSUET43',
      no: num43[0],
    })
  
    data.push({
      barkod: 'MDSHKNK040HRDBTSUET44',
      no: num44[0],
    })
  
    saveNotes(data)
  
    await browser.close()
    console.log(chalk.bgBlue.bold('MDSHKNK040HRDBTSUET Done...'))
    })();
} catch (err) {
  console.log(chalk.bgRed.bold(err))
}

  // MDSHKNK040KRMZBTSUET
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl33)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK040KRMZBTSUET40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040KRMZBTSUET41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040KRMZBTSUET42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040KRMZBTSUET43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040KRMZBTSUET44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK040KRMZBTSUET Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK040SYHBTSUET
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl34)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK040SYHBTSUET40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040SYHBTSUET41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040SYHBTSUET42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040SYHBTSUET43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040SYHBTSUET44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK040SYHBTSUET Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK040SYHSTSUET
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl35)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK040SYHSTSUET40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040SYHSTSUET41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040SYHSTSUET42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040SYHSTSUET43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040SYHSTSUET44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK040SYHSTSUET Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK040TASBTSUET
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl36)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK040TASBTSUET40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040TASBTSUET41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040TASBTSUET42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040TASBTSUET43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040TASBTSUET44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK040TASBTSUET Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK040TRNCBTSUET
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl37)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK040TRNCBTSUET40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040TRNCBTSUET41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040TRNCBTSUET42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040TRNCBTSUET43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK040TRNCBTSUET44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK040TRNCBTSUET Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK044BLACKBS
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl38)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044BLACKBS40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044BLACKBS41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044BLACKBS42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044BLACKBS43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044BLACKBS44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044BLACKBS Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK044BLACKWS
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl39)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044BLACKWS40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044BLACKWS41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044BLACKWS42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044BLACKWS43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044BLACKWS44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044BLACKWS Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }
  
  // MDSHKNK044COLOREDBLACKBS
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl40)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044COLOREDBLACKBS40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044COLOREDBLACKBS41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044COLOREDBLACKBS42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044COLOREDBLACKBS43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044COLOREDBLACKBS44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044COLOREDBLACKBS Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK044COLOREDHOT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl41)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044COLOREDHOT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044COLOREDHOT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044COLOREDHOT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044COLOREDHOT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044COLOREDHOT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044COLOREDHOT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK044COLOREDSKULL
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl42)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044COLOREDSKULL40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044COLOREDSKULL41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044COLOREDSKULL42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044COLOREDSKULL43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044COLOREDSKULL44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044COLOREDSKULL Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }
  
  // MDSHKNK044COLOREDWHİTE
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl43)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044COLOREDWHİTE40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044COLOREDWHİTE41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044COLOREDWHİTE42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044COLOREDWHİTE43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044COLOREDWHİTE44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044COLOREDWHİTE Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK044CUBA
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl44)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044CUBA40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044CUBA41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044CUBA42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044CUBA43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044CUBA44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044CUBA Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK044ENGLAND
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl45)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044ENGLAND40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044ENGLAND41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044ENGLAND42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044ENGLAND43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044ENGLAND44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044ENGLAND Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK044GHOSTSKULL
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl46)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044GHOSTSKULL40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044GHOSTSKULL41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044GHOSTSKULL42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044GHOSTSKULL43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044GHOSTSKULL44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044GHOSTSKULL Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK044GİNA
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl47)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044GİNA40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044GİNA41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044GİNA42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044GİNA43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044GİNA44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044GİNA Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }
  
  //  MDSHKNK044GRAY
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl48)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044GRAY40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044GRAY41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044GRAY42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044GRAY43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044GRAY44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044GRAY Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK044HAKİ
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl49)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044HAKİ40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044HAKİ41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044HAKİ42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044HAKİ43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044HAKİ44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044HAKİ Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }
  
  // MDSHKNK044JAMAİCA
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl50)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044JAMAİCA40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044JAMAİCA41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044JAMAİCA42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044JAMAİCA43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044JAMAİCA44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044JAMAİCA Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK044PATE
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl51)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044PATE40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044PATE41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044PATE42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044PATE43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044PATE44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044PATE Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK044RED
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl52)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044RED40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044RED41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044RED42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044RED43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044RED44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044RED Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK044ROSEANDSKULL
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl53)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044ROSEANDSKULL40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044ROSEANDSKULL41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044ROSEANDSKULL42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044ROSEANDSKULL43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044ROSEANDSKULL44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044ROSEANDSKULL Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK044SMS
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl54)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044SMS40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044SMS41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044SMS42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044SMS43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044SMS44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044SMS Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK044TAN
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl55)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044TAN40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044TAN41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044TAN42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044TAN43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044TAN44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044TAN Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK044WHİTE
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl56)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044WHİTE40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044WHİTE41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044WHİTE42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044WHİTE43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044WHİTE44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044WHİTE Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK044YELLOW
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl57)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK044YELLOW40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044YELLOW41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044YELLOW42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044YELLOW43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK044YELLOW44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK044YELLOW Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK060BYZBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl58)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK060BYZBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060BYZBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060BYZBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060BYZBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060BYZBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK060BYZBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }
  
  // MDSHKNK060HKKBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl59)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK060HKKBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060HKKBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060HKKBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060HKKBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060HKKBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK060HKKBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK060SYHCLT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl60)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK060SYHCLT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060SYHCLT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060SYHCLT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060SYHCLT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060SYHCLT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK060SYHCLT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK060SYHST
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl61)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK060SYHST40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060SYHST41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060SYHST42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060SYHST43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060SYHST44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK060SYHST Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK060SYHSUET
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl62)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK060SYHSUET40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060SYHSUET41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060SYHSUET42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060SYHSUET43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060SYHSUET44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK060SYHSUET Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK060TABABT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl63)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK060TABABT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060TABABT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060TABABT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060TABABT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060TABABT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK060TABABT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK060TABASUETBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl64)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK060TABASUETBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060TABASUETBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060TABASUETBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060TABASUETBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK060TABASUETBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK060TABABT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK999BYZBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl65)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK999BYZBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999BYZBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999BYZBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999BYZBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999BYZBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK999BYZBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }
  
  // MDSHKNK999GRİBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl66)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK999GRİBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999GRİBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999GRİBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999GRİBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999GRİBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK999GRİBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK999SYHBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl67)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK999SYHBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999SYHBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999SYHBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999SYHBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999SYHBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK999GRİBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNK999SYHST
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl68)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK999SYHST40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999SYHST41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999SYHST42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999SYHST43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999SYHST44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK999SYHST Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }
  
  // MDSHKNK999TABABT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl69)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNK999TABABT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999TABABT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999TABABT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999TABABT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNK999TABABT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNK999TABABT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKB-80BYZCLTBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl70)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKB-80BYZCLTBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80BYZCLTBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80BYZCLTBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80BYZCLTBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80BYZCLTBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKB-80BYZCLTBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKB-80HKKCLTBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl71)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKB-80HKKCLTBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80HKKCLTBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80HKKCLTBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80HKKCLTBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80HKKCLTBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKB-80HKKCLTBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }
  
  // MDSHKNKB-80KHVCLTBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl72)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKB-80KHVCLTBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80KHVCLTBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80KHVCLTBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80KHVCLTBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80KHVCLTBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKB-80KHVCLTBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKB-80SYHCLTBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl73)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKB-80SYHCLTBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80SYHCLTBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80SYHCLTBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80SYHCLTBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80SYHCLTBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKB-80SYHCLTBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKB-80SYHCLTST
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl74)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKB-80SYHCLTST40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80SYHCLTST41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80SYHCLTST42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80SYHCLTST43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80SYHCLTST44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKB-80SYHCLTST Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKB-80TABACLTBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl75)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKB-80TABACLTBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80TABACLTBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80TABACLTBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80TABACLTBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-80TABACLTBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKB-80TABACLTBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKKX-300BYZBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl76)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKKX-300BYZBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300BYZBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300BYZBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300BYZBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300BYZBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKKX-300BYZBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKKX-300HKKBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl77)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKKX-300HKKBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300HKKBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300HKKBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300HKKBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300HKKBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKKX-300HKKBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKKX-300LCVRTBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl78)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKKX-300LCVRTBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300LCVRTBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300LCVRTBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300LCVRTBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300LCVRTBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKKX-300LCVRTBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKKX-300SYHBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl79)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKKX-300SYHBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300SYHBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300SYHBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300SYHBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300SYHBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKKX-300SYHBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKKX-300SYHST
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl80)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKKX-300SYHST40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300SYHST41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300SYHST42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300SYHST43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300SYHST44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKKX-300SYHST Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKKX-300VZNBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl81)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKKX-300VZNBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300VZNBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300VZNBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300VZNBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKKX-300VZNBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKKX-300VZNBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKF-505BYZBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl82)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKF-505BYZBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505BYZBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505BYZBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505BYZBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505BYZBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKF-505BYZBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKF-505GRBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl83)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKF-505GRBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505GRBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505GRBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505GRBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505GRBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKF-505GRBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }
  
  // MDSHKNKF-505SYHBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl84)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKF-505SYHBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505SYHBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505SYHBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505SYHBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505SYHBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKF-505SYHBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKF-505SYHST
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl85)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKF-505SYHST40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505SYHST41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505SYHST42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505SYHST43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505SYHST44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKF-505SYHST Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKF-505TABABT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl86)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKF-505TABABT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505TABABT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505TABABT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505TABABT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKF-505TABABT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKF-505TABABT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKC-030BYZCLTBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl87)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKC-030BYZCLTBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030BYZCLTBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030BYZCLTBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030BYZCLTBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030BYZCLTBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKC-030BYZCLTBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKC-030SYHCLTBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl88)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKC-030SYHCLTBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030SYHCLTBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030SYHCLTBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030SYHCLTBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030SYHCLTBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKC-030SYHCLTBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKC-030SYHSUETBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl89)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKC-030SYHSUETBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030SYHSUETBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030SYHSUETBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030SYHSUETBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030SYHSUETBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKC-030SYHSUETBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKC-030TABASUETBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl89)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKC-030TABASUETBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030TABASUETBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030TABASUETBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030TABASUETBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030TABASUETBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKC-030TABASUETBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKC-030TASSUETBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl90)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKC-030TABASUETBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030TABASUETBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030TABASUETBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030TABASUETBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030TABASUETBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKC-030TABASUETBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }
  
  // MDSHKNKC-030TASSUETBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl91)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKC-030TASSUETBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030TASSUETBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030TASSUETBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030TASSUETBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030TASSUETBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKC-030TASSUETBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKC-030VZNSUETBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl92)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKC-030VZNSUETBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030VZNSUETBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030VZNSUETBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030VZNSUETBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKC-030VZNSUETBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKC-030VZNSUETBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }
  
  // MDSHKNKB-020SYHBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl93)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKB-020SYHBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020SYHBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020SYHBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020SYHBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020SYHBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKB-020SYHBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKB-020SYHST
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl94)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKB-020SYHST40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020SYHST41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020SYHST42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020SYHST43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020SYHST44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKB-020SYHST Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKB-020TABACLTTT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl95)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKB-020TABACLTTT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020TABACLTTT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020TABACLTTT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020TABACLTTT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020TABACLTTT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKB-020TABACLTTT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }
  
  // MDSHKNKB-020TABASUETTT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl96)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKB-020TABASUETTT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020TABASUETTT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020TABASUETTT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020TABASUETTT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020TABASUETTT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKB-020TABASUETTT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }
  
  // MDSHKNKB-020VZNSUETTT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl97)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKB-020VZNSUETTT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020VZNSUETTT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020VZNSUETTT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020VZNSUETTT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-020VZNSUETTT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKB-020VZNSUETTT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKB-022SYHBT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl98)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKB-022SYHBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-022SYHBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-022SYHBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-022SYHBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-022SYHBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKB-022SYHBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }
  
  // MDSHKNKB-022SYHST
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl99)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKB-022SYHST40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-022SYHST41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-022SYHST42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-022SYHST43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-022SYHST44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKB-022SYHST Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

  // MDSHKNKB-022TABATT
  try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl100)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKB-022TABATT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-022TABATT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-022TABATT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-022TABATT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-022TABATT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKB-022TABATT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }

   // MDSHKNKB-022TASBT
   try {
    await (async function() {
        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage();
        await page.goto("https://www.bayiknack.com/uyelik/giris-yap")
        await page.waitForSelector('#User_Email')
      
        await page.type('#User_Email', 'faik.kundes92@gmail.com', { delay: 200})
        await page.type('#User_Password', 'tma200786', { delay: 200})
        await page.click('button.button.button-login.right', { delay: 200})
      
        await page.waitForSelector('.user-info.left')
        await page.goto(knkurl101)
        await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
      
        const num40 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num41  = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num42 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num43 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        const num44 = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent)
        })
      
        data = loadNotes()
      
        data.push({
          barkod: 'MDSHKNKB-022TASBT40',
          no: num40[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-022TASBT41',
          no: num41[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-022TASBT42',
          no: num42[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-022TASBT43',
          no: num43[0],
        })
      
        data.push({
          barkod: 'MDSHKNKB-022TASBT44',
          no: num44[0],
        })
      
        saveNotes(data)
      
        await browser.close()
        console.log(chalk.bgBlue.bold('MDSHKNKB-022TASBT Done...'))
        })();
    } catch (err) {
      console.log(chalk.bgRed.bold(err))
    }
  

    await console.log(chalk.bgRed.bold('Finished...'))

    await process.exit();

// Final brackets
}


knackStock()

app.listen(PORT, () => console.log(chalk.bgGreen(`server running on PORT ${PORT}`)))

module.exports = {
  knackStock: knackStock
}
  
