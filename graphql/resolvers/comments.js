const { UserInputError, AuthenticationError } = require("apollo-server");
const Post = require("../../models/Post");
const checkAuth = require("../../utils/checkAuth");

module.exports = {
  Mutation: {
    async createComment(_, { postID, body }, context) {
      const { username } = checkAuth(context);
      if (body.trim() === "") {
        throw UserInputError("Empty comment", {
          errors: {
            body: "Comment body must not be empty",
          },
        });
      }

      const post = await Post.findById(postID);

      if (post) {
        post.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString(),
        });
        await post.save();
        return post;
      } else {
        throw new UserInputError("Post not Found");
      }
    },
    async deleteComment(_, { postID, commentID }, context) {
      const { username } = checkAuth(context);

      const post = await Post.findById(postID);
      if (post) {
        const commentIndex = post.comments.findIndex((c) => c.id === commentID);

        if (post.comments[commentIndex].username === username) {
          post.comments.splice(commentIndex, 1);
          await post.save();
          return post;
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } else {
        throw new UserInputError("Post not found");
      }
    },
  },
};
