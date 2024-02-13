const express = require("express");
const port = process.env.PORT || "3000";
const app = express();
const bodyParser = require("body-parser");

require("./db");
require("./models/UserModel");

const authRoutes = require("./routes/AuthRoutes");
const requiredToken = require("./middlewares/AuthTokenRequired");

app.use(bodyParser.json());
app.use(authRoutes);

app.get("/", requiredToken, (req, res) => {
    res.send(req.user);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});