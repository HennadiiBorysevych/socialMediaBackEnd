const { ApolloServer } = require("apollo-server");
const { PubSub } = require("graphql-subscriptions");
const mongoose = require("mongoose");
require("dotenv").config();

const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs");

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});
mongoose.connect(process.env.DB, { useNewUrlParser: true }).then((res) => {
  try {
    server.listen({ port: 5000 }).then((res) => console.log("runnig"));
  } catch (error) {
    console.log(error);
  }
});
