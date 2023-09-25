const gql = require("graphql-tag");

const typeDefs = gql`
  type Post {
    id: ID!
    username: String!
    createdAt: String!
    body: String!
    comments: [Comment]!
    likes: [Like]!
  }

  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }

  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }

  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Query {
    getPosts: [Post]
    getPost(postID: ID!): Post
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postID: ID!): String!
    createComment(postID: String!, body: String!): Post!
    deleteComment(postID: ID!, commentID: ID!): Post!
    likePost(postId: ID!): Post!
  }
`;

module.exports = typeDefs;
