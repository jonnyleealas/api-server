'use strict';

const core = require('@actions/core');
const github = require('@actions/github');
const server = require('./lib/server');
require('dotenv').config()
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};

mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

server.start(process.env.PORT);


