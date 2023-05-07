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
    
      await (async function reklam() {
        try {
          await(async function () {
            const browser = await puppeteer.launch({
              headless: true,
              executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
              userDataDir: '/Users/athee/Library/Application Support/Google/Chrome/Default',
            })
            // Login
  
            const page = await browser.newPage();
  
            await page.goto("https://partner.trendyol.com/seller-ads/product/edit-advert/e672bebf-42c1-46b5-b378-a67d67583463?showBudgetContainer=false", {
              waitUntil: 'networkidle2'
            })
  
            // Erkek CPC
            for(i = 0; i < 10000; i++) {
              try {
                const erkekveri = await page.evaluate(() => {
                  return document.querySelector('#app > div.sc-laZRCg.jHpBAj > div.product-advert-detail-container > div > div.TuMdlibeAKzQN1BoUPXA > div > div.FHwJPZ_6f43tjqz022Z9 > div.KdiA64W77pRy68fGGuTz').innerHTML
                })
                const date = moment().format().split('T')[1].split('+')[0]
  
                data = loadNotes()
      
                await data.push({
                  "Reklam_Ad": `erkek_senaker_03`,
                  "CPC": erkekveri,
                  "Time": date,
                })
                await saveNotes(data)
      
                await console.log(`Data saved at ${date} => CPC=${erkekveri}`.bgCyan)
      
                await page.waitForTimeout(900000)
                await page.reload({ waitUntil: ["networkidle2"] });

              } catch (error) {
                console.log('Data can not get'.bgRed)
              }
  
            }
          })()
        } catch (e){
          console.log('Something went wrong'.bgRed, e)
        }
      
      })()
    
  })()
  
  
}

module.exports = reklam_tik