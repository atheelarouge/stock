const fs = require('fs')
const express = require('express');
const chalk = require('chalk')
const puppeteer = require('puppeteer');
const path = require('path');


async function stokCo() {
  await (async function () {
    const PORT = 5648;

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


    let json = JSON.parse(fs.readFileSync(path.join(__dirname, 'co_data.json')));


    let veriLenght = json.link.length
    let linkVeri = json.link
    let barkodVeri = json.barkod
    let idVeri = json.id


    await (async function wagoon_fun1() {
      try {
        await (async function () {
          const browser = await puppeteer.launch({
            headless: true,
            executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
            userDataDir: '/Users/athee/Library/Application Support/Google/Chrome/Default',
            timeout: 0,
            defaultViewport: null,
          })

          // Login
          const page = await browser.newPage();

          await page.goto("https://www.bayico.com/index.php?route=account/login", {
            waitUntil: 'networkidle2'
          })
          await page.waitForSelector("#content > div > div:nth-child(2) > div > form > input")

          await page.type('input[placeholder="E-Posta Adresi"]', 'tuncaymaliev@gmail.com', {
            delay: 200
          })

          await page.type('input[placeholder="Parola"]', 'tma200786', {
            delay: 200
          })
          await page.click("#content > div > div:nth-child(2) > div > form > input", {
            delay: 200
          })

          await page.waitForSelector('#logo')

          // Loop Function
           for (i = 0; i < veriLenght; i++ ) {

            await page.goto(linkVeri[i], {
              waitUntil: 'networkidle2'
            })

            await (async function() {
              const idNum = Number(idVeri[i])

              let idNum39 = idNum-1
              let idNum40 = idNum
              let idNum41 = idNum+1
              let idNum42 = idNum+2
              let idNum43 = idNum+3
              let idNum44 = idNum+4
              let idNum45 = idNum+5

              let idNumSon39 = idNum39.toString()
              let idNumSon40 = idNum40.toString()
              let idNumSon41 = idNum41.toString()
              let idNumSon42 = idNum42.toString()
              let idNumSon43 = idNum43.toString()
              let idNumSon44 = idNum44.toString()
              let idNumSon45 = idNum45.toString()

              try {
                var boa01_39 = await page.evaluate((idNumSon39) => {
                  try {
                    return document.querySelector(`input[value="${idNumSon39}"]`).nextElementSibling.innerHTML.slice(1,4).replace('A', '')
                  } catch {
                    return 0
                  }
                  
                },(idNumSon39))
                var boa01_40 = await page.evaluate((idNumSon40) => {
                  try {
                    return document.querySelector(`input[value="${idNumSon40}"]`).nextElementSibling.innerHTML.slice(1,4).replace('A', '')
                  } catch {
                    return 0
                  }
                },(idNumSon40))
                var boa01_41 = await page.evaluate((idNumSon41) => {
                  try {
                    return document.querySelector(`input[value="${idNumSon41}"]`).nextElementSibling.innerHTML.slice(1,4).replace('A', '')
                  } catch {
                    return 0
                  }
                },(idNumSon41))
                var boa01_42 = await page.evaluate((idNumSon42) => {
                  try {
                    return document.querySelector(`input[value="${idNumSon42}"]`).nextElementSibling.innerHTML.slice(1,4).replace('A', '')
                  } catch {
                    return 0
                  }
                },(idNumSon42))
                var boa01_43 = await page.evaluate((idNumSon43) => {
                  try {
                    return document.querySelector(`input[value="${idNumSon43}"]`).nextElementSibling.innerHTML.slice(1,4).replace('A', '')
                  } catch {
                    return 0
                  }
                },(idNumSon43))

                var boa01_44 = await page.evaluate((idNumSon44) => {
                  try {
                    return document.querySelector(`input[value="${idNumSon44}"]`).nextElementSibling.innerHTML.slice(1,4).replace('A', '')
                  } catch {
                    return 0
                  }
                },(idNumSon44))

                var boa01_45 = await page.evaluate((idNumSon45) => {
                  try {
                    return document.querySelector(`input[value="${idNumSon45}"]`).nextElementSibling.innerHTML.slice(1,4).replace('A', '')
                  } catch {
                    return 0
                  }
                },(idNumSon45))

                data = loadNotes()

                data.push({
                  "Barkod": `${barkodVeri[i]}39`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(boa01_39)-1,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}40`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(boa01_40)-1,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}41`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(boa01_41)-1,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}42`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(boa01_42)-1,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}43`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(boa01_43)-1,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}44`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(boa01_44)-1,
                })
    
                data.push({
                  "Barkod": `${barkodVeri[i]}45`,
                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                  "Ürün Stok Adedi": parseInt(boa01_45),
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


module.exports = stokCo