const express = require('express');
const app = express();
const port = 5000;

app.use('/api/corona', require('./routes/index'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
