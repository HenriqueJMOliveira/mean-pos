// error.helper.js

/**
 * Error Handler Middleware for the Express router 
 */
module.exports.errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }
    let status = err.status || 500;
    return res.status(status).send({success: false, message: err.message || err, err:err});
};

/**
 * Error formater so it better fits the handler
 * @param {*} err 
 * @param {*} status 
 * @param {*} next 
 */
module.exports.handleError = (err, status, next) => {
    let e = err
    if(e.message){
        e.status = status;
    } else {
        e = {message: err, status: status};
    }
    next(e);
}