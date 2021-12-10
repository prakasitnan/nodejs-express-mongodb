const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
const mogoosePaginate = require('mongoose-paginate-v2');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.user = require("./user.model");
db.role = require("./role.model");
db.refreshToken = require("./refreshToken.model");
db.tutorials = require("./tutorial.model.js")(mongoose, mogoosePaginate);

db.ROLES = ["user", "admin", "moderator"];

module.exports =  db;