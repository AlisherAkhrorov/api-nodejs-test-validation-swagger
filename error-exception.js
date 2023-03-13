const ErrorHandler = require('./error-handler');
const errorHandler = (err, req, res, next) => {
    if (err instanceof ErrorHandler) {
        res.status(err.status).send(err.message)
    } else {
        res.status(500).send({ error: 'Server error!' })
    }
}
module.exports = errorHandler  