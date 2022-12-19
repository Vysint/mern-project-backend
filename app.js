const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");

const app = express();
app.use(bodyParser.json());

app.use(placesRoutes.router)

app.listen(8080, () => console.log(`Server Running!`));
