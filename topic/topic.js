const fs = require('fs')
const express = require('express')
const chalk = require('chalk')
const puppeteer = require('puppeteer')
const path = require('path')

async function topic() {
  await (async function () {
    const PORT = 3598;

    const app = express()

    const loadNotes = () => {
      try {
        const dataBuffer = fs.readFileSync("D:/Own_Projects/07_web_scarper/topic/topic_data.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

      } catch {
        return []
      }
    }

    const saveNotes = (num) => {
      const dataJSON = JSON.stringify(num)
      fs.writeFileSync("D:/Own_Projects/07_web_scarper/topic/topic_data.json", dataJSON)

    }

    app.listen(PORT, () => console.log(chalk.bgGreen(`server running on PORT ${PORT}`)))


    let json = JSON.parse(fs.readFileSync(path.join("D:/Own_Projects/07_web_scarper/topic/data.json")));
    let rklm_tik = JSON.parse(fs.readFileSync(path.join("D:/Own_Projects/07_web_scarper/reklam/rnn_reklam_tik_veri.json")));


    let veriLenght = json.link.length
    let linkVeri = json.link


    await (async function reklam_fun01() {
      try {
        await (async function () {
          const browser = await puppeteer.launch({
            headless: false,
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

          
          // Loop Function
           for (i = 0; i < veriLenght; i++ ) {

            await page.goto(linkVeri[i], {
              waitUntil: 'networkidle2'
            })

            await (async function() {
              try {

                await page.waitForSelector("#app > div.sc-laZRCg.jHpBAj > div.product-advert-detail-container > div > div.TuMdlibeAKzQN1BoUPXA > div > div.DozsyLt3hXOklKvU1L32 > div > div.xJXJDzmjX2jffvmtlaRx")


                var veri1 = await page.evaluate(() => {
                        try {
                          return document.querySelector(`.xJXJDzmjX2jffvmtlaRx`).textContent.slice(8,12).replace(',', '.')
                        } catch {
                          return 0
                        }
                      })

                veri1 = (parseFloat(veri1)+0.05).toFixed(2)

                console.log(veri1)

                let veri2 = (rklm_tik[i])

                console.log(veri2)
                
                await page.waitForTimeout(4000000)
    
                await console.log(chalk.bgGrey.bold(`${veri2} added...`))

                
    
              } catch (err) {
                data = loadNotes()
                  veri = 0.05
                data.push({
                  veri
                })

                await console.log(chalk.bgRed.bold(`Error`))
  
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

module.exports = topic