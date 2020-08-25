const { User } = require('../models')
const { username } = require('../../config/database')

class UserController {
    create(req, res) {
        return res.render('auth/signup')
    }

    async store(req, res) {
        await user.create(req.body)
        return res.redirect('/')
    }
}

module.exports = new UserController()