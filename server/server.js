const express = require('express'),
  app = express(),
  apiPort = process.env.PORT || 8000,
  cors = require('cors'),
  mongoose = require('mongoose'),
  AdminRouter = require('./routes/adminRoutes'), //created route loading here
  CartRouter = require('./routes/cartRoutes'), 
  DetailCartRouter = require('./routes/detailCartRoutes'), 
  DetailWishlistRouter = require('./routes/detailWishlistRoutes'), 
  KategoriRouter = require('./routes/kategoriRoutes'), 
  MasukKeluarGudangRouter = require('./routes/masukKeluarGudangRoutes'), 
  OrdersRouter = require('./routes/ordersRoutes'), 
  ProdukRouter = require('./routes/produkRoutes'), 
  UserRouter = require('./routes/userRoutes'), 
  WishlistRouter = require('./routes/wishlistRoutes'), 
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TokoHijrahDB'); 

app.set('view engine', 'ejs')
app.set('views', 'views/pages')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

//db.on('error', console.error.bind(console, 'MongoDB connection error:'))

/*var routes = require('./api/routes/nonameRoutes'); //importing routes
routes(app); //register the route*/

app.get('/', (req, res) => {
    res.render('')
})

app.use('/api', AdminRouter)
app.use('/api', CartRouter)
app.use('/api', DetailCartRouter)
app.use('/api', DetailWishlistRouter)
app.use('/api', KategoriRouter)
app.use('/api', MasukKeluarGudangRouter)
app.use('/api', OrdersRouter)
app.use('/api', ProdukRouter)
app.use('/api', UserRouter)
app.use('/api', WishlistRouter)

app.listen(apiPort, () => console.log(`Server running on port: ${apiPort}`))