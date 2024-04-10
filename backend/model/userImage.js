const mongoose = require('mongoose')

const UserImgSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true,
    },
    filePath: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
})

module.exports =  mongoose.model('ImageUploder', UserImgSchema)