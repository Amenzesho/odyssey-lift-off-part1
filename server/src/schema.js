const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    "Query to get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }

  type Track {
    "A track is a group of modules that teaches about a specific topic"
    id: ID!
    "the track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "the track's main illustration"
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a completer track"
  type Author {
    id: ID!
    "Author's name"
    name: String!
    "Author's photo"
    photo: String
  }
`;

module.exports = typeDefs;
