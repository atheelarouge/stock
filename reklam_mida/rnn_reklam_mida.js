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
          
          // Loop Function
          while (n = 0, n < 10000){
            for (i = 0; i < veriLenght; i++ ) {

              await page.goto(linkVeri[i], {
                waitUntil: 'networkidle2'
              })
  
              await (async function() {
                try {
  
                  //await page.waitForSelector(".xJXJDzmjX2jffvmtlaRx")

                  // #app > div > div.sc-jEACwC.jmnVxU > div.product-advert-detail-container > div > div.TuMdlibeAKzQN1BoUPXA > div > div.RxfeGeYUxvt5YQjspH3G > div.GtjsS5nDGuYkDDqmQ69A > div.iP95KrxwZo9MsyO67fPN > span:nth-child(1)
        
                  // const veri = await page.evaluate(() => {
                  //   return Array.from(document.querySelectorAll('.xJXJDzmjX2jffvmtlaRx')).map(x => x.textContent.slice(8,12).trim())
                  // })


                  var placeTC = "#app > div > div.sc-jEACwC.jmnVxU > div.product-advert-detail-container > div > div.TuMdlibeAKzQN1BoUPXA > div > div.RxfeGeYUxvt5YQjspH3G > div.GtjsS5nDGuYkDDqmQ69A > div.iP95KrxwZo9MsyO67fPN"
                  var upBtn = '#app > div > div.sc-jEACwC.jmnVxU > div.product-advert-detail-container > div > div.TuMdlibeAKzQN1BoUPXA > div > div.RxfeGeYUxvt5YQjspH3G > div.GtjsS5nDGuYkDDqmQ69A > div.A2G6k7JsV3GjxYzoVxnb > button:nth-child(1) > bl-icon'
                  var downBtn = "#app > div > div.sc-jEACwC.jmnVxU > div.product-advert-detail-container > div > div.TuMdlibeAKzQN1BoUPXA > div > div.RxfeGeYUxvt5YQjspH3G > div.GtjsS5nDGuYkDDqmQ69A > div.A2G6k7JsV3GjxYzoVxnb > button:nth-child(2) > bl-icon"
                  var confBtn = '#app > div > div.sc-jEACwC.jmnVxU > div.product-advert-detail-container > div > div.T6S11f5_4VZfGchCLNGS > bl-button:nth-child(2)'
                  var newValue = 0.1
                  // clickButton
                 async function clickWithDelayUp(selector, delay = 200) {
                    await page.click(selector, { delay });
                  }

                  async function updatePlaceTC(page, placeTC, newValue) {
                    // Click the element specified by placeTC
                    await page.click(placeTC);
                
                    // Simulate deleting characters
                    for (let i = 0; i < 3; i++) {
                        await page.keyboard.press('Delete');
                    }
                    for (let i = 0; i < 3; i++) {
                        await page.keyboard.press('Backspace');
                    }
                
                    // Type the new value
                    await page.keyboard.type(newValue);
                    
                    // Press Enter
                    await page.keyboard.press('Enter');
                }
                // Usage example
                await updatePlaceTC(page, placeTC, newValue.toString().replace('.', ','));
        

                 /* var redveri = await page.evaluate(() => {
                    try {
                      return document.querySelector(`#app > div > div.sc-jEACwC.jmnVxU > div.product-advert-detail-container > div > div.TuMdlibeAKzQN1BoUPXA > div > div.RxfeGeYUxvt5YQjspH3G > div.GtjsS5nDGuYkDDqmQ69A > div.ojMTSgKY20OfUCoeVlwv > div > bl-icon`).getAttribute('style')
                    } catch {
                      return 0
                    }

                  }) */

                    async function getStyleAttribute(page, selector) {
                      return await page.evaluate((sel) => {
                        try {
                          const element = document.querySelector(sel);
                          return element ? element.getAttribute('style') : null; // Return null if the element is not found
                        } catch (error) {
                          console.error('Error fetching style attribute:', error);
                          return 0; // Return 0 in case of an error
                        }
                      }, selector);
                    }
                    
                    // Usage
                    const selector = `#app > div > div.sc-jEACwC.jmnVxU > div.product-advert-detail-container > div > div.TuMdlibeAKzQN1BoUPXA > div > div.RxfeGeYUxvt5YQjspH3G > div.GtjsS5nDGuYkDDqmQ69A > div.ojMTSgKY20OfUCoeVlwv > div > bl-icon`;
                    // var redveri = await getStyleAttribute(page, selector);
                    

                  //color: var(--bl-color-danger); font-size: 14px;
                  //color: var(--bl-color-warning); font-size: 14px;

                  ////////////////////////////////////////////////////////////////
                  /*
                  function delay(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }
                
                while (true) {
                    // Get the initial value of veri
                    var previousVeri = await page.evaluate(() => {
                        try {
                            return document.querySelector(`#app > div > div.sc-jEACwC.jmnVxU > div.product-advert-detail-container > div > div.TuMdlibeAKzQN1BoUPXA > div > div.RxfeGeYUxvt5YQjspH3G > div.GtjsS5nDGuYkDDqmQ69A > div.iP95KrxwZo9MsyO67fPN > span:nth-child(1)`).textContent;
                        } catch {
                            return 0;
                        }
                    });
                
                    // Get the current style attribute
                    var style = await getStyleAttribute(page, selector);
                
                    // Check if the style is color: var(--bl-color-warning)
                    while (style === 'color: var(--bl-color-warning); font-size: 14px;') {
                        await clickWithDelayUp(downBtn);
                        
                        // Check the new value of veri
                        var newVeri = await page.evaluate(() => {
                            try {
                                return document.querySelector(`#app > div > div.sc-jEACwC.jmnVxU > div.product-advert-detail-container > div > div.TuMdlibeAKzQN1BoUPXA > div > div.RxfeGeYUxvt5YQjspH3G > div.GtjsS5nDGuYkDDqmQ69A > div.iP95KrxwZo9MsyO67fPN > span:nth-child(1)`).textContent;
                            } catch {
                                return 0;
                            }
                        });
                        
                        // Break if veri has not changed
                        if (newVeri === previousVeri) {
                            break;
                        }
                        previousVeri = newVeri; // Update previousVeri for the next iteration
                
                        // Update the style again to check for changes
                        style = await getStyleAttribute(page, selector);
                    }
                
                    // If the style is color: var(--bl-color-danger)
                    while (style === 'color: var(--bl-color-danger); font-size: 14px;') {
                        await clickWithDelayUp(upBtn);
                        
                        // Check the new value of veri
                        newVeri = await page.evaluate(() => {
                            try {
                                return document.querySelector(`#app > div > div.sc-jEACwC.jmnVxU > div.product-advert-detail-container > div > div.TuMdlibeAKzQN1BoUPXA > div > div.RxfeGeYUxvt5YQjspH3G > div.GtjsS5nDGuYkDDqmQ69A > div.iP95KrxwZo9MsyO67fPN > span:nth-child(1)`).textContent;
                            } catch {
                                return 0;
                            }
                        });
                        
                        // Break if veri has not changed
                        if (newVeri === previousVeri) {
                            break;
                        }
                        previousVeri = newVeri; // Update previousVeri for the next iteration
                        
                        // Update the style again to check for changes
                        style = await getStyleAttribute(page, selector);
                
                        // If style changes to warning, break this loop
                        if (style === 'color: var(--bl-color-warning); font-size: 14px;') {
                            break;
                        }
                    }
                
                    // Click confBtn after the loops
                    await clickWithDelayUp(confBtn);
                    
                    // Wait for a specific time (e.g., 2 seconds) after clicking confBtn
                    await delay(2000); // Adjust the delay time (in milliseconds) as needed
                
                    // Break the outer loop
                    break;
                }*/


                /////////////////////////////////////////////////////////////////////////////////////////////
                

                while (true) {
                  // Get the current style attribute
                  const style = await getStyleAttribute(page, selector);
              
                  // Check if the style matches the expected values
                  if (
                      style === 'color: var(--bl-color-warning); font-size: 14px;'
                  ) {
                      break; // Break the loop if a match is found
                  }
              
                  // If the style does not match the warning color, increase newValue
                  newValue += 0.1; // Increment newValue by 0.1
              
                  // Update the element with the new value
                  await updatePlaceTC(page, placeTC, newValue.toString().replace('.', ','));
              
                  // Introduce a delay to allow for style updates to take effect
                  await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay time as necessary
              
                  // Click the confirmation button
                  await clickWithDelayUp(confBtn);
              
                  // Wait for an additional 2000 milliseconds after clicking the confirmation button
                  await new Promise(resolve => setTimeout(resolve, 2000));
              }
                  /*
                  let id = await page.evuluate(() => {
                    try {
                      return document.querySelector('span[TextContent="TBM Telifi"]')
                    } catch {
                      return console.log('An error')
                    }
                  })
                    */


                  var veri = await page.evaluate(() => {
                    try {
                      return document.querySelector(`#app > div > div.sc-jEACwC.jmnVxU > div.product-advert-detail-container > div > div.TuMdlibeAKzQN1BoUPXA > div > div.RxfeGeYUxvt5YQjspH3G > div.GtjsS5nDGuYkDDqmQ69A > div.iP95KrxwZo9MsyO67fPN > span:nth-child(1)`).textContent
                    } catch {
                      return 0
                    }
                  })
                  console.log(veri)
                  //console.log(redveri)
      
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

  
            const date = new Date().toLocaleString('en-US', {
              timeZone: 'Europe/Istanbul'
            });
            console.log(date);

            await page.waitForTimeout(600000)
            
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