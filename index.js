const express = require('express');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/usersRoutes');
const busesRoutes = require('./routes/busesRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/buses', busesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
