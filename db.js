require('dotenv').config();

const dbPrime = {
  user: process.env.PRIMEDB_ORACLE_USER,
  password: process.env.PRIMEDB_ORACLE_PASSWORD,
  connectString: process.env.PRIMEDB_ORACLE_CONNECT_STRING,
};

const dbOnline = {
  user: process.env.ONLINEDB_ORACLE_USER,
  password: process.env.ONLINEDB_ORACLE_PASSWORD,
  connectString: process.env.ONLINEDB_ORACLE_CONNECT_STRING
};

module.exports = { dbPrime, dbOnline }