require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 2050,
    SECRET: process.env.SECRET,
    DB_URL: process.env.DB_URL
}