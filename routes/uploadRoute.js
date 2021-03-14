const express = require('express')
const app = express()
const upload_file = require('../file_upload')
const upload_image = require('../image_upload')

app.post("/file_upload", (req, res) => {
    upload_file(req, (err, data) => {
  
      if (err) {
        return res.status(404).end(JSON.stringify(err));
      }
  
      res.send(data);
    });
  });
  
  // Image POST handler.
  app.post("/image_upload", (req, res) => {
    upload_image(req, (err, data) => {
  
      if (err) {
        return res.status(404).end(JSON.stringify(err));
      }
  
      res.send(data);
    });
  });

module.exports = app