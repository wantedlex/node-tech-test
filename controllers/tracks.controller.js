const router = require('express').Router();
const TracksREPO = require('../repositories/tracks.repository');

router.get('/', async (req, res) => {
  const {page, limit} = req.query;
  console.log(`Limit ${limit}`);
  console.log(`Page: ${page}`);

  try {
    const tracks = await TracksREPO.list();
    res.status(200).json(tracks).end();
  } catch (error) {
    console.error(error.message);
    console.error(error.stack);

    res.statusCode = 500;
    res.send('An error was occurred on getting tracks');
    res.end();
  }
});
module.exports = router;