const router = require("express").Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');



router.get('/', (req, res)=> {
    // Get all of the notes from DB
    // res.json(`GOT YOUR ${req.method} REQUEST`);
    readFromFile('./db/db.json').then((data) => {
        res.json(JSON.parse(data));
    })
});


router.post('/', (req, res)=> {
    // Add a note to the DB
    //res.json(`GOT YOUR ${req.method} REQUEST`);
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4()
        };

        readAndAppend(newNote, './db/db.json')
        res.json('Your new tip was added!!')
    } else {
        console.log('')
    }
});

module.exports = router;