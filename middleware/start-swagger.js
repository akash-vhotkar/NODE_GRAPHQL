const  swagger  = require("swagger-ui-express");
const  swaggerdocs  = require('../docs/swagger.json');

module.exports  = (app)=>{
    app.use('/api-docs', swagger.serve , swagger.setup(swaggerdocs));
}