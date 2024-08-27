const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type VehicleDetails {
    make: String
    model: String
    year: Int
  }

  type Ride {
    _id: ID
    departureFrom: String
    arriveTo: String
    seats: Int
    vehicleDetails: VehicleDetails
    fee: Float
  }

  type Booking {
    _id: ID
    user: ID
    ride: Ride
  }

  type Query {
    bookingsByUser(userId: ID!): [Booking]
  }
`;

module.exports = typeDefs;