const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

// Importa los typeDefs y resolvers de Ride y Booking
const rideTypeDefs = require('../graphql/Schemas/rideSchema.js');
const bookingTypeDefs = require('../graphql/Schemas/bookingSchema.js');

const rideResolvers = require('../graphql/Resolvers/rideResolver.js');
const bookingResolvers = require('../graphql/Resolvers/bookingResolver.js');

// Combina los typeDefs y resolvers
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

const typeDefs = mergeTypeDefs([rideTypeDefs, bookingTypeDefs]);
const resolvers = mergeResolvers([rideResolvers, bookingResolvers]);

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  mongoose.connect("mongodb+srv://molinajesus2003:weJyz3uFbpRRcg2M@cluster0.orvrvph.mongodb.net/DB_Aventados", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
