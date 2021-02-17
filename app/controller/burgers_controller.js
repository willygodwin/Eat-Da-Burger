const express = require('express');
const burger = require('../model/burger');

const router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
//     burger.all((data) => {
//     const hbsObject = {
//       cats: data,
//     };
//     console.log('hbsObject', hbsObject);
//     res.render('index', hbsObject);
//   });
});

router.post('/api/cats', (req, res) => {
//   burger.create(['name', 'sleepy'], [req.body.name, req.body.sleepy], (result) => {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
});

router.put('/api/cats/:id', (req, res) => {
//   const condition = `id = ${req.params.id}`;

//   console.log('condition', condition);

//   burger.update(
//     {
//       devoured: req.body.devoured,
//     },
//     condition,
//     (result) => {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();
//     }
//   );
});

// Export routes for server.js to use.
module.exports = router;
