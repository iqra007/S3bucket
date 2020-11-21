const express = require ('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {

    res.send({ msg: "Welcome to my Express Server!"});

});

app.listen(PORT, () => console.log(`The server is listening on port ${PORT}`));