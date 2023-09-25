const postsRes = require("./posts");
const usersRes = require("./users");
const commentsRes = require("./comments");

module.exports = {
  Post: {
    likeCount: (parent) => {},
  },
  Query: {
    ...postsRes.Query,
  },
  Mutation: {
    ...usersRes.Mutation,
    ...postsRes.Mutation,
    ...commentsRes.Mutation,
  },
  Subscription: {
    ...postsRes.Subscription,
  },
};
