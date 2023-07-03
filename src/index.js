const express = require('express');

const app = express();
const { PORT } = require('./constants');

const router = require('./router');

require('./config/hbsConfig')(app);
require('./config/expressConfig')(app);

app.use(router);

app.listen(PORT, () => console.log(`The app is running on port ${PORT}`))