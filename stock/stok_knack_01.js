const fs = require('fs')
const express = require('express');
const chalk = require('chalk')
const puppeteer = require('puppeteer');


async function stokKnack01() {
  await (async function () {
    // /* Knack Stok */
    const PORT = 5555;

    const app = express()

    const loadNotes = () => {
      try {
        const dataBuffer = fs.readFileSync("D:/Own_Projects/07_web_scarper/data.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

      } catch {
        return []
      }
    }

    const saveNotes = (num) => {
      const dataJSON = JSON.stringify(num)
      fs.writeFileSync('D:/Own_Projects/07_web_scarper/data.json', dataJSON)

    }

    app.listen(PORT, () => console.log(chalk.bgGreen(`server running on PORT ${PORT}`)))

    // /* KNACK URL */ 
    // const knkkurlgn = 'https://www.bayiknack.com/uyelik/giris-yap'
    const knkurl1 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-vizon'
    const knkurl2 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-bordo'
    const knkurl3 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-beyaz'
    const knkurl4 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-gri'
    const knkurl5 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-haki'
    const knkurl6 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-kahverengi'
    const knkurl7 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-lacivert'
    const knkurl8 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-siyah'
    const knkurl9 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-002-taba'
    const knkurl17 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-beyaz'
    const knkurl18 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-gri'
    const knkurl19 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-kirmizi'
    const knkurl20 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-mavi'
    const knkurl21 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-sari'
    const knkurl22 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-siyah-siyah-taban'
    const knkurl23 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-siyah-taba-taban'
    const knkurl24 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-taba'
    const knkurl25 = 'https://www.bayiknack.com/urun/knack-knack-mevsimlik-keten-ayakkabi-008-yesil'
    const knkurl26 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-beyaz'
    const knkurl27 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-fume'
    const knkurl28 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-haki'
    const knkurl29 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-kahverengi'
    const knkurl30 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-siyah-beyaz-taban'
    const knkurl31 = 'https://www.bayiknack.com/urun/knack-knack-spor-bot-022-siyah-siyah-taban'
    const knkurl32 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-haki'
    const knkurl34 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-suet-ayakkabi-040-kirmizi'
    const knkurl35 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-suet-ayakkabi-040-siyah-beyaz-taban'
    const knkurl36 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-suet-ayakkabi-040-siyah-siyah-taban'
    const knkurl37 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-suet-ayakkabi-040-tas'
    const knkurl38 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-suet-ayakkabi-040-turuncu'
    const knkurl39 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-siyah-siyah-taban'
    const knkurl40 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-siyah-beyaz-taban'
    const knkurl41 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-siyah-kurukafa'
    const knkurl43 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-kurukafa-renkli'
    const knkurl44 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-beyaz-kurukafa'
    const knkurl45 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-kuba-renkli'
    const knkurl46 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-eng-renkli'
    const knkurl47 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-ghost-skull-renkli'
    const knkurl48 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-senegal-renkli'
    const knkurl49 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-gri'
    const knkurl50 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-haki'
    const knkurl51 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-jamaika-renkli'
    const knkurl52 = 'https://www.bayiknack.com/urun/knack-knack-dijital-baski-ayakkabi-r044-pate-renkli'
    const knkurl53 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-kirmizi'
    const knkurl56 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-taba'
    const knkurl57 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-beyaz'
    const knkurl58 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-sari'
    const knkurl59 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-beyaz'
    const knkurl60 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-haki'
    const knkurl61 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-siyah-beyaz-taban'
    const knkurl62 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-siyah-siyah-taban'
    const knkurl63 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-siyah-suet-beyaz-taban'
    const knkurl64 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-taba'
    const knkurl65 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-060-taba-suet'
    const knkurl66 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-999-beyaz'
    const knkurl68 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-999-siyah-beyaz-taban'
    const knkurl69 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-999-siyah-siyah-taban'
    const knkurl70 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-999-taba'
    const knkurl71 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-beyaz'
    const knkurl72 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-haki'
    const knkurl73 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-vizon'
    const knkurl74 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-siyah-beyaz-taban'
    const knkurl75 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-siyah-siyah-taban'
    const knkurl76 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-080-taba'
    const knkurl77 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-beyaz'
    const knkurl78 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-haki'
    const knkurl79 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-lacivert'
    const knkurl80 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-siyah-beyaz-taban'
    const knkurl81 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-siyah-siyah-taban'
    const knkurl82 = 'https://www.bayiknack.com/urun/knack-knack-spor-ayakkabi-kx-300-vizon'
    const knkurl83 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-f-505-beyaz'
    const knkurl84 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-f-505-gri'
    const knkurl85 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-f-505-siyah-beyaz-taban'
    const knkurl86 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-f-505-siyah-siyah-taban'
    const knkurl87 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-f-505-taba'
    const knkurl88 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-beyaz'
    const knkurl89 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-siyah-beyaz-taban'
    const knkurl90 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-siyah-suet-beyaz-taban'
    const knkurl91 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-taba-suet'
    const knkurl92 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-tas'
    const knkurl93 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-c-030-vizon-suet'
    const knkurl94 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-020-siyah-beyaz-taban'
    const knkurl95 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-020-siyah-siyah-taban'
    const knkurl96 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-020-taba'
    const knkurl97 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-020-sari'
    const knkurl98 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-020-tas'
    const knkurl99 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-022-siyah-beyaz-taban'
    const knkurl100 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-022-siyah-siyah-taban'
    const knkurl101 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-022-taba'
    const knkurl102 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-022-tas'
    const knkurl103 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-010-beyaz'
    const knkurl104 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-010-siyah-beyaz-taban'
    const knkurl105 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-010-taba-suet'
    const knkurl106 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-010-tas'
    const knkurl107 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-010-vizon-suet'
    const knkurl108 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-010-siyah-suet-beyaz-taban'
    const knkurl109 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-404-beyaz'
    const knkurl110 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-404-gri'
    const knkurl111 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-404-haki'
    const knkurl112 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-404-siyah-siyah-taban'
    const knkurl113 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-404-siyah-suet-beyaz-taban'
    const knkurl114 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-404-taba-suet'
    const knkurl115 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-b-404-taba'
    const knkurl116 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-spor-klasik-ayakkabi-717-bordo'
    const knkurl117 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-spor-klasik-ayakkabi-717-beyaz'
    const knkurl118 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-spor-klasik-ayakkabi-717-gri'
    const knkurl119 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-spor-klasik-ayakkabi-717-haki'
    const knkurl120 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-spor-klasik-ayakkabi-717-kahverengi'
    const knkurl121 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-spor-klasik-ayakkabi-717-lacivert'
    const knkurl122 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-spor-klasik-ayakkabi-717-lacivert-suet'
    const knkurl123 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-spor-klasik-ayakkabi-717-siyah-beyaz-taban'
    const knkurl124 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-spor-klasik-ayakkabi-717-siyah-suet-beyaz-taban'
    const knkurl125 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-spor-klasik-ayakkabi-717-taba-suet'
    const knkurl126 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-spor-klasik-ayakkabi-717-taba'
    const knkurl127 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-555-beyaz'
    const knkurl128 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-555-gri'
    const knkurl129 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-555-haki'
    const knkurl130 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-555-sari'
    const knkurl131 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-555-kahverengi'
    const knkurl132 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-555-kirmizi'
    const knkurl133 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-555-lacivert'
    const knkurl134 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-555-siyah-beyaz-taban'
    const knkurl135 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-555-siyah-siyah-taban'
    const knkurl136 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-555-taba'
    const knkurl137 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-606-beyaz'
    const knkurl138 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-606-beyaz-kirmizi'
    const knkurl139 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-606-beyaz-sari'
    const knkurl140 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-606-beyaz-siyah-taban'
    const knkurl141 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-606-gri-kirmizi'
    const knkurl142 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-606-siyah-sari'
    const knkurl143 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-606-siyah-beyaz-taban'
    const knkurl144 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-606-siyah-kirmizi'
    const knkurl145 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-606-siyah-sari'
    const knkurl146 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-606-siyah-siyah-taban'
    const knkurl147 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-707-beyaz'
    const knkurl148 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-707-gri'
    const knkurl149 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-707-haki'
    const knkurl150 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-707-sari'
    const knkurl151 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-707-kirmizi'
    const knkurl152 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-707-siyah-beyaz-taban'
    const knkurl153 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-707-siyah-siyah-taban'
    const knkurl154 = 'https://www.bayiknack.com/urun/knack-knack-gunluk-ayakkabi-707-taba'
    const knkurl155 = 'https://www.bayiknack.com/urun/knack-knack-klasik-erkek-ayakkabi-001-siyah-beyaz-taban'
    const knkurl156 = 'https://www.bayiknack.com/urun/knack-knack-klasik-erkek-ayakkabi-001-siyah-rugan-beyaz-taban'
    const knkurl157 = 'https://www.bayiknack.com/urun/knack-knack-klasik-erkek-ayakkabi-001-siyah-suet-beyaz-taban'
    const knkurl158 = 'https://www.bayiknack.com/urun/knack-knack-klasik-erkek-ayakkabi-001-siyah-siyah-taban'
    const knkurl159 = 'https://www.bayiknack.com/urun/knack-knack-klasik-erkek-ayakkabi-001-siyah-rugan-siyah-taban'
    const knkurl160 = 'https://www.bayiknack.com/urun/knack-knack-klasik-erkek-ayakkabi-001-siyah-suet-siyah-taban'
    const knkurl161 = 'https://www.bayiknack.com/urun/knack-knack-klasik-erkek-ayakkabi-001-taba'
    const knkurl162 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-888-beyaz'
    const knkurl163 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-888-gri'
    const knkurl164 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-888-siyah-beyaz-taban'
    const knkurl165 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-888-siyah-siyah-taban'
    const knkurl166 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-n75-beyaz'
    const knkurl167 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-n75-haki'
    const knkurl168 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-n75-lacivert'
    const knkurl169 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-n75-siyah-siyah-taban'
    const knkurl170 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-n75-siyah-beyaz-taban'
    const knkurl171 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-n75-taba'
    const knkurl172 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-812-beyaz'
    const knkurl173 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-812-siyah-beyaz-taban'
    const knkurl174 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-812-siyah-suet-beyaz-taban'
    const knkurl175 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-812-siyah-suet-siyah-taban'
    const knkurl176 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-812-tas'
    const knkurl177 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-042-beyaz'
    const knkurl178 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-042-siyah-beyaz-taban'
    const knkurl179 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-042-siyah-siyah-taban'
    const knkurl180 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-042-taba'
    const knkurl181 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-911-beyaz'
    const knkurl182 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-911-gri'
    const knkurl183 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-911-siyah-beyaz-taban'
    const knkurl184 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-911-taba'
    const knkurl185 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-889-beyaz'
    const knkurl186 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-889-siyah-beyaz-taban'
    const knkurl187 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-889-siyah-siyah-taban'
    const knkurl188 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-889-taba'
    const knkurl189 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-045-bordo-siyah-taban'
    const knkurl190 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-045-sari-siyah-taban'
    const knkurl191 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-045-lacivert-siyah-taban'
    const knkurl192 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-045-yesil-siyah-taban'
    const knkurl193 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-111-beyaz'
    const knkurl194 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-111-siyah-beyaz-taban'
    const knkurl195 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-111-siyah-siyah-taban'
    const knkurl196 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-111-taba'
    const knkurl197 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-111-vizon'
    const knkurl198 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-ayakkabi-111-vizon-suet'
    const knkurl199 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-043-beyaz'
    const knkurl200 = 'https://www.bayiknack.com/urun/knack-knack-yuksek-taban-gunluk-ayakkabi-044-kahverengi-kahverengi-taban'
    const knkurl201 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-065-beyaz'
    const knkurl202 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-065-beyaz-suet'
    const knkurl203 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-065-gri'
    const knkurl204 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-065-haki'
    const knkurl205 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-065-siyah-beyaz-taban'
    const knkurl206 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-065-siyah-siyah-taban'
    const knkurl207 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-065-siyah-suet-beyaz-taban'
    const knkurl208 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-065-siyah-suet-siyah-taban'
    const knkurl209 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-065-taba'
    const knkurl210 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-065-tas'
    const knkurl211 = 'https://www.bayiknack.com/urun/knack-knack-sneakers-ayakkabi-065-vizon-suet'






    // MDSHKNK002ACKKHVBT
    await (async function funurl1() {
      try {
        await (async function () {
          const browser = await puppeteer.launch({
            headless: true
          })
          const page = await browser.newPage();
          await page.goto("https://www.bayiknack.com/uyelik/giris-yap", {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector('#User_Email')

          await page.type('#User_Email', 'atheelarouge@gmail.com', {
            delay: 200
          })
          await page.type('#User_Password', 'tma200786', {
            delay: 200
          })
          await page.click('button.button.button-login.right', {
            delay: 200
          })

          await page.waitForSelector('.user-info.left')

          await page.goto(knkurl1, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a01num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a01num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a01num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a01num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a01num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK002ACKKHVBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a01num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002ACKKHVBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a01num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002ACKKHVBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a01num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002ACKKHVBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a01num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002ACKKHVBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a01num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK002ACKKHVBT Done...'))




          // MDSHKNK002BRDBT

          await page.goto(knkurl2, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a02num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a02num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a02num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a02num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a02num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK002BRDBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a02num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002BRDBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a02num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002BRDBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a02num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002BRDBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a02num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002BRDBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a02num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK002BRDBT Done...'))

          // MDSHKNK002BYZBT

          await page.goto(knkurl3, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a03num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a03num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a03num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a03num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a03num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK002BYZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a03num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002BYZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a03num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002BYZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a03num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002BYZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a03num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002BYZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a03num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK002BYZBT Done...'))

          // MDSHKNK002GRİBT

          await page.goto(knkurl4, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a04num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a04num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a04num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a04num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a04num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK002GRİBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a04num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002GRİBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a04num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002GRİBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a04num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002GRİBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a04num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002GRİBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a04num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK002GRİBT Done...'))

          // MDSHKNK002HKKBT

          await page.goto(knkurl5, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a05num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a05num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a05num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a05num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a05num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK002HKKBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a05num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002HKKBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a05num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002HKKBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a05num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002HKKBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a05num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002HKKBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a05num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK002HKKBT Done...'))

          // MDSHKNK002KYKHVBT

          await page.goto(knkurl6, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a06num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a06num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a06num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a06num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a06num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK002KYKHVBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a06num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002KYKHVBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a06num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002KYKHVBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a06num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002KYKHVBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a06num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002KYKHVBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a06num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK002KYKHVBT Done...'))

          // MDSHKNK002LCVRTBT

          await page.goto(knkurl7, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a07num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a07num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a07num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a07num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a07num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK002LCVRTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a07num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002LCVRTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a07num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002LCVRTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a07num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002LCVRTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a07num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002LCVRTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a07num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK002LCVRTBT Done...'))

          // MDSHKNK002SYHBT

          await page.goto(knkurl8, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a08num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a08num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a08num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a08num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a08num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK002SYHBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a08num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002SYHBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a08num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002SYHBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a08num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002SYHBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a08num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002SYHBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a08num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK002SYHBT Done...'))

          // MDSHKNK002TabaBT

          await page.goto(knkurl9, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a09num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a09num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a09num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a09num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a09num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK002TabaBTv140',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a09num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002TabaBTv141',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a09num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002TabaBTv142',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a09num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002TabaBTv143',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a09num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK002TabaBTv144',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a09num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK002TabaBT Done...'))

          // // MDSHKNK007ANTRSTSUET

          // await page.goto(knkurl10, {
          //   waitUntil: 'networkidle0'
          // })
          // await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          // const a10num40 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a10num41 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a10num42 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a10num43 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a10num44 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // data = loadNotes()

          // data.push({
          //   "Barkod": 'MDSHKNK007ANTRSTSUET40',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a10num40[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007ANTRSTSUET41',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a10num41[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007ANTRSTSUET42',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a10num42[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007ANTRSTSUET43',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a10num43[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007ANTRSTSUET44',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a10num44[0]),
          // })

          // await saveNotes(data)

          // await console.log(chalk.bgBlue.bold('MDSHKNK007ANTRSTSUET Done...'))

          // // MDSHKNK007KUMSUET

          // await page.goto(knkurl11, {
          //   waitUntil: 'networkidle0'
          // })
          // await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          // const a11num40 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a11num41 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a11num42 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a11num43 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a11num44 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // data = loadNotes()

          // data.push({
          //   "Barkod": 'MDSHKNK007KUMSUET40',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a11num40[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007KUMSUET41',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a11num41[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007KUMSUET42',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a11num42[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007KUMSUET43',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a11num43[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007KUMSUET44',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a11num44[0]),
          // })

          // await saveNotes(data)

          // await console.log(chalk.bgBlue.bold('MDSHKNK007KUMSUET Done...'))

          // // MDSHKNK007LCVRTSUET

          // await page.goto(knkurl12, {
          //   waitUntil: 'networkidle0'
          // })
          // await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          // const a12num40 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a12num41 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a12num42 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a12num43 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a12num44 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // data = loadNotes()

          // data.push({
          //   "Barkod": 'MDSHKNK007LCVRTSUET40',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a12num40[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007LCVRTSUET41',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a12num41[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007LCVRTSUET42',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a12num42[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007LCVRTSUET43',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a12num43[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007LCVRTSUET44',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a12num44[0]),
          // })

          // await saveNotes(data)

          // await console.log(chalk.bgBlue.bold('MDSHKNK007LCVRTSUET Done...'))

          // // MDSHKNK007MVSUET

          // await page.goto(knkurl13, {
          //   waitUntil: 'networkidle0'
          // })
          // await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          // const a13num40 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a13num41 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a13num42 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a13num43 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a13num44 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // data = loadNotes()

          // data.push({
          //   "Barkod": 'MDSHKNK007MVSUET40',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a13num40[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007MVSUET41',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a13num41[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007MVSUET42',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a13num42[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007MVSUET43',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a13num43[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007MVSUET44',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a13num44[0]),
          // })

          // await saveNotes(data)

          // await console.log(chalk.bgBlue.bold('MDSHKNK007MVSUET Done...'))

          // // MDSHKNK007SYHSUET

          // await page.goto(knkurl14, {
          //   waitUntil: 'networkidle0'
          // })
          // await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          // const a14num40 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a14num41 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a14num42 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a14num43 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a14num44 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // data = loadNotes()

          // data.push({
          //   "Barkod": 'MDSHKNK007SYHSUET40',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a14num40[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007SYHSUET41',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a14num41[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007SYHSUET42',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a14num42[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007SYHSUET43',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a14num43[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007SYHSUET44',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a14num44[0]),
          // })

          // await saveNotes(data)

          // await console.log(chalk.bgBlue.bold('MDSHKNK007SYHSUET Done...'))

          // // MDSHKNK007TABASUET

          // await page.goto(knkurl15, {
          //   waitUntil: 'networkidle0'
          // })
          // await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          // const a15num40 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a15num41 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a15num42 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a15num43 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a15num44 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // data = loadNotes()

          // data.push({
          //   "Barkod": 'MDSHKNK007TABASUET40',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a15num40[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007TABASUET41',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a15num41[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007TABASUET42',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a15num42[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007TABASUET43',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a15num43[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007TABASUET44',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a15num44[0]),
          // })

          // await saveNotes(data)

          // await console.log(chalk.bgBlue.bold('MDSHKNK007TABASUET Done...'))

          // // MDSHKNK007VZNSUET

          // await page.goto(knkurl16, {
          //   waitUntil: 'networkidle0'
          // })
          // await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          // const a16num40 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a16num41 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a16num42 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a16num43 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a16num44 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // data = loadNotes()

          // data.push({
          //   "Barkod": 'MDSHKNK007VZNSUET40',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a16num40[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007VZNSUET41',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a16num41[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007VZNSUET42',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a16num42[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007VZNSUET43',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a16num43[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK007VZNSUET44',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a16num44[0]),
          // })

          // await saveNotes(data)

          // await console.log(chalk.bgBlue.bold('MDSHKNK007VZNSUET Done...'))

          // MDSHKNK008BYZBT

          await page.goto(knkurl17, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a17num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a17num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a17num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a17num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a17num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK008BYZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a17num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008BYZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a17num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008BYZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a17num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008BYZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a17num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008BYZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a17num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK008BYZBT Done...'))

          // MDSHKNK008GRİBT

          await page.goto(knkurl18, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a18num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a18num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a18num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a18num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a18num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK008GRİBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a18num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008GRİBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a18num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008GRİBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a18num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008GRİBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a18num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008GRİBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a18num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK008GRİBT Done...'))

          // MDSHKNK008KRMZBT

          await page.goto(knkurl19, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a19num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a19num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a19num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a19num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a19num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK008KRMZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a19num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008KRMZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a19num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008KRMZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a19num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008KRMZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a19num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008KRMZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a19num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK008KRMZBT Done...'))

          // MDSHKNK008LCVRTBT

          await page.goto(knkurl20, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a20num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a20num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a20num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a20num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a20num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK008LCVRTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a20num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008LCVRTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a20num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008LCVRTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a20num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008LCVRTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a20num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008LCVRTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a20num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK008LCVRTBT Done...'))

          // MDSHKNK008SARIBT

          await page.goto(knkurl21, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a21num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a21num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a21num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a21num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a21num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK008SARIBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a21num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008SARIBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a21num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008SARIBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a21num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008SARIBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a21num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008SARIBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a21num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK008SARIBT Done...'))

          // MDSHKNK008SYHST

          await page.goto(knkurl22, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a22num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a22num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a22num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a22num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a22num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK008SYHST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a22num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008SYHST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a22num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008SYHST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a22num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008SYHST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a22num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008SYHST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a22num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK008SYHST Done...'))

          // MDSHKNK008SYHTT

          await page.goto(knkurl23, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a23num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a23num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a23num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a23num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a23num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK008SYHTT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a23num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008SYHTT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a23num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008SYHTT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a23num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008SYHTT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a23num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008SYHTT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a23num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK008SYHTT Done...'))

          //  MDSHKNK008TABATT

          await page.goto(knkurl24, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a24num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a24num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a24num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a24num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a24num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK008TABATT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a24num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008TABATT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a24num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008TABATT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a24num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008TABATT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a24num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008TABATT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a24num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK008TABATT Done...'))

          // MDSHKNK008YSLBT

          await page.goto(knkurl25, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a25num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a25num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a25num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a25num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a25num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK008YSLBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a25num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008YSLBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a25num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008YSLBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a25num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008YSLBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a25num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK008YSLBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a25num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK008YSLBT Done...'))

          // MDSHKNK022BYZBT40

          await page.goto(knkurl26, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a26num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a26num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a26num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a26num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a26num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK022BYZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a26num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022BYZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a26num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022BYZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a26num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022BYZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a26num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022BYZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a26num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK022BYZBT Done...'))

          // MDSHKNK022FUMEBT

          await page.goto(knkurl27, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a27num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a27num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a27num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a27num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a27num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK022FUMEBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a27num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022FUMEBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a27num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022FUMEBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a27num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022FUMEBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a27num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022FUMEBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a27num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK022FUMEBT Done...'))

          // MDSHKNK022HKKBT

          await page.goto(knkurl28, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a28num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a28num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a28num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a28num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a28num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK022HKKBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a28num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022HKKBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a28num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022HKKBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a28num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022HKKBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a28num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022HKKBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a28num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK022HKKBT Done...'))

          //MDSHKNK022KHVBT

          await page.goto(knkurl29, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a29num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a29num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a29num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a29num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a29num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK022KHVBTv140',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a29num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022KHVBTv141',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a29num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022KHVBTv142',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a29num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022KHVBTv143',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a29num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022KHVBTv144',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a29num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK022KHVBT Done...'))

          // MDSHKNK022SYHBT

          await page.goto(knkurl30, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a30num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a30num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a30num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a30num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a30num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK022SYHBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a30num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022SYHBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a30num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022SYHBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a30num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022SYHBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a30num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022SYHBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a30num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK022SYHBT Done...'))

          // MDSHKNK022SYHST

          await page.goto(knkurl31,{
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a31num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a31num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a31num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a31num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a31num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK022SYHSTv140',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a31num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022SYHSTv141',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a31num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022SYHSTv142',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a31num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022SYHSTv143',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a31num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK022SYHSTv144',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a31num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK022SYHST Done...'))

          // MDSHKNK040HKKBTSUET

          await page.goto(knkurl32, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a32num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a32num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a32num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a32num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a32num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK040HKKBTSUET40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a32num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040HKKBTSUET41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a32num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040HKKBTSUET42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a32num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040HKKBTSUET43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a32num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040HKKBTSUET44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a32num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK040HKKBTSUET Done...'))

          // // MDSHKNK040HRDBTSUET

          // await page.goto(knkurl33, {
          //   waitUntil: 'networkidle0'
          // })
          // await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          // const a33num40 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a33num41 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a33num42 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a33num43 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a33num44 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // data = loadNotes()

          // data.push({
          //   "Barkod": 'MDSHKNK040HRDBTSUET40',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a33num40[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK040HRDBTSUET41',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a33num41[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK040HRDBTSUET42',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a33num42[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK040HRDBTSUET43',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a33num43[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK040HRDBTSUET44',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a33num44[0]),
          // })

          // await saveNotes(data)

          // await console.log(chalk.bgBlue.bold('MDSHKNK040HRDBTSUET Done...'))

          // MDSHKNK040KRMZBTSUET

          await page.goto(knkurl34, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a34num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a34num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a34num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a34num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a34num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK040KRMZBTSUET40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a34num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040KRMZBTSUET41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a34num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040KRMZBTSUET42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a34num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040KRMZBTSUET43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a34num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040KRMZBTSUET44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a34num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK040KRMZBTSUET Done...'))

          // MDSHKNK040SYHBTSUET

          await page.goto(knkurl35, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a35num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a35num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a35num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a35num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a35num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK040SYHBTSUETv140',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a35num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040SYHBTSUETv141',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a35num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040SYHBTSUETv142',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a35num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040SYHBTSUETv143',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a35num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040SYHBTSUETv144',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a35num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK040SYHBTSUET Done...'))

          // MDSHKNK040SYHSTSUETv1

          await page.goto(knkurl36, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a36num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a36num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a36num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a36num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a36num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK040SYHSTSUETv140',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a36num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040SYHSTSUETv141',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a36num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040SYHSTSUETv142',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a36num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040SYHSTSUETv143',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a36num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040SYHSTSUETv144',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a36num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK040SYHSTSUET Done...'))

          // MDSHKNK040TASBTSUET

          await page.goto(knkurl37, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a37num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a37num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a37num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a37num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a37num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK040TASBTSUET40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a37num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040TASBTSUET41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a37num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040TASBTSUET42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a37num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040TASBTSUET43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a37num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040TASBTSUET44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a37num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK040TASBTSUET Done...'))

          // MDSHKNK040TRNCBTSUET

          await page.goto(knkurl38, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a38num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a38num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a38num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a38num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a38num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK040TRNCBTSUET40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a38num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040TRNCBTSUET41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a38num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040TRNCBTSUET42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a38num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040TRNCBTSUET43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a38num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK040TRNCBTSUET44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a38num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK040TRNCBTSUET Done...'))

          // MDSHKNK044BLACKBS

          await page.goto(knkurl39, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a39num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a39num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a39num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a39num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a39num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044BLACKBS40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a39num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044BLACKBS41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a39num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044BLACKBS42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a39num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044BLACKBS43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a39num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044BLACKBS44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a39num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044BLACKBS Done...'))

          // MDSHKNK044BLACKWS

          await page.goto(knkurl40, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a40num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a40num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a40num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a40num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a40num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044BLACKWS40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a40num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044BLACKWS41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a40num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044BLACKWS42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a40num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044BLACKWS43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a40num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044BLACKWS44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a40num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044BLACKWS Done...'))

          // MDSHKNK044COLOREDBLACKBS

          await page.goto(knkurl41, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a41num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a41num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a41num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a41num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a41num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044COLOREDBLACKBS40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a41num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044COLOREDBLACKBS41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a41num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044COLOREDBLACKBS42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a41num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044COLOREDBLACKBS43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a41num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044COLOREDBLACKBS44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a41num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044COLOREDBLACKBS Done...'))

          // // MDSHKNK044COLOREDHOT

          // await page.goto(knkurl42, {
          //   waitUntil: 'networkidle0'
          // })
          // await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          // const a42num40 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a42num41 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a42num42 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a42num43 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a42num44 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // data = loadNotes()

          // data.push({
          //   "Barkod": 'MDSHKNK044COLOREDHOT40',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a42num40[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK044COLOREDHOT41',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a42num41[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK044COLOREDHOT42',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a42num42[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK044COLOREDHOT43',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a42num43[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK044COLOREDHOT44',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a42num44[0]),
          // })

          // await saveNotes(data)

          // await console.log(chalk.bgBlue.bold('MDSHKNK044COLOREDHOT Done...'))

          // MDSHKNK044COLOREDSKULL

          await page.goto(knkurl43, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a43num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a43num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a43num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a43num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a43num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044COLOREDSKULL40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a43num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044COLOREDSKULL41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a43num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044COLOREDSKULL42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a43num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044COLOREDSKULL43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a43num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044COLOREDSKULL44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a43num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044COLOREDSKULL Done...'))

          // MDSHKNK044COLOREDWHİTE

          await page.goto(knkurl44, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a44num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a44num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a44num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a44num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a44num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044COLOREDWHİTE40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a44num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044COLOREDWHİTE41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a44num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044COLOREDWHİTE42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a44num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044COLOREDWHİTE43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a44num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044COLOREDWHİTE44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a44num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044COLOREDWHİTE Done...'))

          // MDSHKNK044CUBA

          await page.goto(knkurl45, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a45num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a45num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a45num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a45num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a45num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044CUBA40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a45num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044CUBA41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a45num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044CUBA42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a45num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044CUBA43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a45num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044CUBA44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a45num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044CUBA Done...'))

          // MDSHKNK044ENGLAND

          await page.goto(knkurl46, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a46num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a46num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a46num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a46num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a46num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044ENGLAND40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a46num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044ENGLAND41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a46num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044ENGLAND42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a46num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044ENGLAND43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a46num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044ENGLAND44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a46num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044ENGLAND Done...'))

          // MDSHKNK044GHOSTSKULL

          await page.goto(knkurl47, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a47num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a47num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a47num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a47num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a47num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044GHOSTSKULL40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a47num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044GHOSTSKULL41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a47num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044GHOSTSKULL42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a47num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044GHOSTSKULL43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a47num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044GHOSTSKULL44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a47num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044GHOSTSKULL Done...'))

          // MDSHKNK044GİNA

          await page.goto(knkurl48, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a48num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a48num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a48num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a48num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a48num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044GİNA40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a48num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044GİNA41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a48num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044GİNA42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a48num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044GİNA43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a48num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044GİNA44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a48num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044GİNA Done...'))

          // MDSHKNK044GRAY

          await page.goto(knkurl49, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a49num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a49num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a49num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a49num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a49num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044GRAY40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a49num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044GRAY41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a49num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044GRAY42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a49num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044GRAY43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a49num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044GRAY44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a49num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044GRAY Done...'))

          // MDSHKNK044HAKİ

          await page.goto(knkurl50, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a50num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a50num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a50num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a50num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a50num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044HAKİ40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a50num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044HAKİ41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a50num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044HAKİ42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a50num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044HAKİ43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a50num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044HAKİ44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a50num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044HAKİ Done...'))

          // MDSHKNK044JAMAİCA

          await page.goto(knkurl51, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a51num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a51num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a51num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a51num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a51num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044JAMAİCA40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a51num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044JAMAİCA41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a51num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044JAMAİCA42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a51num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044JAMAİCA43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a51num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044JAMAİCA44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a51num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044JAMAİCA Done...'))

          // MDSHKNK044PATE

          await page.goto(knkurl52, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a52num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a52num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a52num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a52num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a52num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044PATE40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a52num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044PATE41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a52num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044PATE42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a52num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044PATE43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a52num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044PATE44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a52num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044PATE Done...'))

          // MDSHKNK044RED40

          await page.goto(knkurl53, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a53num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a53num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a53num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a53num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a53num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044RED40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a53num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044RED41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a53num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044RED42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a53num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044RED43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a53num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044RED44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a53num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044RED Done...'))

          // // MDSHKNK044ROSEANDSKULL

          // await page.goto(knkurl54, {
          //   waitUntil: 'networkidle0'
          // })
          // await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          // const a54num40 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a54num41 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a54num42 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a54num43 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a54num44 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // data = loadNotes()

          // data.push({
          //   "Barkod": 'MDSHKNK044ROSEANDSKULL40',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a54num40[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK044ROSEANDSKULL41',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a54num41[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK044ROSEANDSKULL42',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a54num42[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK044ROSEANDSKULL43',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a54num43[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK044ROSEANDSKULL44',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a54num44[0]),
          // })

          // await saveNotes(data)

          // await console.log(chalk.bgBlue.bold('MDSHKNK044ROSEANDSKULL Done...'))

          // // MDSHKNK044SMS

          // await page.goto(knkurl55, {
          //   waitUntil: 'networkidle0'
          // })
          // await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          // const a55num40 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a55num41 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a55num42 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a55num43 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a55num44 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // data = loadNotes()

          // data.push({
          //   "Barkod": 'MDSHKNK044SMS40',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a55num40[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK044SMS41',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a55num41[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK044SMS42',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a55num42[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK044SMS43',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a55num43[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK044SMS44',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a55num44[0]),
          // })

          // await saveNotes(data)

          // await console.log(chalk.bgBlue.bold('MDSHKNK044SMS Done...'))

          // MDSHKNK044TAN

          await page.goto(knkurl56, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a56num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a56num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a56num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a56num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a56num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044TAN40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a56num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044TAN41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a56num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044TAN42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a56num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044TAN43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a56num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044TAN44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a56num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044TAN Done...'))

          // MDSHKNK044WHİTE

          await page.goto(knkurl57, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a57num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a57num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a57num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a57num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a57num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044WHİTE40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a57num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044WHİTE41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a57num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044WHİTE42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a57num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044WHİTE43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a57num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044WHİTE44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a57num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044WHİTE Done...'))

          // MDSHKNK044YELLOW

          await page.goto(knkurl58, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a58num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a58num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a58num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a58num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a58num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044YELLOW40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a58num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044YELLOW41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a58num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044YELLOW42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a58num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044YELLOW43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a58num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044YELLOW44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a58num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044YELLOW Done...'))

          // MDSHKNK060BYZBT

          await page.goto(knkurl59, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a59num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a59num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a59num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a59num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a59num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK060BYZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a59num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060BYZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a59num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060BYZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a59num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060BYZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a59num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060BYZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a59num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK060BYZBT Done...'))

          // MDSHKNK060HKKBT

          await page.goto(knkurl60, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a60num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a60num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a60num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a60num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a60num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK060HKKBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a60num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060HKKBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a60num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060HKKBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a60num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060HKKBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a60num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060HKKBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a60num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK060HKKBT Done...'))

          // MDSHKNK060SYHCLT

          await page.goto(knkurl61, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a61num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a61num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a61num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a61num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a61num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK060SYHCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a61num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060SYHCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a61num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060SYHCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a61num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060SYHCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a61num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060SYHCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a61num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK060SYHCLT Done...'))

          // MDSHKNK060SYHST

          await page.goto(knkurl62, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a62num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a62num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a62num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a62num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a62num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK060SYHST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a62num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060SYHST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a62num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060SYHST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a62num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060SYHST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a62num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060SYHST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a62num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK060SYHST Done...'))

          // MDSHKNK060SYHSUET

          await page.goto(knkurl63, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a63num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a63num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a63num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a63num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a63num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK060SYHSUET40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a63num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060SYHSUET41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a63num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060SYHSUET42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a63num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060SYHSUET43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a63num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060SYHSUET44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a63num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK060SYHSUET Done...'))

          // MDSHKNK060TABABT

          await page.goto(knkurl64, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a64num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a64num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a64num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a64num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a64num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK060TABABT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a64num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060TABABT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a64num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060TABABT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a64num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060TABABT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a64num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060TABABT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a64num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK060TABABT Done...'))

          // MDSHKNK060TABABT

          await page.goto(knkurl65, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a65num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a65num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a65num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a65num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a65num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK060TABASUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a65num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060TABASUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a65num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060TABASUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a65num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060TABASUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a65num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK060TABASUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a65num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK060TABABT Done...'))

          // MDSHKNK999BYZBT

          await page.goto(knkurl66, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a66num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a66num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a66num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a66num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a66num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK999BYZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a66num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK999BYZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a66num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK999BYZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a66num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK999BYZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a66num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK999BYZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a66num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK999BYZBT Done...'))

          // // MDSHKNK999GRİBT

          // await page.goto(knkurl67, {
          //   waitUntil: 'networkidle0'
          // })
          // await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          // const a67num40 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a67num41 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a67num42 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a67num43 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // const a67num44 = await page.evaluate(() => {
          //   return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          // })

          // data = loadNotes()

          // data.push({
          //   "Barkod": 'MDSHKNK999GRİBT40',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a67num40[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK999GRİBT41',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a67num41[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK999GRİBT42',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a67num42[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK999GRİBT43',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a67num43[0]),
          // })

          // data.push({
          //   "Barkod": 'MDSHKNK999GRİBT44',
          //   "Piyasa Satış Fiyatı (KDV Dahil)": "",
          //   "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
          //   "Ürün Stok Adedi": Number(a67num44[0]),
          // })

          // await saveNotes(data)

          // await console.log(chalk.bgBlue.bold('MDSHKNK999GRİBT Done...'))

          // MDSHKNK999SYHBT

          await page.goto(knkurl68, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a68num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a68num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a68num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a68num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a68num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK999SYHBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a68num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK999SYHBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a68num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK999SYHBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a68num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK999SYHBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a68num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK999SYHBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a68num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK999SYHBT Done...'))

          // MDSHKNK999SYHST

          await page.goto(knkurl69, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a69num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a69num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a69num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a69num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a69num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK999SYHST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a69num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK999SYHST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a69num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK999SYHST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a69num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK999SYHST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a69num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK999SYHST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a69num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK999SYHST Done...'))

          // MDSHKNK999TABABT

          await page.goto(knkurl70, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a70num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a70num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a70num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a70num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a70num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK999TABABT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a70num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK999TABABT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a70num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK999TABABT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a70num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK999TABABT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a70num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK999TABABT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a70num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK999TABABT Done...'))

          // MDSHKNKB-80BYZCLTBT

          await page.goto(knkurl71, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a71num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a71num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a71num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a71num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a71num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-80BYZCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a71num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80BYZCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a71num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80BYZCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a71num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80BYZCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a71num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80BYZCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a71num44[0]),
          })

          await saveNotes(data)

          await browser.close()
          await console.log(chalk.bgBlue.bold('MDSHKNKB-80BYZCLTBT Done...'))

        })();


      } catch (err) {
        console.log(chalk.bgRed.bold(err))
      }
    })();

    // Function 02
    await (async function funurl2() {
      try {
        await (async function () {
          const browser = await puppeteer.launch({
            headless: true
          })
          const page = await browser.newPage();
          await page.goto("https://www.bayiknack.com/uyelik/giris-yap", {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector('#User_Email')

          await page.type('#User_Email', 'atheelarouge@gmail.com', {
            delay: 200
          })
          await page.type('#User_Password', 'tma200786', {
            delay: 200
          })
          await page.click('button.button.button-login.right', {
            delay: 200
          })

          await page.waitForSelector('.user-info.left')

          // MDSHKNKB-80HKKCLTBT

          await page.goto(knkurl72, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a72num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a72num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a72num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a72num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a72num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-80HKKCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a72num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80HKKCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a72num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80HKKCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a72num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80HKKCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a72num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80HKKCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a72num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-80HKKCLTBT Done...'))

          // MDSHKNKB-80KHVCLTBT

          await page.goto(knkurl73, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a73num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a73num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a73num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a73num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a73num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-80KHVCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a73num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80KHVCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a73num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80KHVCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a73num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80KHVCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a73num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80KHVCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a73num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-80KHVCLTBT Done...'))

          //MDSHKNKB-80SYHCLTBT

          await page.goto(knkurl74, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a74num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a74num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a74num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a74num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a74num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-80SYHCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a74num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80SYHCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a74num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80SYHCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a74num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80SYHCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a74num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80SYHCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a74num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-80SYHCLTBT Done...'))

          // MDSHKNKB-80SYHCLTST

          await page.goto(knkurl75, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a75num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a75num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a75num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a75num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a75num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-80SYHCLTST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a75num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80SYHCLTST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a75num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80SYHCLTST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a75num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80SYHCLTST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a75num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80SYHCLTST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a75num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-80SYHCLTST Done...'))

          // MDSHKNKB-80TABACLTBT

          await page.goto(knkurl76, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a76num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a76num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a76num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a76num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a76num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-80TABACLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a76num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80TABACLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a76num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80TABACLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a76num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80TABACLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a76num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-80TABACLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a76num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-80TABACLTBT Done...'))

          // MDSHKNKKX-300BYZBT

          await page.goto(knkurl77, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a77num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a77num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a77num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a77num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a77num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKKX-300BYZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a77num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300BYZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a77num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300BYZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a77num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300BYZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a77num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300BYZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a77num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKKX-300BYZBT Done...'))

          // MDSHKNKKX-300HKKBT

          await page.goto(knkurl78, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a78num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a78num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a78num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a78num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a78num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKKX-300HKKBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a78num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300HKKBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a78num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300HKKBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a78num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300HKKBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a78num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300HKKBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a78num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKKX-300HKKBT Done...'))

          // MDSHKNKKX-300LCVRTBT

          await page.goto(knkurl79, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a79num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a79num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a79num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a79num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a79num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKKX-300LCVRTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a79num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300LCVRTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a79num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300LCVRTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a79num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300LCVRTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a79num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300LCVRTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a79num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKKX-300LCVRTBT Done...'))

          // MDSHKNKKX-300SYHBT

          await page.goto(knkurl80, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a80num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a80num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a80num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a80num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a80num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKKX-300SYHBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a80num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300SYHBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a80num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300SYHBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a80num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300SYHBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a80num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300SYHBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a80num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKKX-300SYHBT Done...'))

          // MDSHKNKKX-300SYHST

          await page.goto(knkurl81, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a81num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a81num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a81num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a81num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a81num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKKX-300SYHST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a81num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300SYHST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a81num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300SYHST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a81num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300SYHST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a81num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300SYHST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a81num44[0]),
          })

          await saveNotes(data)

          console.log(chalk.bgBlue.bold('MDSHKNKKX-300SYHST Done...'))

          // MDSHKNKKX-300VZNBT

          await page.goto(knkurl82, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a82num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a82num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a82num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a82num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a82num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKKX-300VZNBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a82num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300VZNBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a82num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300VZNBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a82num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300VZNBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a82num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKKX-300VZNBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a82num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKKX-300VZNBT Done...'))

          // MDSHKNKF-505BYZBT

          await page.goto(knkurl83, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a83num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a83num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a83num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a83num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a83num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKF-505BYZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a83num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505BYZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a83num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505BYZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a83num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505BYZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a83num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505BYZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a83num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKF-505BYZBT Done...'))

          // MDSHKNKF-505GRBT

          await page.goto(knkurl84, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a84num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a84num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a84num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a84num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a84num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKF-505GRBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a84num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505GRBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a84num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505GRBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a84num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505GRBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a84num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505GRBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a84num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKF-505GRBT Done...'))

          // MDSHKNKF-505SYHBT

          await page.goto(knkurl85, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a85num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a85num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a85num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a85num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a85num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKF-505SYHBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a85num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505SYHBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a85num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505SYHBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a85num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505SYHBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a85num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505SYHBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a85num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKF-505SYHBT Done...'))

          // MDSHKNKF-505SYHST

          await page.goto(knkurl86, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a86num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a86num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a86num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a86num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a86num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKF-505SYHST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a86num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505SYHST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a86num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505SYHST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a86num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505SYHST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a86num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505SYHST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a86num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKF-505SYHST Done...'))

          // MDSHKNKF-505TABABT

          await page.goto(knkurl87, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a87num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a87num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a87num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a87num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a87num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKF-505TABABT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a87num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505TABABT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a87num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505TABABT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a87num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505TABABT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a87num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKF-505TABABT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a87num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKF-505TABABT Done...'))

          // MDSHKNKC-030BYZCLTBT

          await page.goto(knkurl88, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a88num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a88num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a88num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a88num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a88num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKC-030BYZCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a88num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030BYZCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a88num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030BYZCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a88num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030BYZCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a88num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030BYZCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a88num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKC-030BYZCLTBT Done...'))

          // MDSHKNKC-030SYHCLTBT

          await page.goto(knkurl89, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a89num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a89num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a89num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a89num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a89num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKC-030SYHCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a89num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030SYHCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a89num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030SYHCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a89num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030SYHCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a89num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030SYHCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a89num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKC-030SYHCLTBT Done...'))

          // MDSHKNKC-030SYHSUETBT

          await page.goto(knkurl90, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a90num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a90num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a90num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a90num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a90num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKC-030SYHSUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a90num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030SYHSUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a90num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030SYHSUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a90num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030SYHSUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a90num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030SYHSUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a90num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKC-030SYHSUETBT Done...'))

          // MDSHKNKC-030TABASUETBT

          await page.goto(knkurl91, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a91num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a91num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a91num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a91num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a91num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKC-030TABASUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a91num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030TABASUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a91num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030TABASUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a91num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030TABASUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a91num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030TABASUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a91num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKC-030TABASUETBT Done...'))

          // MDSHKNKC-030TASSUETBT

          await page.goto(knkurl92, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a92num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a92num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a92num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a92num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a92num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKC-030TASSUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a92num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030TASSUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a92num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030TASSUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a92num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030TASSUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a92num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030TASSUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a92num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKC-030TASSUETBT Done...'))

          // MDSHKNKC-030VZNSUETBT

          await page.goto(knkurl93, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a93num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a93num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a93num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a93num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a93num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKC-030VZNSUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a93num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030VZNSUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a93num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030VZNSUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a93num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030VZNSUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a93num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKC-030VZNSUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a93num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKC-030VZNSUETBT Done...'))

          // MDSHKNKB-020SYHBT

          await page.goto(knkurl94, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a94num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a94num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a94num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a94num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a94num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-020SYHBTv140',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a94num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020SYHBTv141',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a94num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020SYHBTv142',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a94num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020SYHBTv143',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a94num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020SYHBTv144',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a94num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-020SYHBT Done...'))

          // MDSHKNKB-020SYHST

          await page.goto(knkurl95, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a95num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a95num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a95num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a95num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a95num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-020SYHST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a95num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020SYHST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a95num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020SYHST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a95num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020SYHST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a95num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020SYHST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a95num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-020SYHST Done...'))

          // MDSHKNKB-020TABACLTTT

          await page.goto(knkurl96, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a96num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a96num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a96num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a96num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a96num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-020TABACLTTT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a96num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020TABACLTTT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a96num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020TABACLTTT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a96num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020TABACLTTT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a96num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020TABACLTTT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a96num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-020TABACLTTT Done...'))

          // MDSHKNKB-020TABASUETTT

          await page.goto(knkurl97, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a97num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a97num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a97num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a97num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a97num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-020TABASUETTT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a97num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020TABASUETTT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a97num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020TABASUETTT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a97num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020TABASUETTT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a97num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020TABASUETTT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a97num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-020TABASUETTT Done...'))

          // MDSHKNKB-020VZNSUETTT

          await page.goto(knkurl98, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a98num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a98num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a98num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a98num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a98num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-020VZNSUETTT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a98num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020VZNSUETTT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a98num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020VZNSUETTT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a98num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020VZNSUETTT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a98num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-020VZNSUETTT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a98num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-020VZNSUETTT Done...'))

          // MDSHKNKB-022SYHBT

          await page.goto(knkurl99, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a99num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a99num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a99num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a99num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a99num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-022SYHBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a99num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-022SYHBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a99num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-022SYHBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a99num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-022SYHBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a99num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-022SYHBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a99num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-022SYHBT Done...'))

          // MDSHKNKB-022SYHST

          await page.goto(knkurl100, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a100num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a100num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a100num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a100num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a100num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-022SYHST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a100num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-022SYHST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a100num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-022SYHST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a100num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-022SYHST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a100num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-022SYHST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a100num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-022SYHST Done...'))

          // MDSHKNKB-022TABATT

          await page.goto(knkurl101, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a101num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a101num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a101num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a101num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a101num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-022TABATT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a101num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-022TABATT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a101num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-022TABATT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a101num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-022TABATT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a101num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-022TABATT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a101num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-022TABATT Done...'))

          // MDSHKNKB-022TASBT

          await page.goto(knkurl102, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a102num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a102num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a102num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a102num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a102num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-022TASBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a102num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-022TASBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a102num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-022TASBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a102num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-022TASBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a102num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-022TASBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a102num44[0]),
          })

          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-022TASBT Done...'))

          // MDSHKNK010BYZCLTBT

          await page.goto(knkurl103, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a103num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a103num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a103num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a103num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a103num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK010BYZCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a103num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010BYZCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a103num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010BYZCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a103num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010BYZCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a103num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010BYZCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a103num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK010BYZCLTBT Done...'))

          // MDSHKNK010SYHCLTBT

          await page.goto(knkurl104, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a104num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a104num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a104num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a104num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a104num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK010SYHCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a104num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010SYHCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a104num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010SYHCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a104num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010SYHCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a104num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010SYHCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a104num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK010SYHCLTBT Done...'))

          // MDSHKNK010TABASUETBT

          await page.goto(knkurl105, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a105num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a105num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a105num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a105num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a105num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK010TABASUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a105num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010TABASUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a105num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010TABASUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a105num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010TABASUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a105num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010TABASUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a105num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK010TABASUETBT Done...'))

          // MDSHKNK010TASSUETBT

          await page.goto(knkurl106, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a106num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a106num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a106num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a106num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a106num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK010TASSUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a106num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010TASSUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a106num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010TASSUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a106num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010TASSUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a106num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010TASSUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a106num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK010TASSUETBT Done...'))

          // MDSHKNK010VZNSUETBT

          await page.goto(knkurl107, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a107num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a107num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a107num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a107num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a107num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK010VZNSUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a107num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010VZNSUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a107num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010VZNSUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a107num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010VZNSUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a107num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010VZNSUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a107num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK010VZNSUETBT Done...'))

          // MDSHKNK010SYHSUETBT

          await page.goto(knkurl108, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a108num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a108num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a108num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a108num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a108num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK010SYHSUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a108num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010SYHSUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a108num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010SYHSUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a108num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010SYHSUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a108num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK010SYHSUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a108num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK010SYHSUETBT Done...'))

          // MDSHKNKB-404BYZCLTBT

          await page.goto(knkurl109, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a109num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a109num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a109num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a109num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a109num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-404BYZCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a109num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404BYZCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a109num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404BYZCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a109num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404BYZCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a109num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404BYZCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a109num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-404BYZCLTBT Done...'))

          // MDSHKNKB-404GRİCLTBT

          await page.goto(knkurl110, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a110num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a110num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a110num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a110num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a110num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-404GRİCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a110num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404GRİCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a110num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404GRİCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a110num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404GRİCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a110num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404GRİCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a110num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-404GRİCLTBT Done...'))

          // MDSHKNKB-404HKKCLTBT

          await page.goto(knkurl111, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a111num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a111num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a111num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a111num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a111num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-404HKKCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a111num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404HKKCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a111num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404HKKCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a111num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404HKKCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a111num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404HKKCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a111num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-404HKKCLTBT Done...'))

          // MDSHKNKB-404SYHCLTST

          await page.goto(knkurl112, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a112num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a112num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a112num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a112num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a112num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-404SYHCLTST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a112num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404SYHCLTST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a112num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404SYHCLTST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a112num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404SYHCLTST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a112num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404SYHCLTST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a112num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-404SYHCLTST Done...'))

          // MDSHKNKB-404SYHSUETBT

          await page.goto(knkurl113, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a113num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a113num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a113num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a113num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a113num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-404SYHSUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a113num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404SYHSUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a113num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404SYHSUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a113num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404SYHSUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a113num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404SYHSUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a113num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-404SYHSUETBT Done...'))

          // MDSHKNKB-404TABASUETBT

          await page.goto(knkurl114, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a114num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a114num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a114num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a114num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a114num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-404TABASUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a114num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404TABASUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a114num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404TABASUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a114num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404TABASUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a114num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404TABASUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a114num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-404TABASUETBT Done...'))

          // MDSHKNKB-404TABACLTBT

          await page.goto(knkurl115, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a115num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a115num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a115num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a115num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a115num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKB-404TABACLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a115num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404TABACLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a115num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404TABACLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a115num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404TABACLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a115num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKB-404TABACLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a115num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKB-404TABACLTBT Done...'))

          // MDSHKNK717BRDBTCLT

          await page.goto(knkurl116, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a116num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a116num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a116num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a116num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a116num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK717BRDBTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a116num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717BRDBTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a116num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717BRDBTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a116num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717BRDBTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a116num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717BRDBTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a116num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK717BRDBTCLT Done...'))

          // MDSHKNK717BYZBTCLT

          await page.goto(knkurl117, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a117num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a117num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a117num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a117num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a117num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK717BYZBTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a117num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717BYZBTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a117num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717BYZBTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a117num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717BYZBTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a117num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717BYZBTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a117num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK717BYZBTCLT Done...'))

          // MDSHKNK717GRİBTCLT

          await page.goto(knkurl118, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a118num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a118num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a118num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a118num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a118num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK717GRİBTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a118num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717GRİBTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a118num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717GRİBTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a118num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717GRİBTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a118num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717GRİBTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a118num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK717GRİBTCLT Done...'))

          // MDSHKNK717HKKBTCLT

          await page.goto(knkurl119, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a119num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a119num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a119num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a119num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a119num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK717HKKBTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a119num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717HKKBTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a119num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717HKKBTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a119num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717HKKBTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a119num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717HKKBTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a119num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK717HKKBTCLT Done...'))

          // MDSHKNK717KHVBTCLT

          await page.goto(knkurl120, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a120num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a120num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a120num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a120num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a120num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK717KHVBTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a120num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717KHVBTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a120num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717KHVBTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a120num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717KHVBTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a120num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717KHVBTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a120num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK717KHVBTCLT Done...'))

          // MDSHKNK717LCVRTBTCLT

          await page.goto(knkurl121, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a121num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a121num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a121num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a121num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a121num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK717LCVRTBTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a121num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717LCVRTBTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a121num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717LCVRTBTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a121num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717LCVRTBTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a121num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717LCVRTBTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a121num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK717LCVRTBTCLT Done...'))

          // MDSHKNK717LCVRTBTSUET

          await page.goto(knkurl122, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a122num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a122num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a122num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a122num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a122num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK717LCVRTBTSUET40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a122num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717LCVRTBTSUET41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a122num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717LCVRTBTSUET42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a122num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717LCVRTBTSUET43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a122num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717LCVRTBTSUET44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a122num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK717LCVRTBTSUET Done...'))

          await page.goto(knkurl123, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a123num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a123num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a123num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a123num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a123num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK717SYHBTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a123num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717SYHBTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a123num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717SYHBTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a123num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717SYHBTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a123num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717SYHBTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a123num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK717SYHBTCLT Done...'))

          // MDSHKNK717SYHBTSUET

          await page.goto(knkurl124, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a124num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a124num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a124num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a124num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a124num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK717SYHBTSUET40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a124num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717SYHBTSUET41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a124num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717SYHBTSUET42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a124num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717SYHBTSUET43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a124num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717SYHBTSUET44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a124num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK717SYHBTCLT Done...'))

          // MDSHKNK717TABABTSUET

          await page.goto(knkurl125, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a125num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a125num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a125num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a125num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a125num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK717TABABTSUET40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a125num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717TABABTSUET41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a125num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717TABABTSUET42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a125num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717TABABTSUET43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a125num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717TABABTSUET44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a125num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK717TABABTSUET Done...'))

          // MDSHKNK717TABABTCLT

          await page.goto(knkurl126, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a126num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a126num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a126num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a126num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a126num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK717TABABTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a126num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717TABABTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a126num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717TABABTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a126num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717TABABTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a126num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK717TABABTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a126num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK717TABABTCLT Done...'))

          // MDSHKNK555BYZBTCLT

          await page.goto(knkurl127, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a127num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a127num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a127num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a127num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a127num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK555BYZBTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a127num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555BYZBTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a127num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555BYZBTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a127num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555BYZBTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a127num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555BYZBTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a127num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK555BYZBTCLT Done...'))

          // MDSHKNK555GRİBTCLT

          await page.goto(knkurl128, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a128num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a128num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a128num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a128num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a128num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK555GRİBTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a128num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555GRİBTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a128num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555GRİBTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a128num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555GRİBTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a128num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555GRİBTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a128num44[0])
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK555GRİBTCLT Done...'))

          // MDSHKNK555GRİBTCLT

          await page.goto(knkurl129, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a129num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a129num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a129num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a129num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a129num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK555HKKBTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a129num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555HKKBTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a129num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555HKKBTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a129num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555HKKBTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a129num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555HKKBTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a129num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK555GRİBTCLT Done...'))

          // MDSHKNK555HRDBTCLT

          await page.goto(knkurl130, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a130num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a130num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a130num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a130num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a130num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK555HRDBTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a130num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555HRDBTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a130num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555HRDBTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a130num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555HRDBTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a130num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555HRDBTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a130num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK555HRDBTCLT Done...'))

          // MDSHKNK555KHVBTCLT

          await page.goto(knkurl131, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a131num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a131num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a131num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a131num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a131num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK555KHVBTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a131num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555KHVBTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a131num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555KHVBTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a131num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555KHVBTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a131num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555KHVBTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a131num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK555KHVBTCLT Done...'))

          // MDSHKNK555KRMZBTCLT

          await page.goto(knkurl132, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a132num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a132num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a132num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a132num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a132num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK555KRMZBTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a132num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555KRMZBTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a132num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555KRMZBTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a132num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555KRMZBTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a132num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555KRMZBTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a132num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK555KRMZBTCLT Done...'))

          // MDSHKNK555LCVRTBTCLT

          await page.goto(knkurl133, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a133num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a133num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a133num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a133num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a133num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK555LCVRTBTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a133num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555LCVRTBTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a133num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555LCVRTBTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a133num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555LCVRTBTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a133num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555LCVRTBTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a133num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK555LCVRTBTCLT Done...'))

          // MDSHKNK555SYHBTCLT

          await page.goto(knkurl134, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a134num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a134num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a134num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a134num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a134num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK555SYHBTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a134num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555SYHBTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a134num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555SYHBTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a134num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555SYHBTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a134num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555SYHBTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a134num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK555SYHBTCLT Done...'))

          // MDSHKNK555SYHSTCLT

          await page.goto(knkurl135, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a135num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a135num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a135num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a135num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a135num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK555SYHSTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a135num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555SYHSTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a135num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555SYHSTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a135num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555SYHSTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a135num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555SYHSTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a135num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK555SYHSTCLT Done...'))

          // MDSHKNK555TABABTCLT

          await page.goto(knkurl136, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a136num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a136num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a136num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a136num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a136num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK555TABABTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a136num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555TABABTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a136num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555TABABTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a136num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555TABABTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a136num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK555TABABTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a136num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK555TABABTCLT Done...'))

          // MDSHKNK606BYZBT

          await page.goto(knkurl137, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a137num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a137num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a137num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a137num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a137num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK606BYZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a137num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606BYZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a137num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606BYZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a137num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606BYZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a137num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606BYZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a137num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK606BYZBT Done...'))

          // MDSHKNK606BYZKRMZBT

          await page.goto(knkurl138, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a138num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a138num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a138num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a138num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a138num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK606BYZKRMZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a138num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606BYZKRMZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a138num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606BYZKRMZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a138num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606BYZKRMZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a138num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606BYZKRMZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a138num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK606BYZKRMZBT Done...'))

          // MDSHKNK606BYZSARBT

          await page.goto(knkurl139, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a139num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a139num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a139num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a139num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a139num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK606BYZSARBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a139num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606BYZSARBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a139num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606BYZSARBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a139num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606BYZSARBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a139num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606BYZSARBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a139num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK606BYZSARBT Done...'))

          // MDSHKNK606BYZST

          await page.goto(knkurl140, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a140num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a140num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a140num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a140num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a140num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK606BYZST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a140num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606BYZST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a140num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606BYZST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a140num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606BYZST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a140num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606BYZST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a140num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK606BYZST Done...'))

          // MDSHKNK606GRİKRMZBT

          await page.goto(knkurl141, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a141num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a141num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a141num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a141num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a141num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK606GRİKRMZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a141num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606GRİKRMZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a141num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606GRİKRMZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a141num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606GRİKRMZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a141num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606GRİKRMZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a141num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK606GRİKRMZBT Done...'))

          // MDSHKNK606GRİSARBT

          await page.goto(knkurl142, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a142num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a142num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a142num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a142num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a142num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK606GRİSARBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a142num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606GRİSARBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a142num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606GRİSARBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a142num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606GRİSARBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a142num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606GRİSARBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a142num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK606GRİSARBT Done...'))

          // MDSHKNK606SYHBT

          await page.goto(knkurl143, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a143num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a143num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a143num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a143num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a143num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK606SYHBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a143num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606SYHBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a143num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606SYHBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a143num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606SYHBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a143num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606SYHBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a143num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK606SYHBT Done...'))

          // MDSHKNK606SYHKRMZBT

          await page.goto(knkurl144, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a144num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a144num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a144num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a144num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a144num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK606SYHKRMZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a144num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606SYHKRMZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a144num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606SYHKRMZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a144num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606SYHKRMZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a144num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606SYHKRMZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a144num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK606SYHKRMZBT Done...'))

          // MDSHKNK606SYHSARBT

          await page.goto(knkurl145, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a145num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a145num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a145num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a145num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a145num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK606SYHSARBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a145num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606SYHSARBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a145num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606SYHSARBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a145num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606SYHSARBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a145num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606SYHSARBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a145num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK606SYHSARBT Done...'))

          // MDSHKNK606SYHST

          await page.goto(knkurl146, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a146num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a146num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a146num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a146num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a146num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK606SYHST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a146num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606SYHST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a146num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606SYHST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a146num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606SYHST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a146num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK606SYHST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a146num44[0]),
          })
          await saveNotes(data)

          console.log(chalk.bgBlue.bold('MDSHKNK606SYHST Done...'))

          // MDSHKNK707BYZBT

          await page.goto(knkurl147, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a147num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a147num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a147num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a147num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a147num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK707BYZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a147num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707BYZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a147num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707BYZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a147num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707BYZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a147num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707BYZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a147num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK707BYZBT Done...'))

          // MDSHKNK707GRİBT

          await page.goto(knkurl148, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a148num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a148num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a148num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a148num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a148num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK707GRİBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a148num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707GRİBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a148num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707GRİBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a148num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707GRİBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a148num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707GRİBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a148num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK707GRİBT Done...'))

          // MDSHKNK707HKKBT

          await page.goto(knkurl149, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a149num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a149num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a149num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a149num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a149num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK707HKKBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a149num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707HKKBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a149num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707HKKBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a149num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707HKKBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a149num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707HKKBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a149num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK707HKKBT Done...'))

          // MDSHKNK707HRDBT

          await page.goto(knkurl150, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a150num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a150num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a150num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a150num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a150num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK707HRDBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a150num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707HRDBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a150num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707HRDBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a150num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707HRDBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a150num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707HRDBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a150num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK707HRDBT Done...'))

          // MDSHKNK707KRMZBT

          await page.goto(knkurl151, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a151num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a151num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a151num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a151num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a151num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK707KRMZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a151num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707KRMZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a151num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707KRMZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a151num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707KRMZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a151num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707KRMZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a151num44[0]),
          })
          await saveNotes(data)

          console.log(chalk.bgBlue.bold('MDSHKNK707KRMZBT Done...'))

          // MDSHKNK707SYHBT

          await page.goto(knkurl152, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a152num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a152num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a152num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a152num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a152num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK707SYHBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a152num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707SYHBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a152num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707SYHBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a152num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707SYHBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a152num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707SYHBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a152num44[0]),
          })
          await saveNotes(data)

          console.log(chalk.bgBlue.bold('MDSHKNK707SYHBT Done...'))

          // MDSHKNK707SYHST

          await page.goto(knkurl153, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a153num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a153num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a153num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a153num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a153num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK707SYHST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a153num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707SYHST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a153num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707SYHST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a153num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707SYHST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a153num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707SYHST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a153num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK707SYHST Done...'))

          // MDSHKNK707TABABT

          await page.goto(knkurl154, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a154num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a154num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a154num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a154num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a154num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK707TABABT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a154num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707TABABT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a154num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707TABABT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a154num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707TABABT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a154num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK707TABABT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a154num44[0]),
          })
          await saveNotes(data)

          console.log(chalk.bgBlue.bold('MDSHKNK707TABABT Done...'))

          // MDSHKNK001SYHBTCLT

          await page.goto(knkurl155, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a155num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a155num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a155num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a155num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a155num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK001SYHBTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a155num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHBTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a155num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHBTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a155num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHBTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a155num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHBTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a155num44[0]),
          })
          await saveNotes(data)

          console.log(chalk.bgBlue.bold('MDSHKNK001SYHBTCLT Done...'))

          // MDSHKNK001SYHBTRGN

          await page.goto(knkurl156, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a156num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a156num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a156num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a156num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a156num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK001SYHBTRGN40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a156num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHBTRGN41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a156num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHBTRGN42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a156num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHBTRGN43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a156num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHBTRGN44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a156num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK001SYHBTRGN Done...'))

          // MDSHKNK001SYHBTSUET

          await page.goto(knkurl157, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a157num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a157num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a157num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a157num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a157num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK001SYHBTSUET40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a157num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHBTSUET41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a157num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHBTSUET42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a157num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHBTSUET43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a157num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHBTSUET44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a157num44[0]),
          })
          await saveNotes(data)

          console.log(chalk.bgBlue.bold('MDSHKNK001SYHBTSUET Done...'))

          await page.goto(knkurl158, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a158num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a158num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a158num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a158num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a158num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK001SYHSTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a158num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHSTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a158num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHSTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a158num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHSTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a158num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHSTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a158num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK001SYHSTCLT Done...'))

          // MDSHKNK001SYHSTRGN

          await page.goto(knkurl159, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a159num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a159num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a159num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a159num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a159num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK001SYHSTRGN40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a159num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHSTRGN41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a159num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHSTRGN42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a159num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHSTRGN43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a159num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHSTRGN44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a159num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK001SYHSTRGN Done...'))

          // MDSHKNK001SYHSTSUET40

          await page.goto(knkurl160, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a160num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a160num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a160num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a160num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a160num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK001SYHSTSUET40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a160num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHSTSUET41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a160num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHSTSUET42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a160num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHSTSUET43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a160num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001SYHSTSUET44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a160num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK001SYHSTSUET Done...'))

          // MDSHKNK001TABABTCLT

          await page.goto(knkurl161, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a161num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a161num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a161num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a161num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a161num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK001TABABTCLT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a161num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001TABABTCLT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a161num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001TABABTCLT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a161num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001TABABTCLT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a161num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK001TABABTCLT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a161num44[0]),
          })
          await saveNotes(data)

          console.log(chalk.bgBlue.bold('MDSHKNK001TABABTCLT Done...'))


          // MDSHKNK888BYZBT

          await page.goto(knkurl162, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a162num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a162num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a162num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a162num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a162num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK888BYZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a162num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK888BYZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a162num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK888BYZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a162num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK888BYZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a162num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK888BYZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a162num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK888BYZBT Done...'))


          // MDSHKNK888GRİBT

          await page.goto(knkurl163, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a163num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a163num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a163num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a163num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a163num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK888GRİBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a163num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK888GRİBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a163num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK888GRİBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a163num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK888GRİBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a163num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK888GRİBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a163num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK888GRİBT Done...'))


          // MDSHKNK888SYHBT

          await page.goto(knkurl164, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a164num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a164num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a164num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a164num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a164num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK888SYHBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a164num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK888SYHBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a164num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK888SYHBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a164num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK888SYHBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a164num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK888SYHBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a164num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK888SYHBT Done...'))


          // MDSHKNK888SYHST

          await page.goto(knkurl165, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a165num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a165num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a165num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a165num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a165num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK888SYHST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a165num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK888SYHST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a165num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK888SYHST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a165num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK888SYHST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a165num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK888SYHST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a165num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK888SYHST Done...'))

          // MDSHKNKN75BYZBT

          await page.goto(knkurl166, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a166num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a166num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a166num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a166num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a166num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKN75BYZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a166num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75BYZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a166num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75BYZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a166num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75BYZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a166num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75BYZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a166num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKN75BYZBT Done...'))

          // MDSHKNKN75HKKBT

          await page.goto(knkurl167, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a167num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a167num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a167num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a167num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a167num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKN75HKKBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a167num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75HKKBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a167num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75HKKBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a167num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75HKKBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a167num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75HKKBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a167num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKN75HKKBT Done...'))

          // MDSHKNKN75LCVRTBT

          await page.goto(knkurl168, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a168num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a168num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a168num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a168num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a168num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKN75LCVRTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a168num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75LCVRTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a168num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75LCVRTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a168num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75LCVRTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a168num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75LCVRTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a168num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKN75LCVRTBT Done...'))

          // MDSHKNKN75SYHST

          await page.goto(knkurl169, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a169num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a169num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a169num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a169num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a169num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKN75SYHST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a169num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75SYHST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a169num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75SYHST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a169num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75SYHST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a169num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75SYHST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a169num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKN75SYHST Done...'))

          // MDSHKNKN75SYHBT

          await page.goto(knkurl170, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a170num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a170num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a170num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a170num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a170num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKN75SYHBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a170num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75SYHBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a170num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75SYHBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a170num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75SYHBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a170num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75SYHBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a170num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKN75SYHBT Done...'))


          // MDSHKNKN75TABABT

          await page.goto(knkurl171, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a171num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a171num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a171num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a171num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a171num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNKN75TABABT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a171num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75TABABT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a171num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75TABABT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a171num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75TABABT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a171num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNKN75TABABT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a171num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNKN75TABABT Done...'))

          // MDSHKNK812BYZCLTBT

          await page.goto(knkurl172, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a172num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a172num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a172num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a172num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a172num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK812BYZCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a172num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812BYZCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a172num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812BYZCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a172num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812BYZCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a172num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812BYZCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a172num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK812BYZCLTBT Done...'))

          // MDSHKNK812SYHCLTBT

          await page.goto(knkurl173, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a173num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a173num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a173num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a173num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a173num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK812SYHCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a173num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812SYHCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a173num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812SYHCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a173num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812SYHCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a173num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812SYHCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a173num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK812SYHCLTBT Done...'))

          // MDSHKNK812SYHSUETBT

          await page.goto(knkurl174, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a174num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a174num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a174num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a174num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a174num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK812SYHSUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a174num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812SYHSUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a174num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812SYHSUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a174num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812SYHSUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a174num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812SYHSUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a174num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK812SYHSUETBT Done...'))

          // MDSHKNK812SYHSUETST

          await page.goto(knkurl175, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a175num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a175num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a175num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a175num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a175num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK812SYHSUETST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a175num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812SYHSUETST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a175num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812SYHSUETST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a175num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812SYHSUETST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a175num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812SYHSUETST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a175num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK812SYHSUETST Done...'))

          // MDSHKNK812TASSUETBT

          await page.goto(knkurl176, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a176num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a176num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a176num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a176num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a176num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK812TASSUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a176num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812TASSUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a176num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812TASSUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a176num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812TASSUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a176num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK812TASSUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a176num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK812TASSUETBT Done...'))

          // MDSHKNK042BYZBT

          await page.goto(knkurl177, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a177num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a177num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a177num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a177num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a177num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK042BYZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a177num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK042BYZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a177num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK042BYZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a177num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK042BYZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a177num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK042BYZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a177num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK042BYZBT Done...'))

          // MDSHKNK042SYHBT

          await page.goto(knkurl178, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a178num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a178num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a178num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a178num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a178num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK042SYHBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a178num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK042SYHBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a178num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK042SYHBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a178num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK042SYHBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a178num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK042SYHBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a178num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK042SYHBT Done...'))


          // MDSHKNK042SYHST

          await page.goto(knkurl179, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a179num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a179num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a179num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a179num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a179num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK042SYHST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a179num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK042SYHST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a179num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK042SYHST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a179num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK042SYHST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a179num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK042SYHST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a179num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK042SYHST Done...'))

          // MDSHKNK042TABABT

          await page.goto(knkurl180, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a180num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a180num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a180num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a180num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a180num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK042TABABT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a180num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK042TABABT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a180num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK042TABABT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a180num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK042TABABT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a180num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK042TABABT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a180num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK042TABABT Done...'))

          // MDSHKNK911BYZBT

          await page.goto(knkurl181, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a181num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a181num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a181num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a181num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a181num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK911BYZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a181num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK911BYZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a181num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK911BYZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a181num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK911BYZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a181num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK911BYZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a181num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK911BYZBT Done...'))

          // MDSHKNK911GRİBT

          await page.goto(knkurl182, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a182num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a182num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a182num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a182num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a182num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK911GRİBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a182num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK911GRİBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a182num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK911GRİBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a182num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK911GRİBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a182num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK911GRİBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a182num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK911GRİBT Done...'))

          // MDSHKNK911SYHBT

          await page.goto(knkurl183, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a183num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a183num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a183num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a183num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a183num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK911SYHBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a183num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK911SYHBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a183num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK911SYHBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a183num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK911SYHBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a183num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK911SYHBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a183num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK911SYHBT Done...'))

          // MDSHKNK911TABABT

          await page.goto(knkurl184, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a184num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a184num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a184num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a184num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a184num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK911TABABT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a184num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK911TABABT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a184num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK911TABABT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a184num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK911TABABT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a184num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK911TABABT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a184num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK911TABABT Done...'))


          // MDSHKNK889BYZBT

          await page.goto(knkurl185, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a185num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a185num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a185num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a185num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a185num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK889BYZBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a185num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK889BYZBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a185num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK889BYZBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a185num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK889BYZBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a185num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK889BYZBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a185num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK889BYZBT Done...'))



          // MDSHKNK889SYHBT

          await page.goto(knkurl186, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a186num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a186num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a186num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a186num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a186num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK889SYHBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a186num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK889SYHBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a186num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK889SYHBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a186num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK889SYHBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a186num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK889SYHBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a186num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK889SYHBT Done...'))


          // MDSHKNK889SYHST

          await page.goto(knkurl187, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a187num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a187num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a187num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a187num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a187num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK889SYHST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a187num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK889SYHST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a187num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK889SYHST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a187num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK889SYHST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a187num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK889SYHST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a187num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK889SYHST Done...'))


          // MDSHKNK889TABABT

          await page.goto(knkurl188, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a188num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a188num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a188num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a188num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a188num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK889TABABT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a188num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK889TABABT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a188num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK889TABABT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a188num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK889TABABT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a188num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK889TABABT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a188num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK889TABABT Done...'))


          // MDSHKNK045BRDST

          await page.goto(knkurl189, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a189num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a189num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a189num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a189num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a189num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK045BRDST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a189num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK045BRDST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a189num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK045BRDST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a189num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK045BRDST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a189num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK045BRDST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a189num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK045BRDST Done...'))


          // MDSHKNK045HRDST

          await page.goto(knkurl190, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a190num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a190num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a190num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a190num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a190num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK045HRDST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a190num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK045HRDST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a190num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK045HRDST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a190num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK045HRDST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a190num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK045HRDST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a190num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK045HRDST Done...'))


          // MDSHKNK045LCVRTST

          await page.goto(knkurl191, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a191num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a191num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a191num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a191num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a191num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK045LCVRTST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a191num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK045LCVRTST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a191num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK045LCVRTST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a191num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK045LCVRTST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a191num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK045LCVRTST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a191num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK045LCVRTST Done...'))


          // MDSHKNK045YSLST

          await page.goto(knkurl192, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a192num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a192num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a192num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a192num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a192num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK045YSLST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a192num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK045YSLST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a192num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK045YSLST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a192num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK045YSLST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a192num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK045YSLST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a192num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK045YSLST Done...'))


          // MDSHKNK111v1BYZCLTBT

          await page.goto(knkurl193, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a193num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a193num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a193num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a193num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a193num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK111v1BYZCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a193num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1BYZCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a193num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1BYZCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a193num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1BYZCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a193num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1BYZCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a193num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK111v1BYZCLTBT Done...'))


          // MDSHKNK111v1SYHCLTBT

          await page.goto(knkurl194, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a194num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a194num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a194num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a194num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a194num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK111v1SYHCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a194num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1SYHCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a194num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1SYHCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a194num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1SYHCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a194num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1SYHCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a194num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK111v1SYHCLTBT Done...'))


          // MDSHKNK111v1SYHCLTST

          await page.goto(knkurl195, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a195num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a195num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a195num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a195num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a195num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK111v1SYHCLTST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a195num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1SYHCLTST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a195num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1SYHCLTST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a195num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1SYHCLTST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a195num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1SYHCLTST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a195num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK111v1SYHCLTST Done...'))


          // MDSHKNK111v1TABACLTBT

          await page.goto(knkurl196, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a196num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a196num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a196num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a196num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a196num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK111v1TABACLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a196num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1TABACLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a196num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1TABACLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a196num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1TABACLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a196num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1TABACLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a196num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK111v1TABACLTBT Done...'))


          // MDSHKNK111v1VZNCLTBT

          await page.goto(knkurl197, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a197num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a197num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a197num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a197num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a197num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK111v1VZNCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a197num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1VZNCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a197num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1VZNCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a197num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1VZNCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a197num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1VZNCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a197num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK111v1VZNCLTBT Done...'))

          // MDSHKNK111v1VZNSUETBT

          await page.goto(knkurl198, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a198num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a198num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a198num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a198num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a198num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK111v1VZNSUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a198num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1VZNSUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a198num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1VZNSUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a198num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1VZNSUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a198num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK111v1VZNSUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a198num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK111v1VZNSUETBT Done...'))

          // MDSHKNK043BYZSYHCLTBT

          await page.goto(knkurl199, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a199num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a199num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a199num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a199num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a199num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK043BYZSYHCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a199num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK043BYZSYHCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a199num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK043BYZSYHCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a199num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK043BYZSYHCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a199num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK043BYZSYHCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a199num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK043BYZSYHCLTBT Done...'))

          // MDSHKNK044KHVCLTKT

          await page.goto(knkurl200, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a200num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a200num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a200num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a200num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a200num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK044KHVCLTKT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a200num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044KHVCLTKT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a200num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044KHVCLTKT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a200num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044KHVCLTKT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a200num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK044KHVCLTKT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a200num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK044KHVCLTKT Done...'))


          // MDSHKNK065BYZCLTBT

          await page.goto(knkurl201, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a201num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a201num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a201num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a201num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a201num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK065BYZCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a201num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065BYZCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a201num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065BYZCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a201num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065BYZCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a201num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065BYZCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a201num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK065BYZCLTBT Done...'))



          // MDSHKNK065BYZSUETBT

          await page.goto(knkurl202, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a202num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a202num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a202num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a202num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a202num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK065BYZSUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a202num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065BYZSUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a202num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065BYZSUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a202num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065BYZSUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a202num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065BYZSUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a202num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK065BYZSUETBT Done...'))


          // MDSHKNK065GRİCLTBT

          await page.goto(knkurl203, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a203num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a203num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a203num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a203num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a203num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK065GRİCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a203num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065GRİCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a203num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065GRİCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a203num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065GRİCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a203num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065GRİCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a203num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK065GRİCLTBT Done...'))


          // MDSHKNK065HKKCLTBT

          await page.goto(knkurl204, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a204num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a204num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a204num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a204num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a204num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK065HKKCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a204num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065HKKCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a204num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065HKKCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a204num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065HKKCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a204num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065HKKCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a204num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK065HKKCLTBT Done...'))


          // MDSHKNK065SYHCLTBT

          await page.goto(knkurl205, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a205num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a205num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a205num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a205num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a205num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK065SYHCLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a205num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065SYHCLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a205num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065SYHCLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a205num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065SYHCLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a205num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065SYHCLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a205num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK065HKKCLTBT Done...'))


          // MDSHKNK065SYHCLTST

          await page.goto(knkurl206, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a206num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a206num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a206num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a206num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a206num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK065SYHCLTST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a206num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065SYHCLTST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a206num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065SYHCLTST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a206num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065SYHCLTST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a206num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065SYHCLTST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a206num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK065SYHCLTST Done...'))


          // MDSHKNK065SYHSUETBT

          await page.goto(knkurl207, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a207num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a207num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a207num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a207num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a207num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK065SYHSUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a207num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065SYHSUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a207num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065SYHSUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a207num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065SYHSUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a207num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065SYHSUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a207num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK065SYHSUETBT Done...'))


          // MDSHKNK065SYHSUETST

          await page.goto(knkurl208, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a208num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a208num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a208num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a208num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a208num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK065SYHSUETST40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a208num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065SYHSUETST41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a208num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065SYHSUETST42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a208num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065SYHSUETST43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a208num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065SYHSUETST44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a208num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK065SYHSUETST Done...'))


          // MDSHKNK065TABACLTBT

          await page.goto(knkurl209, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a209num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a209num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a209num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a209num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a209num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK065TABACLTBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a209num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065TABACLTBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a209num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065TABACLTBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a209num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065TABACLTBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a209num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065TABACLTBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a209num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK065TABACLTBT Done...'))


          // MDSHKNK065TASSUETBT

          await page.goto(knkurl210, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a210num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a210num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a210num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a210num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a210num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK065TASSUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a210num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065TASSUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a210num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065TASSUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a210num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065TASSUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a210num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065TASSUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a210num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK065TASSUETBT Done...'))


          // MDSHKNK065VZNSUETBT

          await page.goto(knkurl211, {
            waitUntil: 'networkidle0'
          })
          await page.waitForSelector("#app > div.container.page-content > div.product-detail > div.row.no-margin > div.product-info.col-md-7 > div.product-detail-tab-container.row > div.product-stock-list.col-md-5")

          const a211num40 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a211num41 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a211num42 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(3) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a211num43 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(4) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          const a211num44 = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.product-stock-list.col-md-5 > table > tbody > tr:nth-child(5) > td:nth-child(2)')).map(x => x.textContent.replace('Adet', '').trim())
          })

          data = loadNotes()

          data.push({
            "Barkod": 'MDSHKNK065VZNSUETBT40',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a211num40[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065VZNSUETBT41',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a211num41[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065VZNSUETBT42',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a211num42[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065VZNSUETBT43',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a211num43[0]),
          })

          data.push({
            "Barkod": 'MDSHKNK065VZNSUETBT44',
            "Piyasa Satış Fiyatı (KDV Dahil)": "",
            "Trendyol'da  Satılacak Fiyat (KDV Dahil)": "",
            "Ürün Stok Adedi": Number(a211num44[0]),
          })
          await saveNotes(data)

          await console.log(chalk.bgBlue.bold('MDSHKNK065VZNSUETBT Done...'))



          await browser.close()

        })();
      } catch (err) {
        console.log(chalk.bgRed.bold(err))
      }
    })();

    await (async function () {
      await console.log(chalk.bgRed.bold('Finished...'))

    });
  })()
  // Final Brackets

}


module.exports = stokKnack01