const Sequelize = require("sequelize");
const config = require("./config");

// const connectDevelopment = new Sequelize(config.development.database, config.development.username, config.development.password, config.development);
const connectDevelopment = new Sequelize(
  config.production.database,
  config.production.username,
  config.production.password,
  config.production
);
const connectPrismaLog = new Sequelize(
  config.prisma_log.database,
  config.prisma_log.username,
  config.prisma_log.password,
  config.prisma_log
);

module.exports = {
  connectDevelopment,
  connectPrismaLog,
};
