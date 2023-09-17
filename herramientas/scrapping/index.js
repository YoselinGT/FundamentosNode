const puppeteer = require('puppeteer');

console.log("entramos");
(async() => {
    console.log("Lanzamos navegador")

    const browser = await puppeteer.launch({headless: 'new'});

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js')

    var titulo1 = await page.evaluate(()=>{
        const h1 = document.querySelector('h1');
        console.log(h1.innerText);
        return h1.innerText;
    })
    //imprimimos
    console.log(titulo1);

    console.log("Cerramos navegador")
    //browser.close();
    console.log("Navegador cerrado")
})();