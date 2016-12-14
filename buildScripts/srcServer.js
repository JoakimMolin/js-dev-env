import express from 'express';
import path from 'path';
import open from'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 4000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware') (compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/users', function(req, res){
  res.json([
    {"id": 1, "firstname": "Joakim", "lastname": "Molin", "email":"joakim.molin@gmail.com"},
    {"id": 2, "firstname": "Helene", "lastname": "Molin", "email":"helene.molin@gmail.com"},
    {"id": 3, "firstname": "Sandra", "lastname": "Molin", "email":"sandra.m.molin@gmail.com"},
    {"id": 4, "firstname": "Martin", "lastname": "Molin", "email":"martinmolin148@gmail.com"}
  ])
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err)
  } else {
    open('http://localhost:' + port)
  }
})
