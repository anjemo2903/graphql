const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Ride {
    id: ID!
    departureFrom: String!
    arriveTo: String!
    days: Days!
    time: String!
    seats: Int!
    fee: Float!
    vehicleDetails: VehicleDetails!
    user: User!
  }

  type Days {
    mon: Boolean!
    tue: Boolean!
    wed: Boolean!
    thu: Boolean!
    fri: Boolean!
    sat: Boolean!
    sun: Boolean!
  }

  type VehicleDetails {
    make: String!
    model: String!
    year: Int!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    rides: [Ride]
    findRides(departureFrom: String!, arriveTo: String!): [Ride]
  }
`;

module.exports = typeDefs;
