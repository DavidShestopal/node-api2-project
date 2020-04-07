const express = require('express');
const server = express();
const port = 6000;
const postRoutes = require('./routes/postRoutes');

server.use(express.json());

server.use('/api/posts', postRoutes);

server.use('/', (req, res) => {
  res.status(200).send('main route working');
});

server.listen(port, () => console.log(`\n === api on port ${port} ==\n`));
