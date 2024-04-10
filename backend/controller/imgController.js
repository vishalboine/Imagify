const UserImgSchema = require('../model/userImage.js')
const { StatusCodes } = require('http-status-codes')



const getCurrentDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    if (hours < 10) {
        hours = '0' +hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    today = dd + '/' + mm + '/' + yyyy + ' ' + hours + ':' + minutes + ':' + seconds;
    return today
}

const createImg = async (req, res, next) => {
    try {
        const images = await UserImgSchema.create({
            filePath: req.file.filename,
            fileName: req.file.originalname,
            date: getCurrentDate() 
        })
        // console.log(images)

        await images.save()

        res.status(StatusCodes.OK).json({ images})
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getImg = async (req, res, next) => {
    try {
        const images = await UserImgSchema.find({})
        res.status(StatusCodes.OK).json({ images })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = { createImg, getImg }
