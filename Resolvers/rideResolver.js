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
    ridesByUser: async(_,{userId}) =>{
      try {
        const rides = await Ride.find({ user: userId }); // Filtra por el ID del usuario
        return rides;
      } catch (error) {
        console.error('Error fetching rides by user:', error);
        throw new Error('Error fetching rides by user');
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
    },
    searchRides: async (_, { from, to, days }) => {
      try {
          const query = {};
          if (from) query.departureFrom = from;
          if (to) query.arriveTo = to;
          if (days && days.length > 0) {
              query.days = { $in: days };
          }
    
          const rides = await Ride.find(query).populate('user'); // Población del campo 'user'
          if (!rides) {
            throw new Error('No rides found');
          }
          return rides;
      } catch (error) {
          console.error('Error al buscar rides:', error);
          throw new Error('Error al buscar rides');
      }
    }
  }
};

module.exports = resolvers;