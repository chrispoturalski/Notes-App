const router = require("express").Router();

router.get('/', (req, res)=> {
    // Get all of the notes from DB
    res.json(`GOT YOUR ${req.method} REQUEST`);
});


router.post('/', (req, res)=> {
    // Add a note to the DB
    res.json(`GOT YOUR ${req.method} REQUEST`);
});

module.exports = router