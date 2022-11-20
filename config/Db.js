const mongoose = require('mongoose');

const config = require('./config');

dbUrl = config.db.url


//synchronously connection--------------------------------------------------------------------------

mongoose
    .connect(dbUrl)
    .then(() => { console.log('databsase is connected synchronously') })
    .catch((error) => {
        console.log(error)
        process.exit(1)            // this database will be stopped if there is any error
    })


// asynchronous connection-------------------------------------------------

// const dbConnect = async () => {
//     try {
//         await mongoose.connect(dbUrl)
//         console.log('database connection established asynchronously')

//     } catch (error) {
//         console.log(error.message)
//         process.exit(1)
//     }
// }

// module.exports = dbConnect

