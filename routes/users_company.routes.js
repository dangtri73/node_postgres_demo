module.exports = app => {
    const users_company = require('../controllers/users-company')
    let router = require('express').Router()

    router.get('/:id', users_company.findOne);
    router.get('/', users_company.getList)
    router.post('/', users_company.create);
    router.put('/', users_company.update);
    router.delete('/', users_company.deleted);

    app.use('/api/users-company', router);
}