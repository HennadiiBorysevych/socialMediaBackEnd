const postsRes = require("./posts");
const usersRes = require("./users");
const commentsRes = require("./comments");

module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentsCount: (parent) => parent.comments.length,
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
