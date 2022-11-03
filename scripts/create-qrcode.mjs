import QRCode from 'qrcode-svg'

const qrcode = new QRCode({
  content: 'https://cewald.github.io/cv/',
  padding: 0,
  color: '#262626',
  ecl: 'L',
  join: true,
  container: 'svg-viewbox'
})

qrcode.save('src/assets/qrcode.svg', function (error) {
  if (error) throw error
  console.log('Done!')
})
