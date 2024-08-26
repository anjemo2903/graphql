const Ride = require('../Models/rideModel');

const resolvers = {
  Query: {
    rides: async () => {
      try {
        console.log("Buscando rides en la base de datos...");
        const rides = await Ride.find();  // Asegúrate de que `Ride` está importado y configurado correctamente
        console.log("Rides encontrados:", rides);
        return rides;
      } catch (error) {
        console.error("Error al obtener las rides:", error);
        throw new Error("Error al obtener las rides");
      }
    },

    findRides: async (_, { departureFrom, arriveTo }) => {
      try {
        console.log(`Buscando rides desde ${departureFrom} hasta ${arriveTo}...`);
        const rides = await Ride.find({ departureFrom, arriveTo });
        console.log("Rides encontrados:", rides);
        return rides;
      } catch (error) {
        console.error('Error al buscar las rides:', error);
        throw new Error('Error al buscar las rides');
      }
    }
  }
};

module.exports = resolvers;