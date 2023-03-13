const ErrorHandler = require('./error-handler')
const validAuthorizations = (req, res, next) => {
    const date = req.body.date;
    if (!date) {
        throw new ErrorHandler(404, { error: 'Not found Date' });
    }
    const dateParts = date.split(/[-/]/);
    if (dateParts.length != 3) {
        throw new ErrorHandler(404, { error: 'Need write with -' })
    }
    const day = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const year = parseInt(dateParts[2]);

    if (!day) {
        throw new ErrorHandler(404, { error: "Write day" })
    }
    if (!month) {
        throw new ErrorHandler(404, { error: "Write month" })
    }
    if (day > 31 || day < 1) {
        throw new ErrorHandler(404, { error: "Write corect day" })
    }
    if (month > 12 || month < 1) {
        throw new ErrorHandler(404, { error: "Write corect month" })
    }
    next()
}
module.exports = validAuthorizations  