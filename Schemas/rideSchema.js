const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Ride {
    _id: ID!
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
    first_name: String!
    last_name: String!
    email: String!
  }

  type Query {
    rides: [Ride]
    ridesByUser(userId: ID!): [Ride]
    findRides(departureFrom: String!, arriveTo: String!): [Ride]
    searchRides(from: String, to: String, days: [String]): [Ride]
  }
`;

module.exports = typeDefs;
