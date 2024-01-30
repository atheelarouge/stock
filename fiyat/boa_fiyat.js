const fs = require('fs');
const express = require('express');
const chalk = require('chalk');
const puppeteer = require('puppeteer');
const path = require('path')

async function fiyatBoa() {
    await (async function () {
        const PORT = 5478;

        const app = express()

        const loadNotes = () => {
            try {
                const dataBuffer = fs.readFileSync(path.join(__dirname,'boa_fiyat.json'))
                const dataJSON = dataBuffer.toString()
                return JSON.parse(dataJSON)

            } catch {
                return []
            }
        }

        const saveNotes = (num) => {
            const dataJSON = JSON.stringify(num)
            fs.writeFileSync(path.join(__dirname, 'boa_fiyat.json'), dataJSON)
        }

        const enDskFyt = (boafyt) => {

          let fyt = parseInt(boafyt)*3.7

          if(fyt < 449) {
            return 449
          } else {
            return fyt
          }
        }

        app.listen(PORT, () => console.log(chalk.bgGreen(`server is running on PORT ${PORT}`)))

        await (async function boaFiyat() {
            try{

                let json = JSON.parse(fs.readFileSync(path.join(__dirname, '../stock/boa_stok/boa_data.json')))

                let veriLenght = json.link.length
                let linkVeri = json.link
                let barkodVeri = json.barkod

                await (async function () {
                    const browser = await puppeteer.launch({
                        headless: true,
                        // executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
                        // userDataDir: '/Users/arcen/Library/Application Support/Google/Chrome/Default',
                        timeout: 0,
                        defaultViewport: null,
                    })

                    // Login
                    const page = await browser.newPage();

                   

                    try {
                      await page.goto('https://www.bayiboa.com/index.php?route=account/login', {
                        waitUntil: 'networkidle2'
                      })
                      await page.waitForSelector('#content > div > div:nth-child(2) > div > form > input')

                      await page.type('input[placeholder="E-Posta Adresi"]', 'tuncaymaliev@gmail.com', {
                          delay: 200
                      })

                      await page.type('input[placeholder="Parola"]', 'wickeda14+', {
                          delay: 200
                      })

                      await page.click('#content > div > div:nth-child(2) > div > form > input', {
                          delay: 200
                      })

                      await page.waitForSelector('#logo')
                    } catch (err) {
                        console.log('allready login..')
                    }


                    // Loop Function
                    for(i = 0; i < veriLenght; i++) {

                        await page.goto(linkVeri[i], {
                            waitUntil: 'networkidle2'
                        })
                        await (async function() {
                            try {

                                boafyt = "#content > div:nth-child(1) > div.col-xs-12.col-sm-4 > ul > li.alis-li > h2"

                                var boafyt = await page.evaluate((boafyt) => {
                                    try {
                                      return document.querySelector(boafyt).textContent.split(',')
                                    } catch {
                                      return ''
                                    }
                                    
                                  },(boafyt))
                  
                                  data = loadNotes()
                  
                                  data.push({
                                    "Barkod": `${barkodVeri[i]}39`,
                                    "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                    "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                    "Ürün Stok Adedi": '',
                                  })
                      
                                  data.push({
                                    "Barkod": `${barkodVeri[i]}40`,
                                    "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                    "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                    "Ürün Stok Adedi": '',
                                  })
                      
                                  data.push({
                                    "Barkod": `${barkodVeri[i]}41`,
                                    "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                    "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                    "Ürün Stok Adedi": '',
                                  })
                      
                                  data.push({
                                    "Barkod": `${barkodVeri[i]}42`,
                                    "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                    "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                    "Ürün Stok Adedi": '',
                                  })
                      
                                  data.push({
                                    "Barkod": `${barkodVeri[i]}43`,
                                    "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                    "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                    "Ürün Stok Adedi": '',
                                  })
                      
                                  data.push({
                                    "Barkod": `${barkodVeri[i]}44`,
                                    "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                    "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                    "Ürün Stok Adedi": '',
                                  })
                      
                                  data.push({
                                    "Barkod": `${barkodVeri[i]}45`,
                                    "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                    "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                    "Ürün Stok Adedi": '',
                                  })
                      
                                  await saveNotes(data)
                      
                                  await console.log(chalk.bgGrey.bold(`${barkodVeri[i]}...`))


                            } catch (err) {
                                data = loadNotes()

                                data.push({
                                    "Barkod": `${barkodVeri[i]}39`,
                                    "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                    "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                    "Ürün Stok Adedi": ""
                                  })
    
                                data.push({
                                    "Barkod": `${barkodVeri[i]}40`,
                                    "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                    "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                    "Ürün Stok Adedi": ""
                                  })
    
                                    data.push({
                                    "Barkod": `${barkodVeri[i]}41`,
                                    "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                    "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                    "Ürün Stok Adedi": ""
                                    })
                        
                                    data.push({
                                    "Barkod": `${barkodVeri[i]}42`,
                                    "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                    "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                    "Ürün Stok Adedi": ""
                                    })
                        
                                    data.push({
                                    "Barkod": `${barkodVeri[i]}43`,
                                    "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                    "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                    "Ürün Stok Adedi": ""
                                    })
                        
                                    data.push({
                                    "Barkod": `${barkodVeri[i]}44`,
                                    "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                    "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                    "Ürün Stok Adedi": ""
                                    })
                    
                                    data.push({
                                    "Barkod": `${barkodVeri[i]}45`,
                                    "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                    "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                    "Ürün Stok Adedi": "",
                                    })
                    
                                    await console.log(err)
                                    await console.log(chalk.bgRed.bold(`${barkodVeri[i]}... Error`))
                    
                                    await saveNotes(data)
                            }

                        })();
                    }


                })();
            } catch(err) {
                console.log(chalk.bgRed.bold(err, 'General error occured'))
            }

        })();

        // Knack

        await (async function boaFiyat() {
          try{

              let json = JSON.parse(fs.readFileSync(path.join(__dirname, '../stock/knack_stok/knack_data.json')))

              let veriLenght = json.link.length
              let linkVeri = json.link
              let barkodVeri = json.barkod

              await (async function () {
                  const browser = await puppeteer.launch({
                      headless: true,
                      // executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
                      // userDataDir: '/Users/arcen/Library/Application Support/Google/Chrome/Default',
                      timeout: 0,
                      defaultViewport: null,
                  })

                  // Login
                  const page = await browser.newPage();

                 

                  try {
                    await page.goto('https://www.bayiknack.com/uyelik/giris-yap', {
                      waitUntil: 'networkidle2'
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
                  } catch (err) {
                      console.log('allready login..')
                  }


                  // Loop Function
                  for(i = 0; i < veriLenght; i++) {

                      await page.goto(linkVeri[i], {
                          waitUntil: 'networkidle2'
                      })
                      await (async function() {
                          try {

                              boafyt = "#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-info-container > div.product-info-detail > div.product-price > span.product-sale-price"

                              var boafyt = await page.evaluate((boafyt) => {
                                  try {
                                    return document.querySelector(boafyt).textContent.split(',')
                                  } catch {
                                    return ''
                                  }
                                  
                                },(boafyt))
                
                                data = loadNotes()
                
                                data.push({
                                  "Barkod": `${barkodVeri[i]}39`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                data.push({
                                  "Barkod": `${barkodVeri[i]}40`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                data.push({
                                  "Barkod": `${barkodVeri[i]}41`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                data.push({
                                  "Barkod": `${barkodVeri[i]}42`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                data.push({
                                  "Barkod": `${barkodVeri[i]}43`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                data.push({
                                  "Barkod": `${barkodVeri[i]}44`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                data.push({
                                  "Barkod": `${barkodVeri[i]}45`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                await saveNotes(data)
                    
                                await console.log(chalk.bgGrey.bold(`${barkodVeri[i]}...`))


                          } catch (err) {
                              data = loadNotes()

                              data.push({
                                  "Barkod": `${barkodVeri[i]}39`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                })
  
                              data.push({
                                  "Barkod": `${barkodVeri[i]}40`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                })
  
                                  data.push({
                                  "Barkod": `${barkodVeri[i]}41`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                  })
                      
                                  data.push({
                                  "Barkod": `${barkodVeri[i]}42`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                  })
                      
                                  data.push({
                                  "Barkod": `${barkodVeri[i]}43`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                  })
                      
                                  data.push({
                                  "Barkod": `${barkodVeri[i]}44`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                  })
                  
                                  data.push({
                                  "Barkod": `${barkodVeri[i]}45`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": "",
                                  })
                  
                                  await console.log(err)
                                  await console.log(chalk.bgRed.bold(`${barkodVeri[i]}... Error`))
                  
                                  await saveNotes(data)
                          }

                      })();
                  }

              })();
          } catch(err) {
              console.log(chalk.bgRed.bold(err, 'General error occured'))
          }



          

      })();

        // Wagoon

        await (async function boaFiyat() {
          try{

              let json = JSON.parse(fs.readFileSync(path.join(__dirname, '../stock/wagoon_stok/wagoon_data.json')))

              let veriLenght = json.link.length
              let linkVeri = json.link
              let barkodVeri = json.barkod

              await (async function () {
                  const browser = await puppeteer.launch({
                      headless: true,
                      // executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
                      // userDataDir: '/Users/arcen/Library/Application Support/Google/Chrome/Default',
                      timeout: 0,
                      defaultViewport: null,
                  })

                  // Login
                  const page = await browser.newPage();

                 

                  try {
                    await page.goto('https://www.bayiwagoon.com/index.php?route=account/login', {
                      waitUntil: 'networkidle2'
                    })
                    await page.waitForSelector('#content > div > div:nth-child(2) > div > form > input')

                    await page.type('input[placeholder="E-Posta Adresi"]', 'tuncaymaliev@gmail.com', {
                        delay: 200
                    })

                    await page.type('input[placeholder="Parola"]', 'tma200786', {
                        delay: 200
                    })

                    await page.click('#content > div > div:nth-child(2) > div > form > input', {
                        delay: 200
                    })

                    await page.waitForSelector('#logo')

                  } catch (err) {
                      console.log('allready login..')
                  }


                  // Loop Function
                  for(i = 0; i < veriLenght; i++) {

                      await page.goto(linkVeri[i], {
                          waitUntil: 'networkidle2'
                      })
                      await (async function() {
                          try {

                              boafyt = "#content > div:nth-child(1) > div.col-xs-12.col-sm-4 > ul > li.alis-li > h2"

                              var boafyt = await page.evaluate((boafyt) => {
                                  try {
                                    return document.querySelector(boafyt).textContent.split(',')
                                  } catch {
                                    return ''
                                  }
                                  
                                },(boafyt))
                
                                data = loadNotes()
                
                                data.push({
                                  "Barkod": `${barkodVeri[i]}39`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                data.push({
                                  "Barkod": `${barkodVeri[i]}40`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                data.push({
                                  "Barkod": `${barkodVeri[i]}41`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                data.push({
                                  "Barkod": `${barkodVeri[i]}42`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                data.push({
                                  "Barkod": `${barkodVeri[i]}43`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                data.push({
                                  "Barkod": `${barkodVeri[i]}44`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                data.push({
                                  "Barkod": `${barkodVeri[i]}45`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                await saveNotes(data)
                    
                                await console.log(chalk.bgGrey.bold(`${barkodVeri[i]}...`))


                          } catch (err) {
                              data = loadNotes()

                              data.push({
                                  "Barkod": `${barkodVeri[i]}39`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                })
  
                              data.push({
                                  "Barkod": `${barkodVeri[i]}40`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                })
  
                                  data.push({
                                  "Barkod": `${barkodVeri[i]}41`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                  })
                      
                                  data.push({
                                  "Barkod": `${barkodVeri[i]}42`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                  })
                      
                                  data.push({
                                  "Barkod": `${barkodVeri[i]}43`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                  })
                      
                                  data.push({
                                  "Barkod": `${barkodVeri[i]}44`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                  })
                  
                                  data.push({
                                  "Barkod": `${barkodVeri[i]}45`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": "",
                                  })
                  
                                  await console.log(err)
                                  await console.log(chalk.bgRed.bold(`${barkodVeri[i]}... Error`))
                  
                                  await saveNotes(data)
                          }

                      })();
                  }

              })();
          } catch(err) {
              console.log(chalk.bgRed.bold(err, 'General error occured'))
          }


      })();

        // Erbilden

        await (async function boaFiyat() {
          try{

              let json = JSON.parse(fs.readFileSync(path.join(__dirname, '../stock/erb_stok/erb_veri.json')))

              let veriLenght = json.link.length
              let linkVeri = json.link
              let barkodVeri = json.barkod

              await (async function () {
                  const browser = await puppeteer.launch({
                      headless: true,
                      // executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
                      // userDataDir: '/Users/arcen/Library/Application Support/Google/Chrome/Default',
                      timeout: 0,
                      defaultViewport: null,
                  })

                  // Login
                  const page = await browser.newPage();

                 

                  try {
                    await page.goto('https://www.xmlcim.com/index.php?route=account/login', {
                      waitUntil: 'networkidle2'
                    })
                    await page.waitForSelector('#content > div > div:nth-child(2) > div > form > input')

                    await page.type('input[placeholder="E-Posta Adresi"]', 'tuncaymaliev@gmail.com', {
                        delay: 200
                    })

                    await page.type('input[placeholder="Parola"]', 'tma200786', {
                        delay: 200
                    })

                    await page.click('#content > div > div:nth-child(2) > div > form > input', {
                        delay: 200
                    })

                    await page.waitForSelector('#logo')

                  } catch (err) {
                      console.log('allready login..')
                  }


                  // Loop Function
                  for(i = 0; i < veriLenght; i++) {

                      await page.goto(linkVeri[i], {
                          waitUntil: 'networkidle2'
                      })
                      await (async function() {
                          try {

                              boafyt = "#content > div:nth-child(1) > div.col-xs-12.col-sm-4 > ul > li.alis-li > h2"

                              var boafyt = await page.evaluate((boafyt) => {
                                  try {
                                    return document.querySelector(boafyt).textContent.split(',')
                                  } catch {
                                    return ''
                                  }
                                  
                                },(boafyt))
                
                                data = loadNotes()
                
                                data.push({
                                  "Barkod": `${barkodVeri[i]}35`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                data.push({
                                  "Barkod": `${barkodVeri[i]}36`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                data.push({
                                  "Barkod": `${barkodVeri[i]}37`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                data.push({
                                  "Barkod": `${barkodVeri[i]}38`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                data.push({
                                  "Barkod": `${barkodVeri[i]}39`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                data.push({
                                  "Barkod": `${barkodVeri[i]}40`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": enDskFyt(boafyt[0])+100,
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": enDskFyt(boafyt[0]),
                                  "Ürün Stok Adedi": '',
                                })
                    
                                await saveNotes(data)
                    
                                await console.log(chalk.bgGrey.bold(`${barkodVeri[i]}...`))


                          } catch (err) {
                              data = loadNotes()

                              data.push({
                                  "Barkod": `${barkodVeri[i]}35`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                })
  
                              data.push({
                                  "Barkod": `${barkodVeri[i]}36`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                })
  
                                  data.push({
                                  "Barkod": `${barkodVeri[i]}37`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                  })
                      
                                  data.push({
                                  "Barkod": `${barkodVeri[i]}38`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                  })
                      
                                  data.push({
                                  "Barkod": `${barkodVeri[i]}39`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                  })
                      
                                  data.push({
                                  "Barkod": `${barkodVeri[i]}40`,
                                  "Piyasa Satış Fiyatı (KDV Dahil)": "",
                                  "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
                                  "Ürün Stok Adedi": ""
                                  })
                  
                  
                                  await console.log(err)
                                  await console.log(chalk.bgRed.bold(`${barkodVeri[i]}... Error`))
                  
                                  await saveNotes(data)
                          }

                      })();
                  }

              })();
          } catch(err) {
              console.log(chalk.bgRed.bold(err, 'General error occured'))
          }


      })();

        await (async function() {
            await console.log(chalk.bgBlue.bold('Fiyat Exceli Çıkarıldı...'))
        })();

    })();
}

module.exports = fiyatBoa