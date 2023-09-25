const postsRes = require("./posts");
const usersRes = require("./users");
const commentsRes = require("./comments");

module.exports = {
  Query: {
    ...postsRes.Query,
  },
  Mutation: {
    ...usersRes.Mutation,
    ...postsRes.Mutation,
    ...commentsRes.Mutation
  },
};
