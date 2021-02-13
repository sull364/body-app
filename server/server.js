const express = require('express');
const path = require('path');
const app = express();

// BODY PARSER
express.json();
express.urlencoded();

// SERVE STATIC FILES FROM THE BUILD FOLDER (WONT SEE THIS FOLDER IN DEV MODE)
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

// SERVE THE index.html FILE
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// ERROR HANDLER FOR ALL ENDPOINTS
app.use((req, res) => res.sendStatus(404)); // 404 NOT FOUND

// =============== GLOBAL ERROR HANDLER =============== //
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

// SEVER WILL RUN ON PORT 8080 WITH 'npm run server'
app.listen(process.env.PORT || 8080);