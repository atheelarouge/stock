const fs = require('fs')
const express = require('express');
const axios = require('axios');
const puppeteer = require('puppeteer');
const path = require('path');
const colors = require('colors')
const moment = require('moment');

async function reklam_tik() {
  await (async function() {
    const PORT = 2186;

    const app = express()

    const loadNotes = () => {
      try {
        const dataBuffer = fs.readFileSync(path.join(__dirname, 'reklam_tik_zaman.json'))
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
        
      } catch (e) {
         return []
      }
    }

    const saveNotes = (num) =>{
      const dataJSON = JSON.stringify(num)
      fs.writeFileSync(path.join(__dirname, 'reklam_tik_zaman.json'), dataJSON)
    }

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`.bgGreen))

    let json = JSON.parse(fs.readFileSync(path.join(__dirname, 'reklam_link.json')))

    let veriLength = json.link.length
    let linkVeri = json.link


    
    
    await (async function kadinfun1() {
      try {
        await (async function () {
          const browser = await puppeteer.launch({
            headless: false,
            timeout: 0,
            defaultViewport: null,
          })

          // Login
          const page = await browser.newPage();

          
          // Loop Function
           for (i = 0; i < veriLength; i++ ) {

            
            console.log(linkVeri[i])

            await page.goto(linkVeri[i], {
              waitUntil: 'networkidle2'
            })

            await (async function() {

              try {

                var reklam_ad = await page.evaluate(() => {
                  try {
                    return document.querySelector('bl-input[class="oc_ZZggwct6kOdpMjeEA"').getAttribute('value')
                  } catch {
                    return 0
                  }
                })

                // var minR = await page.evaluate(() => {
                //   try {
                //     return document.querySelector("KdiA64W77pRy68fGGuTz").innerHTML
                //   } catch {
                //     return 0
                //   }
                // })

                // var midR = await page.evaluate(() => {
                //   try {
                //     return document.querySelector("KdiA64W77pRy68fGGuTz").innerHTML
                //   } catch {
                //     return 0
                //   }
                // })

                // var maxR = await page.evaluate(() => {
                //   try {
                //     return document.querySelector("KdiA64W77pRy68fGGuTz").innerHTML
                //   } catch {
                //     return 0
                //   }
                // })

    
                
    
                data = loadNotes()
    
                data.push({
                  "Reklam Adı": reklam_ad,
                  // "Min": minR,
                  // "Mid": midR,
                  // "maxR": maxR
                })
    
    
                await saveNotes(data)
    
                await console.log(`Data puhsed ${reklam_ad}...`.bgCyan)
    
              } catch (err) {
                data = loadNotes()
    
                data.push({
                  "Reklam Adı": reklam_ad,
                  "Min": "DNG",
                  "Mid": "DNG",
                  "maxR": "DNG"
                })

                await console.log(err)
  
                await saveNotes(data)
  
              }
              
            })()


           }
          

        })();
      } catch (err) {
        console.log(err, `General error`.bgred)
      }
    })();
    
  })()
  
  
}

module.exports = reklam_tik