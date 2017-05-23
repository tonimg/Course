function filters(req,res,next) {

  const { show, hide, limit=20, page } = req.query
  const projection = {}

  if (show) {
    const fieldsToShow = show.split(',')
    fieldsToShow.forEach( field => projection[field] = 1 )
  }

  if (hide) {
    const fieldsToShow = hide.split(',')
    fieldsToShow.forEach( field => projection[field] = 0 )
  }

  req.projection = projection
  req.limit = +limit
  req.skip = (page-1) * limit

  next()

}

module.exports = filters
