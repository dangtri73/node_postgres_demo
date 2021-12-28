const users = require('../models').users
const Sequelize = require("sequelize");
const db = require('../models')

    const create = async(req, res, next) => {
        try {   
            let data = await users.create(req.body)
            res.status(200).send(data)
        } catch (error) {
            res.status(400).send(error)
        }
    }

    const update = async(req, res, next) => {
        try {
            const id = req.params.id
    
            let data = await users.update(req.body, {
                where: {id: id}
            })
            res.status(200).send(data)
        } catch (error) {
            res.status(400).send(error)
        }
    }

    const deleted = async(req, res, next) => {
        try {
            const id = req.params.id
    
            let data = await users.destroy(req.body, {
                where: {id: id}
            })
            res.status(200).send(data, 'customer is deleted')
        } catch (error) {
            res.status(400).send(error)
        }
    }

    const findOne = async(req, res, next) => {
        try {
            const id = req.params.id
    
            let data = await users.update(req.body, {
                where: {id: id}
            })
            res.status(200).send(data, 'customer is deleted')
        } catch (error) {
            res.status(400).send(error)
        }
    }

    const getList = async(req, res, next) => {
        try {
            const data = await db.sequelize.query( `select * from users_company`, {type: Sequelize.QueryTypes.SELECT})
            res.status(200).send(data)
            // return data
        } catch (error) {
            res.status(400).send(error)
        }
    }

    module.exports = {
        create,
        update,
        deleted,
        findOne,
        getList
    }