const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Booking {
    id: ID!
    user: User!
    ride: Ride!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    bookingsByDriver(driverId: ID!): [Booking!]!
  }
`;

module.exports = typeDefs;
