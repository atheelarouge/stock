const program = require('commander')
const stok = require('../stock/apps.js')
const stokBoa = require('../stock/stok_boa')
const expExl = require('../stock/export')
const delJson = require('../deletejson.js')
const upload_stok = require('../stock/upload_stok')
const oto_stock = require('../stock/oto_stok')
const delExl = require('../deletexlsx.js')
const exitPro = require('../stock/exit.js')
const stokWagoon = require('../stock/wagoon_stok/wagoon')
const stok_Knack = require('../stock/knack_stok/knack_stock')
const instaPost = require('../insta_post/insta_post')
const mida_insta = require('../stock/mida_insta')
const brave = require('../brave/brave')
const site = require('../stock/site_link/site')
const oto_kadin = require('../stock/kadin_stok/oto_kadin')
const boa_stok = require('../stock/boa_stok/boa_stok')
const co_stok = require('../stock/co_stok/co_stok')
const oto_erb = require ('../stock/erb_stok/oto_erb')
const oto_fiyat = require('../fiyat/oto_fiyat.js')
const erb_expExl = require('../stock/erb_stok/erb_export.js')
const rnn_reklam = require('../reklam/rnn_reklam.js')
const rnn_write = require('../reklam/rnn_write.js')
const oto_reklam = require('../reklam/oto_reklam.js')

program
  .command('oto_reklam')
  .description('Oto CPC')
  .action(oto_reklam)

program
  .command('rnn_write')
  .description('Write CPC')
  .action(rnn_write)


program
  .command('rnn_reklam')
  .description('Rnn reklam')
  .action(rnn_reklam)

program
  .command('boa')
  .description('Boa Stok Sayımını yapar.')
  .action(stokBoa);

program
  .command('stok')
  .description('Stoku excelle çıkarır.')
  .action(expExl)

program
  .command('deljson')
  .description('Json verisini siler')
  .action(delJson)

program
  .command('delexc')
  .description('Excel verisini siler')
  .action(delExl)

program
  .command('oto_stok')
  .description('Oto Stok')
  .action(oto_stock)

program
  .command('upload_stok')
  .description('upload')
  .action(upload_stok)

program
  .command('exit')
  .description('exit program')
  .action(exitPro)

program
  .command('wagoon')
  .description('wagoon stok')
  .action(stokWagoon)

program
  .command('knack')
  .description('test_knack')
  .action(stok_Knack)

program
  .command('insta_post')
  .description('post instagram')
  .action(instaPost)

program
  .command('mida_insta')
  .description('mida post')
  .action(mida_insta)

program
  .command('brave')
  .description('Brave Refresher')
  .action(brave)

program
  .command('site')
  .description('Site Update')
  .action(site)

program
  .command('oto_kadin')
  .description('Kadın Stok')
  .action(oto_kadin)

program
  .command('boa_stok')
  .description('Boa Stok')
  .action(boa_stok)

program
  .command('co_stok')
  .description('Co Stok')
  .action(co_stok)

  program
  .command('oto_erb')
  .description('Erbilden Stok')
  .action(oto_erb)

program
  .command('oto_fiyat')
  .description('Fiyat düzenler')
  .action(oto_fiyat)

program
  .command('exl_erb')
  .description('Erbilden Excel Çıkarır')
  .action(erb_expExl)


program.parse(process.argv)