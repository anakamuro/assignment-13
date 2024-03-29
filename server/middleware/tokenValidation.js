const jwt = require('jsonwebtoken')
const { restart } = require('nodemon')

module.exports.validateToken = (req, res, next) => {
  let response = {}

  try {
    if (!req.headers.authorization) {
      throw new Error('Token is missing from header')
    }

    const userToken = req.headers.authorization.split('Bearer')[1].trim()
    const decodedToken = jwt.verify(
      userToken,
      process.env.REACT_APP_SECRET_KEY || 'default-secret-key'
    )
    return next()
  } catch (error) {
    console.error('Error in tokenValidation.js', error)
    response.status = 401
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.verifyRefreshToken = ( refreshToken )  =>{
return new Promise((resolve, reject) => {
  jwt.verify(refreshToken, process.env.REACT_APP_JWT_SECRET, (err, payload) => {
    if(err) return reject(console.log('Bad request'))
    const userId = payload.aud
    userId;

    resolve(refreshToken)
  })
})
}
