const fs = require('fs')
const express = require('express');
const chalk = require('chalk')
const puppeteer = require('puppeteer');
const path = require('path');


async function stokKadin() {
  await (async function () {
    const PORT = 1234;

    const app = express()

    const loadNotes = () => {
      try {
        const dataBuffer = fs.readFileSync(path.join(__dirname, 'datakadin.json'))
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

      } catch {
        return []
      }
    }

    const saveNotes = (num) => {
      const dataJSON = JSON.stringify(num)
      fs.writeFileSync(path.join(__dirname, 'datakadin.json'), dataJSON)

    }

    app.listen(PORT, () => console.log(chalk.bgGreen(`server running on PORT ${PORT}`)))


    let json = JSON.parse(fs.readFileSync(path.join(__dirname, 'kadin_veri.json')));


    let veriLenght = json.link.length
    let linkVeri = json.link
    let barkodVeri = json.barkod
    let idVeri = json.id


    await (async function kadinfun1() {
      try {
        await (async function () {
          const browser = await puppeteer.launch({
            headless: true,
            timeout: 0,
            defaultViewport: null,
          })

          // Login
          const page = await browser.newPage();

          
          // Loop Function
           for (i = 0; i < veriLenght; i++ ) {

            await page.goto(linkVeri[i], {
              waitUntil: 'networkidle2'
            })

            await (async function() {
              const idSplit = idVeri[i].split(' ')
              const idName = idSplit[0]
              const idNum = Number(idSplit[1])

              let idNum35 = idNum
              let idNum36 = idNum+1
              let idNum37 = idNum+2
              let idNum38 = idNum+3
              let idNum39 = idNum+4
              let idNum40 = idNum+5

              let idNumSon35 = idName.toString() + idNum35.toString()
              let idNumSon36 = idName.toString() + idNum36.toString()
              let idNumSon37 = idName.toString() + idNum37.toString()
              let idNumSon38 = idName.toString() + idNum38.toString()
              let idNumSon39 = idName.toString() + idNum39.toString()
              let idNumSon40 = idName.toString() + idNum40.toString()


              try {

                var mida01_35 = await page.evaluate((idNumSon35) => {
                  try {
                    return document.querySelector(idNumSon35).getAttribute('data-qty')
                  } catch {
                    return 0
                  }
                },(idNumSon35))

                var mida01_36 = await page.evaluate((idNumSon36) => {
                  try {
                    return document.querySelector(idNumSon36).getAttribute('data-qty')
                  } catch {
                    return 0
                  }
                },(idNumSon36))

                var mida01_37 = await page.evaluate((idNumSon37) => {
                  try {
                    return document.querySelector(idNumSon37).getAttribute('data-qty')
                  } catch {
                    return 0
                  }
                },(idNumSon37))

                var mida01_38 = await page.evaluate((idNumSon38) => {
                  try {
                    return document.querySelector(idNumSon38).getAttribute('data-qty')
                  } catch {
                    return 0
                  }
                },(idNumSon38))

                var mida01_39 = await page.evaluate((idNumSon39) => {
                  try {
                    return document.querySelector(idNumSon39).getAttribute('data-qty')
                  } catch {
                    return 0
                  }
                },(idNumSon39))

                var mida01_40 = await page.evaluate((idNumSon40) => {
                  try {
                    return document.querySelector(idNumSon40).getAttribute('data-qty')
                  } catch {
                    return 0
                  }
                },(idNumSon40))
                
    
                data = loadNotes()
    
                data.push({
                  "Barkod": `${barkodVeri[i]}35`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(mida01_35),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}36`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(mida01_36),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}37`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(mida01_37),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}38`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(mida01_38),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}39`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(mida01_39),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}40`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(mida01_40),
                })
    
                await saveNotes(data)
    
                await console.log(chalk.bgGrey.bold(`${barkodVeri[i]}...`))
    
              } catch (err) {
                data = loadNotes()
    
                data.push({
                  "Barkod": `${barkodVeri[i]}35`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}36`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}37`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}38`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}39`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
  
                data.push({
                  "Barkod": `${barkodVeri[i]}40`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": 0,
                })
  
                await console.log(err)
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


module.exports = stokKadin