const puppeteer = require('puppeteer')
const express = require('express')
const chalk = require('chalk')

async function upload_stok() {
  await (async function () {

    const PORT = 4444;

    const app = express()

    const trend_dash_link = 'https://partner.trendyol.com/dashboard'
    const trend_upload_link = 'https://partner.trendyol.com/products/quick-upload'

    await app.listen(PORT, () => console.log(chalk.bgGreen(`server running on PORT ${PORT}`)))


    const browser = await puppeteer.launch({
      headless: false,
      executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
      userDataDir: '/Users/athee/Library/Application Support/Google/Chrome/Default',
      timeout: 0,
      defaultViewport: null,

    })
    const page = await browser.newPage();

    await page.goto(trend_dash_link, {
      waitUntil: 'networkidle0'
    })
    await page.goto(trend_upload_link, {
      waitUntil: 'networkidle0'
    })
    await page.click('#quick-upload-step-6 > div.mp-select.mb-4 > div.mp-select-toggle.form-control')
    await page.click('#quick-upload-step-6 > div.mp-select.mb-4.open > div.mp-dropdown > div > div > div:nth-child(3)')

    const [fileChooser] = await Promise.all([
      page.waitForFileChooser(),
      page.click('#quick-upload-step-6 > label > div')
    ])

    await fileChooser.accept(['C:/Users/athee/Desktop/Oto_stok/stok.xlsx'])

    await page.waitForTimeout(5000)

    await page.click('#quick-upload-step-6 > button')

    await page.waitForTimeout(10000)

    await console.log(chalk.bgGreen('Stok Yüklendi'))

    await browser.close();

  })()
}


module.exports = upload_stok;