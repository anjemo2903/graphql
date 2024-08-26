const Booking = require('../Models/bookingModel.js');
const Ride = require('../Models/rideModel.js');

const resolvers = {
  Query: {
    bookingsByDriver: async (_, { driverId }) => {
      try {
        // Encontrar todos los rides creados por el conductor
        const rides = await Ride.find({ user: driverId });

        if (rides.length === 0) {
          throw new Error("No rides found for this driver");
        }

        // Encontrar todos los bookings correspondientes a esos rides
        const bookings = await Booking.find({ ride: { $in: rides.map(ride => ride._id) } })
          .populate('user')
          .populate('ride')
          .exec();

        return bookings;
      } catch (error) {
        console.error("Error fetching bookings:", error);
        throw new Error("Error fetching bookings");
      }
    }
  }
};

module.exports = resolvers;
