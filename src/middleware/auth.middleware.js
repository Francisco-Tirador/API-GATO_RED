const JwtStrategy = require("passport-jwt").Strategy,
ExtractJwt = require("passport-jwt").ExtractJwt;

const Users = require("../modelos/user.model");
const { getUserbyID} = require("../Users/users.controllers");
const { secretWord } = require("../utils/variablesEntorno");

module.exports = (passport) => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: secretWord, 
  };
  passport.use(
    new JwtStrategy(opts, async (decoded, done) => {
      try {
        const response = await getUserbyID(decoded.id);
        if (!response)return done(null, false);
       
        console.log("decoded jwt", decoded);
        return done(null, decoded);
      } catch (error) {
        done(error.message);
      }
    })
  );
};