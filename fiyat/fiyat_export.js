const fs = require('fs')
const XLSX = require('xlsx')
const chalk = require('chalk');
const path = require('path')

  async function fiyat_expExl() {
    await (async function() {
      try {
        const num = () => { 
          const dataBuffer = fs.readFileSync(path.join(__dirname, 'boa_fiyat.json'))
          const dataJSON = dataBuffer.toString()
          return JSON.parse(dataJSON)
        }
        
        const convertJsonExcel = () => {
          const workSheet = XLSX.utils.json_to_sheet(num())
          const workBook = XLSX.utils.book_new()
        
          XLSX.utils.book_append_sheet(workBook, workSheet, "stok")
        
          // Generate Buffer
          XLSX.write(workBook, {bookType: 'xlsx', type: 'buffer'})
        
          //Binary string
          XLSX.write(workBook,{bookType: 'xlsx', type: 'binary'})
        
          XLSX.writeFile(workBook, 'C:/Users/athee/Desktop/Oto_stok/fiyat.xlsx')
          console.log(chalk.bold.bgGreen('Fiyat Exceli Oto_Stok Klasörün içine Çıkarıldı...'))
        }
        convertJsonExcel()
      } catch (err){
        console.log(err, 'Excell çıkartma hatası')
      }
      
    })()
    
  }

  

  module.exports = fiyat_expExl
