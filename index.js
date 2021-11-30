const express = require('express');
const bodyParser = require('body-parser');
const gameRouter = require('./routes/game');

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// setup static and middleware

app.use(express.static('./public'));

app.use('/twentyfour', gameRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log('server is listening on port 5000....');
});
