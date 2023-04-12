const respons = (statusCode, data, res)=>{
    res.status(statusCode).json({
        // payload:{
           status_code:statusCode,
           data:data,
        // }
    })
}

module.exports = respons