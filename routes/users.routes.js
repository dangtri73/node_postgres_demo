module.exports = app => {
    const users = require('../controllers/users')
    let router = require('express').Router()

    router.get('/:id', users.findOne)
    router.get('/', users.getList)
    router.post('/', users.create)
    router.put('/:id', users.update)
    router.delete('/:id', users.deleted)

    app.use('/api/users', router);
}