const express = require("express");
const colors = require("colors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const connectDb = require("./config/db");
const schema = require("./schema/schema");

const port = process.env.PORT || 5000;

const app = express();

connectDb();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
