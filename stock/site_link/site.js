const fs = require('fs')
const express = require('express');
const chalk = require('chalk')
const puppeteer = require('puppeteer');


async function site() {
  const PORT = 1212;

  const app = express();

  const main_page = "https://www.midashoes.com/admin/product/edit/4043"

  app.listen(PORT, () => console.log(chalk.bgGrey.bold(`server running on PORT ${PORT}`)))

  const browser = await puppeteer.launch({
    headless: false,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    userDataDir: '/Users/athee/Library/Application Support/Google/Chrome/Default',
    timeout: 0,
    defaultViewport: null,

  })



  var jsonsayi = JSON.parse(fs.readFileSync('D:/Own_Projects/07_web_scarper/stock/site_link/link.json').toString());

for(let n = 0; n < jsonsayi.site.length; n++) {
    // Varibles
    var json = JSON.parse(fs.readFileSync('D:/Own_Projects/07_web_scarper/stock/site_link/link.json').toString());
    const varibleMida = JSON.parse(fs.readFileSync('D:/Own_Projects/07_web_scarper/stock/site_link/varibles.json').toString());

    

    const aciklama = `• Mida Shoes özel üretim modelimiz günlük kullanım için özel olarak tasarlanmıştır.
• Ürün malzemesi birinci kalite ithal suni deridir, birinci kalite ökçe ve iç patoz kullanılarak imal edilmektedir.
• Ürün kaymaz tabana sahiptir, her zemin tipinde rahatlıkla kullanabilirsiniz.
• Kullanılan çelik taban sayesinde uzun ömürlü kullanım sağlamaktadır.
• Tüm ayakkabılarımız Türkiye'de kendi atölyemizde üretilmektedir.
    
• Marka: Mida Shoes
• Kategori: Bayan Bot
• Ürün Malzemesi: Suni Deri
• İç Astar : Suni Deri
• Topuk Boyu: 6,5 Cm
• Ürün Tam Kalıptır`;

   

    const page = await browser.newPage();
    page.on('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept();
    });

    await page.goto(json.site[n], {
    waitUntil: 'networkidle0'
  })

    const urun_adı = await page.evaluate(() => {
    return document.querySelector("#Name").getAttribute('value').replace(/ - kopya/g, '')
    })
    
    // Ürün Adı
    
    await page.focus('#Name');
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');
    await page.keyboard.type(varibleMida.mida_shoes[0] + urun_adı); 
    
    await page.waitForTimeout(500)

    await page.mouse.click(1250, 650, {button: 'left'})
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');
    await page.keyboard.type(aciklama); 
   await page.waitForTimeout(1250)

   // SKU ve Barkod
   const sku = await page.evaluate(() => {
    return document.querySelector("#Gtin").getAttribute('value')
    })
    const modelCode = await page.evaluate(() => {
      return document.querySelector("#ModelCode").getAttribute('value')
      })

   await page.focus('#Sku');
   await page.keyboard.down('Control');
   await page.keyboard.press('A');
   await page.keyboard.up('Control');
   await page.keyboard.press('Backspace');
   await page.keyboard.type(sku); 
   
   await page.waitForTimeout(1250)

   // Kaydet
   await page.click('#product-form > div > div > div > div.portlet-title > div.actions > div.btn-group.btn-group-devided.util-btn-margin-bottom-5 > button:nth-child(5) > span')
  await page.waitForTimeout(1250)

   // Fiyat
   const fiyat = JSON.parse(fs.readFileSync('D:/Own_Projects/07_web_scarper/stock/site_link/varibles.json').toString());

   await page.click('#product-edit > ul > li:nth-child(5) > span.k-link')

   await page.focus('#group-prices > div > div:nth-child(1) > div > span > span > input.k-formatted-value.k-input');
   await page.keyboard.down('Control');
   await page.keyboard.press('A');
   await page.keyboard.up('Control');
   await page.keyboard.press('Backspace');
   await page.keyboard.type(fiyat.fiyat[0]); 

  await page.waitForTimeout(1250)

  // Kaydet
   await page.click('#product-form > div > div > div > div.portlet-title > div.actions > div.btn-group.btn-group-devided.util-btn-margin-bottom-5 > button:nth-child(5) > span')
  await page.waitForTimeout(1250)

  // Seo Bilgileri
  await page.click('#product-edit > ul > li:nth-child(8) > span.k-link')
  await page.focus('#MetaTitle');
   await page.keyboard.down('Control');
   await page.keyboard.press('A');
   await page.keyboard.up('Control');
   await page.keyboard.press('Backspace');
   await page.keyboard.type(varibleMida.mida_shoes[0] + urun_adı); 
   await page.waitForTimeout(1250)


   // Kaydet
   await page.click('#product-form > div > div > div > div.portlet-title > div.actions > div.btn-group.btn-group-devided.util-btn-margin-bottom-5 > button:nth-child(5) > span')
  await page.waitForTimeout(1250)

   // Kategori / Marka
   await page.click('#product-edit > ul > li:nth-child(10) > span.k-link')
   await page.waitForTimeout(1250)
   try {
    await page.click('#productcategories-grid > table > tbody > tr:nth-child(1) > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
   } catch {
    console.log('kategori error')
   }
   try {
    await page.click('#productcategories-grid > table > tbody > tr:nth-child(1) > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
   } catch {
    console.log('kategori error')
   }
   try {
    await page.click('#productcategories-grid > table > tbody > tr:nth-child(1) > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
   } catch {
    console.log('kategori error')
   }
   try {
    await page.click('#productcategories-grid > table > tbody > tr:nth-child(1) > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
   } catch {
    console.log('kategori error')
   }
   try {
    await page.click('#productcategories-grid > table > tbody > tr:nth-child(1) > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
   } catch {
    console.log('kategori error')
   }
   try {
    await page.click('#productcategories-grid > table > tbody > tr:nth-child(1) > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
   } catch {
    console.log('kategori error')
   }

   await page.waitForTimeout(2250)
   
   // bot & çizme >> bot
   await page.mouse.click(1700, 324, {button: 'left'})
   await page.waitForTimeout(1250)
   await page.click('#productcategories-grid > div.k-toolbar.k-grid-toolbar > a > span')
   await page.waitForTimeout(1250)
   await page.click('#productcategories-grid > table > tbody > tr.k-grid-edit-row > td:nth-child(1) > span > span > span.k-select')
   await page.waitForTimeout(1250)
   await page.type('#productcategories-grid > table > tbody > tr.k-grid-edit-row > td:nth-child(1) > span > span > span.k-input', 'bot & çizme >> bot'); 
   await page.waitForTimeout(1250)

   await page.keyboard.press('ArrowDown');
   await page.waitForTimeout(1250)
   await page.keyboard.press('Enter');
   await page.waitForTimeout(1250)
   await page.click('#productcategories-grid > table > tbody > tr > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-update > span')
   await page.waitForTimeout(1250)

   // bot & çizme
   await page.mouse.click(1700, 324, {button: 'left'})
   await page.waitForTimeout(1250)
   await page.click('#productcategories-grid > div.k-toolbar.k-grid-toolbar > a > span')
   await page.waitForTimeout(1250)
   await page.click('#productcategories-grid > table > tbody > tr.k-grid-edit-row > td:nth-child(1) > span > span > span.k-select')
   await page.waitForTimeout(1250)
   await page.type('#productcategories-grid > table > tbody > tr.k-grid-edit-row > td:nth-child(1) > span > span > span.k-input', 'bot & çizme >> bot'); 
   await page.waitForTimeout(1250)

   await page.keyboard.press('ArrowDown');
   await page.waitForTimeout(1250)
   await page.keyboard.press('Enter');
   await page.waitForTimeout(1250)
   await page.click('#productcategories-grid > table > tbody > tr > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-update > span')
   await page.waitForTimeout(1250)


   // tüm ürünler
   await page.click('#productcategories-grid > div.k-toolbar.k-grid-toolbar > a')
   await page.waitForTimeout(1250)
   await page.click('#productcategories-grid > table > tbody > tr.k-grid-edit-row > td:nth-child(1) > span > span > span.k-select')
   await page.waitForTimeout(1250)

   await page.type('#productcategories-grid > table > tbody > tr.k-grid-edit-row > td:nth-child(1) > span > span > span.k-input', 'tüm ürünler'); 
   await page.waitForTimeout(1250)

   await page.keyboard.press('ArrowDown');
   await page.keyboard.press('Enter');
   await page.click('#productcategories-grid > table > tbody > tr > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-update > span')
   await page.waitForTimeout(1250)

  //  Kaydet
   await page.click('#product-form > div > div > div > div.portlet-title > div.actions > div.btn-group.btn-group-devided.util-btn-margin-bottom-5 > button:nth-child(5) > span')
  await page.waitForTimeout(1250)

  // Ürün Bağlantıları
  await page.click('#product-edit > ul > li:nth-child(11) > span.k-link')

  try {
    await page.click('#sameproducts-grid > table > tbody > tr:nth-child(1) > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('35 seri değil')
  }
  try {
    await page.click('#sameproducts-grid > table > tbody > tr:nth-child(1) > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('35 seri değil')
  }
  try {
    await page.click('#sameproducts-grid > table > tbody > tr:nth-child(1) > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('35 seri değil')
  }
  try {
    await page.click('#sameproducts-grid > table > tbody > tr:nth-child(1) > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('35 seri değil')
  }
  try {
    await page.click('#sameproducts-grid > table > tbody > tr:nth-child(1) > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('35 seri değil')
  }
  try {
    await page.click('#sameproducts-grid > table > tbody > tr:nth-child(1) > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('35 seri değil')
  }
  try {
    await page.click('#sameproducts-grid > table > tbody > tr:nth-child(1) > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('35 seri değil')
  }
  try {
    await page.click('#sameproducts-grid > table > tbody > tr:nth-child(1) > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('35 seri değil')
  }
  try {
    await page.click('#sameproducts-grid > table > tbody > tr:nth-child(1) > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('35 seri değil')
  }
  try {
    await page.click('#sameproducts-grid > table > tbody > tr:nth-child(1) > td:nth-child(5) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('35 seri değil')
  }

  

  await page.waitForTimeout(1250)
  await page.click('#btnAddNewSameProduct')
  await page.waitForTimeout(1250)
  await page.mouse.click(845, 146, {button: 'left'})
  await page.waitForTimeout(1250)
  await page.keyboard.type(modelCode); 
  await page.waitForTimeout(1250)
  await page.mouse.click(566, 407, {button: 'left'})
  await page.waitForTimeout(1250)
  await page.mouse.click(557, 472, {button: 'left'})
  await page.waitForTimeout(1250)
  await page.mouse.click(658, 414, {button: 'left'})
  await page.waitForTimeout(1250)
  await page.click('#btnCreateMutuallySameProducts-confirm')
  await page.mouse.click(872, 169, {button: 'left'})
  await page.waitForTimeout(3000)
  
  // Kaydet
  await page.click('#product-form > div > div > div > div.portlet-title > div.actions > div.btn-group.btn-group-devided.util-btn-margin-bottom-5 > button:nth-child(5) > span')
  await page.waitForTimeout(1250)
  

  // Ürün Varyasyonları  
  await page.click('#product-edit > ul > li:nth-child(12) > span.k-link')
  await page.waitForTimeout(1250)
  try {
    await page.click('#attributecombinations-grid > table > tbody > tr:nth-child(1) > td:nth-child(10) > a')
    await page.waitForTimeout(1250)
  } catch {
    console.log('35 seri değil')
  }
    try {
      await page.click('#attributecombinations-grid > table > tbody > tr:nth-child(1) > td:nth-child(10) > a')
      await page.waitForTimeout(1250)
    } catch {
      console.log('35 seri değil')
    }
    try {
      await page.click('#attributecombinations-grid > table > tbody > tr:nth-child(1) > td:nth-child(10) > a')
      await page.waitForTimeout(1250)
    } catch {
      console.log('35 seri değil')
    }
    try {
      await page.click('#attributecombinations-grid > table > tbody > tr:nth-child(1) > td:nth-child(10) > a')
      await page.waitForTimeout(1250)
    } catch {
      console.log('35 seri değil')
    }
    try {
      await page.click('#attributecombinations-grid > table > tbody > tr:nth-child(1) > td:nth-child(10) > a')
      await page.waitForTimeout(1250)
    } catch {
      console.log('35 seri değil')
    }
    try {
      await page.click('#attributecombinations-grid > table > tbody > tr:nth-child(1) > td:nth-child(10) > a')
      await page.waitForTimeout(1250)
    } catch {
      console.log('35 seri değil')
    }
    try {
      await page.click('#attributecombinations-grid > table > tbody > tr:nth-child(1) > td:nth-child(10) > a')
      await page.waitForTimeout(1250)
    } catch {
      console.log('35 seri değil')
    }

    try {
      await page.click('#productattributemappings-grid > table > tbody > tr > td:nth-child(7) > a')
      await page.waitForTimeout(1250)
    } catch {
      console.log('beden error')
    }

  await page.click('#btnAddNewValue')
  await page.waitForTimeout(1250)
  await page.mouse.click(814, 138, {button: 'left'})
  await page.waitForTimeout(1250)
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.mouse.click(831, 231, {button: 'left'})
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
   await page.keyboard.press('Enter');
   

   await page.waitForTimeout(1250)
   await page.mouse.click(808, 321, {button: 'left'})
   await page.waitForTimeout(1250)
   await page.click('#btnGenerateAllCombinations-confirm')
   await page.waitForTimeout(1250)
   await page.mouse.click(1212, 174, {button: 'left'})
   await page.waitForTimeout(2000)
   try {
    await page.click('#attributecombinations-grid > table > tbody > tr:nth-child(1) > td:nth-child(10) > a')
    await page.waitForTimeout(1250)
  } catch {
    console.log('35 seri değil')
  }

  try {
    await page.click('#attributecombinations-grid > table > tbody > tr:nth-child(1) > td:nth-child(9) > button')
  } catch{
    console.log('varyason error')
  }
  await page.waitForTimeout(1250)
  await page.mouse.click(805, 132, {button: 'left'})
  await page.keyboard.type(sku + 36)
  await page.waitForTimeout(1250)
  await page.mouse.click(809, 184, {button: 'left'})
  await page.keyboard.type(sku + 36)
  await page.waitForTimeout(1250)
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000)

  try {
    await page.click('#attributecombinations-grid > table > tbody > tr:nth-child(2) > td:nth-child(9) > button')
  } catch{
    console.log('varyason error')
  }
  await page.waitForTimeout(1250)
  await page.mouse.click(805, 132, {button: 'left'})
  await page.keyboard.type(sku + 37)
  await page.waitForTimeout(1250)
  await page.mouse.click(809, 184, {button: 'left'})
  await page.keyboard.type(sku + 37)
  await page.waitForTimeout(1250)
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000)

  try {
    await page.click('#attributecombinations-grid > table > tbody > tr:nth-child(3) > td:nth-child(9) > button')
  } catch{
    console.log('varyason error')
  }
  await page.waitForTimeout(1250)
  await page.mouse.click(805, 132, {button: 'left'})
  await page.keyboard.type(sku + 38)

  await page.waitForTimeout(1250)
  await page.mouse.click(809, 184, {button: 'left'})
  await page.keyboard.type(sku + 38)
  await page.waitForTimeout(1250)
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000)
  try {
    await page.click('#attributecombinations-grid > table > tbody > tr:nth-child(4) > td:nth-child(9) > button')
  } catch{
    console.log('varyason error')
  }
  await page.waitForTimeout(1250)
  await page.mouse.click(805, 132, {button: 'left'})
  await page.keyboard.type(sku + 39)

  await page.waitForTimeout(1250)
  await page.mouse.click(809, 184, {button: 'left'})
  await page.keyboard.type(sku + 39)
  await page.waitForTimeout(1250)
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000)

  try {
    await page.click('#attributecombinations-grid > table > tbody > tr:nth-child(5) > td:nth-child(9) > button')
  } catch{
    console.log('varyason error')
  }
  await page.waitForTimeout(1250)
  await page.mouse.click(805, 132, {button: 'left'})
  await page.keyboard.type(sku + 40)

  await page.waitForTimeout(1250)
  await page.mouse.click(809, 184, {button: 'left'})
  await page.keyboard.type(sku + 40)
  await page.waitForTimeout(1250)
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000)
  

  // Ürün Özellikleri
  await page.click('#product-edit > ul > li:nth-child(13) > span.k-link')
  await page.waitForTimeout(1250)

  try {
    await page.click('#specificationattributes-grid > table > tbody > tr:nth-child(1) > td:nth-child(7) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('Ürün Özellikleri Error')
  }

  try {
    await page.click('#specificationattributes-grid > table > tbody > tr:nth-child(1) > td:nth-child(7) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('Ürün Özellikleri Error')
  }

  try {
    await page.click('#specificationattributes-grid > table > tbody > tr:nth-child(1) > td:nth-child(7) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('Ürün Özellikleri Error')
  }

  try {
    await page.click('#specificationattributes-grid > table > tbody > tr:nth-child(1) > td:nth-child(7) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('Ürün Özellikleri Error')
  }

  try {
    await page.click('#specificationattributes-grid > table > tbody > tr:nth-child(1) > td:nth-child(7) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('Ürün Özellikleri Error')
  }

  try {
    await page.click('#specificationattributes-grid > table > tbody > tr:nth-child(1) > td:nth-child(7) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('Ürün Özellikleri Error')
  }

  try {
    await page.click('#specificationattributes-grid > table > tbody > tr:nth-child(1) > td:nth-child(7) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('Ürün Özellikleri Error')
  }

  try {
    await page.click('#specificationattributes-grid > table > tbody > tr:nth-child(1) > td:nth-child(7) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('Ürün Özellikleri Error')
  }

  try {
    await page.click('#specificationattributes-grid > table > tbody > tr:nth-child(1) > td:nth-child(7) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('Ürün Özellikleri Error')
  }

  try {
    await page.click('#specificationattributes-grid > table > tbody > tr:nth-child(1) > td:nth-child(7) > a.k-button.k-button-icontext.k-grid-delete')
    await page.waitForTimeout(1250)
  } catch {
    console.log('Ürün Özellikleri Error')
  }


  // Özellikler
  
  var malzeme = JSON.parse(fs.readFileSync('D:/Own_Projects/07_web_scarper/stock/site_link/link.json').toString());

  // Astar Materyali
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeOptionId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(1250)
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#pnlAllowFiltering > div > label > span')
  await page.waitForTimeout(1250)
  await page.click('#addProductSpec')
  await page.waitForTimeout(1250)


  // Bağlama Şekli
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(1250)
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeOptionId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(1250)
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#addProductSpec')
  await page.waitForTimeout(1250)

  
  // Cinsiyet
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeOptionId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000)
  await page.click('#pnlAllowFiltering > div > label > span')
  await page.waitForTimeout(1250)
  await page.click('#addProductSpec')
  await page.waitForTimeout(1250)

  // İç Taban Materyali
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeOptionId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#pnlAllowFiltering > div > label > span')
  await page.waitForTimeout(1250)
  await page.click('#addProductSpec')
  await page.waitForTimeout(1250)


  // Materyal
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeOptionId-container')
  await page.waitForTimeout(1250)
  await page.type('body > span > span > span.select2-search.select2-search--dropdown > input', malzeme.malzeme[n] )
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#addProductSpec')
  await page.waitForTimeout(1250)

  // Numara 35 - 40 
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeOptionId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#pnlAllowFiltering > div > label > span')
  await page.waitForTimeout(1250)
  await page.click('#addProductSpec')
  await page.waitForTimeout(1250)

  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeOptionId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.waitForTimeout(1250)
  await page.click('#addProductSpec')
  await page.waitForTimeout(1250)

  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeOptionId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.waitForTimeout(1250)
  await page.click('#addProductSpec')
  await page.waitForTimeout(1250)
  
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeOptionId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.waitForTimeout(1250)
  await page.click('#addProductSpec')
  await page.waitForTimeout(1250)

  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeOptionId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.waitForTimeout(1250)
  await page.click('#addProductSpec')
  await page.waitForTimeout(1250)


  // Renk
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeOptionId-container')
  await page.waitForTimeout(1250)
  await page.type('body > span > span > span.select2-search.select2-search--dropdown > input', malzeme.renk[n] )
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#addProductSpec')
  await page.waitForTimeout(1250)


  // Saya Materyali
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeOptionId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#pnlAllowFiltering > div > label > span')
  await page.waitForTimeout(1250)
  await page.click('#addProductSpec')
  await page.waitForTimeout(1250)


  // Taban Materiyali
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeOptionId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#addProductSpec')
  await page.waitForTimeout(1250)


  // Topuk Boyu
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeOptionId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#pnlAllowFiltering > div > label > span')
  await page.waitForTimeout(1250)
  await page.click('#addProductSpec')
  await page.waitForTimeout(1250)


  // Topuk Tipi
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeOptionId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#pnlAllowFiltering > div > label > span')
  await page.waitForTimeout(1250)
  await page.click('#addProductSpec')
  await page.waitForTimeout(1250)


  // Yaş Grubu
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#select2-AddSpecificationAttributeModel_SpecificationAttributeOptionId-container')
  await page.waitForTimeout(1250)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1250)
  await page.click('#addProductSpec')
  await page.waitForTimeout(1250)


  // Kaydet
  await page.click('#product-form > div > div > div > div.portlet-title > div.actions > div.btn-group.btn-group-devided.util-btn-margin-bottom-5 > button:nth-child(5) > span')
  await page.waitForTimeout(1250)
   
   
  console.log(json.site[n])
   
    page.close()

  }


}

module.exports = site

  




