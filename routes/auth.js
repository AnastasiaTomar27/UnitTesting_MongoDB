const Users = require('../db/models/user')
const auth = async (req, res, next) => {
    try {
        const user = await Users.findOne(id);
        if (!user)
            throw new Error()
    req.user = user;
    next();
    } catch (err) {
        res.status(400).send({error: "Not authenticated"})
    }
}

module.exports = auth