require('dotenv').config()

const dev = {
    app: {
        port: process.env.PORT || 3000 //here port will come from HEROKu or where we will deploy the app
    },
    db: {
        url: process.env.DB_URL || "mongodb://localhost:27017/personalDB"
    }

}

module.exports = dev