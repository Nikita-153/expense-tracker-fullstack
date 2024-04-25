const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        // mongodb://localhost:27017/mydb
        // await mongoose.connect(process.env.MONGO_URL)
        await mongoose.connect("mongodb://localhost:27017/mydb")
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}