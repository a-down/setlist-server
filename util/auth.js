const authenticate = (req, res, next) => {
  // the req object would have whatever info is needed to authenticate
  const isAuthenticated = true;
  
  if (isAuthenticated) {
    next()
  } else {
    res.status(400).json({status: 'not authorized'})
  }
}

module.exports = authenticate