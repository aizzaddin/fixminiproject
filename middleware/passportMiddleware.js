const passport = require('passport')
const {
  Strategy,
  ExtractJwt
} = require('passport-jwt')
const {
  Users
} = require('../models')

const cookieExtractor = (req) => {
  const token = req.cookies['jwt'];
  return token
};

passport.use(new Strategy({
  jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
  secretOrKey: process.env.JWT_SECRET,
}, async (payload, done) => {
  Users.findByPk(payload.id)
    .then(user => done(null, user))
    .catch(err => done(err, false))
}))

module.exports = passport