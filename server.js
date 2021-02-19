const express = require('express')
const mongoose = require('mongoose');
const logger = require('morgan');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workoutTracker",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
)

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  