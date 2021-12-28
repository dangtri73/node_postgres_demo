const users = require('./users.routes')(app);
const users_company = require('./users-company')(app);

module.exports = {
    users,
    users_company
}