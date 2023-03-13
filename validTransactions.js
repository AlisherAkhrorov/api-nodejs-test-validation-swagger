const ErrorHandler = require("./error-handler")

function parseDate(date){
    const day = parseInt(date[0]);
    const month = parseInt(date[1]);
    if (!day) {
        throw new ErrorHandler(404, { error: `Write day` })
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
}

function validTransactions(req, res, next) {
    if (!req.body.startDate || !req.body.endDate) {
        throw new ErrorHandler(400, { error: 'erkaQoravoy' })
    }
    const startDate = req.body.startDate.split('/')
    const endDate = req.body.endDate.split('/')
    try {
        parseDate(startDate);
        parseDate(endDate);
    } catch (error) {
        throw error;
    }

    if (startDate.length != 3 || endDate.length != 3) {
        throw new ErrorHandler(400, { error: 'Need /' })
    }
    next()
}
module.exports = validTransactions 