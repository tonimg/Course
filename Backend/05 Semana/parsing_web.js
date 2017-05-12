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

Promise.all(promisesUrls)
  .then(function (results) {
    var dataPages = results.map(body => {
      let $ = cheerio.load(body)
      var scripts = []
      var title = $('title').text()
      $('script').each(function (index, elem) {
        scripts.push($(elem).attr('src'))
      })
      return { title, scripts }
    })
    console.log('ALL the results are ready for you!!')
    const numberScripts = dataPages.map(oData =>
      `${oData.title} loads ${oData.scripts.length} scripts`
    )
    console.log(numberScripts)
  })
