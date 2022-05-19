const express = require('express'),
  app = express(),
  apiPort = process.env.PORT || 3000,
  cors = require('cors'),
  mongoose = require('mongoose'),
  //Models = require('./api/models/nameModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TokoHijrahDB'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

/*var routes = require('./api/routes/nonameRoutes'); //importing routes
routes(app); //register the route*/

app.get('/test', (req, res) => {
    res.send('Hello World!')
})

app.listen(apiPort, () => console.log(`Server running on port: ${apiPort}`))