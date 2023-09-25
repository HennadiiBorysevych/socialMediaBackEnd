const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const gql = require("graphql-tag");
require("dotenv").config();
const typeDefs = gql`
  type Query {
    getPosts
  }
`;
const resolvers = {
  Query: {},
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
mongoose.connect(process.env.DB).then((res) => {
  try {
    server.listen({ port: 5000 }).then((res) => console.log("runnig"));
  } catch (error) {
    console.log(error);
  }
});
