const fs = require('fs')
const express = require('express');
const chalk = require('chalk')
const puppeteer = require('puppeteer');
const Myrand = require('./fotovars.js')

async function mida_insta() {
  const PORT = 2222;
  const app = express()

  const insta_home_page = 'https://www.instagram.com/midashoesmen/'

  app.listen(PORT, () => console.log(chalk.bgGreen(`Server running on PORT ${PORT}`)))

    const browser = await puppeteer.launch({
      headless: false,
      executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
      userDataDir: 'userDataDir',
      timeout: 0,
      defaultViewport: null,

    })

    const page = await browser.newPage();

    await page.goto(insta_home_page, {
          waitUntil: 'networkidle0'
        })

  // Mida Shoes
  const funOto = async () => {

    for(let i = 0; i < 1000; i++) {
      var a = Math.floor(Math.random() * 44);
      var num = Myrand(10,0);
      
      var json = JSON.parse(fs.readFileSync('D:/Own_Projects/07_web_scarper/stock/mida_insta.json').toString());

    await page.waitForTimeout(5000)
    
    await page.goto(insta_home_page, {
      waitUntil: 'networkidle0'
    })

    await page.waitForTimeout(5000)

    await page.click('#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg.KtFt3 > div > div:nth-child(3) > div > button > div > svg')
    
    await page.waitForTimeout(5000)
    
    const [fileChooser] = await Promise.all([
      page.waitForFileChooser(),
      page.click('body > div.RnEpo.gpWnf.Yx5HN > div.pbNvD > div > div > div > div.uYzeu > div._C8iK > div > div > div.qF0y9.Igw0E.rBNOH.eGOV_.ybXk5._4EzTm.kEKum > div > button')
    ])

    await fileChooser.accept([json.foto[a][num[0]], json.foto[a][num[1]], json.foto[a][num[2]], json.foto[a][num[3]], json.foto[a][num[4]], json.foto[a][num[5]], json.foto[a][num[6]], json.foto[a][num[7]], json.foto[a][num[8]], json.foto[a][num[9]]   ])

    await page.waitForTimeout(3000)

    await page.click('body > div.RnEpo.gpWnf.Yx5HN > div.pbNvD > div > div > div > div.uYzeu > div._C8iK > div > div > div > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.bkEs3.soMvl.JI_ht.DhRcB.O1flK.D8xaz.fm1AK > div > div:nth-child(2) > div > button > div > svg')

    await page.waitForTimeout(3000)
    
    await page.click('body > div.RnEpo.gpWnf.Yx5HN > div.pbNvD > div > div > div > div.uYzeu > div._C8iK > div > div > div > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.bkEs3.soMvl.JI_ht.DhRcB.O1flK.D8xaz.fm1AK > div > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.lC6p0.HVWg4 > div > button:nth-child(1) > div > div.qF0y9.Igw0E._56XdI.eGOV_.vwCYk > div')

    await page.waitForTimeout(3000)

    await page.click('body > div.RnEpo.gpWnf.Yx5HN > div.pbNvD > div > div > div > div.uYzeu > div._C8iK > div > div > div > div:nth-child(5) > div > div.x07tD')

    await page.waitForTimeout(3000)
    
    await page.click('body > div.RnEpo.gpWnf.Yx5HN > div.pbNvD > div > div > div > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.WaOAr._8E02J > div > button')

    await page.waitForTimeout(3000)

    await page.click('body > div.RnEpo.gpWnf.Yx5HN > div.pbNvD > div > div > div > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.WaOAr._8E02J > div > button')

    await page.waitForSelector('body > div.RnEpo.gpWnf.Yx5HN > div.pbNvD > div > div > div > div.uYzeu.gIMwG > div._83r9B > div > div > div > div:nth-child(2) > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm')

    await page.type('body > div.RnEpo.gpWnf.Yx5HN > div.pbNvD > div > div > div > div.uYzeu.gIMwG > div._83r9B > div > div > div > div:nth-child(2) > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm > textarea', json.text[a], {
      delay: 200
    })

    await page.waitForTimeout(3000)

    await page.click('body > div.RnEpo.gpWnf.Yx5HN > div.pbNvD > div > div > div > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.WaOAr._8E02J > div > button')

    await page.waitForTimeout(5000)

    await page.goto(insta_home_page, {
      waitUntil: 'networkidle0'
    })

    console.log(chalk.bgGreen(`${json.foto[a][10]} model yüklendi...`))

    await page.waitForTimeout(5000)
    }

    
    
  };

  
  funOto()

}

module.exports = mida_insta