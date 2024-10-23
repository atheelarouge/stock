const fs = require('fs')
const express = require('express');
const chalk = require('chalk')
const puppeteer = require('puppeteer');
const path = require('path');


async function stokErb() {
  await (async function () {
    const PORT = 5776;

    const app = express()

    const loadNotes = () => {
      try {
        const dataBuffer = fs.readFileSync("D:/Own_Projects/07_web_scarper/stock/erb_stok/dataErb.json")// need revision
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

      } catch {
        return []
      }
    }

    const saveNotes = (num) => {
      const dataJSON = JSON.stringify(num)
      fs.writeFileSync('D:/Own_Projects/07_web_scarper/stock/erb_stok/dataErb.json', dataJSON) // need revision

    }

    app.listen(PORT, () => console.log(chalk.bgGreen(`server running on PORT ${PORT}`)))


    let json = JSON.parse(fs.readFileSync(path.join(__dirname, 'erb_veri.json')));


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

              let idNum35 = idNum-1
              let idNum36 = idNum
              let idNum37 = idNum+1
              let idNum38 = idNum+2
              let idNum39 = idNum+3
              let idNum40 = idNum+4


              let idNumSon35 = idNum35.toString()
              let idNumSon36 = idNum36.toString()
              let idNumSon37 = idNum37.toString()
              let idNumSon38 = idNum38.toString()
              let idNumSon39 = idNum39.toString()
              let idNumSon40 = idNum40.toString()

              try {
                var erb01_35 = await page.evaluate((idNumSon35) => {
                  try {
                    return document.querySelector(`option[value="${idNumSon35}"]`).innerHTML.replace(/\s/g,'').slice(3,6).replace('A', '').replace('d', '')
                  } catch {
                    return 0
                  }
                  
                },(idNumSon35))

                var erb01_36 = await page.evaluate((idNumSon36) => {
                  try {
                    return document.querySelector(`option[value="${idNumSon36}"]`).innerHTML.replace(/\s/g,'').slice(3,6).replace('A', '').replace('d', '')
                  } catch {
                    return 0
                  }
                },(idNumSon36))

                var erb01_37 = await page.evaluate((idNumSon37) => {
                  try {
                    return document.querySelector(`option[value="${idNumSon37}"]`).innerHTML.replace(/\s/g,'').slice(3,6).replace('A', '').replace('d', '')
                  } catch {
                    return 0
                  }
                },(idNumSon37))

                var erb01_38 = await page.evaluate((idNumSon38) => {
                  try {
                    return document.querySelector(`option[value="${idNumSon38}"]`).innerHTML.replace(/\s/g,'').slice(3,6).replace('A', '').replace('d', '')
                  } catch {
                    return 0
                  }
                },(idNumSon38))

                var erb01_39 = await page.evaluate((idNumSon39) => {
                  try {
                    return document.querySelector(`option[value="${idNumSon39}"]`).innerHTML.replace(/\s/g,'').slice(3,6).replace('A', '').replace('d', '')
                  } catch {
                    return 0
                  }
                },(idNumSon39))

                var erb01_40 = await page.evaluate((idNumSon40) => {
                  try {
                    return document.querySelector(`option[value="${idNumSon40}"]`).innerHTML.replace(/\s/g,'').slice(3,6).replace('A', '').replace('d', '')
                  } catch {
                    return 0
                  }
                },(idNumSon40))

                

                data = loadNotes()

                data.push({
                  "Barkod": `${barkodVeri[i]}35`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": erb01_35 === "" || parseInt(erb01_35) - 1 < 0 ? 0 : parseInt(erb01_35) - 1,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}36`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": erb01_36 === "" || parseInt(erb01_36) - 1 < 0 ? 0 : parseInt(erb01_36) - 1,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}37`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": erb01_37 === "" || parseInt(erb01_37) - 1 < 0 ? 0 : parseInt(erb01_37) - 1,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}38`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": erb01_38 === "" || parseInt(erb01_38) - 1 < 0 ? 0 : parseInt(erb01_38) - 1,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}39`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": erb01_39 === "" || parseInt(erb01_39) - 1 < 0 ? 0 : parseInt(erb01_39) - 1,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}40`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": erb01_40 === "" || parseInt(erb01_40) - 1 < 0 ? 0 : parseInt(erb01_40) - 1,
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