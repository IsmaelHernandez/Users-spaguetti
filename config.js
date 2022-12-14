require('dotenv').config()

module.exports = {
    api: {
        port: process.env.PORT || 9000
    },
    db: {
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME
    }
}