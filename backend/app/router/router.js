const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');

module.exports = function (app) {
  const controller = require('../controller/controller.js');

  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    
    next();
  });


  app.post('/api/auth/signin', controller.signin);


  app.post('api/auth/signup', [authJwt.verifyToken, verifySignUp.checkDuplicateEmail], controller.signup);

  


}
