import puppeteer from 'puppeteer'

const createPDF = async () => {
  console.log('Creating pdf ...')

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:4173/cv/', {
    waitUntil: 'networkidle2'
  })
  await page.setViewport({ width: 1680, height: 1050 })
  await page.pdf({
    path: 'dist/cewald-cv.pdf',
    format: 'A4',
    printBackground: true
  })

  await browser.close()
  console.log('Done')
}

createPDF()
