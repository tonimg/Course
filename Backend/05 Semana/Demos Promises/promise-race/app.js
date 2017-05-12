const requestPromise = require('request-promise')
const cheerio = require('cheerio')

const urls = [
  'https://joseangelbarrera.github.io/leagueOfComics/#/',
  'https://lfernandezcall.github.io/movie_world/#/',
  'https://tonimg.github.io/GasStationApp/#/',
  'https://picapoll.github.io/fly_to_barcelona/#/',
  'https://marioterron.github.io/eat-out/#/'
]

const promisesUrls = urls.map(url => requestPromise(url))

Promise.race(promisesUrls)
  .then(function (body) {
    let $ = cheerio.load(body)
    let scripts = []
    let title = $('title').text()
    $('script').each(function (index, elem) {
      scripts.push($(elem).attr('src'))
    })
    let msg = `${title} loads ${scripts.length} scripts`
    msg += '\n🏅 Fastest Site to answer the request'
    console.log(msg)
  })
