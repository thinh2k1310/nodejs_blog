const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/thinh_education_dev');
        console.log('Connect sucessfully!')
    } catch (error) {
        console.log('Connect failure!')
    }
}
module.exports = { connect };