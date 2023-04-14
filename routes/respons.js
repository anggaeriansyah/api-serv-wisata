const respons = (statusCode, data, msg, res) => {
    res.status(statusCode).json({
        // payload:{
        cod: statusCode,
        message: msg,
        data: data,
        // }
    })
}

module.exports = respons