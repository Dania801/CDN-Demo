let express = require("express");
var cors = require('cors')

let app = express();
app.use(cors());

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/login", (req, res, next) => {
    res.status(200).json({
        message: 'success'
    });
});