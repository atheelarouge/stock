const fs = require('fs')
const express = require('express');
const chalk = require('chalk')
const puppeteer = require('puppeteer');

async function instaPost() {
  const PORT = 9999;
  const app = express()

  const insta_home_page = 'https://www.instagram.com'

  app.listen(PORT, () => console.log(chalk.bgGreen(`Server running on PORT ${PORT}`)))

  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    userDataDir: '/Users/athee/Library/Application Support/Google/Chrome/Default',
    timeout: 0,
    defaultViewport: null,

  })

  const page = await browser.newPage();

  for (let i = 0; i < 1000; i++) {

  }

  // MDSHCH001SYHCLTST
  const funOto = async () => {

    try {
      for (let i = 0; i < 1000; i++) {

        var json = JSON.parse(fs.readFileSync('D:/Own_Projects/07_web_scarper/insta_post/insta_foto.json').toString());

        var a = Math.floor(Math.random() * json.foto.length);

        console.log(a)

        await page.goto(insta_home_page, {
          waitUntil: 'networkidle2'
        })

        await page.waitForTimeout(3000)

        await page.click('svg[aria-label="Yeni Gönderi"]')

        await page.waitForTimeout(3000)

        const [fileChooser] = await Promise.all([
          page.waitForFileChooser(),
          page.click('button[class="_acan _acap _acas _aj1-"]')
        ])

        await fileChooser.accept([json.foto[a][0], json.foto[a][1], json.foto[a][2]])

        await page.waitForTimeout(3000)

        await page.click('svg[aria-label="Kırpmayı seç"]')

        await page.waitForTimeout(3000)

        await page.click('svg[aria-label="Fotoğraf Çerçevesi Simgesi"]')

        await page.waitForTimeout(3000)

        await page.click('div[class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x1lku1pv x1a2a7pz x6s0dn4 xjyslct x1ejq31n xd10rxx x1sy0etr x17r0tee x9f619 x1ypdohk x1i0vuye xwhw2v2 xl56j7k x17ydfre x1f6kntn x2b8uid xlyipyv x87ps6o x14atkfc x1d5wrs8 x972fbf xcfux6l x1qhh985 xm0m39n xm3z3ea x1x8b98j x131883w x16mih1h xt0psk2 xt7dq6l xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 xjbqb8w x1n5bzlp x173jzuc x1yc6y37"]') 
        await page.waitForTimeout(3000)

        await page.click('div[class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x1lku1pv x1a2a7pz x6s0dn4 xjyslct x1ejq31n xd10rxx x1sy0etr x17r0tee x9f619 x1ypdohk x1i0vuye xwhw2v2 xl56j7k x17ydfre x1f6kntn x2b8uid xlyipyv x87ps6o x14atkfc x1d5wrs8 x972fbf xcfux6l x1qhh985 xm0m39n xm3z3ea x1x8b98j x131883w x16mih1h xt0psk2 xt7dq6l xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 xjbqb8w x1n5bzlp x173jzuc x1yc6y37"]')

        await page.waitForTimeout(3000)

        await page.click('div[aria-label="Açıklama yaz..."]') 
        // <div class="x5dp1im xl565be xdj266r x11i5rnm xat24cr x1mh8g0r x1w2wdq1 xen30ot x1swvt13 x1pi30zi xh8yej3 xb88cxz x10l6tqk x47corl x1a2a7pz">Açıklama yaz...</div>

        await page.waitForTimeout(5000)

        await page.type('div[aria-label="Açıklama yaz..."]', json.text[a], {
          delay: 200
        })

        await page.waitForTimeout(3000)

        await page.click('div[class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x1lku1pv x1a2a7pz x6s0dn4 xjyslct x1ejq31n xd10rxx x1sy0etr x17r0tee x9f619 x1ypdohk x1i0vuye xwhw2v2 xl56j7k x17ydfre x1f6kntn x2b8uid xlyipyv x87ps6o x14atkfc x1d5wrs8 x972fbf xcfux6l x1qhh985 xm0m39n xm3z3ea x1x8b98j x131883w x16mih1h xt0psk2 xt7dq6l xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 xjbqb8w x1n5bzlp x173jzuc x1yc6y37"]')


        await page.goto(insta_home_page, {
          waitUntil: 'networkidle2'
        })

        console.log(chalk.bgGreen(`${json.foto[a][3]} model yüklendi...`))

        const date = new Date().toLocaleString('en-US', {
          timeZone: 'Europe/Istanbul'
        });
        console.log(date);

        let logFile = a + " / " + json.foto[a][3] + " / " + date + " // "

        await fs.appendFile('D:/Own_Projects/07_web_scarper/insta_post/log.txt', logFile, function (err) {
          if (err) throw err;
          console.log('Log Saved!');
        });

        await page.waitForTimeout(5400000)
      }

    } catch {

      const date = new Date().toLocaleString('en-US', {
        timeZone: 'Europe/Istanbul'
      });
      console.log(date);


      logError = `Error at ${date}  `

      await fs.appendFile('D:/Own_Projects/07_web_scarper/insta_post/log.txt', logError, function (err) {
        if (err) throw err;
        console.log('Error Catch!');
      });


      funOto()


    }


  };


  funOto()

}

module.exports = instaPost