const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const db = require("./app/models");
const Role = require("./app/models/role.model");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
        initial();
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

var corsOptions = {
    origin: "http://localhost:8081"
};

app.subscribe(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//     res.json({ message : "Welcome to bazkoder application."});
// });
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/tutorial.routes")(app);

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });
        new Role({
            name: "moderator"
        }).save(err => {
            if (err) {
                console.log("error", err);
            }
            console.log("added 'moderator' to roles collection");
        });

        new Role({
            name: "admin"
        }).save(err => {
            if (err) {
                comsole.log("error", err);
            }

            console.log("added 'admin' to roles collection");
        });
        }
    })
}