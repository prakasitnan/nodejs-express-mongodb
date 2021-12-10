const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
} = process.env

module.exports = {
    url:`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
    // url: "mongodb://localhost:27017/bezkoer_db",
    HOST: "localhost",
    PORT: 27017,
    DB: "bezkoder_db"
};