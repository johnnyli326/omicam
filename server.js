const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

app.use(express.static('dist'));
app.get('*', (req, res) => {
  const indexHTMLPath = path.join(__dirname, 'dist',
    'index.html');
  res.sendFile(indexHTMLPath);
});
app.listen(port, () => {
  console.log('Example app listening on port 8080!');
});
