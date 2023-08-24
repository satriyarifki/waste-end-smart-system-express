const Sequelize = require("sequelize");
const config = require("./config");

// const connectDevelopment = new Sequelize(config.development.database, config.development.username, config.development.password, config.development);
const connectDevelopment = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  config.development
);
const connectPrismaLog = new Sequelize(
  config.prisma_log.database,
  config.prisma_log.username,
  config.prisma_log.password,
  config.prisma_log
);
const connectEmployee = new Sequelize(
  config.aio_employees.database,
  config.aio_employees.username,
  config.aio_employees.password,
  config.aio_employees
);

module.exports = {
  connectDevelopment,
  connectPrismaLog,
  connectEmployee,
};
