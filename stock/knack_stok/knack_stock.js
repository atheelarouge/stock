const fs = require('fs')
const express = require('express');
const chalk = require('chalk')
const puppeteer = require('puppeteer');
const path = require('path');

async function stok_Knack() {
  await (async function () {
    const PORT = 5486;

    const app = express()

    const loadNotes = () => {
      try {
        const dataBuffer = fs.readFileSync("D:/Own_Projects/07_web_scarper/data.json")// need revision
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

      } catch {
        return []
      }
    }

    const saveNotes = (num) => {
      const dataJSON = JSON.stringify(num)
      fs.writeFileSync('D:/Own_Projects/07_web_scarper/data.json', dataJSON) // need revision

    }

    app.listen(PORT, () => console.log(chalk.bgGreen(`server running on PORT ${PORT}`)))


    let json = JSON.parse(fs.readFileSync(path.join(__dirname, 'knack_data.json')));


    let veriLenght = json.link.length
    let linkVeri = json.link
    let barkodVeri = json.barkod
    let idVeri = json.id


    await (async function knack_fun1() {
      try {
        await (async function () {
          const browser = await puppeteer.launch({
            headless: true,
            timeout: 0,
            defaultViewport: null,
          })
// Need Login and Revision
          // Login
          const page = await browser.newPage();
          await page.goto("https://www.bayiknack.com/uyelik/giris-yap", {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector('#User_Email')

          await page.type('#User_Email', 'atheelarouge@gmail.com', {
            delay: 200
          })
          await page.type('#User_Password', 'tma200786', {
            delay: 200
          })
          await page.click('button.button.button-login.right', {
            delay: 200
          })

          await page.waitForSelector('.user-info.left')
          
          // Loop Function
           for (i = 0; i < veriLenght; i++ ) {

            await page.goto(linkVeri[i], {
              waitUntil: 'networkidle2'
            })

            await (async function() {
              try {

                await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")
      
                const knk01_40 = await page.evaluate(() => {
                  return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
                })
      
                const knk01_41 = await page.evaluate(() => {
                  return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
                })
      
                const knk01_42 = await page.evaluate(() => {
                  return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
                })
      
                const knk01_43 = await page.evaluate(() => {
                  return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
                })
      
                const knk01_44 = await page.evaluate(() => {
                  return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
                })

    
                data = loadNotes()
    
                data.push({
                  "Barkod": `${barkodVeri[i]}40`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(knk01_40),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}41`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(knk01_41),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}42`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(knk01_42),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}43`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(knk01_43),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}44`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(knk01_44),
                })
    
                await saveNotes(data)
    
                await console.log(chalk.bgGrey.bold(`${barkodVeri[i]}...`))
    
              } catch (err) {
                data = loadNotes()
    
                data.push({
                  "Barkod": `${barkodVeri[i]}40`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}41`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}42`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}43`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}44`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
  
                data.push({
                  "Barkod": `${barkodVeri[i]}45`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })

                await console.log(chalk.bgRed.bold(`${barkodVeri[i]}... Error`))
  
                await saveNotes(data)
  
              }
              
            })()


           }
          

        })();
      } catch (err) {
        console.log(chalk.bgRed.bold(err, `General error`))
      }
    })();
    await (async function () {
      await console.log(chalk.bgBlue.bold('Finished...'))
    })();
  })()
}


module.exports = stok_Knack