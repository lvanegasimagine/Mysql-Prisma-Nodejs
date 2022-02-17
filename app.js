const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.options('*', cors());

app.use(express.json());

const blogRoutes = require('./routes/blog.routes');

app.use('/post', blogRoutes);

const port = process.env.PORT | 4000;



app.listen(port, () => console.log(`Example app listening on port ${port}!`))