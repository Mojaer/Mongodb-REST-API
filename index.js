const config = require('./config/config');
const app = require('./app');
const dbConnect = require('./config/Db');

const PORT = config.app.port;


app.listen(PORT, async () => {
    console.log(`this router is running on http://localhost:${PORT}`);


    // await dbConnect() //for asychcronous process
})