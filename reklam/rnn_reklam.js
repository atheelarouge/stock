const fs = require('fs')
const express = require('express')
const chalk = require('chalk')
const puppeteer = require('puppeteer')
const path = require('path')

async function rnn_reklam_tik() {
  await (async function () {
    const PORT = 9785;

    const app = express()

    const loadNotes = () => {
      try {
        const dataBuffer = fs.readFileSync("D:/Own_Projects/07_web_scarper/reklam/rnn_reklam_tik_veri.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

      } catch {
        return []
      }
    }

    const saveNotes = (num) => {
      const dataJSON = JSON.stringify(num)
      fs.writeFileSync('D:/Own_Projects/07_web_scarper/reklam/rnn_reklam_tik_veri.json', dataJSON)

    }

    app.listen(PORT, () => console.log(chalk.bgGreen(`server running on PORT ${PORT}`)))


    let json = JSON.parse(fs.readFileSync(path.join("D:/Own_Projects/07_web_scarper/reklam/rnn_reklam_link.json")));


    let veriLenght = json.link.length
    let linkVeri = json.link


    await (async function reklam_fun01() {
      try {
        await (async function () {
          const browser = await puppeteer.launch({
            headless: true,
            executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
            userDataDir: '/Users/athee/Library/Application Support/Google/Chrome/Default',
            timeout: 0,
            defaultViewport: null,
          })
          // Need Login and Revision
          // Login
          const page = await browser.newPage();
          await page.goto("https://partner.trendyol.com/dashboard", {
            waitUntil: 'networkidle2'
          })

          await page.waitForSelector("#app-wrapper > div:nth-child(2) > div > div > div > div.section.g-col-lg-12.g-px-15 > div > div.g-col-lg-4.g-col-md-12.g-p-0.g-mb-16.g-d-justify-space-between.g-d-align-center.g-d-flex > div > div > div > div.seller-info.g-d-flex.g-d-justify-center.g-d-direction-column.g-px-20 > div.seller-name-wrapper > span.seller-name")

          
          
          // await page.waitForSelector('#app-wrapper > div > div.auth.with-header-footer > div > div > div.login.g-d-flex > div.form > div.login-form > div > form > div.sc-bold.g-text-main-grey-500.-headline-03.g-text')

          // await page.type('input[placeholder="E-posta adresinizi veya telefon numaranızı giriniz..."]', 'tuncaymaliev2@gmail.com', {
          //   delay: 200
          // })
          // await page.type('input[placeholder="Şifrenizi giriniz..."]', 'Tma200786+', {
          //   delay: 200
          // })
          // await page.click('#app-wrapper > div > div.auth.with-header-footer > div > div > div.login.g-d-flex > div.form > div.login-form > div > form > button > div', {
          //   delay: 200
          // })

          
          // Loop Function
          while (n = 0, n < 1000){
            for (i = 0; i < veriLenght; i++ ) {

              await page.goto(linkVeri[i], {
                waitUntil: 'networkidle2'
              })
  
              await (async function() {
                try {
  
                  await page.waitForSelector("#app > div.sc-laZRCg.jHpBAj > div.product-advert-detail-container > div > div.TuMdlibeAKzQN1BoUPXA > div > div.DozsyLt3hXOklKvU1L32 > div > div.xJXJDzmjX2jffvmtlaRx")
  
        
                  // const veri = await page.evaluate(() => {
                  //   return Array.from(document.querySelectorAll('.xJXJDzmjX2jffvmtlaRx')).map(x => x.textContent.slice(8,12).trim())
                  // })
  
                  var veri = await page.evaluate(() => {
                    try {
                      return document.querySelector(`.xJXJDzmjX2jffvmtlaRx`).textContent.slice(8,12).replace(',', '.')
                    } catch {
                      return 0
                    }
                  })
      
                  data = loadNotes()
                  fixed_veri = (parseFloat(veri)+0.05).toFixed(2).replace('.', ',')
                  data.push({
                     [i]: fixed_veri
                  })
      
                  await saveNotes(data)
      
                  await console.log(chalk.bgGrey.bold(`${veri} added...`))
                  
      
                } catch (err) {
                  data = loadNotes()
  
                  data.push({
                    [i]: 0
                  })
  
                  await console.log(chalk.bgRed.bold(`Error`))
    
                  await saveNotes(data)
     
                }
                
              })()
  
             }
  
             for (i = 0; i < veriLenght; i++ ) {
  
              await page.goto(linkVeri[i], {
                waitUntil: 'networkidle2'
              })
  
              await (async function() {
                try {
  
                  await page.waitForSelector("#app > div.sc-laZRCg.jHpBAj > div.product-advert-detail-container > div > div.TuMdlibeAKzQN1BoUPXA > div > div.DozsyLt3hXOklKvU1L32 > div > div.xJXJDzmjX2jffvmtlaRx")
  
        
                  // const veri = await page.evaluate(() => {
                  //   return Array.from(document.querySelectorAll('.xJXJDzmjX2jffvmtlaRx')).map(x => x.textContent.slice(8,12).trim())
                  // })
  
                  var veri1 = await page.evaluate(() => {
                    try {
                      return document.querySelector(`#app > div.sc-laZRCg.jHpBAj > div.product-advert-detail-container > div > div.TuMdlibeAKzQN1BoUPXA > div > div.RxfeGeYUxvt5YQjspH3G > div.GtjsS5nDGuYkDDqmQ69A > div.tMb1rXWS4VW9jitNUggv > bl-input`).getAttribute('value').replace(',','.')
                    } catch {
                      return 0
                    }
                  })
  
                  let veri2 = loadNotes()
  
                  fix1 = (parseFloat(veri1)).toFixed(2)
                  fix2 = (parseFloat(veri2[i][i].replace(',', '.'))).toFixed(2)
                  
                  if ( fix1 !== fix2) {
                    await page.type('#app > div.sc-laZRCg.jHpBAj > div.product-advert-detail-container > div > div.TuMdlibeAKzQN1BoUPXA > div > div.RxfeGeYUxvt5YQjspH3G > div.GtjsS5nDGuYkDDqmQ69A > div.tMb1rXWS4VW9jitNUggv > bl-input', `${veri2[i][i]}`, {
                        delay: 200
                      })
  
                      await page.click('#app > div.sc-laZRCg.jHpBAj > div.product-advert-detail-container > div > div.actions-container.only-buttons > bl-button', {
                          delay: 200
                        })

                        console.log(`${i} changed from ${fix1} to ${fix2}`)
  
                  }else {
                    console.log(`${i}: ${fix1} = ${fix2}`)
                  }
  
                  
      
                } catch (err) {
                  
                  await console.log(chalk.bgRed.bold(`Error`))
    
                  await console.log(err)
     
                }
                
              })()
  
             }

            await (async function() {
              const path = "D:/Own_Projects/07_web_scarper/reklam/rnn_reklam_tik_veri.json";
          
                try {
                  fs.unlinkSync(path);
                  console.log("File removed:", path);
                } catch (err) {
                  console.error(err);
                }
              
            })()
            
  
            const date = new Date().toLocaleString('en-US', {
              timeZone: 'Europe/Istanbul'
            });
            console.log(date);

            await page.waitForTimeout(2700000)
            
            n++;
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

module.exports = rnn_reklam_tik