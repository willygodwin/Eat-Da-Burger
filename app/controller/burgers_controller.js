const express = require('express');
const burger = require('../model/burger');
const orm = require('../config/orm');

const router = express.Router();

burger.selectAll();

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.selectAll().then(data => {
        console.log(data)
        const hbsObject = {
            burgers: data,
        };
        console.log('hbsObject', hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    console.log(req.body.name)
    orm.insertOne('burgers', req.body.name).then(result => {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    //   const condition = `id = ${req.params.id}`;
    const id = req.params.id;
    let devoured = req.body.devoured;
    console.log('hey', devoured);
    if (devoured === "true") {
        devoured = true;
    } else {
        devoured = false;
    }
    console.log({ devoured });

    //   console.log(id);
    //   console.log(devoured);


    burger.updateOne(id, devoured).then((result => {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    }))


});

router.delete('/api/burgers/:id', (req, res) => {
    const id = req.params.id;

    burger.deleteOne(id).then((result) => {
       
        res.status(200).end();
    }).catch(err => {
        res.status(400).json({error: err})
    })

});

// Export routes for server.js to use.
module.exports = router;
