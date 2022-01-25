import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'

import adminRoutes from './routes/admin/adminRoutes.js';
import userRoutes from './routes/users/userRoutes.js';
import forAllRoutes from './routes/generalRoutes.js';


//framework
const app = express();
dotenv.config();
app.use(cors());

//middlewares
app.use(bodyParser.json({ limit:'30mb', extended:true}));
app.use(bodyParser.urlencoded({ limit:'30mb', extended:true}));

//routers here
app.use('/users', userRoutes);
app.use('/admin', adminRoutes);
app.use('/', forAllRoutes);

//database connection 1
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology:true}, (e) => e? console.log('Database Error: '+ JSON.stringify(e)):console.log('Connected to Library Database!...'));

//server connection
app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}...`));