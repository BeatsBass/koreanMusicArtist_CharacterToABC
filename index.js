const browser = await puppeteer.launch();

const page = await browser.newPage();
await page.setRequestInterception(true);
page.on('request', (req) => {
    if (req.resourceType() == 'stylesheet' || req.resourceType() == 'font' || req.resourceType() == 'image') {
        req.abort();
    }
    else {
        req.continue();
    }
});
const data = ["에피톤 프로젝트",
    "오병길",
    "오하영 (에이핑크)",
    "옥상달빛",
    "우은미",
    "유주 (여자친구)",
    "유지",
    "윤미래",
    "이로",
    "이문세",
    "이인",
    "이해리",
    "일레인",
    "임희빈",
    "장희원",
    "전상근",
    "정미애",
    "정연수",
    "차여울",
    "프롬",
    "하현우 (국카스텐)",
    "허각"]

for (let query of data) {
    await page.goto(`https://k2nblog.com/?s=${query}`)
    const h = await page.evaluate(() => {
        const data = document.querySelector('.entry-header.has-text-align-center .entry-title.heading-size-1 a')
        if (data === null) return "0"
        return data.innerText
    });
    console.log(h);
}

await browser.close();
