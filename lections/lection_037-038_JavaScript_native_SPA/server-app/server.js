const express = require("express");

const app = express();
const port = 9001;

app.use((req, res, next) => {
    console.log(req.headers);

    res.setHeader("Access-Control-Allow-Origin", "*"); //('key', 'value')
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT"); //('key', 'value')
    res.setHeader("Access-Control-Allow-Headers", "Content-type");
    res.setHeader("Access-Control-Max-Age", "60");
    res.setHeader("Access-Control-Expose-Headers", "Barrer");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

const IS_AUTH = false;

app.post("/sign-in", (req, res) => {
    if (IS_AUTH) {
        res.status(200).json({ user: 'Valera', message: 'Ok' });
        return;
    }

    res.status(401).json({ message: "User is not defined" });
});



app.listen(port, () => {
    console.log("Started server");
});
