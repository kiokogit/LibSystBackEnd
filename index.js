import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'

import adminRoutes from './routes/admin/adminRoutes.js';
import userRoutes from './routes/users/userRoutes.js';
import forAllRoutes from './routes/generalRoutes.js';

app.use(cors());

//framework
const app = express();
dotenv.config();

//middlewares
app.use(bodyParser.json({ limit:'30mb', extended:true}));
app.use(bodyParser.urlencoded({ limit:'30mb', extended:true}));

//routers here
app.use('/users',cors(), userRoutes);
app.use('/admin',cors(), adminRoutes);
app.use('/',cors(), forAllRoutes);

const MONGO_URI =' mongodb+srv://kiokovincent:kiokokioko@firstcluster.sg8iw.mongodb.net/libSystem?'
//database connection 1
mongoose.connect(process.env.DB_CONNECTION_1||MONGO_URI, { useNewUrlParser: true, useUnifiedTopology:true}, (e) => e? console.log('Database Error: '+ JSON.stringify(e)):console.log('Connected to Library Database!...'));

//server connection
app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}...`));