const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  const db = req.app.get("db");

  let { username, password, location } = req.body;

  var salt = bcrypt.genSaltSync(12);
  var hash = bcrypt.hashSync(password, salt);

  let newUser = await db.auth.registerUser(username, hash, location);

  req.session.user = {
    user_id: newUser[0].user_id,
    username: newUser[0].username,
    location: newUser[0].location,
    donation_count: newUser[0].donation_count,
  };

  res.status(200).send(req.session.user);
};

const login = async (req, res) => {
  const db = req.app.get("db");

  let { username, password } = req.body;

  var user = await db.auth.loginUser(username);

  if (user.length !== 0) {
    var areEqual = bcrypt.compareSync(password, user[0].password);
    if (areEqual) {
      let {
        user_id,
        username,
        profile_pic,
        location,
        donation_count,
      } = user[0];

      req.session.user = {
        user_id,
        username,
        profile_pic,
        location,
        donation_count,
      };

      res.status(200).send(req.session.user);
    } else {
      res.status(400).send("Sorry, username or password are incorrect");
    }
  } else {
    res
      .status(400)
      .send("Sorry, we could not find that username in our database.");
  }
};

const logout = (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
};

const editUser = async (req, res) => {
  const db = req.app.get("db");

  let { user_id } = req.session.user;

  let { username, profile_pic, location } = req.body;

  var user = await db.auth.editUser(username, profile_pic, location, user_id);

  req.session.user = {
    user_id,
    username: user[0].username,
    profile_pic: user[0].profile_pic,
    location: user[0].location,
  };

  res.status(200).send(req.session.user);
};

const editPassword = async (req, res) => {
  const db = req.app.get("db");
  
  let { password, user, newPassword } = req.body;

  let checkUser = await db.auth.getUser(user.user_id)

  var salt = bcrypt.genSaltSync(12);
  var hash = bcrypt.hashSync(newPassword, salt);

//   console.log(checkUser)
//   console.log(checkUser[0].password)
//   console.log(hash)
  if (checkUser.length !== 0) {
      console.log(req.body)
      console.log(password, "hit")
    var areEqual = bcrypt.compareSync(password, checkUser[0].password);
    if (areEqual) {
      let userPassword = await db.auth.editUserPassword(hash, user.user_id);
      console.log(userPassword);

      res.sendStatus(200);
    } else{
        console.log("user is not checked")
    }
  }
};

const getUser = (req, res) => {
  res.status(200).send(req.session.user);
};

module.exports = {
  registerUser,
  login,
  logout,
  editUser,
  getUser,
  editPassword,
};
