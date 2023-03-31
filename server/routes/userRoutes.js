const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const tokenValidation = require('../middleware/tokenValidation')
const userService = require('../services/userService')


router.post('/signup', userController.createUser) 

router.post('/login', userController.loginUser)

// PRIVATE ENDPOINT

router.post('/all', tokenValidation.validateToken,userController.getUsers)


router.post(
  '/profile',
  tokenValidation.validateToken,
  userController.getUserProfile
)

router.put(
  '/profile',
  tokenValidation.validateToken,
  userController.updateUserProfile
)

router.post('/refresh-token', async (req, res) => {
  try {
    const {refreshToken, username} = req.body;
    if(!refreshToken){
      res.status(500).send(`Bad Request`)

    }
    const user = await userService.getUsers
    if(user){
      const userId  = await tokenValidation.verifyRefreshToken(refreshToken)
  
      const accessToken = jwt.sign({
id: userId
      },
      process.env.REACT_APP_JWT_SECRET,
      {
expiresIn : '1m',
      }
      )

      const refToken = jwt.sign(
        {
          id: userId
                },
                process.env.REACT_APP_JWT_SECRET,
                {
          expiresIn : '1y',
          audience: userId.toString()
                }
      )

      res.status(200)
      .send({accessToken, refreshToken: refToken})

    }
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

module.exports = router
