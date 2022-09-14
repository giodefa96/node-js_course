const express = require("express");
const router = express.Router();
const users = ["coursera", "rhyme"];

router.get("/users", (req, res) => {
    res.send('Say hello to the users')
});
router.post("/users", (req, res) => { // is needed for creating new info
    console.log(req.body);
    res.send("created user")
});
router.get("/users/:id", (req, res) => {

    res.send(users[req.params.id])
});


module.exports = router;