require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: null,
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  prisma_log: {
    username: "iot_prod",
    password: "123456",
    database: "prisma_log_amerta",
    host: "192.168.9.47",
    port: "3306",
    dialect: "mysql",
    timezone: "+07:00",
  },
  aio_employees: {
    username: "intern",
    password: "intern",
    database: "aio_employee",
    host: "192.168.9.47",
    port: "3306",
    dialect: "mysql",
  },
};
