const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
require("dotenv").config();

const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});
mongoose.connect(process.env.DB, { useNewUrlParser: true }).then((res) => {
  try {
    server.listen({ port: 5000 }).then((res) => console.log("runnig"));
  } catch (error) {
    console.log(error);
  }
});
