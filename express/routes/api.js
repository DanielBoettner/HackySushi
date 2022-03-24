const express = require('express');
const router = express.Router();
const storage = require('node-persist');

const { SushiBar } = require('../classes/SushiBar');


/* GET home page. */
router.get('/', function(req, res, next) {
  const bar = new SushiBar();

  res.json({
    seating: bar.printSeating(),
    tables: bar.tables,
    error: "error"
  });
});

router.post('/seatGroup', function(req, res, next) {
    console.log(req);
    const tableId = req.query.tableId;    
    const groupSize = req.query.groupSize;

    res.json({
      message: 'message',
      error: "error"
    });
});

module.exports = router;
