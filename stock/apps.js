const XLSX = require('xlsx')
const fs = require('fs')
const express = require('express');
const puppeteer = require('puppeteer');
const stokBoa = require('./stok_boa');
const chalk = require('chalk');
const expExl = require('./export');
const delJson = require('../deletejson');
const upload_stok = require('./upload_stok')

const stok = {
  deljson(){
    async function delJsonFile() {
      const path = "D:/Own_Projects/07_web_scarper/data.json";
      await (async function() {
        try {
          fs.unlinkSync(path);
          console.log(chalk.bold.bgGreen("Json dosyası Silindi:"), path);
        } catch (err) {
          console.error(err);
        }
      })()
    }
    delJsonFile()
  },
  exp() {
    async function expExl() {
      const num = () => { 
        const dataBuffer = fs.readFileSync('D:/Own_Projects/07_web_scarper/data.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
      }
      
      await (async function() {
        const workSheet = XLSX.utils.json_to_sheet(num())
        const workBook = XLSX.utils.book_new()
      
        XLSX.utils.book_append_sheet(workBook, workSheet, "stok")
      
        // Generate Buffer
        XLSX.write(workBook, {bookType: 'xlsx', type: 'buffer'})
      
        //Binary string
        XLSX.write(workBook,{bookType: 'xlsx', type: 'binary'})
      
        XLSX.writeFile(workBook, 'C:/Users/athee/Desktop/Oto_stok/stok.xlsx')
        console.log(chalk.bold.bgGreen('Stok Excel Dostasına Oto_Stok Klasörün içine Çıkarıldı...'))
        stok.deljson()
      })()
    }
    expExl()
  },
  delexc() {
    const path = "C:/Users/athee/Desktop/Oto_stok/stok.xlsx"

    try {
      fs.unlinkSync(path)
      console.log('Excel dosyası silindi', path)
    } catch (err) {
      console.log(err)
    }
  },
  oto_stock() {
    const oto_stok = async function() {
      await (async function() {
        await stokBoa()
      })(),
      await (async function() {
        await knack()
      })(),
      await (async function() {
        await expExl()
      })(),
      await (async function() {
        await delJson()
      }),
      await (async function() {
        await upload_stok()
      })
    }
    oto_stok()
  }
}

module.exports = stok;