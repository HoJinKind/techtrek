const Pool = require('pg').Pool;
const config = require('../config/default');

var db_conf = config.development; 

const pool = new Pool({
  user: db_conf.databaseUsername,
  host: db_conf.postgresURI,
  database: db_conf.databaseName,
  password: db_conf.databasePassword,
  port: 5432,
})

module.exports = { pool }