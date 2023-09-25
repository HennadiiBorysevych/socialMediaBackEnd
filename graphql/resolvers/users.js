const bctypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

module.exports = {
  Mutation: {
    async register(
      parent,
      { register: { username, email, password, confirmPassword } },
      context,
      info
    ) {
      //validate user data
      //Make sure user doesnt already exist
      //create a token
      password = await bctypt.hash(password, 12);

      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
      });

      const res = await newUser.save();

      const token = jwt.sign(
        {
          id: res.id,
          email: res.email,
          username: res.username,
        },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
