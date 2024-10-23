const fs = require('fs')
const express = require('express');
const chalk = require('chalk')
const puppeteer = require('puppeteer');
const path = require('path');


async function stokErb() {
  await (async function () {
    const PORT = 8476;

    const app = express()

    const loadNotes = () => {
      try {
        const dataBuffer = fs.readFileSync("D:/Own_Projects/07_web_scarper/stock/rds_stok/dataRDS.json")// need revision
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

      } catch {
        return []
      }
    }

    const saveNotes = (num) => {
      const dataJSON = JSON.stringify(num)
      fs.writeFileSync('D:/Own_Projects/07_web_scarper/stock/rds_stok/dataRDS.json', dataJSON) // need revision

    }

    app.listen(PORT, () => console.log(chalk.bgGreen(`server running on PORT ${PORT}`)))


    let json = JSON.parse(fs.readFileSync(path.join(__dirname, 'rds_veri.json')));


    let veriLenght = json.link.length
    let linkVeri = json.link
    let barkodVeri = json.barkod
    let idVeri = json.id


    await (async function erb_fun1() {
      try {
        await (async function () {
          const browser = await puppeteer.launch({
            headless: true,
            //executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
            //userDataDir: '/Users/athee/Library/Application Support/Google/Chrome/Default',
            timeout: 0,
            defaultViewport: null,
          })

          // Login
          const page = await browser.newPage();

          // await page.goto("https://www.xmlcim.com/index.php?route=account/login", {
          //   waitUntil: 'networkidle2'
          // })
          // await page.waitForSelector("#content > div > div:nth-child(2) > div")

          // await page.type('input[placeholder="E-Posta Adresi"]', 'tuncaymaliev@gmail.com', {
          //   delay: 200
          // })

          // await page.type('input[placeholder="Parola"]', 'tma200786', {
          //   delay: 200
          // })
          // await page.click("#content > div > div:nth-child(2) > div > form > input", {
          //   delay: 200
          // })

          // await page.waitForSelector('#logo')

          // Loop Function
           for (i = 0; i < veriLenght; i++ ) {

            await page.goto(linkVeri[i], {
              waitUntil: 'networkidle2'
            })

            await (async function() {
              const idNum = Number(idVeri[i])

              let idNum36 = idNum

              let idNumSon36 = idNum36.toString()


              try {

                var erb01_36 = await page.evaluate((idNumSon36) => {
                  try {
                    return document.querySelector(`#input-option${idNumSon36} > div:nth-child(1) > label > span > small`).textContent.trim().replace("(", "").replace(")", "")
                  } catch {
                    return 0
                  }
                },(idNumSon36))

                var erb01_37 = await page.evaluate((idNumSon36) => {
                  try {
                    return document.querySelector(`#input-option${idNumSon36} > div:nth-child(2) > label > span > small`).textContent.trim().replace("(", "").replace(")", "")
                  } catch {
                    return 0
                  }
                },(idNumSon36))

                var erb01_38 = await page.evaluate((idNumSon36) => {
                  try {
                    return document.querySelector(`#input-option${idNumSon36} > div:nth-child(3) > label > span > small`).textContent.trim().replace("(", "").replace(")", "")
                  } catch {
                    return 0
                  }
                },(idNumSon36))

                var erb01_39 = await page.evaluate((idNumSon36) => {
                  try {
                    return document.querySelector(`#input-option${idNumSon36} > div:nth-child(4) > label > span > small`).textContent.trim().replace("(", "").replace(")", "")
                  } catch {
                    return 0
                  }
                },(idNumSon36))

                var erb01_40 = await page.evaluate((idNumSon36) => {
                  try {
                    return document.querySelector(`#input-option${idNumSon36} > div:nth-child(5) > label > span > small`).textContent.trim().replace("(", "").replace(")", "")
                  } catch {
                    return 0
                  }
                },(idNumSon36))

                

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
                  "Ürün Stok Adedi": erb01_36 === "Talep Et" ? 0 : Math.max(0, parseInt(erb01_36)),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}37`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": erb01_37 === "Talep Et" ? 0 : Math.max(0, parseInt(erb01_37)),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}38`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": erb01_38 === "Talep Et" ? 0 : Math.max(0, parseInt(erb01_38)),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}39`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": erb01_39 === "Talep Et" ? 0 : Math.max(0, parseInt(erb01_39)),
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}40`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": erb01_40 === "Talep Et" ? 0 : Math.max(0, parseInt(erb01_40)),
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


module.exports = stokErb