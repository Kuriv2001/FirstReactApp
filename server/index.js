const express = require("express");
const countriesRouter = require("./v1/routes/CountriesRouter");

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/api/v1/countries", countriesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});