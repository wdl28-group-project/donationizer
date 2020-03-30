const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
    const db = req.app.get('db');

    let { username, password, location } = req.body;

    var salt = bcrypt.genSaltSync(12);
    var hash = bcrypt.hashSync(password, salt);

    await db.auth.registerUser(username, hash, location)

    res.sendStatus(200);

}

const login = async (req, res) => {
    const db = req.app.get('db');

    let { username, password } = req.body;

    var user = await db.auth.loginUser( username );

    if(user.length !== 0){
        var areEqual = bcrypt.compareSync( password, user[0].password );
        if(areEqual){
            let { user_id, username } = user[0];

            req.session.user = {
                user_id,
                username
            }

            res
            .status(200)
            .send('Found user, successfully logged in', req.session.user);
        }else{
            res
            .status(400)
            .send('Sorry, username or password are incorrect');
        }
    }else{
        res
        .status(400)
        .send('Sorry, we could not find that username in our database.');
    }

}

const logout = (req, res) => {
    req.sessions.destroy();
    res.sendStatus(200);
}



module.exports = {
    registerUser,
    login,
    logout
}