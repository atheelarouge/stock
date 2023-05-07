const PORT = 8000;
const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express');
const chalk = require('chalk')

const app = express()

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('./data.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

  } catch {
    return []
  }
}

const saveNotes = (num) => {
  const dataJSON = JSON.stringify(num)
  fs.writeFileSync('./data.json', dataJSON)
   
}

const url1 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-beyaz-kalin-taban-casual-erkek-ayakkabi';
const url2 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-spor-gri-renk-keten-yuksek-taban-casual-erkek-ayakkabi';
const url3 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-spor-keten-sari-beyaz-yuksek-taban-casual-erkek-ayakkabi';
const url4 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-spor-keten-kirmizi-beyaz-yuksek-taban-casual-erkek-ayakkabi';
const url5 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-spor-rugan-lacivert-beyaz-yuksek-taban-casual-erkek-ayakkabi';
const url6 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-siyah-beyaz-yuksek-taban-casual-erkek-ayakkabi'
const url7 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-siyah-rugan-yuksek-taban-casual-erkek-ayakkabi'
const url8 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-spor-suet-siyah-beyaz-yuksek-taban-casual-erkek-ayakkabi'
const url9 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-siyah-beyaz-taban-rugan-yuksek-taban-casual-erkek-ayakkabi'
const url10 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-siyah-taban-rugan-yuksek-taban-casual-erkek-ayakkabi'
const url11 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-siyah-siyah-taban-rugan-yuksek-taban-casual-erkek-ayakkabi'
const url12 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-siyah-yuksek-siyah-taban-casual-erkek-ayakkabi'
const url13 = 'https://www.boa.com.tr/ba0003-bagcikli-suet-klasik-siyah-yuksek-taban-casual-erkek-ayakkabi'
const url14 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-taba-beyaz-kalin-taban-casual-erkek-ayakkabi'
const url15 = 'https://www.boa.com.tr/ba0037-bagcikli-corcik-kahverengi-klasik-erkek-ayakkabisi'
const url16 = 'https://www.boa.com.tr/ba0037-bagcikli-corcik-taba-klasik-erkek-ayakkabisi'
const url17 = 'https://www.boa.com.tr/ba0037-bagcikli-corcik-mavi-klasik-erkek-ayakkabisi'
const url18 = 'https://www.boa.com.tr/ba0037-bagcikli-corcik-siyah-klasik-spor-erkek-ayakkabi'
const url19 = 'https://www.boa.com.tr/ba0037-bagcikli-corcik-siyah-klasik-erkek-ayakkabisi'
const url20 = 'https://www.boa.com.tr/ba0037-bagcikli-corcik-taba-siyah-klasik-spor-erkek-ayakkabi'
const url21 = 'https://www.boa.com.tr/ba0177-bagcikli-corcik-kahverengi-klasik-erkek-ayakkabisi'
const url22 = 'https://www.boa.com.tr/ba0177-bagcikli-corcik-mavi-klasik-erkek-ayakkabisi'
const url23 = 'https://www.boa.com.tr/ba0177-bagcikli-corcik-siyah-klasik-erkek-ayakkabisi'
const url24 = 'https://www.boa.com.tr/ba0177-bagcikli-corcik-taba-klasik-erkek-ayakkabisi'
const url25 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-lacivert-yuksek-taban-casual-erkek-ayakkabi'
const url26 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-bordo-suet-klasik-puskullu-corcik-erkek-ayakkabi'
const url27 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-lacivert-beyaz-klasik-puskullu-corcik-erkek-ayakkabi'
const url28 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-siyah-beyaz-klasik-puskullu-corcik-erkek-ayakkabi'
const url29 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-klasik-kemerli-puskullu-corcik-erkek-ayakkabi'
const url30 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-siyah-beyaz-taban-rugan-klasik-puskullu-corcik-erkek-ayakkabi'
const url31 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-klasik-rugan-kemerli-puskullu-corcik-erkek-ayakkabi'
const url32 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-klasik-puskullu-corcik-erkek-ayakkabi'
const url33 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-siyah-rugan-klasik-puskullu-corcik-erkek-ayakkabisi'
const url34 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-siyah-rugan-klasik-puskullu-corcik-erkek-ayakkabi'
const url35 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-mat-siyah-klasik-puskullu-corcik-erkek-ayakkabi'
const url36 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-klasik-rugan-kemerli-puskullu-corcik-erkek-ayakkabi'
const url37 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-siyah-klasik-suet-puskullu-corcik-erkek-ayakkabisi'
const url38 = 'https://www.boa.com.tr/ba0005-bagciksiz-yuksek-taban-taba-beyaz-klasik-puskullu-corcik-erkek-ayakkabi'
const url39 = 'https://www.boa.com.tr/index.php?route=product/product&product_id=3191'
const url40 = 'https://www.boa.com.tr/ba0202-bagciksiz-rahat-kalin-taban-siyah-beyaz-erkek-ayakkabi'
const url41 = 'https://www.boa.com.tr/ba0027-no-limits-siyah-beyaz-bagcikli-casual-erkek-spor-ayakkabi'
const url42 = 'https://www.boa.com.tr/ba0027-no-limits-siyah-bagcikli-casual-erkek-spor-ayakkabi'
const url43 = 'https://www.boa.com.tr/ba0031-sneakers-rahat-taban-siyah-beyaz-casual-erkek-ayakkabi'
const url44 = 'https://www.boa.com.tr/ba0031-sneakers-siyah-sari-beyaz-taban-casual-erkek-ayakkabi'
const url45 = 'https://www.boa.com.tr/ba0031-sneakers-beyaz-kirmizi-yuksek-taban-casual-erkek-ayakkabi'
const url46 = 'https://www.boa.com.tr/ba0031-sneakers-siyah-kirmizi-beyaz-taban-casual-erkek-ayakkabi'
const url47 = 'https://www.boa.com.tr/ba0031-sneakers-beyaz-yesil-kalin-taban-casual-erkek-ayakkabi'
const url48 = 'https://www.boa.com.tr/ba0031-sneakers-siyah-yesil-beyaz-taban-casual-erkek-ayakkabi'
const url49 = 'https://www.boa.com.tr/ba0094-no-limits-kalin-taban-bagcikli-beyaz-sari-serit-casual-erkek-spor-yarim-bilek-bot'
const url50 = 'https://www.boa.com.tr/ba0094-no-limits-kalin-taban-bagcikli-siyah-beyaz-serit-casual-erkek-spor-yarim-bilek-bot'
const url51 = 'https://www.boa.com.tr/ba0094-no-limits-bagcikli-taba-siyah-yuksek-taban-beyaz-serit-casual-erkek-spor-yarim-bilek-bot'
const url52 = 'https://www.boa.com.tr/erkek-zr-x700-tarz-beyaz-renk-spor-ayakkabi-'
const url53 = 'https://www.boa.com.tr/erkek-zr-x700-tarz-sari-renk-spor-ayakkabi-'
const url54 = 'https://www.boa.com.tr/erkek-zr-x700-tarz-siyah-renk-spor-ayakkabi-'
const url55 = 'https://www.boa.com.tr/erkek-zr-x700-tarz-siyah-taban-spor-ayakkabi-'
const url56 = 'https://www.boa.com.tr/erkek-zr-x700-tarz-siyah-kirmizi-renk-spor-ayakkabi-'
const url57 = 'https://www.boa.com.tr/ba0111-lastikli-rahat-taban-beyaz-sneakers-erkek-spor-ayakkabi'
const url58 = 'https://www.boa.com.tr/ba0111-renkli-lastikli-rahat-beyaz-taban-sneakers-erkek-spor-ayakkabi'
const url59 = 'https://www.boa.com.tr/ba0111-renkli-lastikli-rahat-siyah-taban-sneakers-erkek-spor-ayakkabi'
const url60 = 'https://www.boa.com.tr/ba0111-gri-rakamli-lastikli-rahat-beyaz-taban-sneakers-erkek-spor-ayakkabi'
const url61 = 'https://www.boa.com.tr/ba0111-gri-rakamli-lastikli-rahat-siyah-taban-sneakers-erkek-spor-ayakkabi'
const url62 = 'https://www.boa.com.tr/ba0111-lastikli-rahat-taban-siyah-beyaz-sneakers-erkek-spor-ayakkabi'
const url63 = 'https://www.boa.com.tr/ba0111-lastikli-rahat-taban-siyah-sneakers-erkek-spor-ayakkabi'
const url64 = 'https://www.boa.com.tr/ba0130-ici-disi-hakiki-deri-siyah-puskullu-corcik-klasik-erkek-ayakkabi'
const url65 = 'https://www.boa.com.tr/ba0131-boa-sneakers-keten-beyaz-siyah-rahat-boost-erkek-ayakkabi-'
const url66 = 'https://www.boa.com.tr/ba0131-boa-sneakers-keten-pudra-rahat-boost-erkek-ayakkabi-'
const url67 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-bebe-mavi-cirtli-kalin-taban-erkek-ayakkabi'
const url68 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-beyaz-cirtli-kalin-taban-erkek-ayakkabi'
const url69 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-beyaz-sari-cirtli-kalin-taban-erkek-ayakkabisi'
const url70 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-beyaz-kirmizi-cirtli-kalin-taban-erkek-ayakkabisi'
const url71 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-beyaz-siyah-cirtli-kalin-taban-erkek-ayakkabisi'
const url72 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-sari-cirtli-kalin-taban-erkek-ayakkabi'
const url73 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-kirmizi-cirtli-kalin-taban-erkek-ayakkabi'
const url74 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-siyah-boyali-cirtli-kalin-taban-erkek-ayakkabi'
const url75 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-siyah-beyaz-cirtli-kalin-taban-erkek-ayakkabisi'
const url76 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-siyah-beyaz-cirtli-kalin-taban-erkek-ayakkabi'
const url77 = 'https://www.boa.com.tr/ba0136-boa-reflektorlu-siyah-cirtli-kalin-taban-erkek-ayakkabi'
const url78 = 'https://www.boa.com.tr/ba0138-boa-yuksek-taban-beyaz-siyah-bagcikli-erkek-ayakkabi'
const url79 = 'https://www.boa.com.tr/ba0138-boa-yuksek-taban-siyah-beyaz-bagcikli-erkek-ayakkabi'
const url80 = 'https://www.boa.com.tr/ba0138-boa-yuksek-taban-beyaz-kirmizi-siyah-bagcikli-erkek-ayakkabi'
const url81 = 'https://www.boa.com.tr/ba0138-boa-yuksek-taban-siyah-sax-mavibagcikli-erkek-ayakkabi'
const url82 = 'https://www.boa.com.tr/ba0138-boa-yuksek-taban-siyah-taba-bagcikli-erkek-ayakkabi'
const url83 = 'https://www.boa.com.tr/ba0164-ici-disi-hakiki-deri-kahverengi-puskullu-loefer-klasik-erkek-ayakkabi'
const url84 = 'https://www.boa.com.tr/ba0164-ici-disi-hakiki-deri-siyah-puskullu-loefer-klasik-erkek-ayakkabi'
const url85 = 'https://www.boa.com.tr/ba0164-ici-disi-hakiki-deri-taba-puskullu-loefer-klasik-erkek-ayakkabi'
const url86 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-beyaz-spor-ayakkabi'
const url87 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-beyaz-spor-ayakkabi'
const url88 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-beyaz-siyah-spor-ayakkabi'
const url89 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-siyah-haki-spor-ayakkabi'
const url90 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-siyah-beyaz-taban-spor-ayakkabi'
const url91 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-siyah-beyaz-siyah-taban-spor-ayakkabi'
const url92 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-siyah-kirmizi-spor-ayakkabi'
const url93 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-siyah-spor-ayakkabi'
const url94 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-siyah-taba-spor-ayakkabi'
const url95 = 'https://www.boa.com.tr/ba0160-bantli-erkek-yuksek-taban-taba-spor-ayakkabi'
const url96 = 'https://www.boa.com.tr/ba0161-bagcikli-erkek-yuksek-taban-beyaz-spor-ayakkabi'
const url97 = 'https://www.boa.com.tr/ba0161-bagcikli-erkek-yuksek-taban-krem-spor-ayakkabi'
const url98 = 'https://www.boa.com.tr/ba0161-bagcikli-erkek-yuksek-taban-taba-spor-ayakkabi'
const url99 = 'https://www.boa.com.tr/ba0161-bagcikli-erkek-yuksek-taban-sari-spor-ayakkabi'
const url100 = 'https://www.boa.com.tr/ba0161-bagcikli-erkek-yuksek-taban-kirmizi-spor-ayakkabi'
const url101 = 'https://www.boa.com.tr/ba0161-bagcikli-erkek-yuksek-taban-siyah-beyaz-spor-ayakkabi'
const url102 = 'https://www.boa.com.tr/ba0161-bagcikli-erkek-yuksek-taban-siyah-spor-ayakkabi'
const url103 = 'https://www.boa.com.tr/ba0162-bagcikli-erkek-model-dikisli-yuksek-taban-beyaz-spor-ayakkabi'
const url104 = 'https://www.boa.com.tr/ba0162-bagcikli-erkek-model-dikisli-yuksek-taban-krem-spor-ayakkabi'
const url105 = 'https://www.boa.com.tr/ba0162-bagcikli-erkek-model-dikisli-yuksek-taban-taba-spor-ayakkabi'
const url106 = 'https://www.boa.com.tr/ba0162-bagcikli-erkek-model-dikisli-yuksek-taban-sari-spor-ayakkabi'
const url107 = 'https://www.boa.com.tr/ba0162-bagcikli-erkek-model-dikisli-yuksek-taban-siyah-spor-ayakkabi'
const url108 = 'https://www.boa.com.tr/ba0163-bagcikli-erkek-yuksek-taban-beyaz-spor-ayakkabi'
const url109 = 'https://www.boa.com.tr/ba0163-bagcikli-erkek-yuksek-taban-beyaz-siyah-spor-ayakkabi'
const url110 = 'https://www.boa.com.tr/ba0163-bagcikli-erkek-yuksek-taban-siyah-kirmizi-spor-ayakkabi'
const url111 = 'https://www.boa.com.tr/ba0163-bagcikli-erkek-yuksek-taban-siyah-beyaz-spor-ayakkabi'
const url112 = 'https://www.boa.com.tr/ba0163-bagcikli-erkek-yuksek-taban-siyah-haki-spor-ayakkabi'
const url113 = 'https://www.boa.com.tr/ba0163-bagcikli-erkek-yuksek-taban-siyah-spor-ayakkabi'
const url114 = 'https://www.boa.com.tr/ba0163-bagcikli-erkek-yuksek-taban-siyah-taba-spor-ayakkabi'
const url115 = 'https://www.boa.com.tr/ba0163-bagcikli-erkek-yuksek-taban-taba-spor-ayakkabi'
const url116 = 'https://www.boa.com.tr/ba0167-kalin-taban-tarz-sneakers-gri-erkek-spor-ayakkabisi'
const url117 = 'https://www.boa.com.tr/ba0167-kalin-taban-tarz-sneakers-kirmizi-erkek-spor-ayakkabisi'
const url118 = 'https://www.boa.com.tr/ba0167-kalin-taban-tarz-sneakers-mavi-erkek-spor-ayakkabisi'
const url119 = 'https://www.boa.com.tr/ba0167-kalin-taban-tarz-sneakers-siyah-kirmizi-erkek-spor-ayakkabisi'
const url120 = 'https://www.boa.com.tr/ba0167-kalin-taban-tarz-sneakers-siyah-erkek-spor-ayakkabisi'
const url121 = 'https://www.boa.com.tr/ba0167-kalin-taban-tarz-sneakers-vizon-erkek-spor-ayakkabisi'
const url122 = 'https://www.boa.com.tr/ba0169-bagcikli-beyaz-mavi-yuksek-taban-erkek-ayakkabisi'
const url123 = 'https://www.boa.com.tr/ba0169-bagcikli-beyaz-sari-yuksek-taban-erkek-ayakkabisi'
const url124 = 'https://www.boa.com.tr/ba0169-bagcikli-beyaz-siyah-parcali-yuksek-taban-erkek-ayakkabisi'
const url125 = 'https://www.boa.com.tr/ba0169-bagcikli-siyah-kirmizi-yuksek-taban-erkek-ayakkabisi'
const url126 = 'https://www.boa.com.tr/ba0169-bagcikli-siyah-sari-yuksek-taban-erkek-ayakkabisi'
const url127 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-beyaz-gri-yuksek-taban-erkek-ayakkabisi'
const url128 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-beyaz-kirmizi-yuksek-taban-erkek-ayakkabisi'
const url129 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-beyaz-mavi-parcali-yuksek-taban-erkek-ayakkabisi'
const url130 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-beyaz-sari-parcali-yuksek-taban-erkek-ayakkabisi'
const url131 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-beyaz-sari-yuksek-taban-erkek-ayakkabisi'
const url132 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-beyaz-siyah-yuksek-taban-erkek-ayakkabisi'
const url133 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-siyah-kirmizi-yuksek-taban-erkek-ayakkabisi'
const url134 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-siyah-beyaz-yuksek-taban-erkek-ayakkabisi'
const url135 = 'https://www.boa.com.tr/ba0170-bagcikli-fermuarli-siyah-sari-yuksek-taban-erkek-ayakkabisi'
const url136 = 'https://www.boa.com.tr/ba0173-kalin-taban-lastikli-tarz-sneakers-gri-erkek-spor-ayakkabisi'
const url137 = 'https://www.boa.com.tr/ba0173-kalin-taban-lastikli-tarz-sneakers-haki-erkek-spor-ayakkabisi'
const url138 = 'https://www.boa.com.tr/ba0173-kalin-taban-lastikli-tarz-sneakers-lacivert-erkek-spor-ayakkabisi'
const url139 = 'https://www.boa.com.tr/ba0173-kalin-taban-lastikli-tarz-sneakers-siyah-erkek-spor-ayakkabisi'
const url140 = 'https://www.boa.com.tr/ba0173-kalin-taban-lastikli-tarz-sneakers-siyah-beyaz-taban-erkek-spor-ayakkabisi'
const url141 = 'https://www.boa.com.tr/ba0175-yuksek-taban-casual-bagcikli-beyaz-sneakers-erkek-ayakkabi'
const url142 = 'https://www.boa.com.tr/ba0175-yuksek-taban-casual-bagcikli-gri-sneakers-erkek-ayakkabi'
const url143 = 'https://www.boa.com.tr/ba0175-yuksek-taban-casual-bagcikli-haki-sneakers-erkek-ayakkabi'
const url144 = 'https://www.boa.com.tr/ba0175-yuksek-taban-casual-bagcikli-lacivert-sneakers-erkek-ayakkabi'
const url145 = 'https://www.boa.com.tr/ba0175-yuksek-taban-casual-bagcikli-siyah-sneakers-erkek-ayakkabi'
const url146 = 'https://www.boa.com.tr/ba0179-3-bantli-beyaz-kirmizi-yuksek-taban-erkek-ayakkabisi'
const url147 = 'https://www.boa.com.tr/ba0179-3-bantli-beyaz-siyah-yuksek-taban-erkek-ayakkabisi'
const url148 = 'https://www.boa.com.tr/ba0179-3-bantli-siyah-yuksek-taban-erkek-ayakkabisi'
const url149 = 'https://www.boa.com.tr/ba0179-3-bantli-siyah-kirmizi-yuksek-taban-erkek-ayakkabisi'
const url150 = 'https://www.boa.com.tr/ba0179-3-bantli-siyah-sari-yuksek-taban-erkek-ayakkabisi'
const url151 = 'https://www.boa.com.tr/ba0179-3-bantli-siyah-siyah-yuksek-taban-erkek-ayakkabisi'
const url152 = 'https://www.boa.com.tr/ba0180-bagcikli-kapitone-desenli-beyaz-yuksek-taban-erkek-ayakkabisi'
const url153 = 'https://www.boa.com.tr/ba0180-bagcikli-kapitone-desenli-beyaz-kirmizi-yuksek-taban-erkek-ayakkabisi'
const url154 = 'https://www.boa.com.tr/ba0180-bagcikli-kapitone-desenli-siyah-kirmizi-yuksek-taban-erkek-ayakkabisi'
const url155 = 'https://www.boa.com.tr/ba0180-bagcikli-kapitone-desenli-siyah-yuksek-taban-erkek-ayakkabisi'
const url156 = 'https://www.boa.com.tr/ba0202-bagciksiz-rahat-kalin-taban-antrasit-erkek-casual-ayakkabi'
const url157 = 'https://www.boa.com.tr/ba0202-bagcikz-rahat-kalin-taban-beyaz-erkek-spor-ayakkabi'
const url158 = 'https://www.boa.com.tr/ba0202-bagciksiz-rahat-kalin-taban-gri-erkek-ayakkabi'
const url159 = 'https://www.boa.com.tr/ba0202-bagciksiz-rahat-kalin-taban-kirmizi-erkek-spor-ayakkabi'
const url160 = 'https://www.boa.com.tr/ba0601-bagcikli-rahat-yuksek-taban-beyaz-casual-erkek-spor-ayakkabi'
const url161 = 'https://www.boa.com.tr/ba0601-bagcikli-rahat-kalin-taban-camel-sari-beyaz-erkek-spor-ayakkabi'
const url162 = 'https://www.boa.com.tr/ba0601-bagcikli-rahat-kalin-taban-camel-sari-siyah-erkek-spor-ayakkabi'
const url163 = 'https://www.boa.com.tr/ba0601-bagcikli-rahat-yuksek-taban-siyah-beyaz-casual-erkek-spor-ayakkabi'
const url164 = 'https://www.boa.com.tr/ba0601-bagcikli-rahat-yuksek-taban-siyah-casual-erkek-spor-ayakkabi'
const url165 = 'https://www.boa.com.tr/ba0606-bagcikli-rahat-yuksek-taban-beyaz-casual-erkek-spor-ayakkabi'
const url166 = 'https://www.boa.com.tr/ba0606-bagcikli-rahat-yuksek-taban-haki-casual-erkek-spor-ayakkabi'
const url167 = 'https://www.boa.com.tr/ba0606-bagcikli-rahat-yuksek-taban-siyah-casual-erkek-spor-ayakkabi'
const url168 = 'https://www.boa.com.tr/ba0606-bagcikli-rahat-yuksek-taban-siyah-kircilli-casual-erkek-spor-ayakkabi'
const url169 = 'https://www.boa.com.tr/ba0606-bagcikli-rahat-yuksek-taban-siyah-taban-casual-erkek-spor-ayakkabi'
const url170 = 'https://www.boa.com.tr/ba0009-boa-klasik-corcik-puskullu-desenli-lacivert-erkek-ayakkabi'
const url171 = 'https://www.boa.com.tr/ba0009-boa-klasik-corcik-lacivert-erkek-ayakkabi'
const url172 = 'https://www.boa.com.tr/ba0009-boa-klasik-corcik-suet-puskullu-lacivert-erkek-ayakkabi'
const url173 = 'https://www.boa.com.tr/ba0009-boa-klasik-corcik-suet-lacivert-erkek-ayakkabi'
const url174 = 'https://www.boa.com.tr/ba0009-puskullu-corcik-lacivert-klasik-erkek-ayakkabisi'
const url175 = 'https://www.boa.com.tr/ba0009-boa-klasik-corcik-cilt-puskullu-lacivert-erkek-ayakkabi'
const url176 = 'https://www.boa.com.tr/ba0009-corcik-siyah-cilt-klasik-erkek-ayakkabisi'
const url177 = 'https://www.boa.com.tr/ba0009-puskullu-corcik-siyah-klasik-erkek-ayakkabisi'
const url178 = 'https://www.boa.com.tr/ba0009-puskullu-corcik-siyah-cilt-klasik-erkek-ayakkabisi'
const url179 = 'https://www.boa.com.tr/ba0009-corcik-siyah-klasik-erkek-ayakkabisi'
const url180 = 'https://www.boa.com.tr/ba0009-rugan-corcik-siyah-klasik-erkek-ayakkabisi'
const url181 = 'https://www.boa.com.tr/ba0009-rugan-puskullu-corcik-siyah-klasik-erkek-ayakkabisi'
const url182 = 'https://www.boa.com.tr/ba0009-suet-corcik-siyah-klasik-erkek-ayakkabisi'
const url183 = 'https://www.boa.com.tr/ba0009-suet-puskullu-corcik-siyah-klasik-erkek-ayakkabisi'
const url184 = 'https://www.boa.com.tr/ba0009-puskullu-corcik-taba-klasik-erkek-ayakkabisi'
const url185 = 'https://www.boa.com.tr/ba0009-boa-klasik-corcik-puskullu-desenli-taba-erkek-ayakkabi'
const url186 = 'https://www.boa.com.tr/ba0009-boa-klasik-corcik-taba-erkek-ayakkabi'
const url187 = 'https://www.boa.com.tr/ba0045-gizli-bagcikli-bordo-suet-siyah-taban-casual-erkek-spor-klasik-yarim-bilek-bot'
const url188 = 'https://www.boa.com.tr/ba0045-gizli-bagcikli-haki-yesil-suet-siyah-taban-casual-erkek-spor-klasik-yarim-bilek-bot'
const url189 = 'https://www.boa.com.tr/ba0045-gizli-bagcik-kahverengi-casual-erkek-spor-klasik-yarim-bilek-bot'
const url190 = 'https://www.boa.com.tr/ba0045-gizli-bagcikli-suet-laci-erkek-spor-klasik-yarim-bilek-bot'
const url191 = 'https://www.boa.com.tr/ba0045-gizli-bagcik-siyah-casual-erkek-spor-klasik-yarim-bilek-bot'
const url192 = 'https://www.boa.com.tr/ba0045-gizli-bagcikli-suet-siyah-erkek-spor-klasik-yarim-bilek-bot'
const url193 = 'https://www.boa.com.tr/ba0045-gizli-bagcik-taba-kahve-casual-erkek-spor-klasik-yarim-bilek-bot'
const url194 = 'https://www.boa.com.tr/ba0045-gizli-bagcikli-taba-suet-siyah-taban-casual-erkek-spor-klasik-yarim-bilek-bot'
const url195 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-bordo-erkek-yarim-bilek-bot'
const url196 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-suet-haki-yesil-erkek-yarim-bilek-bot'
const url197 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-cilt-kahve-erkek-yarim-bilek-bot'
const url198 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-kahverengi-erkek-yarim-bilek-bot'
const url199 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-lacivert-erkek-yarim-bilek-bot'
const url200 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-set-laci-erkek-yarim-bilek-bot'
const url201 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-cilt-siyah-erkek-yarim-bilek-bot'
const url202 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-suet-siyah-erkek-yarim-bilek-bot'
const url203 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-cilt-taba-erkek-yarim-bilek-bot'
const url204 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-suet-taba-eskitme-erkek-yarim-bilek-bot'
const url205 = 'https://www.boa.com.tr/ba0058-chelsea-bagciksiz-lastikli-eskitme-vizon-suet-siyah-taban-erkek-yarim-bilek-bot'
const url206 = 'https://www.boa.com.tr/ba0080-kartal-fermuarli-tokali-siyah-erkek-klasik-spor-klasik-yarim-bilek-bot'
const url207 = 'https://www.boa.com.tr/index.php?route=product/product&product_id=3510'
const url208 = 'https://www.boa.com.tr/index.php?route=product/product&product_id=3514'
const url209 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-beyaz-spor-bot'
const url210 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-beyaz-siyah-spor-bot'
const url211 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-graffiti-spor-bot'
const url212 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-haki-spor-bot'
const url213 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-krem-spor-bot'
const url214 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-kirmizi-spor-bot'
const url215 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-siyah-spor-bot'
const url216 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-siyah-tabanli-spor-bot'
const url217 = 'https://www.boa.com.tr/ba0142-bantli-erkek-yuksek-taban-kahverengi-spor-bot'
const url218 = 'https://www.boa.com.tr/ba0151-ici-kurklu-bagcikli-beyaz-erkek-tarz-spor-bot'
const url219 = 'https://www.boa.com.tr/ba0151-ici-kurklu-bagcikli-erkek-tarz-spor-bot'
const url220 = 'https://www.boa.com.tr/ba0151-ici-kurklu-bagcikli-erkek-tarz-siyah-spor-bot'
const url221 = 'https://www.boa.com.tr/ba0151-ici-kurklu-bagcikli-vizon-erkek-tarz-spor-bot'
const url222 = 'https://www.boa.com.tr/ba0151-ici-kurklu-bagcikli-taba-erkek-tarz-spor-bot'
const url223 = 'https://www.boa.com.tr/ba0155-bagcikli-erkek-yuksek-taban-beyaz-spor-bot'
const url224 = 'https://www.boa.com.tr/ba0155-bagcikli-erkek-yuksek-taban-beyaz-siyah-taban-spor-bot'
const url225 = 'https://www.boa.com.tr/ba0155-bagcikli-erkek-yuksek-taban-haki-spor-bot'
const url226 = 'https://www.boa.com.tr/ba0155-bagcikli-erkek-yuksek-taban-kirmizi-spor-bot'
const url227 = 'https://www.boa.com.tr/index.php?route=product/product&product_id=2734'
const url228 = 'https://www.boa.com.tr/ba0155-bagcikli-erkek-yuksek-taban-siyah-beyaz-siyah-taban-spor-bot'
const url229 = 'https://www.boa.com.tr/ba0155-bagcikli-erkek-yuksek-taban-siyah-beyaz-spor-bot'
const url230 = 'https://www.boa.com.tr/ba0155-bagcikli-erkek-yuksek-taban-siyah-spor-bot'
const url231 = 'https://www.boa.com.tr/ba0155-bagcikli-erkek-yuksek-taban-taba-spor-bot'
const url232 = 'https://www.boa.com.tr/ba0159-bagcikli-beyaz-kapitone-erkek-yuksek-taban-spor-bot'
const url233 = 'https://www.boa.com.tr/ba0159-bagcikli-beyaz-kapitone-siyah-taban-erkek-yuksek-taban-spor-bot'
const url234 = 'https://www.boa.com.tr/ba0159-bagcikli-haki-kapitone-erkek-yuksek-taban-spor-bot'
const url235 = 'https://www.boa.com.tr/ba0159-bagcikli-kirmizi-kapitone-erkek-yuksek-taban-spor-bot-'
const url236 = 'https://www.boa.com.tr/ba0159-bagcikli-siyah-beyaz-kapitone-erkek-yuksek-taban-spor-bot'
const url237 = 'https://www.boa.com.tr/ba0159-bagcikli-siyah-kapitone-erkek-yuksek-taban-spor-bot'
const url238 = 'https://www.boa.com.tr/ba0159-bagcikli-taba-kapitone-erkek-yuksek-taban-spor-bot'
const url239 = 'https://www.boa.com.tr/ba0182-ici-disi-hakiki-deri-siyah-erkek-spor-yarim-bilek-bot'
const url240 = 'https://www.boa.com.tr/index.php?route=product/product&product_id=3475'
const url241 = 'https://www.boa.com.tr/ba0183-ici-disi-hakiki-deri-taba-erkek-postal-bot'
const url242 = 'https://www.boa.com.tr/ba0184-ici-disi-hakiki-deri-kahverengi-erkek-fermuarli-yarim-bot'
const url243 = 'https://www.boa.com.tr/ba0184-ici-disi-hakiki-deri-siyah-erkek-fermuarli-yarim-bot'
const url244 = 'https://www.boa.com.tr/ba0184-ici-disi-hakiki-deri-taba-erkek-fermuarli-yarim-bot'
const url245 = 'https://www.boa.com.tr/ba0185-ici-disi-hakiki-deri-kahve-erkek-postal-bot'
const url246 = 'https://www.boa.com.tr/ba0185-ici-disi-hakiki-deri-siyah-erkek-fermuarli-yarim-bot'
const url247 = 'https://www.boa.com.tr/ba0185-ici-disi-hakiki-deri-taba-erkek-postal-bot'
const url248 = 'https://www.boa.com.tr/ba0186-fermuarli-tokali-kahverengi-erkek-klasik-spor-klasik-yarim-bilek-bot'
const url249 = 'https://www.boa.com.tr/ba0186-fermuarli-tokali-siyah-erkek-klasik-spor-klasik-yarim-bilek-bot'
const url250 = 'https://www.boa.com.tr/ba0186-fermuarli-tokali-taba-erkek-klasik-spor-klasik-yarim-bilek-bot'
const url251 = 'https://www.boa.com.tr/ba0187-ici-disi-hakiki-deri-siyah-erkek-fermuarli-yarim-bot'
const url252 = 'https://www.boa.com.tr/ba0188-ici-disi-hakiki-deri-siyah-erkek-fermuarli-yarim-bot'
const url253 = 'https://www.boa.com.tr/ba0600-bagcikli-haki-kamuflaj-boksor-unisex-spor-postal-bot'
const url254 = 'https://www.boa.com.tr/ba0600-bagcikli-beyaz-yuksek-taban-boksor-unisex-spor-postal-bot'
const url255 = 'https://www.boa.com.tr/ba0600-bagcikli-camel-sari-boksor-unisex-spor-postal-bot'
const url256 = 'https://www.boa.com.tr/ba0600-bagcikli-siyah-kamuflaj-boksor-unisex-spor-postal-bot'
const url257 = 'https://www.boa.com.tr/index.php?route=product/product&product_id=3513'
const url258 = 'https://www.boa.com.tr/ba0600-bagcikli-siyah-yuksek-taban-boksor-unisex-spor-postal-bot'
const url259 = 'https://www.boa.com.tr/ba0600-bagcikli-siyah-nubuk-yuksek-taban-boksor-unisex-spor-postal-bot'
const url260 = 'https://www.boa.com.tr/ba0001-fly-rahat-yuksek-taban-beyaz-erkek-spor-ayakkabisi'
const url261 = 'https://www.boa.com.tr/ba0001-fly-rahat-yuksek-taban-gri-erkek-spor-ayakkabi'
const url262 = 'https://www.boa.com.tr/ba0001-fly-rahat-yuksek-taban-kirmizi-erkek-spor-ayakkabi'
const url263 = 'https://www.boa.com.tr/ba0001-fly-rahat-yuksek-taban-lacivert-erkek-spor-ayakkabi'
const url264 = 'https://www.boa.com.tr/ba0001-fly-rahat-yuksek-taban-lacivert-erkek-spor-ayakkabi'
const url265 = 'https://www.boa.com.tr/ba0001-fly-rahat-yuksek-taban-siyah-erkek-spor-ayakkabi'
const url266 = 'https://www.boa.com.tr/ba0026-3-bant-beyaz-kalin-taban-casual-erkek-ayakkabi'
const url267 = 'https://www.boa.com.tr/ba0026-3-bant-gri-yuksek-beyaz-taban-casual-erkek-ayakkabi'
const url268 = 'https://www.boa.com.tr/ba0026-3-bant-haki-beyaz-kalin-taban-casual-erkek-ayakkabi'
const url269 = 'https://www.boa.com.tr/ba0026-3-bant-haki-yesil-kalin-taban-casual-erkek-ayakkabi'
const url270 = 'https://www.boa.com.tr/ba0026-3-bant-haki-siyah-kalin-taban-casual-erkek-ayakkabi'
const url271 = 'https://www.boa.com.tr/ba0026-3-bant-kirmizi-beyaz-kalin-taban-casual-erkek-ayakkabi'
const url272 = 'https://www.boa.com.tr/ba0026-3-bant-kirmizi-kalin-taban-casual-erkek-ayakkabi'
const url273 = 'https://www.boa.com.tr/ba0026-3-bant-lacivert-beyaz-kalin-taban-casual-erkek-ayakkabi'
const url274 = 'https://www.boa.com.tr/ba0026-3-bant-sari-beyaz-yuksek-taban-casual-erkek-ayakkabi'
const url275 = 'https://www.boa.com.tr/ba0026-3-bant-sari-kalin-taban-casual-erkek-ayakkabi'
const url276 = 'https://www.boa.com.tr/ba0026-3-bant-siyah-beyaz-kalin-taban-casual-erkek-ayakkabi'
const url277 = 'https://www.boa.com.tr/ba0026-3-bant-siyah-yuksek-taban-casual-erkek-ayakkabi'
const url278 = 'https://www.boa.com.tr/ba0026-3-bant-taba-beyaz-kalin-taban-casual-erkek-ayakkabi'
const url279 = 'https://www.boa.com.tr/ba0026-3-bant-taba-siyah-kalin-taban-casual-erkek-ayakkabi'
const url280 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-gri-yuksek-taban-yarim-bilek-bot'
const url281 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-beyaz-yuksek-taban-yarim-bilek-bot'
const url282 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-haki-kalin-beyaz-taban-yarim-bilek-bot'
const url283 = 'https://www.boa.com.tr/ba0202-bagciksiz-rahat-kalin-taban-bordo-erkek-casual-ayakkabi'
const url284 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-sari-yuksek-taban-yarim-bilek-bot'
const url285 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-kirmizi-yuksek-taban-yarim-bilek-bot'
const url286 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-lacivert-yuksek-taban-yarim-bilek-bot'
const url287 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-siyah-yuksek-taban-yarim-bilek-bot'
const url288 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-siyah-yuksek-taban-yarim-bilek-bot-3'
const url289 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-taba-kalin-beyaz-taban-yarim-bilek-bot'
const url290 = 'https://www.boa.com.tr/ba0032-boa-bagcikli-snekaers-taba-kalin-siyah-taban-yarim-bilek-bot'
const url291 = 'https://www.boa.com.tr/ba0181-boa-bagcikli-snekaers-siyah-yuksek-taban-yarim-bilek-bot'
const url292 = 'https://www.boa.com.tr/ba0181-boa-bagcikli-snekaers-taba-siyah-yuksek-taban-yarim-bilek-bot'
const url293 = 'https://www.boa.com.tr/ba0053-bagcikli-fermuarli-yesil-kamuflaj-erkek-spor-postal-bot'
const url294 = 'https://www.boa.com.tr/ba0053-bagcikli-fermuarli-cavus-siyah-erkek-spor-postal-bot'
const url295 = 'https://www.boa.com.tr/ba0053-bagcikli-fermuarli-rutbeli-erkek-spor-postal-bot'
const url296 = 'https://www.boa.com.tr/ba0003-bagcikli-klasik-spor-keten-gri-beyaz-yuksek-taban-casual-erkek-ayakkabi'
const url297 = 'https://www.boa.com.tr/ba0098-boa-bagcikli-rahat-yuksek-taban-beyaz-sneakers-spor-ayakkabi'
const url298 = 'https://www.boa.com.tr/ba0139-ici-disi-hakiki-deri-beyaz-sneakers-erkek-ayakkabi'
const url299 = 'https://www.boa.com.tr/ba0139-ici-disi-hakiki-deri-beyaz-gri-sneakers-erkek-ayakkabi'
const url300 = 'https://www.boa.com.tr/ba0139-ici-disi-hakiki-deri-beyaz-sari-sneakers-erkek-ayakkabi'
const url301 = 'https://www.boa.com.tr/ba0139-ici-disi-hakiki-deri-beyaz-lacivsneakers-erkek-ayakkabi'
const url302 = 'https://www.boa.com.tr/ba0152-boa-kalin-yuksek-taban-sut-beyaz-kemerli-erkek-spor-ayakkabi'
const url303 = 'https://www.boa.com.tr/ba0152-boa-kalin-yuksek-taban-beyaz-kemerli-erkek-spor-ayakkabi'
const url304 = 'https://www.boa.com.tr/ba0152-boa-kalin-yuksek-taban-kirmizi-kemerli-erkek-spor-ayakkabi'
const url305 = 'https://www.boa.com.tr/ba0152-boa-kalin-yuksek-taban-siyah-kemerli-erkek-spor-ayakkabi'
const url306 = 'https://www.boa.com.tr/ba0152-boa-kalin-yuksek-taban-taba-kemerli-erkek-spor-ayakkabi'
const url307 = 'https://www.boa.com.tr/ba0301-bagcikli-kalin-taban-beyaz-casual-erkek-ayakkabi'
const url308 = 'https://www.boa.com.tr/ba0301-bagcikli-kalin-taban-siyah-casual-erkek-ayakkabi'
const url309 = 'https://www.boa.com.tr/ba0062-puskullu-corcik-bordo-klasik-rugan-erkek-kadin-unisex-ayakkabi'
const url310 = 'https://www.boa.com.tr/ba0062-puskullu-corcik-suet-bordo-klasik-erkek-kadin-unisex-ayakkabisi'
const url311 = 'https://www.boa.com.tr/ba0062-puskullu-corcik-lacivert-rugan-klasik-erkek-kadin-unisex-ayakkabi'
const url312 = 'https://www.boa.com.tr/ba0062-puskullu-corcik-suet-lacivert-klasik-erkek-kadin-unisex-ayakkabisi'
const url313 = 'https://www.boa.com.tr/ba0062-puskullu-mat-siyah-corcik-klasik-ayakkabi'
const url314 = 'https://www.boa.com.tr/ba0062-puskullu-corcik-siyah-rugan-klasik-erkek-kadin-unisex-ayakkabi'
const url315 = 'https://www.boa.com.tr/ba0062-puskullu-corcik-suet-siyah-klasik-erkek-kadin-unisex-ayakkabisi'
const url316 = 'https://www.boa.com.tr/ba0602-phantom-yuksek-taban-tarz-sneakers-beyaz-erkek-spor-ayakkabisi'
const url317 = 'https://www.boa.com.tr/ba0602-phantom-yuksek-taban-tarz-sneakers-fume-beyaz-erkek-spor-ayakkabi'
const url318 = 'https://www.boa.com.tr/ba0602-phantom-yuksek-taban-tarz-sneakers-gri-erkek-spor-ayakkabi'
const url319 = 'https://www.boa.com.tr/ba0602-phantom-yuksek-taban-tarz-sneakers-gri-beyaz-erkek-spor-ayakkabisi'
const url320 = 'https://www.boa.com.tr/ba0602-phantom-kalin-taban-tarz-sneakers-sari-erkek-spor-ayakkabisi'
const url321 = 'https://www.boa.com.tr/ba0602-phantom-yuksek-taban-tarz-sneakers-kirmizi-erkek-spor-ayakkabisi'
const url322 = 'https://www.boa.com.tr/ba0602-phantom-yuksek-taban-tarz-sneakers-mint-yesil-erkek-spor-ayakkabisi'
const url323 = 'https://www.boa.com.tr/ba0602-phantom-yuksek-taban-tarz-sneakers-siyah-beyaz-erkek-spor-ayakkabisi'
const url324 = 'https://www.boa.com.tr/ba0602-phantom-kalin-taban-tarz-sneakers-siyah-erkek-spor-ayakkabisi'
const url325 = 'https://www.boa.com.tr/ba0191-ici-disi-hakiki-deri-kahvrengi-erkek-klasik-fermuarli-yarim-bilek-bot'
const url326 = 'https://www.boa.com.tr/ba0191-ici-disi-hakiki-deri-siyah-erkek-klasik-fermuarli-yarim-bilek-bot'
const url327 = 'https://www.boa.com.tr/ba0191-ici-disi-hakiki-deri-siyah-erkek-klasik-bagcikli-fermuarli-yarim-bilek-bot'
const url328 = 'https://www.boa.com.tr/ba0191-ici-disi-hakiki-deri-taba-erkek-klasik-fermuarli-yarim-bilek-bot'
const url329 = 'https://www.boa.com.tr/ba0048-bagcikli-yesil-suet-casual-erkek-spor-klasik-yarim-bilek-bot'
const url330 = 'https://www.boa.com.tr/ba0048-bagcikli-kahve-cilt-casual-erkek-spor-klasik-yarim-bilek-bot'
const url331 = 'https://www.boa.com.tr/ba0048-bagcikli-kahve-suet-casual-erkek-spor-klasik-yarim-bilek-bot'
const url332 = 'https://www.boa.com.tr/ba0048-bagcikli-lacivert-casual-erkek-spor-klasik-yarim-bilek-bot'
const url333 = 'https://www.boa.com.tr/ba0048-bagcikli-lacivert-suet-casual-erkek-spor-klasik-yarim-bilek-bot'
const url334 = 'https://www.boa.com.tr/ba0048-bagcikli-siyah-casual-erkek-spor-klasik-yarim-bilek-bot'
const url335 = 'https://www.boa.com.tr/ba0048-bagcikli-siyah-suet-casual-erkek-spor-klasik-yarim-bilek-bot'
const url336 = 'https://www.boa.com.tr/ba0048-bagcikli-taba-casual-erkek-spor-klasik-yarim-bilek-bot'
const url337 = 'https://www.boa.com.tr/ba0048-bagcikli-taba-suet-casual-erkek-spor-klasik-yarim-bilek-bot'
const url338 = 'https://www.boa.com.tr/ba0054-bagcikli-fermuarli-siyah-erkek-spor-postal-bot'
const url339 = 'https://www.boa.com.tr/ba0054-bagcikli-fermuarli-kahverengi-erkek-spor-postal-bot'
const url340 = 'https://www.boa.com.tr/ba0150-bagciksiz-bantli-erkek-yuksek-taban-bej-spor-bot'
const url341 = 'https://www.boa.com.tr/ba0150-bagciksiz-bantli-erkek-yuksek-taban-beyaz-spor-bot'
const url342 = 'https://www.boa.com.tr/ba0150-bagciksiz-bantli-erkek-yuksek-taban-beyaz-siyah-taban-spor-bot'
const url343 = 'https://www.boa.com.tr/ba0150-bagciksiz-bantli-erkek-yuksek-taban-kirmizi-spor-bot'
const url344 = 'https://www.boa.com.tr/ba0150-bagciksiz-bantli-erkek-yuksek-taban-siyah-spor-bot'
const url345 = 'https://www.boa.com.tr/ba0150-bagciksiz-bantli-erkek-yuksek-taban-siyah-taban-spor-bot'


async function boaStok() {
  await console.log(chalk.bold.bgGreen('The Process Started...'))
  // MDSH003BYZBT
  await axios(url1).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZBT40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZBT41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZBT42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZBT43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZBT44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSH003GRİKTNBT
  await axios(url2).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003GRİKTNBT40',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003GRİKTNBT41',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003GRİKTNBT42',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003GRİKTNBT43',
        no: title,
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003GRİKTNBT44',
        no: title,
      })
      saveNotes(data)
    })
  })

  // MDSH003HRDKTNBT
  await axios(url3).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003HRDKTNBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003HRDKTNBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003HRDKTNBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003HRDKTNBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003HRDKTNBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003KRMZBTSUET
  await axios(url4).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003KRMZBTSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003KRMZBTSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003KRMZBTSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003KRMZBTSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003KRMZBTSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003LCVRTRGNBT
  await axios(url5).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003LCVRTRGNBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003LCVRTRGNBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003LCVRTRGNBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003LCVRTRGNBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003LCVRTRGNBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003SYHBTCLT
  await axios(url6).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003SYHBTRGN
  await axios(url7).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTRGN40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTRGN41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTRGN42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTRGN43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTRGN44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003SYHBTSUET
  await axios(url8).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHBTSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003SYHRGNDSNBT
  await axios(url9).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003SYHRGNDSNST
  await axios(url10).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNDSNST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003SYHRGNST
  await axios(url11).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHRGNST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003SYHST
  await axios(url12).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003SYHSUETST
  await axios(url13).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHSUETST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHSUETST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHSUETST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHSUETST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003SYHSUETST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003TABABT
  await axios(url14).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003TABABT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003TABABT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003TABABT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003TABABT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003TABABT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH037KHVKT
  await axios(url15).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KHVKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KHVKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KHVKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KHVKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KHVKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH037KOYUTABAKT
  await axios(url16).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KOYUTABAKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KOYUTABAKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KOYUTABAKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KOYUTABAKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037KOYUTABAKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH037LCVRTKT
  await axios(url17).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037LCVRTKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037LCVRTKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037LCVRTKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037LCVRTKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037LCVRTKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH037SYHKHV
  await axios(url18).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHKHV40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHKHV41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHKHV42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHKHV43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHKHV44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH037SYHST
  await axios(url19).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH037TABAST
  await axios(url20).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH037TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH177KHV
  await axios(url21).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177KHV40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177KHV41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177KHV42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177KHV43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177KHV44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH177MAVİ
  await axios(url22).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177MAVİ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177MAVİ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177MAVİ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177MAVİ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177MAVİ44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH177SYH
  await axios(url23).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177SYH40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177SYH41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177SYH42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177SYH43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177SYH44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH177TABA
  await axios(url24).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177TABA40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177TABA41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177TABA42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177TABA43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH177TABA44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB003LCVRTBT
  await axios(url25).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB003LCVRTBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB003LCVRTBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB003LCVRTBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB003LCVRTBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB003LCVRTBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005BRDBT
  await axios(url26).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005BRDBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005BRDBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005BRDBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005BRDBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005BRDBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005LCVRTBT
  await axios(url27).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005LCVRTBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005LCVRTBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005LCVRTBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005LCVRTBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005LCVRTBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005SYHBT
  await axios(url28).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005SYHCLTPUS
  await axios(url29).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHCLTPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHCLTPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHCLTPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHCLTPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHCLTPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005SYHRGNBT
  await axios(url30).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005SYHRGNBTKMR
  await axios(url31).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBTKMR40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBTKMR41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBTKMR42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBTKMR43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNBTKMR44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSB005SYHRGNCLTPUS
  await axios(url32).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNCLTPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNCLTPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNCLTPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNCLTPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNCLTPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005SYHRGNST
  await axios(url33).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005SYHRGNSUETST
  await axios(url34).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNSUETST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNSUETST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNSUETST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNSUETST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHRGNSUETST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005SYHSTCLT
  await axios(url35).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSTCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSTCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSTCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSTCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSTCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005SYHSUETBTPUS
  await axios(url36).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSUETBTPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSUETBTPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSUETBTPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSUETBTPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSUETBTPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005SYHSUETST
  await axios(url37).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSUETST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSUETST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSUETST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSUETST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005SYHSUETST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005TABABT
  await axios(url38).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABABT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABABT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABABT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABABT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABABT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB005TABASUETPUS
  await axios(url39).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABASUETPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABASUETPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABASUETPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABASUETPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB005TABASUETPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0202SYHBT
  await axios(url40).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0202SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0202SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0202SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0202SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0202SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB027SYHBYZBT
  await axios(url41).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB027SYHBYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB027SYHBYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB027SYHBYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB027SYHBYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB027SYHBYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB027SYHST
  await axios(url42).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB027SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB027SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB027SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB027SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB027SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB031BYZSYH
  await axios(url43).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031BYZSYH40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031BYZSYH41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031BYZSYH42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031BYZSYH43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031BYZSYH44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB031HRDSYH
  await axios(url44).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031HRDSYH40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031HRDSYH41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031HRDSYH42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031HRDSYH43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031HRDSYH44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB031KRMZBYZ
  await axios(url45).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZBYZ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZBYZ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZBYZ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZBYZ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZBYZ44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB031KRMZSYH
  await axios(url46).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZSYH40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZSYH41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZSYH42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZSYH43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031KRMZSYH44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB031YSLBYZ
  await axios(url47).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLBYZ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLBYZ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLBYZ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLBYZ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLBYZ44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB031YSLSYH
  await axios(url48).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLSYH40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLSYH41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLSYH42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLSYH43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB031YSLSYH44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB094BYZBT
  await axios(url49).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB094SYHST
  await axios(url50).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB094TABAST
  await axios(url51).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB094TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0X700BYZSYHBT
  await axios(url52).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700BYZSYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700BYZSYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700BYZSYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700BYZSYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700BYZSYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0X700HRDSYHHT
  await axios(url53).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700HRDSYHHT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700HRDSYHHT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700HRDSYHHT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700HRDSYHHT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700HRDSYHHT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0X700SYHBYZBT
  await axios(url54).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0X700SYHBYZST
  await axios(url55).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHBYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0X700SYHKRMZST
  await axios(url56).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHKRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHKRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHKRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHKRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0X700SYHKRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB111BYZBT
  await axios(url57).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB111DSNBT40
  await axios(url58).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB111DSNST
  await axios(url59).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111DSNST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB111RKMBT
  await axios(url60).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB111RKMST
  await axios(url61).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111RKMST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB111SYHBT
  await axios(url62).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB111SYHST
  await axios(url63).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB111SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB130SYHST
  await axios(url64).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB130SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB130SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB130SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB130SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB130SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB131GRİBT
  await axios(url65).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131GRİBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131GRİBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131GRİBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131GRİBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131GRİBT44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131GRİBT45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB131PUDRABT
  await axios(url66).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131PUDRABT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131PUDRABT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131PUDRABT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131PUDRABT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131PUDRABT44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB131PUDRABT45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136BBMAVİBT
  await axios(url67).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BBMAVİBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BBMAVİBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BBMAVİBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BBMAVİBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BBMAVİBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136BYZBYZBT
  await axios(url68).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZBYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZBYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZBYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZBYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZBYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136BYZHRDHT
  await axios(url69).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZHRDHT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZHRDHT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZHRDHT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZHRDHT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZHRDHT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136BYZKRMZKT
  await axios(url70).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZKRMZKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZKRMZKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZKRMZKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZKRMZKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZKRMZKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136BYZSYHST
  await axios(url71).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZSYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZSYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZSYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZSYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136BYZSYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136HRDHRDHT
  await axios(url72).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136HRDHRDHT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136HRDHRDHT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136HRDHRDHT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136HRDHRDHT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136HRDHRDHT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136KRMZKRMZKT
  await axios(url73).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136KRMZKRMZKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136KRMZKRMZKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136KRMZKRMZKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136KRMZKRMZKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136KRMZKRMZKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136SYHBYLST
  await axios(url74).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYLST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYLST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYLST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYLST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYLST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136SYHBYZBT
  await axios(url75).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHBYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136SYHSYHBT
  await axios(url76).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB136SYHSYHST
  await axios(url77).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB136SYHSYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB138BYZSYHBT
  await axios(url78).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB138BYZSYHST
  await axios(url79).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138BYZSYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB138KRMZBYZBT
  await axios(url80).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138KRMZBYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138KRMZBYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138KRMZBYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138KRMZBYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138KRMZBYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB138LCVRTSYHST
  await axios(url81).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138LCVRTSYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138LCVRTSYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138LCVRTSYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138LCVRTSYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138LCVRTSYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB138TABASYHST
  await axios(url82).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138TABASYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138TABASYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138TABASYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138TABASYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB138TABASYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB146KHVPUS
  await axios(url83).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146KHVPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146KHVPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146KHVPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146KHVPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146KHVPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB146SYHPUS
  await axios(url84).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146SYHPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146SYHPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146SYHPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146SYHPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146SYHPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB146TABAPUS
  await axios(url85).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146TABAPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146TABAPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146TABAPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146TABAPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB146TABAPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160BYZBT
  await axios(url86).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160BYZSYHBT
  await axios(url87).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160BYZSYHST
  await axios(url88).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160BYZSYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160HKKST
  await axios(url89).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160HKKST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160HKKST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160HKKST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160HKKST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160HKKST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160SYHBT
  await axios(url90).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160SYHBYZST
  await axios(url91).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHBYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160SYHKRMZST
  await axios(url92).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHKRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHKRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHKRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHKRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHKRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160SYHST
  await axios(url93).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160SYHTABAST
  await axios(url94).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHTABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHTABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHTABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHTABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160SYHTABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB160TABAST
  await axios(url95).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB160TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB161BYZBT
  await axios(url96).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB161BYZST
  await axios(url97).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161BYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB161CMLST
  await axios(url98).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161CMLST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161CMLST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161CMLST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161CMLST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161CMLST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB161HRDST
  await axios(url99).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161HRDST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161HRDST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161HRDST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161HRDST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161HRDST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB161KRMZST
  await axios(url100).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161KRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161KRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161KRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161KRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161KRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB161SYHBT
  await axios(url101).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB161SYHST
  await axios(url102).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB161SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB162BYZBT
  await axios(url103).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB162BYZST
  await axios(url104).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162BYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB162CMLST
  await axios(url105).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162CMLST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162CMLST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162CMLST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162CMLST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162CMLST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB162HRDST
  await axios(url106).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162HRDST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162HRDST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162HRDST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162HRDST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162HRDST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB162SYHST
  await axios(url107).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB162SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB163BYZBT
  await axios(url108).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB163BYZSYHST
  await axios(url109).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZSYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZSYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZSYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZSYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163BYZSYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB163KRMZST
  await axios(url110).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163KRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163KRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163KRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163KRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163KRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB163SYHBYZST
  await axios(url111).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHBYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHBYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHBYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHBYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHBYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB163SYHHKKST
  await axios(url112).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHHKKST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHHKKST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHHKKST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHHKKST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHHKKST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB163SYHST
  await axios(url113).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB163SYHTABAST
  await axios(url114).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHTABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHTABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHTABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHTABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163SYHTABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB163TABAST
  await axios(url115).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB163TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB167GRİGT
  await axios(url116).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167GRİGT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167GRİGT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167GRİGT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167GRİGT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167GRİGT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB167KRMZKT
  await axios(url117).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167KRMZKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167KRMZKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167KRMZKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167KRMZKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167KRMZKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB167MAVİMV
  await axios(url118).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167MAVİMV40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167MAVİMV41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167MAVİMV42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167MAVİMV43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167MAVİMV44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB167SYHKRMZST
  await axios(url119).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHKRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHKRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHKRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHKRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHKRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB167SYHST
  await axios(url120).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB167VZNVT40
  await axios(url121).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167VZNVT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167VZNVT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167VZNVT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167VZNVT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB167VZNVT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB169BYZMV
  await axios(url122).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZMV40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZMV41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZMV42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZMV43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZMV44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB169BYZSAR
  await axios(url123).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSAR40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSAR41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSAR42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSAR43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSAR44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB169BYZSYH
  await axios(url124).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSYH40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSYH41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSYH42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSYH43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169BYZSYH44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB169SYHKRMZ
  await axios(url125).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHKRMZ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHKRMZ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHKRMZ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHKRMZ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHKRMZ44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB169SYHSAR
  await axios(url126).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHSAR40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHSAR41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHSAR42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHSAR43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB169SYHSAR44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170BYZGRİBT
  await axios(url127).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZGRİBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZGRİBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZGRİBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZGRİBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZGRİBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170BYZKRMZKT
  await axios(url128).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZKRMZKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZKRMZKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZKRMZKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZKRMZKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZKRMZKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170BYZMVBT
  await axios(url129).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZMVBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZMVBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZMVBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZMVBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZMVBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170BYZSARIBT
  await axios(url130).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSARIBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSARIBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSARIBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSARIBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSARIBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170BYZSART
  await axios(url131).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSART40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSART41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSART42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSART43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSART44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170BYZSYHBT
  await axios(url132).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170BYZSYHKRMZKT
  await axios(url133).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHKRMZKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHKRMZKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHKRMZKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHKRMZKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170BYZSYHKRMZKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170MDSHB170SYHBYZBT
  await axios(url134).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170MDSHB170SYHBYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170MDSHB170SYHBYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170MDSHB170SYHBYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170MDSHB170SYHBYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170MDSHB170SYHBYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB170SYHSART
  await axios(url135).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170SYHSART40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170SYHSART41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170SYHSART42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170SYHSART43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB170SYHSART44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB173GRİ
  await axios(url136).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173GRİ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173GRİ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173GRİ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173GRİ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173GRİ44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB173HKK
  await axios(url137).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173HKK40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173HKK41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173HKK42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173HKK43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173HKK44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB173LCVRT
  await axios(url138).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173LCVRT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173LCVRT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173LCVRT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173LCVRT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173LCVRT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB173SYH
  await axios(url139).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYH40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYH41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYH42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYH43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYH44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB173SYHBT
  await axios(url140).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB173SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB175BYZ
  await axios(url141).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175BYZ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175BYZ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175BYZ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175BYZ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175BYZ44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB175GRİ
  await axios(url142).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175GRİ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175GRİ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175GRİ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175GRİ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175GRİ44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB175HAKİ
  await axios(url143).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175HAKİ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175HAKİ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175HAKİ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175HAKİ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175HAKİ44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB175LACİVERT
  await axios(url144).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175LACİVERT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175LACİVERT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175LACİVERT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175LACİVERT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175LACİVERT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB175SİYAH
  await axios(url145).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175SİYAH40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175SİYAH41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175SİYAH42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175SİYAH43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB175SİYAH44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB179BYZKRMZKT
  await axios(url146).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZKRMZKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZKRMZKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZKRMZKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZKRMZKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZKRMZKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB179BYZSYHBT
  await axios(url147).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZSYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZSYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZSYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZSYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179BYZSYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB179SYHBT
  await axios(url148).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB179SYHKKRMZKT
  await axios(url149).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHKKRMZKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHKKRMZKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHKKRMZKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHKKRMZKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHKKRMZKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB179SYHSARIHT
  await axios(url150).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHSARIHT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHSARIHT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHSARIHT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHSARIHT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHSARIHT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB179SYHST
  await axios(url151).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB179SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB180BYZBT
  await axios(url152).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB180BYZKRMZBT
  await axios(url153).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZKRMZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZKRMZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZKRMZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZKRMZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180BYZKRMZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB180SYHKRMZST
  await axios(url154).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHKRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHKRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHKRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHKRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHKRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB180SYHST
  await axios(url155).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB180SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB202ANTRBT
  await axios(url156).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202ANTRBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202ANTRBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202ANTRBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202ANTRBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202ANTRBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB202BRDBT
  await axios(url157).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB202GRİBT
  await axios(url158).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202GRİBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202GRİBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202GRİBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202GRİBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202GRİBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB202KRMZBT
  await axios(url159).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202KRMZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202KRMZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202KRMZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202KRMZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202KRMZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB601BYZBT
  await axios(url160).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB601CMLBT
  await axios(url161).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB601CMLST
  await axios(url162).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601CMLST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB601SYHBT
  await axios(url163).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB601SYHST
  await axios(url164).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB601SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB606BYZBT
  await axios(url165).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB606HKKKRCBT
  await axios(url166).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606HKKKRCBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606HKKKRCBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606HKKKRCBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606HKKKRCBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606HKKKRCBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB606SYHBT
  await axios(url167).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB606SYHKRCBT
  await axios(url168).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHKRCBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHKRCBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHKRCBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHKRCBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHKRCBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB606SYHST
  await axios(url169).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB606SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009LCVRCLTCROCKPUSV2
  await axios(url170).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKPUSV240',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKPUSV241',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKPUSV242',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKPUSV243',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKPUSV244',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009LCVRCLTCROCKV2
  await axios(url171).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKV240',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKV241',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKV242',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKV243',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRCLTCROCKV244',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009LCVRSUETPUSV1
  await axios(url172).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETPUSV140',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETPUSV141',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETPUSV142',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETPUSV143',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETPUSV144',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009LCVRSUETV1
  await axios(url173).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETV140',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETV141',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETV142',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETV143',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRSUETV144',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009LCVRTCLTCROCKPUSV1
  await axios(url174).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTCROCKPUSV140',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTCROCKPUSV141',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTCROCKPUSV142',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTCROCKPUSV143',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTCROCKPUSV144',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009LCVRTCLTKMRPUS
  await axios(url175).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTKMRPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTKMRPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTKMRPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTKMRPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009LCVRTCLTKMRPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009SYHCLT
  await axios(url176).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009SYHCLTCROCKPUSV1
  await axios(url177).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTCROCKPUSV140',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTCROCKPUSV141',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTCROCKPUSV142',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTCROCKPUSV143',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTCROCKPUSV144',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009SYHCLTPUS
  await axios(url178).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCLTPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009SYHCROC4
  await axios(url179).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCROC40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCROC41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCROC42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCROC43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHCROC44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009SYHRGN
  await axios(url180).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGN40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGN41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGN42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGN43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGN44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009SYHRGNPUS
  await axios(url181).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGNPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGNPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGNPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGNPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHRGNPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009SYHSUET
  await axios(url182).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009SYHSUETPUS
  await axios(url183).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUETPUS40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUETPUS41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUETPUS42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUETPUS43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009SYHSUETPUS44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009TABACLTCROCKPUSV1
  await axios(url184).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV140',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV141',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV142',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV143',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV144',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009TABACLTCROCKPUSV2
  await axios(url185).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV240',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV241',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV242',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV243',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKPUSV244',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB0009TABACLTCROCKV2
  await axios(url186).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKV240',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKV241',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKV242',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKV243',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB0009TABACLTCROCKV244',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB045BRDSUET
  await axios(url187).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045BRDSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045BRDSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045BRDSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045BRDSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045BRDSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB045HKKYSLSUET
  await axios(url188).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045HKKYSLSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045HKKYSLSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045HKKYSLSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045HKKYSLSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045HKKYSLSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB045KHVCLT
  await axios(url189).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045KHVCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045KHVCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045KHVCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045KHVCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045KHVCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB045LCVRTSUET
  await axios(url190).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045LCVRTSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045LCVRTSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045LCVRTSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045LCVRTSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045LCVRTSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB045SYHCLT
  await axios(url191).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB045SYHSUET
  await axios(url192).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045SYHSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB045TABACLT
  await axios(url193).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABACLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABACLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABACLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABACLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABACLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB045TABASUET
  await axios(url194).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABASUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABASUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABASUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABASUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB045TABASUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058BRDSUET
  await axios(url195).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058BRDSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058BRDSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058BRDSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058BRDSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058BRDSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058HKKYSLSUET
  await axios(url196).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058HKKYSLSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058HKKYSLSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058HKKYSLSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058HKKYSLSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058HKKYSLSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058KHVCLT
  await axios(url197).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058KHVSUET
  await axios(url198).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058KHVSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058LCVRTSUET
  await axios(url199).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058LCVRTSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058LCVRTSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058LCVRTSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058LCVRTSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058LCVRTSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058SETLCVRTSUET
  await axios(url200).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SETLCVRTSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SETLCVRTSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SETLCVRTSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SETLCVRTSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SETLCVRTSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058SYHCLT
  await axios(url201).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058SYHSUET
  await axios(url202).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058SYHSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058TABACLT
  await axios(url203).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABACLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABACLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABACLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABACLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABACLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058TABASUET
  await axios(url204).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABASUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABASUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABASUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABASUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058TABASUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB058VZNSUET
  await axios(url205).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058VZNSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058VZNSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058VZNSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058VZNSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB058VZNSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB080SYHST
  await axios(url206).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB080SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB080SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB080SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB080SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB080SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB087SYHCLTST
  await axios(url207).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHCLTST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHCLTST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHCLTST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHCLTST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHCLTST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB087SYHSUETST
  await axios(url208).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHSUETST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHSUETST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHSUETST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHSUETST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB087SYHSUETST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142BYZBT
  await axios(url209).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142BYZST
  await axios(url210).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142BYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142GRFTYST
  await axios(url211).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142GRFTYST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142GRFTYST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142GRFTYST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142GRFTYST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142GRFTYST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142HKKST
  await axios(url212).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142HKKST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142HKKST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142HKKST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142HKKST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142HKKST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142KRMST
  await axios(url213).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142KRMZST
  await axios(url214).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142KRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142SYHBT
  await axios(url215).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142SYHST
  await axios(url216).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB142TABAST
  await axios(url217).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB142TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB151BYZBT
  await axios(url218).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB151SYHBT
  await axios(url219).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB151SYHST
  await axios(url220).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB151TABABT
  await axios(url221).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABABT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABABT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABABT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABABT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABABT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB151TABAST
  await axios(url222).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB151TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155BYZBT
  await axios(url223).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155BYZST
  await axios(url224).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155BYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155HKKST
  await axios(url225).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155HKKST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155HKKST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155HKKST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155HKKST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155HKKST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155KRMZST
  await axios(url226).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155KRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155KRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155KRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155KRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155KRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155SYHBT
  await axios(url227).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155SYHBYZBT
  await axios(url228).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155SYHBYZST
  await axios(url229).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHBYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155SYHST
  await axios(url230).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB155TABAST
  await axios(url231).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB155TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB159BYZBT
  await axios(url232).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB159BYZST
  await axios(url233).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159BYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB159HKKST
  await axios(url234).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159HKKST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159HKKST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159HKKST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159HKKST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159HKKST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB159KRMZST
  await axios(url235).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159KRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159KRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159KRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159KRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159KRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB159SYHBT
  await axios(url236).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB159SYHST
  await axios(url237).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB159TABAST
  await axios(url238).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB159TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB182SYHCLT
  await axios(url239).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB182SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB182SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB182SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB182SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB182SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB183SYHST
  await axios(url240).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB183TABAST
  await axios(url241).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB183TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB184KHVST
  await axios(url242).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184KHVST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184KHVST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184KHVST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184KHVST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184KHVST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB184SYHST
  await axios(url243).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB184TABAST
  await axios(url244).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB184TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB185KHVCLT
  await axios(url245).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185KHVCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185KHVCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185KHVCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185KHVCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185KHVCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB185SYHCLT
  await axios(url246).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB185TABACLT
  await axios(url247).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185TABACLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185TABACLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185TABACLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185TABACLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB185TABACLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB186KHVST
  await axios(url248).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186KHVST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186KHVST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186KHVST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186KHVST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186KHVST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB186SYHST
  await axios(url249).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB186TABAST
  await axios(url250).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB186TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB187SYHCLTST
  await axios(url251).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB187SYHCLTST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB187SYHCLTST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB187SYHCLTST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB187SYHCLTST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB187SYHCLTST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB188SYHCLTST
  await axios(url252).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB188SYHCLTST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB188SYHCLTST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB188SYHCLTST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB188SYHCLTST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB188SYHCLTST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB600ACKASKİYSLBT
  await axios(url253).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600ACKASKİYSLBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600ACKASKİYSLBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600ACKASKİYSLBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600ACKASKİYSLBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600ACKASKİYSLBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB600BYZBT
  await axios(url254).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB600CMLBT
  await axios(url255).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600CMLBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600CMLBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600CMLBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600CMLBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600CMLBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB600KOYUASKİYSLBT
  await axios(url256).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600KOYUASKİYSLBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600KOYUASKİYSLBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600KOYUASKİYSLBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600KOYUASKİYSLBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600KOYUASKİYSLBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB600LCVRTBT
  await axios(url257).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600LCVRTBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600LCVRTBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600LCVRTBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600LCVRTBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600LCVRTBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB600SYHCLTST
  await axios(url258).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHCLTST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHCLTST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHCLTST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHCLTST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHCLTST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB600SYHNBKST
  await axios(url259).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHNBKST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHNBKST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHNBKST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHNBKST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB600SYHNBKST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0001BYZBT
  await axios(url260).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0001GRİBT
  await axios(url261).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001GRİBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001GRİBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001GRİBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001GRİBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001GRİBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0001KRMZBT
  await axios(url262).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001KRMZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001KRMZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001KRMZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001KRMZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001KRMZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0001LCVRTBT
  await axios(url263).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001LCVRTBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001LCVRTBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001LCVRTBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001LCVRTBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001LCVRTBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0001SXMVBT
  await axios(url264).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SXMVBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SXMVBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SXMVBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SXMVBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SXMVBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0001SYHST
  await axios(url265).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0001SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026BYZBT
  await axios(url266).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026GRİBT
  await axios(url267).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026GRİBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026GRİBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026GRİBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026GRİBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026GRİBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026HKKBT
  await axios(url268).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026HKKHT
  await axios(url269).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKHT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKHT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKHT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKHT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKHT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026HKKST
  await axios(url270).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026HKKST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026KRMZBT
  await axios(url271).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026KRMZKT
  await axios(url272).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZKT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZKT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZKT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZKT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026KRMZKT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026LCVRTBT
  await axios(url273).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026LCVRTBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026LCVRTBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026LCVRTBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026LCVRTBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026LCVRTBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026SARIBT
  await axios(url274).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARIBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARIBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARIBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARIBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARIBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026SARISR
  await axios(url275).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARISR40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARISR41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARISR42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARISR43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SARISR44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026SYHBT
  await axios(url276).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026SYHST
  await axios(url277).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026TABABT
  await axios(url278).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABABT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABABT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABABT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABABT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABABT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB026TABAST
  await axios(url279).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB026TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032ANTBT
  await axios(url280).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032ANTBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032ANTBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032ANTBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032ANTBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032ANTBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032BYZBT
  await axios(url281).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032HKKBT
  await axios(url282).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032HKKST
  await axios(url282).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HKKST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB202BRDBT
  await axios(url283).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BRDBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BRDBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BRDBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BRDBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB202BRDBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032HRDBT
  await axios(url284).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HRDBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HRDBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HRDBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HRDBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032HRDBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032KRMZBT
  await axios(url285).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032KRMZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032KRMZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032KRMZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032KRMZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032KRMZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032LCVRTBT
  await axios(url286).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032LCVRTBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0032LCVRTBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032LCVRTBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032LCVRTBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0032LCVRTBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032SHYBT
  await axios(url287).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032SHYST
  await axios(url288).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032SHYST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032TABABT
  await axios(url289).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABABT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABABT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABABT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABABT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABABT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB032TABAST
  await axios(url290).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB032TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB181SYHCLT
  await axios(url291).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB181TABACLT
  await axios(url292).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181TABACLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181TABACLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181TABACLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181TABACLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB181TABACLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH053ASKRSYHCLT
  await axios(url293).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053ASKRSYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053ASKRSYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053ASKRSYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053ASKRSYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053ASKRSYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH053CVSSYHCLT
  await axios(url294).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053CVSSYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053CVSSYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053CVSSYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053CVSSYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053CVSSYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH053RTBSYHCLT
  await axios(url295).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053RTBSYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053RTBSYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053RTBSYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053RTBSYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH053RTBSYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSH003BYZKTNBT
  await axios(url296).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZKTNBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZKTNBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZKTNBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZKTNBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSH003BYZKTNBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0098BYZBT
  await axios(url297).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0098BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0098BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0098BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0098BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0098BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0139BYZBT
  await axios(url298).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // // MDSHB0139GRİBT
  // await axios(url299).then(response => {
  //   const html = response.data;
  //   const $ = cheerio.load(html)
  //   const data = loadNotes()

  //   $('#bedensecin > a:nth-of-type(1)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139GRİBT40',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(2)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139GRİBT41',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(3)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139GRİBT42',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(4)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139GRİBT43',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(5)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139GRİBT44',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  // })

  // MDSHB0139HRDBT
  await axios(url300).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139HRDBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139HRDBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139HRDBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139HRDBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0139HRDBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // // MDSHB0139SYHBYZBT
  // await axios(url301).then(response => {
  //   const html = response.data;
  //   const $ = cheerio.load(html)
  //   const data = loadNotes()

  //   $('#bedensecin > a:nth-of-type(1)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139SYHBYZBT40',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(2)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139SYHBYZBT41',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(3)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139SYHBYZBT42',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(4)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139SYHBYZBT43',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  //   $('#bedensecin > a:nth-of-type(5)', html).each(function () {
  //     const title = $(this).text().slice(4, 7)
  //     data.push({
  //       barkod: 'MDSHB0139SYHBYZBT44',
  //       no: title
  //     })
  //     saveNotes(data)
  //   })
  // })

  // MDSHB0152BYZBT
  await axios(url302).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0152BYZST
  await axios(url303).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152BYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0152KRMZST
  await axios(url304).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152KRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152KRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152KRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152KRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152KRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0152SYHBT
  await axios(url305).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0152TABAST
  await axios(url306).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152TABAST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152TABAST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152TABAST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152TABAST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0152TABAST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0301BYZBT
  await axios(url307).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB0301SYHBYZST
  await axios(url308).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301SYHBYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301SYHBYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301SYHBYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301SYHBYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB0301SYHBYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB062BRDRGN
  await axios(url309).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDRGN40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDRGN41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDRGN42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(8)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDRGN43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(9)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDRGN44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB062BRDSUET
  await axios(url310).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(8)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(9)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062BRDSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB062LCVRTRGN
  await axios(url311).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTRGN40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTRGN41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTRGN42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(8)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTRGN43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(9)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTRGN44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB062LCVRTSUET
  await axios(url312).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(8)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(9)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062LCVRTSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB062SYHCLT
  await axios(url313).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(8)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(9)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB062SYHRGN
  await axios(url314).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHRGN40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHRGN41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHRGN42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(8)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHRGN43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(9)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHRGN44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB062SYHSUET
  await axios(url315).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(8)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(9)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB062SYHSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602BYZ
  await axios(url316).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602BYZ39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602BYZ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602BYZ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602BYZ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602BYZ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602BYZ44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602BYZ45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602FUME
  await axios(url317).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602FUME39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602FUME40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602FUME41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602FUME42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602FUME43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602FUME44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602FUME45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602Gri
  await axios(url318).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602Gri39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602Gri40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602Gri41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602Gri42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602Gri43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602Gri44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602Gri45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602GriBT
  await axios(url319).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602GriBT39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602GriBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602GriBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602GriBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602GriBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602GriBT44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602GriBT45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602HRD
  await axios(url320).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602HRD39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602HRD40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602HRD41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602HRD42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602HRD43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602HRD44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602HRD45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602KRMZ
  await axios(url321).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602KRMZ39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602KRMZ40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602KRMZ41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602KRMZ42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602KRMZ43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602KRMZ44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602KRMZ45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602MYSL
  await axios(url322).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602MYSL39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602MYSL40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602MYSL41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602MYSL42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602MYSL43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602MYSL44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602MYSL45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602SYHBT
  await axios(url323).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHBT39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHBT44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHBT45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHB602SYHST
  await axios(url324).then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHST39',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(6)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHST44',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(7)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHB602SYHST45',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB191KHVCLT
  await axios(url325).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191KHVCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191KHVCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191KHVCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191KHVCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191KHVCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB191SYHCLT
  await axios(url326).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })
  // MDSHKB191SYHDSNCLT
  await axios(url327).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHDSNCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHDSNCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHDSNCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHDSNCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191SYHDSNCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB191TABACLT
  await axios(url328).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191TABACLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191TABACLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191TABACLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191TABACLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB191TABACLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048HKKSUET
  await axios(url329).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048HKKSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048HKKSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048HKKSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048HKKSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048HKKSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048KHVCLT
  await axios(url330).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048KHVSUET
  await axios(url331).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048KHVSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048LCVRTCLT
  await axios(url332).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048LCVRTSUET
  await axios(url333).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048LCVRTSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048SYHCLT
  await axios(url334).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048SYHSUET
  await axios(url335).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHSUET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHSUET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHSUET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHSUET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048SYHSUET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048TABACLT
  await axios(url336).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABACLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABACLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABACLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABACLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABACLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB048TABASÜET
  await axios(url337).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABASÜET40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABASÜET41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABASÜET42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABASÜET43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB048TABASÜET44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB054SYHCLT
  await axios(url338).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054SYHCLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054SYHCLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054SYHCLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054SYHCLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054SYHCLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB054TABACLT
  await axios(url339).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054TABACLT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054TABACLT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054TABACLT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054TABACLT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB054TABACLT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB150BEJST
  await axios(url340).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BEJST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BEJST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BEJST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BEJST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BEJST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB150BYZBT
  await axios(url341).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB150BYZST
  await axios(url342).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150BYZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB150KRMZST
  await axios(url343).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150KRMZST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150KRMZST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150KRMZST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150KRMZST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150KRMZST44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB150SYHBT
  await axios(url344).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHBT40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHBT41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHBT42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHBT43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHBT44',
        no: title
      })
      saveNotes(data)
    })
  })

  // MDSHKB150SYHST
  await axios(url345).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const data = loadNotes()

    $('#bedensecin > a:nth-of-type(1)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHST40',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(2)').each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHST41',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(3)', html).each(function () {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHST42',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(4)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHST43',
        no: title
      })
      saveNotes(data)
    })
    $('#bedensecin > a:nth-of-type(5)', html).each(function() {
      const title = $(this).text().slice(4, 7)
      data.push({
        barkod: 'MDSHKB150SYHST44',
        no: title
      })
      saveNotes(data)
    })
  })


  await console.log(chalk.bold.bgRed('Finished...'))
  await process.exit();
}

boaStok()

app.listen(PORT, () => console.log(chalk.bgGrey.bold(`server running on PORT ${PORT}`)))

module.exports = boaStok