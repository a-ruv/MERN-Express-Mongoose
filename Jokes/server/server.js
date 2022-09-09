const express = require('express');
const {jokesRouter} = require('./routes/jokes.routes');

const port = 8000;

require('./config/mongoose.config');

const app = express();

app.use(express.json());

app.use('/api/jokes', jokesRouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});