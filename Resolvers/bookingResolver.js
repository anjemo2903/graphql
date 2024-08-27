const Booking = require('../Models/bookingModel.js');
const Ride = require('../Models/rideModel.js');
const User = require('../Models/userModel.js')


const resolvers = {
  Query: {
    bookingsByUser: async (_, { userId }) => {
      try {
        const bookings = await Booking.find({ user: userId }).populate('ride');
        return bookings;
      } catch (error) {
        console.error('Error fetching bookings:', error);
        throw new Error('Error fetching bookings');
      }
    }
  }
};

module.exports = resolvers;
