module.exports = {
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  port: 3010,
  secret: process.env.SECRET,
  isProduction: process.env.NODE_ENV === "production",
};