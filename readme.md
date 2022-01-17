SERVER-SIDE: NodeJs, Express, MongoDb
dependencies:
  import express from 'express';
  import mongoose from 'mongoose';
  import bodyParser from 'body-parser';
  import cors from 'cors';
  import dotenv from 'dotenv';

for auth and login/signup:
  import jsonwebtoken from 'jsonwebtoken'
  import bcrypt from 'bcryptjs'; - for password encryption


structure
/Server
  index.js
  .env
  readme
  ./system
    ./auth
      auth
  ./Routes
    generalRoutes
    ./admin
      adminRoutes
    ./users
      userRoutes
  ./dataModel
    userModel
    bookModel
    messagesModel
    adminModel
  ./controllers
    generalController
    ./admin
      adminController
    ./user
      userController


