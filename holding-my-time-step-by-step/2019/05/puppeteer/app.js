const puppeteer = require('puppeteer');
(async() => {
  const search_text = '漫威';
  const size = 15; // 每页搜索结果数
  let start = 0; // 起始page
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  const crawlMovies = async () => {
    await page.goto(`https://movie.douban.com/subject_search?search_text=${encodeURIComponent(search_text)}&start=${start * size}`, {waitUntil: 'domcontentloaded'})
    console.log(`crawling page ${start + 1}...`);
    // page.evaluate 里的 currentStart 参数需要传进去，不能直接使用外部参数
    let result = await page.evaluate((currentStart) => {
      // 获取该页所有电影标题
      let list = Array.from(document.querySelectorAll('.detail')).map((item) => {
        if (item.querySelector('.title a')) {
          return item.querySelector('.title a').innerHTML;
        }
        return '暂无标题'
      });
      // 判断是否是最后一页，作为递归退出的条件
      let maxStart = Math.max.apply(null, Array.from(document.querySelectorAll('.paginator a')).map((item) => {
        let startNum = 0;
        try {
          startNum = item.getAttribute('href').match(/\d+$/)[0];
        } catch (e) {
        }
        return startNum;
      }))
      return {
        list: list,
        isEnd: currentStart > maxStart
      }
    }, start * size);
    if (result.isEnd) {
      return result.list;
    }
    start += 1;
    return result.list.concat((await crawlMovies()))
  }

  page.on('console', consoleObj => console.log(consoleObj.text()));

  const movieList = await crawlMovies()
  console.log(JSON.stringify(movieList, null, 2))
})()