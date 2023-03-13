const oracledb = require('oracledb');
const { dbOnline, dbPrime } = require('./db');
const ErrorHandler = require('./error-handler')

async function get_transactions(req, res) {
    try {
        const connection = await oracledb.getConnection(dbPrime);
        await connection.execute('alter session set current_schema=TCTDBS');
        const { startDate, endDate } = req.body;

        const data = await connection.execute(``, {
            startDate,
            endDate
        });
        await connection.close();
        const rows = data.rows;
        const keys = data.metaData.map(obj => obj.name);

        const result = [];

        rows.forEach(row => {
            const obj = {};
            row.forEach((value, index) => {
                obj[keys[index]] = value;
            });
            result.push(obj);
        });
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

async function get_authorizations(req, res) {
    try {
        const month = {
            "01": "JAN",
            "02": "FEB",
            "03": "MAR",
            "04": "APR",
            "05": "MAY",
            "06": "JUN",
            "07": "JUL",
            "08": "AUG",
            "09": "SEP",
            "10": "OCT",
            "11": "NOV",
            "12": "DEC",
        }

        const connection = await oracledb.getConnection(dbOnline);
        await connection.execute('alter session set current_schema=TCTDBS');
        const { date } = req.body;
        const arrDate = date.split("-");
        const newDate = [arrDate[0], month[arrDate[1]], arrDate[2]].join('-');

        const data = await connection.execute(``, [newDate]);
        await connection.close();
        const rows = data.rows;
        const keys = data.metaData.map(obj => obj.name);

        const result = [];

        rows.forEach(row => {
            const obj = {};
            row.forEach((value, index) => {
                obj[keys[index]] = value;
            });
            result.push(obj);
        });
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { get_transactions, get_authorizations }
