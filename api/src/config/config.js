module.exports = {
  development: {
    username: process.env.MYSQL_API_USER,
    password: process.env.MYSQL_API_PASSWORD,
    database: 'music',
    host: process.env.DB_HOST,
    port: 3306,
    dialect: 'mysql',
  },
};
