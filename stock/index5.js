const XLSX = require('xlsx')
const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express');
const chalk = require('chalk')
const puppeteer = require('puppeteer');

const stok = {
  knack() {

  const PORT = 7777;
  
  const app = express()

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("D:/Own_Projects/07_web_scarper/data.json")
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
const knkurl18 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-gri'
const knkurl19 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-kirmizi'
const knkurl20 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-mavi'
const knkurl21 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-sari'
const knkurl22 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-siyah-siyah-taban'
const knkurl23 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-siyah-taba-taban'
const knkurl24 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-taba'
const knkurl25 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-yesil'
const knkurl26 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-beyaz'
const knkurl27 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-fume'
const knkurl28 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-haki'
const knkurl29 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-kahverengi'
const knkurl30 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-siyah-beyaz-taban'
const knkurl31 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-siyah-siyah-taban'
const knkurl32 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-haki'
const knkurl33 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-suet-ayakkabi-040-sari'
const knkurl34 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-suet-ayakkabi-040-kirmizi'
const knkurl35 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-suet-ayakkabi-040-siyah-beyaz-taban'
const knkurl36 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-suet-ayakkabi-040-siyah-siyah-taban'
const knkurl37 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-suet-ayakkabi-040-tas'
const knkurl38 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-suet-ayakkabi-040-turuncu'
const knkurl39 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-siyah-beyaz-taban'
const knkurl40 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-siyah-beyaz-taban'
const knkurl41 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-siyah-kurukafa'
const knkurl42 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-hot'
const knkurl43 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-kurukafa-renkli'
const knkurl44 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-beyaz-kurukafa'
const knkurl45 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-kuba-renkli'
const knkurl46 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-eng-renkli'
const knkurl47 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-ghost-skull-renkli'
const knkurl48 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-senegal-renkli'
const knkurl49 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-gri'
const knkurl50 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-haki'
const knkurl51 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-jamaika-renkli'
const knkurl52 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-pate-renkli'
const knkurl53 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-kirmizi'
const knkurl54 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-dead-renkli'
const knkurl55 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-simps-renkli'
const knkurl56 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-taba'
const knkurl57 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-beyaz'
const knkurl58 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-sari'
const knkurl59 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-beyaz'
const knkurl60 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-haki'
const knkurl61 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-siyah-beyaz-taban'
const knkurl62 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-siyah-siyah-taban'
const knkurl63 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-siyah-suet-beyaz-taban'
const knkurl64 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-taba'
const knkurl65 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-taba-suet'
const knkurl66 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-999-beyaz'
const knkurl67 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-999-gri'
const knkurl68 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-999-siyah-beyaz-taban'
const knkurl69 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-999-siyah-siyah-taban'
const knkurl70 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-999-taba'
const knkurl71 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-beyaz'
const knkurl72 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-haki'
const knkurl73 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-vizon'
const knkurl74 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-siyah-beyaz-taban'
const knkurl75 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-siyah-siyah-taban'
const knkurl76 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-taba'
const knkurl77 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-beyaz'
const knkurl78 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-haki'
const knkurl79 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-lacivert'
const knkurl80 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-siyah-beyaz-taban'
const knkurl81 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-siyah-siyah-taban'
const knkurl82 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-vizon'
const knkurl83 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-f-505-beyaz'
const knkurl84 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-f-505-gri'
const knkurl85 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-f-505-siyah-beyaz-taban'
const knkurl86 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-f-505-siyah-siyah-taban'
const knkurl87 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-f-505-taba'
const knkurl88 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-beyaz'
const knkurl89 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-siyah-beyaz-taban'
const knkurl90 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-siyah-suet-beyaz-taban'
const knkurl91 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-taba-suet'
const knkurl92 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-tas'
const knkurl93 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-vizon-suet'
const knkurl94 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-020-siyah-beyaz-taban'
const knkurl95 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-020-siyah-siyah-taban'
const knkurl96 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-020-taba'
const knkurl97 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-020-sari'
const knkurl98 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-020-tas'
const knkurl99 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-022-siyah-beyaz-taban'
const knkurl100 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-022-siyah-siyah-taban'
const knkurl101 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-022-taba'
const knkurl102 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-022-tas'
const knkurl103 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-010-beyaz'
const knkurl104 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-010-siyah-beyaz-taban'
const knkurl105 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-010-taba-suet'
const knkurl106 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-010-tas'
const knkurl107 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-010-vizon-suet'
const knkurl108 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-010-siyah-suet-beyaz-taban'
const knkurl109 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-404-beyaz'
const knkurl110 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-404-gri'
const knkurl111 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-404-haki'
const knkurl112 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-404-siyah-siyah-taban'
const knkurl113 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-404-siyah-suet-beyaz-taban'
const knkurl114 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-404-taba-suet'
const knkurl115 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-404-taba'



// /* Knack Stok */
async function knackStock() {


  // MDSHKNK002ACKKHVBT
  await (async function funurl1() {
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
        funurl1()
      }   
  })();
  

  // MDSHKNK002BRDBT
  await (async function funurl2() {
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
        funurl2()
      }
  })();
  
  // MDSHKNK002BYZBT
  await (async function funurl3() {
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
        funurl3()
      }
  })();

  // MDSHKNK002GRİBT
  await (async function funurl4() {
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
        funurl4()
      }
  })();
  

  // MDSHKNK002HKKBT
  await (async function funurl5() {
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
        funurl5()
      }
  })();
  

  // MDSHKNK002KYKHVBT
  await (async function funurl6() {
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
        funurl6()
      }
  })();
  
  // MDSHKNK002LCVRTBT
  await (async function funurl7() {
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
        funurl7()
      }
  })();

  // MDSHKNK002SYHBT
  await (async function funurl8() {
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
        funurl8()
      }
  })();
  
  // MDSHKNK002TabaBT
  await (async function funurl9 () {
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
        funurl9();
      }
  })();
  

  // MDSHKNK007ANTRSTSUET
  await (async function funurl10() {
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
        funurl10()
      }
  })();
  

  // MDSHKNK007KUMSUET
  await (async function funurl11() {
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
        funurl11();
      }
  })();

  // MDSHKNK007LCVRTSUET
  await (async function funurl12() {
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
        funurl12();
      }
  })();
  

  // MDSHKNK007MVSUET
  await (async function funurl13()  {
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
        funurl13()
      }
  })();

  // MDSHKNK007SYHSUET
  await (async function funurl14() {
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
        funurl14()
      }
  })();
  

  // MDSHKNK007TABASUET
  await (async function funurl15() {
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
        funurl15()
      }
  })();
  
  // MDSHKNK007VZNSUET
  await (async function funurl16() {
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
        funurl16()
      }
  })();

  // MDSHKNK008BYZBT
  await (async function funurl17() {
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
        funurl17()
      }
  })();
  

  // MDSHKNK008GRİBT
  await (async function funurl18() {
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
        funurl18();
      }
  })();
  

  // MDSHKNK008KRMZBT
  await (async function funurl19() {
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
        funurl19()
      }
  })();

  // MDSHKNK008LCVRTBT
  await (async function funurl20() {
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
        funurl20()
      }
  })();
  

  // MDSHKNK008SARIBT
  await (async function funurl21() {
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
        funurl21()
      }
  })();
  

  // MDSHKNK008SYHST
  await (async function funurl22() {
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
        funurl22()
      }
  })();
  

  // MDSHKNK008SYHTT
  await (async function funurl23() {
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
        funurl23()
      }
  })();
  
  // MDSHKNK008TABATT
  await (async function funurl24() {
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
        funurl24()
      }
  })();

  // MDSHKNK008YSLBT
  await (async function funurl25() {
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
        funurl25()
      }
  })();
  
  // MDSHKNK022BYZBT
  await (async function funurl26() {
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
        funurl26()
      }
  })();

  // MDSHKNK022FUMEBT
  await (async function funurl27() {
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
        funurl27()
      }
  })();
  
  // MDSHKNK022HKKBT
  await (async function funurl28() {
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
        funurl28()
      }
  })();
  
  // MDSHKNK022KHVBT
  await (async function funurl29() {
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
        funurl29()
      }
  })();
  
  // MDSHKNK022SYHBT
  await (async function funurl30() {
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
        funurl30();
      }
  })();
  
  // MDSHKNK022SYHST
  await (async function funurl31() {
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
        funurl31();
      }
  })();
  

  // MDSHKNK040HKKBTSUET
  await (async function funurl32() {
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
        funurl32()
      }
  })();

  // MDSHKNK040HRDBTSUET
  await (async function funurl33() {
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
        funurl33();
      }
  })();

  // MDSHKNK040KRMZBTSUET
  await (async function funurl34() {
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
        funurl34();
      }
  })();

  // MDSHKNK040SYHBTSUET
  await (async function funurl35() {
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
        funurl35();
      }
  })();
  

  // MDSHKNK040SYHSTSUET
  await (async function funurl36() {
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
        funurl36()
      }
  })();
  

  // MDSHKNK040TASBTSUET
  await (async function funurl37() {
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
        funurl37()
      }
  })();

  // MDSHKNK040TRNCBTSUET
  await (async function funurl38() {
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
        funurl38()
      }
  })();
  

  // MDSHKNK044BLACKBS
  await (async function funurl39() {
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
      funurl39();
    }
  })();
  

  // MDSHKNK044BLACKWS
  await (async function funurl40() {
    
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
      funurl40();
    }
  })();
  
  // MDSHKNK044COLOREDBLACKBS
  await (async function funurl41() {
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
        funurl41();
      }
  })();

  // MDSHKNK044COLOREDHOT
  await (async function funurl42() {
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
        funurl42()
      }
  })();
  

  // MDSHKNK044COLOREDSKULL
  await (async function funurl43() {
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
        funurl43()
      }
  })();
  
  
  // MDSHKNK044COLOREDWHİTE
  await (async function funurl44() {
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
        funurl44();
      }
  })();
  

  // MDSHKNK044CUBA
  await (async function funurl45() {
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
        funurl45();
      }
  })();
  

  // MDSHKNK044ENGLAND
  await (async function funurl46() {
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
        funurl46();
      }
  })();
  

  // MDSHKNK044GHOSTSKULL
  await (async function funurl47() {
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
        funurl47()
      }
  })();
  

  // MDSHKNK044GİNA
  await (async function funurl48() {
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
        funurl48()
      }
  })();
  
  //  MDSHKNK044GRAY
  await (async function funurl49() {
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
        funurl49();
      }
  })();
  
  // MDSHKNK044HAKİ
  await (async function funurl50() {
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
        funurl50();
      }
  })();
  
  // MDSHKNK044JAMAİCA
  await (async function funurl51() {
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
        funurl51();
      }
  })();

  // MDSHKNK044PATE
  await (async function funurl52() {
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
        funurl52();
      }
  })();

  // MDSHKNK044RED
  await (async function funurl53() {
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
        funurl53();
      }
  })();

  // MDSHKNK044ROSEANDSKULL
  await (async function funurl54() {
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
        funurl54()
      }
  
  })();
  
  // MDSHKNK044SMS
  await (async function funurl55() {
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
        funurl55();
      }
  })();
  

  // MDSHKNK044TAN
  await (async function funurl56() {
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
        funurl56();
      }
  })();
  

  // MDSHKNK044WHİTE
  await (async function funurl57() {
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
        funurl57();
      }
  })();
  

  // MDSHKNK044YELLOW
  await (async function funurl58() {
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
        funurl58();
      }
  })();
  

  // MDSHKNK060BYZBT
  await (async function funurl59() {
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
        funurl59();
      }
  })();
  
  // MDSHKNK060HKKBT
  await (async function funurl60() {
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
        funurl60();
      }
  })();

  // MDSHKNK060SYHCLT
  await (async function funurl61() {
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
        funurl61();
      }
  })();
  

  // MDSHKNK060SYHST
  await (async function funurl62() {
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
        funurl62();
      }
  })();
  

  // MDSHKNK060SYHSUET
  await (async function funurl63() {
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
        funurl63();
      }
  })();

  // MDSHKNK060TABABT
  await (async function funurl64() {
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
        funurl64();
      }
  })();

  // MDSHKNK060TABASUETBT
  await (async function funurl65() {
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
        funurl65();
      }
  })();
  

  // MDSHKNK999BYZBT
  await (async function funurl66() {
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
        funurl66();
      }
  })();
  
  
  // MDSHKNK999GRİBT
  await (async function funurl67() {
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
        funurl67();
      }
  })();

  // MDSHKNK999SYHBT
  await (async function funurl68() {
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
        funurl68();
      }
  })();
  

  // MDSHKNK999SYHST
  await (async function funurl69() {
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
        funurl69();
      }
  })();
  
  
  // MDSHKNK999TABABT
  await (async function funurl70() {
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
        funurl70()
      }
  })();
  

  // MDSHKNKB-80BYZCLTBT
  await (async function funurl71() {
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
        funurl71()
      }
  })();

  // MDSHKNKB-80HKKCLTBT
  await (async function funurl72() {
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
        funurl72();
      }
  })();
  
  // MDSHKNKB-80KHVCLTBT
  await (async function funurl73() {
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
        funurl73();
      }
  })();
  
  // MDSHKNKB-80SYHCLTBT
  await (async function funurl74() {
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
        funurl74();
      }
  })();
  

  // MDSHKNKB-80SYHCLTST
  await (async function funurl75() {
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
        funurl75();
      }
  })();
  
  // MDSHKNKB-80TABACLTBT
  await (async function funurl76() {
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
        funurl76()
      }
  })();

  // MDSHKNKKX-300BYZBT
  await (async function funurl77() {
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
        funurl77();
      }
  })();
  

  // MDSHKNKKX-300HKKBT
  await (async function funurl78() {
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
        funurl78();
      }
  })();
  

  // MDSHKNKKX-300LCVRTBT
  await (async function funurl79() {
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
        funurl79();
      }
  })();
  

  // MDSHKNKKX-300SYHBT
  await (async function funurl80() {
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
        funurl80();
      }
  })();
  

  // MDSHKNKKX-300SYHST
  await (async function funurl81() {
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
        funurl81();
      }
  })();
  

  // MDSHKNKKX-300VZNBT
  await (async function funurl82() {
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
        funurl82();
      }
  })();
  

  // MDSHKNKF-505BYZBT
  await (async function funurl83() {
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
        funurl83();
      }
  })();
  

  // MDSHKNKF-505GRBT
  await (async function funurl84() {
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
        funurl84();
      }
  })();
  
  
  // MDSHKNKF-505SYHBT
  await (async function funurl85() {
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
        funurl85();
      }
  })();

  // MDSHKNKF-505SYHST
  await (async function funurl86() {
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
        funurl86();
      }
  })();
  

  // MDSHKNKF-505TABABT
  await (async function funurl87() {
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
        funurl87()
      }
  })();

  // MDSHKNKC-030BYZCLTBT
  await (async function funurl88() {
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
        funurl88();
      }
  })();

  // MDSHKNKC-030SYHCLTBT
  await (async function funurl89() {
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
        funurl89()
      }
  })();

  // MDSHKNKC-030SYHSUETBT
  await (async function funurl90() {
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
        funurl90();
      }
  })();
  
  // MDSHKNKC-030TABASUETBT
  await (async function funurl91() {
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
        funurl91();
      }
  })();
  
  // MDSHKNKC-030TASSUETBT
  await (async function funurl92() {
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
        funurl92()
      }
  })()
  

  // MDSHKNKC-030VZNSUETBT
  await (async function funurl93() {
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
        funurl93();
      }
  })();
  
  // MDSHKNKB-020SYHBT
  await (async function funurl94() {
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
        funurl94()
      }
  })();
  

  // MDSHKNKB-020SYHST
  await (async function funurl95() {
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
        funurl95();
      }
  })();
  

  // MDSHKNKB-020TABACLTTT
  await (async function funurl96() {
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
        funurl96()
      }
  })();
  
  // MDSHKNKB-020TABASUETTT
  await (async function funurl97() {
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
        funurl97();
      }
  })();
  
  // MDSHKNKB-020VZNSUETTT
  await (async function funurl98() {
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
        funuırl98()
      }
  })();
  

  // MDSHKNKB-022SYHBT
  await (async function funurl99() {
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
        funurl99()
      }
  })();
  
  
  // MDSHKNKB-022SYHST
  await (async function funurl100() {
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
        funurl100();
      }
  })();
  

  // MDSHKNKB-022TABATT
  await (async function funurl101() {
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
        funurl101();
      }
  })();
  

   // MDSHKNKB-022TASBT
   await (async function funurl102() {
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
          await page.goto(knkurl102)
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
        funurl102();
      }
   })();

   // MDSHKNK010BYZCLTBT
   await (async function funurl103() {
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
            await page.goto(knkurl103)
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
              barkod: 'MDSHKNK010BYZCLTBT40',
              no: num40[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010BYZCLTBT41',
              no: num41[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010BYZCLTBT42',
              no: num42[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010BYZCLTBT43',
              no: num43[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010BYZCLTBT44',
              no: num44[0],
            })
            saveNotes(data)
      
            await browser.close()
      
            console.log(chalk.bgBlue.bold('MDSHKNK010BYZCLTBT Done...'))
        })();
      } catch (err) {
        console.log(chalk.bgRed.bold(err))
        funurl103()
      }   
  })();

  // MDSHKNK010SYHCLTBT
  await (async function funurl104() {
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
            await page.goto(knkurl104)
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
              barkod: 'MDSHKNK010SYHCLTBT40',
              no: num40[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010SYHCLTBT41',
              no: num41[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010SYHCLTBT42',
              no: num42[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010SYHCLTBT43',
              no: num43[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010SYHCLTBT44',
              no: num44[0],
            })
            saveNotes(data)
      
            await browser.close()
      
            console.log(chalk.bgBlue.bold('MDSHKNK010SYHCLTBT Done...'))
        })();
      } catch (err) {
        console.log(chalk.bgRed.bold(err))
        funurl104()
      }   
  })();

  // MDSHKNK010TABASUETBT
  await (async function funurl105() {
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
            await page.goto(knkurl105)
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
              barkod: 'MDSHKNK010TABASUETBT40',
              no: num40[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010TABASUETBT41',
              no: num41[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010TABASUETBT42',
              no: num42[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010TABASUETBT43',
              no: num43[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010TABASUETBT44',
              no: num44[0],
            })
            saveNotes(data)
      
            await browser.close()
      
            console.log(chalk.bgBlue.bold('MDSHKNK010TABASUETBT Done...'))
        })();
      } catch (err) {
        console.log(chalk.bgRed.bold(err))
        funurl105()
      }   
  })();

  // MDSHKNK010TASSUETBT
  await (async function funurl106() {
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
            await page.goto(knkurl106)
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
              barkod: 'MDSHKNK010TASSUETBT40',
              no: num40[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010TASSUETBT41',
              no: num41[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010TASSUETBT42',
              no: num42[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010TASSUETBT43',
              no: num43[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010TASSUETBT44',
              no: num44[0],
            })
            saveNotes(data)
      
            await browser.close()
      
            console.log(chalk.bgBlue.bold('MDSHKNK010TASSUETBT Done...'))
        })();
      } catch (err) {
        console.log(chalk.bgRed.bold(err))
        funurl106()
      }   
  })();

  // MDSHKNK010VZNSUETBT
  await (async function funurl107() {
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
            await page.goto(knkurl107)
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
              barkod: 'MDSHKNK010VZNSUETBT40',
              no: num40[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010VZNSUETBT41',
              no: num41[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010VZNSUETBT42',
              no: num42[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010VZNSUETBT43',
              no: num43[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010VZNSUETBT44',
              no: num44[0],
            })
            saveNotes(data)
      
            await browser.close()
      
            console.log(chalk.bgBlue.bold('MDSHKNK010VZNSUETBT Done...'))
        })();
      } catch (err) {
        console.log(chalk.bgRed.bold(err))
        funurl107()
      }   
  })();

  // MDSHKNK010SYHSUETBT
  await (async function funurl108() {
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
            await page.goto(knkurl108)
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
              barkod: 'MDSHKNK010SYHSUETBT40',
              no: num40[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010SYHSUETBT41',
              no: num41[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010SYHSUETBT42',
              no: num42[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010SYHSUETBT43',
              no: num43[0],
            })
      
            data.push({
              barkod: 'MDSHKNK010SYHSUETBT44',
              no: num44[0],
            })
            saveNotes(data)
      
            await browser.close()
      
            console.log(chalk.bgBlue.bold('MDSHKNK010SYHSUETBT Done...'))
        })();
      } catch (err) {
        console.log(chalk.bgRed.bold(err))
        funurl108()
      }   
  })();

  // MDSHKNKB-404BYZCLTBT
  await (async function funurl109() {
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
            await page.goto(knkurl109)
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
              barkod: 'MDSHKNKB-404BYZCLTBT40',
              no: num40[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404BYZCLTBT41',
              no: num41[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404BYZCLTBT42',
              no: num42[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404BYZCLTBT43',
              no: num43[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404BYZCLTBT44',
              no: num44[0],
            })
            saveNotes(data)
      
            await browser.close()
      
            console.log(chalk.bgBlue.bold('MDSHKNKB-404BYZCLTBT Done...'))
        })();
      } catch (err) {
        console.log(chalk.bgRed.bold(err))
        funurl109()
      }   
  })();

  // MDSHKNKB-404GRİCLTBT
  await (async function funurl110() {
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
            await page.goto(knkurl110)
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
              barkod: 'MDSHKNKB-404GRİCLTBT40',
              no: num40[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404GRİCLTBT41',
              no: num41[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404GRİCLTBT42',
              no: num42[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404GRİCLTBT43',
              no: num43[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404GRİCLTBT44',
              no: num44[0],
            })
            saveNotes(data)
      
            await browser.close()
      
            console.log(chalk.bgBlue.bold('MDSHKNKB-404GRİCLTBT Done...'))
        })();
      } catch (err) {
        console.log(chalk.bgRed.bold(err))
        funurl110()
      }   
  })();

  // MDSHKNKB-404HKKCLTBT
  await (async function funurl111() {
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
            await page.goto(knkurl111)
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
              barkod: 'MDSHKNKB-404HKKCLTBT40',
              no: num40[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404HKKCLTBT41',
              no: num41[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404HKKCLTBT42',
              no: num42[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404HKKCLTBT43',
              no: num43[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404HKKCLTBT44',
              no: num44[0],
            })
            saveNotes(data)
      
            await browser.close()
      
            console.log(chalk.bgBlue.bold('MDSHKNKB-404HKKCLTBT Done...'))
        })();
      } catch (err) {
        console.log(chalk.bgRed.bold(err))
        funurl111()
      }   
  })();

  // MDSHKNKB-404SYHCLTST
  await (async function funurl112() {
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
            await page.goto(knkurl112)
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
              barkod: 'MDSHKNKB-404SYHCLTST40',
              no: num40[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404SYHCLTST41',
              no: num41[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404SYHCLTST42',
              no: num42[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404SYHCLTST43',
              no: num43[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404SYHCLTST44',
              no: num44[0],
            })
            saveNotes(data)
      
            await browser.close()
      
            console.log(chalk.bgBlue.bold('MDSHKNKB-404SYHCLTST Done...'))
        })();
      } catch (err) {
        console.log(chalk.bgRed.bold(err))
        funurl112()
      }   
  })();

  // MDSHKNKB-404SYHSUETBT
  await (async function funurl113() {
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
            await page.goto(knkurl113)
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
              barkod: 'MDSHKNKB-404SYHSUETBT40',
              no: num40[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404SYHSUETBT41',
              no: num41[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404SYHSUETBT42',
              no: num42[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404SYHSUETBT43',
              no: num43[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404SYHSUETBT44',
              no: num44[0],
            })
            saveNotes(data)
      
            await browser.close()
      
            console.log(chalk.bgBlue.bold('MDSHKNKB-404SYHSUETBT Done...'))
        })();
      } catch (err) {
        console.log(chalk.bgRed.bold(err))
        funurl113()
      }   
  })();

  // MDSHKNKB-404TABASUETBT
  await (async function funurl114() {
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
            await page.goto(knkurl114)
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
              barkod: 'MDSHKNKB-404TABASUETBT40',
              no: num40[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404TABASUETBT41',
              no: num41[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404TABASUETBT42',
              no: num42[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404TABASUETBT43',
              no: num43[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404TABASUETBT44',
              no: num44[0],
            })
            saveNotes(data)
      
            await browser.close()
      
            console.log(chalk.bgBlue.bold('MDSHKNKB-404TABASUETBT Done...'))
        })();
      } catch (err) {
        console.log(chalk.bgRed.bold(err))
        funurl114()
      }   
  })();

  // MDSHKNKB-404TABACLTBT
  await (async function funurl115() {
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
            await page.goto(knkurl115)
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
              barkod: 'MDSHKNKB-404TABACLTBT40',
              no: num40[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404TABACLTBT41',
              no: num41[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404TABACLTBT42',
              no: num42[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404TABACLTBT43',
              no: num43[0],
            })
      
            data.push({
              barkod: 'MDSHKNKB-404TABACLTBT44',
              no: num44[0],
            })
            saveNotes(data)
      
            await browser.close()
      
            console.log(chalk.bgBlue.bold('MDSHKNKB-404TABACLTBT Done...'))
        })();
      } catch (err) {
        console.log(chalk.bgRed.bold(err))
        funurl115()
      }   
  })();



  await (async function() {
  await console.log(chalk.bgRed.bold('Finished...'))

  await process.exit();
})();

// Final brackets
}

knackStock()

app.listen(PORT, () => console.log(chalk.bgGreen(`server running on PORT ${PORT}`)))
  },
  boa() {
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

const url1 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-beyaz-kalin-taban-casual-erkek-ayakkabi';
const url2 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-spor-gri-renk-keten-yuksek-taban-casual-erkek-ayakkabi';
const url3 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-spor-keten-sari-beyaz-yuksek-taban-casual-erkek-ayakkabi';
const url4 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-spor-keten-kirmizi-beyaz-yuksek-taban-casual-erkek-ayakkabi';
const url5 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-spor-rugan-lacivert-beyaz-yuksek-taban-casual-erkek-ayakkabi';
const url6 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-siyah-beyaz-yuksek-taban-casual-erkek-ayakkabi'
const url7 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-siyah-rugan-yuksek-taban-casual-erkek-ayakkabi'
const url8 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-spor-suet-siyah-beyaz-yuksek-taban-casual-erkek-ayakkabi'
const url9 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-siyah-beyaz-taban-rugan-yuksek-taban-casual-erkek-ayakkabi'
const url10 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-siyah-taban-rugan-yuksek-taban-casual-erkek-ayakkabi'
const url11 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-siyah-siyah-taban-rugan-yuksek-taban-casual-erkek-ayakkabi'
const url12 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-siyah-yuksek-siyah-taban-casual-erkek-ayakkabi'
const url13 = 'https://www.boa.com.tr/ba0003-bagcikli-suet-klasik-siyah-yuksek-taban-casual-erkek-ayakkabi'
const url14 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-taba-beyaz-kalin-taban-casual-erkek-ayakkabi'
const url15 = 'https://www.boa.com.tr/ba0037-bagcikli-corcik-kahverengi-klasik-erkek-ayakkabisi'
const url16 = 'https://www.boa.com.tr/ba0037-bagcikli-corcik-taba-klasik-erkek-ayakkabisi'
const url17 = 'https://www.boa.com.tr/ba0037-bagcikli-corcik-mavi-klasik-erkek-ayakkabisi'
const url18 = 'https://www.boa.com.tr/ba0037-bagcikli-corcik-siyah-klasik-spor-erkek-ayakkabi'
const url19 = 'https://www.boa.com.tr/ba0037-bagcikli-corcik-siyah-klasik-erkek-ayakkabisi'
const url20 = 'https://www.boa.com.tr/ba0037-bagcikli-corcik-taba-siyah-klasik-spor-erkek-ayakkabi'
const url21 = 'https://www.boa.com.tr/ba0177-bagcikli-corcik-kahverengi-klasik-erkek-ayakkabisi'
const url22 = 'https://www.boa.com.tr/ba0177-bagcikli-corcik-mavi-klasik-erkek-ayakkabisi'
const url23 = 'https://www.boa.com.tr/ba0177-bagcikli-corcik-siyah-klasik-erkek-ayakkabisi'
const url24 = 'https://www.boa.com.tr/ba0177-bagcikli-corcik-taba-klasik-erkek-ayakkabisi'
const url25 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-lacivert-yuksek-taban-casual-erkek-ayakkabi'
const url26 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-bordo-suet-klasik-puskullu-corcik-erkek-ayakkabi'
const url27 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-lacivert-beyaz-klasik-puskullu-corcik-erkek-ayakkabi'
const url28 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-siyah-beyaz-klasik-puskullu-corcik-erkek-ayakkabi'
const url29 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-klasik-kemerli-puskullu-corcik-erkek-ayakkabi'
const url30 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-siyah-beyaz-taban-rugan-klasik-puskullu-corcik-erkek-ayakkabi'
const url31 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-klasik-rugan-kemerli-puskullu-corcik-erkek-ayakkabi'
const url32 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-klasik-puskullu-corcik-erkek-ayakkabi'
const url33 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-siyah-rugan-klasik-puskullu-corcik-erkek-ayakkabisi'
const url34 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-siyah-rugan-klasik-puskullu-corcik-erkek-ayakkabi'
const url35 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-mat-siyah-klasik-puskullu-corcik-erkek-ayakkabi'
const url36 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-klasik-rugan-kemerli-puskullu-corcik-erkek-ayakkabi'
const url37 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-siyah-klasik-suet-puskullu-corcik-erkek-ayakkabisi'
const url38 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-taba-beyaz-klasik-puskullu-corcik-erkek-ayakkabi'
const url39 = 'https://www.boa.com.tr/index.php?route=product/product&product_id=3191'
const url40 = 'https://www.boa.com.tr/ba0202-bagciksiz-rahat-kalin-taban-siyah-beyaz-erkek-ayakkabi'
const url41 = 'https://www.boa.com.tr/ba0027-no-limits-siyah-beyaz-bagcikli-casual-erkek-spor-ayakkabi'
const url42 = 'https://www.boa.com.tr/ba0027-no-limits-siyah-bagcikli-casual-erkek-spor-ayakkabi'
const url43 = 'https://www.boa.com.tr/ba0031-sneakers-rahat-taban-siyah-beyaz-casual-erkek-ayakkabi'
const url44 = 'https://www.boa.com.tr/ba0031-sneakers-siyah-sari-beyaz-taban-casual-erkek-ayakkabi'
const url45 = 'https://www.boa.com.tr/ba0031-sneakers-beyaz-kirmizi-yuksek-taban-casual-erkek-ayakkabi'
const url46 = 'https://www.boa.com.tr/ba0031-sneakers-siyah-kirmizi-beyaz-taban-casual-erkek-ayakkabi'
const url47 = 'https://www.boa.com.tr/ba0031-sneakers-beyaz-yesil-kalin-taban-casual-erkek-ayakkabi'
const url48 = 'https://www.boa.com.tr/ba0031-sneakers-siyah-yesil-beyaz-taban-casual-erkek-ayakkabi'
const url49 = 'https://www.boa.com.tr/ba0094-no-limits-kalin-taban-bagcikli-beyaz-sari-serit-casual-erkek-spor-yarim-bilek-bot'
const url50 = 'https://www.boa.com.tr/ba0094-no-limits-kalin-taban-bagcikli-siyah-beyaz-serit-casual-erkek-spor-yarim-bilek-bot'
const url51 = 'https://www.boa.com.tr/ba0094-no-limits-bagcikli-taba-siyah-yuksek-taban-beyaz-serit-casual-erkek-spor-yarim-bilek-bot'
const url52 = 'https://www.boa.com.tr/erkek-zr-x700-tarz-beyaz-renk-spor-ayakkabi-'
const url53 = 'https://www.boa.com.tr/erkek-zr-x700-tarz-sari-renk-spor-ayakkabi-'
const url54 = 'https://www.boa.com.tr/erkek-zr-x700-tarz-siyah-renk-spor-ayakkabi-'
const url55 = 'https://www.boa.com.tr/erkek-zr-x700-tarz-siyah-taban-spor-ayakkabi-'
const url56 = 'https://www.boa.com.tr/erkek-zr-x700-tarz-siyah-kirmizi-renk-spor-ayakkabi-'
const url57 = 'https://www.boa.com.tr/ba0111-lastikli-rahat-taban-beyaz-sneakers-erkek-spor-ayakkabi'
const url58 = 'https://www.boa.com.tr/ba0111-renkli-lastikli-rahat-beyaz-taban-sneakers-erkek-spor-ayakkabi'
const url59 = 'https://www.boa.com.tr/ba0111-renkli-lastikli-rahat-siyah-taban-sneakers-erkek-spor-ayakkabi'
const url60 = 'https://www.boa.com.tr/ba0111-gri-rakamli-lastikli-rahat-beyaz-taban-sneakers-erkek-spor-ayakkabi'
const url61 = 'https://www.boa.com.tr/ba0111-gri-rakamli-lastikli-rahat-siyah-taban-sneakers-erkek-spor-ayakkabi'
const url62 = 'https://www.boa.com.tr/ba0111-lastikli-rahat-taban-siyah-beyaz-sneakers-erkek-spor-ayakkabi'
const url63 = 'https://www.boa.com.tr/ba0111-lastikli-rahat-taban-siyah-sneakers-erkek-spor-ayakkabi'
const url64 = 'https://www.boa.com.tr/ba0130-ici-disi-hakiki-deri-siyah-puskullu-corcik-klasik-erkek-ayakkabi'
const url65 = 'https://www.boa.com.tr/ba0131-boa-sneakers-keten-beyaz-siyah-rahat-boost-erkek-ayakkabi-'
const url66 = 'https://www.boa.com.tr/ba0131-boa-sneakers-keten-pudra-rahat-boost-erkek-ayakkabi-'
const url67 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-bebe-mavi-cirtli-kalin-taban-erkek-ayakkabi'
const url68 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-beyaz-cirtli-kalin-taban-erkek-ayakkabi'
const url69 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-beyaz-sari-cirtli-kalin-taban-erkek-ayakkabisi'
const url70 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-beyaz-kirmizi-cirtli-kalin-taban-erkek-ayakkabisi'
const url71 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-beyaz-siyah-cirtli-kalin-taban-erkek-ayakkabisi'
const url72 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-sari-cirtli-kalin-taban-erkek-ayakkabi'
const url73 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-kirmizi-cirtli-kalin-taban-erkek-ayakkabi'
const url74 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-siyah-boyali-cirtli-kalin-taban-erkek-ayakkabi'
const url75 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-siyah-beyaz-cirtli-kalin-taban-erkek-ayakkabisi'
const url76 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-siyah-beyaz-cirtli-kalin-taban-erkek-ayakkabi'
const url77 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-siyah-cirtli-kalin-taban-erkek-ayakkabi'
const url78 = 'https://www.boa.com.tr/ba0138-boa-yuksek-taban-beyaz-siyah-bagcikli-erkek-ayakkabi'
const url79 = 'https://www.boa.com.tr/ba0138-boa-yuksek-taban-siyah-beyaz-bagcikli-erkek-ayakkabi'
const url80 = 'https://www.boa.com.tr/ba0138-boa-yuksek-taban-beyaz-kirmizi-siyah-bagcikli-erkek-ayakkabi'
const url81 = 'https://www.boa.com.tr/ba0138-boa-yuksek-taban-siyah-sax-mavibagcikli-erkek-ayakkabi'
const url82 = 'https://www.boa.com.tr/ba0138-boa-yuksek-taban-siyah-taba-bagcikli-erkek-ayakkabi'
const url83 = 'https://www.boa.com.tr/ba0164-ici-disi-hakiki-deri-kahverengi-puskullu-loefer-klasik-erkek-ayakkabi'
const url84 = 'https://www.boa.com.tr/ba0164-ici-disi-hakiki-deri-siyah-puskullu-loefer-klasik-erkek-ayakkabi'
const url85 = 'https://www.boa.com.tr/ba0164-ici-disi-hakiki-deri-taba-puskullu-loefer-klasik-erkek-ayakkabi'
const url86 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-beyaz-spor-ayakkabi'
const url87 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-beyaz-spor-ayakkabi'
const url88 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-beyaz-siyah-spor-ayakkabi'
const url89 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-siyah-haki-spor-ayakkabi'
const url90 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-siyah-beyaz-taban-spor-ayakkabi'
const url91 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-siyah-beyaz-siyah-taban-spor-ayakkabi'
const url92 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-siyah-kirmizi-spor-ayakkabi'
const url93 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-siyah-spor-ayakkabi'
const url94 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-siyah-taba-spor-ayakkabi'
const url95 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-taba-spor-ayakkabi'
const url96 = 'https://www.boa.com.tr/ba0161-bagcikli-erkek-yuksek-taban-beyaz-spor-ayakkabi'
const url97 = 'https://www.boa.com.tr/ba0161-bagcikli-erkek-yuksek-taban-krem-spor-ayakkabi'
const url98 = 'https://www.boa.com.tr/ba0161-bagcikli-erkek-yuksek-taban-taba-spor-ayakkabi'
const url99 = 'https://www.boa.com.tr/ba0161-bagcikli-erkek-yuksek-taban-sari-spor-ayakkabi'
const url100 = 'https://www.boa.com.tr/ba0161-bagcikli-erkek-yuksek-taban-kirmizi-spor-ayakkabi'
const url101 = 'https://www.boa.com.tr/ba0161-bagcikli-erkek-yuksek-taban-siyah-beyaz-spor-ayakkabi'
const url102 = 'https://www.boa.com.tr/ba0161-bagcikli-erkek-yuksek-taban-siyah-spor-ayakkabi'
const url103 = 'https://www.boa.com.tr/ba0162-bagcikli-erkek-model-dikisli-yuksek-taban-beyaz-spor-ayakkabi'
const url104 = 'https://www.boa.com.tr/ba0162-bagcikli-erkek-model-dikisli-yuksek-taban-krem-spor-ayakkabi'
const url105 = 'https://www.boa.com.tr/ba0162-bagcikli-erkek-model-dikisli-yuksek-taban-taba-spor-ayakkabi'
const url106 = 'https://www.boa.com.tr/ba0162-bagcikli-erkek-model-dikisli-yuksek-taban-sari-spor-ayakkabi'
const url107 = 'https://www.boa.com.tr/ba0162-bagcikli-erkek-model-dikisli-yuksek-taban-siyah-spor-ayakkabi'
const url108 = 'https://www.boa.com.tr/ba0163-bagcikli-erkek-yuksek-taban-beyaz-spor-ayakkabi'
const url109 = 'https://www.boa.com.tr/ba0163-bagcikli-erkek-yuksek-taban-beyaz-siyah-spor-ayakkabi'
const url110 = 'https://www.boa.com.tr/ba0163-bagcikli-erkek-yuksek-taban-siyah-kirmizi-spor-ayakkabi'
const url111 = 'https://www.boa.com.tr/ba0163-bagcikli-erkek-yuksek-taban-siyah-beyaz-spor-ayakkabi'
const url112 = 'https://www.boa.com.tr/ba0163-bagcikli-erkek-yuksek-taban-siyah-haki-spor-ayakkabi'
const url113 = 'https://www.boa.com.tr/ba0163-bagcikli-erkek-yuksek-taban-siyah-spor-ayakkabi'
const url114 = 'https://www.boa.com.tr/ba0163-bagcikli-erkek-yuksek-taban-siyah-taba-spor-ayakkabi'
const url115 = 'https://www.boa.com.tr/ba0163-bagcikli-erkek-yuksek-taban-taba-spor-ayakkabi'
const url116 = 'https://www.boa.com.tr/ba0167-kalin-taban-tarz-sneakers-gri-erkek-spor-ayakkabisi'
const url117 = 'https://www.boa.com.tr/ba0167-kalin-taban-tarz-sneakers-kirmizi-erkek-spor-ayakkabisi'
const url118 = 'https://www.boa.com.tr/ba0167-kalin-taban-tarz-sneakers-mavi-erkek-spor-ayakkabisi'
const url119 = 'https://www.boa.com.tr/ba0167-kalin-taban-tarz-sneakers-siyah-kirmizi-erkek-spor-ayakkabisi'
const url120 = 'https://www.boa.com.tr/ba0167-kalin-taban-tarz-sneakers-siyah-erkek-spor-ayakkabisi'
const url121 = 'https://www.boa.com.tr/ba0167-kalin-taban-tarz-sneakers-vizon-erkek-spor-ayakkabisi'
const url122 = 'https://www.boa.com.tr/ba0169-bagcikli-beyaz-mavi-yuksek-taban-erkek-ayakkabisi'
const url123 = 'https://www.boa.com.tr/ba0169-bagcikli-beyaz-sari-yuksek-taban-erkek-ayakkabisi'
const url124 = 'https://www.boa.com.tr/ba0169-bagcikli-beyaz-siyah-parcali-yuksek-taban-erkek-ayakkabisi'
const url125 = 'https://www.boa.com.tr/ba0169-bagcikli-siyah-kirmizi-yuksek-taban-erkek-ayakkabisi'
const url126 = 'https://www.boa.com.tr/ba0169-bagcikli-siyah-sari-yuksek-taban-erkek-ayakkabisi'
const url127 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-beyaz-gri-yuksek-taban-erkek-ayakkabisi'
const url128 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-beyaz-kirmizi-yuksek-taban-erkek-ayakkabisi'
const url129 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-beyaz-mavi-parcali-yuksek-taban-erkek-ayakkabisi'
const url130 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-beyaz-sari-parcali-yuksek-taban-erkek-ayakkabisi'
const url131 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-beyaz-sari-yuksek-taban-erkek-ayakkabisi'
const url132 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-beyaz-siyah-yuksek-taban-erkek-ayakkabisi'
const url133 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-siyah-kirmizi-yuksek-taban-erkek-ayakkabisi'
const url134 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-siyah-beyaz-yuksek-taban-erkek-ayakkabisi'
const url135 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-siyah-sari-yuksek-taban-erkek-ayakkabisi'
const url136 = 'https://www.boa.com.tr/ba0173-kalin-taban-lastikli-tarz-sneakers-gri-erkek-spor-ayakkabisi'
const url137 = 'https://www.boa.com.tr/ba0173-kalin-taban-lastikli-tarz-sneakers-haki-erkek-spor-ayakkabisi'
const url138 = 'https://www.boa.com.tr/ba0173-kalin-taban-lastikli-tarz-sneakers-lacivert-erkek-spor-ayakkabisi'
const url139 = 'https://www.boa.com.tr/ba0173-kalin-taban-lastikli-tarz-sneakers-siyah-erkek-spor-ayakkabisi'
const url140 = 'https://www.boa.com.tr/ba0173-kalin-taban-lastikli-tarz-sneakers-siyah-beyaz-taban-erkek-spor-ayakkabisi'
const url141 = 'https://www.boa.com.tr/ba0175-yuksek-taban-casual-bagcikli-beyaz-sneakers-erkek-ayakkabi'
const url142 = 'https://www.boa.com.tr/ba0175-yuksek-taban-casual-bagcikli-gri-sneakers-erkek-ayakkabi'
const url143 = 'https://www.boa.com.tr/ba0175-yuksek-taban-casual-bagcikli-haki-sneakers-erkek-ayakkabi'
const url144 = 'https://www.boa.com.tr/ba0175-yuksek-taban-casual-bagcikli-lacivert-sneakers-erkek-ayakkabi'
const url145 = 'https://www.boa.com.tr/ba0175-yuksek-taban-casual-bagcikli-siyah-sneakers-erkek-ayakkabi'
const url146 = 'https://www.boa.com.tr/ba0179-3-bantli-beyaz-kirmizi-yuksek-taban-erkek-ayakkabisi'
const url147 = 'https://www.boa.com.tr/ba0179-3-bantli-beyaz-siyah-yuksek-taban-erkek-ayakkabisi'
const url148 = 'https://www.boa.com.tr/ba0179-3-bantli-siyah-yuksek-taban-erkek-ayakkabisi'
const url149 = 'https://www.boa.com.tr/ba0179-3-bantli-siyah-kirmizi-yuksek-taban-erkek-ayakkabisi'
const url150 = 'https://www.boa.com.tr/ba0179-3-bantli-siyah-sari-yuksek-taban-erkek-ayakkabisi'
const url151 = 'https://www.boa.com.tr/ba0179-3-bantli-siyah-siyah-yuksek-taban-erkek-ayakkabisi'
const url152 = 'https://www.boa.com.tr/ba0180-bagcikli-kapitone-desenli-beyaz-yuksek-taban-erkek-ayakkabisi'
const url153 = 'https://www.boa.com.tr/ba0180-bagcikli-kapitone-desenli-beyaz-kirmizi-yuksek-taban-erkek-ayakkabisi'
const url154 = 'https://www.boa.com.tr/ba0180-bagcikli-kapitone-desenli-siyah-kirmizi-yuksek-taban-erkek-ayakkabisi'
const url155 = 'https://www.boa.com.tr/ba0180-bagcikli-kapitone-desenli-siyah-yuksek-taban-erkek-ayakkabisi'
const url156 = 'https://www.boa.com.tr/ba0202-bagciksiz-rahat-kalin-taban-antrasit-erkek-casual-ayakkabi'
const url157 = 'https://www.boa.com.tr/ba0202-bagcikz-rahat-kalin-taban-beyaz-erkek-spor-ayakkabi'
const url158 = 'https://www.boa.com.tr/ba0202-bagciksiz-rahat-kalin-taban-gri-erkek-ayakkabi'
const url159 = 'https://www.boa.com.tr/ba0202-bagciksiz-rahat-kalin-taban-kirmizi-erkek-spor-ayakkabi'
const url160 = 'https://www.boa.com.tr/ba0601-bagcikli-rahat-yuksek-taban-beyaz-casual-erkek-spor-ayakkabi'
const url161 = 'https://www.boa.com.tr/ba0601-bagcikli-rahat-kalin-taban-camel-sari-beyaz-erkek-spor-ayakkabi'
const url162 = 'https://www.boa.com.tr/ba0601-bagcikli-rahat-kalin-taban-camel-sari-siyah-erkek-spor-ayakkabi'
const url163 = 'https://www.boa.com.tr/ba0601-bagcikli-rahat-yuksek-taban-siyah-beyaz-casual-erkek-spor-ayakkabi'
const url164 = 'https://www.boa.com.tr/ba0601-bagcikli-rahat-yuksek-taban-siyah-casual-erkek-spor-ayakkabi'
const url165 = 'https://www.boa.com.tr/ba0606-bagcikli-rahat-yuksek-taban-beyaz-casual-erkek-spor-ayakkabi'
const url166 = 'https://www.boa.com.tr/ba0606-bagcikli-rahat-yuksek-taban-haki-casual-erkek-spor-ayakkabi'
const url167 = 'https://www.boa.com.tr/ba0606-bagcikli-rahat-yuksek-taban-siyah-casual-erkek-spor-ayakkabi'
const url168 = 'https://www.boa.com.tr/ba0606-bagcikli-rahat-yuksek-taban-siyah-kircilli-casual-erkek-spor-ayakkabi'
const url169 = 'https://www.boa.com.tr/ba0606-bagcikli-rahat-yuksek-taban-siyah-taban-casual-erkek-spor-ayakkabi'
const url170 = 'https://www.boa.com.tr/ba0009-boa-klasik-corcik-puskullu-desenli-lacivert-erkek-ayakkabi'
const url171 = 'https://www.boa.com.tr/ba0009-boa-klasik-corcik-lacivert-erkek-ayakkabi'
const url172 = 'https://www.boa.com.tr/ba0009-boa-klasik-corcik-suet-puskullu-lacivert-erkek-ayakkabi'
const url173 = 'https://www.boa.com.tr/ba0009-boa-klasik-corcik-suet-lacivert-erkek-ayakkabi'
const url174 = 'https://www.boa.com.tr/ba0009-puskullu-corcik-lacivert-klasik-erkek-ayakkabisi'
const url175 = 'https://www.boa.com.tr/ba0009-boa-klasik-corcik-cilt-puskullu-lacivert-erkek-ayakkabi'
const url176 = 'https://www.boa.com.tr/ba0009-corcik-siyah-cilt-klasik-erkek-ayakkabisi'
const url177 = 'https://www.boa.com.tr/ba0009-puskullu-corcik-siyah-klasik-erkek-ayakkabisi'
const url178 = 'https://www.boa.com.tr/ba0009-puskullu-corcik-siyah-cilt-klasik-erkek-ayakkabisi'
const url179 = 'https://www.boa.com.tr/ba0009-corcik-siyah-klasik-erkek-ayakkabisi'
const url180 = 'https://www.boa.com.tr/ba0009-rugan-corcik-siyah-klasik-erkek-ayakkabisi'
const url181 = 'https://www.boa.com.tr/ba0009-rugan-puskullu-corcik-siyah-klasik-erkek-ayakkabisi'
const url182 = 'https://www.boa.com.tr/ba0009-suet-corcik-siyah-klasik-erkek-ayakkabisi'
const url183 = 'https://www.boa.com.tr/ba0009-suet-puskullu-corcik-siyah-klasik-erkek-ayakkabisi'
const url184 = 'https://www.boa.com.tr/ba0009-puskullu-corcik-taba-klasik-erkek-ayakkabisi'
const url185 = 'https://www.boa.com.tr/ba0009-boa-klasik-corcik-puskullu-desenli-taba-erkek-ayakkabi'
const url186 = 'https://www.boa.com.tr/ba0009-boa-klasik-corcik-taba-erkek-ayakkabi'
const url187 = 'https://www.boa.com.tr/ba0045-gizli-bagcikli-bordo-suet-siyah-taban-casual-erkek-spor-klasik-yarim-bilek-bot'
const url188 = 'https://www.boa.com.tr/ba0045-gizli-bagcikli-haki-yesil-suet-siyah-taban-casual-erkek-spor-klasik-yarim-bilek-bot'
const url189 = 'https://www.boa.com.tr/ba0045-gizli-bagcik-kahverengi-casual-erkek-spor-klasik-yarim-bilek-bot'
const url190 = 'https://www.boa.com.tr/ba0045-gizli-bagcikli-suet-laci-erkek-spor-klasik-yarim-bilek-bot'
const url191 = 'https://www.boa.com.tr/ba0045-gizli-bagcik-siyah-casual-erkek-spor-klasik-yarim-bilek-bot'
const url192 = 'https://www.boa.com.tr/ba0045-gizli-bagcikli-suet-siyah-erkek-spor-klasik-yarim-bilek-bot'
const url193 = 'https://www.boa.com.tr/ba0045-gizli-bagcik-taba-kahve-casual-erkek-spor-klasik-yarim-bilek-bot'
const url194 = 'https://www.boa.com.tr/ba0045-gizli-bagcikli-taba-suet-siyah-taban-casual-erkek-spor-klasik-yarim-bilek-bot'
const url195 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-bordo-erkek-yarim-bilek-bot'
const url196 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-suet-haki-yesil-erkek-yarim-bilek-bot'
const url197 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-cilt-kahve-erkek-yarim-bilek-bot'
const url198 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-kahverengi-erkek-yarim-bilek-bot'
const url199 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-lacivert-erkek-yarim-bilek-bot'
const url200 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-set-laci-erkek-yarim-bilek-bot'
const url201 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-cilt-siyah-erkek-yarim-bilek-bot'
const url202 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-suet-siyah-erkek-yarim-bilek-bot'
const url203 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-cilt-taba-erkek-yarim-bilek-bot'
const url204 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-suet-taba-eskitme-erkek-yarim-bilek-bot'
const url205 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-eskitme-vizon-suet-siyah-taban-erkek-yarim-bilek-bot'
const url206 = 'https://www.boa.com.tr/ba0080-kartal-fermuarli-tokali-siyah-erkek-klasik-spor-klasik-yarim-bilek-bot'
const url207 = 'https://www.boa.com.tr/index.php?route=product/product&product_id=3510'
const url208 = 'https://www.boa.com.tr/index.php?route=product/product&product_id=3514'
const url209 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-beyaz-spor-bot'
const url210 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-beyaz-siyah-spor-bot'
const url211 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-graffiti-spor-bot'
const url212 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-haki-spor-bot'
const url213 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-krem-spor-bot'
const url214 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-kirmizi-spor-bot'
const url215 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-siyah-spor-bot'
const url216 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-siyah-tabanli-spor-bot'
const url217 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-kahverengi-spor-bot'
const url218 = 'https://www.boa.com.tr/ba0151-ici-kurklu-bagcikli-beyaz-erkek-tarz-spor-bot'
const url219 = 'https://www.boa.com.tr/ba0151-ici-kurklu-bagcikli-erkek-tarz-spor-bot'
const url220 = 'https://www.boa.com.tr/ba0151-ici-kurklu-bagcikli-erkek-tarz-siyah-spor-bot'
const url221 = 'https://www.boa.com.tr/ba0151-ici-kurklu-bagcikli-vizon-erkek-tarz-spor-bot'
const url222 = 'https://www.boa.com.tr/ba0151-ici-kurklu-bagcikli-taba-erkek-tarz-spor-bot'
const url223 = 'https://www.boa.com.tr/ba0155-bagcikli-erkek-yuksek-taban-beyaz-spor-bot'
const url224 = 'https://www.boa.com.tr/ba0155-bagcikli-erkek-yuksek-taban-beyaz-siyah-taban-spor-bot'
const url225 = 'https://www.boa.com.tr/ba0155-bagcikli-erkek-yuksek-taban-haki-spor-bot'
const url226 = 'https://www.boa.com.tr/ba0155-bagcikli-erkek-yuksek-taban-kirmizi-spor-bot'
const url227 = 'https://www.boa.com.tr/index.php?route=product/product&product_id=2734'
const url228 = 'https://www.boa.com.tr/ba0155-bagcikli-erkek-yuksek-taban-siyah-beyaz-siyah-taban-spor-bot'
const url229 = 'https://www.boa.com.tr/ba0155-bagcikli-erkek-yuksek-taban-siyah-beyaz-spor-bot'
const url230 = 'https://www.boa.com.tr/ba0155-bagcikli-erkek-yuksek-taban-siyah-spor-bot'
const url231 = 'https://www.boa.com.tr/ba0155-bagcikli-erkek-yuksek-taban-taba-spor-bot'
const url232 = 'https://www.boa.com.tr/ba0159-bagcikli-beyaz-kapitone-erkek-yuksek-taban-spor-bot'
const url233 = 'https://www.boa.com.tr/ba0159-bagcikli-beyaz-kapitone-siyah-taban-erkek-yuksek-taban-spor-bot'
const url234 = 'https://www.boa.com.tr/ba0159-bagcikli-haki-kapitone-erkek-yuksek-taban-spor-bot'
const url235 = 'https://www.boa.com.tr/ba0159-bagcikli-kirmizi-kapitone-erkek-yuksek-taban-spor-bot-'
const url236 = 'https://www.boa.com.tr/ba0159-bagcikli-siyah-beyaz-kapitone-erkek-yuksek-taban-spor-bot'
const url237 = 'https://www.boa.com.tr/ba0159-bagcikli-siyah-kapitone-erkek-yuksek-taban-spor-bot'
const url238 = 'https://www.boa.com.tr/ba0159-bagcikli-taba-kapitone-erkek-yuksek-taban-spor-bot'
const url239 = 'https://www.boa.com.tr/ba0182-ici-disi-hakiki-deri-siyah-erkek-spor-yarim-bilek-bot'
const url240 = 'https://www.boa.com.tr/index.php?route=product/product&product_id=3475'
const url241 = 'https://www.boa.com.tr/ba0183-ici-disi-hakiki-deri-taba-erkek-postal-bot'
const url242 = 'https://www.boa.com.tr/ba0184-ici-disi-hakiki-deri-kahverengi-erkek-fermuarli-yarim-bot'
const url243 = 'https://www.boa.com.tr/ba0184-ici-disi-hakiki-deri-siyah-erkek-fermuarli-yarim-bot'
const url244 = 'https://www.boa.com.tr/ba0184-ici-disi-hakiki-deri-taba-erkek-fermuarli-yarim-bot'
const url245 = 'https://www.boa.com.tr/ba0185-ici-disi-hakiki-deri-kahve-erkek-postal-bot'
const url246 = 'https://www.boa.com.tr/ba0185-ici-disi-hakiki-deri-siyah-erkek-fermuarli-yarim-bot'
const url247 = 'https://www.boa.com.tr/ba0185-ici-disi-hakiki-deri-taba-erkek-postal-bot'
const url248 = 'https://www.boa.com.tr/ba0186-fermuarli-tokali-kahverengi-erkek-klasik-spor-klasik-yarim-bilek-bot'
const url249 = 'https://www.boa.com.tr/ba0186-fermuarli-tokali-siyah-erkek-klasik-spor-klasik-yarim-bilek-bot'
const url250 = 'https://www.boa.com.tr/ba0186-fermuarli-tokali-taba-erkek-klasik-spor-klasik-yarim-bilek-bot'
const url251 = 'https://www.boa.com.tr/ba0187-ici-disi-hakiki-deri-siyah-erkek-fermuarli-yarim-bot'
const url252 = 'https://www.boa.com.tr/ba0188-ici-disi-hakiki-deri-siyah-erkek-fermuarli-yarim-bot'
const url253 = 'https://www.boa.com.tr/ba0600-bagcikli-haki-kamuflaj-boksor-unisex-spor-postal-bot'
const url254 = 'https://www.boa.com.tr/ba0600-bagcikli-beyaz-yuksek-taban-boksor-unisex-spor-postal-bot'
const url255 = 'https://www.boa.com.tr/ba0600-bagcikli-camel-sari-boksor-unisex-spor-postal-bot'
const url256 = 'https://www.boa.com.tr/ba0600-bagcikli-siyah-kamuflaj-boksor-unisex-spor-postal-bot'
const url257 = 'https://www.boa.com.tr/index.php?route=product/product&product_id=3513'
const url258 = 'https://www.boa.com.tr/ba0600-bagcikli-siyah-yuksek-taban-boksor-unisex-spor-postal-bot'
const url259 = 'https://www.boa.com.tr/ba0600-bagcikli-siyah-nubuk-yuksek-taban-boksor-unisex-spor-postal-bot'
const url260 = 'https://www.boa.com.tr/ba0001-fly-rahat-yuksek-taban-beyaz-erkek-spor-ayakkabisi'
const url261 = 'https://www.boa.com.tr/ba0001-fly-rahat-yuksek-taban-gri-erkek-spor-ayakkabi'
const url262 = 'https://www.boa.com.tr/ba0001-fly-rahat-yuksek-taban-kirmizi-erkek-spor-ayakkabi'
const url263 = 'https://www.boa.com.tr/ba0001-fly-rahat-yuksek-taban-lacivert-erkek-spor-ayakkabi'
const url264 = 'https://www.boa.com.tr/ba0001-fly-rahat-yuksek-taban-lacivert-erkek-spor-ayakkabi'
const url265 = 'https://www.boa.com.tr/ba0001-fly-rahat-yuksek-taban-siyah-erkek-spor-ayakkabi'
const url266 = 'https://www.boa.com.tr/ba0026-3-bant-beyaz-kalin-taban-casual-erkek-ayakkabi'
const url267 = 'https://www.boa.com.tr/ba0026-3-bant-gri-yuksek-beyaz-taban-casual-erkek-ayakkabi'
const url268 = 'https://www.boa.com.tr/ba0026-3-bant-haki-beyaz-kalin-taban-casual-erkek-ayakkabi'
const url269 = 'https://www.boa.com.tr/ba0026-3-bant-haki-yesil-kalin-taban-casual-erkek-ayakkabi'
const url270 = 'https://www.boa.com.tr/ba0026-3-bant-haki-siyah-kalin-taban-casual-erkek-ayakkabi'
const url271 = 'https://www.boa.com.tr/ba0026-3-bant-kirmizi-beyaz-kalin-taban-casual-erkek-ayakkabi'
const url272 = 'https://www.boa.com.tr/ba0026-3-bant-kirmizi-kalin-taban-casual-erkek-ayakkabi'
const url273 = 'https://www.boa.com.tr/ba0026-3-bant-lacivert-beyaz-kalin-taban-casual-erkek-ayakkabi'
const url274 = 'https://www.boa.com.tr/ba0026-3-bant-sari-beyaz-yuksek-taban-casual-erkek-ayakkabi'
const url275 = 'https://www.boa.com.tr/ba0026-3-bant-sari-kalin-taban-casual-erkek-ayakkabi'
const url276 = 'https://www.boa.com.tr/ba0026-3-bant-siyah-beyaz-kalin-taban-casual-erkek-ayakkabi'
const url277 = 'https://www.boa.com.tr/ba0026-3-bant-siyah-yuksek-taban-casual-erkek-ayakkabi'
const url278 = 'https://www.boa.com.tr/ba0026-3-bant-taba-beyaz-kalin-taban-casual-erkek-ayakkabi'
const url279 = 'https://www.boa.com.tr/ba0026-3-bant-taba-siyah-kalin-taban-casual-erkek-ayakkabi'
const url280 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-gri-yuksek-taban-yarim-bilek-bot'
const url281 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-beyaz-yuksek-taban-yarim-bilek-bot'
const url282 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-haki-kalin-beyaz-taban-yarim-bilek-bot'
const url283 = 'https://www.boa.com.tr/ba0202-bagciksiz-rahat-kalin-taban-bordo-erkek-casual-ayakkabi'
const url284 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-sari-yuksek-taban-yarim-bilek-bot'
const url285 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-kirmizi-yuksek-taban-yarim-bilek-bot'
const url286 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-lacivert-yuksek-taban-yarim-bilek-bot'
const url287 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-siyah-yuksek-taban-yarim-bilek-bot'
const url288 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-siyah-yuksek-taban-yarim-bilek-bot-3'
const url289 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-taba-kalin-beyaz-taban-yarim-bilek-bot'
const url290 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-taba-kalin-siyah-taban-yarim-bilek-bot'
const url291 = 'https://www.boa.com.tr/ba0181-boa-bagcikli-snekaers-siyah-yuksek-taban-yarim-bilek-bot'
const url292 = 'https://www.boa.com.tr/ba0181-boa-bagcikli-snekaers-taba-siyah-yuksek-taban-yarim-bilek-bot'
const url293 = 'https://www.boa.com.tr/ba0053-bagcikli-fermuarli-yesil-kamuflaj-erkek-spor-postal-bot'
const url294 = 'https://www.boa.com.tr/ba0053-bagcikli-fermuarli-cavus-siyah-erkek-spor-postal-bot'
const url295 = 'https://www.boa.com.tr/ba0053-bagcikli-fermuarli-rutbeli-erkek-spor-postal-bot'
const url296 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-spor-keten-gri-beyaz-yuksek-taban-casual-erkek-ayakkabi'
const url297 = 'https://www.boa.com.tr/ba0098-boa-bagcikli-rahat-yuksek-taban-beyaz-sneakers-spor-ayakkabi'
const url298 = 'https://www.boa.com.tr/ba0139-ici-disi-hakiki-deri-beyaz-sneakers-erkek-ayakkabi'
const url299 = 'https://www.boa.com.tr/ba0139-ici-disi-hakiki-deri-beyaz-gri-sneakers-erkek-ayakkabi'
const url300 = 'https://www.boa.com.tr/ba0139-ici-disi-hakiki-deri-beyaz-sari-sneakers-erkek-ayakkabi'
const url301 = 'https://www.boa.com.tr/ba0139-ici-disi-hakiki-deri-beyaz-lacivsneakers-erkek-ayakkabi'
const url302 = 'https://www.boa.com.tr/ba0152-boa-kalin-yuksek-taban-sut-beyaz-kemerli-erkek-spor-ayakkabi'
const url303 = 'https://www.boa.com.tr/ba0152-boa-kalin-yuksek-taban-beyaz-kemerli-erkek-spor-ayakkabi'
const url304 = 'https://www.boa.com.tr/ba0152-boa-kalin-yuksek-taban-kirmizi-kemerli-erkek-spor-ayakkabi'
const url305 = 'https://www.boa.com.tr/ba0152-boa-kalin-yuksek-taban-siyah-kemerli-erkek-spor-ayakkabi'
const url306 = 'https://www.boa.com.tr/ba0152-boa-kalin-yuksek-taban-taba-kemerli-erkek-spor-ayakkabi'
const url307 = 'https://www.boa.com.tr/ba0301-bagcikli-kalin-taban-beyaz-casual-erkek-ayakkabi'
const url308 = 'https://www.boa.com.tr/ba0301-bagcikli-kalin-taban-siyah-casual-erkek-ayakkabi'
const url309 = 'https://www.boa.com.tr/ba0062-puskullu-corcik-bordo-klasik-rugan-erkek-kadin-unisex-ayakkabi'
const url310 = 'https://www.boa.com.tr/ba0062-puskullu-corcik-suet-bordo-klasik-erkek-kadin-unisex-ayakkabisi'
const url311 = 'https://www.boa.com.tr/ba0062-puskullu-corcik-lacivert-rugan-klasik-erkek-kadin-unisex-ayakkabi'
const url312 = 'https://www.boa.com.tr/ba0062-puskullu-corcik-suet-lacivert-klasik-erkek-kadin-unisex-ayakkabisi'
const url313 = 'https://www.boa.com.tr/ba0062-puskullu-mat-siyah-corcik-klasik-ayakkabi'
const url314 = 'https://www.boa.com.tr/ba0062-puskullu-corcik-siyah-rugan-klasik-erkek-kadin-unisex-ayakkabi'
const url315 = 'https://www.boa.com.tr/ba0062-puskullu-corcik-suet-siyah-klasik-erkek-kadin-unisex-ayakkabisi'
const url316 = 'https://www.boa.com.tr/ba0602-phantom-yuksek-taban-tarz-sneakers-beyaz-erkek-spor-ayakkabisi'
const url317 = 'https://www.boa.com.tr/ba0602-phantom-yuksek-taban-tarz-sneakers-fume-beyaz-erkek-spor-ayakkabi'
const url318 = 'https://www.boa.com.tr/ba0602-phantom-yuksek-taban-tarz-sneakers-gri-erkek-spor-ayakkabi'
const url319 = 'https://www.boa.com.tr/ba0602-phantom-yuksek-taban-tarz-sneakers-gri-beyaz-erkek-spor-ayakkabisi'
const url320 = 'https://www.boa.com.tr/ba0602-phantom-kalin-taban-tarz-sneakers-sari-erkek-spor-ayakkabisi'
const url321 = 'https://www.boa.com.tr/ba0602-phantom-yuksek-taban-tarz-sneakers-kirmizi-erkek-spor-ayakkabisi'
const url322 = 'https://www.boa.com.tr/ba0602-phantom-yuksek-taban-tarz-sneakers-mint-yesil-erkek-spor-ayakkabisi'
const url323 = 'https://www.boa.com.tr/ba0602-phantom-yuksek-taban-tarz-sneakers-siyah-beyaz-erkek-spor-ayakkabisi'
const url324 = 'https://www.boa.com.tr/ba0602-phantom-kalin-taban-tarz-sneakers-siyah-erkek-spor-ayakkabisi'
const url325 = 'https://www.boa.com.tr/ba0191-ici-disi-hakiki-deri-kahvrengi-erkek-klasik-fermuarli-yarim-bilek-bot'
const url326 = 'https://www.boa.com.tr/ba0191-ici-disi-hakiki-deri-siyah-erkek-klasik-fermuarli-yarim-bilek-bot'
const url327 = 'https://www.boa.com.tr/ba0191-ici-disi-hakiki-deri-siyah-erkek-klasik-bagcikli-fermuarli-yarim-bilek-bot'
const url328 = 'https://www.boa.com.tr/ba0191-ici-disi-hakiki-deri-taba-erkek-klasik-fermuarli-yarim-bilek-bot'
const url329 = 'https://www.boa.com.tr/ba0048-bagcikli-yesil-suet-casual-erkek-spor-klasik-yarim-bilek-bot'
const url330 = 'https://www.boa.com.tr/ba0048-bagcikli-kahve-cilt-casual-erkek-spor-klasik-yarim-bilek-bot'
const url331 = 'https://www.boa.com.tr/ba0048-bagcikli-kahve-suet-casual-erkek-spor-klasik-yarim-bilek-bot'
const url332 = 'https://www.boa.com.tr/ba0048-bagcikli-lacivert-casual-erkek-spor-klasik-yarim-bilek-bot'
const url333 = 'https://www.boa.com.tr/ba0048-bagcikli-lacivert-suet-casual-erkek-spor-klasik-yarim-bilek-bot'
const url334 = 'https://www.boa.com.tr/ba0048-bagcikli-siyah-casual-erkek-spor-klasik-yarim-bilek-bot'
const url335 = 'https://www.boa.com.tr/ba0048-bagcikli-siyah-suet-casual-erkek-spor-klasik-yarim-bilek-bot'
const url336 = 'https://www.boa.com.tr/ba0048-bagcikli-taba-casual-erkek-spor-klasik-yarim-bilek-bot'
const url337 = 'https://www.boa.com.tr/ba0048-bagcikli-taba-suet-casual-erkek-spor-klasik-yarim-bilek-bot'
const url338 = 'https://www.boa.com.tr/ba0054-bagcikli-fermuarli-siyah-erkek-spor-postal-bot'
const url339 = 'https://www.boa.com.tr/ba0054-bagcikli-fermuarli-kahverengi-erkek-spor-postal-bot'
const url340 = 'https://www.boa.com.tr/ba0150-bagciksiz-bantli-erkek-yuksek-taban-bej-spor-bot'
const url341 = 'https://www.boa.com.tr/ba0150-bagciksiz-bantli-erkek-yuksek-taban-beyaz-spor-bot'
const url342 = 'https://www.boa.com.tr/ba0150-bagciksiz-bantli-erkek-yuksek-taban-beyaz-siyah-taban-spor-bot'
const url343 = 'https://www.boa.com.tr/ba0150-bagciksiz-bantli-erkek-yuksek-taban-kirmizi-spor-bot'
const url344 = 'https://www.boa.com.tr/ba0150-bagciksiz-bantli-erkek-yuksek-taban-siyah-spor-bot'
const url345 = 'https://www.boa.com.tr/ba0150-bagciksiz-bantli-erkek-yuksek-taban-siyah-taban-spor-bot'
const url346 = 'https://www.boa.com.tr/ba0192-bagcikli-erkek-yuksek-taban-fume-siyah-taban-spor-bot'
const url347 = 'https://www.boa.com.tr/ba0192-bagcikli-erkek-yuksek-taban-siyah-taban-spor-bot'
const url348 = 'https://www.boa.com.tr/ba0192-bagcikli-erkek-yuksek-taban-siyah-beyaz-spor-bot'
const url349 = 'https://www.boa.com.tr/ba0104-bagcikli-beyaz-cilt-deri-spor-klasik-erkek-ayakkabi'
const url350 = 'https://www.boa.com.tr/ba0104-bagcikli-nubuk-gri-siyah-taban-spor-klasik-erkek-ayakkabi'
const url351 = 'https://www.boa.com.tr/ba0104-bagcikli-nubuk-gri-beyaz-taban-spor-klasik-erkek-ayakkabi'
const url352 = 'https://www.boa.com.tr/ba0104-bagcikli-nubuk-kum-beji-spor-klasik-erkek-ayakkabi'
const url353 = 'https://www.boa.com.tr/ba0104-bagcikli-nubuk-spor-klasik-siyah-erkek-ayakkabi'
const url354 = 'https://www.boa.com.tr/ba0104-bagcikli-nubuk-siyah-spor-klasik-erkek-ayakkabi'
const url355 = 'https://www.boa.com.tr/ba0104-bagcikli-siyah-ekose-suet-siyah-taban-spor-klasik-erkek-ayakkabi'
const url356 = 'https://www.boa.com.tr/ba0104-bagcikli-taba-suet-beyaz-taban-spor-klasik-erkek-ayakkabi'
const url357 = 'https://www.boa.com.tr/ba0104-bagcikli-taba-ekose-spor-klasik-erkek-ayakkabi'
const url358 = 'https://www.boa.com.tr/ba0104-bagcikli-taba-ekose-suet-siyah-taban-spor-klasik-erkek-ayakkabi'
const url359 = 'https://www.boa.com.tr/ba0104-bagcikli-taba-suet-siyah-taban-spor-klasik-erkek-ayakkabi'
const url360 = 'https://www.boa.com.tr/ba0104-bagcikli-vizon-suet-beyaz-taban-spor-klasik-erkek-ayakkabi'
const url361 = 'https://www.boa.com.tr/ba0104-bagcikli-nubuk-yesil-beyaz-taban-suet-spor-klasik-erkek-ayakkabi'


async function boaStok() {
  await console.log(chalk.bold.bgGreen('The Process Started...'))
  // MDSH003BYZBT
  await axios(url1).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZBT40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZBT41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZBT42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZBT43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZBT44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSH003GRİKTNBT
  await axios(url2).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003GRİKTNBT40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003GRİKTNBT41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003GRİKTNBT42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003GRİKTNBT43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003GRİKTNBT44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSH003HRDKTNBT
  await axios(url3).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003HRDKTNBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003HRDKTNBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003HRDKTNBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003HRDKTNBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003HRDKTNBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003KRMZBTSUET
  await axios(url4).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003KRMZBTSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003KRMZBTSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003KRMZBTSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003KRMZBTSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003KRMZBTSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // // MDSH003LCVRTRGNBT
  // await axios(url5).then(response => {
  //   const html = response.data;
  //   const $ = cheerio.load(html)
  //   const data = loadNotes()

  //   $('#bedensecin > a:nth-of-type(1)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSH003LCVRTRGNBT40',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(2)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSH003LCVRTRGNBT41',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(3)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSH003LCVRTRGNBT42',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(4)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSH003LCVRTRGNBT43',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(5)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSH003LCVRTRGNBT44',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  // })

  // MDSH003SYHBTCLT
  await axios(url6).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003SYHBTRGN
  await axios(url7).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTRGN40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTRGN41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTRGN42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTRGN43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTRGN44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003SYHBTSUET
  await axios(url8).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003SYHRGNDSNBT
  await axios(url9).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003SYHRGNDSNST
  await axios(url10).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003SYHRGNST
  await axios(url11).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003SYHST
  await axios(url12).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003SYHSUETST
  await axios(url13).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHSUETST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHSUETST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHSUETST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHSUETST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHSUETST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003TABABT
  await axios(url14).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003TABABT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003TABABT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003TABABT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003TABABT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003TABABT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH037KHVKT
  await axios(url15).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KHVKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KHVKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KHVKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KHVKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KHVKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH037KOYUTABAKT
  await axios(url16).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KOYUTABAKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KOYUTABAKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KOYUTABAKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KOYUTABAKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KOYUTABAKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH037LCVRTKT
  await axios(url17).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037LCVRTKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037LCVRTKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037LCVRTKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037LCVRTKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037LCVRTKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH037SYHKHV
  await axios(url18).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHKHV40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHKHV41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHKHV42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHKHV43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHKHV44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH037SYHST
  await axios(url19).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH037TABAST
  await axios(url20).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH177KHV
  await axios(url21).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177KHV40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177KHV41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177KHV42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177KHV43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177KHV44',
        no: title
      })
      saveNotes(data)
    })
  })

  // // MDSH177MAVİ
  // await axios(url22).then(response => {
  //   const html = response.data;
  //   const $ = cheerio.load(html)
  //   const data = loadNotes()

  //   $('#bedensecin > a:nth-of-type(1)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSH177MAVİ40',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(2)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSH177MAVİ41',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(3)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSH177MAVİ42',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(4)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSH177MAVİ43',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(5)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSH177MAVİ44',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  // })

  // // MDSH177SYH
  // await axios(url23).then(response => {
  //   const html = response.data;
  //   const $ = cheerio.load(html)
  //   const data = loadNotes()

  //   $('#bedensecin > a:nth-of-type(1)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSH177SYH40',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(2)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSH177SYH41',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(3)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSH177SYH42',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(4)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSH177SYH43',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(5)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSH177SYH44',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  // })

  // MDSH177TABA
  await axios(url24).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177TABA40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177TABA41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177TABA42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177TABA43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177TABA44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB003LCVRTBT
  await axios(url25).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB003LCVRTBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB003LCVRTBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB003LCVRTBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB003LCVRTBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB003LCVRTBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005BRDBT
  await axios(url26).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005BRDBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005BRDBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005BRDBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005BRDBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005BRDBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005LCVRTBT
  await axios(url27).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005LCVRTBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005LCVRTBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005LCVRTBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005LCVRTBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005LCVRTBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005SYHBT
  await axios(url28).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005SYHCLTPUS
  await axios(url29).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHCLTPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHCLTPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHCLTPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHCLTPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHCLTPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005SYHRGNBT
  await axios(url30).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005SYHRGNBTKMR
  await axios(url31).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBTKMR40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBTKMR41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBTKMR42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBTKMR43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBTKMR44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSB005SYHRGNCLTPUS
  await axios(url32).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNCLTPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNCLTPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNCLTPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNCLTPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNCLTPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005SYHRGNST
  await axios(url33).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // // MDSHB005SYHRGNSUETST
  // await axios(url34).then(response => {
  //   const html = response.data;
  //   const $ = cheerio.load(html)
  //   const data = loadNotes()

  //   $('#bedensecin > a:nth-of-type(1)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB005SYHRGNSUETST40',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(2)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB005SYHRGNSUETST41',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(3)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB005SYHRGNSUETST42',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(4)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB005SYHRGNSUETST43',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(5)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB005SYHRGNSUETST44',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  // })

  // MDSHB005SYHSTCLT
  await axios(url35).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSTCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSTCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSTCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSTCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSTCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005SYHSUETBTPUS
  await axios(url36).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSUETBTPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSUETBTPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSUETBTPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSUETBTPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSUETBTPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // // MDSHB005SYHSUETST
  // await axios(url37).then(response => {
  //   const html = response.data;
  //   const $ = cheerio.load(html)
  //   const data = loadNotes()

  //   $('#bedensecin > a:nth-of-type(1)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB005SYHSUETST40',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(2)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB005SYHSUETST41',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(3)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB005SYHSUETST42',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(4)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB005SYHSUETST43',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(5)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB005SYHSUETST44',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  // })

  // MDSHB005TABABT
  await axios(url38).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABABT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABABT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABABT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABABT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABABT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005TABASUETPUS
  await axios(url39).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABASUETPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABASUETPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABASUETPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABASUETPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABASUETPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // // MDSHB0202SYHBT
  // await axios(url40).then(response => {
  //   const html = response.data;
  //   const $ = cheerio.load(html)
  //   const data = loadNotes()

  //   $('#bedensecin > a:nth-of-type(1)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0202SYHBT40',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(2)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0202SYHBT41',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(3)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0202SYHBT42',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(4)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0202SYHBT43',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(5)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0202SYHBT44',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  // })

  // // MDSHB027SYHBYZBT
  // await axios(url41).then(response => {
  //   const html = response.data;
  //   const $ = cheerio.load(html)
  //   const data = loadNotes()

  //   $('#bedensecin > a:nth-of-type(1)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB027SYHBYZBT40',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(2)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB027SYHBYZBT41',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(3)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB027SYHBYZBT42',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(4)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB027SYHBYZBT43',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(5)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB027SYHBYZBT44',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  // })

  // // MDSHB027SYHST
  // await axios(url42).then(response => {
  //   const html = response.data;
  //   const $ = cheerio.load(html)
  //   const data = loadNotes()

  //   $('#bedensecin > a:nth-of-type(1)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB027SYHST40',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(2)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB027SYHST41',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(3)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB027SYHST42',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(4)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB027SYHST43',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(5)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB027SYHST44',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  // })

  // // MDSHB031BYZSYH
  // await axios(url43).then(response => {
  //   const html = response.data;
  //   const $ = cheerio.load(html)
  //   const data = loadNotes()

  //   $('#bedensecin > a:nth-of-type(1)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB031BYZSYH40',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(2)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB031BYZSYH41',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(3)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB031BYZSYH42',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(4)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB031BYZSYH43',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(5)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB031BYZSYH44',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  // })

  // MDSHB031HRDSYH
  await axios(url44).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031HRDSYH40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031HRDSYH41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031HRDSYH42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031HRDSYH43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031HRDSYH44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB031KRMZBYZ
  await axios(url45).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZBYZ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZBYZ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZBYZ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZBYZ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZBYZ44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB031KRMZSYH
  await axios(url46).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZSYH40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZSYH41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZSYH42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZSYH43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZSYH44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB031YSLBYZ
  await axios(url47).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLBYZ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLBYZ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLBYZ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLBYZ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLBYZ44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB031YSLSYH
  await axios(url48).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLSYH40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLSYH41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLSYH42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLSYH43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLSYH44',
        no: title
      })
      saveNotes(data)
    })
  })

  // // MDSHB094BYZBT
  // await axios(url49).then(response => {
  //   const html = response.data;
  //   const $ = cheerio.load(html)
  //   const data = loadNotes()

  //   $('#bedensecin > a:nth-of-type(1)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB094BYZBT40',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(2)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB094BYZBT41',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(3)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB094BYZBT42',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(4)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB094BYZBT43',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(5)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB094BYZBT44',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  // })

  // // MDSHB094SYHST
  // await axios(url50).then(response => {
  //   const html = response.data;
  //   const $ = cheerio.load(html)
  //   const data = loadNotes()

  //   $('#bedensecin > a:nth-of-type(1)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB094SYHST40',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(2)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB094SYHST41',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(3)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB094SYHST42',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(4)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB094SYHST43',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(5)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB094SYHST44',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  // })

  // MDSHB094TABAST
  await axios(url51).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0X700BYZSYHBT
  await axios(url52).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700BYZSYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700BYZSYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700BYZSYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700BYZSYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700BYZSYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0X700HRDSYHHT
  await axios(url53).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700HRDSYHHT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700HRDSYHHT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700HRDSYHHT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700HRDSYHHT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700HRDSYHHT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0X700SYHBYZBT
  await axios(url54).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0X700SYHBYZST
  await axios(url55).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0X700SYHKRMZST
  await axios(url56).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHKRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHKRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHKRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHKRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHKRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB111BYZBT
  await axios(url57).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB111DSNBT40
  await axios(url58).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB111DSNST
  await axios(url59).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB111RKMBT
  await axios(url60).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB111RKMST
  await axios(url61).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB111SYHBT
  await axios(url62).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB111SYHST
  await axios(url63).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB130SYHST
  await axios(url64).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB130SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB130SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB130SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB130SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB130SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB131GRİBT
  await axios(url65).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131GRİBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131GRİBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131GRİBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131GRİBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131GRİBT44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131GRİBT45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB131PUDRABT
  await axios(url66).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131PUDRABT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131PUDRABT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131PUDRABT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131PUDRABT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131PUDRABT44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131PUDRABT45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136BBMAVİBT
  await axios(url67).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BBMAVİBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BBMAVİBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BBMAVİBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BBMAVİBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BBMAVİBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136BYZBYZBT
  await axios(url68).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZBYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZBYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZBYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZBYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZBYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136BYZHRDHT
  await axios(url69).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZHRDHT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZHRDHT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZHRDHT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZHRDHT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZHRDHT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136BYZKRMZKT
  await axios(url70).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZKRMZKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZKRMZKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZKRMZKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZKRMZKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZKRMZKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136BYZSYHST
  await axios(url71).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZSYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZSYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZSYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZSYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZSYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136HRDHRDHT
  await axios(url72).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136HRDHRDHT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136HRDHRDHT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136HRDHRDHT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136HRDHRDHT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136HRDHRDHT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136KRMZKRMZKT
  await axios(url73).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136KRMZKRMZKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136KRMZKRMZKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136KRMZKRMZKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136KRMZKRMZKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136KRMZKRMZKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136SYHBYLST
  await axios(url74).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYLST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYLST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYLST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYLST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYLST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136SYHBYZBT
  await axios(url75).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136SYHSYHBT
  await axios(url76).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136SYHSYHST
  await axios(url77).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB138BYZSYHBT
  await axios(url78).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB138BYZSYHST
  await axios(url79).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB138KRMZBYZBT
  await axios(url80).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138KRMZBYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138KRMZBYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138KRMZBYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138KRMZBYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138KRMZBYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB138LCVRTSYHST
  await axios(url81).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138LCVRTSYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138LCVRTSYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138LCVRTSYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138LCVRTSYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138LCVRTSYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB138TABASYHST
  await axios(url82).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138TABASYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138TABASYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138TABASYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138TABASYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138TABASYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB146KHVPUS
  await axios(url83).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146KHVPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146KHVPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146KHVPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146KHVPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146KHVPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB146SYHPUS
  await axios(url84).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146SYHPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146SYHPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146SYHPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146SYHPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146SYHPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB146TABAPUS
  await axios(url85).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146TABAPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146TABAPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146TABAPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146TABAPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146TABAPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160BYZBT
  await axios(url86).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160BYZSYHBT
  await axios(url87).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160BYZSYHST
  await axios(url88).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160HKKST
  await axios(url89).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160HKKST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160HKKST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160HKKST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160HKKST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160HKKST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160SYHBT
  await axios(url90).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160SYHBYZST
  await axios(url91).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160SYHKRMZST
  await axios(url92).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHKRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHKRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHKRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHKRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHKRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160SYHST
  await axios(url93).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160SYHTABAST
  await axios(url94).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHTABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHTABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHTABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHTABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHTABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160TABAST
  await axios(url95).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB161BYZBT
  await axios(url96).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB161BYZST
  await axios(url97).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB161CMLST
  await axios(url98).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161CMLST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161CMLST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161CMLST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161CMLST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161CMLST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB161HRDST
  await axios(url99).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161HRDST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161HRDST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161HRDST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161HRDST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161HRDST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB161KRMZST
  await axios(url100).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161KRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161KRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161KRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161KRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161KRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB161SYHBT
  await axios(url101).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB161SYHST
  await axios(url102).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB162BYZBT
  await axios(url103).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB162BYZST
  await axios(url104).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB162CMLST
  await axios(url105).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162CMLST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162CMLST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162CMLST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162CMLST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162CMLST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB162HRDST
  await axios(url106).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162HRDST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162HRDST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162HRDST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162HRDST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162HRDST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB162SYHST
  await axios(url107).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB163BYZBT
  await axios(url108).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB163BYZSYHST
  await axios(url109).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZSYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZSYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZSYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZSYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZSYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB163KRMZST
  await axios(url110).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163KRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163KRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163KRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163KRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163KRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB163SYHBYZST
  await axios(url111).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHBYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHBYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHBYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHBYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHBYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB163SYHHKKST
  await axios(url112).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHHKKST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHHKKST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHHKKST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHHKKST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHHKKST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB163SYHST
  await axios(url113).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB163SYHTABAST
  await axios(url114).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHTABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHTABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHTABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHTABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHTABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB163TABAST
  await axios(url115).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB167GRİGT
  await axios(url116).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167GRİGT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167GRİGT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167GRİGT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167GRİGT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167GRİGT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB167KRMZKT
  await axios(url117).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167KRMZKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167KRMZKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167KRMZKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167KRMZKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167KRMZKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB167MAVİMV
  await axios(url118).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167MAVİMV40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167MAVİMV41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167MAVİMV42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167MAVİMV43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167MAVİMV44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB167SYHKRMZST
  await axios(url119).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHKRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHKRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHKRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHKRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHKRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB167SYHST
  await axios(url120).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB167VZNVT40
  await axios(url121).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167VZNVT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167VZNVT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167VZNVT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167VZNVT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167VZNVT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB169BYZMV
  await axios(url122).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZMV40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZMV41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZMV42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZMV43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZMV44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB169BYZSAR
  await axios(url123).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSAR40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSAR41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSAR42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSAR43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSAR44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB169BYZSYH
  await axios(url124).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSYH40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSYH41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSYH42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSYH43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSYH44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB169SYHKRMZ
  await axios(url125).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHKRMZ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHKRMZ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHKRMZ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHKRMZ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHKRMZ44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB169SYHSAR
  await axios(url126).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHSAR40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHSAR41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHSAR42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHSAR43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHSAR44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170BYZGRİBT
  await axios(url127).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZGRİBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZGRİBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZGRİBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZGRİBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZGRİBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170BYZKRMZKT
  await axios(url128).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZKRMZKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZKRMZKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZKRMZKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZKRMZKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZKRMZKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170BYZMVBT
  await axios(url129).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZMVBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZMVBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZMVBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZMVBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZMVBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170BYZSARIBT
  await axios(url130).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSARIBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSARIBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSARIBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSARIBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSARIBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170BYZSART
  await axios(url131).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSART40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSART41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSART42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSART43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSART44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170BYZSYHBT
  await axios(url132).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170BYZSYHKRMZKT
  await axios(url133).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHKRMZKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHKRMZKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHKRMZKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHKRMZKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHKRMZKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170MDSHB170SYHBYZBT
  await axios(url134).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170MDSHB170SYHBYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170MDSHB170SYHBYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170MDSHB170SYHBYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170MDSHB170SYHBYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170MDSHB170SYHBYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170SYHSART
  await axios(url135).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170SYHSART40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170SYHSART41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170SYHSART42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170SYHSART43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170SYHSART44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB173GRİ
  await axios(url136).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173GRİ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173GRİ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173GRİ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173GRİ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173GRİ44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB173HKK
  await axios(url137).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173HKK40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173HKK41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173HKK42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173HKK43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173HKK44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB173LCVRT
  await axios(url138).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173LCVRT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173LCVRT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173LCVRT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173LCVRT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173LCVRT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB173SYH
  await axios(url139).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYH40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYH41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYH42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYH43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYH44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB173SYHBT
  await axios(url140).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB175BYZ
  await axios(url141).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175BYZ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175BYZ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175BYZ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175BYZ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175BYZ44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB175GRİ
  await axios(url142).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175GRİ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175GRİ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175GRİ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175GRİ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175GRİ44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB175HAKİ
  await axios(url143).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175HAKİ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175HAKİ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175HAKİ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175HAKİ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175HAKİ44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB175LACİVERT
  await axios(url144).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175LACİVERT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175LACİVERT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175LACİVERT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175LACİVERT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175LACİVERT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB175SİYAH
  await axios(url145).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175SİYAH40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175SİYAH41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175SİYAH42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175SİYAH43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175SİYAH44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB179BYZKRMZKT
  await axios(url146).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZKRMZKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZKRMZKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZKRMZKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZKRMZKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZKRMZKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB179BYZSYHBT
  await axios(url147).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZSYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZSYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZSYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZSYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZSYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB179SYHBT
  await axios(url148).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB179SYHKKRMZKT
  await axios(url149).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHKKRMZKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHKKRMZKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHKKRMZKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHKKRMZKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHKKRMZKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB179SYHSARIHT
  await axios(url150).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHSARIHT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHSARIHT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHSARIHT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHSARIHT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHSARIHT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB179SYHST
  await axios(url151).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB180BYZBT
  await axios(url152).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB180BYZKRMZBT
  await axios(url153).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZKRMZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZKRMZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZKRMZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZKRMZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZKRMZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB180SYHKRMZST
  await axios(url154).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHKRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHKRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHKRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHKRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHKRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB180SYHST
  await axios(url155).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB202ANTRBT
  await axios(url156).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202ANTRBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202ANTRBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202ANTRBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202ANTRBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202ANTRBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB202BRDBT
  await axios(url157).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB202GRİBT
  await axios(url158).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202GRİBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202GRİBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202GRİBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202GRİBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202GRİBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB202KRMZBT
  await axios(url159).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202KRMZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202KRMZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202KRMZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202KRMZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202KRMZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB601BYZBT
  await axios(url160).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB601CMLBT
  await axios(url161).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB601CMLST
  await axios(url162).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB601SYHBT
  await axios(url163).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB601SYHST
  await axios(url164).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB606BYZBT
  await axios(url165).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB606HKKKRCBT
  await axios(url166).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606HKKKRCBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606HKKKRCBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606HKKKRCBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606HKKKRCBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606HKKKRCBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB606SYHBT
  await axios(url167).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB606SYHKRCBT
  await axios(url168).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHKRCBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHKRCBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHKRCBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHKRCBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHKRCBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB606SYHST
  await axios(url169).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009LCVRCLTCROCKPUSV2
  await axios(url170).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKPUSV240',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKPUSV241',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKPUSV242',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKPUSV243',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKPUSV244',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009LCVRCLTCROCKV2
  await axios(url171).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKV240',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKV241',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKV242',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKV243',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKV244',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009LCVRSUETPUSV1
  await axios(url172).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETPUSV140',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETPUSV141',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETPUSV142',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETPUSV143',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETPUSV144',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009LCVRSUETV1
  await axios(url173).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETV140',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETV141',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETV142',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETV143',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETV144',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009LCVRTCLTCROCKPUSV1
  await axios(url174).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTCROCKPUSV140',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTCROCKPUSV141',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTCROCKPUSV142',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTCROCKPUSV143',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTCROCKPUSV144',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009LCVRTCLTKMRPUS
  await axios(url175).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTKMRPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTKMRPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTKMRPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTKMRPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTKMRPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009SYHCLT
  await axios(url176).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009SYHCLTCROCKPUSV1
  await axios(url177).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTCROCKPUSV140',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTCROCKPUSV141',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTCROCKPUSV142',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTCROCKPUSV143',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTCROCKPUSV144',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009SYHCLTPUS
  await axios(url178).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009SYHCROC4
  await axios(url179).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCROC40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCROC41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCROC42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCROC43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCROC44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009SYHRGN
  await axios(url180).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGN40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGN41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGN42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGN43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGN44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009SYHRGNPUS
  await axios(url181).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGNPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGNPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGNPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGNPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGNPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009SYHSUET
  await axios(url182).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009SYHSUETPUS
  await axios(url183).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUETPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUETPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUETPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUETPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUETPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009TABACLTCROCKPUSV1
  await axios(url184).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV140',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV141',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV142',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV143',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV144',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009TABACLTCROCKPUSV2
  await axios(url185).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV240',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV241',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV242',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV243',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV244',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009TABACLTCROCKV2
  await axios(url186).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKV240',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKV241',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKV242',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKV243',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKV244',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB045BRDSUET
  await axios(url187).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045BRDSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045BRDSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045BRDSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045BRDSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045BRDSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB045HKKYSLSUET
  await axios(url188).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045HKKYSLSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045HKKYSLSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045HKKYSLSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045HKKYSLSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045HKKYSLSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB045KHVCLT
  await axios(url189).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045KHVCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045KHVCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045KHVCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045KHVCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045KHVCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB045LCVRTSUET
  await axios(url190).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045LCVRTSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045LCVRTSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045LCVRTSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045LCVRTSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045LCVRTSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB045SYHCLT
  await axios(url191).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB045SYHSUET
  await axios(url192).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB045TABACLT
  await axios(url193).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABACLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABACLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABACLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABACLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABACLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB045TABASUET
  await axios(url194).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABASUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABASUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABASUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABASUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABASUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058BRDSUET
  await axios(url195).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058BRDSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058BRDSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058BRDSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058BRDSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058BRDSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058HKKYSLSUET
  await axios(url196).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058HKKYSLSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058HKKYSLSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058HKKYSLSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058HKKYSLSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058HKKYSLSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058KHVCLT
  await axios(url197).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058KHVSUET
  await axios(url198).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058LCVRTSUET
  await axios(url199).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058LCVRTSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058LCVRTSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058LCVRTSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058LCVRTSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058LCVRTSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058SETLCVRTSUET
  await axios(url200).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SETLCVRTSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SETLCVRTSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SETLCVRTSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SETLCVRTSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SETLCVRTSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058SYHCLT
  await axios(url201).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058SYHSUET
  await axios(url202).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058TABACLT
  await axios(url203).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABACLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABACLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABACLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABACLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABACLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058TABASUET
  await axios(url204).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABASUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABASUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABASUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABASUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABASUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058VZNSUET
  await axios(url205).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058VZNSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058VZNSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058VZNSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058VZNSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058VZNSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB080SYHST
  await axios(url206).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB080SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB080SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB080SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB080SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB080SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB087SYHCLTST
  await axios(url207).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHCLTST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHCLTST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHCLTST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHCLTST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHCLTST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB087SYHSUETST
  await axios(url208).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHSUETST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHSUETST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHSUETST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHSUETST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHSUETST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142BYZBT
  await axios(url209).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142BYZST
  await axios(url210).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142GRFTYST
  await axios(url211).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142GRFTYST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142GRFTYST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142GRFTYST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142GRFTYST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142GRFTYST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142HKKST
  await axios(url212).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142HKKST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142HKKST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142HKKST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142HKKST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142HKKST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142KRMST
  await axios(url213).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142KRMZST
  await axios(url214).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142SYHBT
  await axios(url215).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142SYHST
  await axios(url216).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142TABAST
  await axios(url217).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB151BYZBT
  await axios(url218).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB151SYHBT
  await axios(url219).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB151SYHST
  await axios(url220).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB151TABABT
  await axios(url221).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABABT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABABT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABABT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABABT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABABT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB151TABAST
  await axios(url222).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155BYZBT
  await axios(url223).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155BYZST
  await axios(url224).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155HKKST
  await axios(url225).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155HKKST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155HKKST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155HKKST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155HKKST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155HKKST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155KRMZST
  await axios(url226).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155KRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155KRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155KRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155KRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155KRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155SYHBT
  await axios(url227).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155SYHBYZBT
  await axios(url228).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155SYHBYZST
  await axios(url229).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155SYHST
  await axios(url230).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155TABAST
  await axios(url231).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB159BYZBT
  await axios(url232).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB159BYZST
  await axios(url233).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB159HKKST
  await axios(url234).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159HKKST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159HKKST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159HKKST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159HKKST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159HKKST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB159KRMZST
  await axios(url235).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159KRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159KRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159KRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159KRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159KRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB159SYHBT
  await axios(url236).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB159SYHST
  await axios(url237).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB159TABAST
  await axios(url238).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB182SYHCLT
  await axios(url239).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB182SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB182SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB182SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB182SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB182SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB183SYHST
  await axios(url240).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB183TABAST
  await axios(url241).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB184KHVST
  await axios(url242).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184KHVST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184KHVST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184KHVST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184KHVST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184KHVST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB184SYHST
  await axios(url243).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB184TABAST
  await axios(url244).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB185KHVCLT
  await axios(url245).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185KHVCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185KHVCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185KHVCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185KHVCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185KHVCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB185SYHCLT
  await axios(url246).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB185TABACLT
  await axios(url247).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185TABACLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185TABACLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185TABACLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185TABACLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185TABACLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB186KHVST
  await axios(url248).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186KHVST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186KHVST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186KHVST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186KHVST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186KHVST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB186SYHST
  await axios(url249).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB186TABAST
  await axios(url250).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB187SYHCLTST
  await axios(url251).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB187SYHCLTST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB187SYHCLTST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB187SYHCLTST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB187SYHCLTST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB187SYHCLTST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB188SYHCLTST
  await axios(url252).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB188SYHCLTST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB188SYHCLTST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB188SYHCLTST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB188SYHCLTST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB188SYHCLTST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB600ACKASKİYSLBT
  await axios(url253).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600ACKASKİYSLBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600ACKASKİYSLBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600ACKASKİYSLBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600ACKASKİYSLBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600ACKASKİYSLBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB600BYZBT
  await axios(url254).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB600CMLBT
  await axios(url255).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600CMLBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600CMLBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600CMLBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600CMLBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600CMLBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB600KOYUASKİYSLBT
  await axios(url256).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600KOYUASKİYSLBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600KOYUASKİYSLBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600KOYUASKİYSLBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600KOYUASKİYSLBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600KOYUASKİYSLBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB600LCVRTBT
  await axios(url257).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600LCVRTBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600LCVRTBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600LCVRTBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600LCVRTBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600LCVRTBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB600SYHCLTST
  await axios(url258).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHCLTST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHCLTST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHCLTST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHCLTST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHCLTST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB600SYHNBKST
  await axios(url259).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHNBKST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHNBKST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHNBKST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHNBKST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHNBKST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0001BYZBT
  await axios(url260).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0001GRİBT
  await axios(url261).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001GRİBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001GRİBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001GRİBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001GRİBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001GRİBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0001KRMZBT
  await axios(url262).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001KRMZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001KRMZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001KRMZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001KRMZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001KRMZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0001LCVRTBT
  await axios(url263).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001LCVRTBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001LCVRTBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001LCVRTBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001LCVRTBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001LCVRTBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0001SXMVBT
  await axios(url264).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SXMVBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SXMVBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SXMVBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SXMVBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SXMVBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0001SYHST
  await axios(url265).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026BYZBT
  await axios(url266).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026GRİBT
  await axios(url267).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026GRİBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026GRİBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026GRİBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026GRİBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026GRİBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026HKKBT
  await axios(url268).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026HKKHT
  await axios(url269).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKHT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKHT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKHT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKHT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKHT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026HKKST
  await axios(url270).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026KRMZBT
  await axios(url271).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026KRMZKT
  await axios(url272).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026LCVRTBT
  await axios(url273).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026LCVRTBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026LCVRTBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026LCVRTBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026LCVRTBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026LCVRTBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026SARIBT
  await axios(url274).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARIBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARIBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARIBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARIBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARIBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026SARISR
  await axios(url275).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARISR40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARISR41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARISR42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARISR43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARISR44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026SYHBT
  await axios(url276).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026SYHST
  await axios(url277).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026TABABT
  await axios(url278).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABABT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABABT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABABT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABABT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABABT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026TABAST
  await axios(url279).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032ANTBT
  await axios(url280).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032ANTBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032ANTBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032ANTBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032ANTBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032ANTBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032BYZBT
  await axios(url281).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032HKKBT
  await axios(url282).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032HKKST
  await axios(url282).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB202BRDBT
  await axios(url283).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BRDBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BRDBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BRDBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BRDBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BRDBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032HRDBT
  await axios(url284).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HRDBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HRDBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HRDBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HRDBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HRDBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032KRMZBT
  await axios(url285).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032KRMZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032KRMZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032KRMZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032KRMZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032KRMZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032LCVRTBT
  await axios(url286).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032LCVRTBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0032LCVRTBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032LCVRTBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032LCVRTBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0032LCVRTBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032SHYBT
  await axios(url287).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032SHYST
  await axios(url288).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032TABABT
  await axios(url289).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABABT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABABT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABABT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABABT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABABT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032TABAST
  await axios(url290).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB181SYHCLT
  await axios(url291).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB181TABACLT
  await axios(url292).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181TABACLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181TABACLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181TABACLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181TABACLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181TABACLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH053ASKRSYHCLT
  await axios(url293).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053ASKRSYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053ASKRSYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053ASKRSYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053ASKRSYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053ASKRSYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH053CVSSYHCLT
  await axios(url294).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053CVSSYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053CVSSYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053CVSSYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053CVSSYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053CVSSYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH053RTBSYHCLT
  await axios(url295).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053RTBSYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053RTBSYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053RTBSYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053RTBSYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053RTBSYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003BYZKTNBT
  await axios(url296).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZKTNBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZKTNBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZKTNBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZKTNBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZKTNBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0098BYZBT
  await axios(url297).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0098BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0098BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0098BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0098BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0098BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0139BYZBT
  await axios(url298).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // // MDSHB0139GRİBT
  // await axios(url299).then(response => {
  //   const html = response.data;
  //   const $ = cheerio.load(html)
  //   const data = loadNotes()

  //   $('#bedensecin > a:nth-of-type(1)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139GRİBT40',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(2)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139GRİBT41',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(3)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139GRİBT42',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(4)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139GRİBT43',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(5)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139GRİBT44',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  // })

  // MDSHB0139HRDBT
  await axios(url300).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139HRDBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139HRDBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139HRDBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139HRDBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139HRDBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // // MDSHB0139SYHBYZBT
  // await axios(url301).then(response => {
  //   const html = response.data;
  //   const $ = cheerio.load(html)
  //   const data = loadNotes()

  //   $('#bedensecin > a:nth-of-type(1)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139SYHBYZBT40',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(2)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139SYHBYZBT41',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(3)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139SYHBYZBT42',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(4)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139SYHBYZBT43',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(5)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139SYHBYZBT44',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  // })

  // MDSHB0152BYZBT
  await axios(url302).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0152BYZST
  await axios(url303).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0152KRMZST
  await axios(url304).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152KRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152KRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152KRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152KRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152KRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0152SYHBT
  await axios(url305).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0152TABAST
  await axios(url306).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0301BYZBT
  await axios(url307).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0301SYHBYZST
  await axios(url308).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301SYHBYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301SYHBYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301SYHBYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301SYHBYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301SYHBYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB062BRDRGN
  await axios(url309).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDRGN40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDRGN41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDRGN42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(8)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDRGN43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(9)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDRGN44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB062BRDSUET
  await axios(url310).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(8)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(9)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB062LCVRTRGN
  await axios(url311).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTRGN40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTRGN41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTRGN42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(8)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTRGN43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(9)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTRGN44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB062LCVRTSUET
  await axios(url312).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(8)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(9)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB062SYHCLT
  await axios(url313).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(8)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(9)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB062SYHRGN
  await axios(url314).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHRGN40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHRGN41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHRGN42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(8)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHRGN43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(9)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHRGN44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB062SYHSUET
  await axios(url315).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(8)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(9)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602BYZ
  await axios(url316).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602BYZ39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602BYZ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602BYZ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602BYZ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602BYZ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602BYZ44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602BYZ45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602FUME
  await axios(url317).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602FUME39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602FUME40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602FUME41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602FUME42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602FUME43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602FUME44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602FUME45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602Gri
  await axios(url318).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602Gri39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602Gri40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602Gri41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602Gri42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602Gri43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602Gri44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602Gri45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602GriBT
  await axios(url319).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602GriBT39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602GriBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602GriBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602GriBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602GriBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602GriBT44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602GriBT45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602HRD
  await axios(url320).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602HRD39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602HRD40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602HRD41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602HRD42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602HRD43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602HRD44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602HRD45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602KRMZ
  await axios(url321).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602KRMZ39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602KRMZ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602KRMZ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602KRMZ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602KRMZ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602KRMZ44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602KRMZ45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602MYSL
  await axios(url322).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602MYSL39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602MYSL40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602MYSL41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602MYSL42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602MYSL43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602MYSL44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602MYSL45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602SYHBT
  await axios(url323).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHBT39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHBT44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHBT45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602SYHST
  await axios(url324).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHST39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHST44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHST45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB191KHVCLT
  await axios(url325).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191KHVCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191KHVCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191KHVCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191KHVCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191KHVCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB191SYHCLT
  await axios(url326).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })
  // MDSHKB191SYHDSNCLT
  await axios(url327).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHDSNCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHDSNCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHDSNCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHDSNCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHDSNCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB191TABACLT
  await axios(url328).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191TABACLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191TABACLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191TABACLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191TABACLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191TABACLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048HKKSUET
  await axios(url329).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048HKKSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048HKKSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048HKKSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048HKKSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048HKKSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048KHVCLT
  await axios(url330).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048KHVSUET
  await axios(url331).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048LCVRTCLT
  await axios(url332).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048LCVRTSUET
  await axios(url333).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048SYHCLT
  await axios(url334).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048SYHSUET
  await axios(url335).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048TABACLT
  await axios(url336).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABACLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABACLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABACLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABACLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABACLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048TABASÜET
  await axios(url337).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABASÜET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABASÜET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABASÜET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABASÜET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABASÜET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB054SYHCLT
  await axios(url338).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB054TABACLT
  await axios(url339).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054TABACLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054TABACLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054TABACLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054TABACLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054TABACLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB150BEJST
  await axios(url340).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BEJST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BEJST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BEJST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BEJST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BEJST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB150BYZBT
  await axios(url341).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB150BYZST
  await axios(url342).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB150KRMZST
  await axios(url343).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150KRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150KRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150KRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150KRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150KRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB150SYHBT
  await axios(url344).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB150SYHST
  await axios(url345).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB192FUMEST
  await axios(url346).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB192FUMEST40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB192FUMEST41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB192FUMEST42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB192FUMEST43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB192FUMEST44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSHKB192SYHST
  await axios(url347).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB192SYHST40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB192SYHST41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB192SYHST42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB192SYHST43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB192SYHST44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSHKB192SYHBT
  await axios(url348).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB192SYHBT40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB192SYHBT41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB192SYHBT42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB192SYHBT43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB192SYHBT44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSHB104BYZBT
  await axios(url349).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104BYZBT40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104BYZBT41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104BYZBT42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104BYZBT43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104BYZBT44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSHB104BYZST
  await axios(url350).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104BYZST40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104BYZST41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104BYZST42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104BYZST43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104BYZST44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSHB104GRİBT
  await axios(url351).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104GRİBT40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104GRİBT41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104GRİBT42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104GRİBT43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104GRİBT44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSHB104KUMBT
  await axios(url352).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104KUMBT40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104KUMBT41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104KUMBT42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104KUMBT43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104KUMBT44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSHB104SYHBT
  await axios(url353).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104SYHBT40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104SYHBT41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104SYHBT42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104SYHBT43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104SYHBT44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSHB104SYHST
  await axios(url354).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104SYHST40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104SYHST41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104SYHST42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104SYHST43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104SYHST44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSHB104SYHEKOBT
  await axios(url355).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104SYHEKOBT40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104SYHEKOBT41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104SYHEKOBT42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104SYHEKOBT43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104SYHEKOBT44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSHB104TABABT
  await axios(url356).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABABT40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABABT41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABABT42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABABT43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABABT44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSHB104TABAEKOBT
  await axios(url357).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABAEKOBT40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABAEKOBT41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABAEKOBT42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABAEKOBT43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABAEKOBT44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSHB104TABAEKOST
  await axios(url358).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABAEKOST40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABAEKOST41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABAEKOST42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABAEKOST43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABAEKOST44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSHB104TABAST
  await axios(url359).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABAST40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABAST41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABAST42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABAST43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104TABAST44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSHB104VZNBT
  await axios(url360).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104VZNBT40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104VZNBT41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104VZNBT42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104VZNBT43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104VZNBT44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSHB104YSLBT
  await axios(url361).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104YSLBT40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104YSLBT41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104YSLBT42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104YSLBT43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB104YSLBT44',
        no: title,
      })
      saveNotes(data)
    })
  })

  await console.log(chalk.bold.bgRed('Finished...'))
  await process.exit();
}

boaStok()

app.listen(PORT, () => console.log(chalk.bgGrey.bold(`server running on PORT ${PORT}`)))
  },
  exp() {
    const num = () => { 
      const dataBuffer = fs.readFileSync('D:/Own_Projects/07_web_scarper/data.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
    }
    
    const convertJsonExcel = () => {
      const workSheet = XLSX.utils.json_to_sheet(num())
      const workBook = XLSX.utils.book_new()
    
      XLSX.utils.book_append_sheet(workBook, workSheet, "stok")
    
      // Generate Buffer
      XLSX.write(workBook, {bookType: 'xlsx', type: 'buffer'})
    
      //Binary string
      XLSX.write(workBook,{bookType: 'xlsx', type: 'binary'})
    
      XLSX.writeFile(workBook, 'C:/Users/athee/Desktop/Oto_stok/stok.xlsx')
    }
    convertJsonExcel()
  },
  deljson(){
    const path = "D:/Own_Projects/07_web_scarper/data.json";

    try {
      fs.unlinkSync(path);
      console.log("Json dosyası Silindi:", path);
    } catch (err) {
      console.error(err);
    }

  },
  delexc() {
    const path = "C:/Users/athee/Desktop/Oto_stok/stok.xlsx"

    try {
      fs.unlinkSync(path)
      console.log('Excel dosyası silindi', path)
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = stok;