import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config()
const port = process.env.PORT;
import bodyParser from'body-parser';
import cors from'cors';
import  userRouter from './src/router/user.router.js'
// import swaggerUi from'swagger-ui-express';
// import swaggerDocument from'./swagger.json';
// import cron from('./src/Jobs/index');
// import path from('path');




// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// http://localhost:3000/api-docs/#/

const corsOpts = {
  origin: '*',
  methods: [
    'GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE',
  ],
};

app.use(cors(corsOpts));

app.get('/', (req, res) => {
  res.send('Running');
});

app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
  extended: true
})); 

app.use('/public/images', express.static('public/images'));

//routes
app.use('/api/user',userRouter)



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
