require("dotenv").config();

const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors');

const config = require("./configs/index");

// const albumRouter = require("./routes/Album");
// const postRouter = require("./routes/Post");
// const photoRouter = require("./routes/Photo");
// const commentRouter = require("./routes/Comment");

// connect to database

// middlewares
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());

// routes
// app.use("/album", albumRouter);
// app.use("/post", postRouter);
// app.use("/photo", photoRouter);
// app.use("/comment", commentRouter);

// catching error
app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;

    return res.status(status).json({
        error: {
            message: error.message
        }
    })
});

// start server
const port = app.get("port") || 3000;
app.listen(port, () => {
    console.log("Server is running on port 3000...");
});