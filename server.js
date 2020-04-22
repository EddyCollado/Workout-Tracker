const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.envPORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://phat_orbs:password1234@ds251877.mlab.com:51877/heroku_pj89xw0p", { useNewUrlParser: true });

const db = require("./models");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});