const express = require('express');
const app = express();

require('../middleware/start-server')(app);
require("../middleware/graphql-setup")(app);

require('../middleware/express-setup')(app);
require("../middleware/start-swagger")(app);
require("../middleware/express-router")(app);
